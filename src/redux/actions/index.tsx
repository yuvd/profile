import PROJ_ACTION_TYPES from "./action_types/PROJ_ACTION_TYPES";

const PROJ_ACTIONS = {
	changeProj: (payload: number) => {
		return { type: PROJ_ACTION_TYPES.CHANGE_PROJECT, payload };
	},
};

export default PROJ_ACTIONS;
