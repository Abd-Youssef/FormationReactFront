// import React, { useEffect, useState } from 'react'
// import { showProduct } from '../../Api/Api';

// export default function Products() {
//   const [data,setdata] =useState();
//   useEffect(()=>{
//     async function update(){
//       setdata( data = await showProduct());
//     }
//     update()
//   })

//     console.log("data",data);
//   return (
//     <div>
//       <table>
//         <tr>
//           <th>Name</th>
//           <th>description</th>
//           <th>price</th>
//           <th>category</th>
//           <th>stock</th>
//         </tr>
//         {data.map((val, key) => {
//           return (
//             <tr key={key}>
//               <td>{val.name}</td>
//               <td>{val.description}</td>
//               <td>{val.price}</td>
//               <td>{val.category}</td>
//               <td>{val.stock}</td>
//             </tr>
//           )
//         })}
//       </table>

//     </div>
//   )
// }
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showProduct } from "../../Api/Api";
import Button from "../../Components/Button/Button";
import Card from "../../Components/Card/Card";
import {
  AddItem,
  DesincrementProduct,
  IncrementProduct,
} from "../../Redux/Action";

export default function Products() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const panier = useSelector((state) => state.panier.data);
  const ref = useRef();
  const getProducts = async () => {
    const response = await showProduct();
    if (response.status === 200) {
      setData(response.data);
    }
  };
  useEffect(() => {
    getProducts();
    console.log("mount");
  }, []);
  const goToTop = () => {
    ref.current.scrollIntoView({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="flex flex-wrap product" ref={ref}>
        {data.map((el, index) => (
          <Card
            key={index}
            price={el.price}
            name={el.name}
            description={el.description}
            stock={panier.filter((el2) => el._id == el2._id).length?el.stock:0}
            onClick={() => dispatch(AddItem(el))}
            add={() => dispatch(IncrementProduct(el))}
            minus={() => dispatch(DesincrementProduct(el))}
            exist={panier.filter((el2) => el._id == el2._id).length?true:false}
          />
        ))}
      </div>
      <Button name={"up"} onClick={goToTop} />
    </>
  );
}
