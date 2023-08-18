import React from "react";
import style from "./style.module.css";

const list = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

function ProductsList() {
  return (
    <>
      {list?.map((item) => {
        return (
          <tr className={style.row}>
            <td>1</td>
            <td>name</td>
            <td>price</td>
            <td>amount</td>
          </tr>
        );
      })}
    </>
  );
}

export default ProductsList;
