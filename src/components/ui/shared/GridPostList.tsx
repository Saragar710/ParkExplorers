
import { useUserContext } from '@/context/AuthContext'
import { Models } from 'appwrite'
import React from 'react'

type GridPostListProps = {
    posts: Models.Document[]
}

const GridPostList = ({ posts }: GridPostListProps) => {
    const { user } = useUserContext();

  return (
    <ul className='grid-container'>
        {posts.map((post) => (
            <li key={posts.$id} className='relative min-w-80 h-80'>{post.caption}</li>
        ))}
    </ul>
  )
}

export default GridPostList