import React from "react";

const list = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

function ProductsList() {
  return (
    <>
      {list?.map((item) => {
        return (
          <tr>
            <td>hola</td>
            <td>hola</td>
            <td>hola</td>
            <td>hola</td>
          </tr>
        );
      })}
    </>
  );
}

export default ProductsList;
