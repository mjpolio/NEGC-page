import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import  './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Body from './Body';
import About from './About';
import Footer from './Footer';

const App = () => {
    return (
        <div className="container">
            <Header />
            <BrowserRouter>
                <div className="flex-container">
                    <Navbar />
                    <div className="body-item">
                        <Switch>
                            <Route path="/" exact component={Body}/>
                            <Route path="/about" exact component={About}/>
                        
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
            <Footer />
        </div>
    )
}

export default App;