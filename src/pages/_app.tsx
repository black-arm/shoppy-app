import Navigation from '@/components/dumb/navigation/Navigation'
import { store } from '@/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {

  return <>
    <Provider store={store}>
      <Navigation />
      <Component {...pageProps} />
    </Provider>
  </>

}
