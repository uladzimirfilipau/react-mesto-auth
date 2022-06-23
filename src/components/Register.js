import { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <form className='form' onSubmit={handleSubmit}>
      <h2 className='form__title'>Регистрация</h2>
      <input
        className='form__input form__input_type_email'
        placeholder='Email'
        name='email'
        type='email'
        id='email'
        value={email}
        onChange={handleEmailChange}
        minLength='8'
        maxLength='40'
        required
      />

      <input
        className='form__input form__input_type_password'
        placeholder='Пароль'
        name='password'
        type='password'
        id='password'
        value={password}
        onChange={handlePasswordChange}
        minLength='8'
        maxLength='40'
        required
      />

      <button type='submit' className='form__submit-button'>
        Зарегистрироваться
      </button>

      <p className='form__signin'>
        Уже зарегистрированы?&nbsp;
        <Link to='sign-in' className='form__link'>
          Войти
        </Link>
      </p>
    </form>
  );
}

export default Register;
