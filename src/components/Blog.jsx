import React, { useState, useEffect } from 'react';

function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://api.medium.com/v1/users/sandroledesma/publications', {
                    headers: {
                        Authorization: 'Bearer 2cff51f2013d6ed4650ae8821b42b7e6d2fce613e15d2310848801041944c0aef'
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setPosts(data.data); // Assuming the posts are under 'data' property
                } else {
                    console.error('Failed to fetch blog posts:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h2>Recent Blog Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <a href={post.url}>{post.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Blog;