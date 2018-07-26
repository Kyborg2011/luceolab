import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import App from './components/App';
import GA from './components/shared/utils/GoogleAnalytics';

ReactDOM.render((
     <BrowserRouter>
        { GA.init() && <GA.RouteTracker /> }
        <Route path="/" component={App} />
     </BrowserRouter>
     ),
     document.getElementById( 'root' )
);
