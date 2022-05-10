/** @format */

import { useNavigate, useParams } from 'react-router-dom';
import { invoices } from './Data';

export const Invoice = () => {
	const params = useParams();
	const navigate = useNavigate();
	let invoice = invoices.find((invoice) => invoice.number === params.invoiceId);

	const deletehandler = () => {
		invoices.filter((invoice) => invoice.number !== params.invoiceId);
		navigate('/invoices', { replace: true });
	};
	return (
		<>
			<hr />
			<h4>Invoice Id {params.invoiceId}</h4>
			<h5>{invoice?.amount}</h5>
			<h5>{invoice?.due}</h5>
			<h5>{invoice?.number}</h5>
			<button onClick={deletehandler}>Delete</button>
		</>
	);
};
