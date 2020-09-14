import React, { useMemo, ReactElement } from "react";
import ProjectA from "./ProjectPage/ProjectA/ProjectA";
import ProjectB from "./ProjectPage/ProjectB/ProjectB";
import { useLocation } from "react-router-dom";

type projNum = 1 | 2 | 3 | undefined;

interface Props {
	projNum: projNum;
}

type location = { state: { projNum: projNum | undefined } };

export default function ProjectsRouter(props: Props) {
	const location: location = useLocation();
	let projNum: projNum = undefined;
	if (location) {
		if (location.state) {
			if (location.state.projNum) {
				projNum = location.state.projNum;
			}
		}
	}

	const projects = useMemo((): ReactElement[] => {
		const p = [];

		p.push(<ProjectB />);
		p.push(<ProjectA />);

		return p;
	}, []);

	return (
		<span className="page">
			{projNum ? projects[projNum - 1] : projects[0]}
		</span>
	);
}
