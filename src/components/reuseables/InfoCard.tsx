import React from "react";
import Card from "react-bootstrap/Card";

export interface CardProps {
	title: string;
	secondaryText?: string;
	imageSrc: string;
	onClick?: () => null;
}

const InfoCard: React.FC<CardProps> = (props) => {
	return (
		<Card className="text-center circularShaddow" onClick={props.onClick}>
			<Card.Img
				variant="top"
				src={props.imageSrc}
				alt="Clockwise Arrow Icon"
				height="64"
				className="icon"
			/>
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				{props.secondaryText ? (
					<Card.Text>{props.secondaryText}</Card.Text>
				) : null}
			</Card.Body>
		</Card>
	);
};

export default InfoCard;
