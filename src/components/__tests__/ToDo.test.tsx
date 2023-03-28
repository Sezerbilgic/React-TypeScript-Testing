import { screen, render } from '@testing-library/react';
import renderer from "react-test-renderer";
import ToDo from "../ToDo/ToDo";

test('renders learn react link', () => {
  render(<ToDo />);
  const todoElement = screen.getByTestId('todo-1');
  expect(todoElement).toBeInTheDocument();
});


test('matches snaphot', () => {
  const tree = renderer.create(<ToDo />).toJSON();
  expect(tree).toMatchSnapshot();
})