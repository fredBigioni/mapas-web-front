import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { BayerAppRoutes } from "../bayerapp/routes/BayerAppRoutes"
import { useSelector } from "react-redux";


export const AppRouter = () => {

  const { status } = useSelector( state => state.auth );

  // debugger;
  if ( status === 'checking' ) {
    return <>cargando....</>//<CheckingAuth />
  }

  return (
    <Routes>
        {     
        (status === 'authenticated')   
        ? <Route path="/*" element={<BayerAppRoutes/>} />  
        : <Route path="/auth/*" element={<AuthRoutes/>} />        
        }                  

        <Route path="/*" element={<Navigate to="/auth/login"/>} />

    </Routes>
  )
}
