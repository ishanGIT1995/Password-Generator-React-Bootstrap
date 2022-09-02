import './App.css';
import PasswordForm from './components/PasswordForm';
import 'react-toastify/dist/ReactToastify.css';


let App = () => {
  return (
    <div className="App">


      <div className="container rounded-3">

        <h1 className='text-warning mb-3'>Password Generator</h1>

        <PasswordForm />

      </div>


    </div>
  );
}

export default App;
