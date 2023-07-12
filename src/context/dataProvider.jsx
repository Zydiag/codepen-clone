import { createContext, useState } from 'react';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [javascript, setJavascript] = useState('');

  return (
    <DataContext.Provider
      value={{ html, setHtml, css, setCss, javascript, setJavascript }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
