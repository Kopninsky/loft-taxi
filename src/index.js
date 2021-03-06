import React from 'react'
import ReactDOM from 'react-dom'
import { theme } from "loft-taxi-mui-theme"
import { MuiThemeProvider } from "@material-ui/core/styles"

import { AuthProvider } from './Context'
import { PageProvider } from './Context'
import App from './Components/App'

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <AuthProvider>
        <PageProvider>
          <App />
        </PageProvider>
      </AuthProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)