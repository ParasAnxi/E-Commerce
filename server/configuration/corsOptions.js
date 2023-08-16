const whiteList = [
  "https://www.google.com",
  "http://127.0.0.1:5500",
  "http://localhost:3000",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by cors"));
    }
  },
  optionsSuccessStatus: 200,
};

export default corsOptions;