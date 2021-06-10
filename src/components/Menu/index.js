/*REACT*/
import { useContext } from 'react';
/*ROUTER*/
import { Link } from 'react-router-dom';
/*CONTEXT*/
import { ThemeContext } from '../../components/ThemeContext'
import theme  from '../../constant/theme';
/*STYLES*/
import style from './style.module.css';

const Menu = () => {
    const context = useContext(ThemeContext);
    
    function handleClik() {
        if (context.mainTheme === theme.night) {
            context.setMainTheme(theme.day)
        } else {
            context.setMainTheme(theme.night)
        }
    }

    return (
        <nav className={`${style.menu} ${context.mainTheme === theme.day ? style.menu_day : ''}`}>
            <div className={style.menu_container}>
                <ul className={style.menu__list}>
                    <Link className={`${style.menu__list__item_color_light} ${style.menu__list__item}`} to="/">Inicio</Link>
                    <Link className={`${style.menu__list__item_color_light} ${style.menu__list__item}`} to="/about">Sobre Mí</Link>
                </ul>
                <img onClick={handleClik} src={context.mainTheme.imgMenu} className={style.theme} />
            </div>
        </nav>
    )
}

export default Menu;