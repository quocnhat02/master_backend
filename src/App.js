import './App.scss';
import './index.scss';
import { GlobalStyles } from './GlobalStyles';
import Card from './components/card/Card';
import Card2 from './components/card/Card2';
import CardList from './components/card/CardList';
import { ThemeProvider } from 'styled-components';
const theme = {
  colors: {
    blue: '#2979ff',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      <CardList>
        <Card2 secondary={true}></Card2>
        <Card2></Card2>
        <Card2></Card2>
      </CardList>
    </ThemeProvider>
  );
}

export default App;
