import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [postData, setPostData] = useState([
    id: '',
    password: '',
    name: ''
  ]);

  const handleLogin = (data) => {
    // 로그인 로직 처리 (예: 서버에 데이터 전송 등)
    console.log('Logging in with:', data);
    console.log(data.id);
    console.log(data.password);
    setLoggedIn(true);
    setUserData(data); // 로그인 정보 저장
  };

  const handleSignUp = (data) => {
    // 회원가입 로직 처리 (예: 서버에 데이터 전송 등)
    console.log('Signing up with:', data);
    setLoggedIn(true);
    setUserData(data); // 로그인 정보 저장

    useEffect(() => {
      // node.js에서의 API 추출
      fetch('')
    })
  };

  const handlePostRequest = async (data) => {
    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const data = await
      }

    }
  }

  const handleLogout = () => {
    // 로그아웃 로직 처리
    console.log('Logging out');
    setLoggedIn(false);
    setUserData(null);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>Welcome, {userData && userData.name}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <LoginForm onLogin={handleLogin} />
          <SignUpForm onSignUp={handleSignUp} />
        </div>
      )}
    </div>
  );
};

export default App;
