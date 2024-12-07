import { Flex } from "@chakra-ui/react"
import { PlaceholderScreen } from "./PlaceholderScreen"
// import { ResultsScreen } from "./ResultsScreen"

export const ResultsComponent = () => {
  return (
    <Flex
      as="section"
      w={{ base: "100%", md: "28%" }}
      align="center"
      justify="center"
      bgColor="slate.900"
      borderRadius={{ base: "0", md: "10px" }}
      borderTopLeftRadius="0px"
      h={{ base: "fit-content", md: "450px" }}
      p="2rem"
    >
      <PlaceholderScreen />
    </Flex>
  )
}