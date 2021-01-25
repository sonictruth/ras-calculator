import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';

import Footer from './components/Footer';
import Header from './components/Header';

import About from './components/About';
import Result from './components/Result';
import Calculator from './components/Calculator';

import './App.css';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const routes = [
  { path: '/about', name: 'About', Component: About },
  { path: '/calculator', name: 'Calculator', Component: Calculator },
  { path: '/result/:value', name: 'Result', Component: Result },
]

export default function App() {
  return (
    <Router>
      <Container className="container" maxWidth="sm">

        <Route exact path="/">
          <Redirect to="/about" />
        </Route>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <Box className="page" my={4}>
                  <Header />
                  <Box m={1}>
                    <Component />
                  </Box>
                  <Footer />
                </Box>
              </CSSTransition>
            )}
          </Route>
        ))}
      </Container>
    </Router>
  )
}
