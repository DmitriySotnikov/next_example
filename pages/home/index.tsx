import { GetStaticProps } from 'next'
import Link from 'next/link'

import Layout from '../../components/Layout'

const WithStaticProps = () => (
  <Layout title="Home page">
    <h1>Home</h1>
  </Layout>
)

export default WithStaticProps
