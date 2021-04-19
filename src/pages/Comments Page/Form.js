import React from 'react';

class Form extends React.Component {

  render() {

    return (
      <div>
        <u><h1>Comments Page</h1></u>
        <form>
          <input
            type="text"
            name="Name"
            placeholder="Your-Name"
            value={this.props.formData.Name}
          />
          <input
            type="text"
            name="Comment"
            placeholder="Favourite Game?"
            value={this.props.formData.Comment} />
        </form>
      </div>
    )
  }
}

export default Form;