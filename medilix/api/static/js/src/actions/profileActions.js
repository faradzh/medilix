/**
 * Created by faradj on 4/25/17.
 */
import jQuery from 'jquery';
import 'select2/dist/js/select2.min.js';
import { push } from 'react-router-redux';

export function changeProfileData(payload) {
    return {
        type: 'CHANGE_PROFILE_DATA',
        payload: payload
    }
}

export function changeEducationData(payload) {
    return {
        type: 'CHANGE_EDUCATION_DATA',
        payload: payload
    }
}

export function addEducationRow(){
    return {
        type: 'ADD_EDUCATION_ROW'
    }
}

export function removeEducationRow(){
    return {
        type: 'REMOVE_EDUCATION_ROW'
    }
}

export function resetProfileData(){
    return {
        type: 'RESET_PROFILE_DATA'
    }
}

export function submitProfileData(e) {
    e.preventDefault();
    const constructDoctorForm = function (id,
                                        group,
                                        firstname,
                                        lastname,
                                        middlename,
                                        email,
                                        specialization_id,
                                        bio,
                                        age,
                                        gender,
                                        phoneNumber,
                                        experience,
                                        educationJson,
                                        hospitals) {
        const formData = new FormData();
        formData.append('id', id);
        formData.append('group', group);
        formData.append('firstname', firstname);
        formData.append('lastname', lastname);
        formData.append('middlename', middlename);
        formData.append('email', email);
        formData.append('specialization', specialization_id);
        formData.append('bio', bio);
        formData.append('age', age);
        formData.append('gender', gender);
        formData.append('phone_number', phoneNumber);
        formData.append('experience', experience);
        formData.append('education', educationJson);
        formData.append('hospitals', hospitals);
        return formData;
    };

    const constructPatientForm = function (id,
                                        group,
                                        firstname,
                                        lastname,
                                        middlename,
                                        email,
                                        address,
                                        age,
                                        gender,
                                        phoneNumber) {
        const formData = new FormData();
        formData.append('id', id);
        formData.append('group', group);
        formData.append('firstname', firstname);
        formData.append('lastname', lastname);
        formData.append('middlename', middlename);
        formData.append('email', email);
        formData.append('address', address);
        formData.append('age', age);
        formData.append('gender', gender);
        formData.append('phone_number', phoneNumber);
        return formData;
    };

    return (dispatch, getState) => {
        dispatch(createUserProfile);
        const {
            firstname,
            lastname,
            middlename,
            email,
            specialization_id,
            bio,
            age,
            address,
            gender,
            phoneNumber,
            experience,
            education
        } = getState().profileReducer.profileData;
        const educationJson = JSON.stringify(education);
        const hospitals = jQuery('#hospitals').val();
        const { id, group } = getState().userReducer.currentUser;
        let formData = null;
        if (group == 'doctor'){
            formData = constructDoctorForm(
                id,
                group,
                firstname,
                lastname,
                middlename,
                email,
                specialization_id,
                bio,
                age,
                gender,
                phoneNumber,
                experience,
                educationJson,
                hospitals);
        } else if (group == 'patient'){
            formData = constructPatientForm(
                id,
                group,
                firstname,
                lastname,
                middlename,
                email,
                address,
                age,
                gender,
                phoneNumber);
        }


        fetch('/users/update-user-profile', {
                method: 'POST',
                body: formData
        })
        .then((response) => {
            if (response.status >= 400){
                dispatch(createUserProfileRejected());
                return;
            }
            dispatch(createUserProfileResolved(response.json));
            dispatch(push('/app/dashboard/profile'));
        })
    }
}

export function createUserProfileResolved(payload){
    return {
        type: 'CREATE_USER_PROFILE_FULFILLED',
        payload: payload
    }
}

export function createUserProfileRejected(payload){
    return {
        type: 'CREATE_USER_PROFILE_REJECTED',
        payload: payload
    }
}

export function createUserProfile(){
    return {
        type: 'CREATE_USER_PROFILE'
    }
}


export function getProfileData(id, group) {
    return (dispatch, getState) => {
        let userId = undefined;
        let userGroup = undefined;
        if (id == undefined && group == undefined) {
            userId = getState().userReducer.currentUser.id;
            userGroup = getState().userReducer.currentUser.group;
        }
        else{
            userId = id;
            userGroup = group;
        }
        const url = '/users/get-profile-data';
        const params = {userId: userId, userGroup: userGroup};
        jQuery.get(url, params, (response) => {
            dispatch(setProfileData(response))
        })
    };
}

export function setProfileData(payload) {
    return {
        type: 'SET_PROFILE_DATA',
        payload: payload
    }
}

export function getSpecializations(){
    return (dispatch) => {
        const url = '/users/get-specializations';
        jQuery.get(url, (response) => {
            dispatch(setSpecializations(response))
        })
    }
}

export function setSpecializations(payload) {
    return {
        type: 'SET_SPECIALIZATIONS',
        payload: payload
    }
}

export function getHospitals(){
    return (dispatch) => {
        const url = '/users/get-hospitals';
        jQuery.get(url, (response) => {
            dispatch(setHospitals(response))
        })
    }
}

export function setHospitals(payload) {
    return {
        type: 'SET_HOSPITALS',
        payload: payload
    }
}