import { useParams } from "react-router-dom"
import { moods } from "../context/Moods.js"
import { useEffect, useState } from "react"
import { analyzeMood } from "../services/Api.js"
import { moodDataFallback } from "../context/FallBackMoodsData.js"

export function useFetch(moodName, moodId) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      console.log("useFetch called with:", moodName, moodId)
      if (!moodName) {
        console.log("No moodName, setting loading false")
        setLoading(false)
        return
      }

      try {
        console.log("Calling analyzeMood with:", moodName)
        const result = await analyzeMood(moodName)

        if (!result) {
          throw new Error("Something is wrong")
        }

        console.log("API result:", result)
        setData(result)
      } catch (err) {
        console.error(err)
        setError(true)

        // fallback en caso de fallo - buscar por ID
        const fallback = moodDataFallback.find(m => m.id === moodId)
        console.log("Using fallback:", fallback)
        setData(fallback)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [moodName, moodId])

  return { data, loading, error }
}