import { Navigate } from 'react-router-dom';
import { AuthStatus, Paths } from '../../const';

type PrivateRouteProps = {
  authStatus: AuthStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authStatus, children} = props;

  return (
    authStatus === AuthStatus.Auth ? children : <Navigate to={Paths.Login} />
  );
}

export default PrivateRoute;
