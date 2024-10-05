import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import ContentSection from './assets/ContentSection.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <HeroSection />
    <ContentSection />
  </StrictMode>,
)


    {/*<Logo />
    <Botao />*/}
    {/*<Header />*/}
