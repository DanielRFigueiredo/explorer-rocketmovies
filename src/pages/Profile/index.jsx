import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi';

import { Undo } from "../../components/Undo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Avatar } from "./styles";

export function Profile() {
  return (
    <Container>
      <header>
        <Undo title='Voltar' url='/' icon={FiArrowLeft} />
      </header>
      <Form>
        <Avatar>
          <img src="https://randomuser.me/api/portraits/men/18.jpg" alt="foto do usuario" />

          <label htmlFor="search-img">
            <input type="file" id="search-img" />
            <FiCamera />
          </label>
        </Avatar>

        <Input placeholder={'Nome'} defaultValue={'Daniel Figueiredo'} type="text" icon={FiUser} />
        <Input placeholder={'Email'} defaultValue={'danielfigueiredo95@hotmail.com'} type="text" icon={FiMail} />
        <Input placeholder={'Senha atual'} type="password" icon={FiLock} />
        <Input placeholder={'Nova senha'} type="password" icon={FiLock} />

        <Button title={'Salvar'} type="submit" />
      </Form>

    </Container>
  )
}