import React, { useMemo } from "react";
import ProjectPage from "../ProjectPage";

import "./ProjectA.css";

type external = { title: string; url: string };

export default function ProjectA() {
	const title = "Alfred";

	const desc =
		"Alfred is a travel assistant app that learns what you like to do and finds places where you can do it, no matter where in the world you are. Alfred was built using Ruby on Rails, with a strong SQL database hydrated by Nokogiri web scrapers. Information about cities was added only as users were looking for information for these cities (after which the information was cached & saved in the database) - to prevent unnecessary scrapings and data usage, and therefore reducing a lot of the initial server & hosting costs needed to create the product.";

	const imgUrl =
		"https://res.cloudinary.com/dunirybkl/image/upload/v1599743060/portfoli/alfred_i8dicv.png";

	const techIcons = useMemo(() => {
		return [
			"https://res.cloudinary.com/dunirybkl/image/upload/v1599749468/portfoli/tech%20icons/railsIcon_xttkk3.png",
			"https://res.cloudinary.com/dunirybkl/image/upload/v1599749493/portfoli/tech%20icons/nokogiriIcon_zzpfry.png",
			"https://res.cloudinary.com/dunirybkl/image/upload/v1599749506/portfoli/tech%20icons/sqlIcon_puft4b.png",
		];
	}, []);

	const externals = useMemo((): external[] => {
		return [
			{
				title: "Video",
				url:
					"https://res.cloudinary.com/dunirybkl/video/upload/v1599996904/portfoli/videos/alfred_jzfoud.webm",
			},
			{ title: "GitHub", url: "https://github.com/yuvd/alfred" },
		];
	}, []);

	return (
		<ProjectPage
			title={title}
			desc={desc}
			imgUrl={imgUrl}
			techIcons={techIcons}
			externals={externals}
		/>
	);
}
