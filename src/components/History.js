import React from 'react';
import { connect } from 'react-redux';

import { restoreExpression } from '../actions/currentExpression';

const History = ({list = [], restoreExpression}) => 

<fieldset>
  <legend>History:</legend>
  <ol>
    {list.slice(0, 10).map((item, index) => 
    <li key={index} onClick={() => restoreExpression(item.expr) }>
      {item.expr} = {item.result}
    </li>)}
  </ol>
</fieldset>


const mapStateToProps = (state) => ({
  list: state.history
});

const mapDispatchToProps = {
  restoreExpression
}

export default connect(mapStateToProps, mapDispatchToProps )(History);