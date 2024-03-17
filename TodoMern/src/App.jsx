import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import User from './components/User.jsx'
import CreateUser from './components/CreateUser.jsx'
import UpdateUser from './components/UpdateUser.jsx'

function App() {

  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<User/>}></Route>
        <Route path='/create' element={<CreateUser/>}></Route>
        <Route path='/update/:id' element={<UpdateUser/>}></Route>
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
