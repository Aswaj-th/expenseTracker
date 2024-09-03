import { useState } from "react";

export default function Form ({refDupe, handleAddition, handleExit}) {
    const [data, setData] = useState({
        amount: 0,
        expenditure: 'true',
        category: "Shopping",
        description: "",
        date: null
    });

    return (
        <div ref={refDupe} className="form fixed w-1/2 -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 bg-palette-300 -z-10 rounded-xl">
            <h3 className="pt-5 text-white text-4xl">Transaction Details</h3>
            <form className="max-w-sm mx-auto p-12">
                <div className="mb-5">
                    <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-white">Amount</label>
                    <input value={data.amount} onChange={
                        (e) => {
                            setData({
                                ...data,
                                amount: e.target.value
                            })
                        }
                    }
                    type="number" id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-white">Type</label>
                    <select id="type" value={data.expenditure} onChange={
                        (e) => {
                            setData({
                                ...data,
                                expenditure: e.target.value
                            })
                        }
                    } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        <option value={true}>Expenditure</option>
                        <option value={false}>Income</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 text-white">category</label>
                    <select id="category" value={data.category} onChange={
                        (e) => {
                            setData({
                                ...data,
                                category: e.target.value
                            })
                        }
                    } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        <option value="Shopping">Shopping</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Food">Food</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Home">Home</option>
                        <option value="Salary">Salary</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 text-white">Description</label>
                    <textarea id="description" value={data.description} onChange={
                        (e) => {
                            setData({
                                ...data,
                                description: e.target.value
                            })
                        }
                    } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="flex justify-around">
                    <button onClick={(e) => handleExit(e)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Exit</button>
                    <button type="submit" onClick={(e) => handleAddition(e, data)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Transaction</button>
                </div>
            </form>
        </div>
    )
}