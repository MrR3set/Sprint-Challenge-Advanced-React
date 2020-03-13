import React from 'react';
import ReactDOM from 'react-dom';
import { render, getAllByTestId, getByTestId } from "@testing-library/react";

import App from './App';
import NavBar from "./components/NavBar"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("checks for dark mode", ()=>{
  const {container} = render(<NavBar/>);

  expect(container.lastChild.classList.contains("dark-mode__toggle")).not.toBe(null)
});

test("checks for the list", ()=>{
  const {getByText} = render(<App />);
  const header = getByText(/player list/i);
});

