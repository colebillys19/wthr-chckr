import { v4 as uuidv4 } from "uuid";

type SvgComponentPropsType = {
  size?: number;
};

function SvgComponent({ size = 240 }: SvgComponentPropsType) {
  const uniqueIdA = uuidv4();
  const uniqueIdB = uuidv4();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M53.2882 156.514C52.9898 156.514 52.6901 156.5 52.3866 156.472C41.2091 155.417 30.8673 150.098 23.5093 141.618C16.1513 133.138 12.3426 122.149 12.8742 110.935C13.4059 99.7204 18.2371 89.1416 26.3643 81.3958C34.4916 73.6501 45.2903 69.3327 56.5174 69.3404C58.3112 69.34 60.1033 69.449 61.8838 69.6667C67.0474 59.9466 74.8171 51.8574 84.3214 46.3065C93.8257 40.7556 104.689 37.9625 115.692 38.2406C126.695 38.5187 137.403 41.8569 146.614 47.8809C155.826 53.9049 163.177 62.3762 167.843 72.3448C168.52 73.7886 168.823 75.3791 168.726 76.9707C168.628 78.5622 168.132 80.1037 167.284 81.4539C166.436 82.804 165.262 83.9196 163.871 84.6983C162.479 85.4769 160.914 85.8937 159.32 85.9105C149.452 86.0189 139.853 89.1425 131.811 94.8623C123.768 100.582 117.668 108.624 114.327 117.911C113.484 120.256 111.755 122.178 109.512 123.263C107.268 124.349 104.688 124.511 102.326 123.716C98.107 122.298 93.6275 121.828 89.2064 122.34C84.7853 122.852 80.5316 124.333 76.7486 126.678C72.9657 129.022 69.7467 132.173 67.3213 135.904C64.8958 139.636 63.3236 143.857 62.7168 148.266C62.4082 150.549 61.2829 152.642 59.5493 154.158C57.8158 155.675 55.5914 156.511 53.2882 156.514Z"
        fill={`url(#${uniqueIdA})`}
      />
      <path
        d="M159.846 201.658H92.6712C86.198 201.663 79.7873 200.392 73.8059 197.917C67.8245 195.442 62.3897 191.812 57.8124 187.234C53.2351 182.657 49.6052 177.222 47.1302 171.241C44.6553 165.26 43.3838 158.849 43.3887 152.376C43.395 145.303 44.9224 138.314 47.8673 131.883C50.8122 125.452 55.1057 119.729 60.4566 115.104C65.8075 110.478 72.0907 107.057 78.8799 105.074C85.6691 103.09 92.8056 102.589 99.8052 103.606C105.401 92.6551 113.885 83.443 124.34 76.9667C134.794 70.4904 146.821 66.9965 159.118 66.8633H159.16H159.846C177.721 66.8633 194.865 73.9643 207.504 86.6041C220.144 99.2439 227.245 116.387 227.245 134.263C227.245 152.138 220.144 169.281 207.504 181.921C194.865 194.561 177.721 201.662 159.846 201.662V201.658Z"
        fill={`url(#${uniqueIdB})`}
      />
      <defs>
        <linearGradient
          id={uniqueIdA}
          x1="147.532"
          y1="-49.645"
          x2="52.9453"
          y2="185.467"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#69BBFF" />
          <stop offset="1" stopColor="#1798FF" />
        </linearGradient>
        <linearGradient
          id={uniqueIdB}
          x1="43.3925"
          y1="134.259"
          x2="227.245"
          y2="134.259"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#69BBFF" />
          <stop offset="1" stopColor="#9DE0F4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgComponent;
