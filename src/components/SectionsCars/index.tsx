import { CardSectionLarge } from "../CardSectionLarge";
import { CardSectionSmall } from "../CardSectionSmall";

import clothes from "../../assets/home/clothes.png";
import tShirt from "../../assets/home/t-shirt.png";
import apple from "../../assets/home/apple.png";

import cosmetic from "../../assets/home/cosmetics.png";
import office from "../../assets/home/office.png";

import style from "./style.module.css";

export function SectionsCars() {
  return (
    <div className={style.containerSections}>
      <div className={style.containerLeft}>
        <div className={style.containerCards}>
          <CardSectionSmall
            src={tShirt}
            color="rgba(64, 12, 116, 0.1)"
            type="Cloths"
            title="T-shirt"
          ></CardSectionSmall>
          <CardSectionSmall
            src={clothes}
            color="rgba(163, 20, 63, 0.1)"
            type="Cloths"
            title="Sweater"
          ></CardSectionSmall>
        </div>
        <CardSectionLarge
          category="Office"
          title="Paper"
          src={office}
        ></CardSectionLarge>
      </div>
      <div className={style.containerRight}>
        <CardSectionLarge
          category="Cosmetics"
          title="Women"
          src={cosmetic}
        ></CardSectionLarge>
        <div className={style.containerCards}>
          <CardSectionSmall
            src={apple}
            color="rgba(163, 53, 20, 0.1)"
            type="PC"
            title="Apple"
          ></CardSectionSmall>
          <CardSectionSmall
            src={clothes}
            color="rgba(22, 20, 163, 0.1)"
            type="Cloths"
            title="Sweater"
          ></CardSectionSmall>
        </div>
      </div>
    </div>
  );
}
