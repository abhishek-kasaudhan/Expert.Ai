import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const News = () => {
  const [news, setNews] = useState([])
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY'
      )
      setNews(response.data.articles)
    }
    fetchData()
  }, [])

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-8">Latest News</h1>
<ul className="list-none">
{news.map(article => (
<li
key={article.url}
className="bg-white p-4 rounded-lg shadow-md mb-4 cursor-pointer"
onClick={() => router.push(/news/[id], /news/${article.url})}
>
<h2 className="text-lg font-bold">{article.title}</h2>
<p className="text-gray-700">{article.description}</p>
</li>
))}
</ul>
</div>
)
}

export default News
