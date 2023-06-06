import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRouts = ({children}) => {
    const {user , lodding} = useContext(AuthContext);
    if(lodding) {
        return <progress className="progress w-56"></progress>
    }

    if(user?.email){
        return children;
    }
    

    return <Navigate to='/login' replace></Navigate>;
};

export default PrivateRouts;