/*STYLES*/
import style from './style.module.css';
/*IMAGES*/
import night from '../../images/header/night.png';

const Home = () => (
    <header className={style.header}>
        <div className={style.header__content}>
            <div>
                <h1 className={style.header__title}>Brian Durand</h1>
                <h2 className={style.header__subtitle}>Frontend Developer</h2>
            </div>

            <div>
                <p className={style.header__paragraph}>
                    Actualmente vivo en <b>Buenos Aires</b> (Argentina) y me encuentro
                    trabajando para <b>Integrity Seguros</b> como <strong className={style.header__paragraph_highlight_blue}>Analista Programador Junior</strong>.
                </p>

                <p className={style.header__paragraph}>
                    Por la noche, curso en el <b>Instituto Técnologico Beltrán</b> el segundo año de la carrera de <strong className={style.header__paragraph_highlight_blue}>Análista en Sistemas</strong>. 
                </p>
                
                <a className={style.header__button} href="./cv21.pdf" target="_blank">Currículum</a>
            </div>
        </div>
        <img class={style.header__image} src={night} alt="Imágen en versión obscura." />
    </header>
)

export default Home;