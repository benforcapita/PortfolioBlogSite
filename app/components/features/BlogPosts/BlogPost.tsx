import React from 'react';
import Link from 'next/link';
import styles from './BlogPosts.module.scss';

interface BlogPostProps {
  title: string;
  summary: string;
  link: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, summary, link }) => {
  return (
    <article className={styles.blogPost}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm">{summary}</p>
      <Link href={link} className="text-blue-500 hover:underline">Read more</Link>
    </article>
  );
};

export default BlogPost;
