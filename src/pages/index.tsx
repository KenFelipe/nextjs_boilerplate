import Head from 'next/head'

import { Text } from '../components/Text'

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Next plugin practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Next.js</h1>
        <Text label="TextComponent" />
      </main>
    </div>
  )
}

export default HomePage
