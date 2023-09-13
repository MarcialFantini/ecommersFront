"use client";

import React, { useState } from "react";
import person from "../../assets/objectoPrueba/person.jpg";
import style from "./style.module.css";
import Image from "next/image";

function AboutComponent() {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className={style.containerMain}>
        <picture className={style.picture}>
          <Image
            onLoad={() => setActive(true)}
            src={person}
            alt="person about"
            className={style.img + " " + (active ? style.showImage : "")}
          ></Image>
        </picture>
        <div className={style.containerText}>
          <h2 className={style.title}>Hi there!</h2>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
            tenetur nesciunt libero corporis dicta officia veniam corrupti at
            harum, iusto fugit quidem veritatis illo itaque alias, labore non,
            debitis impedit.
          </p>
        </div>
      </div>
      <div>
        <div className={style.containerTextSub}>
          <h2 className={style.subTitle}>My Career So Far</h2>
          <p className={style.subText}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            iure labore sunt id doloremque. Eaque et optio fugit iusto sunt
            nulla tempora inventore, laboriosam amet voluptatem veniam soluta,
            sapiente illum.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutComponent;
