type SvgComponentPropsType = {
  color?: string;
};

function SvgComponent({ color = "#A7A7A7" }: SvgComponentPropsType) {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.1562 16.9849C11.9128 17.6334 10.4993 18 9 18C4.02954 18 0 13.9706 0 9C0 4.02942 4.02954 0 9 0C13.9705 0 18 4.02942 18 9C18 11.0189 17.3352 12.8826 16.2126 14.384L19.4143 17.5858C20.1953 18.3668 20.1953 19.6332 19.4143 20.4142C18.6331 21.1953 17.3669 21.1953 16.5857 20.4142L13.1562 16.9849ZM14 9C14 11.7615 11.7615 14 9 14C6.23853 14 4 11.7615 4 9C4 6.23853 6.23853 4 9 4C11.7615 4 14 6.23853 14 9Z"
        fill={color}
      />
    </svg>
  );
}

export default SvgComponent;
