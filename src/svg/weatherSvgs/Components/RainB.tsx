import { v4 as uuidv4 } from "uuid";

type SvgComponentPropsType = {
  size?: number;
};

function SvgComponent({ size = 240 }: SvgComponentPropsType) {
  const uniqueIdA = uuidv4();
  const uniqueIdB = uuidv4();
  const uniqueIdC = uuidv4();
  const uniqueIdD = uuidv4();
  const uniqueIdE = uuidv4();
  const uniqueIdF = uuidv4();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M147.497 156.376H72.1524C57.7987 156.376 44.0329 150.674 33.8833 140.524C23.7337 130.375 18.0317 116.609 18.0317 102.255C18.0317 87.9017 23.7337 74.1359 33.8833 63.9863C44.0329 53.8367 57.7987 48.1347 72.1524 48.1347C75.0529 48.1335 77.9489 48.3641 80.8127 48.8242C86.2539 37.8942 94.2906 28.4641 104.22 21.3589C116.897 12.2871 131.862 7.49219 147.497 7.49219C164.671 7.50105 181.315 13.4467 194.607 24.3218C207.9 35.1969 217.024 50.3328 220.434 67.1651C223.845 83.9974 221.331 101.491 213.32 116.683C205.309 131.874 192.293 143.829 176.476 150.522C167.309 154.403 157.452 156.394 147.497 156.376Z"
        fill={`url(#${uniqueIdA})`}
      />
      <path
        d="M66.0825 231.202C60.0838 227.738 59.3676 219.359 64.6933 214.928L79.1758 202.875C79.6485 202.481 80.2308 202.241 80.844 202.189C81.4572 202.136 82.0717 202.273 82.6044 202.581C83.137 202.889 83.5625 203.352 83.8234 203.909C84.0843 204.466 84.1681 205.089 84.0635 205.695L80.8698 224.267C79.6927 231.096 72.0774 234.665 66.0825 231.202Z"
        fill={`url(#${uniqueIdB})`}
      />
      <path
        d="M135.446 231.202C129.448 227.738 128.733 219.359 134.057 214.928L148.544 202.875C149.016 202.481 149.598 202.241 150.212 202.189C150.825 202.136 151.439 202.273 151.972 202.581C152.505 202.889 152.93 203.352 153.191 203.909C153.452 204.466 153.536 205.089 153.432 205.695L150.237 224.267C149.06 231.096 141.446 234.665 135.446 231.202Z"
        fill={`url(#${uniqueIdC})`}
      />
      <path
        d="M31.3943 191.519C25.3955 188.055 24.6794 179.675 30.0051 175.244L44.4952 163.192C44.9682 162.799 45.5505 162.56 46.1636 162.507C46.7767 162.455 47.3911 162.592 47.9238 162.9C48.4564 163.208 48.8819 163.671 49.143 164.228C49.4041 164.784 49.4883 165.408 49.3841 166.014L46.1828 184.589C45.0032 191.412 37.3943 194.983 31.3943 191.519Z"
        fill={`url(#${uniqueIdD})`}
      />
      <path
        d="M100.763 191.519C94.7633 188.055 94.0483 179.675 99.3664 175.245L113.853 163.193C114.326 162.799 114.908 162.56 115.521 162.508C116.134 162.456 116.749 162.593 117.281 162.901C117.814 163.208 118.239 163.672 118.5 164.228C118.76 164.785 118.844 165.408 118.74 166.014L115.551 184.589C114.377 191.412 106.762 194.983 100.763 191.519Z"
        fill={`url(#${uniqueIdE})`}
      />
      <path
        d="M170.131 191.519C164.132 188.055 163.416 179.675 168.742 175.244L183.228 163.192C183.701 162.799 184.283 162.56 184.896 162.507C185.51 162.455 186.124 162.592 186.657 162.9C187.189 163.208 187.615 163.671 187.876 164.228C188.137 164.784 188.221 165.408 188.117 166.014L184.92 184.589C183.745 191.412 176.13 194.983 170.131 191.519Z"
        fill={`url(#${uniqueIdF})`}
      />
      <defs>
        <linearGradient
          id={uniqueIdA}
          x1="7.35745"
          y1="199.707"
          x2="215.858"
          y2="8.77216"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#69BBFF" />
          <stop offset="1" stopColor="#9DE0F4" />
        </linearGradient>
        <linearGradient
          id={uniqueIdB}
          x1="154.617"
          y1="90.6082"
          x2="58.386"
          y2="242.592"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#69BBFF" />
          <stop offset="1" stopColor="#1798FF" />
        </linearGradient>
        <linearGradient
          id={uniqueIdC}
          x1="204.135"
          y1="121.961"
          x2="107.904"
          y2="273.944"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#69BBFF" />
          <stop offset="1" stopColor="#1798FF" />
        </linearGradient>
        <linearGradient
          id={uniqueIdD}
          x1="111.924"
          y1="63.5746"
          x2="15.6927"
          y2="215.559"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#69BBFF" />
          <stop offset="1" stopColor="#1798FF" />
        </linearGradient>
        <linearGradient
          id={uniqueIdE}
          x1="161.44"
          y1="94.9272"
          x2="65.209"
          y2="246.912"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#69BBFF" />
          <stop offset="1" stopColor="#1798FF" />
        </linearGradient>
        <linearGradient
          id={uniqueIdF}
          x1="210.958"
          y1="126.281"
          x2="114.727"
          y2="278.264"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#69BBFF" />
          <stop offset="1" stopColor="#1798FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgComponent;
