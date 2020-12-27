/*STYLE*/
import style from './style.module.css';
/*COMPONENTS*/
import Footer from '../Footer/index.js';

const Container = ({children}) => {
    return (
        <main className={style.container}>
            {children}
            <Footer />
        </main>
    )
}

export default Container;