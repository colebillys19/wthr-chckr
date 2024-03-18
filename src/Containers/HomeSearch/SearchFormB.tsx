import { forwardRef, ChangeEvent, FormEvent } from "react";

type SearchFormBPropsType = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  isSubmitDisabled: boolean;
};

const SearchFormB = forwardRef<HTMLInputElement, SearchFormBPropsType>(
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
        className="w-full pt-2 pr-1 pb-2 pl-4 outline-0"
      />
      <button disabled={isSubmitDisabled} className="py-2 px-5 bg-grey-b">
        Search
      </button>
    </form>
  )
);

export default SearchFormB;
