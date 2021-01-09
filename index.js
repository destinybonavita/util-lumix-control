//#region Imports

const axios = require("axios").default; // Used for network calls
require("dotenv").config(); // Used to load environmental variables

//#endregion

//#region Constants

const endpoint = `http://${process.env.LUMIX_IP_ADDRESS}/cam.cgi?`; // Endpoint for API

//#endregion

//#region Functions

/**
 * Function used to invoke capture API
 */
async function capture() {
    const response = await axios.get(`${endpoint}mode=camcmd&value=capture`);

    if (response.status != 200) {
        console.log("Failed to capture");
    }

    console.log(response);
}

//#endregion

// Take a picture 
(async () => await capture())();