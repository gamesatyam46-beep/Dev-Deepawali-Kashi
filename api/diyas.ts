export default function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const diya = req.body;
    return res.status(200).json({
      success: true,
      diya: {
        id: `diya-${Date.now()}`,
        ...diya,
        timestamp: new Date().toISOString()
      }
    });
  }
  return res.status(200).json({ status: 'ok', diyasCount: 1000000 });
}
