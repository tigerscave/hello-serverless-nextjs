import React from 'react'
import Link from 'next/link'

const SamplePage = () => {
  return (
    <div>
      <h1>this is sample</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  )
}

export default SamplePage