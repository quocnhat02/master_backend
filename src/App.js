import './App.css';
import { GlobalStyles } from './GlobalStyles';
import Card from './components/card/Card';
import Card2 from './components/card/Card2';
import CardList from './components/card/CardList';

function App() {
  return (
    <div>
      <GlobalStyles></GlobalStyles>
      <CardList>
        <Card2 secondary={true}></Card2>
        <Card2></Card2>
        <Card2></Card2>
      </CardList>
    </div>
  );
}

export default App;
