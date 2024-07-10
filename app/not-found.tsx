import getCurrentUser from '@/actions/getCurrentUser';
import Navbar from '@/components/navbar';
import React from 'react'

const NotFound = async () => {

  const currentuser = await getCurrentUser();

  return (
    <>
      <Navbar currentUser={currentuser}/>
    </>
  )
}

export default NotFound;