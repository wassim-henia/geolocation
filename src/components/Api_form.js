import React,{ Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class ApiForm extends Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = { collapse: false };
    }
  
    toggle() {
      this.setState(state => ({ collapse: !state.collapse }));
    }
    render() {
        return (
     
        <form onSubmit={this.props.getIp}>
            <div>
            <Button size="lg" block type= 'submit' color="primary"  onClick={this.toggle} style={{ marginBottom: '1rem' }}>
            Get Your IP
          </Button>

           <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody>
                {
                   this.props.ip && <p> Your Ip Address is {this.props.ip}</p>
                }
              </CardBody>
            </Card>
            </Collapse>
         </div>

        </form>

    );
}
}
export default ApiForm;