export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  const { password } = req.body || {};

  if (!process.env.DELETE_PASSWORD) {
    return res.status(500).json({
      success: false,
      message: "Server password is not configured"
    });
  }

  if (
    typeof password !== "string" ||
    password !== process.env.DELETE_PASSWORD
  ) {
    return res.status(401).json({
      success: false,
      message: "गलत पासवर्ड"
    });
  }

  return res.status(200).json({
    success: true,
    message: "पासवर्ड सही है"
  });
}
