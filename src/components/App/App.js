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
      <Switch>
        <Route exact path="/">
          <Header />
          <Superior />
          <QueEs />
          <Beneficios />
          <Testimonios />
          <Trabajemos />
        </Route>
        <Route path="/sobre">
          <Header />
          <AcercaDe />
        </Route>
        <Route path="/contacto">
          <Header invertir={true} />
          <Contacto />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
