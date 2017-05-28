/**
 * Created by faradj on 5/12/17.
 */
const INITIAL_STATE = {};

export default function reducer (state=INITIAL_STATE, action) {
    switch (action.type){
        case 'TOGGLE_MODAL_WINDOW':
            return Object.assign({}, state, {toggleModalWindow: action.payload});
            break;
    }
    return state;
}
