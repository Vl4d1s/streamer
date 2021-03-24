import React from 'react';
// reduxForm is like the connect function
// that we use from react-redux libery
// he dosnt really knowing what we are doing
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInpit(formProps) {
    return <input {...formProps.input} />;
  }

  render() {
    return (
      <form>
        <Field name="title" component={this.renderInpit} />
        <Field name="description" component={this.renderInpit} />
      </form>
    );
  }
}

export default reduxForm({
  form: 'streamCreate',
})(StreamCreate);
