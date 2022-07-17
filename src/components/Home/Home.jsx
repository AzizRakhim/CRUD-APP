import React from 'react'

function Home() {
  return (
    <div className='card w-50 mx-auto mt-5 p-3'>
      <h2 className='text-center text-primary'>ADMIN DASHBOARD</h2>
      <div className="form-group">
        <input type="name" className="form-control mt-2 p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Book name" />
      </div>
      <div className="form-group">
        <input type="text" className="form-control mt-2 p-3" id="exampleInputPassword1" placeholder="Enter author name" />
      </div>
      <div className="form-group">
        <input type="number" className="form-control mt-2 p-3" id="exampleInputPassword1" placeholder="Enter Book price" />
      </div>
      <button type="button" className="btn btn-primary mt-3">Send</button>
    </div>
  )
}

export default Home
