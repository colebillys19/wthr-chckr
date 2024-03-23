import { forwardRef, ChangeEvent } from "react";

type TextFieldPropsType = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  placeholder?: string;
  type: string;
};

const TextField = forwardRef<HTMLInputElement, TextFieldPropsType>(
  ({ handleChange, placeholder = "", id, type }, ref) => (
    <input
      id={id}
      onChange={handleChange}
      ref={ref}
      required
      placeholder={placeholder}
      type={type}
      className="w-full px-4 py-2 border border-grey-a rounded-full outline-0"
    />
  )
);

export default TextField;
