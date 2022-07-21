import React from "react";
import projects from "./projects";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Portfolio = () => {

    return (<main className="container text-center border border-primary">
        <h2 className="sectionheading">Portfolio</h2>
        {projects.map((ele, key) => {
            return (<>

                <Card key={key} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + ele.screenshot} />
                    <Card.Body>
                        <Card.Title>{ele.title}</Card.Title>
                        <Card.Text>
                            {ele.description}
                        </Card.Text>
                        <Button variant="primary"><a href={ele.Github}>Github</a></Button>
                        <Button variant="success"><a className = "text-white" href={ele.live}>live</a></Button>


                    </Card.Body>
                </Card>

            </>)
        })}
    </main>)
}

export default Portfolio;