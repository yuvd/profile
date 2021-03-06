import React, { useMemo } from "react";
import { Tooltip } from "@material-ui/core";

import TechIcons from "./utils/consts/TechIcons";

import "./ProjectPage.css";

import external from "../../../../utils/types/external";

type tiKey = keyof typeof TechIcons;
type techIcons = Array<tiKey>;

interface Props {
	title: string;
	projBanner: JSX.Element;
	desc: string;
	techIcons: techIcons;
	externals?: external[];
}

export default function ProjectPage(props: Props) {
	const icons = useMemo((): JSX.Element[] => {
		return props.techIcons.map((iconKey: tiKey, index: number) => {
			const tiObj = TechIcons[iconKey];

			return (
				<Tooltip key={index} title={tiObj.title} arrow placement="top">
					<img className="techIcon" src={tiObj.imgUrl} alt="tech icon" />
				</Tooltip>
			);
		});
	}, [props.techIcons]);

	const externals = useMemo((): JSX.Element[] | undefined => {
		if (props.externals) {
			const exts: JSX.Element[] = [];

			props.externals.forEach((extObj: external, index: number) => {
				exts.push(
					<a key={index} href={extObj.url}>
						{extObj.title}
					</a>
				);

				if (index < props.externals!.length - 1) exts.push(<span> | </span>);
			});

			return exts;
		}
	}, [props.externals]);

	return (
		<div>
			<p className="pageTitle">{props.title}</p>
			<span className="projBannerContainer">{props.projBanner}</span>
			<p className="pageExpl projectExpl">{props.desc}</p>
			<div className="tiContainer">{icons}</div>
			{/* {externals ? <div className="extsContainer">{externals}</div> : null} */}
			<div className="extsContainer">{externals}</div>
		</div>
	);
}
