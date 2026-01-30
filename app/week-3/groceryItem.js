export default function Item({name,quantity, category}){
  return (
    <div>
        <h2>{ name }</h2>
        <p>{ quantity }</p>
        <p>{ category }</p>
    </div>
  )  
}