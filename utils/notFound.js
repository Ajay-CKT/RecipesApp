// middleware for handling 404 errors
const notFound = (request, response, next) => {
  response.json({ message: "Route not found" });

  next();
};

module.exports = notFound;
