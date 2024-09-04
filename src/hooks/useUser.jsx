import { useContext, createContext, useState, useEffect } from "react";
import { api } from '../services/api'

const UserContext = createContext({});

export default function UserProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    api.post('/sessions', { email, password })
      .then(resp => {
        api.defaults.headers.common['Authorization'] = `Bearer ${resp.data.token}`
        localStorage.setItem('@rocketmovies:user', JSON.stringify(resp.data.user))
        localStorage.setItem('@rocketmovies:token', resp.data.token)
        setData({ user: resp.data.user, token: resp.data.token })
      }).catch(err => {
        console.log(err.message)
      })
  }

  async function signOut() {
    api.defaults.headers.common['Authorization'] = null
    localStorage.removeItem('@rocketmovies:user')
    localStorage.removeItem('@rocketmovies:token')
    setData({})

  }

  useEffect(() => {
    const userStorage = localStorage.getItem('@rocketmovies:user')
    const tokenStorage = localStorage.getItem('@rocketmovies:token')
    if (userStorage && tokenStorage) {
      api.defaults.headers.common['Authorization'] = `Bearer ${tokenStorage}`
      setData({ user: JSON.parse(userStorage), token: tokenStorage })
    }

  }, [])

  return (
    <UserContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  )
}


export function useUser() {
  return useContext(UserContext);
}