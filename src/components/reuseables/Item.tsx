import React from "react";
import Pill from "./pill";
import Rating from "./rating";

export type TTestData = {
	name: string;
	brand: string;
	previewImageUrl: string;
	categories: Array<string>;
	rating: number;
	price: number;
	discountedPrice?: number;
}

interface ItemVariables {
	data: TTestData;
	basketButton?: Boolean;
}

interface ItemTagsVariables {
	tags: Array<string>;
}

interface TitleVariables {
	brand: string;
	name: string;
}

interface PriceVariables {
	priceRRP: number;
	priceDiscounted?: number | null;
}

const Title: React.FC<TitleVariables> = (props) => (
	<div className="itemInfoContainerTitleAndPrice">
		{props.brand} {props.name}
	</div>
);

const ItemTags: React.FC<ItemTagsVariables> = (props) => {
	return (
		<div className="itemTagContainer">
			{props.tags.map((tag) => {
				return <Pill text={tag} />;
			})}
		</div>
	);
};

const Price: React.FC<PriceVariables> = (props) => {
	if (props.priceDiscounted)
		return (
			<div className="itemInfoContainerTitleAndPrice">
				<span style={{ color: "#C0AD00", fontWeight: "bold" }}>
					£{props.priceDiscounted}
				</span>{" "}
				£{props.priceRRP}
			</div>
		);

	return (
		<div className="itemInfoContainerTitleAndPrice">£{props.priceRRP}</div>
	);
};

const CheckoutButton: React.FC = () => {
	const clickHandler = () => {};

	return (
		<div className="checkoutButtonContainer" onClick={clickHandler}>
			<div className="checkoutButton">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="currentColor"
					className="bi bi-cart-plus"
					viewBox="0 0 16 16"
				>
					<path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
					<path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
				</svg>
			</div>
		</div>
	);
};

const Item: React.FC<ItemVariables> = (props) => {
	return (
		<div
			className={`itemContainer ${
				props.data.discountedPrice ? "highlightGold" : ""
			}`}
		>
			<div className="itemImageContainer">
				<img src={props.data.previewImageUrl} alt={props.data.name} />
			</div>
			<div className="itemInfoContainer">
				<Title brand={props.data.brand} name={props.data.name} />
				<ItemTags tags={props.data.categories} />
				<Rating rating={props.data.rating} />
				<Price
					priceRRP={props.data.price}
					priceDiscounted={props.data.discountedPrice}
				/>
				<CheckoutButton />
			</div>
		</div>
	);
};

export default Item;
