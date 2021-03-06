import React, { Component } from "react";
import {Text, View} from "react-native";
import {Card, CardSection, Input, Button, Spinner} from "./common";
import {connect} from "react-redux";
import {emailChanged, passwordChanged, loginUser} from "../actions";

class LoginForm extends Component{

    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onButtonPress(){

        const {email, password} = this.props;

        this.props.loginUser({email, password})
    }

    renderError(){
        console.log(this.props.error)
        if(this.props.error){
            return(
                <View style={{backgroundColor: 'white'}}>
                    <Text style={{fontSize: 20, alignSelf: 'center', color: 'red'}}>{this.props.error}</Text>
                </View>
            )
            
        }

    }

    renderButton(){
        if(this.props.loading){
            return <Spinner size='large' />
        }

        return(
            
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        )
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="user@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Password"
                        placeholder="password"
                        secureTextEntry
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
}

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);