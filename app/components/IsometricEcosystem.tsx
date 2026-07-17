import type { CSSProperties } from "react";
import { companies } from "../data";

const companyCubes = [
  { x: 170, y: 138, width: 76, height: 44, depth: 36 },
  { x: 830, y: 138, width: 76, height: 44, depth: 36 },
  { x: 105, y: 360, width: 76, height: 44, depth: 36 },
  { x: 895, y: 360, width: 76, height: 44, depth: 36 },
  { x: 245, y: 592, width: 76, height: 44, depth: 36 },
  { x: 755, y: 592, width: 76, height: 44, depth: 36 },
];

const connections = [
  "M 220 180 L 296 224 L 342 198 L 430 249 L 500 289",
  "M 780 180 L 704 224 L 658 198 L 570 249 L 500 289",
  "M 172 370 L 276 430 L 350 387 L 405 419",
  "M 828 370 L 724 430 L 650 387 L 595 419",
  "M 304 590 L 375 549 L 430 581 L 500 541 L 500 486",
  "M 696 590 L 625 549 L 570 581 L 500 541 L 500 486",
];

type CubeProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  depth: number;
  logo: string;
  central?: boolean;
  index: number;
};

function Cube({ x, y, width, height, depth, logo, central = false, index }: CubeProps) {
  const topFill = central ? "#111827" : "#ffffff";
  const leftFill = central ? "#080d17" : "#a9d3f7";
  const rightFill = central ? "#253044" : "#78b9f2";
  const outline = central ? "#111827" : "#344054";
  const logoInset = central ? { x: 0.16, y: 0.31, width: 0.68, height: 0.38 } : { x: 0.15, y: 0.25, width: 0.7, height: 0.5 };
  const style = { "--cube-delay": `${0.18 + index * 0.08}s` } as CSSProperties;

  return (
    <g className={`svg-cube ${central ? "svg-cube--central" : ""}`} transform={`translate(${x} ${y})`} style={style}>
      <path
        className="svg-cube__shadow"
        d={`M ${-width + 18} ${depth + 10} L 18 ${height + depth + 10} L ${width + 30} ${depth + 3} L 28 ${height + depth + 3} Z`}
      />
      <polygon
        points={`${-width},0 0,${height} 0,${height + depth} ${-width},${depth}`}
        fill={leftFill}
        stroke={outline}
      />
      <polygon
        points={`0,${height} ${width},0 ${width},${depth} 0,${height + depth}`}
        fill={rightFill}
        stroke={outline}
      />
      <polygon
        points={`0,${-height} ${width},0 0,${height} ${-width},0`}
        fill={topFill}
        stroke={outline}
      />
      <polygon
        className="svg-cube__top-inset"
        points={`0,${-height * 0.76} ${width * 0.76},0 0,${height * 0.76} ${-width * 0.76},0`}
      />
      <g transform={`matrix(${width} ${height} ${-width} ${height} 0 ${-height})`}>
        <image
          href={logo}
          x={logoInset.x}
          y={logoInset.y}
          width={logoInset.width}
          height={logoInset.height}
          preserveAspectRatio="xMidYMid meet"
        />
      </g>
    </g>
  );
}

export function IsometricEcosystem() {
  return (
    <div className="ecosystem-stage">
      <svg
        className="isometric-graphic"
        viewBox="0 0 1000 720"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Empresas ligadas em perspetiva isométrica ao cubo central do Grupo JC"
      >
        <defs>
          <pattern id="iso-grid" width="72" height="42" patternUnits="userSpaceOnUse">
            <path d="M 0 21 L 36 0 L 72 21 L 36 42 Z" fill="none" stroke="#98a2b3" strokeWidth="0.65" />
          </pattern>
          <radialGradient id="grid-fade">
            <stop offset="20%" stopColor="white" />
            <stop offset="78%" stopColor="white" stopOpacity=".28" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="grid-mask"><rect width="1000" height="720" fill="url(#grid-fade)" /></mask>
          <filter id="blue-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <rect className="isometric-grid" width="1000" height="720" fill="url(#iso-grid)" mask="url(#grid-mask)" />

        <g className="network-map">
          {connections.map((connection, index) => {
            const pulseStyle = { "--pulse-delay": `${2 + index * 0.09}s` } as CSSProperties;
            return (
              <g key={connection} style={pulseStyle}>
                <path className="network-line network-line--base" d={connection} pathLength={1} />
                <path className="network-line network-line--pulse" d={connection} pathLength={1} />
              </g>
            );
          })}
          <ellipse className="network-core-halo" cx="500" cy="492" rx="128" ry="50" />
        </g>

        {companies.map((company, index) => (
          <Cube key={company.slug} {...companyCubes[index]} logo={company.logo} index={index} />
        ))}

        <Cube
          central
          x={500}
          y={340}
          width={122}
          height={70}
          depth={122}
          logo="/brand/grupo-jc-white.svg"
          index={6}
        />
      </svg>
    </div>
  );
}
