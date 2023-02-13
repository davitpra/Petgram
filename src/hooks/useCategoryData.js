import { useState, useEffect } from 'react'
import axios from 'axios'

export function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchApiServerCategories = async () => {
      const apiServer = await axios.get('https:/petgram-dbyte-h2ykdrbem-davitpra.vercel.app/categories')
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
