export async function login(req, res) {
  console.log(req.method);
  res.render("user/login");
}
