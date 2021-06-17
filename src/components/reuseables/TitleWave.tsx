import React from "react";
import SearchBar from "../reuseables/SearchBar";

interface TitleWaveVariables {
	title: string;
	includeSearch?: boolean;
}

const TitleWave: React.FC<TitleWaveVariables> = (props) => {
	return (
		<div className="titleWave">
			<div className="titleWaveContent">
				<div className="titleWaveText">{props.title}</div>
				<div className="titleWaveSearchBar">
					<SearchBar />
				</div>
			</div>
			<div className="titleWaveSVGContainer">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 150"
					preserveAspectRatio="none"
				>
					<path
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
						className="shape-fill"
					></path>
				</svg>
			</div>
		</div>
	);
};

export default TitleWave;
