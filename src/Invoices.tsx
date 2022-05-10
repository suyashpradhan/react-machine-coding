/** @format */

import { Link, Outlet } from 'react-router-dom';
import { invoices } from './Data';

export const Invoices = () => {
	return (
		<>
			<h4>Invoice</h4>
			<input placeholder='Search' />
			<h6>Select and invoice for more info</h6>
			{invoices.map((data) => {
				return (
					<Link
						to={`/invoices/${data.number}`}
						key={data.number}
						style={{ display: 'block', padding: '1rem 0' }}>
						{data.name}
					</Link>
				);
			})}
			<Outlet />
		</>
	);
};
