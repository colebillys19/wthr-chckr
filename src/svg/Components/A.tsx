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
      d="M120 168.371a48.255 48.255 0 1 1 18.832-3.809A48.061 48.061 0 0 1 120 168.371Z"
    />
    <path
      fill="url(#b)"
      d="M120 55.8a9.524 9.524 0 0 1-9.523-9.524V24.253a9.523 9.523 0 1 1 19.047 0v22.023A9.524 9.524 0 0 1 120 55.8Z"
    />
    <path
      fill="url(#c)"
      d="M67.87 77.393a9.498 9.498 0 0 1-6.73-2.794L45.564 59.031a9.524 9.524 0 0 1 13.468-13.468l15.573 15.572a9.524 9.524 0 0 1-6.73 16.254l-.005.004Z"
    />
    <path
      fill="url(#d)"
      d="M46.277 129.523H24.254a9.524 9.524 0 1 1 0-19.047h22.023a9.524 9.524 0 1 1 0 19.047Z"
    />
    <path
      fill="url(#e)"
      d="M52.298 197.226a9.522 9.522 0 0 1-6.73-16.254l15.572-15.573a9.525 9.525 0 1 1 13.469 13.469l-15.577 15.568a9.495 9.495 0 0 1-6.734 2.79Z"
    />
    <path
      fill="url(#f)"
      d="M120 225.27a9.525 9.525 0 0 1-9.523-9.524v-22.023a9.522 9.522 0 1 1 19.047 0v22.023A9.522 9.522 0 0 1 120 225.27Z"
    />
    <path
      fill="url(#g)"
      d="M187.703 197.226a9.497 9.497 0 0 1-6.73-2.794l-15.576-15.568a9.523 9.523 0 0 1 13.468-13.47l15.572 15.574a9.528 9.528 0 0 1 2.061 10.373 9.526 9.526 0 0 1-8.791 5.881l-.004.004Z"
    />
    <path
      fill="url(#h)"
      d="M215.746 129.523h-22.022a9.525 9.525 0 0 1-6.735-16.258 9.525 9.525 0 0 1 6.735-2.789h22.022a9.525 9.525 0 0 1 6.735 16.258 9.525 9.525 0 0 1-6.735 2.789Z"
    />
    <path
      fill="url(#i)"
      d="M172.131 77.393a9.527 9.527 0 0 1-8.791-5.88 9.523 9.523 0 0 1 2.061-10.374l15.572-15.572a9.524 9.524 0 0 1 13.468 13.468l-15.576 15.57a9.487 9.487 0 0 1-6.734 2.788Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={7.019}
        x2={228.872}
        y1={325.851}
        y2={-78.361}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.06} stopColor="#FF6800" />
        <stop offset={1} stopColor="#FFF100" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={-28.722}
        x2={193.131}
        y1={306.236}
        y2={-97.978}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.06} stopColor="#FF6800" />
        <stop offset={1} stopColor="#FFF100" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={-64.3}
        x2={157.552}
        y1={286.708}
        y2={-117.505}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.06} stopColor="#FF6800" />
        <stop offset={1} stopColor="#FFF100" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={-58.1}
        x2={163.753}
        y1={290.111}
        y2={-114.102}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.06} stopColor="#FF6800" />
        <stop offset={1} stopColor="#FFF100" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={-13.756}
        x2={208.097}
        y1={314.45}
        y2={-89.763}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.06} stopColor="#FF6800" />
        <stop offset={1} stopColor="#FFF100" />
      </linearGradient>
      <linearGradient
        id="f"
        x1={42.758}
        x2={264.611}
        y1={345.468}
        y2={-58.746}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.06} stopColor="#FF6800" />
        <stop offset={1} stopColor="#FFF100" />
      </linearGradient>
      <linearGradient
        id="g"
        x1={78.337}
        x2={300.189}
        y1={364.995}
        y2={-39.219}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.06} stopColor="#FF6800" />
        <stop offset={1} stopColor="#FFF100" />
      </linearGradient>
      <linearGradient
        id="h"
        x1={72.138}
        x2={293.99}
        y1={361.592}
        y2={-42.622}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.06} stopColor="#FF6800" />
        <stop offset={1} stopColor="#FFF100" />
      </linearGradient>
      <linearGradient
        id="i"
        x1={27.792}
        x2={249.645}
        y1={337.253}
        y2={-66.96}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.06} stopColor="#FF6800" />
        <stop offset={1} stopColor="#FFF100" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgComponent;
