import './App.scss';
import Photos from './components/photo/Photos';
// import { GlobalStyles } from './GlobalStyles';
// import Card from './components/card/Card';
// import Card2 from './components/card/Card2';
// import CardList from './components/card/CardList';
// import CardTailwind from './components/card/CardTailwind';
// import { ThemeProvider } from 'styled-components';
// const theme = {
//   colors: {
//     blue: '#2979ff',
//   },
// };

function App() {
  return (
    <div>
      {/* <ThemeProvider theme={theme}></ThemeProvider> */}
      {/* <GlobalStyles></GlobalStyles> */}
      {/* <CardList>
        <CardTailwind primary={true}></CardTailwind>
      </CardList> */}
      <Photos></Photos>
    </div>
  );
}

export default App;
