type SvgComponentPropsType = {
  color?: string;
};

function SvgComponent({ color = "#A7A7A7" }: SvgComponentPropsType) {
  return (
    <svg
      width="16"
      height="27"
      viewBox="0 0 16 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3137 13.3137L2 2M13.3137 13.3432L2 24.657"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgComponent;
