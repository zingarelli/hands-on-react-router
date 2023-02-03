import './Post.css';
import styles from './Post.module.css';
import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostTemplate from "components/PostTemplate";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import NotFound from "pages/NotFound";
import DefaultTemplate from "components/DefaultTemplate";
import PostCard from 'components/PostCard';

export default function Post() {
    const params = useParams();

    // id is a number in the JSON file
    const post = posts.find(post => post.id === Number(params.id));

    if (!post) {
        return <NotFound />;
    }

    // will act as "recommended posts"
    const randomPosts = posts.filter(post => post.id !== Number(params.id)).slice(0, 4);

    return (
        <DefaultTemplate>
            <PostTemplate
                cover={`/assets/posts/${post.id}/capa.png`}
                title={post.titulo}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>

                <h2 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar:</h2>
                <ul className={styles.postsRecomendados}>
                    {randomPosts.map(post => (
                        <li key={post.id}><PostCard post={post} /></li>
                    ))}
                </ul>

            </PostTemplate>
        </DefaultTemplate>
    )
}