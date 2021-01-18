import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './style/main.scss';

import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Footer from './components/layout/Footer';
import Store from './components/Pages/Store';

const App = () => {
	//why do you have such a small dick?
	return (
		<div className='container'>
			<Header />
			<BrowserRouter>
				<div className='flex-container small-dick'>
					<Navbar />
					<div className='body-item'>
						<Switch>
							<Route path='/' exact component={Home} />
							<Route path='/about' exact component={About} />
							<Route path='/store' exact component={Store} />

						</Switch>
					</div>
				</div>
			</BrowserRouter>
			<Footer />
		</div>
	);
};

export default App;
