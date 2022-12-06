import {Component} from 'react'
import './footer.css'
class Footer extends Component {
    render() {
        return (
            <footer>
                <nav>
                    <h2>Microsites</h2>
                    <p>
                    FDND maakt gebruik van microsites. Microsites zijn kleine websites ter
                    ondersteuning van een campagne, informatie over een product, dienst of
                    voor een ander specifiek doel.
                    </p>
                    <ul>
                    <li><a href="https://fdnd.nl">FDND.nl</a></li>
                    <li><a href="https://contact.fdnd.nl">Contact</a></li>
                    <li><a href="https://programma.fdnd.nl">Programma</a></li>
                    <li><a href="https://skc.fdnd.nl">Studie Keuze Check</a></li>
                    <li><a href="https://partners.fdnd.nl">Partners</a></li>
                    <li><a href="https://tasks.fdnd.nl">Leertaken</a></li>
                    <li><a href="https://styleguide.fdnd.nl">Styleguide</a></li>
                    </ul>
                </nav>
            </footer>

            
           

        )
    }
}
export default Footer;