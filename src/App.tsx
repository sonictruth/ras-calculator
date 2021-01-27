import React from 'react'
import {
  HashRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';

import Header from './components/Header';

import About from './components/About';
import Result from './components/Result';
import Calculator from './components/Calculator';
import Help from './components/Help';

import './App.css';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import ScrollToTop from './components/ScrollToTop';

const routes = [
  { path: '/about', name: 'About', Component: About },
  { path: '/calculator', name: 'Calculator', Component: Calculator },
  { path: '/help', name: 'Help', Component: Help },
  { path: '/result/:ras/:bmi/:age/:periods/:ovary/:smoke', name: 'Result', Component: Result },
]

export default function App() {
  return (
    <Container className="container" maxWidth="md">
      <Box marginTop={4}>
        <Header />
      </Box>
      <Router>
        <ScrollToTop />
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
                appear
                unmountOnExit
              >

                <Box className="page" my={4}>

                  <Box m={1}>
                    <Component />
                  </Box>

                </Box>
              </CSSTransition>
            )}
          </Route>
        ))}
      </Router>

    </Container>
  )
}
