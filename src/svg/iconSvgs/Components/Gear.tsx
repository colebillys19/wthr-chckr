type SvgComponentPropsType = {
  color?: string;
};

function SvgComponent({ color = "#A7A7A7" }: SvgComponentPropsType) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.7089 18.4792L21.6893 18.5059C20.3567 17.713 18.6248 17.7379 17.2906 18.7073C15.9562 19.6768 15.3973 21.3167 15.74 22.8293C13.3387 23.6145 10.7131 23.6363 8.26076 22.8316C8.60445 21.3184 8.04589 19.677 6.71093 18.7068C5.3756 17.737 3.64196 17.713 2.30904 18.5076C0.785819 16.4239 -0.00473937 13.9198 2.13749e-05 11.3931C1.54464 11.2516 2.93142 10.2135 3.44137 8.64459C3.95083 7.07628 3.43938 5.42159 2.2734 4.39909L2.29272 4.37252C3.84914 2.23032 5.98153 0.754227 8.32326 0.002388C8.93517 1.42776 10.3512 2.42599 12.0006 2.42583C13.651 2.42584 15.0676 1.42663 15.6788 0C16.858 0.379814 17.9977 0.950012 19.0543 1.71775C20.1108 2.4853 21.0053 3.39288 21.7308 4.39684C20.5629 5.41901 20.0503 7.07519 20.5604 8.64488C21.0699 10.2135 22.4569 11.2519 24.0014 11.3932C24.01 13.8528 23.2652 16.337 21.7089 18.4792ZM12 15.4301C14.2091 15.4301 16 13.6392 16 11.4301C16 9.22092 14.2091 7.43005 12 7.43005C9.79085 7.43005 7.99999 9.22092 7.99999 11.4301C7.99999 13.6392 9.79085 15.4301 12 15.4301Z"
        fill={color}
      />
    </svg>
  );
}

export default SvgComponent;