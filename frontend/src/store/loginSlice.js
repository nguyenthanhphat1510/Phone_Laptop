import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "user/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/login",
        credentials
      );
      console.log(response.data );
      return response.data; // dữ liệu trả về từ API
    } catch (error) {
      // Xử lý lỗi và trả về message lỗi từ server (nếu có)
      return rejectWithValue(error.response.data);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    data: null, // lưu trữ dữ liệu response
    loading: false,
    error: null,
  },
  reducers: {
    // Ví dụ: Action để logout
    logout: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Khi gọi API đang ở trạng thái pending
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Khi gọi API thành công
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      // Khi gọi API thất bại
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Xuất các action nếu cần dùng
export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
