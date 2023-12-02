import React from 'react'
import "./Blog.scss"
import { Col, Container, Row } from 'react-bootstrap'
import BlogCard from '../../../Compnents/BlogCard/BlogCard'
const Blog = () => {
  return (
    <section id='blog_area'>
        <Container>
            <Row>
                
                    <BlogCard/>
            </Row>
        </Container>
    </section>
  )
}

export default Blog