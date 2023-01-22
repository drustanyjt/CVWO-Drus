import React from "react";
import Routes from "../routes";
import { ReactSession } from 'react-client-session';
function App(props) {
    //  ReactSession.set("user_name", "Anon");
//    ReactSession.set("user_id", 1);

    return <>{Routes}</>
}




export default App;