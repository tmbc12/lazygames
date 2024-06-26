"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./homepage.module.css";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

function Homepage() {
  const secondContainerRef = useRef(null);
  const sunRef = useRef(null);
  const [sunOffset, setSunOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      if (secondContainerRef.current) {
        secondContainerRef.current.style.top = `-${scrollPosition * 0.5}px`;
      }
      if (sunRef.current) {
        setSunOffset(scrollPosition * 0.3);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* first section */}
      <div className={styles.firstcontainer}>
        <Image
          src="/assets/img/hero.png"
          alt="Hero Image"
          className={styles.Heroimg}
          width={1500}
          height={24}
        />
      </div>

      {/* second section */}
      <div className={styles.second_section}>
        <div className={styles.secondcontainer} ref={secondContainerRef}>
          <Image
            src="/assets/img/sun.png"
            alt="sun image"
            width={2000}
            height={350}
            style={{ transform: `translateY(-${sunOffset}px)` }}
            ref={sunRef}
            className={styles.sunimg}
          />
        </div>
        <div className={styles.sectiontwo}>
          <div>
            <div>
              <Image
                src="/assets/img/cloud.png"
                width={200}
                height={200}
                className={styles.cloudimg}
              />
            </div>
            <div>
              <Image
                src="/assets/img/sea.png"
                alt="Sea Image"
                className={styles.seaimg}
                width={2000}
                height={240}
              />
            </div>
            <div className={styles.imgcontent}>
              <Parallax
                translateX={["30%", "0%"]}
                scale={[1, 1]}
                easing="easeInOutQuad"
              >
                <Image
                  src="/assets/img/trees.png"
                  alt="treeimg"
                  width={500}
                  height={400}
                  className={styles.treeimg}
                />
              </Parallax>
              <Parallax
                translateX={["40%", "0%"]}
                scale={[1, 1]}
                easing="easeInOutQuad"
              >
                <div className={styles.sideimg}>
                  <Image
                    src="/assets/img/robot.png"
                    alt="treeimg"
                    width={150}
                    height={250}
                    className={styles.sideimages}
                  />
                  <Image
                    src="/assets/img/bush.png"
                    alt="treeimg"
                    width={250}
                    height={200}
                    className={styles.bushimg}
                  />
                </div>
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;


