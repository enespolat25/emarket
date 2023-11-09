import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom'; // react-router-dom sürüm 6 veya üzeri kullanılıyorsa
import StorefrontIcon from '@mui/icons-material/Storefront';
import { auth } from './firebaseconfig';

function Login() {
  const navigate = useNavigate(); // "useNavigate" kullanımı

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        navigate('/'); // "navigate" fonksiyonu kullanımı
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        navigate('/'); // "navigate" fonksiyonu kullanımı
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="login__logo">
          <StorefrontIcon className="login__logoImage" fontSize="large" />
          <h2 className="login__logoTitle">eMarket</h2>
        </div>
      </Link>

      <div className="login__container">
        <h1>Giriş Yap</h1>

        <form>
          <h5>Mail Adresi</h5>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

          <h5>Şifre</h5>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button type="submit" className="login__signInButton" onClick={signIn}>
            Giriş Yap
          </button>
        </form>

        <p>
          By signing-in you agree to the eMarket Website Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton" onClick={register}>
          eMarket Hesabı Oluştur
        </button>
      </div>
    </div>
  );
}

export default Login;
