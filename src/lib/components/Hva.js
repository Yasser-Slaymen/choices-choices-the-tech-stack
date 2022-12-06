import { Component } from 'react'
import image from '../images/hvalogo.png'
import './hva.css'
class Hva extends Component{
    render(){
        return(
                <section className='hav'>
                    <img className='hav-logo' src={image} alt='imag'/>
                    <p className='fdnd'>Frontend<br />Design & Development</p>
                </section>
             )
    }
}
export default Hva;