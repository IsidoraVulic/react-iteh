import React from "react";
import {AiOutlinePlusCircle} from "react-icons/ai";
import {BsDashCircle} from "react-icons/bs";

//function OneProduct(props) {
//destrukturiranje objekta
function OneProduct({product, onAdd}) {
  const stil = { margin: 1 + "em", borderStyle: "dotted"};

  // function onAdd(title){
  //   console.log("Dodat proizvod"+title)
  // }

  return (
    <div className="card" style={stil}>
      <img
        className="card-img-top"
        src="https:/picsum.photos/200"
        alt="Neka slika"
      />
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-text">{product.description}</p>
      </div>
      <button className="btn" onClick={()=>onAdd(product.title)}><AiOutlinePlusCircle/></button>
      <button className="btn"><BsDashCircle/></button>
    </div>
  );
}

export default OneProduct;
