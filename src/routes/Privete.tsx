import { auth } from '../services/firebaseConnection'
import { onAuthStateChanged } from 'firebase/auth'
import { ReactNode, useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

interface PrivateProps{
  children: ReactNode
}

export function Private({ children }: PrivateProps) {
  const [loading, setLoadig] = useState(true)
  const [signed, setSigned] = useState(false)
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if(user) {
        const userData = {
          uid: user?.uid,
          email: user?.email
        }
        localStorage.setItem('@reactlinks', JSON.stringify(userData))
        setLoadig(false)
        setSigned(true)
      } else {
        setLoadig(false)
        setSigned(false)
      }
    })

    return () => {
      unsub()
    }
  }, [])

  if(loading) {
    return <></>
  }

  if(!signed) {
    return(
     <Navigate to='/login'/>
    )
  }
  return children
}