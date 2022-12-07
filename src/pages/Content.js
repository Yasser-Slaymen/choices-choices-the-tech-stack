import React from 'react';
import {PrismicRichText,useAllPrismicDocumentsByType } from '@prismicio/react'
import '../styles/Content.css';

function Content() {
  const [document] = useAllPrismicDocumentsByType('the_cliente_case')
  // console.log(document)
  if(!document) return null;
    return (
      <div className='box-container'>
        {document.map((pre,i) => {
          // console.log(pre)
          return (
            
               <section className='cards-content' key={`card-${i}`}>
                <h2 className='card-titles'>{pre.data.title[0].text}</h2>
                <article className='container-paragraph'>
                      <PrismicRichText field={pre.data.content} />
                </article>
               </section>
           
          )})}
      </div>

    );}


export default Content;