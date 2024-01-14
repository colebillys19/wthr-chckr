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
      d="M233.13 67.252a87.664 87.664 0 0 0-46.193-46.574 86.139 86.139 0 0 0-33.889-6.963c-18.332-.04-35.884 5.552-50.756 16.172a87.391 87.391 0 0 0-28.079 33.428 63.098 63.098 0 0 0-11.399-1.032 62.814 62.814 0 1 0 0 125.628l98.278-.398c.325 0 .65-.017.974-.049 21.26-2.159 40.914-12.092 55.344-27.967a87.12 87.12 0 0 0 15.72-92.244v-.001Z"
    />
    <path
      fill="url(#b)"
      d="m62.861 187.909 75.427-.322 4.044-18.184-36.456 2.252 1.108-42.25-44.123 58.504Z"
      opacity={0.1}
    />
    <path
      fill="url(#c)"
      d="m106.984 129.405-24.783 55.493a2.647 2.647 0 0 0 1.154 3.41c.389.211.824.322 1.266.322h24.061a2.654 2.654 0 0 1 2.65 2.561l1.101 32.616c.095 2.809 3.919 3.555 5.068.995l24.83-55.393a2.642 2.642 0 0 0-.18-2.503 2.655 2.655 0 0 0-2.188-1.231l-24.6-.466a2.655 2.655 0 0 1-2.6-2.592l-.708-32.183c-.063-2.833-3.918-3.611-5.071-1.029Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={0}
        x2={239.944}
        y1={100.812}
        y2={100.812}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#69BBFF" />
        <stop offset={1} stopColor="#9DE0F4" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={62.861}
        x2={142.332}
        y1={158.657}
        y2={158.657}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1E2121" />
        <stop offset={1} stopColor="#1E2121" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="c"
        x1={62.974}
        x2={144.625}
        y1={226.368}
        y2={144.717}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.06} stopColor="#FF6800" />
        <stop offset={1} stopColor="#FFF100" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgComponent;
