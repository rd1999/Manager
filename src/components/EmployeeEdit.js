import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import Communications from "react-native-communications"
import {Card, CardSection, Button, Confirm} from "./common";
import {EmployeeUpdate, employeeEdit, employeeDelete} from "../actions";
import EmployeeForm from "./EmployeeForm";

class EmployeeEdit extends Component{

    state = {showModal: false};

    componentWillMount(){
        _.each(this.props.employee, (value, prop) => {
            this.props.EmployeeUpdate({prop, value})
        })
    }

    onButtonPress(){
        const {name, phone, shift} = this.props;
        this.props.employeeEdit({name, phone, shift, uid: this.props.employee.uid})
    }

    onTextPress() {
        const {phone, shift} = this.props;

        Communications.text(phone, `Your upcoming shift is on ${shift}`)
    }

    onAccept(){
        const {uid} = this.props.employee;

        this.props.employeeDelete({uid});
    }

    onDecline(){
        this.setState({showModal: false})
    }

    render(){
        return(
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.setState({showModal: !this.state.showModal})}>
                        Fire Employee
                    </Button>
                </CardSection>

                <Confirm 
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Do You really want to fire this employee?
                </Confirm>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employee;

    return {name, phone, shift};
}

export default connect(mapStateToProps, {EmployeeUpdate, employeeEdit, employeeDelete})(EmployeeEdit);