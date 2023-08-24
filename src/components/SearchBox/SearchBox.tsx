import { ChangeEvent, FormEvent } from "react";

import "./SearchBox.css";

type SearchBoxProps = {
	placeholder: string;
	onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
	onSubmitHandler: (event: FormEvent<HTMLFormElement>) => Promise<void>;
};

const SearchBox = ({
	placeholder,
	onChangeHandler,
	onSubmitHandler,
}: SearchBoxProps) => {
	return (
		<form className="search-box" onSubmit={onSubmitHandler}>
			<input
				type="search"
				placeholder={placeholder}
				onChange={onChangeHandler}
			/>
		</form>
	);
};

export default SearchBox;
