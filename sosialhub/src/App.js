import './CSS/Styles.css';
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

export default App;