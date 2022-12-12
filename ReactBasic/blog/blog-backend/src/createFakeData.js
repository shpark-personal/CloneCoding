import Post from './models/post';

export default function createFakeData(){
    const posts = [...Array(40).keys()].map(i => ({
        title: `포스트 #${i}`,
        body:'test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.test is test.',
        tags: ['data1',  'data2']    
    }));
    
    Post.insertMany(posts, (err, docs) => {
        console.log(docs);
    });
}