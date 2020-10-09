import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/frontend/build" exact component={Logon} />
            <Route path="/frontend/build/register" component={Register} />
            <Route path="/frontend/build/profile" component={Profile} />
            <Route path="/frontend/build/incidents/new" component={NewIncident} />
         </Switch>
      </BrowserRouter>
   )
}