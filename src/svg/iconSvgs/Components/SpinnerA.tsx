type SvgComponentPropsType = {
  color?: string;
};

function SvgComponent({ color = "#A7A7A7" }: SvgComponentPropsType) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34 20C34 27.732 27.732 34 20 34C12.268 34 6 27.732 6 20C6 12.268 12.268 6 20 6V0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20H34Z"
        fill={color}
      />
      <path
        d="M23 3C23 4.65685 21.6569 6 20 6C18.3431 6 17 4.65685 17 3C17 1.34315 18.3431 0 20 0C21.6569 0 23 1.34315 23 3Z"
        fill={color}
      />
      <path
        d="M40 20C40 21.6569 38.6569 23 37 23C35.3431 23 34 21.6569 34 20C34 18.3431 35.3431 17 37 17C38.6569 17 40 18.3431 40 20Z"
        fill={color}
      />
    </svg>
  );
}

export default SvgComponent;
