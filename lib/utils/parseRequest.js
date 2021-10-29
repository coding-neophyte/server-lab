module.exports = rawRequest => {
  const parseRequest = rawRequest.split('\r\n\r\n');
  const [method, path] = parseRequest[0].split(' ');
  const body = parseRequest[1];
  return { method, path, body };



};

//test passing
