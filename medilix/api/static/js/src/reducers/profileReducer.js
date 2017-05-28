/**
 * Created by faradj on 4/25/17.
 */
const INITIAL_STATE = {
    profileData: {},
    specializations: [],
    hospitals: [],
    creating: false,
    created: false,
    rejected: false
};

export default function reducer (state=INITIAL_STATE, action) {
    switch (action.type){
        case 'CHANGE_PROFILE_DATA':
            const name = action.payload.target.name;
            let value = null;
            if (name == 'gender'){
                value = action.payload.target.id;
            }
            else{
                value = action.payload.target.value;
            }
            const updatedProfileData = Object.assign({}, state.profileData, {[name]: value});
            return Object.assign({}, state, {profileData: updatedProfileData});
            break;

        case 'CHANGE_EDUCATION_DATA':
            const payload = action.payload;
            const currentEducationArray = state.profileData.education.slice();
            for (var i=0; i<state.profileData.education.length; i++){
                const educationObj = currentEducationArray[i];
                if (educationObj.id == payload.id)    {
                    currentEducationArray[i] = Object.assign({}, educationObj, {[payload.name]: payload.value});
                }
            }
            const updatedEducationInProfile = Object.assign({}, state.profileData, {education: currentEducationArray});
            return Object.assign({}, state, {profileData: updatedEducationInProfile});
            break;

        case 'ADD_EDUCATION_ROW':
            const educationArray = state.profileData.education.slice();
            const lastIndex = educationArray.length - 1;
            let lastObjectId = educationArray[lastIndex].id;
            educationArray.push({id: ++lastObjectId});
            const educationInProfile = Object.assign({}, state.profileData, {education: educationArray});
            return Object.assign({}, state, {profileData: educationInProfile});
            break;

        case 'REMOVE_EDUCATION_ROW':
            const educationList = state.profileData.education.slice();
            const index = educationList.length - 1;
            educationList.splice(index, 1);
            const updatedEducationList = Object.assign({}, state.profileData, {education: educationList});
            return Object.assign({}, state, {profileData: updatedEducationList});
            break;

        case 'RESET_PROFILE_DATA':
            const objectsToReset = Object.assign({}, state.profileData, {bio: ''});
            console.log("ToReset", objectsToReset);
            return Object.assign({}, state, {profileData: objectsToReset});
            break;

        case 'CREATE_USER_PROFILE':
            return Object.assign({}, state, {creating: true});
            break;

        case 'CREATE_USER_PROFILE_FULFILLED':
            return Object.assign({}, state, {created: true, creating: false});
            break;

        case 'CREATE_USER_PROFILE_REJECTED':
            return Object.assign({}, state, {creating: false, rejected: true});
            break;

        case 'SET_PROFILE_DATA':
            return Object.assign({}, state, {profileData: action.payload});
            break;

        case 'SET_SPECIALIZATIONS':
            return Object.assign({}, state, {specializations: action.payload});
            break;

        case 'SET_HOSPITALS':
            return Object.assign({}, state, {hospitals: action.payload});
            break;
    }
    return state;
}