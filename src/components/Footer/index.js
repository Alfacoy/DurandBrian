/*REACT*/
import { useContext } from 'react';
/*CONTEXT*/
import { ThemeContext } from '../ThemeContext'
/*STYLE*/
import style from './style.module.css';


const Footer = () => {
    const context = useContext(ThemeContext);

    return(
        <footer className={`${style.footer}`}>
            <a href="https://github.com/Alfacoy" target="_blank" rel="noopener noreferrer">
                <img src={context.mainTheme.imgGithub} alt="Icono de Github" />
            </a>
            <a href="https://www.linkedin.com/in/durand18/" target="_blank" rel="noopener noreferrer">
                <img src={context.mainTheme.imgLinkedin} alt="Icono de Linkedin" />
            </a>
        </footer>
    )
}

export default Footer;