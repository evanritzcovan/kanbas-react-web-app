import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modules: [],
    module: { name: "New Module Name", description: "New Description" },
};

const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        setModules: (state, action) => {
            state.modules = action.payload;
        },
        addModule: (state, action) => {
            state.modules = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.modules,
            ];
        },
        deleteModule: (state, action) => {
            state.modules = state.modules.filter((module) => module._id !== action.payload);
        },
        updateModule: (state, action) => {
            state.modules = state.modules.map((module) => {
                return module._id === action.payload._id ? action.payload : module;
            });
        },
        setModule: (state, action) => {
            state.module = action.payload;
        },
    },
});

export const { addModule, deleteModule, updateModule, setModule, setModules } = modulesSlice.actions;
export default modulesSlice.reducer;
