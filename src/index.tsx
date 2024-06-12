import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SWRConfig } from 'swr';
import MainProvider from './contexts/MainProvider';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyle from './styles/global';

// TODO:Fix page naming convention
import Home from './pages/home/Home';
import Collection from './pages/Collection';
import CreateCard from './pages/CreateCard';
import NotFound from './pages/NotFound';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/scroll/ScrollToTop';

const App = () => (
  <MainProvider>
    <ThemeProvider theme={theme}>
      <SWRConfig value={{ provider: () => new Map() }}>
        <Router>
          <ScrollToTop />
          <GlobalStyle />
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path="/collection" component={Collection} />
            <Route exact path="/create-card" component={CreateCard} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </Router>
        <Toaster position="top-center" toastOptions={{ duration: 5000 }} />
      </SWRConfig>
    </ThemeProvider>
  </MainProvider>
);

render(<App />, document.getElementById('root'));
