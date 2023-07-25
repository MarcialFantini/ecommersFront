import style from "./style.module.css";

export function CardSectionSmall() {
  return (
    <div className={style.card}>
      <p className={style.text}>Enjoy</p>
      <h4 className={style.subTitle}>With</h4>
      <h2 className={style.title}>EARPHONE</h2>
      <button className={style.button}>Browse</button>
    </div>
  );
}
