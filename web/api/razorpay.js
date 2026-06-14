export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { amount, name, mobile, address, plan } = req.body;

    if (!amount || !name || !mobile || !address || !plan) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID || "YOUR_RAZORPAY_KEY_ID";
    const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || "YOUR_RAZORPAY_KEY_SECRET";

    const credentials = Buffer.from(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`).toString("base64");

    const response = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${credentials}`,
      },
      body: JSON.stringify({
        amount: amount * 100, // Razorpay expects amount in paise (1 INR = 100 paise)
        currency: "INR",
        receipt: `tiffin_${Date.now()}`,
        notes: {
          customer_name: name,
          mobile: mobile,
          address: address,
          plan: plan,
        },
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      console.error("Razorpay API error:", err);
      throw new Error(err.error?.description || "Failed to create Razorpay order");
    }

    const order = await response.json();

    return res.status(200).json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error("Razorpay route error:", error);
    return res.status(500).json({ error: error.message || "Internal server error" });
  }
}
