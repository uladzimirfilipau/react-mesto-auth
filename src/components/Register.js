import { useState } from 'react';
import AuthForm from './AuthForm';

function Register({ onRegister }) {
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
    onRegister({ email, password });
  }

  return (
    <AuthForm
      email={email}
      password={password}
      title={'Регистрация'}
      buttonText={'Зарегистрироваться'}
      captionText={'Уже зарегистрированы?'}
      linkText={'Войти'}
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      onSubmit={handleSubmit}
    />
  );
}

export default Register;
