import React from 'react';
import Article from './Article.js';


function ArticleList({ posts }) {
    
    const article = posts.map(post => {
        const { id, title, date, minutes, preview } = post
        return <Article key={ id } title={ title} date={ date } minutes={ minutes } preview={ preview }/>
    })
    return (
        <main>{ article }</main>
    )
}

export default ArticleList;