import React, { Component } from 'react';
import { withRouter } from 'react-router';

const queryString = require('query-string');
const superagent = require('superagent');

/**
 * @description GitHub로 부터 인증된 이후 받은 code를 서버로 전송해 로그인을 처리함
 */
class AuthGithubCallback extends Component {
  state = {
    res: null
  };

  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);
    const code = parsed.code;

    // server에 github 로그인 or 회원가입 요청
    superagent
      .post('http://localhost:8080/auth/github')
      .send({
        code
      })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .end((err, res) => {
        this.setState({
          res: res.body
        });
        console.log(res.body);
      });
  }

  render() {
    return (
      <div className="AuthGithubCallback">
        <pre>{JSON.stringify(this.state.res, null, 2)}</pre>
      </div>
    );
  }
}

export default withRouter(AuthGithubCallback);
