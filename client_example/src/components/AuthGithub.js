import React, { Component } from 'react';

const CLIENT_ID = '33b55a9eb249d40cf9da';

/**
 * @description [인증 진행] 버튼을 눌리면 github.com에 로그인된 이후, GitHub Apps 설정에 정의된 콜백으로 자동으로 Redirect 합니다.
 */
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
