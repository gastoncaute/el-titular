import Image from 'next/image'
import Header from './Components/Header'
import Aside from './Components/Aside'

export default function Home() {
  return (
    <section>
      <Aside />
      <Header />
    </section>
  )
}
