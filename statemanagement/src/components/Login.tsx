import { useReducer } from 'react';
import { loginReducer } from '../reducers/loginReducer';
const Login = () => {
  const [state, dispatch] = useReducer(loginReducer, {
    isLoggedIn: false,
    username: ''
  });
  const handleLogin = () => {
    dispatch({
      type: 'LOGIN',
      username: 'Jose'
    });
  };
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };
  return (
    <div className="container mt-5">
      <h1 className="mb-4">User Authentication</h1>
      {state.isLoggedIn ? (
        <div>
          <h2>Hi {state.username}!</h2>
          <button className="btn btn-danger" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      ) : (
        <button className="btn btn-primary" onClick={handleLogin}>
          Log In
        </button>
      )}
    </div>
  );
};
export default Login;