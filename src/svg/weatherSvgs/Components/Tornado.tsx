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
        d="M120.072 110.073C95.8753 110.073 73.0004 107.182 55.6633 101.931C46.6576 99.2047 39.4373 95.9183 34.1953 92.1659C31.0474 89.912 28.5484 87.4332 26.768 84.8008C24.509 81.4574 23.3649 77.8739 23.3649 74.1469C23.3649 70.4199 24.5077 66.8364 26.768 63.4942C28.5458 60.858 31.0474 58.3793 34.1953 56.1291C39.4347 52.3767 46.6576 49.0916 55.6633 46.364C73.0004 41.1132 95.8753 38.2218 120.072 38.2218C144.269 38.2218 167.144 41.1132 184.481 46.364C193.487 49.0916 200.71 52.3767 205.95 56.1291C209.097 58.3831 211.596 60.8618 213.376 63.4942C215.635 66.8364 216.779 70.4212 216.779 74.1469C216.779 77.8726 215.637 81.4574 213.376 84.8008C211.599 87.4358 209.097 89.9145 205.949 92.1659C200.71 95.9183 193.487 99.2034 184.481 101.931C167.144 107.182 144.269 110.073 120.072 110.073ZM42.5623 74.1443C42.9852 74.7615 44.2246 76.1977 47.4957 78.0974C51.5592 80.4593 57.356 82.7018 64.2576 84.585C79.4893 88.7386 99.3052 91.0256 120.07 91.0256C140.834 91.0256 160.65 88.7399 175.882 84.585C182.786 82.7018 188.58 80.4593 192.644 78.0974C195.915 76.1926 197.154 74.7615 197.577 74.1443C197.154 73.5272 195.915 72.0923 192.644 70.1913C188.58 67.8307 182.783 65.5869 175.882 63.7037C160.644 59.5501 140.834 57.2631 120.07 57.2631C99.3052 57.2631 79.4893 59.5488 64.2576 63.7037C57.3534 65.5869 51.5592 67.8307 47.4957 70.1913C44.2246 72.0923 42.9852 73.5272 42.5623 74.1443Z"
        fill={`url(#${uniqueIdA})`}
      />
      <path
        d="M120.072 140.094C104.689 140.094 89.45 138.588 76.0088 135.737C66.8913 133.804 54.5154 130.37 47.3281 124.986C46.2876 124.252 45.4049 123.317 44.7321 122.236C44.0593 121.155 43.6101 119.95 43.4112 118.692C43.2122 117.434 43.2675 116.15 43.5737 114.914C43.8799 113.678 44.4309 112.516 45.194 111.496C45.9571 110.477 46.9169 109.621 48.0166 108.979C49.1163 108.337 50.3335 107.922 51.5963 107.759C52.8592 107.595 54.1419 107.687 55.3688 108.028C56.5956 108.369 57.7416 108.953 58.7389 109.744C61.318 111.677 68.2437 114.624 79.9453 117.109C88.4329 118.909 102.282 121.046 120.072 121.046C129.888 121.046 144.816 120.363 160.199 117.109C171.905 114.628 178.83 111.681 181.406 109.744C183.43 108.3 185.94 107.706 188.397 108.088C190.854 108.469 193.065 109.797 194.556 111.787C196.048 113.777 196.701 116.272 196.378 118.737C196.055 121.203 194.779 123.444 192.825 124.982C185.638 130.368 173.262 133.8 164.145 135.733C150.694 138.588 135.455 140.094 120.072 140.094Z"
        fill={`url(#${uniqueIdB})`}
      />
      <path
        d="M120.072 172.19C108.216 172.19 95.619 170.793 83.6444 168.144C74.9371 166.219 66.6057 163.634 61.36 161.228C59.0641 160.174 57.2807 158.252 56.4021 155.884C55.5235 153.516 55.6216 150.895 56.6749 148.6C57.7282 146.304 59.6504 144.52 62.0186 143.642C64.3868 142.763 67.007 142.861 69.3028 143.915C74.5206 146.308 95.0489 153.142 120.072 153.142C145.096 153.142 165.624 146.308 170.842 143.915C171.979 143.389 173.209 143.094 174.461 143.044C175.713 142.995 176.962 143.193 178.137 143.628C179.312 144.062 180.39 144.724 181.309 145.575C182.228 146.427 182.969 147.451 183.492 148.59C184.014 149.729 184.307 150.959 184.353 152.211C184.399 153.463 184.197 154.712 183.76 155.886C183.322 157.06 182.658 158.136 181.804 159.052C180.95 159.969 179.924 160.708 178.783 161.228C173.538 163.64 165.208 166.221 156.5 168.144C144.526 170.791 131.929 172.19 120.072 172.19Z"
        fill={`url(#${uniqueIdC})`}
      />
      <path
        d="M120.072 201.591C110.081 201.589 100.116 200.559 90.3364 198.515C82.2373 196.797 75.2468 194.481 71.1618 192.158C70.0742 191.541 69.1191 190.715 68.3507 189.728C67.5824 188.741 67.016 187.612 66.6838 186.407C66.3517 185.201 66.2602 183.941 66.4148 182.7C66.5694 181.459 66.9669 180.26 67.5846 179.173C68.2024 178.085 69.0283 177.13 70.0152 176.362C71.0021 175.594 72.1307 175.027 73.3365 174.695C74.5423 174.363 75.8017 174.271 77.0428 174.426C78.284 174.581 79.4825 174.978 80.57 175.596C83.8348 177.451 99.2646 182.543 120.076 182.543C140.887 182.543 156.317 177.451 159.583 175.596C161.776 174.402 164.349 174.117 166.75 174.802C169.15 175.487 171.186 177.088 172.419 179.258C173.651 181.429 173.982 183.997 173.34 186.41C172.698 188.822 171.135 190.886 168.987 192.157C164.898 194.48 157.907 196.797 149.812 198.514C140.031 200.558 130.065 201.589 120.072 201.591Z"
        fill={`url(#${uniqueIdD})`}
      />
      <defs>
        <linearGradient
          id={uniqueIdA}
          x1="-112.518"
          y1="110.073"
          x2="633.456"
          y2="110.073"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A7A7A7" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id={uniqueIdB}
          x1="-64.3115"
          y1="140.094"
          x2="526.425"
          y2="140.094"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A7A7A7" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id={uniqueIdC}
          x1="-34.5064"
          y1="172.19"
          x2="461.3"
          y2="172.19"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A7A7A7" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id={uniqueIdD}
          x1="-9.05473"
          y1="201.591"
          x2="404.859"
          y2="201.591"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A7A7A7" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgComponent;
