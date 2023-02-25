import Card from 'react-bootstrap/Card';
import bali from './Assets/Bali.jpg'
import Image from 'react-bootstrap/Image'


function HomePage(){
    return (


        <Card class={"background"} id={"homePage"}>
        <Card.Body>
          <Card.Text>
            Welcome to Bucket list Builder
          </Card.Text>
        </Card.Body>
      </Card>


    );
}


export default HomePage