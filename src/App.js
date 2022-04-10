import './App.scss';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Myroutes from './configPge/Myroutes';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
    
     <Header/>
     <Myroutes/>
     <Footer/>
     
    
    </div>
  );
}

export default App;
