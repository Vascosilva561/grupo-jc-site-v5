import type { CSSProperties } from "react";
import { companies } from "../data";

const cubePositions = [
  { x: "19%", y: "18%" },
  { x: "81%", y: "18%" },
  { x: "14%", y: "50%" },
  { x: "86%", y: "50%" },
  { x: "28%", y: "80%" },
  { x: "72%", y: "80%" },
];

const connections = [
  { d: "M 190 185 L 335 310 L 484 440", x: 190, y: 185 },
  { d: "M 810 185 L 665 310 L 516 440", x: 810, y: 185 },
  { d: "M 145 455 L 335 455 L 484 455", x: 145, y: 455 },
  { d: "M 855 455 L 665 455 L 516 455", x: 855, y: 455 },
  { d: "M 275 735 L 380 645 L 490 485", x: 275, y: 735 },
  { d: "M 725 735 L 620 645 L 510 485", x: 725, y: 735 },
];

function Cube({ logo, name, position, central = false, index = 0 }: {
  logo: string;
  name: string;
  position: { x: string; y: string };
  central?: boolean;
  index?: number;
}) {
  const style = {
    "--cube-x": position.x,
    "--cube-y": position.y,
    "--cube-delay": `${0.18 + index * 0.08}s`,
  } as CSSProperties;

  return (
    <div className={`iso-cube ${central ? "iso-cube--central" : ""}`} style={style} aria-hidden="true">
      <span className="iso-cube__shadow" />
      <span className="iso-cube__face iso-cube__face--left" />
      <span className="iso-cube__face iso-cube__face--right" />
      <span className="iso-cube__face iso-cube__face--top"><img src={logo} alt="" /></span>
      <span className="iso-cube__name">{name}</span>
    </div>
  );
}

export function IsometricEcosystem() {
  return (
    <div
      className="ecosystem-stage ecosystem-stage--isometric"
      role="img"
      aria-label="As seis empresas do Grupo JC ligadas em perspetiva isométrica ao cubo central do grupo"
    >
      <div className="isometric-world">
        <div className="isometric-plane" aria-hidden="true" />
        <svg className="network-lines" viewBox="0 0 1000 900" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <filter id="blue-glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          {connections.map((connection, index) => {
            const pulseStyle = { "--pulse-delay": `${2 + index * 0.09}s` } as CSSProperties;
            return (
              <g key={connection.d} style={pulseStyle}>
                <path className="network-line network-line--base" d={connection.d} pathLength={1} />
                <path className="network-line network-line--pulse" d={connection.d} pathLength={1} />
                <circle className="network-source" cx={connection.x} cy={connection.y} r="8" />
              </g>
            );
          })}
          <circle className="network-core-halo" cx="500" cy="455" r="72" />
        </svg>

        {companies.map((company, index) => (
          <Cube
            key={company.slug}
            logo={company.logo}
            name={company.name}
            position={cubePositions[index]}
            index={index}
          />
        ))}

        <Cube
          central
          logo="/brand/grupo-jc-white.svg"
          name="Grupo JC"
          position={{ x: "50%", y: "50%" }}
          index={6}
        />
      </div>
      <span className="stage-label stage-label--top">Ecossistema integrado</span>
      <span className="stage-label stage-label--bottom">Uma visão comum · diferentes forças</span>
    </div>
  );
}
