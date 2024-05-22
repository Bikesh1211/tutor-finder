const http = require("http");
const PORT = 2003;
const fs = require("fs");
const paths = require("path");
const userService = require("./src/services/user.service");
const {
  getUsers,
  registerUser,
  loginUser,
  getTutor,
} = require("./src/controller/users");
const RouteHandler = require("./src/routes/users");
const url = require("url");
const qs = require("querystring");
const { addNewsFeed, getFeeds } = require("./src/controller/newsFeed");
const {
  addOnlineClass,
  getOnlineClass,
} = require("./src/controller/OnlineClass");
const onRequest = async (req, res) => {
  const { method } = req;
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
  });

  res.setHeader("Access-Control-Allow-Origin", "*");
  req.on("end", async () => {
    req.body = qs.parse(body);

    // if (method === "OPTIONS") {
    //   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    //   res.setHeader(
    //     "Access-Control-Allow-Headers",
    //     "Content-Type, Content-Range, Content-Disposition, Content-Description"
    //   );
    //   res.end();
    // } else {
    //   if (method === "GET" && req.url === "/") {
    //     res.setHeader("Content-Type", "text/html");
    //     const filePath = paths.join(__dirname, "./public/template/index.html");
    //     try {
    //       const htmlContent = fs.readFileSync(filePath, "utf8");
    //       res.writeHead(200);
    //       res.end(htmlContent);
    //     } catch (error) {
    //       console.error("Error reading HTML file:", error);
    //       res.writeHead(500);
    //       res.end("Internal Server Error");
    //     }
    //   }

    //   if (method === "GET" && req.url === "/users") {
    //     res.writeHead(200, { "Content-Type": "application/json" });
    //     await getUsers(req, res);
    //   }

    //   if (method === "POST" && req.url === "/login") {
    //     res.writeHead(200, { "Content-Type": "application/json" });
    //     await loginUser(req, res);
    //   }

    //   if (method === "POST" && req.url === "/register") {
    //     res.writeHead(200, { "Content-Type": "application/json" });
    //     await registerUser(req, res);
    //   }

    //   if (method === "POST" && req.url === "/feeds") {
    //     if (req.url === "/online-class") {
    //       res.writeHead(200, { "Content-Type": "application/json" });
    //       await addOnlineClass(req, res);
    //     } else {
    //       await addNewsFeed(req, res);
    //     }
    //   }

    //   if (method === "GET" && req.url === "/feeds") {
    //     res.writeHead(200, { "Content-Type": "application/json" });
    //     await getFeeds(req, res);
    //   }

    //   if (method === "GET" && req.url === "/online-class") {
    //     res.writeHead(200, { "Content-Type": "application/json" });
    //     await getOnlineClass(req, res);
    //   }

    //   if (method === "GET" && req.url === "/tutor") {
    //     res.writeHead(200, { "Content-Type": "application/json" });
    //     await getTutor(req, res);
    //   }

    //   if (
    //     !(method === "GET" && req.url === "/") &&
    //     !(method === "GET" && req.url === "/users") &&
    //     !(method === "POST" && req.url === "/login") &&
    //     !(method === "POST" && req.url === "/register") &&
    //     !(method === "POST" && req.url === "/feeds") &&
    //     !(method === "GET" && req.url === "/feeds") &&
    //     !(method === "GET" && req.url === "/online-class") &&
    //     !(method === "GET" && req.url === "/tutor")
    //   ) {
    //     res.writeHead(404);
    //     res.end(JSON.stringify({ error: "Not Found" }));
    //   }
    // }

    if (method === "OPTIONS") {
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Content-Range, Content-Disposition, Content-Description"
      );
      res.end();
    } else if (method === "GET" && req.url === "/") {
      res.setHeader("Content-Type", "text/html");
      const filePath = paths.join(__dirname, "./public/template/index.html");
      try {
        const htmlContent = fs.readFileSync(filePath, "utf8");
        res.writeHead(200);
        res.end(htmlContent);
      } catch (error) {
        console.error("Error reading HTML file:", error);
        res.writeHead(500);
        res.end("Internal Server Error");
      }
    } else if (method === "GET" && req.url === "/users") {
      res.writeHead(200, { "Content-Type": "application/json" });
      await getUsers(req, res);
    } else if (method === "POST" && req.url === "/login") {
      res.writeHead(200, { "Content-Type": "application/json" });
      await loginUser(req, res);
    } else if (method === "POST" && req.url === "/register") {
      res.writeHead(200, { "Content-Type": "application/json" });
      await registerUser(req, res);
    } else if (method === "POST" && req.url === "/feeds") {
      res.writeHead(200, { "Content-Type": "application/json" });
      await addNewsFeed(req, res);
    } else if (method === "GET" && req.url === "/feeds") {
      res.writeHead(200, { "Content-Type": "application/json" });
      await getFeeds(req, res);
    } else if (method === "GET" && req.url === "/tutor") {
      res.writeHead(200, { "Content-Type": "application/json" });
      await getTutor(req, res);
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Not Found" }));
    }
  });
};

const handleRoutes = (route, type, contentType, req, res) => {};

const serverRunning = () => {
  console.log("server listening on port" + PORT);
};

http.createServer(onRequest).listen(PORT, serverRunning);
