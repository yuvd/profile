import PROJ_AT from "../../../redux/actions/action_types/PROJ_ACTION_TYPES";

type allowedActions = keyof typeof PROJ_AT;

type action = { type: allowedActions; payload: any };

export default action;
