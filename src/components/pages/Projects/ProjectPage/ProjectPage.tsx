import React, { useMemo } from "react";
import { Tooltip } from "@material-ui/core";

import TechIcons from "./utils/consts/TechIcons";

import "./ProjectPage.css";

type external = { title: string; url: string };

type tiKey = keyof typeof TechIcons;
type techIcons = Array<tiKey>;

interface Props {
	title: string;
	imgUrl: string;
	desc: string;
	techIcons: techIcons;
	externals?: external[];
}

export default function ProjectPage(props: Props) {
	const icons = useMemo((): JSX.Element[] => {
		return props.techIcons.map((iconKey: tiKey, index: number) => {
			const tiObj = TechIcons[iconKey];

			return (
				<Tooltip title={tiObj.title} arrow placement="top">
					<img
						key={index}
						className="techIcon"
						src={tiObj.imgUrl}
						alt="tech icon"
					/>
				</Tooltip>
			);
		});
	}, [props.techIcons]);

	const externals = useMemo((): JSX.Element[] | undefined => {
		if (props.externals) {
			const exts: JSX.Element[] = [];

			props.externals.forEach((externalObj: external, index: number) => {
				exts.push(
					<a key={index} href={externalObj.url}>
						{externalObj.title}
					</a>
				);
				if (index !== props.externals!.length - 1) exts.push(<span>|</span>);
			});

			return exts;
		}
	}, [props.externals]);

	return (
		<div>
			<p className="pageTitle">{props.title}</p>
			<span className="projectImg">
				<img src={props.imgUrl} alt="project" />
			</span>
			<p className="pageExpl projectExpl">{props.desc}</p>
			<div className="tiContainer">{icons}</div>
			{externals ? <div className="extsContainer">{externals}</div> : null}
		</div>
	);
}
