import { forwardRef, ChangeEvent, FormEvent, CSSProperties } from "react";

import MagIcon from "../../svg/iconSvgs/Components/Mag";

const stylesA: CSSProperties = {
  outline: "1px solid #A7A7A7",
  display: "inline-flex",
  borderRadius: "20px",
  overflow: "hidden",
};

const stylesB: CSSProperties = {
  display: "none",
};

const stylesC: CSSProperties = {
  padding: "8px 0 8px 18px",
  outline: "none",
};

const stylesD: CSSProperties = {
  padding: "8px 16px 8px 8px",
};

type SearchFormAPropsType = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  isSubmitDisabled: boolean;
};

const SearchFormA = forwardRef<HTMLInputElement, SearchFormAPropsType>(
  ({ handleChange, handleSubmit, isSubmitDisabled }, ref) => (
    <form onSubmit={handleSubmit} style={stylesA}>
      <label htmlFor="search" style={stylesB}>
        Search
      </label>
      <input
        id="search"
        onChange={handleChange}
        ref={ref}
        required
        type="text"
        style={stylesC}
      />
      <button disabled={isSubmitDisabled} style={stylesD}>
        <MagIcon />
      </button>
    </form>
  )
);

export default SearchFormA;
