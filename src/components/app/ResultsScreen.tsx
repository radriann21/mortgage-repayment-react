import { Box, Heading, Text, Separator } from "@chakra-ui/react"

type ResultsScreenProps = {
  monthlyPayment: number;
  totalPayment: number
}

export const ResultsScreen = ({ monthlyPayment, totalPayment }: ResultsScreenProps) => {

  const transformNumber = (number: number): string => {
    return number.toLocaleString('en-UK', { minimumFractionDigits: 2, maximumFractionDigits: 5, })
  }

  return (
    <Box
      as="section"
      textAlign="left"
    >
      <Box
        mb="2rem"
      >
        <Heading color="white" mb="1rem">Your results</Heading>
        <Text color="slate.700">
          Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.
        </Text>
      </Box>

      <Box
        borderRadius="10px"
        borderTop="6px solid"
        borderColor="lime.50"
        bgColor="slate.950"
        p="1.5rem"
      >
        <Box mb="2rem">
          <Text color="slate.500" fontSize="14px" mb=".8rem">Your monthly repayments</Text>
          <Heading color="lime.50" fontSize="38px">£{transformNumber(monthlyPayment)}</Heading>
        </Box>

        <Separator colorPalette="gray" />

        <Box my="1rem">
          <Text color="slate.500" fontSize="14px" mb=".4rem">Total you'll repay over the term</Text>
          <Heading color="white">£{transformNumber(totalPayment)}</Heading>
        </Box>
      </Box>
    </Box>
  )
}