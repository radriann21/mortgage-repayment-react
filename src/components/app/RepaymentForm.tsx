import { Box, Fieldset, Flex, Text, Input, InputAddon, Group } from "@chakra-ui/react"
import { TbCalculatorFilled } from "react-icons/tb"
import { Field } from "@/components/ui/field"
import { Radio, RadioGroup } from "@/components/ui/radio"
import { Button } from "@/components/ui/button"

export const RepaymentForm = () => {
  return (
    <Box
      as="form"
      w={{ base: "100%", md: "28%" }}
      p="2rem"
      borderRadius={{ base: "0", md: "10px" }}
      bg="white"
    >
      <Fieldset.Root>
        <Flex
          as="section"
          maxW="100%"
          align="center"
          justify="space-between"
          mb="1rem"
        >
          <Fieldset.Legend fontSize={{ base: "16px", md: "18px" }} color="slate.900" fontWeight="600">Mortgage Calculator</Fieldset.Legend>
          <Text textDecoration="underline" cursor="pointer">Clear All</Text>
        </Flex>

        <Fieldset.Content maxW="100%">
          <Field label="Mortgage Amount" color="slate.700" mb="1rem">
            <Group w="100%" attached>
              <InputAddon bgColor="slate.100" border="none">£</InputAddon>
              <Input border="1px solid" borderRadius="10px" borderTopLeftRadius="0" borderBottomLeftRadius="0" />
            </Group>
          </Field>

          <Flex maxW="100%" align="center" justify="space-between" gap="20px" mb="1rem">
            <Field label="Mortgage Term" color="slate.700" mb="1rem">
              <Group w="100%" attached>
                <Input border="1px solid" borderRadius="10px" borderTopRightRadius="0" borderBottomRightRadius="0" />
                <InputAddon bgColor="slate.100" fontWeight="700" border="none">years</InputAddon>
              </Group>
            </Field>
            <Field label="Interest Rate" color="slate.700" mb="1rem">
              <Group w="100%" attached>
                <Input border="1px solid" borderRadius="10px" borderTopRightRadius="0" borderBottomRightRadius="0" />
                <InputAddon bgColor="slate.100" fontWeight="700" border="none">%</InputAddon>
              </Group>
            </Field>
          </Flex>

          <RadioGroup display="flex" flexDir="column" gap="10px" mb="1rem">
            <Radio
              value="repayment"
              padding="1rem"
              border="1px"
              borderStyle="solid"
              borderColor="slate.500"
              borderRadius="6px"
              fontSize="16px"
              fontWeight="600"
              color="slate.900">
              Repayment
            </Radio>
            <Radio
              value="interest"
              padding="1rem"
              border="1px"
              borderStyle="solid"
              borderColor="slate.500"
              borderRadius="6px"
              fontSize="16px"
              fontWeight="600"
              color="slate.900">
              Interest Only
            </Radio>
          </RadioGroup>

          <Button
            w={{ base: "fit-content", md: "50%" }}
            bgColor="lime.50"
            borderRadius="20px"
            color="slate.900"
            fontWeight="700"
            transition=".2s ease-in background"
            _hover={{ bgColor: 'teal.100' }}
          >
            <TbCalculatorFilled />
            Calculate Repayment
          </Button>

        </Fieldset.Content>
      </Fieldset.Root>
    </Box>
  )
}