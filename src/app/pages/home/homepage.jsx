import React from 'react';
import styles from "./homepage.module.css";
import Image from 'next/image';

function homepage() {
  return (
    <div>
        {/* first section */}
        <div className={styles.firstcontainer}>
            <Image src="/assets/img/hero.png" className={styles.Heroimg} 
              width={1500}
              height={24}/>
        </div>

        {/* second section */}
        <div className={styles.secondcontainer}>
            <div>
                <Image src="/assets/img/Sea.png" className={styles.seaimg} 
              width={1500}
              height={24}/>
            </div>
        </div>
    </div>
  )
}

export default homepage