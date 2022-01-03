import reducer, { setAreas } from './areasSlice';

describe('areasSlice', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined})).toEqual({})
  })

  test('should set new state for areas', () => {
    const previousState = {}
    expect(reducer(previousState, setAreas({'areaTest': [23234, 23434]}))).toEqual({areaTest: {areas: [23234, 23434], total: 46668}})
  })

})
