import React from 'react';
import Routes from 'routes';

class App extends React.Component {
  // componentDidMount() {
  //   addAxiosResponseInterceptor();
  //   // if we have saved tokens in local storage
  //   if (localStorage.getItem('jwtToken')) {
  //     this.props.authenticateUser();
  //   }
  // }

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
    return <Routes/>
  }
}

// const mapStateToProps = (state) => ({
//   authenticating: state.authorizedUser.authenticating,
//   isAuthenticated: state.authorizedUser.isAuthenticated,
// });

// const mapDispatchToProps = {
//   authenticateUser,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
