import { forwardRef, ChangeEvent, FormEvent, CSSProperties } from "react";

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
  padding: "8px 8px 8px 18px",
  outline: "none",
};

const stylesD: CSSProperties = {
  padding: "8px 18px 8px 16px",
  backgroundColor: "#f3f3f3",
};

type SearchFormBPropsType = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  isSubmitDisabled: boolean;
};

const SearchFormB = forwardRef<HTMLInputElement, SearchFormBPropsType>(
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
      <button disabled={isSubmitDisabled} style={stylesD}>Search</button>
    </form>
  )
);

export default SearchFormB;
