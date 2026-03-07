export default function Item({ name, quantity, category }) {
  return (
    <li className="rounded-2xl border border-fuchsia-100/25 bg-white/5 p-4 shadow-lg shadow-fuchsia-900/10 overflow-hidden relative">
      <span className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-fuchsia-400 to-amber-300" />
      <p className="ml-3 text-lg font-black text-white">{name}</p>
      <p className="ml-3 text-sm text-fuchsia-100/90 mt-2">Qty: {quantity}</p>
      <p className="ml-3 text-sm text-fuchsia-100/80">Type: {category}</p>
    </li>
  );
}
