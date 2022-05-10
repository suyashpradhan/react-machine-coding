/** @format */

import { Link } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import './App.css';

function App() {
	return (
		<div className='App'>
			<h4>React Router</h4>
			<Link to='/invoices'>Invoice</Link> | <Link to='/expense'>Expense</Link>
			<AppRoutes />
		</div>
	);
}

export default App;
