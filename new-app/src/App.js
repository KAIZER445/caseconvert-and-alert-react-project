import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcom from './components/Navbarcom.js';
import Newform from './components/Newform.js';
import Container from 'react-bootstrap/Container';
import About from './components/About.js';
import { useState } from 'react';
import AllAlert from './components/AllAlert.js';
import { Route,Routes } from 'react-router-dom';


function App() {
  const [theme, setTheme] = useState('light');
  const [alert, alertsate] = useState(null);
  const showAlert = (message, type) => {
    alertsate({
      msg: message,
      type: type
    })
    setTimeout(() => {
      alertsate(null);
    }, 1000);
  }

  const themechange = () => {
    if (theme !== 'dark') {
      setTheme('dark');
      document.body.style.backgroundColor = '#181818';
      document.body.style.color = 'white';
    } else {
      setTheme('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };

  const themechangedanger = () => {
    if (theme !== 'danger') {
      setTheme('danger');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    } else {
      setTheme('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };


  return (
    <>
      <Navbarcom CompanyName='k xa' theme={theme} themechange={themechange} themechangedanger={themechangedanger} />
      <Container>
      <AllAlert alert={alert} />
      <Routes>
        <Route path='/' element={<Newform showAlert={showAlert} alert={alert} theme={theme} />} />
        <Route path='/about' element={<About theme={theme} />} />
      </Routes>
      </Container>
    </>
    
  );
}

export default App;
