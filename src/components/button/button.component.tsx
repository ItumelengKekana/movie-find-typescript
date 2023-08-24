import styles from "./button.module.css";

type ButtonProps = {
	onClick: (e: any) => void;
	text: string;
	type: "next" | "previous";
	customTextStyle?: string;
};

const Button = (props: ButtonProps): JSX.Element => {
	const buttonStyle =
		props.type === "next" ? styles.nextButton : styles.previousButton;

	return (
		<div className={buttonStyle} onClick={props.onClick}>
			<p className={` ${props.customTextStyle} ${styles.buttonText}`}>
				{props.text}
			</p>
		</div>
	);
};

export default Button;
