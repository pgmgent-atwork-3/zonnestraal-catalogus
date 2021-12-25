import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import PopUp from '../components/Pop-up/pop-up';

const Home: NextPage = () => {
  return (
    <div >
      <PopUp text={'Zonnestraal vzw, een voorziening voor personen met een verstandelijke beperking te Lennik, heet u welkom op de reservatiemodule! Meer info '}/>
      <h1>Welkom op de homepage van zonnestraal</h1>
    </div>
  )
}

export default Home
