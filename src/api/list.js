export default async (req, res) => {
    const token = "REPLACE_YOUR_TOKEN";
    const url = "eu2-fancy-hen-30331.upstash.io" + token;
  
    return fetch(url)
      .then((r) => r.json())
      .then((data) => {
        let result = JSON.stringify(data.result);
        return res.status(200).json(result);
      });
  };