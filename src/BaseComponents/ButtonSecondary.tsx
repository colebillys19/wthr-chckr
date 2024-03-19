import { MouseEvent } from "react";

type ButtonSecondaryPropsType = {
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
  text: string;
};

function ButtonSecondary({ handleClick, text }: ButtonSecondaryPropsType) {
  //

  return (
    <button
      onClick={handleClick}
      className="py-2 px-4 text-text border border-text hover:border-opacity-0 active:text-grey-a"
    >
      {text}
    </button>
  );
}

export default ButtonSecondary;
