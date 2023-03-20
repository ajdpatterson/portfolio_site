import Button from 'react-bootstrap/Button';
import CV from '../resources/cv.pdf'

const CVContent = () => {
    return(
        <div>
            <a class="button" href={CV} target="_blank" rel="noreferrer">Download my CV</a>
        </div>
    )
}

export default CVContent;