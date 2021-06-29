import Head from 'next/head'

import { navItems } from '../lib/navbar'
import { socialItems } from '../lib/social'
import { employers } from '../lib/employer'
import { hobbies } from '../lib/hobby'

import Header from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import TopSection from '../components/home/TopSection'
import Employers from '../components/home/Employers'
import Hobbies from '../components/home/Hobbies'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucas Vieira - Software Engineer - Home</title>
      </Head>
      <Header items={navItems} />
      <TopSection />
      <Employers items={employers} />
      <Hobbies items={hobbies} />
      <Footer items={navItems} socialItems={socialItems} />
    </>
  )
}
