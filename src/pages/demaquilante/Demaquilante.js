import ImageShower from '../../components/ImageShower/ImageShower'
import styles from './Demaquilante.module.css'
import ScaleY from '../../components/Animations/ScaleY'


const Demaquilante = () => {

    const images = ['https://images.pexels.com/photos/2183972/pexels-photo-2183972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    'https://images.pexels.com/photos/1787235/pexels-photo-1787235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    'https://images.pexels.com/photos/2920225/pexels-photo-2920225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'http://localhost:3000/static/media/demaquilante.73d0ffbec291572e3a27.png']

    return (
    
    <ScaleY>

        <div className={styles.detalhesContainer}>

            <div className={styles.detalhesSubContainer}>
                <span className={styles.stock}>Em estoque</span>
                <h2>Demaquilante</h2>
                <p className={styles.price}>R$29,90</p>
                <div className={styles.divider}></div>

                <div className={styles.detailsInfoText}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia laoreet mattis. Vivamus sodales quam sed sagittis tempor. Donec vulputate ipsum at sodales euismod. Vestibulum eleifend interdum sollicitudin. Integer consequat nisl et tincidunt consequat. Phasellus euismod, arcu tincidunt ullamcorper consequat, urna quam finibus enim, ut vehicula arcu dui eget eros. Duis interdum mollis mauris, vitae varius est feugiat et. Mauris vitae aliquet diam, ut gravida quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ac mauris molestie, venenatis leo non, tincidunt lorem.
                    </p>
                </div>

                <div className={styles.divider}></div>
                <div className={styles.centralize}>
                    <button>Quero o meu!</button>
                </div>
            </div>

            <ImageShower images={images}/>
        </div>
    
    </ScaleY>

    )

}

export default Demaquilante