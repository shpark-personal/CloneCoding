const Router = require('koa-router');
const potsCtrl = require('./posts.ctrl');
const posts = new Router();

posts.get('/', potsCtrl.list);
posts.post('/', potsCtrl.write);
posts.get('/:id', potsCtrl.read);
posts.delete('/:id', potsCtrl.remove);
posts.put('/:id', potsCtrl.replace);
posts.patch('/:id', potsCtrl.update);
export default posts;