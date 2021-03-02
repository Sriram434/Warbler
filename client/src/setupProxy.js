const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(App) {
  App.use(
    createProxyMiddleware(["/api", , "/otherApi"], 
		  { target: "http://warbler-server-fun.herokuapp.com/api",changeOrigin: true })
	  
  );
};
