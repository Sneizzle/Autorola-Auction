import React from 'react';
import './App.css';
import Navbar from './components/Navbar.In';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Details from './pages/details';
import SignUp from './pages/signup';
import Contact from './pages/contact';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path='/' exact element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/details' element={<Details />} />
				<Route path='/sign-up' element={<SignUp />} />
			</Routes>
		</Router>
	);
}

export default App;
