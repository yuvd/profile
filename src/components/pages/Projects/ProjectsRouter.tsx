import React, { useMemo, ReactElement } from "react";
import ProjectA from "./ProjectPage/ProjectA/ProjectA";
import ProjectB from "./ProjectPage/ProjectB/ProjectB";
import { useSelector } from "react-redux";

import storeState from "../../../utils/types/redux/state";

export default function ProjectsRouter() {
	const activeProj = useSelector((state: storeState) => state.activeProj);

	const projects = useMemo((): ReactElement[] => {
		const p = [];

		p.push(<ProjectB />);
		p.push(<ProjectA />);

		return p;
	}, []);

	return <span className="page">{projects[activeProj! - 1]}</span>;
}
