import './App.css'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Addcontact from './components/Addcontact';
import Editcontact from './components/Editcontact';


function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/add' element={<Addcontact />} />
        <Route path='/edit/:id' element={<Editcontact />} />
      </Routes>
    </div>
  )
}

export default App
