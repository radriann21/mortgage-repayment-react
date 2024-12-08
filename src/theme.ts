import { createSystem, defaultConfig, defineConfig, defineTextStyles } from "@chakra-ui/react"

const textStyles = defineTextStyles({
  global: {
    description: 'The global font of the aplication',
    value: {
      fontFamily: "P'lus Jakarta Sans' sans-serif",
      fontSize: "16px",
      letterSpacing: "0",
      textDecoration: "none",
      textTransform: "none"
    }
  }
})

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        slate: {
          100: { value: 'hsl(202, 86%, 94%)' },
          300: { value: 'hsl(203, 41%, 72%)' },
          500: { value: 'hsl(200, 26%, 54%)' },
          700: { value: 'hsl(200, 31%, 56%)' },
          900: { value: 'hsl(202, 55%, 16%)' },
          950: { value: 'hsl(202, 56%, 12%)' }
        },
        lime: {
          50: { value: 'hsl(61, 70%, 52%)' },
        },
        red: {
          50: { value: 'hsl(4, 69%, 50%)' }
        },
        white: {
          50: { value: '#ffffff' }
        }
      },
    },
    textStyles
  }
})

export const system = createSystem(defaultConfig, customConfig)