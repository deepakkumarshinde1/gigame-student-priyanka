import { Navigate, Outlet } from "react-router-dom";

function ProtectedRouter({ isLogin, type }) {
  if (type === true) {
    return <>{isLogin ? <Outlet /> : <Navigate to={"/login"} />}</>;
  } else {
    return <>{isLogin ? <Navigate to={"/"} /> : <Outlet />}</>;
  }
}

// isLogin = true => user is logged in
// type = true => protected route for logged in user
export default ProtectedRouter;

// useState
// useEffect
// useContext
// useReducer
// useRef
// useMemo
// useCallback
// useLayoutEffect
// useDebugValue
// useImperativeHandle
// useTransition
// useDeferredValue
// memo
// forwardRef
