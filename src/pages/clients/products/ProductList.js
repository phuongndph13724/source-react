import React, { useState } from "react";

const ProductList = () => {
  const [listProduct, setListProduct] = useState([
    {
      id: 2,
      name: "Sản phẩm C",
      img: "https://cdn.tuk.dev/assets/templates/classified/Bitmap%20(1).png",
      price: 1000,
      desc: "Mô tả sản phẩm B",
    },
    {
      id: 3,
      name: "Sản phẩm C",
      img: "https://cdn.tuk.dev/assets/templates/classified/Bitmap%20(1).png",
      price: 1000,
      desc: "Mô tả sản phẩm B",
    },
    {
      id: 4,
      name: "Sản phẩm C",
      img: "https://cdn.tuk.dev/assets/templates/classified/Bitmap%20(1).png",
      price: 1000,
      desc: "Mô tả sản phẩm B",
    },
  ]);
  return <div>
    <h3 className="text-3xl my-4 px-2">Danh sách sản phẩm</h3>
    <div className="grid grid-cols-4 gap-4 p-4">
    {listProduct.map((item) => {
      return (
        <div key={item.id} className="bg-white rounded-md shadow border-2 border-green-400 rounded pb-4">
          <img className="w-full h-56 object-cover" src={item.img} alt="" />
          <div className="p-4">
            <p className="text-xl">Tên sản phẩm  : {item?.name}</p>
            <p>Giá sản phẩm  : {item?.name}</p>
            <p>Mô tả sản phẩm  : {item?.desc}</p>
          </div>
          <div className="flex gap-2 px-2">
            <button className="h-12 w-20 rounded bg-blue-400">Đặt hàng</button>
          </div>
        </div>
      )
    })}
  </div>
  </div>;
};

export default ProductList;
