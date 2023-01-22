import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../Components/Card/Card';
import { DesincrementProduct, IncrementProduct } from '../../Redux/Action';

export default function Panier() {
    const panier = useSelector((state) => state.panier);
    const dispatch =useDispatch();
  return (
    
    <div className="flex flex-wrap product" >
        {panier.data.map((el, index) => ( console.log(index , ":" ,el),
          <Card
            key={index}
            price={el.price}
            name={el.name}
            description={el.description}
            number={el.count}
            add={() => dispatch(IncrementProduct(el))}
            minus={() => dispatch(DesincrementProduct(el))}
            exist={true}
          />
        ))}
      </div>
  )
}
