import styles from './MainButton.module.css';

export default function MainButton({ children, size }) {
    return (
        <button className={`
            ${styles.botaoPrincipal} ${styles[size]}
        `}>
            {children}
        </button>
    );
}