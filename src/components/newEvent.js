import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

class newEvent extends Component {

  state={

  }

  render() {
    return (
    <Form>
    <h3>new event</h3>
      <Form.Field>
        <label>Description</label>
        <input placeholder='' name='name' value='' onChange={this.changeHandler}/>
      </Form.Field>
      <Form.Field control={Checkbox} label={<label>only admin can edit</label>} />
       <Button type='submit' onClick={(e) => this.createGroup()}>Submit</Button>
    </Form>
  );
  }

}

export default newEvent;
