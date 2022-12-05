import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />)
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  () => beforeEach();
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  () => beforeEach();
  const initVal = screen.getByTestId(/count/i);
  expect(initVal).toHaveTextContent(0);
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  () => beforeEach();

  const count = screen.getByTestId("count");
  const inc = screen.getByTestId("add");
  fireEvent.click(inc);
  expect(count).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  () => beforeEach();

  const count = screen.getByTestId("count");
  const inc = screen.getByTestId("minus");
  fireEvent.click(inc);
  expect(count).toHaveTextContent('-1');
});
