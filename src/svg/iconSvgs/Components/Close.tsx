type SvgComponentPropsType = {
  color?: string;
};

function SvgComponent({ color = "#A7A7A7" }: SvgComponentPropsType) {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2L17 17M2 17L17 2"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgComponent;
