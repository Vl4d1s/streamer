import React from 'react';
// reduxForm is like the connect function
// that we use from react-redux libery
// he dosnt really knowing what we are doing
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInpit({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  render() {
    return (
      <form class="ui form">
        <Field name="title" component={this.renderInpit} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInpit}
          label="Enter Description"
        />
      </form>
    );
  }
}

export default reduxForm({
  form: 'streamCreate',
})(StreamCreate);
