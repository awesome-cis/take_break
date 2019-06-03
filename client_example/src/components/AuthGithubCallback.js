import React, { Component } from 'react';
import { withRouter } from 'react-router';

const queryString = require('query-string');
const superagent = require('superagent');

class AuthGithubCallback extends Component {
  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);
    console.log(parsed.code);

    const code = parsed.code;

    superagent
      .post('http://localhost:8080/auth/github')
      .send({
        code
      })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .end((err, res) => {
        console.log(res);
      });
  }
  render() {
    return <div className="AuthGithubCallback" />;
  }
}

export default withRouter(AuthGithubCallback);
