import Image from 'next/image'
import Hero from "./components/Hero"
import Statistics from './components/Statistics'

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Hero/>
        <Statistics/>

   
      </div>
    </main>
  )
}
