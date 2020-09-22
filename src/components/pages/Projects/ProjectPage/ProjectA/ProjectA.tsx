import React, { useMemo } from "react";
import ProjectPage from "../ProjectPage";

import TechIcons from "../utils/consts/TechIcons";
import BANNER_CSS_CLASSES from "../utils/consts/BannerCssClasses";

import "./ProjectA.css";

import external from "../../../../../utils/types/external";

export default function ProjectA() {
	const title = "Alfred";

	const desc =
		"Alfred was a travel assistant app that learns what you like to do and finds places where you can do it, no matter where in the world you are. Activity places were scraped from several websites and stored in a database and categorized by the type of activity and city it was in. Users had personal accounts and profiles where they could select what kind of activities they'd like to be presented with when going to a new place, as well as add them to an in-app schedule.. Each place could be reviewed and commented on inside the app. Places had a forum-like chat section where users could discuss the place, reply to each other and have conversations about it. Storing every activity/city combo in the database would have been expensive and unrealistic for the app's infrastructure. Instead, whenever a user searched for a type of activity in a certain city for the first time (for example, the first ever user to search for gyms in Vaduz, Liechtenstein), it was then scraped and stored in the database for future users to use. That way, the database was only ever as big as the users needed it to be, and scaled in direct relation to the userbase.";

	const bannerVid = (
		<video
			controls
			src="https://res.cloudinary.com/dunirybkl/video/upload/v1599996904/portfoli/videos/alfred_jzfoud.webm"
			className={`${BANNER_CSS_CLASSES.BASE} ${BANNER_CSS_CLASSES.PHONE}`}
		/>
	);

	const techIcons: Array<keyof typeof TechIcons> = useMemo(() => {
		return ["rails", "nokogiri", "sql"];
	}, []);

	const externals = useMemo((): external[] => {
		return [{ title: "GitHub", url: "https://github.com/yuvd/alfred" }];
	}, []);

	return (
		<ProjectPage
			title={title}
			desc={desc}
			projBanner={bannerVid}
			techIcons={techIcons}
			externals={externals}
		/>
	);
}
