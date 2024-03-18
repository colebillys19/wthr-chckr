type SvgComponentPropsType = {
  color?: string;
};

function SvgComponent({ color = "#A7A7A7" }: SvgComponentPropsType) {
  return (
    <svg
      width="23"
      height="25"
      viewBox="0 0 23 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10ZM14.2888 19.0362C12.9891 19.6542 11.5349 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 12.5506 19.0451 14.8782 17.4732 16.6448L22.364 21.5355C23.145 22.3166 23.145 23.5829 22.364 24.364C21.5829 25.145 20.3166 25.145 19.5355 24.364L14.5858 19.4142C14.4695 19.2979 14.3705 19.1708 14.2888 19.0362Z"
        fill={color}
      />
    </svg>
  );
}

export default SvgComponent;
