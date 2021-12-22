import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoPng from '../../public/logo.png'
import logoStyles from '../../_sass/components/logo.module.scss'

interface LogoProps {
  title: string;
}

const Logo = ({ title }: LogoProps) => {
  return (
      <Link href='/' >
        <div className={logoStyles.container}>
          <Image src={LogoPng} height={40} width={40}/>

          <p>{title}</p>
        </div>
      </Link>
  )
}

export default Logo;
