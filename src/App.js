import React from 'react';
import { Button, Container, Row, Card, CardBody, Col, Modal} from 'reactstrap';
import './Styles.css'

export default function App(props) {
  return (
    <>
      <Container>
        <Card className="mt-5 p-3">
        <Row className="text-center"> 
          <Col md={12}>
            <div className="text-left">
              <h1 className='h1'>VUTTR</h1>
              <p className='texto'> Very Useful Tools to Remember</p>
            </div>
          </Col>
        </Row>
        <Row className="text-center"> 
          <Col md={12}>
            <Row>
              <Col md={6}>
                <div className="">
                    <input type="text" />
                    <input type="checkbox"/>{' Search in tags only'} 
                </div>       
              </Col>
              <Col md={6}>
                <Button color="primary"> + Add</Button>{' '}
              </Col>
            </Row>
          </Col>
        </Row>
        </Card>
      <Container>
          <Card className="mt-5 p-1">
            <Col xs={12} md={8}>
              <Row className="text-left">
                <Col md={12}>
                    <Row >
                      <div>
                        <h2 className="text-left p-3 mb-2 bg-info text-white">Notion <Button outline color="danger" active={true} onClick={() => {
                          console.log("Clique para remover");}
                          }> X  remove</Button>
                        </h2>
                          <Row className="text-left"> All in one to organize teams and ideas write, plan, collaboreate,
                            and get organized <br/><br/>
                            <p>#Organization #Planning #Collaboration #Writing #Calendar</p>                      
                          </Row>
                      </div> 
                    </Row>   
                </Col>
              </Row>
            </Col>
          </Card>
      </Container>

      </Container>

      

    </>
  );

};


