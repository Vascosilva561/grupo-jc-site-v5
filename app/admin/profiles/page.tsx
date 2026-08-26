import { Edit3, Plus, Trash2, UserMinus } from "lucide-react";
import { asc } from "drizzle-orm";
import { getDb } from "../../../db";
import { cmsProfiles } from "../../../db/schema";
import { AdminLayout } from "../AdminLayout";
import { requireCmsAdmin } from "../auth";
import { CmsModal } from "../components/CmsModal";
import { CmsSelect } from "../components/CmsSelect";
import { DeleteConfirmModal } from "../components/DeleteConfirmModal";
import { PasswordField } from "../components/PasswordField";
import { createProfile, deleteProfile, toggleProfile, updateProfile } from "../taxonomy-actions";

export const dynamic = "force-dynamic";

const roleOptions = [
  { value: "editor", label: "✍️ Editor" },
  { value: "admin", label: "🛡️ Administrador" },
];

const statusOptions = [
  { value: "active", label: "🟢 Ativo" },
  { value: "inactive", label: "⚪ Inativo" },
];

function Fields({
  profile,
}: {
  profile?: { name: string; email: string; role: string; status: string };
}) {
  return (
    <>
      <div className="cms-field-block">
        <label className="cms-field-label">
          Nome completo <span className="cms-required-dot">*</span>
        </label>
        <input
          name="name"
          defaultValue={profile?.name}
          required
          placeholder="Ex: Ana Silva"
          className="cms-text-input"
        />
      </div>

      <div className="cms-field-block">
        <label className="cms-field-label">
          Endereço de E-mail <span className="cms-required-dot">*</span>
        </label>
        <input
          name="email"
          type="email"
          defaultValue={profile?.email}
          required
          placeholder="ana.silva@grupojc.ao"
          className="cms-text-input"
        />
      </div>

      <div className="cms-field-block">
        <label className="cms-field-label">
          Palavra-passe {profile ? <span className="cms-optional-text">(deixe em branco para manter)</span> : <span className="cms-required-dot">*</span>}
        </label>
        <PasswordField required={!profile} placeholder={profile ? "Deixe em branco para manter a atual" : "Mínimo 12 caracteres"}/>
      </div>

      <CmsSelect
        label="Função no sistema"
        name="role"
        defaultValue={profile?.role ?? "editor"}
        options={roleOptions}
      />

      <CmsSelect
        label="Estado da conta"
        name="status"
        defaultValue={profile?.status ?? "active"}
        options={statusOptions}
      />
    </>
  );
}

export default async function ProfilesPage() {
  const user = await requireCmsAdmin();
  const db = await getDb();
  const all = await db.select().from(cmsProfiles).orderBy(asc(cmsProfiles.name));

  return (
    <AdminLayout userName={user.displayName} role={user.role} active="/admin/profiles">
      <header className="cms-top">
        <div>
          <p>Equipa</p>
          <h1>Perfis</h1>
        </div>
        <CmsModal
          title="Adicionar perfil"
          trigger={
            <>
              <Plus size={17} /> Novo perfil
            </>
          }
        >
          <form action={createProfile} className="cms-modal-form">
            <Fields />
            <div className="cms-modal-actions">
              <button className="cms-btn-primary">Adicionar perfil</button>
            </div>
          </form>
        </CmsModal>
      </header>

      <div className="cms-table cms-table--profiles">
        <div className="cms-table__head cms-table__head--profiles">
          <div className="cms-col cms-col--profile-info">Perfil</div>
          <div className="cms-col cms-col--profile-role">Função</div>
          <div className="cms-col cms-col--profile-status">Estado</div>
          <div className="cms-col cms-col--actions">Ações</div>
        </div>
        {all.map((profile) => (
          <div className="cms-table__row cms-table__row--profiles" key={profile.id}>
            <div className="cms-col cms-col--profile-info">
              <strong>
                {profile.name}
                <small>{profile.email}</small>
              </strong>
            </div>
            <div className="cms-col cms-col--profile-role">
              <span className="cms-role-badge">
                {profile.role === "admin" ? "Administrador" : "Editor"}
              </span>
            </div>
            <div className="cms-col cms-col--profile-status">
              <em className={`cms-pill cms-pill--${profile.status}`}>
                {profile.status === "active" ? "🟢 Ativo" : "⚪ Inativo"}
              </em>
            </div>
            <div className="cms-col cms-col--actions">
              <div className="cms-actions">
                <CmsModal title="Editar perfil" trigger={<Edit3 size={16} />}>
                  <form
                    action={updateProfile.bind(null, profile.id)}
                    className="cms-modal-form"
                  >
                    <Fields profile={profile} />
                    <div className="cms-modal-actions">
                      <button className="cms-btn-primary">Guardar alterações</button>
                    </div>
                  </form>
                </CmsModal>
                <form
                  action={toggleProfile.bind(
                    null,
                    profile.id,
                    profile.status === "active" ? "inactive" : "active"
                  )}
                >
                  <button
                    className="cms-icon-button"
                    title={profile.status === "active" ? "Desativar" : "Ativar"}
                  >
                    <UserMinus size={16} />
                  </button>
                </form>
                <DeleteConfirmModal
                  title="Eliminar perfil"
                  description={<>Esta ação elimina o perfil <strong>"{profile.name}"</strong> permanentemente. A conta não poderá ser recuperada.</>}
                  buttonLabel="Eliminar perfil"
                  action={deleteProfile.bind(null, profile.id)}
                  trigger={<Trash2 size={16} />}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
