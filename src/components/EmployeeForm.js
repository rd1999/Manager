import React, {Component} from "react";
import {View, Text, Picker} from "react-native";
import {connect} from "react-redux";
import {CardSection, Input} from "./common";
import {EmployeeUpdate} from "../actions";

class EmployeeForm extends Component{
    render(){
        return(
            <View>
                <CardSection>
                    <Input 
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={text => this.props.EmployeeUpdate({prop: 'name', value: text})}
                    />
                </CardSection>

                    <CardSection>
                        <Input 
                            label="Plone"
                            placeholder="555-555-555"
                            value={this.props.phone}
                            onChangeText={text => this.props.EmployeeUpdate({prop: 'phone', value: text})}
                        />
                    </CardSection>

                    <CardSection style={{flexDirection: 'column', height: 100}}>
                        <Text style={{fontSize: 18, paddingLeft: 18, paddingTop: 10}}>Shift</Text>
                        <Picker
                            style={{flex: 1, marginLeft: 10}}
                            selectedValue={this.props.shift}
                            onValueChange={day => this.props.EmployeeUpdate({prop: 'shift', value: day})}
                        >
                            <Picker.Item label = "Monday" value= "Monday" />
                            <Picker.Item label = "Tuesday" value= "Tuesday" />
                            <Picker.Item label = "Wednesday" value= "Wednesday" />
                            <Picker.Item label = "Thursday" value= "Thursday" />
                            <Picker.Item label = "Friday" value= "Friday" />
                            <Picker.Item label = "Saturday" value= "Saturday" />
                            <Picker.Item label = "Sunday" value= "Sunday" />
                        </Picker>
                    </CardSection>
                </View>
        )
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employee;

    return{name, phone, shift};
}

export default connect(mapStateToProps, {EmployeeUpdate})(EmployeeForm);

