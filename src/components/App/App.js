import { Switch, Route } from 'react-router-dom'
import Banner from '../Banner'
import Header from '../Header'
import QueEs from '../QueEs'
import Superior from '../Superior'
import Beneficios from '../Beneficios'
import Testimonios from '../Testimonios'
import Trabajemos from '../Trabajemos'
import Footer from '../Footer'
import AcercaDe from '../AcercaDe'
import Contacto from '../Contacto'
import Carreras from '../Carreras'
import ContactoDemo from '../ContactoDemo'
import Expo from '../Expo'
import './App.css'
import CasosDeUso from '../CasosDeUso'
import ExpoPruebas from '../Expo/ExpoPruebas'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/expo">
          <Expo />
        </Route>
        <Route exact path="/expowax">
          <ExpoPruebas />
        </Route>
        <Route>
          <Route exact path="/contacto_demo">
            <Header />
            <ContactoDemo />
          </Route>
          <Route exact path="/">
            <Banner />
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
            <Carreras />
          </Route>
          <Route path="/contacto">
            <Header invertir={true} />
            <Contacto />
          </Route>
          <Route path="/casos-uso">
            <Header />
            <CasosDeUso />
          </Route>
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
