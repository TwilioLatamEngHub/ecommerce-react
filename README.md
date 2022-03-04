# E-commerce react app

Simple ecommerce react js app with firebase

## Run Locally

### 1. Install Dependencies

- Use Node version ^14.19.0

```sh
$ npm install
```

### 2. Create a new firebase project

Login to your google account and create a new firebase project [here](https://console.firebase.google.com/u/0/)

Create an `env` file - Set filename`.env.prod` file for production and `.env.dev`for development and save it in the root of your project folder
and add the following configuration details. You can either use the same configuration details for both development and production but it's best to make separate projects. It can be found on your firebase project settings.

```
// SAMPLE CONFIG .env.dev, you should put the actual config details found on your project settings

FIREBASE_API_KEY=AIzaKJgkjhSdfSgkjhdkKJdkjowf
FIREBASE_AUTH_DOMAIN=yourauthdomin.firebaseapp.com
FIREBASE_DB_URL=https://yourdburl.firebaseio.com
FIREBASE_PROJECT_ID=yourproject-id
FIREBASE_STORAGE_BUCKET=yourstoragebucket.appspot.com
FIREBASE_MSG_SENDER_ID=43597918523958
FIREBASE_APP_ID=234598789798798fg3-034

// Twilio
TWILIO_ACCOUNT_SID=yourtwilioaccountsid
TWILIO_AUTH_TOKEN=yourtwilioauthtoken

```

After setting up necessary configuration,
create a **Database** and choose **Cloud Firestore** and start in test mode

### 3. Run development server

```sh
$ npm run dev-server
```

---

## Build the project

```sh
$ npm run build
```

## Original project

[Original project](https://github.com/jgudo/ecommerce-react) made by [Julius Guevara](https://github.com/jgudo)
