# Together We
Donate for humanity

### Software prerequisites

Install the below tools/packages

| Serial No   | Software           | Version   | Installation site |
| :---------: | :----------------: | :-------: | :---------------- |
| 1           | Node.js            | >= 6.9.1  | [Install NodeJS](https://nodejs.org/en/download/) |
| 2           | npm                | >= 3.10.8 | [Install NPM](https://www.npmjs.com/get-npm)      |
| 3           | react-native       | >= 0.51.0 | [Install react-native](https://www.npmjs.com/package/react-native) |
| 4           | react-native-cli   | >= 2.0.1  | [Install react-native-cli](https://www.npmjs.com/package/react-native-cli) |
| 5           | exp                | >= 47.1.1 | [Install Expo](https://www.npmjs.com/package/exp) |


### Setup Instructions

#### System setup
1. Clone the repo with `https://github.com/minshaf998/Charity-Donation.git` command
2. Switch to the project's root directory in terminal
3. Create a file config.ts in root directory and the details like below
```
export const config = {
  api_fundrising:
    "https://07fplmn2nd.execute-api.us-west-2.amazonaws.com/dev/fundraising",
  api_key: <Your API key>,
};
```
4. Install the dependencies by running `npm install`
5. Once, 'npm install' is completed, run `npm start` to start the expo and react-native server
6. If it shows a QR code on the terminal as a result of 'exp start' command, then you are good to go!

#### Mobile setup
1. Install 'Expo' application on your android/iOS device. You can find the links to Android and iOS apps [here](https://expo.io/tools#client).
2. Scan the QR code shown on the terminal.
3. Once the QR code is successfully scanned, it will take few seconds to load and render the app.
