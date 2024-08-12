import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake, buyIcecream } from "../redux";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  const [num, setNum] = useState(1);

  return (
    <div>
      <h2> num of cakes are-{props.numCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button
        onClick={() => {
          props.buyCake(number);
        }}
      >
        buy {number} cakes
      </button>
    <h2> num of icecreams are-{props.numIcreams}</h2>
    <input
      type="text"
      value={num}
      onChange={(e) => setNum(e.target.value)}
    />
    <button
      onClick={() => {
        props.buyIcecream(num);
      }}
    >
      buy {num} icecreams
    </button>
  </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numCakes: state.cake.numCakes,
    numIcreams : state.iceCream.numIcreams
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: number => dispatch(buyCake(number)),
    buyIcecream: num => dispatch(buyIcecream(num))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);