export default function TransactionCard ({date, category, amount, description, expenditure}) {
    const newDate = new Date(date);
    const formattedDate = `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}    ${newDate.getHours()}:${newDate.getMinutes()}`;
    return (
        <div className="transaction border border-palette-200 shadow-lg p-6 rounded-xl m-3">
            <div className="details flex flex-row justify-around p-4">
                <div className={`py-2 px-8 rounded-xl bg-green-500 ${(expenditure === 'true') && "bg-red-500"} text-white`}>₹{amount}</div>
                <div className="py-2 px-8 bg-palette-200 text-white rounded-xl">{category || "here"}</div>
                <div className="py-2 px-8 rounded-xl text-white bg-palette-100">{formattedDate || "now"}</div>
            </div>
            <div className="description bg-palette-300 rounded-xl p-3 text-white   ">{description || "blah blah"}</div>
        </div>
    )
}
//bg-gradient-to-br from-zinc-950 to-zinc-700