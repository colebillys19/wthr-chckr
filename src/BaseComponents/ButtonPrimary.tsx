import { MouseEvent } from "react";

type ButtonPrimaryPropsType = {
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
  text: string;
};

function ButtonPrimary({ handleClick, text }: ButtonPrimaryPropsType) {
  //

  return (
    <button
      onClick={handleClick}
      className="py-2 px-4 bg-text text-white border border-text hover:bg-white hover:text-text active:text-grey-a"
    >
      {text}
    </button>
  );
}

export default ButtonPrimary;
