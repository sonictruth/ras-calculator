import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';

import About from './components/About';
import Result from './components/Result';
import Calculator from './components/Calculator';

import './App.css';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Box';

const routes = [
  { path: '/about', name: 'About', Component: About },
  { path: '/calculator', name: 'Calculator', Component: Calculator },
  { path: '/result/:value', name: 'Result', Component: Result },
]

export default function App() {
  return (
    <Router>
        <Container className="xcontainer" maxWidth="sm">
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
                  <Box className="xpage" my={4}>
                    <Component />
                  </Box>
                </CSSTransition>
              )}
            </Route>
          ))}
        </Container>
    </Router>
  )
}
