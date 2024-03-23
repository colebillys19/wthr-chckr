import { forwardRef, ChangeEvent, FormEvent } from "react";

import MagIconB from "../../../svg/iconSvgs/Components/MagB";

type SearchFormPropsType = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  isSubmitDisabled: boolean;
};

const tailwindStylesDefault =
  "py-2 pr-4 pl-3 outline-none focus:bg-grey-b active:opacity-50 active:bg-opacity-0";
const tailwindStylesDesktop =
  "md:pr-5 md:pl-5 md:bg-grey-b md:focus:bg-opacity-0 md:active:text-grey-a";

const SearchForm = forwardRef<HTMLInputElement, SearchFormPropsType>(
  ({ handleChange, handleSubmit, isSubmitDisabled }, ref) => (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-screen-sm inline-flex overflow-hidden rounded-full border border-grey-a"
    >
      <label htmlFor="search" className="hidden">
        Search
      </label>
      <input
        id="search"
        onChange={handleChange}
        ref={ref}
        required
        placeholder="Search location"
        type="text"
        className="w-full py-2 pr-2 pl-4 outline-0"
      />
      <button
        disabled={isSubmitDisabled}
        className={`${tailwindStylesDefault} ${tailwindStylesDesktop}`}
      >
        <span className="md:hidden">
          <MagIconB />
        </span>
        <span className="hidden md:inline">Search</span>
      </button>
    </form>
  )
);

export default SearchForm;
