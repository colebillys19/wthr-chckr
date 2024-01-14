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
      d="M233.257 71.568a87.658 87.658 0 0 0-46.197-46.574 86.126 86.126 0 0 0-33.891-6.962h-.196c-18.261 0-35.74 5.587-50.559 16.17A87.424 87.424 0 0 0 74.342 67.63a63.113 63.113 0 0 0-11.401-1.032 62.814 62.814 0 1 0 0 125.628l99.252-.448c21.261-2.159 40.916-12.09 55.345-27.966a87.117 87.117 0 0 0 15.719-92.244Z"
    />
    <path
      fill="url(#b)"
      d="m138.302 192.443-7.458-4.306 7.458-4.305a9.527 9.527 0 0 0 3.486-13.01 9.532 9.532 0 0 0-5.783-4.437 9.523 9.523 0 0 0-7.227.951l-6.945 4.01v-7.547a9.524 9.524 0 0 0-19.047 0v8.139l-6.639-3.833a9.527 9.527 0 0 0-14.261 6.989 9.524 9.524 0 0 0 4.737 9.507l6.126 3.536-6.126 3.537a9.522 9.522 0 0 0-1.036 15.804 9.536 9.536 0 0 0 7.041 1.887 9.528 9.528 0 0 0 3.52-1.195l6.638-3.837v8.137a9.522 9.522 0 1 0 19.047 0v-7.54l6.945 4.008a9.52 9.52 0 0 0 12.955-3.517 9.52 9.52 0 0 0-3.431-12.978Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={30.61}
        x2={190.208}
        y1={231.591}
        y2={35.614}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#69BBFF" />
        <stop offset={1} stopColor="#9DE0F4" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={246.432}
        x2={100.779}
        y1={49.194}
        y2={200.672}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#69BBFF" />
        <stop offset={1} stopColor="#1798FF" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgComponent;
