import _ from "lodash";
import React, { Component } from "react";
import {FlatList} from "react-native";
import {connect} from "react-redux";
import {employeesFetch} from "../actions";
import ListItem from "./ListItem";

class EmployeeList extends Component{

    componentWillMount(){
        this.props.employeesFetch();
    }

    renderRow({item}){
        return <ListItem employee={item} />
    }

    render(){
        return(
            <FlatList 
                keyExtractor={(employee) => employee.uid}
                data={this.props.employees}
                renderItem={this.renderRow}
            />
        )
    }
}

const mapStateToProps = (state) => {

    const employees = _.map(state.employeesFetch, (val, uid) => {
        return {...val, uid}
    })

    return {employees};
    
}

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);