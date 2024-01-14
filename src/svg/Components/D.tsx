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
      d="M39.584 130.258a9.492 9.492 0 0 1-6.668-2.723 56.183 56.183 0 0 1-16.896-40.22c0-1.617.07-3.253.21-4.866a9.522 9.522 0 0 1 13.586-7.782 21.6 21.6 0 0 0 9.367 2.108c12.021 0 21.802-9.778 21.802-21.803.011-3.423-.792-6.8-2.344-9.85a9.524 9.524 0 0 1 7.443-13.778A57.115 57.115 0 0 1 72.336 31a56.348 56.348 0 0 1 54.058 40.488 9.52 9.52 0 0 1-4.738 11.117 56.871 56.871 0 0 0-27.174 31.111 9.522 9.522 0 0 1-12.001 5.806 35.998 35.998 0 0 0-36.306 8.096 9.493 9.493 0 0 1-6.591 2.64Z"
    />
    <path
      fill="url(#b)"
      d="M118.657 55.28a56.602 56.602 0 0 0-5.325-6.572 90.38 90.38 0 0 0-7.53 3.497 91.341 91.341 0 0 0-34.286 31.162h-.508a69.9 69.9 0 0 0-48.543 19.475 69.645 69.645 0 0 0-3.221 3.294 56.296 56.296 0 0 0 1.318 3.366 56.093 56.093 0 0 0 12.354 18.032 9.524 9.524 0 0 0 13.25.081 36.002 36.002 0 0 1 36.307-8.096 9.522 9.522 0 0 0 12-5.806 56.873 56.873 0 0 1 27.176-31.11 9.523 9.523 0 0 0 4.737-11.118 56.058 56.058 0 0 0-7.729-16.205Z"
      opacity={0.1}
    />
    <path
      fill="url(#c)"
      d="M147.804 208.565H71.002a54.97 54.97 0 0 1-44.05-87.892A55.555 55.555 0 0 1 33 113.847a54.732 54.732 0 0 1 38.002-15.243c2.99-.001 5.974.24 8.925.721a76.046 76.046 0 0 1 32.92-33.609 75.712 75.712 0 0 1 96.086 22.385 75.715 75.715 0 0 1-61.129 120.464Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={11.799}
        x2={128.71}
        y1={162.457}
        y2={-1.578}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.7} stopColor="#FFE88A" />
        <stop offset={1} stopColor="#FFE4C5" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={17.184}
        x2={90.169}
        y1={187.8}
        y2={61.805}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1E2121" />
        <stop offset={1} stopColor="#1E2121" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="c"
        x1={16.02}
        x2={223.501}
        y1={132.872}
        y2={132.872}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#69BBFF" />
        <stop offset={1} stopColor="#9DE0F4" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgComponent;
