import { useRef } from 'react';

import './App.css'
import Buttons from './components/Buttons';
import Header from './components/Header';
import Main from './components/Main';
import Comments from './components/Comments';
import AboutUs from './components/AboutUs';
import References from './components/References';

const App = () => {
  const headerRef = useRef();
  const mainRef = useRef();
  const commentsRef = useRef();
  const aboutUsRef = useRef();
  const referencesRef = useRef();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

  return (
    <main className='container'>
      <Buttons 
        header={headerRef} 
        main={mainRef} 
        comments={commentsRef}
        aboutUs={aboutUsRef} 
        references={referencesRef} 
      />
      <Header forwardRef={headerRef} />
      <Main forwardRef={mainRef} />
      <Comments forwardRef={commentsRef} />
      <AboutUs forwardRef={aboutUsRef} />
      <References forwardRef={referencesRef} />
      <button className='btn' onClick={() => scrollToTop()}>Scroll to top</button>
    </main>
  );
}

export default App;
