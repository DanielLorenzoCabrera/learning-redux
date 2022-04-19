import colors from '../../config/colors';
const INITIAL_STATE = {
  primary: colors.primary,
  secondary: colors.secondary,
  base: colors.base
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'change_primary_color': 
            return {...state, primary : action.payload}
        case 'change_secondary_color': 
            return {...state, secondary : action.payload}
        case 'change_base_color': 
            return {...state, secondary : action.payload}
        default: return state;
    }
};
