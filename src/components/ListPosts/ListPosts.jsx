import React from 'react';
import './../ListPosts/ListPosts.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ListPost() {
  const { id } = useParams();

  const ListPosts = useSelector((state) => state.ListPosts.data);

  const selectedPost= ListPosts.posts.filter((ListPosts) => ListPosts.id == id);
  return (
    <div>
      <header className='haha'>
        {selectedPost.map((item) => (
          <div>
            {" "}
            <h1>{item.title}</h1>
            <div className='bodyy'>{item.body}</div>
            <p>tags:</p>
            <div className='tags'> {item.tags}</div>{" "}
          </div>
        ))}
      </header>
    </div>
  );
}