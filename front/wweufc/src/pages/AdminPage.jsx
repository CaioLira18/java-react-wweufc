import React from 'react'

const AdminPage = () => {
  return (
    <div>
      <div className="containerAdminPage">
        <div className="containerAdminBox">
            <h1>Bem Vindo, Administrador <strong>Caio</strong></h1>
            <p>Altere, Adicione ou Exclua Dados nessa Pagina</p>
        </div>

        <div className="boxSecctionContainer">
            <div className="SecctionBox">
                <div className="boxSecctionImage">
                    <img src="https://res.cloudinary.com/dthgw4q5d/image/upload/v1763785200/Daniel_Bryan_WWE_Champion_gwcyju.jpg" alt="" />
                </div>
                <div className="boxSecctionInformation">
                    <h1><strong>Cinturões</strong></h1>
                    <p>Adicione, Atualize ou Exclua Cinturões</p>
                    <div className="boxSecctionButton">
                        <a href="/adicionarcinturao"><button>Ver Pagina</button></a>
                    </div>
                </div>
            </div>

            <div className="SecctionBox">
                <div className="boxSecctionImage">
                    <img src="https://res.cloudinary.com/dthgw4q5d/image/upload/v1763785731/143_Roman_Reigns_HOC--e8e72261e77fccdbd0a1cab9420d9bc6_yozkcl.jpg" alt="" />
                </div>
                <div className="boxSecctionInformation">
                    <h1><strong>Lutadores</strong></h1>
                    <p>Adicione, Atualize ou Exclua Lutadores</p>
                    <div className="boxSecctionButton">
                        <a href="/adicionarlutador"><button>Ver Pagina</button></a>
                    </div>
                </div>
            </div>

            <div className="SecctionBox">
                <div className="boxSecctionImage">
                    <img src="https://res.cloudinary.com/dthgw4q5d/image/upload/v1763785883/2177025992_ofatgy.webp" alt="" />
                </div>
                <div className="boxSecctionInformation">
                    <h1><strong>Eventos</strong></h1>
                    <p>Adicione, Atualize ou Exclua Lutadores</p>
                    <div className="boxSecctionButton">
                        <a href="/adicionareventos"><button>Ver Pagina</button></a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPage
