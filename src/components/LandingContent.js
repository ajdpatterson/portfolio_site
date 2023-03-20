import Card from 'react-bootstrap/Card';

const LandingContent = () => {
    return(
        <div class='content-card'>
            <Card>
                <Card.Body>
                    <Card.Title>readme.txt</Card.Title>
                    <Card.Text>Hi, my name is Andrew Patterson. I used to work as a dentist,
                        but I got a bit long in the tooth and decided to start over in a new
                        industry. I find the process of coding fascinating and rewarding, as the mechanics of how
                        and why something behaves as it does appeals to the same need for discovery
                        that I found in healthcare. 
                        <br/>
                        <br/>
                        Moving from dentistry to the tech industry has presented me with an opportunity 
                        to develop new expertise. I have noticed that I look at the technology that 
                        I use on a daily basis in a different way now; it's like now that I can see how an interface
                        was put together with nuts and bolts, and I can't help but think about ways I could
                        contribute to the process.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default LandingContent;