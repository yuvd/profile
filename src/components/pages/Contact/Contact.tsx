import { Tooltip } from "@material-ui/core";
import React, { useMemo } from "react";

import "./Contact.css";

type contactIcon = { title: string; imgUrl: string; contactUrl: string };

export default function Contact() {
	const contactIcons = useMemo((): JSX.Element[] => {
		let ci = [];

		ci.push({
			title: "Email",
			imgUrl:
				"https://res.cloudinary.com/dunirybkl/image/upload/v1600002312/portfoli/tech%20icons/email-ti_gaobqd.png",
			contactUrl: "mailto:yuvald29@protonmail.com",
		});
		ci.push({
			title: "LinkedIn",
			imgUrl:
				"https://res.cloudinary.com/dunirybkl/image/upload/v1600002316/portfoli/tech%20icons/li-ti_gwl83j.png",
			contactUrl: "https://www.linkedin.com/in/yuval-drori/",
		});
		ci.push({
			title: "GitHub",
			imgUrl:
				"https://res.cloudinary.com/dunirybkl/image/upload/v1600002314/portfoli/tech%20icons/gh-ti_agvbel.png",
			contactUrl: "https://github.com/yuvd",
		});

		ci = ci.map(
			(ci: contactIcon, index: number): JSX.Element => {
				return (
					<Tooltip title={ci.title} arrow placement="top">
						<a href={ci.contactUrl}>
							<img key={index} src={ci.imgUrl} alt="contact" />
						</a>
					</Tooltip>
				);
			}
		);

		return ci;
	}, []);

	return (
		<div className="page">
			<div id="contactContainer">
				<p id="contactTitle" className="pageTitle">
					Get in Touch
				</p>
				<span id="ceContainer">
					<p id="contactExpl" className="pageExpl">
						Got a project in mind? Just want to ask something? Let's talk.
						<br />
						For more projects, please check out my GitHub.
					</p>
				</span>
			</div>
			<div id="ciContainer">{contactIcons}</div>
		</div>
	);
}
