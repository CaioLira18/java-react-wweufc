import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  return (
    <div className="loginContainer">
      <div className="loginBox">
        <div className="logoSection">
        <div className="logosAdicionar">
            <img src="https://res.cloudinary.com/dthgw4q5d/image/upload/v1763598134/WWE_Logo.svg_b2gftp.png" alt="" />
            <img src="https://res.cloudinary.com/dthgw4q5d/image/upload/v1763735323/drilldown_qddjmf.png" alt="" />
        </div>
          <h1 className="title">Bem-vindo de volta!</h1>
          <p className="subtitle">Entre com suas credenciais para acessar o painel</p>
        </div>

        <form onSubmit={handleSubmit} className="loginForm">
          <div className="inputGroup">
            <label className="label">Email</label>
            <div className="inputWrapper">
              <Mail size={20} className="inputIcon" />
              <input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                required
              />
            </div>
          </div>

          <div className="inputGroup">
            <label className="label">Senha</label>
            <div className="inputWrapper">
              <Lock size={20} className="inputIcon" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="eyeButton"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="optionsRow">
            <label className="checkboxLabel">
              <input type="checkbox" className="checkbox" />
              <span className="checkboxText">Lembrar-me</span>
            </label>
            <a href="#" className="forgotPassword">Esqueceu a senha?</a>
          </div>

          <button type="submit" className="loginButton">
            Entrar
          </button>

          <div className="divider">
            <span className="dividerLine"></span>
            <span className="dividerText">OU</span>
            <span className="dividerLine"></span>
          </div>

          <button type="button" className="googleButton">
            <svg className="googleIcon" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continuar com Google
          </button>

          <p className="signupText">
            Não tem uma conta? <a href="/register" className="signupLink">Cadastre-se</a>
          </p>
        </form>
      </div>

      <div className="backgroundDecoration">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
      </div>
    </div>
  );
};

export default Login;