import { calculatorActions } from "./actions";
import type { CalculatorContextType, ActionType } from "@/types/types";


export const CalculatorReducer = (state: CalculatorContextType, action: ActionType): CalculatorContextType => {
  switch (action.type) {
    case calculatorActions.SET_MORTGAGE_AMOUNT:
      return {
        ...state,
        mortgageAmount: action.payload,
        error: false,
        errorMessage: ''
      }

    case calculatorActions.SET_MORTGAGE_TERM:
      return {
        ...state,
        mortgageTerm: action.payload,
        error: false,
        errorMessage: ''
      }

    case calculatorActions.SET_MORTGAGE_INTEREST_RATE:
      return {
        ...state,
        mortgageInterest: action.payload,
        error: false,
        errorMessage: ''
      }

    case calculatorActions.SET_MORTGAGE_TYPE:
      return {
        ...state,
        mortgageType: action.payload,
        error: false,
        errorMessage: ''
      }

    case calculatorActions.GET_RESULTS:
      {
        if (state.mortgageAmount == 0 || state.mortgageInterest == 0 || state.mortgageTerm == 0 || !state.mortgageType) {
          return {
            ...state,
            error: true,
            errorMessage: "This field is required"
          }
        }

        const monthlyInterestRate = state.mortgageInterest / 100 / 12;
        const totalPayments = state.mortgageTerm * 12;
        let monthlyPayment: number;

        if (state.mortgageType === 'repayment') {
          monthlyPayment = state.mortgageAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments) / (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
        } else {
          monthlyPayment = state.mortgageAmount * monthlyInterestRate;
        }

        const totalPayment: number = monthlyPayment * totalPayments;

        return {
          ...state,
          monthlyPayment,
          totalPayment,
          error: false
        };
      }

    case calculatorActions.SET_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.payload
      }

    case calculatorActions.RESET_CALCULATOR:
      return {
        mortgageAmount: 0,
        mortgageTerm: 0,
        mortgageInterest: 0,
        mortgageType: '',
        error: false,
        errorMessage: '',
        monthlyPayment: 0,
        totalPayment: 0
      }

    default:
      return state
  }
}
