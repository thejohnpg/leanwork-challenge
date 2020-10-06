
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home';

import SignUp from './pages/SignUp';

export default function Routes() {
  return (
     <BrowserRouter>
     <Route path="/" exact component={SignUp} />
      <Route path="/home" component={Home} />
    </BrowserRouter>
  )
}