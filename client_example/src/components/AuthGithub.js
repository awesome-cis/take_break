import React, { Component } from 'react';

const CLIENT_ID = '33b55a9eb249d40cf9da';

export default class AuthGithub extends Component {
  render() {
    return (
      <div className="AuthGithub">
        <a
          href={`https://github.com/login/oauth/authorize?scope=user:email&client_id=${CLIENT_ID}`}
        >
          인증 진행
        </a>
      </div>
    );
  }
}
