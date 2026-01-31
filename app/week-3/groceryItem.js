export default function Item({name, quantity, category}){
  return (
    
    <ul className="border-2 rounded-md px-3 py-2 m-4 w-64 mx-auto">
        <li>{ name }</li>
        <li>Quantity: { quantity }</li>
        <li>Category: { category }</li>
    </ul>
        
    
  )  
}
