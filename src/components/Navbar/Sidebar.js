import {Link} from 'react-router-dom'
import styles from './Sidebar.module.css'

const Sidebar = (props) => {

  return (
    <div 
      className={ props.show ? 
      styles.mobileMenuContainerShow + ' ' + styles.mobileMenuContainer 
      : styles.mobileMenuContainer
    }
      onClick = {props.toggle}
    >
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
          <li>
            <Link to="/demaquilante">Demaquilante</Link>
          </li>
          <li>
            <Link to="/sabonete">Sabonete</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar