import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/store/cartSlice";

const ItemList = ({ items,dummy}) => {
  console.log(items);

  const dispatch=useDispatch()

  const handleAddItem=(item)=>{
    dispatch(addItem(item));
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"
        >
        <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name} </span>
              <span>
                💵
                {item.card.info.price}
              </span>
            </div>

            <p className="text-xs">{item.card.info.description}</p>
            <p>{dummy}</p>
          </div>
          <div  className="w-3/12">
          <div > <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg absolute " onClick={()=>handleAddItem(item)}>Add+</button></div>
         {
             item.card.info.imageId ? <img src={CDN_URL + item.card.info.imageId} className="rounded-2xl" />: <p></p>
         }
          
          </div>
          
          
        </div>
      ))}
    </div>
  );
};

export default ItemList;






