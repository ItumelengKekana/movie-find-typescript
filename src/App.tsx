import React, { ChangeEvent, FormEvent } from "react";

import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";
import CardList from "./components/CardList/CardList";
import { getData } from "./utils/data.utils";
// import Button from "./components/button/button.component";

export type ShowResponse = {
	Search: [];
	Response: string;
	totalResults: string;
};

export type Show = {
	Poster: string;
	Title: string;
	imdbID: string;
};

function App() {
	const [search, setSearch] = React.useState("");
	const [shows, setShows] = React.useState<Show[]>([]);
	const [total, setTotal] = React.useState("");
	const [type, setType] = React.useState("");
	//make page number a state variable and then call a function that paginates by incrementing or decrementing the page number
	const [pageNumber, setPageNumber] = React.useState<number>(1);

	const selectTypeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
		setType(e?.target.value);
	};

	const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (search === "") return;

		const response = await getData<ShowResponse>(
			`https://www.omdbapi.com/?apikey=4960b75e&s=${search}&type=${type}&r=json&plot=short&page=${pageNumber}`
		);

		if (!response || response.Response === "False") {
			throw Error("Service currently unavailable");
		}

		setShows(response.Search);
		setTotal(response.totalResults);
	};

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	// const paginationHandler = (
	// 	type: string,
	// 	e: React.FormEvent<HTMLFormElement>
	// ) => {
	// 	if (type === "next") {
	// 		setPageNumber(pageNumber + 1);
	// 	} else if (type === "previous" && pageNumber > 2) {
	// 		setPageNumber(pageNumber - 1);
	// 	}
	// 	handleSearch(e);
	// 	console.log(pageNumber);
	// };

	return (
		<div>
			<div className="App">
				<h1>Movie .find</h1>
				<SearchBox
					placeholder="Enter movie or series name"
					onChangeHandler={onChangeHandler}
					onSubmitHandler={handleSearch}
				/>
				{total ? <p>Total results: {total}</p> : ""}
				<form className="radioGroup">
					<input
						type="radio"
						name="type"
						id="movie"
						value="movie"
						onChange={selectTypeHandler}
					/>
					<label htmlFor="movie">Movie</label>
					<input
						type="radio"
						name="type"
						id="series"
						value="series"
						onChange={selectTypeHandler}
					/>
					<label htmlFor="series">Series</label>
				</form>
			</div>
			<CardList shows={shows} />
			{/* {total ? (
				<div className="button-container">
					{pageNumber > 1 && (
						<Button
							customTextStyle="previousButtonText"
							type="previous"
							onClick={(e: React.FormEvent<HTMLFormElement>) =>
								paginationHandler("next", e)
							}
							text="Previous"
						/>
					)}
					<Button
						type="next"
						onClick={(e: React.FormEvent<HTMLFormElement>) =>
							paginationHandler("previous", e)
						}
						text="Next"
					/>
				</div>
			) : null} */}
		</div>
	);
}

export default App;
