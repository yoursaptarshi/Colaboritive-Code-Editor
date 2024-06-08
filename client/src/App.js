import React, { useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './Utils/Header/Header';
import Footer from './Utils/Footer/Footer';
import NoPage from './Utils/NotFound/Nopage'
import Home from './Components/Home/Home';
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Editor from './Components/Editor/Editor'
import {BrowserRouter as Router,Routes,Route} from'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Profile from './Components/Profile/Profile';
import { userProfile } from './Actions/userAction';
import Usercode from './Components/Profile/Usercode';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userProfile())
  }, [])
  
  const {isAuthenticated} = useSelector((state)=>state.user)
  
  return (
    
    <ChakraProvider theme={theme}>
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<NoPage/>}/>
          <Route path='/login' element={ <Login/>}/>
          <Route path='/register' element={isAuthenticated ? <Editor/> : <Register/>}/>
          <Route path='/code/:roomName' element={<Editor/>}/>
          <Route path='/code/:roomName/:codeId/:versionId' element={<Editor/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/user-codes/:codeId' element={<Usercode/>}/>
        </Routes>
        <Footer/>
      </Router>
      
    </ChakraProvider>
  );
}

export default App;
