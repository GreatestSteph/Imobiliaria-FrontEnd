import React from "react";
import { Link, useLocation } from "react-router-dom"; // Importando Link e useLocation do React Router
import Logobranco from "./imagensheader/headerfundobranco.png"; 

export default function Headerdeslogado() {
    const estiloHeader = {
        itensheader: {
            fontFamily: 'Raleway',
            color: 'rgba(17, 65, 106, 1)',
            textDecoration: 'none',
            height: '100%',
        },
        fundodoHeader: {
            backgroundColor: 'white',
            width: '100%',
            position: 'fixed',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 20px',
            height: '70px', 
        },
        sairButton: {
            backgroundColor: 'rgba(17, 65, 106, 1)',
            color: 'white',
            borderRadius: '8px',
            padding: '7px 20px',
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
        },
    };

    const location = useLocation(); // Pega a localização da página atual

    // Indica qual item do header ficara ativo, de acordo com a página
    const getItemAtivo = () => {
        switch (location.pathname) {
            case '/':
                return 'home';
            case '/empreendimentos':
                return 'empreendimentos';
            default:
                return 'home'; // Padrão para Home
        }
    };

    const itemAtivo = getItemAtivo(); // Atualizando o item ativo com base na localização

    return (
        <header style={estiloHeader.fundodoHeader}>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100..900&display=swap" rel="stylesheet" />

            <div className="d-flex align-items-center">
                <img className="ms-2 me-md-4 me-5" src={Logobranco} alt="Logo" height="40" />
                <Link to="/" style={estiloHeader.itensheader}>
                    <div 
                        className="px-4 px-lg-5" 
                        style={{ ...estiloHeader.tamanhoitems, ...(itemAtivo === 'home' ? estiloHeader.itemAtivo : {}) }} 
                        onMouseEnter={(e) => e.currentTarget.style.borderBottom = estiloHeader.itemHover.borderBottom}
                        onMouseLeave={(e) => e.currentTarget.style.borderBottom = itemAtivo === 'home' ? estiloHeader.itemAtivo.borderBottom : '4px solid transparent'}>
                        Home
                    </div>
                </Link>
                <Link to="/empreendimentos" style={estiloHeader.itensheader}>
                    <div 
                        className="d-sm-flex d-none px-4 px-lg-5" 
                        style={{ ...estiloHeader.tamanhoitems, ...(itemAtivo === 'empreendimentos' ? estiloHeader.itemAtivo : {}) }} 
                        onMouseEnter={(e) => e.currentTarget.style.borderBottom = estiloHeader.itemHover.borderBottom}
                        onMouseLeave={(e) => e.currentTarget.style.borderBottom = itemAtivo === 'empreendimentos' ? estiloHeader.itemAtivo.borderBottom : '4px solid transparent'}>
                        Empreendimentos
                    </div>
                </Link>
            </div>
            <div> 
                <a className="me-3" href="login" style={estiloHeader.sairButton}>Login</a>
                <a className="d-md-inline d-none" href="cadastrocliente" style={estiloHeader.sairButton}>Cadastre-se</a>
            </div>
        </header>
    );
}
