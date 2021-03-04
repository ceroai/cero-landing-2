import Header from '../Header'
import QueEs from '../QueEs'
import Superior from '../Superior'
import Beneficios from '../Beneficios'
import Testimonios from '../Testimonios'
import Trabajemos from '../Trabajemos'
import Footer from '../Footer'
import AcercaDe from '../AcercaDe'
import Contacto from '../Contacto'
import { Switch, Route } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Superior />
          <QueEs />
          <Beneficios />
          <Testimonios />
          <Trabajemos />
        </Route>
        <Route path="/sobre">
          <AcercaDe />
        </Route>
        <Route path="/contacto">
          <Contacto />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
