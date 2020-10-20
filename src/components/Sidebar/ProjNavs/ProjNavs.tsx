import React, { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

import PROJ_ACTIONS from "../../../redux/actions/index";
import storeState from "../../../utils/types/redux/state";

import "./ProjNavs.css";

interface Props {
	showProjs: boolean;
}

export default function ProjNavs(props: Props) {
	const proj1Marker = useRef<HTMLSpanElement>(null);
	const proj2Marker = useRef<HTMLSpanElement>(null);

	const activeProj = useSelector((state: storeState) => state.activeProj);
	const dispatch = useDispatch();

	useEffect(() => {
		if (activeProj === 1) {
			proj2Marker.current!.style.visibility = "hidden";
			proj1Marker.current!.style.visibility = "visible";
		} else if (activeProj === 2) {
			proj1Marker.current!.style.visibility = "hidden";
			proj2Marker.current!.style.visibility = "visible";
		}
	}, [activeProj]);

	const projLinks = useMemo((): JSX.Element[] => {
		const pl = [];

		pl.push(
			<span
				className="projNav"
				key={1}
				onClick={() => dispatch(PROJ_ACTIONS.changeProj(1))}
			>
				<span
					ref={proj1Marker}
					style={{ padding: "5px", visibility: "hidden" }}
				>
					•
				</span>
				CampFire
			</span>
		);
		pl.push(
			<span
				className="projNav"
				key={2}
				onClick={() => dispatch(PROJ_ACTIONS.changeProj(2))}
			>
				<span
					ref={proj2Marker}
					style={{ padding: "5px", visibility: "hidden" }}
				>
					•
				</span>
				Alfred
			</span>
		);

		return pl;
	}, [dispatch]);

	return (
		<SlideDown closed={!props.showProjs}>
			<div id="projNavs">{projLinks}</div>
		</SlideDown>
	);
}
