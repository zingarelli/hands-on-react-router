import styles from './AboutMe.module.css';
import PostTemplate from "components/PostTemplate";
import cover from "assets/sobre_mim_capa.png";
import aboutMePic from "assets/sobre_mim_foto.jpg";

export default function AboutMe() {
    return (
        <PostTemplate
            cover={cover}
            title='Sobre mim'
        >
            <h3 className={styles.subtitulo}>Lorem ipsum</h3>
            <img
                src={aboutMePic}
                alt="Imagem de Calvin e Haroldo lendo um livro"
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo iste earum optio, veniam soluta voluptatum unde consectetur aliquam saepe hic cupiditate excepturi voluptates ipsum ex, voluptate maxime obcaecati eligendi natus!</p>
            <p className={styles.paragrafo}>Illum aut error deserunt, quod molestiae cum veritatis sunt modi, voluptates quaerat ullam saepe cupiditate repellendus iure recusandae nesciunt minima culpa voluptatum. Praesentium, sunt atque? Harum consectetur sunt consequatur et.</p>
            <p className={styles.paragrafo}>Harum nesciunt enim sapiente iusto error nobis corrupti cumque incidunt corporis! Quia minus voluptate id soluta perspiciatis alias vel voluptatem, quae accusamus provident, placeat rerum eveniet voluptates necessitatibus. Perferendis, autem!</p>
            <p className={styles.paragrafo}>Molestias odio dolorem eligendi, ad itaque quis porro. Tenetur deleniti voluptatum rerum dolorem aliquam nam, sint quasi modi repellendus iusto aut obcaecati, doloremque exercitationem quia architecto voluptatem quo minus laudantium.</p>
            <p className={styles.paragrafo}>Ipsa, ut aliquid est incidunt possimus aspernatur cumque fugit dolores consequatur sint vero hic adipisci, quisquam similique pariatur veritatis quia repudiandae neque officia autem deleniti mollitia! Autem odio tenetur pariatur?</p>
            <p className={styles.paragrafo}>Dolorum id et molestias possimus distinctio molestiae ipsam praesentium iure, commodi, natus esse impedit voluptatem dolorem vero maiores nemo magni hic harum. Aperiam nostrum harum voluptate doloribus itaque odio error.</p>
            <p className={styles.paragrafo}>Quaerat, blanditiis sunt labore inventore vel libero eum excepturi quibusdam nobis ipsam perspiciatis dolorem dignissimos iusto reprehenderit repellendus, sed incidunt cumque nostrum voluptatem dicta quasi totam nesciunt repudiandae! Ipsum, numquam?</p>
        </PostTemplate>
    )
}