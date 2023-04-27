import Mux from "@mux/mux-node";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
dotenv.config();

const app = express();

const { Video } = new Mux(
  process.env.MUX_TOKEN_ID,
  process.env.MUX_TOKEN_SECRET
);

// Use the cors middleware to allow cross-origin requests.
// This is because there is no CORS header on the Mux API responses.
app.use(
  cors({
    origin: ["http://localhost:3000", "https:/localhost:3000"],
  })
);

app.post("/create-live-stream", async (req, res) => {
  try {
    const liveStream = await Video.LiveStreams.create({
      playback_policy: "public",
      new_asset_settings: { playback_policy: "public" },
    });

    res.status(200).json({
      message: "Live stream created successfully",
      data: {
        stream_key: liveStream.stream_key,
        playback_id: liveStream.playback_ids[0].id,
      },
    });
  } catch (error) {
    console.error("Error creating live stream:", error);
    res.status(500).json({ error: "Failed to create live stream" });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
