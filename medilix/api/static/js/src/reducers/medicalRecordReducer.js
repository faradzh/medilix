/**
 * Created by faradj on 6/3/17.
 */

const INITIAL_STATE = {medicalRecords:[], record: false, recordData: {}};

export default function reducer (state=INITIAL_STATE, action) {
    switch (action.type){
        case 'SET_MEDICAL_RECORDS':
            return Object.assign({}, state, {medicalRecords: action.payload});
            break;

        case 'SHOW_RECORD':
            return Object.assign({}, state, {record: !state.record});
            break;

        case 'SET_RECORD_DATA':
            const recordData = state.medicalRecords.filter((record) => {
                return record.id == action.payload
            });
            console.log("Payload", action.payload);
            console.log("RecordData", recordData);
            return Object.assign({}, state, {recordData: recordData[0]});
            break;
    }
    return state;
}
