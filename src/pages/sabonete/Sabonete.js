import ImageShower from '../../components/ImageShower/ImageShower'
import styles from '../demaquilante/Demaquilante.module.css'
import ScaleY from '../../components/Animations/ScaleY'


const Sabonete = () => {

    const images = ['https://images.pexels.com/photos/2183972/pexels-photo-2183972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    'https://images.pexels.com/photos/1787235/pexels-photo-1787235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    'https://images.pexels.com/photos/2920225/pexels-photo-2920225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']
    

    return (
    
    <ScaleY>
        
        <div className={styles.detalhesContainer}>
            
            <div className={styles.detalhesSubContainer}>
                
                <span className={styles.stock}>Em estoque</span>
                <h2>Sabonete</h2>
                <p className={styles.price}>R$50,90</p>
                <div className={styles.divider}></div>

                <div className={styles.detailsInfoText}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia laoreet mattis. Vivamus sodales quam sed sagittis tempor. Donec vulputate ipsum at sodales euismod. Vestibulum eleifend interdum sollicitudin. Integer consequat nisl et tincidunt consequat. Phasellus euismod, arcu tincidunt ullamcorper consequat, urna quam finibus enim, ut vehicula arcu dui eget eros. Duis interdum mollis mauris, vitae varius est feugiat et. Mauris vitae aliquet diam, ut gravida quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ac mauris molestie, venenatis leo non, tincidunt lorem.
                    </p>
                </div>

                <div className={styles.divider}/>
                <div className={styles.centralizeButton}>
                    <a href="https://api.whatsapp.com/send?phone=5577981032507&text=Ol%C3%A1%2C%20gostei%20do%20sabonete%20que%20vi%20no%20seu%20site%2C%20eu%20quero!" target='_blank'>
                        <button>Eu quero!</button>
                    </a>
                </div>
            </div>

            <ImageShower images={images}/>

        </div>

    </ScaleY>
    )

}

export default Sabonete