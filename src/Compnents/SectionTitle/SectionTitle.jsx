import { Container } from 'react-bootstrap';
import './SectionTitle.scss';
const SectionTitle = ({ headingTop, headingCenter, pharagraph }) => {
  return (
    <div id="section_title">
      <Container>
        <article className="section_content">
          <h6>{headingTop}</h6>
          <h3>{headingCenter}</h3>
          <p>{pharagraph} </p>
        </article>
      </Container>
    </div>
  );
};

export default SectionTitle;
