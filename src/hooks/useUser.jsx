import { useContext, createContext, useState, useEffect } from "react";
import { api } from '../services/api'

const UserContext = createContext({});

export default function UserProvider({ children }) {
  const [data, setData] = useState({})
  const [title, setTitle] = useState('')

  function handleSetTitle(newTitle) {
    setTitle(newTitle)
  }

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

  async function updateProfile({ user, avatarFile }) {
    try {

      if (avatarFile) {
        const fileUpdateForm = new FormData()
        fileUpdateForm.append('avatar', avatarFile)
        const response = await api.patch('/user/avatar', fileUpdateForm)
        user.avatar = response.data.avatar
        console.log(response)

      }


      await api.put('/user', user)

      localStorage.setItem('@rocketmovies:user', JSON.stringify(user))

      setData({ user, token: data.token })
      alert('Perfil atualizado com sucesso')
    } catch (err) {
      if (err.message) {
        alert(err.response.data.message)
      } else {
        alert('não foi possivel atualizar o perfil')
      }
    }
  }

  async function handleAddMovie(movie) {
    if (!movie) return
    api.post('/notes', movie)
      .then(resp => {
        alert('Filme adicionado com sucesso')
      }).catch(err => {
        if (err.message) {
          alert(err.response.data.message)
        } else {
          alert('não foi possivel adicionar o filme')
        }
      })
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
    <UserContext.Provider value={{ user: data.user, title, signIn, signOut, updateProfile, handleSetTitle, handleAddMovie }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  return useContext(UserContext);
}