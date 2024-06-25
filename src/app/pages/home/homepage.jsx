import React from 'react';
import styles from "./homepage.module.css";
import Image from 'next/image';
import Hero from "@/../public/assets/img/hero.png";
import Sea from "@/../public/assets/img/Sea.png"

function homepage() {
  return (
    <div>
        {/* first section */}
        <div className={styles.firstcontainer}>
            <Image src={Hero} className={styles.Heroimg}/>
        </div>

        {/* second section */}
        <div className={styles.secondcontainer}>
            <div>
                <Image src={Sea} className={styles.seaimg}/>
            </div>
        </div>
    </div>
  )
}

export default homepage