
import styles from './style/cardtwo.module.css'


function CardTwo() {
    return (
        <div className={styles.wraptwo}>
            <div className={styles.wrap_imgtwo}>
                <img src="https://images.unsplash.com/photo-1494022299300-899b96e49893?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="astronaut" />
            </div>
            <div className={styles.wrap_infotwo}>
                <div className={styles.date}>
                    <span>{new Date().toDateString()}</span>
                </div>  
                <div className={styles.title}>
                    <h1>Astronauts prep for new solar arrays on nearly seven-hour spacewalk</h1>
                </div>
            </div>
            
            <div className={styles.footer}>
                <div className={styles.foot_left}>
                    <img src="https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-like-thumb-black-and-white-elements-image_2283678.jpg" alt="" />
                    <img src="https://png.pngtree.com/element_our/png_detail/20181227/dislike-glyph-black-icon-png_291835.jpg" alt="" />
                </div>
                
            </div>
        </div>
        
    
    )
}

export default CardTwo