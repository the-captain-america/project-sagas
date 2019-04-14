import getCarSelector from './getCarSelector';

describe('Selector makeGetErrorLogsSelector', () => {
  test('gets cars', () => {
    // Arrange
    const state = {
      cars: 
    };
    const selector = getCarSelector();
    const expected = errorLog;

    // Act
    const actual = first(selector(state));

    // Assert
    expect(actual).toBe(expected);
  });
});
