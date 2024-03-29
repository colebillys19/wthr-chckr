import { v4 as uuidv4 } from "uuid";

type SvgComponentPropsType = {
  size?: number;
};

function SvgComponent({ size = 240 }: SvgComponentPropsType) {
  const uniqueId = uuidv4();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M115.285 212.894C98.2867 212.899 81.6121 208.243 67.0745 199.433C52.5368 190.624 40.6925 177.997 32.8294 162.927C32.0157 161.37 31.6484 159.618 31.7683 157.866C31.8881 156.113 32.4903 154.428 33.5084 152.996C34.5264 151.565 35.9206 150.442 37.5367 149.754C39.1528 149.065 40.9278 148.837 42.6656 149.094C45.2071 149.47 47.7727 149.658 50.3418 149.658C64.183 149.658 77.2091 144.265 87.0021 134.473C96.7951 124.682 102.187 111.661 102.187 97.8118C102.191 88.5665 99.7215 79.4883 95.035 71.5187C90.3486 63.5491 83.6156 56.9783 75.5341 52.4874C74.0006 51.6326 72.7332 50.3705 71.8719 48.8406C71.0107 47.3107 70.5891 45.5725 70.6537 43.818C70.7184 42.0635 71.2667 40.361 72.2383 38.8986C73.2098 37.4362 74.5666 36.2708 76.1589 35.5312C88.4624 29.8169 101.627 26.9204 115.285 26.9204C139.947 26.9204 163.598 36.7172 181.037 54.1556C198.475 71.594 208.272 95.2455 208.272 119.907C208.272 144.569 198.475 168.22 181.037 185.659C163.598 203.097 139.947 212.894 115.285 212.894Z"
        fill={`url(#${uniqueId})`}
      />
      <defs>
        <linearGradient
          id={uniqueId}
          x1="37.4402"
          y1="304.552"
          x2="212.535"
          y2="-61.0389"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.7" stopColor="#FFE88A" />
          <stop offset="1" stopColor="#FFE4C5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgComponent;
