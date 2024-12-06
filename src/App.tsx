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
      flexDirection={{ base: "column", md: "row" }}
      bgColor="slate.100"
      color="black"
    >
      <RepaymentForm />
      <ResultsComponent />
    </Box>
  )
}

export default App
