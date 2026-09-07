const awsConfig = {
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_E7k9H507c', // e.g., ap-south-1_xxxxxxxxx
      userPoolClientId: '46v3seqpli1e7o6b86rk70kq2b', // e.g., 1a2b3c4d5e6f7g8h9i0j1k2l3m
      loginWith: {
        email: true,
      },
    }
  },
  API: {
    baseUrl: 'https://tkqmbbq0ve.execute-api.us-east-1.amazonaws.com' // e.g., https://xxxxxxxxxx.execute-api.ap-south-1.amazonaws.com
  }
};

export default awsConfig;
