import React from "react";
import Celcius from "./Celcius";
import Fahrenheit from "./Fahrenheit";
import Kelvin from "./Kelvin";
import { Container, Row, Col, Button } from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { anlikSicaklik: 0, fahrenheit: 0, kelvin: 0, };
  }

  sicaklikArttir = () => {
    let yeniSicaklik = this.state.anlikSicaklik + 1;
    let fahrenheit = (yeniSicaklik * (9 / 5) + 32).toFixed(2);
    let kelvin = yeniSicaklik + 273.15;
    this.setState({
      anlikSicaklik: yeniSicaklik,
      fahrenheit: fahrenheit,
      kelvin: kelvin,
    });
  };


  render() {
    return (
      <div >

        <Container>
          <Row>
            <h2>Hava Nasıl ?</h2>
          </Row>

          <Row>
            <h4>Şu an Sıcaklık 0 derece</h4>
          </Row>
          <Button
            color="primary" onClick={this.sicaklikArttir}
          >
            Sıcaklığı Arttır
          </Button>
          <h6>3 birimde sıcaklık ölçümü</h6>
          <Row>
            <Col> <Celcius sicaklik={this.state.anlikSicaklik} /> </Col>
            <Col> <Fahrenheit sicaklik={this.state.fahrenheit} /> </Col>
            <Col> <Kelvin sicaklik={this.state.kelvin} /> </Col>
          </Row>
        </Container>

      </div>

    )
  }

}

export default App;
