// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// connect with database
var client = mysql.createConnection({
  user: 'root',
  password: 'yeon1234',
  database: 'Library'
});

client.connect((err) => {
  if (err) throw err;
  console.log("DBMS Connected!");
})
const app = express();
const PORT = 3001;

app.use(bodyParser.json());

// 회원가입
app.post('/signup', (req, res) => {
  const { id, password, name } = req.body;
  users.push({ username, password });
	client.query('INSERT INTO users (id, pw, name) VALUES (?,?,?)', [
		id, password, name
	], (e,r) => {
		if (e) {
			res.json({ success: false, message: 'Failed user signed up' });
		}
		else {
			res.json({ success: true, message: 'User signed up successfully.' });
		}
	});
});

// 로그인
app.post('/login', (req, res) => {
  const { id, password } = req.body;

	client.query('SELECT * FROM users WHERE id = ? AND pw = ?',[
		id, password
	], (e,r) => {
		if (e) {
			res.json({ success: false, message: 'Failed user logged in' });
		}
		if (r.length > 0) {
			res.json({ success: true, message: 'User logged in successfully.' });
		}
		else {
			res.json({ success: false, message: 'Failded to logged in'})
		}
	});
});

// 모든 요청에 대해 React 앱으로 라우팅
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
