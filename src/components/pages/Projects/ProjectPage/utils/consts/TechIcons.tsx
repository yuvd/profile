import TechIcon from "../models/TechIcon";

interface tiObjs {
	[key: string]: TechIcon;
}

const TechIcons: tiObjs = {
	rails: new TechIcon(
		"Ruby on Rails",
		"https://res.cloudinary.com/dunirybkl/image/upload/v1599749468/portfoli/tech%20icons/railsIcon_xttkk3.png"
	),
	nokogiri: new TechIcon(
		"Nokogiri",
		"https://res.cloudinary.com/dunirybkl/image/upload/v1599749493/portfoli/tech%20icons/nokogiriIcon_zzpfry.png"
	),
	sql: new TechIcon(
		"SQL",
		"https://res.cloudinary.com/dunirybkl/image/upload/v1599749506/portfoli/tech%20icons/sqlIcon_puft4b.png"
	),
	react: new TechIcon(
		"React.js",
		"https://res.cloudinary.com/dunirybkl/image/upload/v1600001274/portfoli/tech%20icons/react-ti_trmovn.png"
	),
	nodejs: new TechIcon(
		"Node.js",
		"https://res.cloudinary.com/dunirybkl/image/upload/v1600001274/portfoli/tech%20icons/nodejs-ti_jbf5zt.png"
	),
	socketio: new TechIcon(
		"Socket.io",
		"https://res.cloudinary.com/dunirybkl/image/upload/v1600001274/portfoli/tech%20icons/socketio-ti_befxcg.png"
	),
	webrtc: new TechIcon(
		"WebRTC",
		"https://res.cloudinary.com/dunirybkl/image/upload/c_scale,w_40/v1600094735/portfoli/tech%20icons/webrtc-ti_jdmhxr.png"
	),
	electron: new TechIcon(
		"Electron.js",
		"https://res.cloudinary.com/dunirybkl/image/upload/v1600001274/portfoli/tech%20icons/electron-ti_imudw1.png"
	),
	aws: new TechIcon(
		"AWS",
		"https://res.cloudinary.com/dunirybkl/image/upload/v1600001274/portfoli/tech%20icons/aws-ti_muu8kr.png"
	),
};

export default TechIcons;
