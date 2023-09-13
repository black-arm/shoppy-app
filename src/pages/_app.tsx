import Navigation from '@/components/dumb/navigation/Navigation'
import { HttpErrorToastContainer } from '@/components/smart/HttpErrorToastContainer/HttpErrorToastContainer'
import SpinnerContainer from '@/components/smart/SpinnerContainer/SpinnerContainer'
import { store } from '@/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {

  return <>
    <Provider store={store}>
      <HttpErrorToastContainer>
        <SpinnerContainer>
            <>
              <Navigation />
              <Component {...pageProps} />
            </>
        </SpinnerContainer>
      </HttpErrorToastContainer>
    </Provider>
  </>

}
