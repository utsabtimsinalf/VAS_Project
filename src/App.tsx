import { Routes } from './routes'
import { BrowserRouter } from 'react-router-dom'

import { LoginContextProvider } from './contexts'

import './App.css';

type Props = {}

/**
 * Main Entry Point of the Project
 * Added LoginContext to identify if the use is LoggedIn or Not
 * Added All Routes
 */
export default function App({ }: Props) {
  return (
    <LoginContextProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </LoginContextProvider>
  )
}