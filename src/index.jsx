import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App.jsx';
import {loadJson} from "./actions/usersActions";
import configureStore from './store/configureStore';
import {AppContainer} from 'react-hot-loader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({isRtl: true});

const store = configureStore();
store.dispatch(loadJson());

const render = Component => {
	ReactDOM.render(
		<Provider store={store}>
			<MuiThemeProvider muiTheme={muiTheme}>
			<AppContainer>
					<Component/>
				</AppContainer>
			</MuiThemeProvider>
		</Provider>,
		document.getElementById('app'),
	)
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./App', async () => {
		const App = await import ('./App');
		render(App.default)
	})
}
