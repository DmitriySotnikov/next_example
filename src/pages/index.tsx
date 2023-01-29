import type { NextPage } from 'next';
import Head from 'next/head';

import styles from '../styles/Home.module.scss';

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Toolkit</title>
      </Head>
      <h1>Пример приложения</h1>
    </div>
  );
};

export default IndexPage;