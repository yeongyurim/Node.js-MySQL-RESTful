// LoginForm.js

import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [id, setID] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // 여기서 API 호출 또는 다른 로직을 추가하여 백엔드로 로그인 정보 전송
    onLogin({ id, password });
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        ID:
        <input type="text" value={id} onChange={(e) => setID(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
