
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './Components/About/About';
import Courses from './Components/Courses/Courses';

import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Body from './Components/Body/Body';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div>

        {/* Routing */}

      
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Body></Body>
          </Route>
          <Route path="/body">
            <Body></Body>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
