import './HomeSection.scss';
import { Container } from 'react-bootstrap';
import SwitchTabs from '../SwitchTabs/SwitchTabs';
import { useSelector } from 'react-redux';
const HomeSection = ({ data, title, onTabChange }) => {
  const theme = useSelector((state) => state.mode.theme);
  return (
    <section className="home_section" data-theme={theme}>
      <Container>
        <div className="home_section_title">
          <h3>{title}</h3>
          <SwitchTabs data={data} onTabChange={onTabChange} />
        </div>
      </Container>
    </section>
  );
};

export default HomeSection;
