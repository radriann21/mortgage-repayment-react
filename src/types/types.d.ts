export type CalculatorContextType = {
  mortgageAmount: number,
  mortgageTerm: number,
  mortgageInterest: number,
  mortgageType: string | null,
  error: boolean,
  errorMessage: string,
  monthlyPayment: number,
  totalPayment: number,
}

export type CalculatorContextProviderProps = {
  children?: ReactNode;
}

export type ActionType =
  | { type: 'SET_MORTGAGE_AMOUNT'; payload: number }
  | { type: 'SET_MORTGAGE_TERM'; payload: number }
  | { type: 'SET_MORTGAGE_INTEREST_RATE'; payload: number }
  | { type: 'SET_MORTGAGE_TYPE'; payload: string }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'GET_RESULTS' }
  | { type: 'RESET_CALCULATOR' };
