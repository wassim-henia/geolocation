import React,{ Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class Localisation extends Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = { collapse: false };
    }
  
    toggle() {
      this.setState(state => ({ collapse: !state.collapse }));
    }
    render() {
    return(
        <form onSubmit={this.props.getLocation}>
            <div>
            <Button size="lg" block type= 'submit' color="danger"  onClick={this.toggle} style={{ marginBottom: '1rem' }}>
            Get Your Location
          </Button>
          <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody>
               {
                    this.props.country && <p>You are from {this.props.country}</p>
                }
                {
                    this.props.city && <p>Your city is : {this.props.city}</p>
                }
                {
                    this.props.isp && <p>Your Internet Service Provider is  : {this.props.isp}</p>
                }
                {
                    this.props.timezone && <p>Your timezone is : {this.props.timezone}</p>
                }
                {
                    this.props.lat && <p>Your Latitude is : {this.props.lat}</p>
                }
                {
                    this.props.lon && <p>Your Longitude is : {this.props.lon}</p>
                }
              </CardBody>
            </Card>
            </Collapse>

            </div>

        </form>
    );

}
}

export default Localisation ;