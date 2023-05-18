const axios = require("axios");

module.exports = {
  getTranscript: async (req, res) => {
    let transcriptText;
    const audioURL =
      "https://res.cloudinary.com/dgn4l9in5/video/upload/v1684434638/60e3faf0be523020d9e8ef0f42b227f7_a6f1lp.mp4";
    const APIKey = "a6cf19bad2b14bbc86429dc2c062f6f4"; 
    const refreshInterval = 5000;

    const assembly = axios.create({
      baseURL: "https://api.assemblyai.com/v2",
      headers: {
        authorization: APIKey,
        "content-type": "application/json",
      },
    });

    //const getTranscript = async () => {
      // Sends the audio file to AssemblyAI for transcription
      const response = await assembly.post("/transcript", {
        audio_url: audioURL,
      });

      // Interval for checking transcript completion
      const checkCompletionInterval = setInterval(async () => {
        const transcript = await assembly.get(`/transcript/${response.data.id}`);
        const transcriptStatus = transcript.data.status;

        if (transcriptStatus !== "completed") {
          console.log(`Transcript Status: ${transcriptStatus}`);
        } else if (transcriptStatus === "completed") {
          console.log("\nTranscription completed!\n");
          transcriptText = transcript.data.text;
          console.log(`Your transcribed text:\n\n${transcriptText}`);
          
          res.send({ transcriptText: transcriptText });

          clearInterval(checkCompletionInterval);
        }
      }, refreshInterval);
    //};

    // await getTranscript(); Call the getTranscript function

    
  },
};
