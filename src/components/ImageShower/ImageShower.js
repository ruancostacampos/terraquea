import styles from './ImageShower.module.css'
import { useState } from 'react'

const ImageShower = ({images}) => {
    
    const [imageIndex, setImageIndex] = useState(0)

    return (
        <div className={styles.imageShower}>
            <img className={styles.currentShowing}
                src={images[imageIndex]}
                alt="A camera"
            />
                <div className={styles.miniatureContainer}>
                    {images.map((item, index) => (
                        <img
                            key={index}
                            className={styles.miniature}
                            src={item}
                            onClick={() => setImageIndex(index)}
                        />
                    ))}
                </div>

            </div>
    )

}

export default ImageShower