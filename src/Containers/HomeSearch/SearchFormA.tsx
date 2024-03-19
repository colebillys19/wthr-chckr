import { forwardRef, ChangeEvent, FormEvent } from "react";

import MagIconB from "../../svg/iconSvgs/Components/MagB";

type SearchFormAPropsType = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  isSubmitDisabled: boolean;
};

const SearchFormA = forwardRef<HTMLInputElement, SearchFormAPropsType>(
  ({ handleChange, handleSubmit, isSubmitDisabled }, ref) => (
    <form
      onSubmit={handleSubmit}
      className="w-full inline-flex overflow-hidden rounded-full border border-grey-a"
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
        className="w-full py-2 pr-1 pl-4 outline-0"
      />
      <button disabled={isSubmitDisabled} className="py-2 pr-4 pl-2">
        <MagIconB />
      </button>
    </form>
  )
);

export default SearchFormA;
