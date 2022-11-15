import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { CategorySkeleton } from '../CategorySkeleton'
import { List, Item } from './styles'
import { useCategoriesData } from '../../hooks/useCategoryData'

const ListOfCategoriesComponent = () => {
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
        ? <Item key={loading}> <CategorySkeleton /> </Item>
        : categories.map(category =>
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>)
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

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
