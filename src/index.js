const axios = require("axios");

const fetchIp = async () => {
  try {
    const response = await axios.get("https://curlmyip.org/");
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching IP:", error);
  }
};

fetchIp();
