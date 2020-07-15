import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo-img.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Dashboard</Title>

      <Form>
        <input placeholder="Digite o nome do repostiório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/45317024?s=460&u=1687b30021ea4dd65cfbdbbea7e677fd0c90dbe3&v=4"
            alt="user"
          />
          <div>
            <strong>ezequiel/mega-sena</strong>
            <p>App para sortear numeros para jogar na mega-sena</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/45317024?s=460&u=1687b30021ea4dd65cfbdbbea7e677fd0c90dbe3&v=4"
            alt="user"
          />
          <div>
            <strong>ezequiel/mega-sena</strong>
            <p>App para sortear numeros para jogar na mega-sena</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/45317024?s=460&u=1687b30021ea4dd65cfbdbbea7e677fd0c90dbe3&v=4"
            alt="user"
          />
          <div>
            <strong>ezequiel/mega-sena</strong>
            <p>App para sortear numeros para jogar na mega-sena</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
