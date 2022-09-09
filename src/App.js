import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [form, setForm] = React.useState({
    email: "",
    password1: "",
    password2: "",
    join: false
  });

  function handleSubmit(event) {
    event.preventDefault()
    const{password1,password2,join}=form
    console.log(password1===password2 ? 
      ("Succefully signed up"):"Passwords do not match");
    join && console.log("Thanks for signing up for the newsletter");
  }
  function handleChange(event) {
    const { type, value ,name, checked } = event.target;
    setForm(prevVal => { return { ...prevVal, [name]: type === "checkbox"? checked : value } });
  }

  return (
    <div className="App">
      <header className="App-header bgpurple">
        <form
          onSubmit={handleSubmit}
          className='width300'
        >
          <input
            type="text"
            name='email'
            onChange={handleChange}
            placeholder='johndoe@example.com'
          />
          <input
            type="text"
            name='password1'
            onChange={handleChange}
            placeholder='Password'
          />
          <input
            type="text"
            name='password2'
            onChange={handleChange}
            placeholder='Confirm Password'
          />
          <div>
            <input
              type='checkbox'
              checked={form.join}
              className='width10'
              name='join'
              onChange={handleChange}
            />
            <label>I want to join the newsletter</label>
          </div>
          <button
            className='bgpurple color-white width60'
            type='submit'
          >
            Sign up
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
