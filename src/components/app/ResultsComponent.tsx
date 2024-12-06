import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react"
import illustrationEmpty from "@/assets/illustration-empty.svg"

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
      <Box
        as="section"
      >
        <Image mx="auto" src={illustrationEmpty} alt="illustration empty" />
        <Box
          mt="1rem"
          textAlign="center"
        >
          <Heading color="white">Results shown here</Heading>
          <Text color="slate.300">Complete the form and click "calculate repayments" to see what your monthly repayments would be.</Text>
        </Box>
      </Box>
    </Flex>
  )
}