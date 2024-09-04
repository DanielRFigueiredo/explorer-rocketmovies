import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './app.routes'
import { AuthRouter } from './auth.routes'
import { useUser } from '../hooks/useUser'



export function Routes() {
  const { user } = useUser()

  return (
    <BrowserRouter>
      {user ? <AppRoutes /> : <AuthRouter />}
    </BrowserRouter>
  )

}