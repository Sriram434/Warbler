const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(App) {
  App.use(
    createProxyMiddleware(["/api", , "/otherApi"], 
		  { target: "https://warbler-msg-server.herokuapp.com/",changeOrigin: true })
	  
  );
};
