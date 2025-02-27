import { createSlice } from '@reduxjs/toolkit';

// Khởi tạo state từ localStorage nếu có, nếu không thì mảng rỗng
const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cartItems.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        // Cập nhật state bằng cách push sản phẩm mới
        state.cartItems.push({ ...product, quantity: 1 });
      }
      // Lưu lại dữ liệu vào localStorage sau mỗi lần cập nhật
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== productId);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
export const selectCartItems = (state) => state.cart.cartItems;
