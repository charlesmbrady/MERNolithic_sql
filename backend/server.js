const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;
const app = express();

// Middlewares
app.use(express.urlencoded({ limit: "100mb", extended: true }));
app.use(express.json({ limit: "100mb" }));

app.get("/healthcheck", (req, res) => {
  console.log("hit sheep");
  res.send("App is running!");
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
  });
}

if (process.env.NODE_ENV !== "production") {
  app.get("/", (req, res) => {
    res.sendStatus(200);
  });
}

// Error handler
app.use(function(err, req, res, next) {
  console.log("====== ERROR =======");
  console.error(err.stack);
  res.status(500);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // Turn server on
