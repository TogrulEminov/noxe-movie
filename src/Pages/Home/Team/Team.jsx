import React from 'react';
import './Team.scss';
import SectionTitle from '../../../Compnents/SectionTitle/SectionTitle';
import { Container, Row } from 'react-bootstrap';
import TeamCard from './TeamCard';
import Elisa from '../../../Assets/Images/awards.webp';
import Kevin from '../../../Assets/Images/team-3.webp';
import James from '../../../Assets/Images/team-4.webp';
import useFetch from '../../../hooks/useFetch';
const Team = () => {
  const { data, loading } = useFetch(`/person/popular`);
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500/';
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
            {data?.results?.slice(0,3).map((item) => {
                const known_for=item?.known_for.map((g)=>g.overview)
              return (
                <TeamCard
                  key={item?.id}
                  img={`${IMAGE_PATH}${item?.profile_path}`}
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
