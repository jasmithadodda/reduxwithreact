import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);

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
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numCakes: state.cake.numCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: num => dispatch(buyCake(num)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);