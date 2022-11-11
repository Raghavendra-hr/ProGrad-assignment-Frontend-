import React from 'react';
import ReactDOM from 'react-dom';
import Lm from './Lm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
