import { CardSectionLarge } from "../CardSectionLarge";
import { CardSectionSmall } from "../CardSectionSmall";

import style from "./style.module.css";

export function SectionsCars() {
  return (
    <div className={style.containerSections}>
      <div className={style.containerLeft}>
        <div className={style.containerCards}>
          <CardSectionSmall></CardSectionSmall>
          <CardSectionSmall></CardSectionSmall>
        </div>
        <CardSectionLarge></CardSectionLarge>
      </div>
      <div className={style.containerRight}>
        <CardSectionLarge></CardSectionLarge>
        <div className={style.containerCards}>
          <CardSectionSmall></CardSectionSmall>
          <CardSectionSmall></CardSectionSmall>
        </div>
      </div>
    </div>
  );
}
