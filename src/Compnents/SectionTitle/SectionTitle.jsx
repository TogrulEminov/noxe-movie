import { Container } from 'react-bootstrap';
import './SectionTitle.scss';
import { useSelector } from 'react-redux';
const SectionTitle = ({ headingTop, headingCenter, pharagraph }) => {
  const theme = useSelector((state) => state.mode.theme);
  return (
    <div id="section_title">
      <Container>
        <article className="section_content">
          {headingTop ? <h6 data-theme={theme}>{headingTop}</h6> : <></>}
          <h3 data-theme={theme}>{headingCenter}</h3>
          {pharagraph ? <p data-theme={theme}>{pharagraph} </p> : <></>}
        </article>
      </Container>
    </div>
  );
};

export default SectionTitle;
