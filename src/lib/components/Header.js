import {Component} from 'react'
import image from '../images/we-love.png'
import './Header.css'
class Header extends Component {
    render() {
        return (
            <nav>
             
                 <picture className='logo'>
                    <img className='img-logo' src={image} alt='imag'/>
                 </picture>
    
                
                <h1>Studiejaar 2022-2023</h1>

            </nav>

        )
    }
}
export default Header;