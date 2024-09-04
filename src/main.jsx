import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

import GlobalStyles from './styles/GlobalStyles'

import { Routes } from './routes'

import UserProvider from './hooks/useUser'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <UserProvider>
        <GlobalStyles />
        <Routes />
      </UserProvider>
    </ThemeProvider>
  </StrictMode>,
)
