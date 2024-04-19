
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Служит для отдачи статических файлов, находящихся в директории public
app.use(express.static(path.join(__dirname, 'public')));
///bitrix24-webhook
app.post('/bitrix24-webhook', (req, res) => {
    // Получаем данные POST-запроса
    const postData = req.body;
    console.log(postData)


    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});


app.listen(3000, () => console.log('Server running at http://localhost:3000/'));