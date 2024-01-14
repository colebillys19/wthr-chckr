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
      d="M147.497 156.376H72.152a54.12 54.12 0 0 1-38.269-92.39 54.12 54.12 0 0 1 38.27-15.851c2.9-.002 5.796.23 8.66.69a74.718 74.718 0 0 1 23.407-27.466c12.677-9.072 27.642-13.867 43.277-13.867a74.458 74.458 0 0 1 28.979 143.03 73.99 73.99 0 0 1-28.979 5.854Z"
    />
    <path
      fill="url(#b)"
      d="M66.082 231.202c-5.998-3.464-6.714-11.843-1.389-16.274l14.483-12.053a3.002 3.002 0 0 1 3.428-.294 3.008 3.008 0 0 1 1.46 3.114l-3.194 18.572c-1.177 6.829-8.793 10.398-14.788 6.935Z"
    />
    <path
      fill="url(#c)"
      d="M135.446 231.202c-5.998-3.464-6.713-11.843-1.389-16.274l14.487-12.053a3 3 0 0 1 4.647 1.034c.261.557.345 1.18.241 1.786l-3.195 18.572c-1.177 6.829-8.791 10.398-14.791 6.935Z"
    />
    <path
      fill="url(#d)"
      d="M31.394 191.519c-5.998-3.464-6.715-11.844-1.389-16.275l14.49-12.052a3.009 3.009 0 0 1 4.889 2.822l-3.201 18.575c-1.18 6.823-8.789 10.394-14.789 6.93Z"
    />
    <path
      fill="url(#e)"
      d="M100.763 191.519c-6-3.464-6.715-11.844-1.397-16.274l14.487-12.052a3.002 3.002 0 0 1 3.428-.292 3.004 3.004 0 0 1 1.459 3.113l-3.189 18.575c-1.174 6.823-8.789 10.394-14.788 6.93Z"
    />
    <path
      fill="url(#f)"
      d="M170.131 191.519c-5.999-3.464-6.715-11.844-1.389-16.275l14.486-12.052a3.01 3.01 0 0 1 4.889 2.822l-3.197 18.575c-1.175 6.823-8.79 10.394-14.789 6.93Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={7.357}
        x2={215.858}
        y1={199.707}
        y2={8.772}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#69BBFF" />
        <stop offset={1} stopColor="#9DE0F4" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={154.617}
        x2={58.386}
        y1={90.608}
        y2={242.592}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#69BBFF" />
        <stop offset={1} stopColor="#1798FF" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={204.135}
        x2={107.904}
        y1={121.961}
        y2={273.944}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#69BBFF" />
        <stop offset={1} stopColor="#1798FF" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={111.924}
        x2={15.693}
        y1={63.575}
        y2={215.559}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#69BBFF" />
        <stop offset={1} stopColor="#1798FF" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={161.44}
        x2={65.209}
        y1={94.927}
        y2={246.912}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#69BBFF" />
        <stop offset={1} stopColor="#1798FF" />
      </linearGradient>
      <linearGradient
        id="f"
        x1={210.958}
        x2={114.727}
        y1={126.281}
        y2={278.264}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#69BBFF" />
        <stop offset={1} stopColor="#1798FF" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgComponent;
