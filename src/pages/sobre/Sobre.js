import styles from './Sobre.module.css'
import Colage from '../../components/Collage/Colage'

import img1 from '../../assets/images/natalia.png'
import img2 from '../../assets/images/natalia2.jpg'
import img3 from '../../assets/images/natalia3.png'
import img4 from '../../assets/images/natalia4.png'

import { motion, AnimatePresence } from "framer-motion"


const Sobre = () => {

  const images = [img1, img2, img3, img4];

  return (
        <div className={styles.sobreContainer}>
          <Colage images={images} /> 
        </div>
  )
}

export default Sobre