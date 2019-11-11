import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.incrementOne} />
        <CounterControl label="Decrement" clicked={this.props.decrementOne} />
        <CounterControl label="Add 5" clicked={this.props.add} />
        <CounterControl label="Subtract 5" clicked={this.props.sub} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ctr: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  incrementOne: () => { dispatch({ type: 'INCREMENT' }); },
  decrementOne: () => { dispatch({ type: 'DECREMENT' }); },
  add: () => { dispatch({ type: 'ADD', value: 15 }); },
  sub: () => { dispatch({ type: 'SUB', value: 15 }); },

});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
