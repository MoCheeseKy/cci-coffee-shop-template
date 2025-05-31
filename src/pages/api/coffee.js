const coffeData = require('./data');

export default function handler(req, res) {
  if (req.method === 'GET') {
    let { category } = req.query;

    if (category) {
      category = category.replace(/"/g, '').trim();
    }

    const filteredData = category
      ? coffeData.filter(
          (item) => item.category.toLowerCase() === category.toLowerCase()
        )
      : coffeData;

    res.status(200).json({
      status: 'success',
      message: category
        ? `Coffee list filtered by category: ${category}`
        : 'Coffee list fetched successfully',
      data: filteredData,
    });
  } else {
    res.status(405).json({ status: 'error', message: 'Method Not Allowed' });
  }
}
