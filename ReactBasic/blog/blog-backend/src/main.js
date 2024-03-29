require("dotenv").config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import { connect } from 'mongoose';
import api from './api';
import createFakeData from './createFakeData';
import jwtMiddleware from './lib/jwtMiddleware';


// process.env s내부 값에 대한 레퍼런스 만들기
const {PORT, MONGO_URI} = process.env;

connect(MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB');
    createFakeData();
})
.catch(e => {
    console.error(e);
})

const app = new Koa();
const router = new Router();

// router.get('/', ctx => {
//     ctx.body = '홈';
// });
// router.get('/about/:name?', ctx => {
//     const { name } = ctx.params;
//     ctx.body = name ? `${name}의 소개` : '소개';
// });
// router.get('/posts', ctx => {
//     const { id } = ctx.query;
//     ctx.body = id ? `포스트 #${id}` : '포스트 아이디가 없습니다.';
// })

router.use('/api', api.routes());

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.use(jwtMiddleware);

const port = PORT || 4000;
app.listen(port, () => {
    console.log('listening to port 4000');
});