import React, { useMemo } from "react";

import "./ProjectPage.css";

type external = { title: string; url: string };

interface Props {
	title: string;
	imgUrl: string;
	desc: string;
	techIcons: string[];
	externals?: external[];
}

export default function ProjectPage(props: Props) {
	const icons = useMemo((): JSX.Element[] => {
		return props.techIcons.map((iconUrl: string, index: number) => {
			return (
				<img key={index} className="techIcon" src={iconUrl} alt="tech icon" />
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
