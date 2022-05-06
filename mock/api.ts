// import mockjs from 'mockjs';

export default {
  // 支持值为 Object 和 Array
  'GET /api/client/login': {
    success: true,
    errorMessage: 'if login fail, this message will show!',
    data: {
      name: '王x',
      age: 12,
    },
  },
};
