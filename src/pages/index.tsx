import Head from 'next/head'

import { Text } from '../components/Atoms/Text'

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Next plugin practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Next.js</h1>
        <Text>TextComponent</Text>
      </main>
    </div>
  )
}

export default HomePage
