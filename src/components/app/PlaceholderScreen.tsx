import { Box, Image, Heading, Text } from "@chakra-ui/react"
import illustrationEmpty from "@/assets/illustration-empty.svg"

export const PlaceholderScreen = () => {
  return (
    <Box
      as="section"
    >
      <Image mx="auto" src={illustrationEmpty} alt="illustration empty" />
      <Box
        mt="1rem"
        textAlign="center"
      >
        <Heading color="white">Results shown here</Heading>
        <Text color="slate.300" fontSize={{ base: 'initial', md: '14px' }}>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</Text>
      </Box>
    </Box>
  )
}