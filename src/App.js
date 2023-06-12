import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	const [mode, setMode] = useState('light');
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});

		setTimeout(() => {
			setAlert(null);
		}, 2000);
	};

	const toggleMode = () => {
		if (mode === 'light') {
			setMode('dark');
			document.body.style.backgroundColor = '#042743';
			showAlert('Dark mode has been enabled', 'success');
		} else {
			setMode('light');
			document.body.style.backgroundColor = 'white';
			showAlert('Light mode has been enabled', 'success');
			// document.title = 'TextUtils - Light Mode';
		}
	};
	return (
		<>
			<Router>
				<Navbar title='Textutils' mode={mode} toggleMode={toggleMode} />
				<Alert alert={alert} />
				<Routes>
					<Route exact path='/about' element={<About mode={mode} />} />
					<Route
						exact
						path='/'
						element={
							<TextForm
								showAlert={showAlert}
								heading='Try TextUtils - Word Counter, Character Counter, Remove extra Spaces'
								mode={mode}
							/>
						}
					/>
				</Routes>
			</Router>
		</>
	);
}
export default App;
