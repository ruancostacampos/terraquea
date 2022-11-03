import styles from './Contato.module.css'
import { motion, AnimatePresence } from "framer-motion"

const Contato = () => {
  return (
  <AnimatePresence>
    <motion.div
        initial={{scaleY: 0}}
        animate={{scaleY: 1}}
        transition={{duration: 0.3, type: 'spring'}}
        style={{display: "flex", minHeight: "calc(100% - 162px)", alignItems: "center", justifyContent: "space-around"}}
      >
      <div className={styles.contatoContainer}>
        <div>
          <div className={styles.contatoTittle}>
            <p>Converse com a gente!</p>
          </div>
          
          <div className={styles.contatoCardContainer}>
            <div className={styles.contatoCard}>
              <span>Instagram</span>
              <a href="https://www.instagram.com/nataliaricosta/" target="_blank">@nataliaricosta</a>
            </div>

            <div className={styles.contatoCard}>
              <span>Whatsapp</span>
              <a href="https://wa.me/5577981032507?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20dos%20produtos%20terr%C3%A1quea." target="_blank">Enviar mensagem</a>
            </div>

            <div className={styles.contatoCard}>
              <span>Telefone</span>
              <p>(77)99999-9999</p>
            </div>

            <div className={styles.contatoCard}>
                <span>Localização</span>
              <p>Praça Monsenhor Honorato, BOX N°16</p>
              <p> Centro / Poções - BA</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
 
  
  )
}

export default Contato