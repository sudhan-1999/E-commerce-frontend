import {Routes,Route} from 'react-router-dom';
import Homepage from './Home';
import Login from './Login';
import Clothes from './Clothes';
import Register from './Register';
import Forgotpassword from './Forgotpassword';
import Resetpassword from './Resetpassword';
import Cart from './Cart';
import Electronics from './Electronics';
import Appliances from './Appliances';
import Toys from './Toys';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>//
      <Route path='/login' element={<Login/>}/>//
      <Route path='/register' element={<Register/>}/>//
      <Route path='/forgotpassword' element={<Forgotpassword/>}/>//
      <Route path='/resetpassword' element={<Resetpassword/>}/>//
      <Route path='/cart' element={<Cart/>}/>//
      <Route path='/clothes' element={<Clothes/>}/>//
      <Route path='/electronics' element={<Electronics/>}/>//
      <Route path='/appliances' element={<Appliances/>}/>//
      <Route path='/toys' element={<Toys/>}/>//
      
    </Routes>
    {/*app.use("/",userrouter);//completed
app.use("/register",userrouter);//completed
app.use("/login",userrouter);//completed
app.use("/forgotpassword",userrouter)//completed
app.use("/resetpassword",userrouter)//completed
app.use("/cart",userrouter);
app.use("/clothes",userrouter);//completed
app.use("/electronics",userrouter);//completed
app.use("/appliances",userrouter);//completed
app.use("/toys",userrouter);//completed*/ }
      
    </>
  )
}

export default App
