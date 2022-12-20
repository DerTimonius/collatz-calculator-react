import Calculator from './components/Calculator';
import Explanation from './components/Explanation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="text-textOffWhite bg-gradient-to-br from-darkBlue via-gradient1 to-gradient2 md:w-620">
      <Explanation />
      <Calculator />
      <Footer />
    </div>
  );
}

export default App;
