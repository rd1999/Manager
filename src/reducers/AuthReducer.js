const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false }

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'email_changed':
            return {...state, email: action.payload}
        case 'password_changed':
            return {...state, password: action.payload}
        case 'login_user_success':
            return {...state, user: action.payload, loading: false, error: '', email: '', password: ''}
        case 'login_user_fail':
            return {...state, error: 'Authentication Failed!!!', password: '', loading: false}
        case 'login_user':
            return {...state, error: '', loading: true}
        default:
            return state;
    }
}