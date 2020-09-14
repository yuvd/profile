import React from "react";
import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Landing from "./components/pages/Landing/Landing";
import { Route, Switch } from "react-router-dom";
import ProjectsRouter from "./components/pages/Projects/ProjectsRouter";
import Contact from "./components/pages/Contact/Contact";

function App() {
	return (
		<div id="appRoot">
			<Sidebar />
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route exact path="/projects" component={ProjectsRouter} />
				<Route exact path="/contact" component={Contact} />
			</Switch>
		</div>
	);
}

export default App;
