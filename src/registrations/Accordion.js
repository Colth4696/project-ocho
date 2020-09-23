import React, { Component } from 'react';
import DummyContent from '../Dummy';
import RequestForm from '../RequestForm';
import MessageList from '../MessageList'
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

class AccordionMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: this.props.messages
    }
  }
  render() {
    return (
      <div className="DropMenu">
        <Accordion atomic={true}>

          <AccordionItem title="Create a Request">
            <RequestForm />
          </AccordionItem>

          <AccordionItem title="My Activity">
            <DummyContent />
          </AccordionItem>

          <AccordionItem title="My Messages">
            <MessageList />
          </AccordionItem>

        </Accordion>
      </div>
    );
  }
}

export default AccordionMenu