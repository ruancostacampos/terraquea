import styles from './Footer.module.css'

import instagramIcon from '../../assets/images/instagram.svg'
import whatsappIcon from '../../assets/images/whatsapp.svg'

import {useState, useLayoutEffect} from 'react'
import { useLocation } from 'react-router-dom'

const Footer = () => {

  const [largeContent, setLargeContent] = useState(false)
  const location = useLocation()

  const verifyContentSize = () => {
    
    if (document.body.scrollHeight  > window.innerHeight - 70) {
      setLargeContent(true)
      console.log('entered if -> tamanho ' + document.body.scrollHeight)
    } else { 
      setLargeContent(false)
      console.log('entered else -> tamanho ' + document.body.scrollHeight)
    }

  }

  useLayoutEffect( () => {
    
    setTimeout(()=>{
      verifyContentSize();
    }, 30)

    window.addEventListener('resize', verifyContentSize)
    console.log('i run')

  }, [location])


  return (

    
    <footer id="footer" className={!largeContent ? styles.footerContainer : styles.footerContainer + ' ' + styles.nofixed}>
     
     <div className={styles.contacts}>
      
        <div>
          <div className={styles.cardContainer}>
            <img src={instagramIcon} alt="Instagram icon" width="30px"/>
            <a href="https://www.instagram.com/nataliaricosta/" target="_blank" rel="nofollow">@nataliaricosta</a>
          </div>
        </div>

        <div>
          <div className={styles.cardContainer}>
            <img src={whatsappIcon} alt="Whatsapp icon" width="30px"/>
            <a href="https://wa.me/5577981032507?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20dos%20produtos%20terr%C3%A1quea." target="_blank">Enviar mensagem</a>
          </div>
        </div>

      </div>
      
      <div className={styles.informationContainer}>
        <div className={styles.information}>
            <p>Praça Monsenhor Honorato, BOX N°16, Centro / Poções - BA</p>
        </div>
      </div>
      
    

    </footer>
  )
}

export default Footer