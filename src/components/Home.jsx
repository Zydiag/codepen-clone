import Header from './Header';
import Code from './Code';
import Result from './Result'

import DataProvider from '../context/dataProvider';

const Home = () => {
  return (
    <DataProvider>
      <Header />
      <Code />
      <Result />
    </DataProvider>
  );
};
export default Home;
