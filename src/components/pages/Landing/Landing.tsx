import React from "react";

import "./Landing.css";

export interface props {}

export default function Landing(props: props) {
	return (
		<div className="page">
			<p className="landingTitle">Yuval Drori</p>
			<p id="landingSubtitle">
				{
					"Fullstack & Back-End Developer. Building the highest quality projects, worldwide."
				}
			</p>
			<img
				id="pitchImg"
				src="https://res.cloudinary.com/dunirybkl/image/upload/v1599669484/portfoli/pitch_cuiyk2.png"
				alt="me"
			/>
			<p className="landingTitle">Who I am</p>
			<p className="pageExpl">
				I started building and breaking stuff when I was 7 and haven't stopped
				since. I worked in cyber security originally and had my work reach all
				kinds of areas, among them most major banks in Israel, one of the
				biggest secure payment processors in the world and the Prime Minister of
				Israel. Working with all kinds of different clients gave me a deep
				introduction to product development, and I decided to become a part of
				it myself. Now I operate my own freelancing business, creating great
				products for great people and companies.
			</p>
			<p className="landingTitle">What I do</p>
			<p className="pageExpl">
				I build back-ends and full-stack web applications and websites. I
				utilize my experience in cyber-security and client management to ensure
				the projects are always secure, efficient and exactly what you expect.
			</p>
			<p className="landingTitle">Knowledge</p>
			<p className="pageExpl">
				React.js, HTML5, CSS, Bootstrap, Ruby on Rails, ActiveRecord, SQL Git,
				Heroku, Cyber-Security, Client Management, Java, C#, Assembly x86,
				Technological Research
			</p>
		</div>
	);
}
