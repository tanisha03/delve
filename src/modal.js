import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Label,
  FormGroup,
  Input,
  Col,
  Row,
  FormText
} from "reactstrap";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>POST YOUR WORK</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Label for="exampleText" sm={2}>
                  Text Area
                </Label>
                <Col sm={10}>
                  <Input type="textarea" name="text" id="exampleText" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleFile" sm={2}>
                  File
                </Label>
                <Col sm={10}>
                  <Input type="file" name="file" id="exampleFile" />
                  <FormText color="muted">
                    Any research paper related to your work.
                  </FormText>
                </Col>
              </FormGroup>

              <FormGroup check row />
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Submit
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Add;
