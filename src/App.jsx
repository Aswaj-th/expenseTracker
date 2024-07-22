import { useState } from 'react'	
import './App.css'
import TransactionCard from './components/TransactionCard';

function App() {
	const [balance, setBalance] = useState(0);
	const [transactions, setTransactions] = useState([{
		amount: 100,
		expenditure: true,
		category: "Home",
		date: Date.now(),
		description: "Electricity bill"
	}])

	return (
		<>
			<div className="everything">
				<div className="balance flex flex-row item-center justify-center my-8">
					<div className="block w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Current Balance</h5>
						<button type="button" className=" my-6 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> ₹{balance} </button>
					</div>
				</div>
				<div className="transaction-area">
					<h1 className="transaction-heading text-2xl font-bold p-6">
						Transaction history
					</h1>
					<div className="transactions">
						{transactions.map((transaction) => {
							return <TransactionCard 
								key={transaction.date}
								amount={transaction.amount}
								expenditure={transaction.expenditure}
								category={transaction.category}
								date={transaction.date}
								description={transaction.description}
							/>
						})}
					</div>
				</div>
			</div>
		</>
	)
}

export default App
