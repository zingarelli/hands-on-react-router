import styles from './Banner.module.css';
import coloredCircle from 'assets/circulo_colorido.png';
import myPic from 'assets/minha_foto.png';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá, mundo!</h1>
                <p className={styles.paragrafo}>Meu nome é Matheus Ricardo Uihara Zingarelli. Estou me desenvolvendo em tecnologias de Front End e este projeto foi resultado do curso de React Router da Alura, ministrado pelo Antônio Evaldo.</p>
            </div>
            <div className={styles.imagens}>
                <img src={coloredCircle} className={styles.circuloColorido} aria-hidden={true} />
                <img src={myPic} className={styles.minhaFoto} alt='Foto do Antonio Evaldo sorrindo' />
            </div>
        </div>
    );
}