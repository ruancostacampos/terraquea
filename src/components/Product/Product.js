import { Link } from 'react-router-dom'

import styles from './Product.module.css'


const Product = (props) => {

  const Info = () => {
    
    return(
      <div className={styles.infoContainer}>
        
        <div className={styles.imageContainer}>
          <img className={styles.productImage}src={props.image} alt="Demaquilante" />
        </div>
        
        <div className={styles.infoContainerProduct}>
          <span>Nós produzimos</span>
          <h2>{props.title}</h2>
          <div className={styles.divider}></div>
          <p>{props.description}</p>
          <Link to={props.goTo}>
              <button>Detalhes</button>
          </Link>
        </div>
  
      </div>
    )

  }

  const Video = () => {

    return (

      <div>
        <div className={styles.videoContainer}>
          <video className={ props.align ===  "left" ? styles.videoR : styles.videoL} muted autoPlay loop>
            <source src={props.video} type="video/webm"/>
          </video>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
    {props.align === "left" ? <><Video/><Info/></> : <><Info/><Video/></>}
    </div>
  )

  
}


export default Product