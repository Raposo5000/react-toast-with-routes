import React from 'react';
import { Link } from 'react-router-dom'
import ButtonShowToast from '../../components/ButtonShowToast'

const SecondPage = () => {
  return (
    <div>
      <h1>Segunda Página</h1>
      <ButtonShowToast type="sucess" title="Titulo" message="mensagem de sucesso">Sucesso</ButtonShowToast>
      <ButtonShowToast type="error" title="Titulo" message="mensagem de erro">Erro</ButtonShowToast>
      <ButtonShowToast type="warn" title="Titulo" message="mensagem de cuidado">Cuidado</ButtonShowToast>
      <ButtonShowToast type="default" title="Titulo" message="mensagem default">Default</ButtonShowToast>
      <ButtonShowToast type="dark" title="Titulo" message="mensagem dark">Dark</ButtonShowToast>
      <ButtonShowToast type="info" title="Titulo" message="mensagem de Info">Info</ButtonShowToast>
      <Link to='/'><button>Ir para página inicial</button></Link>
    </div>
  );
}

export default SecondPage;
