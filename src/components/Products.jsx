import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked,setChecked] = useState(false);
  const handleChange = ()=>{
    setChecked((prev) => !prev)
  }
  useEffect(()=>{
    fetch(`data/${checked ? "sale_" : ""}products.json`)
    .then(res => res.json())
    .then(data => {
      console.log("뜨끈한 데이터를 네트워크에서 받아옴")
      setProducts(data)
      console.log(data)
    });
  },[checked])


  return (
    <>
      <input type="checkbox" value={checked}onChange={handleChange}/>
        <label htmlFor='checkbox'>Show Only 핫 Sale</label>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <article>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </article>
            </li>
          ))}
        </ul>
    </>
  );
}
