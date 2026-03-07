export default function Item({name, quantity, category}){
    return(
        <li className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <p className="font-medium text-slate-900">{name}</p>
            <p className="text-sm text-slate-600 mt-1">Quantity: { quantity }</p>
            <p className="text-sm text-slate-600">Category: { category }</p>
        </li>
    )
    
}
