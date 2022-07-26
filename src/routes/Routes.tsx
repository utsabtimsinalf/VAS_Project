

import { Route, Routes as Routing } from "react-router-dom";
import { Dashboard, Login } from "../pages";

/**
 * Added Routes for the Project
 * TODO Make Routes Dynamic 
 * @returns 
 */

export function Routes() {
    return (
        <Routing>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routing>
    );
}