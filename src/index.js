import React from 'react';
import ReactDOM from 'react-dom/client';
import './Globalindex.css';
import App from './pages/App';
import Header from './lib/components/Header'
import Footer from './lib/components/Footer'
import Hva from './lib/components/Hva'
import Quote from './lib/components/Quote'
import { PrismicProvider } from '@prismicio/react'
import { client } from '../src/lib/utils/prismic'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <PrismicProvider client={client}>
    <div className='global-container'>
    <Hva/>
      <div className='container'>
            <Header/>
            <App tab="home"/>
            <Footer/>
      </div>
      <Quote/>
    </div>
  </PrismicProvider>
  </React.StrictMode>

);
