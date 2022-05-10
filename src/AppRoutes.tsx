/** @format */

import { Route, Routes } from 'react-router-dom';
import { Expense } from './Expense';
import { Invoices } from './Invoices';
import { Invoice } from './Invoice';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/expense' element={<Expense />} />
			<Route path='/invoices' element={<Invoices />}>
				<Route path=':invoiceId' element={<Invoice />} />
			</Route>
			<Route path='*' element={<p>No match found</p>} />
		</Routes>
	);
};
