/**
    BASIC SERVER CONFIGURATION
**/

//@ Instantiate a basic express application
let app = (_APP = express());
app.vars = app.vars || {};

//@ Define the default port
app.port = process.env.PORT || "1357";

//@ Allow CORS in the application ( To enable MVC architecture )
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type, Access-Control-Allow-Origin, Authorization, Origin, Accept, x-auth-token"
  );
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("X-Powered-By", "@liteframe-core");
  next();
});

//@ Set HTML as the default template language
//app.engine('html', require('ejs').renderFile);
app.set("view engine", "html");

//@ Enable easy access to body parameters and uploads
app.use(express.json({ limit: "500mb" }));
app.use(
  express.urlencoded({
    extended: true,
  })
);

//@ Further simplify file uploads using the multer middleware
app.set_upload_path = (dest) => {
  return multer({ dest: dest });
};

//@ Enable file compression during transfer (to enhance loading speeds)
app.use(compression());

//@ Register the rendering engine for the templates
app.engine(".html", ejs.__express);

/**
    EO - BASIC SERVER CONFIGURATION
**/

module.exports = { app, _APP };
