import React from "react";
import NavBar from "./components/reuseables/NavBar";
import Footer from "./components/reuseables/Footer";
import "./styles.css";
import { Switch, Route } from "react-router-dom";

import Homepage from "./Views/Homepage";
import TestView from "./Views/testVIew";
import Browse from "./Views/Browse";

const App: React.FC = () => {
	return (
		<div>
			<NavBar />
			<Switch>
				<Route path="/browse">
					<Browse />
				</Route>
				<Route path="/test">
					<TestView />
				</Route>
				<Route path="/">
					<Homepage />
				</Route>
			</Switch>
			<Footer />
		</div>
	);
};

export default App;
