import { useRef, useState, useEffect } from 'react'	
import './App.css'
import TransactionCard from './components/TransactionCard';
import Form from './components/Form';

function App() {
	const [balance, setBalance] = useState(1000);
	const [transactions, setTransactions] = useState([{
		amount: 100,
		expenditure: 'true',
		category: "Home",
		date: Date.now(),
		description: "Electricity bill"
	}, ])
	const formRef = useRef(null);

	const showFormFn = () => {
		formRef.current.classList.remove("-z-10")
	}

	const handleAddition = (e, data) => {
		e.preventDefault();
		console.log(data);
		if(data.amount < 1 || !data.description) {
			alert("erorr in amount or description field")
			return;
		}
		data.date = Date.now();
		localStorage.setItem('transactions', JSON.stringify([...transactions, data]))
		setTransactions([...transactions, data])
		if(data.expenditure === 'true') {
			localStorage.setItem('balance', Number(balance-data.amount));
			setBalance(Number(balance-data.amount));
		} else {
			localStorage.setItem('balance', balance+Number(data.amount));
			setBalance(balance+Number(data.amount));
		}
		formRef.current.classList.add("-z-10");
	}

	const handleExit = (e) => {	
		e.preventDefault();
		formRef.current.classList.add("-z-10");
	}

	useEffect(() => {
		if(!localStorage.getItem('transactions')) return
		setTransactions(JSON.parse(localStorage.getItem('transactions')))
	}, [])

	useEffect(() => {
		if(!localStorage.getItem('balance')) return
		setBalance(Number(localStorage.getItem('balance')))
	}, [])

	return (
		<>
			<div className="everything bg-white w-full min-h-screen m-0 pt-8">
				<div className="balance flex flex-row item-center justify-center mb-8">
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
			<div onClick={showFormFn} className="addButton fixed right-16 bottom-16 text-6xl text-white bg-cyan-600 w-20 h-20 rounded-full flex justify-center items-center p-0 cursor-pointer">+</div>
			<Form refDupe={formRef} handleAddition={handleAddition} handleExit={handleExit} />
		</>
	)
}

export default App