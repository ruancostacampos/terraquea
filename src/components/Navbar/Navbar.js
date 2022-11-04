// importando estilos
import styles from './Navbar.module.css'

//importando componentes
import {Link} from 'react-router-dom'
import { useState } from 'react';

//importando imagens
import Sidebar from './Sidebar';


const Navbar = () => {
  
var [showMobileMenu, setShowMobileMenu] = useState(false);

const toggleMenu = () => {
  showMobileMenu = setShowMobileMenu(!showMobileMenu)
}

  return (
    <header id="navbar" className={styles.container}>
      <div className={styles.mobileMenu}
        onClick={() => toggleMenu()}
      >
        <span></span>
        <span className={styles.menuLineReduced}></span>
        <span></span>
        <span className={styles.menuLineReduced}></span>
      </div>
      
      <div width="170" height="52" className={styles.logo}>
        <p>Terraquea</p>
      </div>
      
      <nav className={styles.containerLinks}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li className={styles.menu}>
            <Link to="/demaquilante">Produtos</Link>
            <div className={styles.subMenu}>
              <Link to="/demaquilante">demaquilante</Link>
              <Link to="/sabonete">sabonete</Link>
            </div>
          </li>
        </ul>
      </nav>
      
      <Sidebar show={showMobileMenu} toggle={toggleMenu}/>

    </header>
  )
}

export default Navbar