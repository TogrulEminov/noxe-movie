import './Team.scss';
import SectionTitle from '../../../Compnents/SectionTitle/SectionTitle';
import { Container, Row } from 'react-bootstrap';
import TeamCard from './TeamCard';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
const Team = () => {
  const { data } = useFetch(`/person/popular`);
  const { url } = useSelector((state) => state.api);
  return (
    <section id="team_section">
      <SectionTitle
        headingTop="A CREATIVE CREW"
        headingCenter="Meet the Team"
        pharagraph="Get to know the talented and passionate individuals who make up the Noxe team. From directors to editors, our team is dedicated to bringing cinematic magic to life. Learn more about their backgrounds, experiences, and creative inspirations that drive our films to success."
      />
      <section className="team_cards">
        <Container>
          <Row>
            {data?.results?.slice(0, 3)?.map((item) => {
              const known_for = item?.known_for?.map((g) => g.overview);
              return (
                <TeamCard
                  key={item?.id}
                  img={`${url.profile}${item?.profile_path}`}
                  title={item?.name}
                  work={item?.known_for_department}
                  desc={known_for[0]}
                />
              );
            })}
          </Row>
        </Container>
      </section>
    </section>
  );
};

export default Team;
