export const ADD_HISTORY_ITEM = 'ADD_HISTORY_ITEM';

export const addHistoryItem = (expr) => ({
  type: ADD_HISTORY_ITEM,
  payload: {
    expr,
    result: eval(expr.replace(/=\s*$/,''))
  }
})