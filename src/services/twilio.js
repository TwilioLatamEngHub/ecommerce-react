import axios from 'axios';

const SendToTwilio = async (mobile, username, order) => (
  axios.post('https://dc0f121caef3.ngrok.io', { number: mobile, name: username, order })
    .then((data) => data)
    .catch(console.error)
);

export default SendToTwilio;
