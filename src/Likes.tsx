import { useState } from "react";

interface Post {
    id: number;
    title: string;
    likes: number;
}

export function Likes() {
    const [posts, setPosts] = useState<Post[]>(
        [
            { id: 1, title: 'Rockbands 🤘🏼', likes: 0 },
            { id: 2, title: 'Barbies 🧍🏼‍♀️', likes: 0 },
            { id: 3, title: 'Apple pie 🥧', likes: 0 },
        ]
    )

    const handleAddLike = (post: Post) => {
        post.likes++;
        setPosts([...posts])
    }
    return (
        <>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <button
                            onClick={() => handleAddLike(post)}>
                            ♥ {post.likes}
                        </button>

                    </li>
                ))}
            </ul>
        </>
    )
}