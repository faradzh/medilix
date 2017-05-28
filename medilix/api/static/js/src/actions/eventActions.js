/**
 * Created by faradj on 5/11/17.
 */
import fetch from 'isomorphic-fetch';
import jQuery from 'jquery';

export function createEventCard(e) {
    e.preventDefault();
    return (dispatch, getState) => {
        const title = getState().eventReducer.currentEventCardTitle;
        const currentUserId = getState().userReducer.currentUser.id;
        const form = new FormData();
        form.append('title', title);
        form.append('user_id', currentUserId);
        fetch('/users/create-event-card', {
                method: 'POST',
                body: form
        })
        .then((response) => {
            if (response.status == 201){
                dispatch(addEventCard());
            }
        })
    }
}

export function addEventCard(){
    return {
        type: 'ADD_EVENT_CARD'
    }
}

export function eventCardChange(payload){
    return {
        type: 'EVENT_CARD_CHANGE',
        payload: payload
    }
}

export function getEventCards() {
    return (dispatch, getState) => {
        const userId = getState().userReducer.currentUser.id;
        const url = '/users/get-event-cards';
        const params = {user_id: userId};
        jQuery.get(url, params, (response) => {
            dispatch(setInitialEventCards(response))
        })
    };
}

function setInitialEventCards(payload) {
   return {
        type: 'SET_INITIAL_EVENT_CARDS',
        payload: payload
   }
}
