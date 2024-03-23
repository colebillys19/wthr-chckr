import { MouseEvent, useMemo } from "react";

type ButtonPrimaryPropsType = {
  handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  text: string;
  isDisabled?: boolean;
  isSubmit?: boolean;
};

function ButtonPrimary({
  handleClick,
  text,
  isDisabled,
  isSubmit,
}: ButtonPrimaryPropsType) {
  const tailwindClasses = useMemo(() => {
    const classesToApply =
      "py-2 px-4 bg-text text-white border border-text hover:bg-white hover:text-text active:text-grey-a";
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
      type={isSubmit ? 'submit' : 'button'}
    >
      {text}
    </button>
  );
}

export default ButtonPrimary;
