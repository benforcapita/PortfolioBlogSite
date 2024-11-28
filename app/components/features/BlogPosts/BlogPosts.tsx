"use client";

import React from 'react';
import BlogPost from './BlogPost';
import { fetchMockBlogPosts } from '@/app/services/mockBlogService';
import styles from './BlogPosts.module.scss';

const BlogPosts: React.FC = () => {
  const blogPosts = fetchMockBlogPosts().slice(0, 3); // Show only the 3 most recent posts

  return (
    <section id="blog" className={styles.blogContainer}>
      {blogPosts.map((post, index) => (
        <BlogPost key={index} title={post.title} summary={post.summary} link={post.link} />
      ))}
    </section>
  );
};

export default BlogPosts;
