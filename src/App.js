import './App.scss';
// import { GlobalStyles } from './GlobalStyles';
// import Card from './components/card/Card';
// import Card2 from './components/card/Card2';
import CardList from './components/card/CardList';
import CardTailwind from './components/card/CardTailwind';
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
      <CardList>
        <CardTailwind></CardTailwind>
      </CardList>
    </div>
  );
}

export default App;
