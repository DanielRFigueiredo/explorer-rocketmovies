import { Routes, Route, Navigate } from 'react-router-dom'

import { useUser } from '../hooks/useUser'

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

export function AuthRouter() {
  const { user } = useUser()
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      {!user && <Route path="*" element={<Navigate to="/" />} />}
    </Routes>
  )

}