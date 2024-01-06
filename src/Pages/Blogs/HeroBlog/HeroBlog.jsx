import { Container } from 'react-bootstrap';
import "./HeroBlog.scss"
const HeroBlog = () => {
  return (
    <section id="blog_hero">
      <Container>
        <article className="blog_title">
          <h3>Blog</h3>
        </article>
      </Container>
    </section>
  );
};

export default HeroBlog;
