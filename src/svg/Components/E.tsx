import { SVGProps } from 'react';

type SvgComponentPropsType = SVGProps<SVGSVGElement>;

const SvgComponent = ({ width, height }: SvgComponentPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
  >
    <path
      fill="url(#a)"
      d="M152.973 207.083H62.941a62.818 62.818 0 0 1-58.033-86.852 62.817 62.817 0 0 1 58.033-38.776c3.824-.001 7.64.344 11.4 1.034a87.408 87.408 0 0 1 27.998-33.377c14.832-10.613 32.34-16.223 50.634-16.223a87.097 87.097 0 0 1 0 174.194Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={57.297}
        x2={226.963}
        y1={199.959}
        y2={30.292}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#69BBFF" />
        <stop offset={1} stopColor="#9DE0F4" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgComponent;
