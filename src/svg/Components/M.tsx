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
      d="M169.768 137.216h-61.397a45.865 45.865 0 1 1 0-91.728c2.025 0 4.049.132 6.057.396a62.45 62.45 0 1 1 55.34 91.332Z"
    />
    <path
      fill="url(#b)"
      d="M113.537 165.656H33.94c-14.303 0-25.94-11.637-25.94-25.94 0-14.304 11.637-25.942 25.94-25.942a25.964 25.964 0 0 1 19.453 8.778 9.532 9.532 0 0 1 2.365 6.895 9.527 9.527 0 0 1-10.098 8.914 9.527 9.527 0 0 1-6.548-3.203 6.813 6.813 0 0 0-5.172-2.336 6.891 6.891 0 0 0-6.8 6.893 6.893 6.893 0 0 0 6.8 6.893h79.597a9.525 9.525 0 0 1 0 19.048Z"
    />
    <path
      fill="url(#c)"
      d="M98.608 227.607c-14.303 0-25.941-11.639-25.941-25.942 0-14.304 11.638-25.94 25.941-25.94h93.106a9.525 9.525 0 0 1 6.735 16.258 9.525 9.525 0 0 1-6.735 2.789H98.608a6.9 6.9 0 0 0-6.454 4.234 6.89 6.89 0 0 0 3.787 9.055 6.9 6.9 0 0 0 2.667.498 6.817 6.817 0 0 0 5.172-2.337 9.542 9.542 0 0 1 2.956-2.253 9.518 9.518 0 0 1 12.742 4.37 9.527 9.527 0 0 1-1.415 10.489 25.956 25.956 0 0 1-19.455 8.779Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={71.099}
        x2={223.52}
        y1={165.549}
        y2={7.357}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#69BBFF" />
        <stop offset={1} stopColor="#9DE0F4" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={127.214}
        x2={37.299}
        y1={68.188}
        y2={180.221}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#69BBFF" />
        <stop offset={1} stopColor="#1798FF" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={192.882}
        x2={102.968}
        y1={120.892}
        y2={232.925}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#69BBFF" />
        <stop offset={1} stopColor="#1798FF" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgComponent;
