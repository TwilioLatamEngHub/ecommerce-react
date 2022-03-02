import axios from 'axios';

const smsURL = 'https://gus-se-academy-sms-5231.twil.io/';
const wpURL = 'https://se-academy-sms-3197.twil.io/';

const SendToTwilio = async (mobile, username, order) => (
  axios.post(wpURL, { number: mobile, name: username, order })
    .then((data) => data)
    .catch(console.error)
);

export default SendToTwilio;
