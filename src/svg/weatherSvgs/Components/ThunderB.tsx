import { v4 as uuidv4 } from "uuid";

type SvgComponentPropsType = {
  size?: number;
};

function SvgComponent({ size = 240 }: SvgComponentPropsType) {
  const uniqueIdA = uuidv4();
  const uniqueIdB = uuidv4();
  const uniqueIdC = uuidv4();
  const uniqueIdD = uuidv4();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M53.2885 139.878C52.99 139.878 52.6904 139.864 52.3869 139.835C41.2093 138.781 30.8676 133.461 23.5095 124.981C16.1515 116.501 12.3428 105.513 12.8745 94.2983C13.4061 83.0837 18.2373 72.5049 26.3646 64.7592C34.4918 57.0134 45.2905 52.696 56.5177 52.7037C58.3114 52.7038 60.1036 52.8132 61.884 53.0313C67.0479 43.3115 74.8176 35.2227 84.3217 29.6719C93.8259 24.1212 104.689 21.3282 115.691 21.6062C126.694 21.8841 137.402 25.2221 146.614 31.2456C155.826 37.2691 163.177 45.74 167.843 55.7082C168.52 57.1519 168.823 58.7423 168.725 60.3337C168.628 61.925 168.132 63.4663 167.283 64.8163C166.435 66.1663 165.262 67.2817 163.87 68.0603C162.479 68.8389 160.914 69.2557 159.32 69.2726C149.452 69.381 139.853 72.5046 131.811 78.2244C123.769 83.9441 117.668 91.9865 114.327 101.273C113.485 103.619 111.756 105.541 109.512 106.626C107.268 107.712 104.688 107.875 102.326 107.08C98.1072 105.661 93.6275 105.191 89.2063 105.703C84.7852 106.215 80.5314 107.697 76.7485 110.041C72.9655 112.386 69.7465 115.537 67.3211 119.269C64.8957 123 63.3237 127.222 62.717 131.631C62.4084 133.913 61.2831 136.006 59.5496 137.523C57.816 139.039 55.5917 139.876 53.2885 139.878Z"
        fill={`url(#${uniqueIdA})`}
      />
      <path
        d="M166.146 183.841C175.276 183.841 183.827 182.097 191.561 178.655C199.05 175.331 205.719 170.405 211.098 164.225C216.354 158.214 220.416 151.091 223.173 143.057C225.88 135.168 227.253 126.611 227.253 117.622C227.259 108.769 225.519 100.001 222.134 91.8208C218.748 83.6405 213.783 76.2078 207.523 69.948C201.262 63.6881 193.829 58.7239 185.649 55.3392C177.468 51.9545 168.7 50.2158 159.847 50.2224H159.163H159.118C145.197 50.3423 131.658 54.7992 120.388 62.9729C111.728 69.2351 104.674 77.4602 99.8053 86.9742C97.4438 86.6341 95.0609 86.4644 92.6751 86.4662C86.2032 86.4662 79.7947 87.741 73.8155 90.2177C67.8363 92.6943 62.4034 96.3245 57.8271 100.901C53.2508 105.477 49.6207 110.91 47.144 116.889C44.6673 122.868 43.3926 129.277 43.3926 135.749C43.3926 142.221 44.6673 148.629 47.144 154.608C49.6207 160.588 53.2508 166.02 57.8271 170.597C62.4034 175.173 67.8363 178.803 73.8155 181.28C79.7947 183.757 86.2032 185.031 92.6751 185.031L166.146 183.841Z"
        fill={`url(#${uniqueIdB})`}
      />
      <path
        opacity="0.1"
        d="M162.986 183.892L162.393 173.002L137.311 177.115L131.443 141.132L102.829 184.86L162.986 183.892Z"
        fill={`url(#${uniqueIdC})`}
      />
      <path
        d="M131.443 141.132L109.743 185.344C109.057 186.74 110.181 188.318 111.862 188.318H132.93C134.181 188.318 135.207 189.22 135.25 190.358L136.214 216.347C136.297 218.583 139.643 219.181 140.659 217.139L162.4 173.002C163.08 171.62 161.988 170.055 160.325 170.026L138.786 169.655C137.541 169.633 136.537 168.721 136.51 167.589L135.889 141.946C135.828 139.693 132.453 139.073 131.443 141.132Z"
        fill={`url(#${uniqueIdD})`}
      />
      <defs>
        <linearGradient
          id={uniqueIdA}
          x1="12.8542"
          y1="80.7342"
          x2="168.744"
          y2="80.7342"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#69BBFF" />
          <stop offset="1" stopColor="#1798FF" />
        </linearGradient>
        <linearGradient
          id={uniqueIdB}
          x1="43.3913"
          y1="117.623"
          x2="227.247"
          y2="117.623"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#69BBFF" />
          <stop offset="1" stopColor="#9DE0F4" />
        </linearGradient>
        <linearGradient
          id={uniqueIdC}
          x1="102.101"
          y1="225.556"
          x2="176.88"
          y2="121.057"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1E2121" />
          <stop offset="1" stopColor="#1E2121" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id={uniqueIdD}
          x1="94.9075"
          y1="236.626"
          x2="183.569"
          y2="112.725"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.06" stopColor="#FF6800" />
          <stop offset="1" stopColor="#FFF100" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgComponent;
