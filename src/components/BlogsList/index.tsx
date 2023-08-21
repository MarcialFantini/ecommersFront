import React from "react";
const list = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
import style from "./style.module.css";

function BlogsList() {
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

export default BlogsList;
