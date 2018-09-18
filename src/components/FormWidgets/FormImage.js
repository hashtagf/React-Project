import React from 'react'
import WidgetStore from '../../store/WidgetStore'

class FormImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Image',
      text: '',
      machineId: this.props.machineId
    }
    this.handlePayload = this.handlePayload.bind(this)
  }

  handlePayload(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    let payload = {
      typeWidget: 'Image',
      title: this.state.title,
      text: this.state.text
    }
    console.log(payload)
    WidgetStore.addWidgetToDB(this.props.machineId, payload)
    window.location.reload()
  }
  render() {
    const payload = this.state
    return (
      <div className="FormProgressBar container">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group row">
            <label htmlFor="title" className="col-3 col-form-label">
              Title :
          </label>
            <div className="col-9">
              <input
                name="title"
                type="text"
                className="form-control"
                value={payload.title}
                onChange={this.handlePayload}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="text" className="col-3 col-form-label">
              Text :
          </label>
            <div className="col-9">
              <textarea
                name="text"
                type="textarea"
                className="form-control"
                value={payload.percent}
                onChange={this.handlePayload}
              />
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-3">
              <button type="submit"
                className="btn btn-secondary btn-block"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default FormImage