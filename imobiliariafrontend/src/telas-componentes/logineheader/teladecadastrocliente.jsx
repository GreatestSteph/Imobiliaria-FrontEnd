import React from "react";
import Loginlogo from "./loginlogo/loginlogo.png";

export default function CadastroCliente() {
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
    cadastroContainer: {
      backgroundColor: '#1F4D7A',
      padding: '40px',
      borderRadius: '15px',
      width: '80%',
      maxWidth: '800px',
      textAlign: 'center',
    },
    input: {
      height: '50px',
      width: '100%',
      padding: '10px',
      margin: '7px 0',
      borderRadius: '8px',
      border: 'none',
      fontSize: '16px',
    },
    button: {
      width: '100%',
      padding: '10px',
      marginTop: '20px',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: '#2579C2',
      color: '#fff',
      fontSize: '16px',
      cursor: 'pointer',
    },
    link: {
      color: '#AAD7FF',
      textDecoration: 'none',
      display: 'block',
      marginTop: '10px',
    },
    cortextofontelogo: {
      color: '#AAD7FF',
      fontSize: '14px',
    }
  };

  return (
    <section className="pt-5" style={estiloSidebar.cordefundo}>
      <div className="mt-3" style={estiloSidebar.cadastroContainer}>
        <div style={estiloSidebar.logo}>
          <img src={Loginlogo} alt="Logo"/>
          <p className="fw-medium" style={estiloSidebar.cortextofontelogo}>Faça negócios, construa memórias</p>
        </div>
        <h5 className="mt-3 ms-1 mb-4 d-flex justify-content-start">Faça seu cadastro</h5>
        <div className="row mb-2">
          <div className="col-md-6">
            <input type="text" placeholder="Seu nome completo" style={estiloSidebar.input} />
          </div>
          <div className="col-md-6">
            <input type="text" placeholder="CPF" style={estiloSidebar.input} />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-6">
            <input type="tel" placeholder="Telefone" style={estiloSidebar.input} />
          </div>
          <div className="col-md-6">
            <input type="date" placeholder="Data de nascimento" style={estiloSidebar.input} />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-6">
            <input type="email" placeholder="E-mail" style={estiloSidebar.input} />
          </div>
          <div className="col-md-6">
            <input type="password" placeholder="Senha" style={estiloSidebar.input} />
          </div>
        </div>
        <div className="row">
          <a href="login" className="col-6 fw-medium d-flex justify-content-center align-items-center" style={estiloSidebar.link}>← Voltar para o login</a>
          <div className="col-6">
            <button style={estiloSidebar.button}>Criar Conta</button>
          </div>
        </div>
      </div>
    </section>
  );
}
