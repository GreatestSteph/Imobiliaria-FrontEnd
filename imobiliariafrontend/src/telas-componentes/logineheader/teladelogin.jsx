import React from "react";
import Loginlogo from "./loginlogo/loginlogo.png";

export default function Imobiliarialogin() {
  const estiloSidebar = {
    cordefundo: {
      backgroundColor: '#11416A',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
    },
    logo: {
      marginBottom: '20px',
      textAlign: 'center',
    },
    loginContainer: {
      backgroundColor: '#1F4D7A',
      padding: '40px',
      borderRadius: '15px',
      width: '100%',
      maxWidth: '400px',
      textAlign: 'center',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '8px',
      border: 'none',
      fontSize: '16px',
      height: '50px',
    },
    button: {
      width: '100%',
      padding: '10px',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: '#2579C2',
      color: '#fff',
      fontSize: '16px',
      cursor: 'pointer',
      height: '50px',
    },
    link: {
      color: '#AAD7FF',
      textDecoration: 'none',
      marginTop: '10px',
      display: 'block',
    },
    cortextofontelogo: {
      color: '#AAD7FF',
      fontSize: '14px',
    }
  };

  return (
    <section style={estiloSidebar.cordefundo}>
      <div style={estiloSidebar.loginContainer}>
        <div style={estiloSidebar.logo}>
          <img src={Loginlogo} alt="Logo"/>
          <p className="fw-medium" style={estiloSidebar.cortextofontelogo}>Faça negócios, construa memórias</p>
        </div>
        <h5 className="mt-4 ms-1 mb-2"> Faça seu login</h5>
        <input type="email" placeholder="E-mail" style={estiloSidebar.input} />
        <input type="password" placeholder="Senha" style={estiloSidebar.input} />
        <button className="mt-2 mb-2" style={estiloSidebar.button}>Entrar</button>
        <a href="#" className="fw-medium mt-3" style={estiloSidebar.link}>Esqueci minha senha</a>
        <a href="cadastrocliente" style={estiloSidebar.link}>Criar conta</a>
      </div>
    </section>
  );
}
