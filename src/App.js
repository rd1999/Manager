import React, { Component } from "react";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import Router from "./Router";

class App extends Component{

    componentWillMount(){
        var firebaseConfig = {
            apiKey: "AIzaSyDdunwI7I9_YbnrjTBvlTs4OQQQsl3dSWI",
            authDomain: "manager-8c16c.firebaseapp.com",
            databaseURL: "https://manager-8c16c.firebaseio.com",
            projectId: "manager-8c16c",
            storageBucket: "manager-8c16c.appspot.com",
            messagingSenderId: "797184328238",
            appId: "1:797184328238:web:4c409e794dc16b6b9615bf",
            measurementId: "G-D0QEYSVMXJ"
          };
          firebase.initializeApp(firebaseConfig);
    }

    render(){
        return(
            <Provider store={createStore(reducers), {}, applyMiddleware(ReduxThunk)}>
                <Router />
            </Provider>
        )
    }
    
}

export default App;