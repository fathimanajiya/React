
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';






export default function App() {





  let districts=[
    {
      id:"1",
      name:"Kasargode",
      dicription:"City paradise",
      Image:"https://theprimetime.in/wp-content/uploads/2021/11/Kasaragod-Kerala.jpg"
    },
    {
      id:"2",
      name:"Kannur",
      dicription:"Red Salute",
      Image:"https://i.ytimg.com/vi/GIDUcSN7OB8/maxresdefault.jpg"
    },
    {
      id:"3",
      name:"Kozhikode",
      dicription:"S M STREET",
      Image:"https://img.veenaworld.com/wp-content/uploads/2021/07/12-Best-Tourist-Places-in-Kozhikode-Calicut-scaled.jpg"
    },
    {
      id:"4",
      name:"Malappuram",
      dicription:"GULF",
      Image:"https://upload.wikimedia.org/wikipedia/commons/4/49/Malappuram_DownHill_Aerial_View.jpg"
    },
    {
      id:"5",
      name:"Wayanad",
      dicription:"KERALA FOREST",
      Image:"https://www.wayanad.com/files/slides/7110478409.jpg"
    },
    {
      id:"6",
      name:"Palakkad",
      dicription:"Temple festival",
      Image:"https://upload.wikimedia.org/wikipedia/commons/d/de/Govt_Victoria_College_Palakkad_Entrance.JPG"    
    },
    {
      id:"7",
      name:"Thrissur",
      dicription:"HUB",
      Image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Kudamatom_at_thrissur_pooram_2013_7618.JPG/800px-Kudamatom_at_thrissur_pooram_2013_7618.JPG"
    },
    {
      id:"8",
      name:"Ernakulam",
      dicription:"cyber Hub",
      Image:"https://upload.wikimedia.org/wikipedia/commons/4/4a/INS_Vikrant_under_construction_at_Cochin_Shipyard.png"
    },
    {
      id:"9",
      name:"Idukki",
      dicription:"Cardamom Hills",
      Image:"https://static.theprint.in/wp-content/uploads/2018/08/2018_8img10_Aug_2018_PTI8_10_2018_000227B.jpg?compress=true&quality=80&w=376&dpr=2.6"    
    },
    {
      id:"10",
      name:"Pathanamthitta",
      dicription:"Central Travancore region",
      Image:"https://chaloghumane.com/wp-content/uploads/2021/08/Pathanamthitta-Kerala.jpeg"
    },
    {
      id:"11",
      name:"Kottayam",
      dicription:"Western Ghats on the east",
      Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe4BcNJDqU2atn04GeFmMwtUdVhexVwNE5FA&usqp=CAU"
    },
    {
      id:"12",
      name:"Kollam",
      dicription:" fourth largest city in Kerala",
      Image:"https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/01/Jatayu-Earth-Centre-Kollam-Kerala.jpg?resize=1024%2C576&ssl=1"    
    },
    {
      id:"13",
      name:"Alappuzha",
      dicription:"A town with canals, backwaters, beaches, and lagoons,",
      Image:"https://assets-news.housing.com/news/wp-content/uploads/2022/08/24003539/ALLEYPPEY-FEATURE-compressed.jpg"
    },
    {
      id:"14",
      name:"Thiruvananthapuram",
      dicription:"capital of the Indian state of Kerala",
      Image:"https://gumlet.assettype.com/swarajya/2020-07/80fd68d5-1dd8-40bf-80f5-81f785e91dec/378119_padmanabhaswamy_temple.jpg"
    },


  ]
  
  return (
    <Container>
    <Row>
      {
        districts.map((districts,index)=>{
          return(





    
    <Col xs={6} md={4}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={districts.Image}/>
  <Card.Body>
    <Card.Title>{districts.name}</Card.Title>
    <Card.Text>{districts.dicription}
    </Card.Text>
    <Button variant="primary">Explore!</Button>
 </Card.Body>
</Card>
</Col>
          )
        }
        )
      }
</Row>
</Container>
);
}



