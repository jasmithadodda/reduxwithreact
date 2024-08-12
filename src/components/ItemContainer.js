import React from 'react'
import { connect } from 'react-redux';
import { buyCake, buyIcecream } from "../redux";

 function ItemContainer(ownProps) {
  return (
    <div>
        <h2>Own Item - {ownProps.item}</h2>
        <button onClick={ownProps.buyItem}>buy items</button>
    </div>
  );
}

const mapStateToProps = (state,ownProps) => {
    const itemState = ownProps.cake
    ? state.cake.numCakes
    : state.iceCream.numIcreams;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
      ? () => dispatch(buyCake(1))
      : () => dispatch(buyIcecream());
    return {
      buyItem: dispatchFunction,
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);