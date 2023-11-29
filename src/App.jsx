import Hero from './components/Hero/Hero';
import Summary from './components/Summary/Summary';

import './App.css';

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app"> 
        <Hero />
        <Summary />
      </div>
    </main>
  ) 
}

export default App 