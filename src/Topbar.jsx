import React from 'react'
import Nav from './Components/Nav'
import { Outlet } from "react-router-dom"


export default function Topbar() {
  return (
   <>
    <div >
        <Nav/>
        <div>
          <div>
            <Outlet/>
          </div>
        </div>
      </div></>
  )
}