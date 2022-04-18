import colors from '../../config/colors';
const INITIAL_STATE = {
  primary: colors.primary,
  secondary: colors.secondary,
  base: colors.base,
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'change_primary_color': 
            return {...state, secondary : 'red'}
        default: return state;
    }
};
