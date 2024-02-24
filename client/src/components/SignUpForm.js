// SignUpForm.js

import React, { useState } from 'react';

const SignUpForm = ({ onSignUp }) => { // 화살표 함수를 이용할 시 자동으로 호출한 컴포넌트와 바인딩 됌
  const [id, setID] = useState(''); 
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    // 여기서 API 호출 또는 다른 로직을 추가하여 백엔드로 회원가입 정보 전송
    onSignUp({ id, password, name });
  };

  return (
    <form onSubmit={handleSignUp}>
      <label>
        ID:
        <input type="text" value={id} onChange={(e) => setID(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label>
        Name:
        <input type="name" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
