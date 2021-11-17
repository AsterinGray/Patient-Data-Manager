import type { NextPage } from 'next'

import Layout from '@/common/Layout'
import withAuth from '@/common/withAuth'

import TodayRecord from '@/pages/record/TodayRecord'

export const Home: NextPage = () => (
  <Layout>
    <TodayRecord />
  </Layout>
)

export default withAuth(Home)
