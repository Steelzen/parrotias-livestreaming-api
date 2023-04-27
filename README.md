# parrotias-livestreaming-api


This is for creating livestreaming server using MUX API with Node.js.

Referecne https://docs.mux.com/ for details about API.


## Running Locally

**1. Clone Repo**

```bash
git clone https://github.com/Steelzen/parrotias-livestreaming-api.git
```

**2. Install Dependencies**

```bash
npm install
```

**3. Provide MUX API Key**

Create a .env local file in the root directory with your MUX API Key:


```bash
MUX_TOKEN_ID=[Your Mux Token ID]
MUX_TOKEN_SECRET=[your Mux Token Secret]
```

Refer to https://dashboard.mux.com/organizations/du0foo/settings/access-tokens

**4. Run App**

```bash
node index.js
```

## How to use from client side
Once your server is running, you can make a POST request to http://localhost:3000/create-live-stream to create a new live stream. The server will return a JSON response containing the stream key and playback ID for the newly created live stream.

You can temporarily try it on bash like below. You can get stream key and playback ID on your console.

```bash
curl --location --request POST 'http://localhost:8000/create-live-stream'
```

To stream the video, you can use OBS Studio or any other broadcasting software compatible with RTMP. Set the server URL to rtmp://live.mux.com/app and use the stream key from the JSON response. 
