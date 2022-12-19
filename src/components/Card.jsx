import styles from './style/card.module.css'


function Card() {
    return (
        <div className={styles.wrap}>
            <div className={styles.wrap_info}>
                <div className={styles.date}>
                    <span>{new Date().toDateString()}</span>
                </div>  
                <div className={styles.title}>
                    <h1>Astronauts prep for new solar arrays on nearly seven-hour spacewalk</h1>
                </div>
                <div className={styles.descr}>
                    <p>Kayla Barron was selected by NASA to join the 2017 Astronaut Candidate Class.  She reported for duty in August 2017. The Washington native graduated from the U.S. Naval Academy with a bachelor's degree in Systems Engineering.</p>
                </div>
            </div>
            <div className={styles.wrap_img}>
                <img src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="astronaut" />
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



export default Card