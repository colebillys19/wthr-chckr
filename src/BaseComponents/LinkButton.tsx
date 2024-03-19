import { MouseEvent } from "react";

type LinkButtonPropsType = {
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
  text: string;
};

function LinkButton({ handleClick, text }: LinkButtonPropsType) {
  //

  return (
    <button
      onClick={handleClick}
      className="underline hover:no-underline active:text-grey-a"
    >
      {text}
    </button>
  );
}

export default LinkButton;
