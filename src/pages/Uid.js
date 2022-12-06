import { usePrismicDocumentByUID } from '@prismicio/react'
function Uid () {
    const [document] = usePrismicDocumentByUID('the_cliente_case','sprint5');
    console.log(document)
    return (
    <div>
         {document && (<h2>{document.data.title[0].text}</h2>) }

    </div>
    
)}
export default Uid;