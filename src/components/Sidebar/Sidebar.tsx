import React, { useState, useMemo, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import ProjNavs from "./ProjNavs/ProjNavs";

import "./Sidebar.css";
import PROJ_ACTIONS from "../../redux/actions/index";

export default function Sidebar() {
	const [showProjs, toggleShowProjs] = useState(false);
	const location = useLocation();

	const dispatch = useDispatch();

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
			<Link
				onClick={() => dispatch(PROJ_ACTIONS.changeProj(1))}
				key="2"
				className="sbLink"
				to="/projects"
			>
				Projects
			</Link>
		);

		nl.push(<ProjNavs showProjs={showProjs} />);

		nl.push(
			<Link key="3" className="sbLink" to="/contact">
				Contact
			</Link>
		);

		return nl;
	}, [showProjs, dispatch]);

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
