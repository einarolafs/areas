import React from 'react';
import { render } from '@testing-library/react';
import { Areas, AreasProps } from './areas';
describe('Areas', () => {

  test('should return numbers with correct format', () => {
    const props: AreasProps = {
      category: 'test',
      areas: [1234, 5678.9, 12345678],
    }

    const { getAllByTestId } = render(<Areas category={props.category} areas={props.areas}></Areas>)

    expect(getAllByTestId('area')).toHaveLength(props.areas!.length)
  })


})