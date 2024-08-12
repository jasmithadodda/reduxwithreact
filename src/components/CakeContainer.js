import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIcecream, buyCup } from "../redux";


function CakeContainer(props) {
  return (
    <>
    <div>
      <h2> num of cakes are-{props.numCakes}</h2>
      <button onClick={props.buyCake}>buy cake</button>
    </div>
    <div>
      <h2> num of icreams are-{props.numIcreams}</h2>
      <button onClick={props.buyIcecream}>buy iceCream</button>
    </div>
    <div>
      <h2> num of cupCakes are-{props.numCup}</h2>
      <button onClick={props.buyCup}>buy cupCake</button>
    </div>
    </>
  );
}
//convert state to props
const mapStateToProps = (state) => {
  return {
    numCakes: state.cake.numCakes,
    numIcreams: state.iceCream.numIcreams,
    numCup : state.cup.numCup,
  };
};

//convert dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    buyIcecream: () => dispatch(buyIcecream()),
    buyCup: () => dispatch(buyCup()),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);