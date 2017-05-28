/**
 * Created by faradj on 5/11/17.
 */
const INITIAL_STATE = {events:[]};

export default function reducer (state=INITIAL_STATE, action) {
    switch (action.type){
        case 'SET_INITIAL_EVENT_CARDS':
            return Object.assign({}, state, {events: action.payload});
            break;

        case 'ADD_EVENT_CARD':
            const updatedEvents = state.events.slice();
            updatedEvents.push(state.currentEventCardTitle);
            return Object.assign({}, state, {events: updatedEvents});
            break;

        case 'EVENT_CARD_CHANGE':
            const title = action.payload.target.value;
            return Object.assign({}, state, {currentEventCardTitle: title});
            break;
        
    }
    return state;
}