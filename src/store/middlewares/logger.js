const logger = store => next => action => {
  console.group(action.type)
  console.log('ACTION', action)
  console.log('PREV_STATE', store.getState())
  const response = next(action)
  console.log('NEXT_STATE', store.getState())
  console.groupEnd()
  return response
}

export default logger