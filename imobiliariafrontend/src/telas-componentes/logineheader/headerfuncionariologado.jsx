import React from "react"; 
import { Link, useLocation } from "react-router-dom"; // Importando Link e useLocation do React Router
import Logobranco from "./imagensheader/headerfundoescuro.png"; // substituir pelo caminho correto da imagem do logo

export default function Headerlogado() {
    const estiloHeader = {
        itensheader: {
            fontFamily: 'Raleway',
            color: 'white',
            textDecoration: 'none',
            height: '100%',
        },
        fundodoHeader: {
            backgroundColor: 'rgba(17, 65, 106, 1)',
            width: '100%',
            position: 'fixed',
            zIndex: 100,
            padding: '10px 20px',
            height: '70px', 
        },
        sairButton: {
            backgroundColor: 'white',
            color: 'rgba(17, 65, 106, 1)',
            borderRadius: '8px',
            padding: '5px 20px',
            textDecoration: 'none',
            fontFamily: 'Raleway',
        },
        tamanhoitems: {
            paddingTop: '23px',
            paddingBottom: '19px',
            borderBottom: '4px solid transparent',
            transition: 'border-color 0.3s',
        },
        itemAtivo: {
            borderBottom: '4px solid #56ACFC', // Azul forte claro para o item ativo
        },
        itemHover: {
            borderBottom: '4px solid rgba(86, 172, 252, 0.5)', // Azul transparente para hover
        }
    };

    const location = useLocation(); // Pega a localização da página atual

    // Indica qual item do header ficara ativo, de acordo com a página
    const getItemAtivo = () => {
        switch (location.pathname) {
            case '/cadastrofuncionario':
                return 'cadastrofuncionario';
            case '/empreendimentosfuncionario':
                return 'empreendimentosfuncionario';
            case '/minha-conta-funcionario':
                return 'minha-conta-funcionario';
            default:
                return 'cadastrofuncionario'; // Padrão para Home caso o funcionário esteja logado
        }
    };

    const itemAtivo = getItemAtivo(); // Atualizando o item ativo com base na localização

    return (
        <header className="d-flex justify-content-between align-items-center" style={estiloHeader.fundodoHeader}>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100..900&display=swap" rel="stylesheet" />

            <div className="d-flex align-items-center">
                <img className="ms-2 me-4" src={Logobranco} alt="Logo" height="40" />
                <Link to="/cadastrofuncionario" style={estiloHeader.itensheader}>
                    <div 
                        className="d-md-flex d-none px-4 px-lg-5" 
                        style={{ ...estiloHeader.tamanhoitems, ...(itemAtivo === 'cadastrofuncionario' ? estiloHeader.itemAtivo : {}) }} 
                        onMouseEnter={(e) => e.currentTarget.style.borderBottom = estiloHeader.itemHover.borderBottom}
                        onMouseLeave={(e) => e.currentTarget.style.borderBottom = itemAtivo === 'cadastrofuncionario' ? estiloHeader.itemAtivo.borderBottom : '4px solid transparent'}>
                        Home
                    </div>
                </Link>
                <Link to="/empreendimentosfuncionario" style={estiloHeader.itensheader}>
                    <div 
                        className="px-4 px-lg-5" 
                        style={{ ...estiloHeader.tamanhoitems, ...(itemAtivo === 'empreendimentosfuncionario' ? estiloHeader.itemAtivo : {}) }} 
                        onMouseEnter={(e) => e.currentTarget.style.borderBottom = estiloHeader.itemHover.borderBottom}
                        onMouseLeave={(e) => e.currentTarget.style.borderBottom = itemAtivo === 'empreendimentosfuncionario' ? estiloHeader.itemAtivo.borderBottom : '4px solid transparent'}>
                        Empreendimentos
                    </div>
                </Link>
                <Link to="/minha-conta-funcionario" style={estiloHeader.itensheader}>
                    <div 
                        className="d-md-flex d-none px-4 px-lg-5" 
                        style={{ ...estiloHeader.tamanhoitems, ...(itemAtivo === 'minha-conta-funcionario' ? estiloHeader.itemAtivo : {}) }} 
                        onMouseEnter={(e) => e.currentTarget.style.borderBottom = estiloHeader.itemHover.borderBottom}
                        onMouseLeave={(e) => e.currentTarget.style.borderBottom = itemAtivo === 'minha-conta-funcionario' ? estiloHeader.itemAtivo.borderBottom : '4px solid transparent'}>
                        Minha Conta
                    </div>
                </Link>
            </div>
            <Link to="/login" style={estiloHeader.sairButton}>Sair</Link>
        </header>
    );
}
