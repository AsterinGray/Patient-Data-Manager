import type { NextPage } from 'next'

import Layout from '@/common/Layout'

import TodayRecord from '@/pages/record/TodayRecord'

import { RecordResponse } from '@/types/connection'

export const Home: NextPage<RecordResponse> = () => (
  <Layout>
    <TodayRecord />
  </Layout>
)

export default Home
