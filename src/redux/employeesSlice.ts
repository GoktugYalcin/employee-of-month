import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Employee from "../interfaces/Employee";
import eventManager from "../logger";

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
      eventManager.logEvent("Employees fetched");
      state.employees = action.payload;
    },
    increaseVote: (state, action: PayloadAction<string>) => {
      const employee = state.employees.find(
        (employee) => employee.id === action.payload
      );
      if (employee) {
        employee.votes++;
        eventManager.logEvent(
          `Vote increased for ${employee.name} to ${employee?.votes}`
        );
      }
    },
  },
});

export const { setEmployees, increaseVote } = employeesSlice.actions;

export default employeesSlice.reducer;
