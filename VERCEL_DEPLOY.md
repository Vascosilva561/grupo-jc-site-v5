# Publicação na Vercel

O site público e o CMS vivem no mesmo projeto: depois do deploy, o CMS estará em `/admin`.

1. Crie uma base **Postgres** na Neon e execute `db/migrations/0000_vercel_postgres.sql` no SQL Editor da Neon.
2. Crie um projeto na Vercel importando este repositório Git. O comando de build é `npm run build`.
3. Em **Settings → Environment Variables**, copie os valores de `.env.example`. Ao criar um Blob Store no separador **Storage**, a Vercel cria automaticamente `BLOB_READ_WRITE_TOKEN`.
4. Faça o primeiro deploy e abra `/admin/setup`. Use o valor de `CMS_SETUP_TOKEN` para criar o primeiro administrador. Em seguida, remova `CMS_SETUP_TOKEN` das variáveis de ambiente e faça um novo deploy.
5. Defina o domínio e atualize `NEXT_PUBLIC_SITE_URL` com a URL definitiva. No plano Hobby, o cron publica posts agendados uma vez por dia; para publicação a cada 15 minutos, é necessário o plano Pro.

Para migrar conteúdo existente do D1, exporte as tabelas `categories`, `posts` e `cms_profiles`, converta as datas para formato ISO/timestamp e importe-as na Neon antes de apontar o domínio para a Vercel.

O ficheiro SQL prepara uma base nova. Não o execute numa base que já contenha estas tabelas.
