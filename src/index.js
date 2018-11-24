import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Root from './Root';
import store, { history } from './store';

render(<Root store={store} history={history}/>, document.getElementById('root'));

serviceWorker.unregister();
