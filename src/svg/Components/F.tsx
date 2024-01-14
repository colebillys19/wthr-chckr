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
      d="M53.288 156.514c-.298 0-.598-.014-.901-.042a43.664 43.664 0 0 1-26.023-75.076A43.663 43.663 0 0 1 56.517 69.34c1.794 0 3.586.109 5.367.327a59.234 59.234 0 0 1 105.959 2.678 9.53 9.53 0 0 1-.559 9.109 9.525 9.525 0 0 1-7.964 4.457 48.38 48.38 0 0 0-44.993 32 9.525 9.525 0 0 1-12.001 5.805 30.255 30.255 0 0 0-35.005 12.188 30.255 30.255 0 0 0-4.604 12.362 9.52 9.52 0 0 1-9.429 8.248Z"
    />
    <path
      fill="url(#b)"
      d="M159.846 201.658H92.671a49.241 49.241 0 0 1-49.282-49.282 49.327 49.327 0 0 1 56.416-48.77 67.425 67.425 0 0 1 59.313-36.743H159.846a67.398 67.398 0 0 1 47.658 115.058 67.397 67.397 0 0 1-47.658 19.741v-.004Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={147.532}
        x2={52.945}
        y1={-49.645}
        y2={185.467}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#69BBFF" />
        <stop offset={1} stopColor="#1798FF" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={43.392}
        x2={227.245}
        y1={134.259}
        y2={134.259}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#69BBFF" />
        <stop offset={1} stopColor="#9DE0F4" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgComponent;
