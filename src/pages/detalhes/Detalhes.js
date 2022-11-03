import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styles from './Detalhes.module.css'

const Detalhes = () => {

    const images = [{url: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                     caption: 'Foto do produto 1'}];

    return (
        <div className={styles.detalhesContainer}>
            <Slide>
                {images.map((item, index) => (
                    <div className='each-slide' key={index}>
                        <div style={{'backgroundImage': `url(${item.url})`}}>
                            <span>{item.caption}</span>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>

    )

}

export default Detalhes