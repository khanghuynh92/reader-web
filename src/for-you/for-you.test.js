import React from 'react';
import ReactDOM from 'react-dom';
import ForYou from './for-you';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <ForYou />
    </MemoryRouter>, div);
});