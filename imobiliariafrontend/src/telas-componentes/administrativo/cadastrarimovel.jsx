import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando Bootstrap CSS
import Cadastroengrenagem from "./barralateralimagens/iconesnaoselecionados/cadastrarengrenagem.svg"; 
import Financeiromoeda from "./barralateralimagens/iconesnaoselecionados/financeiromoeda.svg"; 
import Calendariovisitas from "./barralateralimagens/iconesnaoselecionados/calendariovisitas.svg"; 
import Relatorio from "./barralateralimagens/iconesnaoselecionados/relatorio.svg"; 
import Casaselecionado from "./barralateralimagens/iconesselecionados/cadastrarimoveis.svg"; 
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
  const [selectedImages, setSelectedImages] = useState([]);
  const [menuAberto, setMenuAberto] = useState(false);
  const [menuVisivel, setMenuVisivel] = useState(false); // Novo estado para controlar a visibilidade do menu

  const toggleMenu = () => {
    setMenuAberto((prev) => !prev);
    setMenuVisivel(true); // Torna o menu visível na primeira interação
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files); // Converte a lista de arquivos em um array
    setSelectedImages(files);
  };


  return (
    <div>
      {/* Menu */}
      <div className={`${menuVisivel ? (menuAberto ? 'd-flex fade-slide-in' : 'd-flex fade-slide-out') : 'd-none'} tamanhomenuresponsivo flex-column align-items-center`} style={estiloSidebar.container}>
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
          <a href='cadastrofuncionario' className="text-decoration-none text-black d-flex align-items-center p-3 border-bottom  bg-white">
              <img src={Cadastroengrenagem} alt="Cadastrar Funcionário" style={estiloSidebar.icon} />
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
          <a href='cadastroimovel' className="text-decoration-none text-white d-flex align-items-center p-3" style={estiloSidebar.menuItemActive}>
            <img src={Casaselecionado} alt="Cadastrar Imóveis" style={estiloSidebar.icon} />
            <span className="mx-auto">Cadastrar Imóveis</span>
          </a>
        </div>
      </div>

      {/* Cadastrar Funcionário */}
      <aside style={estiloSidebar.posicaoformulario}>
        <div className="pb-2">
          <div className="mb-4 d-flex align-items-center">
            {/* O icone com 3 barrinhas abre o menu (muda ele para d-flex) */}
            <img className="me-3 menuabrir" style={estiloSidebar.menuestilofechado} src={simbolomenuaberto} onClick={toggleMenu} alt="Logo do menu" />
            
            {/* Formulário de cadastrar funcionário */}
            <h3 className="tituloformularioimovel mb-0 mx-auto">Cadastro de Imóveis</h3>
          </div>
          <div className="px-4 pt-3 pb-3" style={{ backgroundColor: "#e3f2fd", borderRadius: "8px" }}>
            <form>
              <div className="row">
                <div className="col-md-5 mb-3">
                  <label className="form-label">Nome do imóvel</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label">Valor do imóvel (R$)</label>
                  <input type="number" className="form-control" />
                </div>
                <div className="col-md-3 mb-3">
                  <label className="form-label">Metragem (m²)</label>
                  <input type="number" className="form-control" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 mb-3">
                  <label>Cidade</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-4 mb-3">
                  <label>Região</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-4 mb-3">
                  <label>Bairro</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 mb-3">
                  <label className="form-label">Tipo do Imóvel</label>
                  <select className="form-select">
                    <option>Selecione</option>
                  </select>
                </div>
                <div className="col-md-2 mb-3">
                  <label className="form-label">Quartos</label>
                  <input type="number" className="form-control" min="1" max="10" />
                </div>
                <div className="col-md-2 mb-3">
                  <label className="form-label">Banheiros</label>
                  <input type="number" className="form-control" min="1" max="10" />
                </div>
                <div className="col-md-2 mb-3">
                  <label className="form-label">Vagas</label>
                  <input type="number" className="form-control" min="1" max="10" />
                </div>
                <div className="col-md-2 mb-3">
                  <label className="form-label">N° do Andar</label>
                  <input type="number" className="form-control" />
                </div>
              </div>

              <div className="row">
                <div className="col-6 col-md-3 col-lg-2 mb-3">
                  <label className="form-label">Tipos de Classe</label>
                  <div>
                    <input type="radio" id="alta" name="classe" value="alta" /> <label htmlFor="alta">Alta</label>
                    <input type="radio" id="media" name="classe" value="media" className="ms-3" /> <label htmlFor="media">Média</label>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2 mb-3">
                  <label className="form-label">Paisagismo</label>
                  <div>
                    <input type="radio" id="paisagismo-sim" name="paisagismo" value="sim" /> <label htmlFor="paisagismo-sim">Sim</label>
                    <input type="radio" id="paisagismo-nao" name="paisagismo" value="nao" className="ms-3" /> <label htmlFor="paisagismo-nao">Não</label>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2 col-lg-2 mb-3">
                  <label className="form-label">Mobiliado</label>
                  <div>
                    <input type="radio" id="mobiliado-sim" name="mobiliado" value="sim" /> <label htmlFor="mobiliado-sim">Sim</label>
                    <input type="radio" id="mobiliado-nao" name="mobiliado" value="nao" className="ms-3" /> <label htmlFor="mobiliado-nao">Não</label>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2 mb-3">
                  <label className="form-label">Piscina</label>
                  <div>
                    <input type="radio" id="piscina-sim" name="piscina" value="sim" /> <label htmlFor="piscina-sim">Sim</label>
                    <input type="radio" id="piscina-nao" name="piscina" value="nao" className="ms-3" /> <label htmlFor="piscina-nao">Não</label>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2 mb-3">
                  <label className="form-label">Próx. a escolas?</label>
                  <div>
                    <input type="radio" id="instituicao-sim" name="instituicao" value="sim" /> <label htmlFor="instituicao-sim">Sim</label>
                    <input type="radio" id="instituicao-nao" name="instituicao" value="nao" className="ms-3" /> <label htmlFor="instituicao-nao">Não</label>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2 mb-3">
                  <label className="form-label">Próx. a comércios?</label>
                  <div>
                    <input type="radio" id="comercio-sim" name="comercio" value="sim" /> <label htmlFor="comercio-sim">Sim</label>
                    <input type="radio" id="comercio-nao" name="comercio" value="nao" className="ms-3" /> <label htmlFor="comercio-nao">Não</label>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2 mb-3">
                  <label className="form-label">Próx. a parques?</label>
                  <div>
                    <input type="radio" id="parque-sim" name="parque" value="sim" /> <label htmlFor="parque-sim">Sim</label>
                    <input type="radio" id="parque-nao" name="parque" value="nao" className="ms-3" /> <label htmlFor="parque-nao">Não</label>
                  </div>
                </div>
                <div className="col-6 col-md-2 mb-3">
                  <label className="form-label">Ar condicionado</label>
                  <div>
                    <input type="radio" id="arcondicionado-sim" name="arcondicionado" value="sim" /> <label htmlFor="arcondicionado-sim">Sim</label>
                    <input type="radio" id="arcondicionado-nao" name="arcondicionado" value="nao" className="ms-3" /> <label htmlFor="arcondicionado-nao">Não</label>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2 mb-3">
                  <label className="form-label">Hidromassagem</label>
                  <div>
                    <input type="radio" id="hidromassagem-sim" name="hidromassagem" value="sim" /> <label htmlFor="hidromassagem-sim">Sim</label>
                    <input type="radio" id="hidromassagem-nao" name="hidromassagem" value="nao" className="ms-3" /> <label htmlFor="hidromassagem-nao">Não</label>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2 mb-3">
                  <label className="form-label">Área Gourmet</label>
                  <div>
                    <input type="radio" id="gourmet-sim" name="gourmet" value="sim" /> <label htmlFor="gourmet-sim">Sim</label>
                    <input type="radio" id="gourmet-nao" name="gourmet" value="nao" className="ms-3" /> <label htmlFor="gourmet-nao">Não</label>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2 mb-3">
                  <label className="form-label">Garagem coberta</label>
                  <div>
                    <input type="radio" id="garagem-sim" name="garagem" value="sim" /> <label htmlFor="garagem-sim">Sim</label>
                    <input type="radio" id="garagem-nao" name="garagem" value="nao" className="ms-3" /> <label htmlFor="garagem-nao">Não</label>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2 mb-3">
                  <label className="form-label">Quintal ou varanda</label>
                  <div>
                    <input type="radio" id="quintalvaranda-sim" name="quintalvaranda" value="sim" /> <label htmlFor="quintalvaranda-sim">Sim</label>
                    <input type="radio" id="quintalvaranda-nao" name="quintalvaranda" value="nao" className="ms-3" /> <label htmlFor="quintalvaranda-nao">Não</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6 col-md-3 col-lg-2 mb-3">
                  <label className="form-label">Próx. a transportes?</label>
                  <div>
                    <input type="radio" id="transporte-sim" name="transporte" value="sim" /> <label htmlFor="transporte-sim">Sim</label>
                    <input type="radio" id="transporte-nao" name="transporte" value="nao" className="ms-3" /> <label htmlFor="transporte-nao">Não</label>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2 mb-3">
                  <label className="form-label">Receita</label>
                  <div>
                    <input type="radio" id="aluguel" name="receita" value="aluguel" /> <label htmlFor="aluguel">Aluguel</label>
                    <input type="radio" id="venda" name="receita" value="venda" className="ms-3" /> <label htmlFor="venda">Venda</label>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2 mb-3">
                  <label className="form-label">Imóvel ativo?</label>
                  <div>
                    <input type="radio" id="ativo-sim" name="ativo" value="sim" /> <label htmlFor="ativo-sim">Sim</label>
                    <input type="radio" id="ativo-nao" name="ativo" value="nao" className="ms-3" /> <label htmlFor="ativo-nao">Não</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label">Descrição</label>
                  <textarea className="form-control" rows="8"></textarea>
                </div>
                <div className="mb-3 col-md-6">
                  {/* Campo de seleção de imagens */}
                  <div>
                    <label htmlFor="imageUpload" className="form-label">Selecionar Imagens</label>
                    <input type="file" id="imageUpload" className="form-control mb-2" multiple accept="image/*" onChange={handleImageChange} />

                    {/* Exibição das imagens selecionadas */}
                    <label className="form-label">Imagens Selecionadas:</label>
                    <div className="d-flex flex-wrap">
                      {selectedImages.map((image, index) => (
                        <div key={index} className="p-2 mx-auto">
                          <img src={URL.createObjectURL(image)} alt={`Selecionada ${index + 1}`} style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "8px" }}/>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              <div className="d-flex justify-content-end">
                <button style={estiloSidebar.botaodecadastrofunc} type="submit" className="btn btn-primary px-4">Cadastrar Imóvel</button>
              </div>
            </form>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Imobiliariacadastrofuncionario;
