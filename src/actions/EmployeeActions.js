import { Actions } from "react-native-router-flux";
import firebase from "firebase";

export const EmployeeUpdate = ({prop, value}) => {
    return{
        type: 'employee_update',
        payload: {prop, value}
    }
}

export const employeeCreate = ({name, phone, shift}) => {

    const {currentUser} = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({name, phone, shift})
            .then(() => {
                dispatch({type: 'employee_create'});
                Actions.employeeList({type: 'reset'});
            });
    };
};

export const employeesFetch = () => {

    const {currentUser} = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({type: 'employees_fetch', payload: snapshot.val()})
            })
    }

}

export const employeeEdit = ({name, phone, shift, uid}) => {

    const {currentUser} = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({name, phone, shift})
            .then(() => {
                Actions.employeeList({type: 'reset'})
                dispatch({type: 'employee_save_success'})
            })
    }

 
}

export const employeeDelete = ({uid}) => {

    const {currentUser} = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() => {
                Actions.employeeList({type: 'reset'})
        });
    }
}