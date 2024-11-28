import {Routes,Route} from 'react-router-dom';
import Layout from "./Layout";
import Home from "./Home";
import Login from './Login';
import Register from './Register';
import Forgotpassword from './Forgotpassword';
import Resetpassword from './Resetpassword';
import Cart from './Cart';
import Detailedpage from './Detailedpages';
import Category from './Category';

function App() {

  return (
    <>
   
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forgotpassword' element={<Forgotpassword/>}/>
      <Route path='/resetpassword' element={<Resetpassword/>}/>
      <Route path='/cart/:category/:id' element={<Cart/>}/>
      <Route path='/:category' element={<Category/>}/>
      <Route path='/:category/:id' element={<Detailedpage/>}/>
      </Route>

    </Routes>
      
    </>
  )
}

export default App
