/*STYLE*/
import style from './style.module.css';
/*IMAGES*/
import github_light from '../../images/social_media/github_light.svg';
import linkedin_light from '../../images/social_media/linkedin_light.svg';


const Footer = () => (
    <footer className={style.footer}>
        <a href="https://github.com/Alfacoy" target="_blank" rel="noopener noreferrer">
            <img src={github_light} alt="Icono de Github" />
        </a>
        <a href="https://www.linkedin.com/in/durand18/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin_light} alt="Icono de Linkedin" />
        </a>
    </footer>
)

export default Footer;