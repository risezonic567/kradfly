import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getUserFromStorage = () => {
  try {
    const user = localStorage.getItem("user");
    if (!user || user === "undefined") return null;
    return JSON.parse(user);
  } catch (error) {
    return null;
  }
};


// ================= LOGIN =================
export const loginUser = createAsyncThunk(
  "/user/login",
  async (data, thunkAPI) => {
    try {
      const response = await fetch("https://www.kradfly.com/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (!response.ok) {
        return thunkAPI.rejectWithValue(
          result?.message ||
          result?.message ||
          Object.values(result)[0] ||   // 🔥 FIX
          "Login Failed"
        );
      }

      return result;

    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "Network Error");
    }
  }
);


// ================= REGISTER =================
export const createUser = createAsyncThunk(
  "/user/register",
  async (data, thunkAPI) => {
    try {
      const response = await fetch("https://www.kradfly.com/api/user/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (!response.ok) {
        return thunkAPI.rejectWithValue(
          result?.message ||
          result?.message ||
          result?.error ||
          Object.values(result)[0] ||   // 🔥 FIX (MOST IMPORTANT)
          "Register Failed"
        );
      }

      return result;

    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// ================= SLICE =================
const userSlice = createSlice({
  name: "user",

  initialState: {
    user: getUserFromStorage(),
    loading: false,
    error: null,
    message: null
  },

  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.clear();
    },

    clearState: (state) => {
      state.error = null;
      state.message = null;
    }
  },

  extraReducers: (builder) => {
    builder

      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
        state.message = action.payload.message;

        localStorage.setItem("user", JSON.stringify(action.payload.data));

        if (action.payload.token) {
          localStorage.setItem("token", action.payload.token);
        }
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;

        state.error =
          typeof action.payload === "string"
            ? action.payload
            : "Login Failed";
      })


      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
        state.message = action.payload.message;

        localStorage.setItem("user", JSON.stringify(action.payload.data));

        if (action.payload.token) {
          localStorage.setItem("token", action.payload.token);
        }
      })

      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;

      
        state.error =
          typeof action.payload === "string"
            ? action.payload
            : "Register Failed";
      });
  }
});

export const { logout, clearState } = userSlice.actions;
export default userSlice.reducer;