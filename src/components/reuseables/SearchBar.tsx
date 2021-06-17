import React, { useState, useEffect } from "react";
import { Search } from "react-bootstrap-icons";

const SearchBar: React.FC = () => {
	const [search, setSearch] = useState("");

	useEffect(() => {
		console.log(search);
	}, [search]);

	const handleSubmit = () => null;

	return (
		<form onSubmit={handleSubmit}>
			<div className="searchBar">
				<div className="searchBarLogoContainer">
					<Search
						className="searchBarLogo"
						color="#000000"
						opacity="50%"
					/>
				</div>
				<div className="searchBarInput">
					<input
						type="text"
						value={search}
						onChange={({ target }) => setSearch(target.value)}
						placeholder="Search"
					/>
				</div>
			</div>
		</form>
	);
};

export default SearchBar;
