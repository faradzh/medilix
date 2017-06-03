/**
 * Created by faradj on 5/13/17.
 */
const INITIAL_STATE = {
    appointments: [],
    currentAppointment: {
        blank: {
            analyses: []
        }
    },
    showBlank: false
};

export default function reducer (state=INITIAL_STATE, action) {
    let name, value, updatedBlank, updatedCurrentAppointment, analyses;
    switch (action.type){
        case 'SET_APPOINTMENTS':
            return Object.assign({}, state, {appointments: action.payload});
            break;
        
        case 'SET_CURRENT_APPOINTMENT':
            return Object.assign({}, state, {currentAppointment: action.payload});
            break;

        case 'SHOW_BLANK':
            return Object.assign({}, state, {showBlank: action.payload});
            break;

        case 'FILL_BLANK':
            name = action.payload.target.name;
            value = action.payload.target.value;
            updatedBlank = Object.assign({}, state.currentAppointment.blank, {[name]: value});
            updatedCurrentAppointment = Object.assign({}, state.currentAppointment, {blank: updatedBlank});
            return Object.assign({}, state, {currentAppointment: updatedCurrentAppointment});
            break;

        case 'FILL_EXAMINATION':
            name = action.payload.target.name;
            value = action.payload.target.value;
            analyses = state.currentAppointment.blank.analyses.slice();

            analyses.forEach((analysis, index) => {
                const id = name.split('-')[1];
                const keys = Object.keys(analysis);
                if (keys.length != 0){
                    if (keys[0].split('-')[1] == id){
                        analyses[index] = Object.assign({}, analysis, {[name]: value})
                    }
                    else{
                        analyses[analyses.length-1][name] = value;
                    }
                }
                else{
                    analyses[0] = {[name]: value};
                }
            });

            updatedBlank = Object.assign({}, state.currentAppointment.blank, {analyses: analyses}) ;
            updatedCurrentAppointment = Object.assign({}, state.currentAppointment, {blank: updatedBlank});
            return Object.assign({}, state, {currentAppointment: updatedCurrentAppointment});
            break;

        case 'ADD_EXAMINATION_ROW':
            analyses = state.currentAppointment.blank.analyses.slice();
            analyses.push({});
            updatedBlank = Object.assign({}, state.currentAppointment.blank, {analyses: analyses}) ;
            updatedCurrentAppointment = Object.assign({}, state.currentAppointment, {blank: updatedBlank});
            return Object.assign({}, state, {currentAppointment: updatedCurrentAppointment});
            break;

        case 'REMOVE_EXAMINATION_ROW':
            analyses = state.currentAppointment.blank.analyses.slice();
            analyses.pop();
            updatedBlank = Object.assign({}, state.currentAppointment.blank, {analyses: analyses}) ;
            updatedCurrentAppointment = Object.assign({}, state.currentAppointment, {blank: updatedBlank});
            return Object.assign({}, state, {currentAppointment: updatedCurrentAppointment});
            break;
    }
    return state;
}