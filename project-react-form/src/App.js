import './App.css';
import Nav from './components/nav'
import Side from './components/side'
import Userside from './components/userside'

function App() {
  return (
    <section className="body">
      <header className='header'>
        <Nav />  
      </header>

      <div className="body_inner">
      <Side/>
      <Userside/>
      </div>
    </section>    
    
  );
}

export default App;
