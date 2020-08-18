import React, {Component} from "react";
import {Text, TouchableWithoutFeedback, View} from "react-native";
import {CardSection} from "./common";
import { Actions } from "react-native-router-flux";

class ListItem extends Component{
    render(){
        const {name} = this.props.employee;
        return(
            <TouchableWithoutFeedback onPress={() => Actions.employeeEdit({employee: this.props.employee})}>
                <View>
                    <CardSection>
                        <Text style={{fontSize: 18, paddingLeft: 15}}>{name}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default ListItem;