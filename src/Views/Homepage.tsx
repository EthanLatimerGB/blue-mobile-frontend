import React from "react";
import SplashScreen from "../components/Homepage/SplashScreen";
import CardDeck from "react-bootstrap/CardDeck";

//Icon Imports
import QuestionMark from "../images/icons/question-circle.svg";
import Truck from "../images/icons/truck.svg";
import ClockWiseArrow from "../images/icons/arrow-counterclockwise.svg";
import Phone from "../images/icons/phone.svg";
import Tablet from "../images/icons/tablet.svg";
import Watch from "../images/icons/watch.svg";
import Laptop from "../images/icons/laptop.svg";

import InfoCard from "../components/reuseables/InfoCard";

const Homepage: React.FC = () => {
	return (
		<div>
			<SplashScreen />
			<div className="mainWindow">
				<div className="homepageSelection">
					<h2>Our Picks</h2>
					<h2>Why us?</h2>
					<CardDeck>
						<InfoCard
							title="Mon-Fri Support"
							secondaryText="Contact us on freephone: 07-xxx-xxx-xxx"
							imageSrc={QuestionMark}
						/>
						<InfoCard
							title="Garanteed Free 5 Day Delivery"
							secondaryText="$5 for same day delivery options"
							imageSrc={Truck}
						/>
						<InfoCard
							title="30 Day Returns"
							secondaryText="Trade in or full refund"
							imageSrc={ClockWiseArrow}
						/>
					</CardDeck>
					<h2>What do we sell</h2>
					<CardDeck>
						<InfoCard title="Mobiles" imageSrc={Phone} />
						<InfoCard title="Tablets" imageSrc={Tablet} />
						<InfoCard title="Laptops" imageSrc={Laptop} />
						<InfoCard title="Smart Devices" imageSrc={Watch} />
					</CardDeck>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
