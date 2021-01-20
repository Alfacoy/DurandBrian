/*STYLES*/
import style from './style.module.css';

const Menu = () => (
    <nav>
        <ul className={style.menu__list}>
            <li className={style.menu__list__item_color_light}>Sobre Mi</li>
            <li className={style.menu__list__item_color_light}>Inicio</li>
        </ul>        
    </nav>
)

export default Menu;