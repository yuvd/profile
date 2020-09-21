import React, { useEffect, useMemo, useState } from "react";
import { Tooltip } from "@material-ui/core";

import TechIcons from "./utils/consts/TechIcons";

import "./ProjectPage.css";

import external from "../../../../utils/types/external";
import Modal from "../../../Modal/Modal";

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
	const [vidsToShow, setVidsToShow] = useState<{ [index: number]: boolean }>(
		{}
	);
	const [hasVids, toggleHasVids] = useState<boolean>(false);

	useEffect(() => {
		props.externals?.forEach((extObj: external, index: number) => {
			if (extObj.title === "Video") {
				if (!hasVids) toggleHasVids(true);
				setVidsToShow((prevState) => {
					return { ...prevState, [index]: false };
				});
			}
		});
	}, [props.externals, hasVids]);

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
				if (extObj.title !== "Video") {
					exts.push(
						<a key={index} href={extObj.url}>
							{extObj.title}
						</a>
					);
				} else {
					exts.push(
						<span
							key={index}
							onClick={() => {
								console.log(vidsToShow);
								setVidsToShow((prevState) => {
									return { ...prevState, [index]: true };
								});
							}}
						>
							Video
						</span>
					);
				}

				if (index < props.externals!.length - 1) exts.push(<span> | </span>);
			});

			return exts;
		}
	}, [props.externals, vidsToShow]);

	const vidModals = useMemo(() => {
		const modals: JSX.Element[] = [];

		if (props.externals) {
			for (const vidIndex in vidsToShow) {
				modals.push(
					<Modal show={vidsToShow[vidIndex]}>
						<video controls src={props.externals[vidIndex].url} />
					</Modal>
				);
			}
		}

		return modals;
	}, [vidsToShow, props.externals]);

	console.log(vidModals);
	console.log(vidsToShow);

	return (
		<div>
			<p className="pageTitle">{props.title}</p>
			<span className="projectImg">
				<img src={props.imgUrl} alt="project" />
			</span>
			<p className="pageExpl projectExpl">{props.desc}</p>
			<div className="tiContainer">{icons}</div>
			{externals ? <div className="extsContainer">{externals}</div> : null}
			{vidModals}
		</div>
	);
}
