import React from "react";
import TitleWave from "../components/reuseables/TitleWave";
import SearchBar from '../components/reuseables/SearchBar';

const Browse: React.FC = () => {
	return (
		<div>
			<TitleWave title="Browse" includeSearch={true}/>
		</div>
	);
};

export default Browse;
