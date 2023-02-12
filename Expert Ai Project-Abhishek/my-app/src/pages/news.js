import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

const News = () => {
const [searchQuery, setSearchQuery] = useState('')
const [news, setNews] = useState([])
const searchResults = useSelector(state => state.searchResults)
const dispatch = useDispatch()
const router = useRouter()

const fetchData = async () => {
    const response = await axios.get(
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=671eacadabdf4b4aa6e1a580ee2c8d5b'
    )
    setNews(response.data.articles)
    dispatch({ type: 'UPDATE_SEARCH_RESULTS', searchResults: response.data.articles })
    }

const searchData = async () => {
    const response = await axios.get(
     `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=671eacadabdf4b4aa6e1a580ee2c8d5b`
      )
    setNews(response.data.articles)
     console.log(response.data.articles)
    dispatch({ type: 'UPDATE_SEARCH_RESULTS', searchResults: response.data.articles })
    }

useEffect(() => {
    const interval = setInterval(() => {
     fetchData()
     }, 1000*6);
     return () => clearInterval(interval);
     }, []);

useEffect(() => {
   fetchData()
}, [])
 

const handleSearch = async e => {
e.preventDefault()
searchData()
}

return (
<div className="container mx-auto">
<h1 className="text-2xl font-bold mb-8 mt-[40px]">Latest News</h1>
<form className="mb-8" onSubmit={handleSearch}>
<input
type="text"
data-testid="searchNews"
placeholder="Search news..."
value={searchQuery}
onChange={e => setSearchQuery(e.target.value)}
className="p-2 rounded-lg shadow-md"
/>
<button type="submit" className="p-2 rounded-lg bg-blue-500 text-white">
Search
</button>
</form>
<ul className="list-none"  >
{searchResults.length
? searchResults.map((article,index) => (
<li
key={article.url}
className="bg-white p-4 rounded-lg shadow-md mb-4 "
>
<h2
tabIndex="0"
onKeyUp={() => {}}
onClick={() => router.push( `${article.url}`)}
className="text-lg font-bold cursor-pointer underline "
data-testid={`news-list-${index+1}`} 
>
{article.title}
</h2>
<p className="text-gray-700">{article.description}</p>
</li>

))
: news.map((article,index) => (
<li
key={article.url}
className="bg-white p-4 rounded-lg shadow-md mb-4 "
>
<h2 
tabIndex="0"
onKeyUp={() => {}}
onClick={() => router.push( `${article.url}`)}
className="text-lg  font-bold cursor-pointer underline "
data-testid={`news-list-${index+1}`}
>
{article.title}
</h2>
<p className="text-gray-700 ">{article.description}</p>
</li>
))}
</ul>
</div>
)
}



export default News