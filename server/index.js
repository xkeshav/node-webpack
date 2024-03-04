const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory

// Serve static files including CSS files
app.use(express.static(path.join(__dirname, 'public'), { 
  setHeaders: (res, filePath) => {
    if (path.extname(filePath) === '.css') {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

// Routes
const indexRouter = require("./routes/index");
const aboutRouter = require("./routes/about");
const contactRouter = require("./routes/contact");

app.use("/", indexRouter);
app.use("/about", aboutRouter);
app.use("/contact", contactRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
