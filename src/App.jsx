import {Routes,Route} from 'react-router-dom';
import Homepage from './Home';
import Login from './Login';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>//
      <Route path='/login' element={<Login/>}/>//
      <Route path='/register' element={<register/>}/>//
      <Route path='/forgotpassword' element={<forgotpassword/>}/>
      <Route path='/resetpassword' element={<resetpassword/>}/>
      <Route path='/cart' element={<cart/>}/>
      <Route path='/clothes' element={<clothes/>}/>
      <Route path='/electronics' element={<electronics/>}/>
      <Route path='/appliances' element={<appliances/>}/>
      <Route path='/toys' element={<toys/>}/>
      
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
