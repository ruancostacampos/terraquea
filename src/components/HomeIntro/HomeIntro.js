import AnimatedJoin from '../Animations/AnimatedJoin'
import LeftToRight from '../Animations/LeftToRight'
import { ScaleX } from '../Animations/ScaleX'
import styles from './HomeIntro.module.css'
import branch from '../../assets/images/branch.png'

const HomeIntro = () => {

  const landscape = window.screen.height > 320

  return (
    <div className={styles.homeIntroContainer}>

      <AnimatedJoin>
        <div className={styles.rotate}>
            <img className={styles.branch} src={branch} alt="Galho" />
        </div>
      </AnimatedJoin>
    
    <div className={styles.infoContainer}>
      <div className={styles.infoProduct}>
        
        <LeftToRight delay={1} duration={0.7}>
          <h1>Terraquea</h1>
        </LeftToRight>

        <LeftToRight delay={1.7} duration={0.7}>
          <h2>Nutra <br></br>teus sentidos</h2>
        </LeftToRight>

        <LeftToRight delay={2.4} duration={0.7}>
        <p>Produtos que aproveitam o poder do 100% natural.</p>
        </LeftToRight>

        {landscape && <ScaleX delay={2.4} duration={0.7}>
          <div className={styles.divider}></div>
        </ScaleX>}

        <div className={styles.description}>

        <LeftToRight delay={3.0} duration={0.7}>
          <p>Para todo tipo de pele.</p>
        </LeftToRight>

        <LeftToRight delay={3.7} duration={0.7} invert={true}>
          <p>Hidrata e trata.</p>
        </LeftToRight>

        </div>

      </div>
    
    </div>

    </div>
  )
}

export default HomeIntro