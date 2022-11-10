import React, { useContext } from 'react'
import { Home } from '../pages/Home'
import { Detail } from '../pages/Detail'
import { NotRegisteredUser } from '../pages/NotRegisteredUser'
import { Favs } from '../pages/Favs'
import { User } from '../pages/User'
import { Route, Routes } from 'react-router-dom'
import { Context } from '../context/Context'

function UserLog ({ children }) {
  const { isAuth } = useContext(Context)
  return isAuth ? children : <NotRegisteredUser />
}

export function LayOut () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='pet/:id' element={<Home />} />
      <Route path='/detail/:detailId' element={<Detail />} />
      <Route
        path='/favs' element={
          <UserLog>
            <Favs />
          </UserLog>
      }
      />
      <Route
        path='/user' element={
          <UserLog>
            <User />
          </UserLog>
      }
      />
    </Routes>
  )
}
