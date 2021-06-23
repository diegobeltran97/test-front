import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Discover from './components/Discover';
import Relate from './components/Relate';
import Learn from './components/Learn';
import Maps from './components/Maps';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <Header/>
         <main className="container">
        
            <Discover />
            <Relate/>
            <Learn/>
            
           
         </main>

         <Maps/>
         <Footer/>

        
      
    </div>
  );
}

export default App;
