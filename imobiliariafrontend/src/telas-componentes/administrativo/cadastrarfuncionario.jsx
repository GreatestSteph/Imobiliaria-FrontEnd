import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando Bootstrap CSS
import Cadastroengrenagemselecionado from "./barralateralimagens/iconesselecionados/cadastrarengrenagem.svg"; 
import Financeiromoeda from "./barralateralimagens/iconesnaoselecionados/financeiromoeda.svg"; 
import Calendariovisitas from "./barralateralimagens/iconesnaoselecionados/calendariovisitas.svg"; 
import Relatorio from "./barralateralimagens/iconesnaoselecionados/relatorio.svg"; 
import Casa from "./barralateralimagens/iconesnaoselecionados/casacadastrar.svg"; 
import Iconeusuario from "./barralateralimagens/usuario.png"; 
import simbolomenuaberto from "./barralateralimagens/menudabarralateral/menuabertosimbolo.svg"; 
import simbolomenufechado from "./barralateralimagens/menudabarralateral/fecharmenusimbolo.svg"; 
import './estilomenuanimacao/estiloparaanimacaomenu.css';

const estiloSidebar = {
  container: {
    backgroundColor: '#6ea1d3',
    paddingTop: '100px',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
  },
  profilePicture: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  menuItemActive: {
    backgroundColor: '#2b76b9',
    color: 'white',
  },
  icon: {
    marginRight: '10px',
    width: '24px',
    height: '24px',
  },
  posicaoformulario: {
    paddingTop: '90px',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  menuestilofechado: {
    padding: '10px',
    borderRadius: '5px',
  },
  botaodecadastrofunc: {
    backgroundColor: 'rgba(17, 65, 106, 1)',
  },
};

function Imobiliariacadastrofuncionario() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [menuVisivel, setMenuVisivel] = useState(false); // Novo estado para controlar a visibilidade do menu

  const toggleMenu = () => {
    setMenuAberto((prev) => !prev);
    setMenuVisivel(true); // Torna o menu visível na primeira interação
  };


  return (
    <div>
      {/* Menu */}
      <div className={`${menuVisivel ? (menuAberto ? 'd-flex fade-slide-in' : 'd-flex fade-slide-out') : 'd-none'} flex-column align-items-center tamanhomenuresponsivo`} style={estiloSidebar.container}>
        {/* Perfil */}
        <span className="text-decoration-none w-100 text-white mb-4">
          <div className="d-flex justify-content-end me-3 mb-4">
            <img className="menufechar" onClick={toggleMenu} src={simbolomenufechado} alt="Fechar" />
          </div>
          <a className="text-decoration-none text-white d-flex align-items-center p-3 me-4">
            <img style={estiloSidebar.profilePicture} src={Iconeusuario} alt="Profile" />
            <span className="mx-auto">Fulano Betrano</span>
          </a>
        </span>
        
        <div className="w-100">
          <a href='cadastrofuncionario' className="text-decoration-none text-white d-flex align-items-center p-3 border-bottom" style={estiloSidebar.menuItemActive}>
              <img src={Cadastroengrenagemselecionado} alt="Cadastrar Funcionário" style={estiloSidebar.icon} />
              <span className="mx-auto">Cadastrar Funcionário</span>
          </a>
          <a href='' className="text-decoration-none text-black d-flex align-items-center p-3 border-bottom bg-white">
            <img src={Financeiromoeda} alt="Financeiro" style={estiloSidebar.icon} />
            <span className="mx-auto">Financeiro</span>
          </a>
          <a href='' className="text-decoration-none text-black d-flex align-items-center p-3 border-bottom bg-white">
            <img src={Calendariovisitas} alt="Visitas Agendadas" style={estiloSidebar.icon} />
            <span className="mx-auto">Visitas Agendadas</span>
          </a>
          <a href='' className="text-decoration-none text-black d-flex align-items-center p-3 border-bottom bg-white">
            <img src={Relatorio} alt="Gerar Relatório" style={estiloSidebar.icon} />
            <span className="mx-auto">Gerar Relatório</span>
          </a>
          <a href='cadastroimovel' className="text-decoration-none text-black d-flex align-items-center p-3 border-bottom bg-white">
            <img src={Casa} alt="Cadastrar Imóveis" style={estiloSidebar.icon} />
            <span className="mx-auto">Cadastrar Imóveis</span>
          </a>
        </div>
      </div>

      {/* Cadastrar Funcionário */}
      <aside style={estiloSidebar.posicaoformulario} className="mb-5">
        <div className="pb-5">
          <div className="mb-4 d-flex align-items-center">
            {/* O icone com 3 barrinhas abre o menu (muda ele para d-flex) */}
            <img className="me-3 menuabrir" style={estiloSidebar.menuestilofechado} src={simbolomenuaberto} onClick={toggleMenu} alt="Logo do menu" />
            
            {/* Formulário de cadastrar funcionário */}
            <h3 className="mb-0 ms-2">Cadastramento de funcionários</h3>
          </div>
          <div className="p-4" style={{ backgroundColor: "#e3f2fd", borderRadius: "8px" }}>
          <form>
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label htmlFor="nomeCompleto" className="form-label">Nome Completo</label>
                  <input type="text" className="form-control" id="nomeCompleto" placeholder="Fulano Beltrano" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="telefone" className="form-label">Telefone</label>
                  <input type="text" className="form-control" id="telefone" placeholder="+55 (19) 9 9999-9999" />
                </div>
              </div>

              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label htmlFor="dataNascimento" className="form-label">Data de Nascimento</label>
                  <input type="date" className="form-control" id="dataNascimento" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">E-mail</label>
                  <input type="email" className="form-control" id="email" placeholder="fulanobeltrano@teste.com" />
                </div>
              </div>

              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label htmlFor="cpf" className="form-label">CPF</label>
                  <input type="text" className="form-control" id="cpf" placeholder="000.000.000-00" />
                </div>
                
                <div className="col-md-6">
                  <label htmlFor="senhaAcesso" className="form-label">Senha de Acesso</label>
                  <div className="d-flex flex-row">
                    <input type="password" className="form-control" id="senhaAcesso" placeholder="*************" />
                    <span className="input-group-text">
                      <img className=""/>
                    </span>
                  </div>
                </div>
              </div>

              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label htmlFor="novaSenha" className="form-label">Nova Senha</label>
                  <div className="d-flex flex-row">
                    <input type="password" className="form-control" id="novaSenha" placeholder="*************" />
                    <span className="input-group-text">
                      <img className=""/>
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="repitaSenha" className="form-label">Repita a Senha</label>
                  <div className="d-flex flex-row">
                    <input type="password" className="form-control" id="repitaSenha" placeholder="*************" />
                    <span className="input-group-text">
                      <img className=""/>
                    </span>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-end">
                <button style={estiloSidebar.botaodecadastrofunc} type="submit" className="btn btn-primary">Cadastrar</button>
              </div>
            </form>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Imobiliariacadastrofuncionario;
