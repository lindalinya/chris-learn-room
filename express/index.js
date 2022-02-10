const express = require('express'); // 引入 express
const app = express();   // 实例化
const port = 3000;    // 设置端口

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/test', (req, res) => {
	res.status(200).send(req.query);
})
app.post('/', (req, res) => {
	console.log('收到请求体:', req.body);
	res.status(201).send()
})
app.put("/:id", (req, res) => {
	console.log("收到请求参数，id为：", req.params.id);
	console.log("收到请求体:", req.body);
	res.send();
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))