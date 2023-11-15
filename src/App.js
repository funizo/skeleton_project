import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Toolbar from './components/toolbar'
import Slide from './components/slide'
import TabBar from './components/tabBar'
import Footer from './components/footer'

function App() {

  

  return (
    <div className="App">
      
        <Toolbar/>
        <Slide/>
        <TabBar/>
        <Footer/>
    </div>
  );
}

export default App;
