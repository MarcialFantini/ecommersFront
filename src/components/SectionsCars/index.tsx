import { CardSectionLarge } from "../CardSectionLarge";
import { CardSectionSmall } from "../CardSectionSmall";

import style from "./style.module.css";

export function SectionsCars() {
  return (
    <div className={style.containerSections}>
      <div className={style.containerLeft}>
        <div className={style.containerCards}>
          <CardSectionSmall
            color="rgba(64, 12, 116, 0.1)"
            type="Cloths"
            title="T-shirt"
          ></CardSectionSmall>
          <CardSectionSmall
            color="rgba(163, 20, 63, 0.1)"
            type="Cloths"
            title="Sweater"
          ></CardSectionSmall>
        </div>
        <CardSectionLarge></CardSectionLarge>
      </div>
      <div className={style.containerRight}>
        <CardSectionLarge></CardSectionLarge>
        <div className={style.containerCards}>
          <CardSectionSmall
            color="rgba(163, 53, 20, 0.1)"
            type="PC"
            title="Apple"
          ></CardSectionSmall>
          <CardSectionSmall
            color="rgba(22, 20, 163, 0.1)"
            type="Cloths"
            title="Sweater"
          ></CardSectionSmall>
        </div>
      </div>
    </div>
  );
}
