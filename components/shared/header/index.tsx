import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { APP_NAME } from '@/lib/constants'
import Menu from './menu'

const Header = () => {
  return (
    <header className='w-full border-b'>
        <div className='wrapper flex-between'>
            <div className='flex-start'>
                <Link href='/' className='flex-start'>
                    <Image src='/images/logomoda.png' alt={`${APP_NAME} logo`} height={50} width={108} priority={true} />
                </Link>
            </div>
            <Menu />
        </div>
    </header>
  )
}

export default Header 