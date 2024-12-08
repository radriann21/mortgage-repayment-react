import { Flex } from "@chakra-ui/react"
import { PlaceholderScreen } from "./PlaceholderScreen"
import { ResultsScreen } from "./ResultsScreen"

import { useContext } from "react"
import { CalculatorContext } from "@/context/CalculatorContext"

export const ResultsComponent = () => {

  const { monthlyPayment, totalPayment } = useContext(CalculatorContext)

  return (
    <Flex
      as="section"
      w={{ base: "100%", md: "35%" }}
      align="center"
      justify="center"
      bgColor="slate.900"
      borderRadius={{ base: "0px", md: "10px" }}
      borderBottomLeftRadius={{ base: '0px', md: '20%' }}
      minH={{ base: "fit-content", md: "520px" }}
      p="2rem"
    >
      {
        monthlyPayment !== 0
          ? (<ResultsScreen monthlyPayment={monthlyPayment} totalPayment={totalPayment} />)
          : (<PlaceholderScreen />)
      }
    </Flex>
  )
}