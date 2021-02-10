import React, {lazy, Suspense, useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Home from './pages/Home';
import Clientes from './pages/Clientes';
import Cliente from './pages/Cliente';
import About from './pages/About';
import Login from './pages/Login';
import Navigation from './components/Navigation';
import Loading from './components/Loading';
import {Provider} from 'react-redux';
import store from './redux/store/store';
import './App.css';

const login = lazy(()=> import ("./pages/Login") );
const clientes = lazy(()=> import ("./pages/Clientes") );
const about = lazy(()=> import ("./pages/About") );

function App(props) {

  return (

    
    <Router>
     
    <Suspense fallback={<Loading/>}>
    
      <Provider store={store}>

      <Navigation/>
        <Container fluid>
          {/*<p> {store.getState().logInOut.user.nombre} </p>
             <p> {store.getState().logInOut.user.id} </p>
             <p> {imprimirStore()}</p>*/}
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/login' exact component={Login} />
              <Route path='/clientes' exact component={Clientes} />
              <Route path="/clientes/:id" exact component={Cliente} />
              <Route path='/about' component={About} />
            </Switch>
      </Container>
   
      </Provider>
    
    </Suspense>
   </Router>
   
  );
}

export default App;
