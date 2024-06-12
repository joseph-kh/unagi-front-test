import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Collection from './pages/collection';
import CreateCard from './pages/create-card';
import NotFound from './pages/not-found';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route exact path="/collection" component={Collection} />
        <Route exact path="/create-card" component={CreateCard} />
        <Route exact path="/create-card" component={CreateCard} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  </ThemeProvider>
);

render(<App />, document.getElementById('root'));
