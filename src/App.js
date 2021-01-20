import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './style/main.scss';

//Layout
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

//Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Store from './components/Pages/Store';
import Membership from './components/Pages/Membership';
import Executives from './components/Pages/Executives';
import Calendar from './components/Pages/Calendar';
import Cookbooks from './components/Pages/Store/Cookbooks';
import Horticulture from './components/Pages/Horticulture';
import Courses from './components/Pages/Courses';
import News from './components/Pages/News';
import Committees from './components/Pages/Committees';
import Resources from './components/Pages/Resources';
import Awards from './components/Pages/Awards';
import Library from './components/Pages/Library';
import Photos from './components/Pages/Photos';
import Contact from './components/Pages/Contact';






const App = () => {
	return (
		<div className='container'>
			<Header />
			<BrowserRouter>
				<div className='flex-container'>
					<Navbar />
					<div className='body-section'>
						<Switch>
							<Route path='/' exact component={Home} />
							<Route path='/about' exact component={About} />
							<Route path='/membership' exact component={Membership} />
							<Route path='/executives' exact component={Executives} />
							<Route path='/calendar' exact component={Calendar} />
							<Route path='/store' exact component={Store} />
							<Route path='/cookbooks' component={Cookbooks} />
							<Route path='/courses' component={Courses} />
							<Route path='/horticulture' component={Horticulture} />
							<Route path='/news' component={News} />
							<Route path='/committees' component={Committees} />
							<Route path='/resources' component={Resources} />
							<Route path='/awards' component={Awards} />
							<Route path='/library' component={Library} />
							<Route path='/photos' component={Photos} />
							<Route path='/contact' component={Contact} />

						</Switch>
					</div>
				</div>
			</BrowserRouter>
			<Footer />
		</div>
	);
};

export default App;
