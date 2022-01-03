import React from 'react';
import { render } from '@testing-library/react';
import { Areas, AreasProps } from './areas';
describe('Areas', () => {

  test('should return numbers with correct format', () => {
    const props: AreasProps = {
      category: 'test',
      areas: [1234, 5678.9, 12345678],
    }

    const { getAllByTestId, getByText } = render(<Areas category={props.category} areas={props.areas}></Areas>)

    expect(getAllByTestId('area')).toHaveLength(props.areas!.length)
    expect(getByText('1.234')).toBeInTheDocument()
    expect(getByText('5.678,9')).toBeInTheDocument()
    expect(getByText('12.345.678')).toBeInTheDocument()
  })


})