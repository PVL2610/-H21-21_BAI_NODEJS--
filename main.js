import { store } from './store.js';

// Truy vấn specifications của sản phẩm đầu tiên (product id = 1)
const specifications = store.products[0]?.details?.specifications;

if (specifications) {
  console.log(specifications);
} else {
  console.log("specifications can not be found");
}

// Gọi hàm getPrice cho sản phẩm thứ ba (id = 3)
const price = store.products[2]?.getPrice?.();

if (price !== undefined) {
  console.log(`Giá của sản phẩm thứ ba là: $${price}`);
} else {
  console.log("Không có thông tin giá.");
}
