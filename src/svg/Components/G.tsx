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
      d="M152.973 186.258H62.941a62.809 62.809 0 0 1-44.416-18.398A62.814 62.814 0 0 1 62.94 60.63c3.824-.002 7.64.344 11.4 1.033a87.408 87.408 0 0 1 27.998-33.376c14.832-10.613 32.34-16.224 50.634-16.224a87.111 87.111 0 0 1 33.904 167.347 86.556 86.556 0 0 1-33.904 6.848Z"
    />
    <path
      fill="url(#b)"
      d="M50.73 227.955c-6.928 0-11.737-6.901-9.34-13.4l6.519-17.681a3.005 3.005 0 0 1 2.821-1.966 3.01 3.01 0 0 1 2.82 1.966l6.52 17.681c2.396 6.499-2.413 13.4-9.34 13.4Z"
    />
    <path
      fill="url(#c)"
      d="M120.098 227.955c-6.927 0-11.737-6.901-9.34-13.4l6.519-17.681a3.006 3.006 0 0 1 5.641 0l6.519 17.681c2.398 6.499-2.412 13.4-9.339 13.4Z"
    />
    <path
      fill="url(#d)"
      d="M189.465 227.955c-6.927 0-11.736-6.901-9.339-13.4l6.519-17.681a3.006 3.006 0 0 1 5.642 0l6.519 17.681c2.396 6.499-2.412 13.4-9.341 13.4Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={0.126}
        x2={240.07}
        y1={99.161}
        y2={99.161}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#69BBFF" />
        <stop offset={1} stopColor="#9DE0F4" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={127.472}
        x2={-3.218}
        y1={119.694}
        y2={279.344}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#69BBFF" />
        <stop offset={1} stopColor="#1798FF" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={169.007}
        x2={38.316}
        y1={153.696}
        y2={313.345}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#69BBFF" />
        <stop offset={1} stopColor="#1798FF" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={210.542}
        x2={79.851}
        y1={187.696}
        y2={347.345}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#69BBFF" />
        <stop offset={1} stopColor="#1798FF" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgComponent;
