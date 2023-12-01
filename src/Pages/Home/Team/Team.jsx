import React from 'react'
import "./Team.scss"
import SectionTitle from '../../../Compnents/SectionTitle/SectionTitle'
import { Container, Row } from 'react-bootstrap'
import TeamCard from './TeamCard'
import Elisa from "../../../Assets/Images/awards.webp"
import Kevin from "../../../Assets/Images/team-3.webp"
import James from "../../../Assets/Images/team-4.webp"
const Team = () => {

    const team=[
        {
            id:1,
            title:'Elisa Velasques',
            work:'Editor',
            desc:"Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus elit. Phasellus rhoncus nulla ut metus.",
            img:Elisa
        },
        {
            id:2,
            title:'Kevin James',
            desc:"Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus elit. Phasellus rhoncus nulla ut metus.",
            work:'Editor',
            img:Kevin
        },
        {
            id:3,
            title:'James Calvin',
            desc:"Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus elit. Phasellus rhoncus nulla ut metus.",
            work:'Editor',
            img:James
        }
    ]
  return (
    <section id='team_section' >
        <SectionTitle headingTop='A CREATIVE CREW' headingCenter='Meet the Team' pharagraph="Get to know the talented and passionate individuals who make up the Noxe team. From directors to editors, our team is dedicated to bringing cinematic magic to life. Learn more about their backgrounds, experiences, and creative inspirations that drive our films to success."/>
    <section class='team_cards'>
        <Container>
            <Row>
                {team?.map((item)=>{
                    return (
                        <TeamCard key={item?.id} img={item?.img} title={item?.title} work={item?.work} desc={item?.desc}/>

                    )
                })}
            </Row>
        </Container>
    </section>
     </section>
  )
}

export default Team