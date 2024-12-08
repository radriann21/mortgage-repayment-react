import { Box } from "@chakra-ui/react"
import { RepaymentForm } from "./components/app/RepaymentForm"
import { ResultsComponent } from "./components/app/ResultsComponent"

function App() {
  return (
    <Box
      as="main"
      maxW="100%"
      minH="100dvh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgColor="slate.100"
      color="black"
    >
      <Box display="flex" alignItems="center" justifyContent="center" h="fit-content" flexDirection={{ base: "column", md: "row" }}>
        <RepaymentForm />
        <ResultsComponent />
      </Box>
    </Box>
  )
}

export default App
