import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const WorkList = () => {
    return(
        <Container id='portfolio-container'>
            <Row>
                <Col>
                    <Card>
                    <Card.Body>
                            <Card.Title>MacrOS</Card.Title>
                            <Card.Img variant="top" src={require("../resources/goalsSmall.png")} />
                            <Card.Text>MacrOS is a full-stack calorie tracking application, with functionality allowing users set nutrition goals, 
                                track and view their daily food/calorie/macro intake and monitor their progress over time. The front-end uses React JS and 
                                Bootstrap for React. The back-end utilises Java, Spring Boot, and PostgreSQL.
                            </Card.Text>
                            <a class="button" href='https://github.com/ajdpatterson/MacrOS'>Visit on GitHub</a>
                        </Card.Body>
                        
                    </Card>
                </Col>

                <Col>
                    <Card>
                    <Card.Body>
                            <Card.Title>BeeCareful</Card.Title>
                            <Card.Img variant="top" src={require("../resources/BeeCareful.png")} />
                            <Card.Text>BeeCareful is a full-stack app with React, Express, and MongoDB. It aims to provide 
                                record-keeping and weather analysis for beehive inspections, and allows for management of multiple sites. This app was written with React, 
                                Express, and MongoDB. It uses calls to the Visual Crossing API for real-time weather data.
                            </Card.Text>
                            <a class="button" href='https://github.com/ajdpatterson/BeeCareful'>Visit on GitHub</a>
                        </Card.Body>
                        
                    </Card>
                    
                </Col>

                <Col>
                    <Card>
                    <Card.Body>
                            <Card.Title>Vet Practice Management</Card.Title>
                            <Card.Img variant="top" src={require("../resources/goalsSmall.png")} />
                            <Card.Text>MacrOS is a full-stack calorie tracking application, with functionality allowing users set nutrition goals, 
                                track and view their daily food/calorie/macro intake and monitor their progress over time. The front-end uses React JS and 
                                Bootstrap for React. The back-end utilises Java, Spring Boot, and PostgreSQL.
                            </Card.Text>
                            <a role="button" class="button" href='https://github.com/ajdpatterson/vet_practice_management'>Visit on GitHub</a>
                        </Card.Body>

                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default WorkList;