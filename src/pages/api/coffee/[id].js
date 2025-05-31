const coffeData = require('../data');

export default function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  if (method === 'GET') {
    const coffee = coffeData.find((item) => item.id === parseInt(id));

    if (!coffee) {
      return res.status(404).json({
        status: 'error',
        message: 'Coffee not found',
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Coffee fetched successfully',
      data: coffee,
    });
  } else {
    res.status(405).json({ status: 'error', message: 'Method Not Allowed' });
  }
}
