import styles from './Colage.module.css'

import { useEffect, useState} from 'react'
import { motion, AnimatePresence } from "framer-motion"


const Colage = (props) => {

  const [index, setIndex] = useState(0)
  const images = props.images;

  // Faz a mudança de images durante um período de tempo
  useEffect( () => {
    //Delay para transição das imagens
    setTimeout( () => {
      
      if(index < images.length - 1){
        setIndex(index + 1)
      }else{
        setIndex(0)
      }

    }, 4000) 

  }, [index]) 

  // Cria as animações que serão usadas pelo motion img
  const variants = {
    
    initial: {
      x: 500, opacity: 0
    },

    animate: {
      x: 0, opacity: 1
    },

    exit: {
      x: -500, opacity: 0
    },

    transition: {
      duration: 1
    }
  }

  return (
    <motion.div
      initial={{scaleY: 0}}
      animate={{scaleY: 1}}
      transition={{duration: 0.3, type: 'spring'}}
    >
      <div className={styles.collageContainer}>
        <div className={styles.textContainer}>
          <span> Meu título</span>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        </div>

        <div className={styles.imageRow}>
          <AnimatePresence initial={false}>
            <motion.img
              key={images[index]}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{duration: 1}}
              src={images[index]}
            />
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

export default Colage