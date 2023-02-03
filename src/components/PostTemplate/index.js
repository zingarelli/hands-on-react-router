import styles from './PostTemplate.module.css';

export default function PostTemplate({ cover, title, children}) {
    return (
        <article className={styles.postModeloContainer}>
            <div 
                className={styles.fotoCapa} 
                style={{backgroundImage: `url(${cover})`}}
            ></div>
            <h2 className={styles.titulo}>{title}</h2>
            <div className={styles.postConteudoContainer}>{children}</div>
        </article>
    );
}