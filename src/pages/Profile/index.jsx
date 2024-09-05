import { useEffect, useState } from 'react';

import { useUser } from '../../hooks/useUser'

import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi';
import defaultAvatar from '../../assets/avatar_placeholder.svg'

import { Undo } from "../../components/Undo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Avatar } from "./styles";
import { api } from '../../services/api';

export function Profile() {
  const { user, updateProfile } = useUser()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : defaultAvatar
  const [avatar, setAvatar] = useState(avatarURL)
  const [avatarFile, setAvatarFile] = useState(null)


  function handleUpdateProfile() {
    const updated = { name, email, old_password: oldPassword, password }
    const userUpdated = Object.assign(user, updated)
    updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(e) {
    const file = e.target.files[0]
    setAvatarFile(file)
    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  useEffect(() => {
    setName(user.name)
    setEmail(user.email)
  }, [])

  return (
    <Container>
      <header>
        <Undo title='Voltar' url='/' icon={FiArrowLeft} />
      </header>
      <Form onSubmit={e => e.preventDefault()}>
        <Avatar>
          <img src={avatar} alt="foto do usuario" />

          <label htmlFor="search-img">
            <input
              type="file" id="search-img"
              onChange={handleChangeAvatar}
            />
            <FiCamera />
          </label>
        </Avatar>

        <Input
          placeholder={'Nome'} value={name} type="text" icon={FiUser}
          onChange={e => setName(e.target.value)}
        />
        <Input
          placeholder={'Email'} value={email} type="text" icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder={'Senha atual'} type="password" icon={FiLock}
          onChange={e => setOldPassword(e.target.value)}
        />
        <Input
          placeholder={'Nova senha'} type="password" icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />
        <Button title={'Salvar'} type="submit" onClick={handleUpdateProfile} />
      </Form>

    </Container>
  )
}