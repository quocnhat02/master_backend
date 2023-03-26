import logo from './logo.svg';
import './App.css';

function Feature() {
  return (
    <div className='feature'>
      <img className='feature-image' />
      <h3 className='feature-title'>Title</h3>
      <p className='feature-desc'>Description</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Feature />
      <Feature />
      <Feature />
    </div>
  );
}

export default App;
