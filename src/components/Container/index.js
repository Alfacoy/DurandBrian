/*COMPONENTS*/
import Footer from '../Footer/index.js';
/*STYLE*/
import style from './style.module.css';

const Container = ({ children }) => (
    <main className={`${style.container} grid_content`}>
        {children}
        <Footer />
    </main>
)

export default Container;