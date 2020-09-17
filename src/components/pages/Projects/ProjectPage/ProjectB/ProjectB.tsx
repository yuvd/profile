import React, { useMemo } from "react";
import ProjectPage from "../ProjectPage";

import TechIcons from "../utils/consts/TechIcons";

import "./ProjectB.css";

// import external from "../../../../../utils/types/external";

export default function ProjectB() {
	const title = "CampFire";

	const desc =
		"CampFire is a Social Streaming app. You can watch anything in the world on it, with your friends. As you browse through the selection of titles with your friends, all you need to do is select one you like and you'll be watching it together inside the app. CampFire also supports watching Netflix together - so long as all users have a Netflix account, you'll be presented with Netflix's huge selection, and you can watch them together with your friends while chatting and having a good time. CampFire is a HUGE project and uses many different tools and technologies to make it happen. It was built using the MERN Stack. The server uses Socket.IO to maintain, monitor and connect rooms. After the connection is made, users are connected to each other directly in a P2P fashion using WebRTC. CampFire uses the TMDB API to show users information about every show and movie in existence (for the most part), so they can browse through it. The media the users consume and communicate is never routed through the server, rather passed through WebRTC. In order to find streaming sources for the titles they like, users install a Desktop Extension - a small Electron.js app that scours the internet for sources, downloads and streams them locally (while synced in the same aforementioned P2P fashion) for each user. In order to allow users to enjoy Netflix together, a Chrome extension is also shipped with CampFire, which overcomes some of the technical restrictions that prevent Netflix from being shown in an iframe, while also handling synchronization of the video between all the peers.";

	const imgUrl =
		"https://res.cloudinary.com/dunirybkl/image/upload/v1600001061/portfoli/campfire_jnllaq.png";

	const techIcons: Array<keyof typeof TechIcons> = useMemo(() => {
		return ["react", "nodejs", "socketio", "webrtc", "electron", "aws"];
	}, []);

	return (
		<ProjectPage
			title={title}
			desc={desc}
			imgUrl={imgUrl}
			techIcons={techIcons}
		/>
	);
}
