/*REACT*/
import { useContext } from 'react';
/*CONTEXT*/
import { ThemeContext } from '../../components/ThemeContext';
import theme from '../../constant/theme';
/*STYLES*/
import style from './style.module.css';
    
    
const Home = () => {

    const context = useContext(ThemeContext);

    return(
    <header className={`${style.header}`}>
        <div className={style.header__content}>
            <div>
                    <h1 className={`${style.header__title} ${context.mainTheme === theme.day ? style.header__title_night : null}`}>Brian Durand</h1>
                <h2 className={style.header__subtitle}>Frontend Developer</h2>
            </div>

            <div>
                <p className={style.header__paragraph}>
                    Actualmente vivo en <b>Buenos Aires</b> (Argentina) y me encuentro
                    trabajando para <b>Integrity Seguros</b> como <strong className={style.header__paragraph_highlight_blue}>Analista Programador Junior</strong>.
                </p>

                <p className={style.header__paragraph}>
                    Por la noche, curso en el <b>Instituto Técnologico Beltrán</b> el segundo año de la carrera de <strong className={style.header__paragraph_highlight_blue}>Analista en Sistemas</strong>. 
                </p>
                
                    <a className={`${style.header__button} ${context.mainTheme === theme.day ? style.header__button_night : null}`} href="./curriculum.pdf" target="_blank">Currículum</a>
            </div>
        </div>
        <img className={style.header__image} src={context.mainTheme.imgHeader} alt="Imágen en versión obscura." />
    </header>
)}

export default Home;