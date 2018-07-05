import React from 'react'
import ArticleItem from './monolith-article-item'
export default({ articles, onClickToggle, onClickRemove}) =>(
    <ul>
      {articles.map(i => (
        <ArticleItem key={i.id}
                     article={i}
                     onClickToggle = {onClickToggle}
                     onClickRemove = {onClickRemove}/>
        ))}
    </ul>
  )
