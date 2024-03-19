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
        className="w-full py-2 pr-2 pl-4 outline-0"
      />
      <button disabled={isSubmitDisabled} className="py-2 px-5 bg-grey-b outline-none focus:bg-opacity-0 active:text-grey-a">
        Search
      </button>
    </form>
  )
);

export default SearchFormB;
