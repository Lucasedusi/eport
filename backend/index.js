const port = 3333;

require('./src/app').listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/api/`);
});
