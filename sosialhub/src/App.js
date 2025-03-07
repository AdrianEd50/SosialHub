/*import './CSS/Styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
function App() {
  return (
    <>
      <Header/>
      <div>
      <Button label={"Test button"} type="Submit"/>
      </div>
     
      <Footer/>
    </>
  );
}

export default App;*/

import './CSS/Styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Posts from './Pages/Posts';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Notifications from './Pages/Notifications';
import Messages from './Pages/Messages';


function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;



 