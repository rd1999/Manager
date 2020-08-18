import React from "react";
import LoginForm from "./components/LoginForm";
import {Scene, Router, Actions} from "react-native-router-flux";
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";
import EmployeeEdit from "./components/EmployeeEdit";

const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root" titleStyle={styles.navigationBarTitleStyle} hideNavBar>

                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" initial />
                </Scene>

                <Scene key="main"> 
                    <Scene key="employeeList" component={EmployeeList} title="Employees" rightTitle="Add" onRight={() => Actions.employeeCreate()} />
                    <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
                    <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
                </Scene>    
            </Scene>
        </Router>
    )
}

const styles = {
    navigationBarTitleStyle: {
     flex: 1,
     textAlign: 'center'
 }
}

export default RouterComponent;