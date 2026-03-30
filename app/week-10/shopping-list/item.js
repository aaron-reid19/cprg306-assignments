export default function Item({ id, name, quantity, category, onSelect, onDelete }){
    return(
        <li 
            onClick={onSelect}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm cursor-pointer hover:border-slate-300 hover:shadow transition">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <p className="font-medium text-slate-900">{name}</p>
                    <p className="text-sm text-slate-600 mt-1">Quantity: { quantity }</p>
                    <p className="text-sm text-slate-600">Category: { category }</p>
                </div>
                <button
                    type="button"
                    aria-label={`Delete ${name}`}
                    className="rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-red-600 transition"
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete?.(id);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9 3.75A2.25 2.25 0 0 1 11.25 1.5h1.5A2.25 2.25 0 0 1 15 3.75V4.5h3.75a.75.75 0 0 1 0 1.5h-.567l-.77 12.304A2.25 2.25 0 0 1 15.167 20.5H8.833a2.25 2.25 0 0 1-2.246-2.196L5.817 6H5.25a.75.75 0 0 1 0-1.5H9v-.75ZM10.5 4.5h3v-.75a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75v.75Zm.75 4.125a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Zm3.75.75a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Zm-7.5 0a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-1.5 0v-6Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </li>
    )
    
}
