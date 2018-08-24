// import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [
    { 
      id: 1, 
      title: '社会热点', 
      imgUrl: 'https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64' 
    },
    { 
      id: 2, 
      title: '手绘', 
      imgUrl: 'https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64' 
    },
  ],
  articleList: [
    { 
      id: 1, 
      title: '《我不是药神》不好意思，穷人没有感动', 
      desc: '文/一粒少女 世界上有一种病治不了，那就是穷病。 一直很想去看《我不是药神》这部电影，不管在哪里，都能看到关于这部电影的消息，大家反应都很不错，...',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/3637752-a9aaec514f4317d2.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },
    { 
      id: 2, 
      title: '《我不是药神》不好意思，穷人没有感动', 
      desc: '文/一粒少女 世界上有一种病治不了，那就是穷病。 一直很想去看《我不是药神》这部电影，不管在哪里，都能看到关于这部电影的消息，大家反应都很不错，...',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/3637752-a9aaec514f4317d2.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },
    { 
      id: 3, 
      title: '《我不是药神》不好意思，穷人没有感动', 
      desc: '文/一粒少女 世界上有一种病治不了，那就是穷病。 一直很想去看《我不是药神》这部电影，不管在哪里，都能看到关于这部电影的消息，大家反应都很不错，...',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/3637752-a9aaec514f4317d2.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },
    { 
      id: 4, 
      title: '《我不是药神》不好意思，穷人没有感动', 
      desc: '文/一粒少女 世界上有一种病治不了，那就是穷病。 一直很想去看《我不是药神》这部电影，不管在哪里，都能看到关于这部电影的消息，大家反应都很不错，...',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/3637752-a9aaec514f4317d2.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },
    { 
      id: 5, 
      title: '《我不是药神》不好意思，穷人没有感动', 
      desc: '文/一粒少女 世界上有一种病治不了，那就是穷病。 一直很想去看《我不是药神》这部电影，不管在哪里，都能看到关于这部电影的消息，大家反应都很不错，...',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/3637752-a9aaec514f4317d2.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },
  ]
});

export default (state = defaultState, action) => {
  switch(action.type) {
    default: return state;
  }
}


