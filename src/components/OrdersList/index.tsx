import React from "react";
import style from "./style.module.css";

const list = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

function OrdersList() {
  return (
    <>
      {list?.map((item) => {
        return (
          <tr className={style.row}>
            <td>1</td>
            <td>user</td>
            <td>product</td>
            <td>amount</td>
            <td>total</td>
          </tr>
        );
      })}
    </>
  );
}

export default OrdersList;
