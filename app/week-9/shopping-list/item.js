export default function Item({name, quantity, category, onSelect}){
    return(
        <li 
            onClick={onSelect}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm cursor-pointer hover:border-slate-300 hover:shadow transition">
            <p className="font-medium text-slate-900">{name}</p>
            <p className="text-sm text-slate-600 mt-1">Quantity: { quantity }</p>
            <p className="text-sm text-slate-600">Category: { category }</p>
        </li>
    )
    
}
