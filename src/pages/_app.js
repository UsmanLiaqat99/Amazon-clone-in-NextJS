import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
// import { Provider as AuthProvider } from 'next-auth/client'
import { SessionProvider } from "next-auth/react"

const MyApp = ({ Component, pageProps }) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>

  )
}

export default MyApp
