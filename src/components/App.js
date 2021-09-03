import React from "react";
import blogData from "../data/blog";
import Header from './Header.js';
import About from './About.js';
import ArticleList from './ArticleList.js';


console.log(blogData);

function App() {
  const { name, image, about, posts } = blogData
  return (
    <div className="App">
      <Header name={ name } />
      <About image={ image } about={ about }/>
      <ArticleList posts={posts}/>
    </div>
  );
}

export default App;
