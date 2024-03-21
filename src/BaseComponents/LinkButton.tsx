import { MouseEvent, useMemo } from "react";

type LinkButtonPropsType = {
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
  text: string;
  isDisabled?: boolean;
};

function LinkButton({ handleClick, text, isDisabled }: LinkButtonPropsType) {
  const tailwindClasses = useMemo(() => {
    const classesToApply = "underline hover:no-underline active:text-grey-a";
    if (isDisabled) {
      return `${classesToApply} pointer-events-none opacity-50`;
    }
    return classesToApply;
  }, [isDisabled]);

  return (
    <button
      onClick={handleClick}
      className={tailwindClasses}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}

export default LinkButton;
