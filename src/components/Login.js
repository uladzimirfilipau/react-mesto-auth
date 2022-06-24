import { useState } from 'react';
import AuthForm from './AuthForm';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({ email, password });
  }

  return (
    <AuthForm
      email={email}
      password={password}
      title={'Вход'}
      buttonText={'Войти'}
      captionText={'Не зарегистрированы?'}
      linkText={'Регистрация'}
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      onSubmit={handleSubmit}
    />
  );
}

export default Login;
