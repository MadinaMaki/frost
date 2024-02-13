import {useSelector} from "react-redux";
import Navigate from "../../ui/navigate/Navigate";

function NeedAuth(props) {
    const {loading, user} = useSelector(state => state.auth);

    if(loading) {
        return "Load user data";
    }

    if(!loading && user) {
        return props.children;
    }

    if(!loading && !user) {
        return <Navigate to="/"/>
    }
}

export default NeedAuth;