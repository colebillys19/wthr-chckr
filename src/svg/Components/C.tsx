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
      d="M79.851 138.762a8.886 8.886 0 0 1-3.543-.737 37.419 37.419 0 1 1 51.609-26.98 8.883 8.883 0 0 1-2.272 4.378 45.846 45.846 0 0 0-9.387 14.64 37.4 37.4 0 0 0-.568 1.495 8.89 8.89 0 0 1-11.211 5.407 23.185 23.185 0 0 0-1.002-.315l-.019-.007a29.009 29.009 0 0 0-19.967 1.339 8.9 8.9 0 0 1-3.64.78Z"
    />
    <path
      fill="url(#b)"
      d="M78.963 57.475a9.523 9.523 0 0 1-9.27-7.371l-2.217-9.552a9.524 9.524 0 1 1 18.554-4.309l2.223 9.551a9.53 9.53 0 0 1-9.285 11.683l-.005-.002Z"
    />
    <path
      fill="url(#c)"
      d="M43.277 83a9.473 9.473 0 0 1-5.026-1.442l-8.323-5.186a9.526 9.526 0 0 1-.564-15.89 9.522 9.522 0 0 1 10.635-.276l8.323 5.185A9.524 9.524 0 0 1 43.276 83h.001Z"
    />
    <path
      fill="url(#d)"
      d="M26.54 128.5a9.519 9.519 0 0 1-9.462-8.443 9.527 9.527 0 0 1 7.315-10.359l9.55-2.219a9.519 9.519 0 0 1 7.192 1.194 9.52 9.52 0 0 1 4.359 9.642 9.52 9.52 0 0 1-7.24 7.718l-9.552 2.218a9.485 9.485 0 0 1-2.163.249Z"
    />
    <path
      fill="url(#e)"
      d="M122.244 64.659a9.521 9.521 0 0 1-9.513-9.767 9.524 9.524 0 0 1 1.438-4.795l5.186-8.322a9.53 9.53 0 0 1 9.656-4.4 9.525 9.525 0 0 1 6.511 14.472l-5.185 8.323a9.518 9.518 0 0 1-8.093 4.489Z"
    />
    <path
      fill="url(#f)"
      d="M159.03 210.937H95.284a46.623 46.623 0 0 1 0-93.245c2.292-.001 4.58.166 6.847.498a63.853 63.853 0 0 1 54.359-34.894 63.848 63.848 0 0 1 66.404 62.523 63.845 63.845 0 0 1-63.864 65.115v.003Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={39.221}
        x2={146.396}
        y1={242.047}
        y2={-44.24}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.06} stopColor="#FF6800" />
        <stop offset={1} stopColor="#FFF100" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={7.814}
        x2={114.988}
        y1={230.289}
        y2={-55.999}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.06} stopColor="#FF6800" />
        <stop offset={1} stopColor="#FFF100" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={-17.065}
        x2={90.11}
        y1={220.977}
        y2={-65.311}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.06} stopColor="#FF6800" />
        <stop offset={1} stopColor="#FFF100" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={-8.477}
        x2={98.698}
        y1={224.192}
        y2={-62.096}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.06} stopColor="#FF6800" />
        <stop offset={1} stopColor="#FFF100" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={51.583}
        x2={158.757}
        y1={246.675}
        y2={-39.613}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.06} stopColor="#FF6800" />
        <stop offset={1} stopColor="#FFF100" />
      </linearGradient>
      <linearGradient
        id="f"
        x1={48.66}
        x2={222.846}
        y1={147.121}
        y2={147.121}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#69BBFF" />
        <stop offset={1} stopColor="#9DE0F4" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgComponent;
