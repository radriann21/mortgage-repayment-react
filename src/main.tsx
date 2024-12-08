import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "@/components/ui/provider"
import { CalculatorContextProvider } from './context/CalculatorContext.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <CalculatorContextProvider>
        <App />
      </CalculatorContextProvider>
    </Provider>
  </StrictMode>,
)
