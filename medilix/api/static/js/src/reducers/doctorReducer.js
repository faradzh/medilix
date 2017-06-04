/**
 * Created by faradj on 5/12/17.
 */
const INITIAL_STATE = {doctors:[], doctorData:{}, feedback:{}, feedbacks:[], feedbackPermission:false};

export default function reducer (state=INITIAL_STATE, action) {
    switch (action.type){
        case 'SET_DOCTORS_LIST':
            return Object.assign({}, state, {doctors: action.payload});
            break;

        case 'SET_DOCTOR_DATA':
            return Object.assign({}, state, {doctorData: action.payload});
            break;

        case 'SET_FEEDBACK':
            const name = action.payload.target.name;
            let value = action.payload.target.value;
            if (name == 'recommendation'){
                value = action.payload.target.id;
            }

            const updatedFeedback = Object.assign({}, state.feedback, {[name]: value});
            return Object.assign({}, state, {feedback: updatedFeedback});
            break;

        case 'SET_FEEDBACK_PERMISSION':
            return Object.assign({}, state, {feedbackPermission: action.payload});
            break;
        
        case 'SET_FEEDBACKS':
            return Object.assign({}, state, {feedbacks: action.payload});
            break;

    }
    return state;
}