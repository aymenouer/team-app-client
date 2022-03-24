import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import Users from './users';


export default function Pages() {
  return (
    <Router primary={false} component={Fragment}> 
<Users path='/' />
    </Router>
  );
}
