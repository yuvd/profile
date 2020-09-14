import React, { useState, useMemo, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Sidebar.css";
import ProjNavs from "./ProjNavs/ProjNavs";

interface props {}

export default function Sidebar(props: props) {
	const [showProjs, toggleShowProjs] = useState(false);
	const location = useLocation();

	useEffect(() => {
		location.pathname === "/projects"
			? toggleShowProjs(true)
			: toggleShowProjs(false);
	}, [location]);

	const navLinks = useMemo(() => {
		const nl = [];

		nl.push(
			<Link key="1" className="sbLink" to="/">
				About
			</Link>
		);
		nl.push(
			<Link key="2" className="sbLink" to="/projects">
				Projects
			</Link>
		);
		if (showProjs) nl.push(<ProjNavs />);
		nl.push(
			<Link key="3" className="sbLink" to="/contact">
				Contact
			</Link>
		);

		return nl;
	}, [showProjs]);

	return (
		<div id="sidebar">
			<Link to="/">
				<h1
					style={{
						fontFamily: "Quatro Sans",
						fontSize: "24px",
						marginTop: "33%",
					}}
				>
					Yuval Drori
				</h1>
			</Link>
			<div id="nlContainer">{navLinks}</div>
		</div>
	);
}
