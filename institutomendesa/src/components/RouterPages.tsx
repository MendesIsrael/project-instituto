import { Routes, Route } from 'react-router-dom'
import { Page01 } from './Page01'
import { Vigor } from './Vigor'
import { Seaside } from './Seaside'

export function RoutePages() {
  return(
    <Routes>
      <Route path='/' element={<Page01/>}/>
      <Route path='/vigor' element={<Vigor/>}/>
      <Route path='/seaside' element={<Seaside/>}/>
    </Routes>
  )
}