import * as ReactJSDOM from 'react-jsdom';

export const mount = (jsx) => {
  return ReactJSDOM.render(jsx);
}
