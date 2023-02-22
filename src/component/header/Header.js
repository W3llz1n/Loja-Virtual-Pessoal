import Logo from '../../images/Logo.jpg'
import styles from './Header.module.css'


import { Link } from "react-router-dom"

function Header() {
    return (
        <header className={styles.header}>
            <Link to='/'><img src={Logo} alt="Logo" /></Link>

            <div className={styles.box_search}>
                <input className={styles.bar_search} placeholder='Pesquise seus produtos favoritos' type='search' />
                <input className={styles.buttom} type='submit' value='Pesquisar'/>
            </div>
        </header>
    )
}

export default Header