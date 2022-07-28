import React from 'react';  // React з папки node_modules
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    title: 'Name'
  }

  activateEditMode = () => {
    debugger;
    // console.log(this.state.editMode);    //false
    console.log("this:", this);    //false
    this.setState({     //setState - асинхронна функція
      editMode: true
    })
    // console.log(this.state.editMode);     //false

    // this.forceUpdate();  //використовувати тільки виключних випадках
  }
  deactivateEditMode() {
    this.setState({
      editMode: false
    })
  }

  render() {
    // debugger;
    return (

      <div>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input value={this.props.status} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} >{this.props.text}</input>
          </div>
        }
      </div>
    );
  }
}

export default ProfileStatus;