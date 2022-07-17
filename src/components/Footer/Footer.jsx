import React from 'react'

function Footer() {
  return (
    <div className='mt-auto p-3 w-100 bg-danger text-center text-light'>
      {
        new Date().getFullYear()
      }
      Admin dashboard
    </div>
  )
}

export default Footer
