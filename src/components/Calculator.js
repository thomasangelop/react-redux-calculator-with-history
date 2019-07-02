import React from 'react';
import { connect } from 'react-redux';

import { opToExpression, numToExpression } from '../actions/currentExpression';
import { addHistoryItem } from '../actions/history';

const operations = ['-', '+', '*', '/', '='];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Calculator = ({
  expression,
  operationToExpression,
  numberToExpression,
  addHistoryItem
}) => <fieldset>
  <legend>Calculator</legend>
  <input disabled="true" value={expression} />
  <br />
  {operations.map((op, index) => (
    <button onClick={() => op === '=' ? addHistoryItem(expression) : operationToExpression(op)} key={index}>{op}</button>)
    )}
  <br />
  {numbers.map(num => <button onClick={() => numberToExpression(num)} key={num}>{num}</button>)}
</fieldset>;

const mapStateToProps = state => ({
  expression: state.currentExpression,
});

const mapDispatchToProps = (dispatch) => ({
  operationToExpression: op => dispatch(opToExpression(op)),
  numberToExpression: num => dispatch(numToExpression(num)),
  addHistoryItem: expr => dispatch(addHistoryItem(expr))
})

export default connect(mapStateToProps, mapDispatchToProps)( Calculator);