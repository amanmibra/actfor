import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import IRC from './IRC.png'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Resources extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={IRC} />
          <Card.Body>
            <Card.Title>The Yemeni Health Crisis</Card.Title>
            <Card.Text>
              Despite being a completely treatable disease, thousands of people have died from the outbreak of
              cholera unleashed in Yemen in 2017. The health care system has been decimated by years of unrelenting
              war. Supplies and medical care are scarce as is the access to drinking water and sanitation.
            </Card.Text>
            <Button href='https://www.icrc.org/en/where-we-work/middle-east/yemen/health-crisis-yemen' variant="primary" target='_blank'>
              Visit Site
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
