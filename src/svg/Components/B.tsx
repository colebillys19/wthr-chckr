import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={240}
    height={240}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M115.285 212.894a92.973 92.973 0 0 1-82.456-49.967 9.524 9.524 0 0 1 9.837-13.833 52.45 52.45 0 0 0 7.676.564c13.841 0 26.867-5.393 36.66-15.185 9.793-9.791 15.185-22.812 15.185-36.661a51.827 51.827 0 0 0-26.653-45.325 9.524 9.524 0 0 1 .625-16.956c12.303-5.714 25.468-8.61 39.126-8.61a92.988 92.988 0 0 1 65.752 158.738 92.99 92.99 0 0 1-65.752 27.235Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={37.44}
        x2={212.535}
        y1={304.552}
        y2={-61.039}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.7} stopColor="#FFE88A" />
        <stop offset={1} stopColor="#FFE4C5" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgComponent;
