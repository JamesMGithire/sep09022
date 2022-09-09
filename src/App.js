import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header bgpurple">
        <div className='width300'>
          <input
            type="text"
            placeholder='johndoe@example.com'
          />
          <input
            type="text"
            placeholder='Password'
          />
          <input
            type="text"
            placeholder='Confirm Password'
          />
          <div>
            <input type='checkbox' className='width10' />
            <label>I want to join the newsletter</label>
          </div>
          <button
            className='bgpurple color-white width60'
            type='submit'>
            Sign up
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
