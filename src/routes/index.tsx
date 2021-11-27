import { Route, Routes as Switch } from 'react-router-dom'
import { Login } from '../pages/Login'

export default function Routes() {
    return(
        <Switch>
            <Route path="/login" element={<Login />} />
        </Switch>
    )
} 