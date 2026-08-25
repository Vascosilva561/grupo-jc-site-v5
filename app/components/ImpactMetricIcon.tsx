export type ImpactMetricIconName = "team" | "graduate" | "intern" | "product" | "clients" | "partners" | "transactions" | "regions";

type ImpactMetricIconProps = {
  name: ImpactMetricIconName;
};

export function ImpactMetricIcon({ name }: ImpactMetricIconProps) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  const icons = {
    team: <><circle cx="12" cy="8" r="3" {...common} /><circle cx="5" cy="11" r="2.2" {...common} /><circle cx="19" cy="11" r="2.2" {...common} /><path d="M6.8 20v-1.6a5.2 5.2 0 0 1 10.4 0V20M1.8 20v-1a4 4 0 0 1 3.7-4M22.2 20v-1a4 4 0 0 0-3.7-4" {...common} /></>,
    graduate: <><path d="m2.5 9.5 9.5-5 9.5 5-9.5 5-9.5-5Z" {...common} /><path d="M6 11.4v4.3c2.7 2.4 9.3 2.4 12 0v-4.3M21.5 10v6" {...common} /><circle cx="21.5" cy="17.5" r="1" fill="currentColor" /></>,
    intern: <><path d="M8 4h8v4H8zM6 8h12v12H6z" {...common} /><path d="M10 12h4M10 16h2" {...common} /><path d="m18 5 2 2 3-3" {...common} /></>,
    product: <><rect x="4" y="4" width="16" height="16" rx="2" {...common} /><path d="M8 12h8M12 8v8" {...common} /><path d="M12 1v1.5M12 21.5V23M1 12h1.5M21.5 12H23" {...common} /></>,
    clients: <><path d="M3 20v-1.5a4.5 4.5 0 0 1 4.5-4.5h9a4.5 4.5 0 0 1 4.5 4.5V20" {...common} /><circle cx="12" cy="7" r="3.5" {...common} /><path d="M6.2 3.5 4.6 2M17.8 3.5 19.4 2M3 9H1M23 9h-2" {...common} /></>,
    partners: <><path d="M8.5 8.5 11 6a2.8 2.8 0 0 1 4 0l1 1M8.5 8.5l-2.8 2.8a2.2 2.2 0 0 0 0 3.1l3.9 3.9a2.2 2.2 0 0 0 3.1 0l1.1-1.1M8.5 8.5l4.2 4.2a2.2 2.2 0 0 0 3.1 0l2.5-2.5M16 7l2.3-2.3a2.2 2.2 0 0 1 3.1 0l1 1a2.2 2.2 0 0 1 0 3.1L19 12.2" {...common} /></>,
    transactions: <><path d="M4 7h13M14 3l4 4-4 4M20 17H7M10 13l-4 4 4 4" {...common} /><circle cx="12" cy="12" r="9.5" {...common} /></>,
    regions: <><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" {...common} /><circle cx="12" cy="10" r="2.5" {...common} /><path d="M2 22h20" {...common} /></>,
  };

  return <svg className="impact-metric-icon" viewBox="0 0 24 24" aria-hidden="true">{icons[name]}</svg>;
}
