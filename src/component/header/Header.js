import Logo from '../../images/Logo.jpg'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <img src={Logo} alt="Logo"/>
        </header>
    )
}

export default Header