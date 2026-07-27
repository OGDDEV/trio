import './App.css';
import Dashboard from './Dashboard/Dashboard';
import Hero from './Hero/Hero';
import SearchOptions from './SearchOptions/SearchOptions';
import Trending from './Trending/Trending';
import NewsletterTrio from './NewsletterTrio/NewsletterTrio';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="site-container">
        <Dashboard />
        <Hero />
        <SearchOptions />
        <Trending />
        <NewsletterTrio />
        <Footer />
      </div>
    </div>
  );
}

export default App;
