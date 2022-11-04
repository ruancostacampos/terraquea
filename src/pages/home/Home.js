import HomeIntro from '../../components/HomeIntro/HomeIntro'
import Product from '../../components/Product/Product'
import styles from './Home.module.css'
import demaquilante from '../../assets/images/demaquilante.png'
import demaquilanteVideo from '../../assets/videos/product-video.webm'
import sabonete from '../../assets/videos/sabonete.webm'
import HomeScroll from '../../components/HomeScroll/HomeScroll'
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod augue eget turpis tincidunt, dictum feugiat eros condimentum. Etiam vitae lectus at arcu elementum venenatis et et mi. Phasellus auctor nec leo nec porta. Nam varius ornare velit, nec tincidunt eros dapibus non. Nunc nisl augue, sollicitudin in fringilla ac, commodo quis turpis. Praesent pharetra sollicitudin eros, vel luctus mi fringilla vel. Donec pretium at erat id lacinia."


const Home = () => {
  return (
    <div className={styles.homeContainer}>
        <HomeScroll/>
        <HomeIntro/>
        <section id="demaquilante">
          <Product 
            title="Demaquilante" 
            description={description} 
            image={demaquilante} 
            video={demaquilanteVideo}
            goTo="demaquilante"
          />
        </section>
        <section id="sabonete">
          <Product
            title="Sabonete" 
            description={description} 
            image={demaquilante} 
            video={sabonete}
            align="left"
            goTo="sabonete"
          />
        </section>
    </div>
  )
}

export default Home