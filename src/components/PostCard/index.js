import styles from './PostCard.module.css';
import { Link } from 'react-router-dom';
import MainButton from 'components/MainButton';

export default function PostCard({ post }) {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img 
                    className={styles.capa} 
                    src={`/assets/posts/${post.id}/capa.png`} 
                    alt="imagem de capa do post" 
                />
                <h2 className={styles.titulo}>{post.titulo}</h2>
                <MainButton>Ler</MainButton>
            </div>
        </Link>
    )
}