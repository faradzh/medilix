/**
 * Created by faradj on 5/13/17.
 */
const INITIAL_STATE = {
    appointments: [],
    currentAppointment: {
        blank: {
            analyses: [],
            prescription: []
        }
    },
    showBlank: false
};

export default function reducer (state=INITIAL_STATE, action) {
    let name, value, updatedBlank, updatedCurrentAppointment, analyses, prescription, id;
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

            id = name.split('-')[1];
            name = name.split('-')[0];
            analyses.forEach((analysis, index) => {
                if (analysis.id == parseInt(id)){
                    console.log("Here");
                    analyses[index] = Object.assign({}, analysis, {[name]: value})
                }
                else{
                    console.log("There");
                    analyses[analyses.length-1][name] = value;
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

        case 'FILL_PRESCRIPTION':
            name = action.payload.target.name;
            value = action.payload.target.value;
            prescription = state.currentAppointment.blank.prescription.slice();

            id = name.split('-')[1];
            name = name.split('-')[0];

            prescription.forEach((item, index) => {
                if (item.id == parseInt(id)){
                    prescription[index] = Object.assign({}, item, {[name]: value})
                }
                else{
                    prescription[prescription.length-1][name] = value;
                }
            });
            updatedBlank = Object.assign({}, state.currentAppointment.blank, {prescription: prescription}) ;
            updatedCurrentAppointment = Object.assign({}, state.currentAppointment, {blank: updatedBlank});
            return Object.assign({}, state, {currentAppointment: updatedCurrentAppointment});
            break;

        case 'ADD_PRESCRIPTION_ROW':
            prescription = state.currentAppointment.blank.prescription.slice();
            if (prescription.length == 0){
                prescription.push({id: 0});
            }
            else{
                const lastObject = prescription[prescription.length-1];
                prescription.push({id: lastObject.id + 1});
            }
            updatedBlank = Object.assign({}, state.currentAppointment.blank, {prescription: prescription}) ;
            updatedCurrentAppointment = Object.assign({}, state.currentAppointment, {blank: updatedBlank});
            return Object.assign({}, state, {currentAppointment: updatedCurrentAppointment});
            break;

        case 'REMOVE_PRESCRIPTION_ROW':
            prescription = state.currentAppointment.blank.prescription.slice();
            prescription.pop();
            updatedBlank = Object.assign({}, state.currentAppointment.blank, {prescription: prescription}) ;
            updatedCurrentAppointment = Object.assign({}, state.currentAppointment, {blank: updatedBlank});
            return Object.assign({}, state, {currentAppointment: updatedCurrentAppointment});
            break;
    }
    return state;
}