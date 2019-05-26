import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/usersActions";

class UsersList extends Component {
  state = {};

  componentDidMount() {
    if (!window.INITIAL_STATE) {
      this.props.fetchUsers();
    }
  }

  render() {
    return (
      <div>
        Here's a big list of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }

  renderUsers = () => {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  };
}

const mapStateToProps = state => {
  return {
    users: state.users.userList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

// es6 syntex
const loadData = store => {
  // console.log("I'm trying to load some data!", store);
  return store.dispatch(fetchUsers());
};

// Same things
// function loadData() {
//   console.log("I'm trying to load some data!");
// }

// Using this we should take care all export
// export { loadData };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(UsersList);

export default {
  loadData,
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(UsersList)
};

// Arrow function
// export default {
//   loadData : ({dispatch}) => dispatch(fetchUsers()),
//   component: connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(UsersList)
// };
