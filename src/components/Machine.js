import React from 'react'
import { Link } from 'react-router-dom'
import machinepng from '../assets/machine.png'

class Machine extends React.Component {
  render() {
    let machineId = this.props.machine._id
    let machineName = this.props.machine.machineName
    let machineType = this.props.machine.machineType
    return (
      <div className="card col-lg-3 col-md-4 col-sm-6 m-2">
        <Link to={`/Type` + machineType + `/` + machineId} className="card-link">
          <img className="card-img-top p-2" src={machinepng} alt="" />
          <div className="card-body">
            <h4 className="card-title">{machineName}: {machineType}</h4>
          </div>
        </Link>
        <div className="card-footer text-right">
          <a href="/#" data-toggle="modal" data-target=".ModalCreate"><i className="fas fa-cog text-dark mr-3"></i></a>
          <Link to={`/Delete/` + machineId}><i className="fas fa-trash-alt text-danger"></i></Link>
        </div>
      </div>
    )
  }
}



export default Machine