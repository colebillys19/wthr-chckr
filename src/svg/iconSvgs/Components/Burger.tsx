type SvgComponentPropsType = {
  color?: string;
};

function SvgComponent({ color = "#A7A7A7" }: SvgComponentPropsType) {
  return (
    <svg
      width="25"
      height="20"
      viewBox="0 0 25 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 2C0 0.89543 0.89543 0 2 0H23C24.1046 0 25 0.89543 25 2C25 3.10457 24.1046 4 23 4H2C0.89543 4 0 3.10457 0 2Z"
        fill={color}
      />
      <path
        d="M0 10C0 8.89543 0.89543 8 2 8H23C24.1046 8 25 8.89543 25 10C25 11.1046 24.1046 12 23 12H2C0.89543 12 0 11.1046 0 10Z"
        fill={color}
      />
      <path
        d="M2 16C0.89543 16 0 16.8954 0 18C0 19.1046 0.89543 20 2 20H23C24.1046 20 25 19.1046 25 18C25 16.8954 24.1046 16 23 16H2Z"
        fill={color}
      />
    </svg>
  );
}

export default SvgComponent;
