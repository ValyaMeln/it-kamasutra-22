import React from 'react';  // React з папки node_modules
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
  // statusInputRef = React.createRef();
  //! Локальний State
  state = {
    editMode: false,
    status: this.props.status,
  }

  activateEditMode = () => {
    // debugger;
    // console.log(this.state.editMode);    //false
    // console.log("this:", this);    
    this.setState({     //setState - асинхронна функція
      editMode: true
    })
    // console.log(this.state.editMode);     //false

    // this.forceUpdate();  //використовувати тільки виключних випадках
  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  }
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    });

  }
  componentDidUpdate(prevProps, prevState) {
    // debugger;
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
    // console.log('componentDidUpdate');
  }
  render() {
    console.log('render');
    // debugger;
    return (

      <div>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status || "---------"}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            {/* <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}>{this.props.text}</input> */}
            <input
              //  ref={this.statusInputRef} 
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.status} />

          </div>
        }
      </div>
    );
  }
}

export default ProfileStatus;