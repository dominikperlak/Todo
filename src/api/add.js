export default async (req, res) => {
    if (!req.query.todo) {
      return res.status(400).send("todo parameter required.");
    }
    let todo = encodeURI(req.query.todo);
  
    const token = "REPLACE_YOUR_TOKEN";
    const url =
      "eu2-fancy-hen-30331.upstash.io" + todo + "?_token=" + token;
  
    return fetch(url)
      .then((r) => r.json())
      .then((data) => {
        let result = JSON.stringify(data.result);
        return res.status(200).json(result);
      });
  };