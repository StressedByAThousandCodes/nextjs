import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import RandomNumberButton from '@/components/RandomNumberButton'

export default function Home() {


  return (
    <>
      <Head>
        <title>Randomize</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <RandomNumberButton />
        </div>
      </main>
    </>
  )
}
