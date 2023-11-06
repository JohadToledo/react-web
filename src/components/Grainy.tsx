import React from "react";

type GrainProps = {
  baseFrequency?: string;
  numOctaves?: number;
  w?: number | string;
  h?: number | string;
  svgBorderRadius?: string;
};

const Grain: React.FC<GrainProps> = ({
    baseFrequency = "7",
    numOctaves = 3,
    w = "100%",
    h = "100%",
    svgBorderRadius = "0"
}) => {
    const viewBox = "0 0 300 300";

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={w}
            height={h}
            opacity={.23}
            viewBox={viewBox}
            preserveAspectRatio="none"
            style={{ borderRadius: svgBorderRadius }}
        >
            <filter id="noiseFilter">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency={baseFrequency}
                    numOctaves={numOctaves}
                />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
    );
};

export default Grain;