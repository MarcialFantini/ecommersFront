import style from "./style.module.css";

export function CardSectionLarge() {
  return (
    <div className={style.containerSectionLarge}>
      <p className={style.text}>Trend</p>
      <h4 className={style.subtitle}>Devices</h4>
      <h2 className={style.titleProduct}>LAPTOP</h2>
      <button className={style.button}>Browse</button>
    </div>
  );
}
