import { FormEvent, useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Input } from "../../components/input";

// IMPORTS DO FIREBASE
import { db } from '../../services/firebaseConnection'
import { setDoc, doc, getDoc } from 'firebase/firestore'


export function Networks() {
  const [facebook, setFacebook] = useState('')
  const [instagram, setInstagram] = useState('')
  const [youtube, setYoutube] = useState('')
  useEffect(() => {
    function loadingLinks() {
       const docRef = doc(db, 'social', 'link')
       getDoc(docRef)
       .then((snapshot) => {
        if(snapshot.data() !== undefined) {
          setFacebook(snapshot.data()?.facebook)
          setInstagram(snapshot.data()?.instagram)
          setYoutube(snapshot.data()?.youtube)
        }
       })
    }
    loadingLinks()
  }, [])
  function handleRegister(e: FormEvent) {
    e.preventDefault()
    setDoc(doc(db, 'social', 'link'), {
      facebook: facebook,
      instagram: instagram,
      youtube: youtube
    })
    .then(() => {
      alert('Dados cadastrados...')
      setFacebook('')
      setInstagram('')
      setYoutube('')
    })
    .catch(() => {
      alert('erro ao cadastrar')
    })
  }

  
  return(
    <div className='flex items-center flex-col min-h-screen pb-7 px-2'>
      <Header />
      <h1 className="text-white font-medium text-2xl mt-8 mb-4">Minhas redes sociais</h1>
      <form onSubmit={handleRegister} className="flex flex-col max-w-xl w-full">
        <label className="text-white font-medium mt-2 mb-2">Link do Facebook</label>
        <Input type='url' placeholder="Digite a url do Facebook..." value={facebook} onChange={(e) => setFacebook(e.target.value)} />

        <label className="text-white font-medium mt-2 mb-2">Link do Instagram</label>
        <Input type='url' placeholder="Digite a url do Instagram..." value={instagram} onChange={(e) => setInstagram(e.target.value)} />

        <label className="text-white font-medium mt-2 mb-2">Link do Youtube</label>
        <Input type='url' placeholder="Digite a url do Youtube..." value={youtube} onChange={(e) => setYoutube(e.target.value)} />

        <button type="submit" className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium">Salvar links</button>
      </form>
    </div>
  )
}