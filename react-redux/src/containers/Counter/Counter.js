import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import Button from '../../components/Button/Button';
import ResultList from '../../components/ResultList/ResultList';

class Counter extends Component {
  render() {
    return (
      <>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.incrementOne} />
        <CounterControl label="Decrement" clicked={this.props.decrementOne} />
        <CounterControl label="Add 5" clicked={this.props.add} />
        <CounterControl label="Subtract 5" clicked={this.props.sub} />
        <Button buttonType="button" clicked={this.props.storeResult} buttonLabel="Store Result" />
        <ResultList resultList={this.props.resList} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ctr: state.counter,
  resList: state.result,
});

const mergeProps = (stateProps, dispatchProps) => {
  const { ctr, resList } = stateProps;
  const { dispatch } = dispatchProps;
  return {
    ctr,
    resList,
    incrementOne: () => { dispatch({ type: 'INCREMENT' }); },
    decrementOne: () => { dispatch({ type: 'DECREMENT' }); },
    add: () => { dispatch({ type: 'ADD', value: 15 }); },
    sub: () => { dispatch({ type: 'SUB', value: 15 }); },
    storeResult: () => { dispatch({ type: 'STORE_RESULT', value: ctr }); },
  };
};

export default connect(mapStateToProps, null, mergeProps)(Counter);
