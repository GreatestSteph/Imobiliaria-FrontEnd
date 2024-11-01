import Headerfuncionariologado from "./telas-componentes/logineheader/headerfuncionariologado.jsx"
import Headerdeslogado from "./telas-componentes/logineheader/headerdeslogado.jsx"
import Imobiliarialogin from "./telas-componentes/logineheader/teladelogin.jsx"
import Imobiliariacadastrocliente from "./telas-componentes/logineheader/teladecadastrocliente.jsx"
import Imobiliariacadastrofuncionario from "./telas-componentes/administrativo/cadastrarfuncionario.jsx"
import Imobiliariacadastroimovel from "./telas-componentes/administrativo/cadastrarimovel.jsx"
import AdministradorHome from "./telas-componentes/administrativo/administradorhome.jsx"
import Empreendimentos from './telas-componentes/empreendimentos/empreendimentos.jsx'
import Footer from './telas-componentes/footer/footer.jsx'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
        <BrowserRouter>

          <Routes>
            /* Outras páginas a fazer - Login do cliente (cliente/deslogado) */
            <Route path="login" element={
              <>
                <Headerdeslogado/>
                <Imobiliarialogin/>
                <Footer/>
              </>
            } />
            /* Funções a serem entregues - Cadastro de cliente (cliente/deslogado) */
            <Route path="cadastrocliente" element={
              <>
                <Headerdeslogado/>
                <Imobiliariacadastrocliente/>
                <Footer/>
              </>
            } />
            
            /* Outras páginas a fazer - Página de boas vindas home (cliente/deslogado) */
            <Route path="/" element={
              <>
                <Headerdeslogado/>
                <Empreendimentos/>
                <Footer/>
              </>
            } />
            /* Outras páginas a fazer - Empreendimentos imóveis (cliente/deslogado) */
            <Route path="empreendimentos" element={
              <>
                <Headerdeslogado/>
                <Empreendimentos/>
                <Footer/>
              </>
            } />

            


            /* Outras páginas a fazer - Página de boas vindas (funcionario logado) */
            <Route path="administrador" element={
              <>
                <Headerfuncionariologado/>
                <AdministradorHome/>
                <Footer/>
              </>
            } />
            /* Outras páginas a fazer - Empreendimentos (funcionario logado) */
            <Route path="empreendimentosfuncionario" element={
              <>
                <Headerfuncionariologado/>
                <Empreendimentos/>
                <Footer/>
              </>
            } />
            /* Outras páginas a fazer - Minha conta (funcionario logado)  */
            <Route path="minha-conta-funcionario" element={
              <>
                <Headerfuncionariologado/>
                <Empreendimentos/>
                <Footer/>
              </>
            } />
            /* Funções a serem entregues - Cadastrar outro funcionário (funcionario logado)  */
            <Route path="cadastrofuncionario" element={
              <>
                <Headerfuncionariologado/>
                <Imobiliariacadastrofuncionario/>
                <Footer/>
              </>
            } />
            /* Funções a serem entregues - Cadastrar outro imóvel (funcionario logado)  */
            <Route path="cadastroimovel" element={
              <>
                <Headerfuncionariologado/>
                <Imobiliariacadastroimovel/>
                <Footer/>
              </>
            } />
            

          </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
