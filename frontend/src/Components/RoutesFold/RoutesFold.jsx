import React from 'react'
import DashBoard from '../DashBoard/DashBoard'
import Template from '../Template/Template'
import { Route,Routes} from 'react-router-dom'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Success from '../Success/Success'

const RoutesFold = () => {
  return(
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/registerSuccess' element={<Success/>}/>
            <Route element={<Template/>}>
                  <Route index element={<DashBoard/>}/>
            </Route>
        </Routes>
  )
}

export default RoutesFold
