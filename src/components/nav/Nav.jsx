import React from 'react'
import SearchBar from '../searchbar/searchBar'
import { NavLink } from "react-router-dom";
//creamos la funcion Nav la cual recibe la funcion onSearch de App como props

//renderizamos la funcion searchBar y le pasamos la funcion onSearch como props

export default function Nav({onSearch}) {
  return (
    <div>
      <SearchBar onSearch={onSearch}/>
      <NavLink to="/home">
        <p>Home</p>
      </NavLink>
      <NavLink to="/about">
        <p>About</p>
      </NavLink>
      <NavLink to="/detail/:detailId">
        <p>Detail</p>
      </NavLink>
      <NavLink to="/favorites">
        <p>Favorites</p>
      </NavLink>

    </div>
      
      
  )
}
