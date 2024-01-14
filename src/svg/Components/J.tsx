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
      d="M53.288 139.878c-.298 0-.598-.014-.901-.043a43.66 43.66 0 0 1-39.513-45.537 43.662 43.662 0 0 1 43.644-41.594c1.793 0 3.586.11 5.366.327a59.237 59.237 0 0 1 105.959 2.677 9.516 9.516 0 0 1-.56 9.108 9.516 9.516 0 0 1-7.963 4.457 48.38 48.38 0 0 0-44.993 32 9.523 9.523 0 0 1-12.001 5.807 30.24 30.24 0 0 0-25.578 2.961 30.253 30.253 0 0 0-14.031 21.59 9.526 9.526 0 0 1-9.428 8.247Z"
    />
    <path
      fill="url(#b)"
      d="M166.146 183.841c9.13 0 17.681-1.744 25.415-5.186a56.043 56.043 0 0 0 19.537-14.43c5.256-6.011 9.318-13.134 12.075-21.168 2.707-7.889 4.08-16.446 4.08-25.435a67.362 67.362 0 0 0-19.73-47.674 67.366 67.366 0 0 0-47.676-19.726H159.118a66.952 66.952 0 0 0-38.73 12.75 67.653 67.653 0 0 0-20.583 24.002 49.756 49.756 0 0 0-7.13-.508 49.282 49.282 0 0 0 0 98.565l73.471-1.19Z"
    />
    <path
      fill="url(#c)"
      d="m162.986 183.892-.593-10.89-25.082 4.113-5.868-35.983-28.614 43.728 60.157-.968Z"
      opacity={0.1}
    />
    <path
      fill="url(#d)"
      d="m131.443 141.132-21.7 44.212c-.686 1.396.438 2.974 2.119 2.974h21.068c1.251 0 2.277.902 2.32 2.04l.964 25.989c.083 2.236 3.429 2.834 4.445.792l21.741-44.137c.68-1.382-.412-2.947-2.075-2.976l-21.539-.371c-1.245-.022-2.249-.934-2.276-2.066l-.621-25.643c-.061-2.253-3.436-2.873-4.446-.814Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={12.854}
        x2={168.744}
        y1={80.734}
        y2={80.734}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#69BBFF" />
        <stop offset={1} stopColor="#1798FF" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={43.391}
        x2={227.247}
        y1={117.623}
        y2={117.623}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#69BBFF" />
        <stop offset={1} stopColor="#9DE0F4" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={102.101}
        x2={176.88}
        y1={225.556}
        y2={121.057}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1E2121" />
        <stop offset={1} stopColor="#1E2121" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="d"
        x1={94.907}
        x2={183.569}
        y1={236.626}
        y2={112.725}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.06} stopColor="#FF6800" />
        <stop offset={1} stopColor="#FFF100" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgComponent;
