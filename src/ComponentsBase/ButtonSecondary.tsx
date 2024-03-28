import { MouseEvent, useMemo } from "react";

type ButtonSecondaryPropsType = {
  handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  text: string;
  isDisabled?: boolean;
  isSubmit?: boolean;
};

function ButtonSecondary({
  handleClick,
  text,
  isDisabled,
}: ButtonSecondaryPropsType) {
  const tailwindClasses = useMemo(() => {
    const classesToApply =
      "py-2 px-4 text-text border border-text hover:border-opacity-0 active:text-grey-a";
    if (isDisabled) {
      return `${classesToApply} pointer-events-none opacity-50`;
    }
    return classesToApply;
  }, [isDisabled]);

  return (
    <button
      onClick={handleClick ? handleClick : () => null}
      className={tailwindClasses}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}

export default ButtonSecondary;
