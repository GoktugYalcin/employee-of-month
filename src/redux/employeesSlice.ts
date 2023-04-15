import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Employee from "../interfaces/Employee";

export interface CounterState {
  selectedEmployee: Employee | null;
  employees: Employee[];
}

const initialState: CounterState = {
  selectedEmployee: null,
  employees: [],
};

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setEmployees: (state, action: PayloadAction<Employee[]>) => {
      state.employees = action.payload;
    },
    increaseVote: (state, action: PayloadAction<string>) => {
      const employee = state.employees.find(
        (employee) => employee.id === action.payload
      );
      if (employee) {
        employee.votes++;
      }
    },
  },
});

export const { setEmployees, increaseVote } = employeesSlice.actions;

export default employeesSlice.reducer;
