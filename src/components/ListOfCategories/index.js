import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import axios from 'axios'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchApiServerCategories = async () => {
      const apiServer = await axios.get('https://petgram-dbyte-davitpra.vercel.app/categories')
      setCategories(apiServer.data)
    }
    fetchApiServerCategories()
  }, [])

  return (
    <List>
      {
      categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
}
