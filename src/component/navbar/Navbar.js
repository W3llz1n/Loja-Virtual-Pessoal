import { Link } from "react-router-dom"

//style
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.list}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/categoria">Casa/Cozinha</Link>
                </li>
                <li>
                    <Link to="/">Quarto/Decorações</Link>
                </li>
                <li>
                    <Link to="">Eletronicos</Link>
                </li>
                <li>
                    <Link to="/contato">Contato</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar