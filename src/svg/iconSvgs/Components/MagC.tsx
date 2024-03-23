type SvgComponentPropsType = {
  color?: string;
};

function SvgComponent({ color = "#A7A7A7" }: SvgComponentPropsType) {
  return (
    <svg
      width="21"
      height="22"
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0261 17.8546C12.6807 18.5851 11.1387 19 9.5 19C4.25317 19 0 14.7467 0 9.5C0 4.2533 4.25317 0 9.5 0C14.7468 0 19 4.2533 19 9.5C19 11.6572 18.281 13.6465 17.0696 15.2412L20.4143 18.5858C21.1953 19.3668 21.1953 20.6332 20.4143 21.4142C19.6331 22.1953 18.3669 22.1953 17.5857 21.4142L14.0261 17.8546ZM15 9.5C15 12.5376 12.5376 15 9.5 15C6.4624 15 4 12.5376 4 9.5C4 6.4624 6.4624 4 9.5 4C12.5376 4 15 6.4624 15 9.5Z"
        fill={color}
      />
    </svg>
  );
}

export default SvgComponent;
