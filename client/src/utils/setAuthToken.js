import $ from 'axios';

export default token => {
  if (token) {
    $.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete $.defaults.headers.common['Authorization'];
  }
};
