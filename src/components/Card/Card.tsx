import { Show } from "../../App";

import "./Card.css";

type CardProps = {
	show: Show;
};

const Card = ({ show }: CardProps) => {
	const { Title, Poster } = show;

	return (
		<div className="card-container">
			<div className="card-content">
				<h3>{Title}</h3>
				<img src={Poster} alt={Poster} />
			</div>
		</div>
	);
};

export default Card;
