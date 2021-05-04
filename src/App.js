import React from 'react';
import { connect } from 'react-redux';
import Routes from 'routes';
import Modal from 'components/modals'
import { successfulLoginUser } from 'redux/actions'
import { getCookie } from 'helpers'

class App extends React.Component {
  componentDidMount() {
    // if (getCookie('io')) {
    //   this.props.authenticateUser();
    // }
  }

  render() {
    // const { isAuthenticated, authenticating } = this.props;
    // if (authenticating) {
    //   return <Loader />;
    // }
    // return localStorage.getItem('jwtToken') && !isAuthenticated ? null : (
    //   <>
    //     <Routes />
    //     <Modal />
    //   </>
    // );
    return <>
      <Routes />
      <Modal />
    </>
  }
}

const mapStateToProps = (state) => ({
  authenticating: state.user.authenticating,
  isAuthenticated: state.user.isAuthenticated,
});

const mapDispatchToProps = {
  successfulLoginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
