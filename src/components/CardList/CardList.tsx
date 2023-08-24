import { Show } from "../../App";
import Card from "../Card/Card";

import "./CardList.css";

type CardListProps = {
	shows: Show[];
};

const CardList = ({ shows }: CardListProps) => {
	return (
		<div className="card-list-container">
			{shows.map((show) => {
				return <Card key={show.imdbID} show={show} />;
			})}
		</div>
	);
};

export default CardList;
