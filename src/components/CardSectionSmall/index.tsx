import style from "./style.module.css";
interface props {
  type: string;
  title: string;
  color: string;
}

export function CardSectionSmall({ type, title, color }: props) {
  return (
    <div style={{ background: color }} className={style.card}>
      <p className={style.text}>{type}</p>
      <h4 className={style.subTitle}>With</h4>
      <h2 className={style.title}>{title}</h2>
      <button className={style.button}>Browse</button>
    </div>
  );
}
