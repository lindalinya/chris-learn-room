const express = require('express') // 引入 express
const app = express()   // 实例化
const port = 3000    // 设置端口

app.use(express.json());

// 利用get设置 url
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/test', (req, res) => {
	console.log(req.ip);
	console.log('----------req------');
	console.log(req.query);
	// const a = {"a":1,"search":2};
    res.status(200).send(req.query);  // 设置请求成功状态码 201;
})
app.post('/',(req,res)=> {   // post新建请求
    console.log('收到请求体:',req.body);
    res.status(201).send()  // 设置请求成功状态码 201
})
app.put("/:id", (req,res)=>{ // 更新数据
    console.log("收到请求参数，id为：", req.params.id);
    console.log("收到请求体:",req.body);
    res.send();
})
// 监听端口
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
