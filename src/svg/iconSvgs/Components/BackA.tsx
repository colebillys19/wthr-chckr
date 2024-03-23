type SvgComponentPropsType = {
  color?: string;
};

function SvgComponent({ color = "#A7A7A7" }: SvgComponentPropsType) {
  return (
    <svg
      width="25"
      height="23"
      viewBox="0 0 25 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.578784 12.5996C0.581112 12.6019 0.583445 12.6043 0.585786 12.6066C0.586076 12.6069 0.586366 12.6072 0.586655 12.6075L9.77817 21.799C10.5592 22.58 11.8256 22.58 12.6066 21.799C13.3876 21.0179 13.3876 19.7516 12.6066 18.9706L6.83067 13.1946L22.9991 13.2022C24.1036 13.2027 24.9995 12.3077 25 11.2031C25.0005 10.0985 24.1055 9.20267 23.0009 9.20215L6.82618 9.19463L12.6066 3.41421C13.3876 2.63317 13.3876 1.36683 12.6066 0.585786C11.8256 -0.195262 10.5592 -0.195262 9.77817 0.585786L0.589972 9.774L0.585786 9.77817C0.195015 10.1689 -0.000247111 10.6812 2.34693e-07 11.1934C0.000131397 11.465 0.0552395 11.7365 0.165325 11.99"
        fill={color}
      />
    </svg>
  );
}

export default SvgComponent;
