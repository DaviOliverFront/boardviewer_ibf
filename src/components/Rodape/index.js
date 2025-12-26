import './Rodape.css';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Rodape = () => {
    return (
        <footer className='footer'>
            <div className='redes-sociais'>
                <p>
                    <a href="#whatsapp"> <FaWhatsapp /> </a>
                    <a href="https://www.instagram.com/ibregularfe/"> <FaInstagram /> </a>
                    <a href="https://www.facebook.com/IBRegularFe"> <FaFacebook /> </a>
                </p>
            </div>
            <div className='descricao'>
                <p>Uma igreja que faz Discípulos</p>
            </div>
            <div className='desenvolvedor'>
                <p>
                    Desenvolvido por 
                        <a href="https://www.linkedin.com/in/davi-oliveira-089a4321a/"> Davi Oliveira </a>
                </p>
            </div>
        </footer>
    )
}

export default Rodape;