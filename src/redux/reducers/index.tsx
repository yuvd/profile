import PROJ_ACTION_TYPES from "../actions/action_types/PROJ_ACTION_TYPES";
import storeState from "../../utils/types/redux/state";
import allowedAction from "../../utils/types/redux/actions";

const initialState: storeState = {
	activeProj: 1,
};

function rootReducer(state: storeState = initialState, action: allowedAction) {
	switch (action.type) {
		case PROJ_ACTION_TYPES.CHANGE_PROJECT: {
			return { ...state, activeProj: action.payload };
		}
		default:
			return state;
	}
}

export default rootReducer;
