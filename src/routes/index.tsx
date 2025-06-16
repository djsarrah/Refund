import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./AuthRoutes";

import { EmployeeRoutes } from "./EmployeeRoutes";

import { ManagerRoutes } from "./ManagerRoutes";

import { Loading } from "../components/loading";

const isLoading = false

const session = {
    user:{
        role:"Mananger",
    }
}

export function Routes() {
    function Route(){
        switch (session?.user.role) {
            case "Employee":
                
                return <EmployeeRoutes/>;

            case "Mananger":
                
                return <ManagerRoutes/>;
        
            default:
                return <AuthRoutes/>
        }
    }
    if(isLoading){
        return <Loading/>
    }
   return(
    <BrowserRouter>
        <Route />
    </BrowserRouter>
   ) 
}