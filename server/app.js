const express = require('express');
const cors = require('cors');
require('./db/db');
const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', require('./routes/auth'));
app.use('/users', require('./routes/user'));
app.use('/posts', require('./routes/post'));
app.use('/comments', require('./routes/comment'));
app.use('/follow', require('./routes/follow'));
app.listen(8000);
