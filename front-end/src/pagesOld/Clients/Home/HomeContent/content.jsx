import React from 'react'
import CategoryList from '../homeCategoryList/categoryList'
import Mall from '../homeMall/mall'
import RecommendProducts from '../homeRecommendProducts/recommendProducts'
// import TrendingSearchList from '../trendingSearchList/TrendingSearchList'
import './content.css'

export default function Content() {
  return (
    <div className='container'>
      <div className='section_below_the_fold'>
        <CategoryList />
        <Mall />
        {/* <TrendingSearchList /> */}
        <RecommendProducts />
      </div>
    </div>
  )
}
