import { useHistory } from 'react-router-dom';
import { firebase, auth } from '../../services/firebase';
import Button from './Button';

import Input from './Input';

import * as S from './style';

const Form = () => {
  const history = useHistory();
  // const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      // await dispatch(login(form));
      history.push('/home');
    } catch (err) {
      history.push('/home');
      // err.response?.data?.message || err.message, 'error';
    }
  };

  return (
    <S.Form action="" onSubmit={handleLogin}>
      <h2>Bem-Vindo(a) de volta!</h2>
      <p>Acesse sua conta:</p>
      <Input name="user" type="text" placeholder="Usuário" />
      <Input name="pass" type="text" placeholder="Senha" />
      <S.MidSection>
        <div>
          <Input name="Login" type="checkbox" />
          <label htmlFor="Login">Salvar Login</label>
        </div>
        <a href="/">Esqueci a senha</a>
      </S.MidSection>
      <Button>Entrar</Button>

      <S.FooterForm>
        <p>
          Ainda não tem o login? <a href="/">Cadastre-se</a>
        </p>
      </S.FooterForm>
    </S.Form>
  );
};

export default Form;
