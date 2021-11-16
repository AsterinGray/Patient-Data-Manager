import type { AppProps } from 'next/app'

import { wrapper } from '@/store/index'

import { GlobalStyleComponent } from '@/styles/index'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyleComponent />
    </>
  )
}

export default wrapper.withRedux(MyApp)
