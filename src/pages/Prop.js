import React from 'react'
import {useAllPrismicDocumentsByType } from '@prismicio/react'
import '../styles/Content.css';

function Prop(props) {
  const [document] = useAllPrismicDocumentsByType('the_cliente_case')
  // console.log(document)
  if(!document) return null;
    return (
      <div className='box-container'>
        {document.map((present) => {
          // console.log(pre)
          return (
               <section className='cards-content'>
                <h2 className='card-titles'>{present.data.title[0].text}</h2>
                <article className='container-paragraph'>
                 {props.content}
                </article>
               </section>
           
          )})}
      </div>

    );}
export default Prop