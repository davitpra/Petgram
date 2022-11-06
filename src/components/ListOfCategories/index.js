import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import axios from 'axios'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchApiServerCategories = async () => {
      const apiServer = await axios.get('https://petgram-dbyte-davitpra.vercel.app/categories')
      setCategories(apiServer.data)
      setLoading(false)
    }
    fetchApiServerCategories()
  }, [])
  return {
    categories,
    loading
  }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  // añadimos el estado de showFixed para el menu flotante
  const [showFixed, setShowFixed] = useState(false)

  // añadimos un useEffect para mostrar el segundo menuflotante cuando hagamos scroll
  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    // Añadimos un return para cuando se acabe el efecto, quitemos el event listener.
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
      loading
        ? <Item key={loading}> <Category /> </Item>
        : categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
