import {combineReducers} from "redux";
import AuthReducer from "./AuthReducer";
import EmployeeReducer from "./EmployeeReducer";
import EmployeeFetchReducer from "./EmployeeFetchReducer";

export default combineReducers({
    auth: AuthReducer,
    employee: EmployeeReducer,
    employeesFetch: EmployeeFetchReducer
})