const cheerio = require("cheerio");

export default async (req, res) => {
  if (req.method === "POST") {
    const productName = req.body.productName;

    try {
      const response = await fetch(
        `https://daraz.com.np/products/${productName}`
      );
      const htmlString = await response.text();
      const $ = cheerio.load(htmlString);
      const searchPrice = `<span class=" pdp-price pdp-price_type_normal pdp-price_color_orange pdp-price_size_xl">Rs. 1,015</span>`; //xpath
      const productPrice = $(searchPrice).text().match(/[0-9]/gi).join("");
      res.statusCode = 200;
      return res.json({
        productName: productName,
        price: Number(productPrice),
      });
    } catch (e) {
      res.statusCode = 404;
      return res.json({
        product: productName,
        error: `${productName} is not available.`,
      });
    }
  }
};
