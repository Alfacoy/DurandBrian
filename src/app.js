//React
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/*CONTEXT*/
import { ThemeContext } from './components/ThemeContext';
import theme from './constant/theme';
/*COMPONENTS*/
import Container from './components/Container/index.js';
import Menu from './components/Menu/index.js';
/*VIEWS*/
import Home from './views/Home/index.js';
import About from './views/About/index.js';

const App = () => {
    const [mainTheme, setMainTheme] = useState(theme.night);

    return (
        <ThemeContext.Provider value={{mainTheme,setMainTheme}}>
            <Router>
                <div className={`grid ${mainTheme === theme.night ? 'nightMode' : 'dayMode'}`}>
                    <Menu />
                    <Container>
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                        </Switch>
                    </Container>
                </div>
            </Router>
        </ThemeContext.Provider >
    )
}

export default App;