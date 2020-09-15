import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

import "./ProjNavs.css";

type projNum = 1 | 2 | 3 | undefined;
type location = { state: { projNum: projNum } };

export default function ProjNavs() {
	const location: location = useLocation();
	let projNum: projNum = undefined;
	if (location) {
		if (location.state) {
			if (location.state.projNum) {
				projNum = location.state.projNum;
			}
		}
	}

	const projLinks = useMemo((): JSX.Element[] => {
		const pl = [];

		pl.push(
			<Link key={2} to={{ pathname: "/projects", state: { projNum: 1 } }}>
				{projNum === 1 || projNum === undefined ? (
					<span style={{ padding: "5px" }}>•</span>
				) : (
					<span style={{ padding: "5px", visibility: "hidden" }}>•</span>
				)}
				CampFire
			</Link>
		);
		pl.push(
			<Link key={1} to={{ pathname: "/projects", state: { projNum: 2 } }}>
				{projNum === 2 ? (
					<span style={{ padding: "5px" }}>•</span>
				) : (
					<span style={{ padding: "5px", visibility: "hidden" }}>•</span>
				)}
				Alfred
			</Link>
		);

		return pl;
	}, [projNum]);

	return (
		<SlideDown>
			<div id="projNavs">{projLinks}</div>
		</SlideDown>
	);
}
