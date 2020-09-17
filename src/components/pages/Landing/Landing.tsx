import React from "react";

import "./Landing.css";

export interface props {}

export default function Landing(props: props) {
	return (
		<div className="page">
			<p className="pageTitle">Yuval Drori</p>
			<p id="pageSubtitle">
				{
					"Back-End & Full-Stack Developer. Building the highest quality projects, worldwide."
				}
			</p>
			<img
				id="pitchImg"
				src="https://res.cloudinary.com/dunirybkl/image/upload/v1600086165/portfoli/pitch_expr_jmcak2.png"
				// src="https://res.cloudinary.com/dunirybkl/image/upload/v1600270202/portfoli/pitch_bw_bibyyr.jpg"
				alt="me"
			/>
			<p className="pageTitle">Who I am</p>
			<p className="pageExpl landingExpl">
				I've been building great things since I was 7. I've always insisted that
				the greatest thing anyone can do is create something from nothing. Led
				me to work with some of the biggest companies in their fields -
				sometimes reaching as far as Prime Ministers - first in Cyber-Security,
				now in Web Development.
				<br />
				<br />
				I'm an independent developer, and I pride myself in being a premium
				freelancer who delivers only the strictest, highest quality projects. I
				know that what matters most, as a developer, is not necessarily knowing
				any specific framework and its patterns. This rigidness leads many
				freelancers to deliver half-baked, disappointing projects that become a
				headache for you to maintain later. I know that rather, the most
				important factor in a project's success, is the ability to constantly
				learn and adapt my expertise to your needs, to match your expectations
				to the letter. It's what I do best, and I compromise on nothing less.
			</p>
			<p className="pageTitle">What I do</p>
			<p className="pageExpl landingExpl">
				I build top-quality Back-End, Front-End and Full-Stack projects of all
				sizes. Depending on your needs, I can offer services either as an
				independent developer, or team-up with one of the internationally renown
				designers I work with to both professionally design and develop your
				project. I work with companies and individuals of all levels of
				understanding of technology, from complete unfamiliarity to absolute
				mastery. I mostly use the MERN Stack + TypeScript and Redux to build and
				deploy web scrapers, back-ends, and web/desktop applications. I also use
				some more highly specialized technologies when needed, like WebRTC and
				Socket.io. You can find the full list of the tools I work with in the
				"Knowledge" section down below.
			</p>
			<p className="pageTitle">Knowledge</p>
			<p className="pageExpl landingExpl">
				MongoDB, Express.js, React.js, TypeScript, Electron.js, Node.js,
				Puppeteer, WebRTC (PeerJS), Socket.IO, AWS, HTML5, CSS, Ruby on Rails,
				ActiveRecord, SQL, Git, Heroku, Cyber-Security, Client Management, Java,
				C#, Assembly x86, Technological Research
			</p>
		</div>
	);
}
