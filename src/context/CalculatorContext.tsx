/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { useReducer, createContext } from "react";
import { calculatorActions } from "./actions";
import { CalculatorReducer } from "./CalculatorReducer";
import type { CalculatorContextType, CalculatorContextTypeWithFunctions, CalculatorContextProviderProps, ActionType } from "@/types/types";

const initialState: CalculatorContextType = {
  mortgageAmount: 0,
  mortgageTerm: 0,
  mortgageInterest: 0,
  mortgageType: null,
  error: false,
  errorMessage: '',
  monthlyPayment: 0,
  totalPayment: 0,
};

export const CalculatorContext = createContext<CalculatorContextTypeWithFunctions>(initialState as CalculatorContextTypeWithFunctions)

export const CalculatorContextProvider: React.FC<CalculatorContextProviderProps> = ({ children }) => {

  const [state, dispatch] = useReducer<React.Reducer<CalculatorContextType, ActionType>>(CalculatorReducer, initialState);

  const handleNumericInput = (evt: React.FormEvent<HTMLInputElement>, actionType: keyof typeof calculatorActions): void => {
    const value = evt.currentTarget.value;
    const containsLetters = /[a-zA-Z]/.test(value);

    if (containsLetters) {
      dispatch({ type: calculatorActions.SET_ERROR, payload: 'No use letters, only numbers' });
      return;
    }

    const amount = parseFloat(value);

    if (isNaN(amount)) {
      dispatch({ type: calculatorActions.SET_ERROR, payload: 'Invalid amount' });
      return;
    }

    if (actionType === calculatorActions.SET_MORTGAGE_AMOUNT || actionType === calculatorActions.SET_MORTGAGE_TERM || actionType === calculatorActions.SET_MORTGAGE_INTEREST_RATE) {
      dispatch({ type: actionType, payload: amount });
    }

  };

  const handleMortgageAmount = (evt: React.FormEvent<HTMLInputElement>) => {
    handleNumericInput(evt, calculatorActions.SET_MORTGAGE_AMOUNT);
  };

  const handleMortgageTerm = (evt: React.FormEvent<HTMLInputElement>) => {
    handleNumericInput(evt, calculatorActions.SET_MORTGAGE_TERM);
  };

  const handleInterestRate = (evt: React.FormEvent<HTMLInputElement>) => {
    handleNumericInput(evt, calculatorActions.SET_MORTGAGE_INTEREST_RATE);
  };

  const resetCalculator = () => {
    dispatch({ type: calculatorActions.RESET_CALCULATOR })
  }

  const handleMortgageType = (evt: any): void => {
    dispatch({ type: calculatorActions.SET_MORTGAGE_TYPE, payload: evt.value })
  }

  const calculateRepayments = () => {
    dispatch({ type: calculatorActions.GET_RESULTS })
  }

  return (
    <CalculatorContext.Provider
      value={{ ...state, handleMortgageAmount, handleMortgageTerm, handleInterestRate, resetCalculator, handleMortgageType, calculateRepayments }}
    >
      {children}
    </CalculatorContext.Provider>
  )
}