import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import Home from './Components/Home'
import { BrowserRouter as Router} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header />
      <Router>
      <Home/>
      </Router>

      <Footer />
    </div>
  );

}

export default App;