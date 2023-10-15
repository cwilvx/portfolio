export default defineNitroPlugin((nitroApp) => {
  // For some reason, accessing NODE_ENV directly returns "prerender", despite the value being "production" or "development"
  const env = JSON.parse(JSON.stringify(process.env)).NODE_ENV;
  nitroApp.hooks.hook("content:file:afterParse", (file) => {
    if (file._draft && env === "production") {
      console.log("Mutilating draft file", file._id);
      file._id = "content:_:draft";
      file.body = {};
      file.title = "Draft";
      file._path = "/draft";
      file._dir = "/draft";
      file._empty = true;
      file.navigation = false;
    }
  });
});
