interface LoginState {
    isLoggedIn: boolean;
    username: string;
}
interface HandleLogin {
    type: 'LOGIN';
    username: string;
}
interface HandleLogout {
    type: 'LOGOUT';
}
type LoginAction = HandleLogin | HandleLogout;
const initialState: LoginState = {
    isLoggedIn: false,
    username: ''
};
export const loginReducer = (
    state: LoginState = initialState,
    action: LoginAction
): LoginState => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isLoggedIn: true,
                username: action.username
            };
        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn: false,
                username: ''
            };
        default:
            return state;
    }
};

export default loginReducer;