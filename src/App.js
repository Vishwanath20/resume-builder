import logo from './logo.svg';
import './App.css';
import { Route,Routes} from 'react-router-dom';

import { Helmet } from 'react-helmet';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import ContactUs from './components/contactus'

function App() {
  return (
    <div>
   <Header/>
   
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/about" element={<About/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
      </Routes>
     
    <Footer/>
    <Helmet>
    <script src="assets/js/main.js"></script>
    </Helmet>
    </div>
  );
}

export default App;
