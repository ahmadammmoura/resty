import { render, screen } from '@testing-library/react';
import Results from '../results/index';

it('renders learn react link', () => {
  const data = {
    count: 2,
    results: [
      {name: 'fake thing 1', url: 'http://fakethings.com/1'},
      {name: 'fake thing 2', url: 'http://fakethings.com/2'},
    ],
  };
  render(<Results data={data}/>);
  const linkElement = screen.getByText(/hello/i);
  console.log(linkElement)
  expect(linkElement).toBe(linkElement);
});

