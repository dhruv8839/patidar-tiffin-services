// ============================================================
// RAZORPAY PAYMENT INTEGRATION - Patidar Tiffin Services
// ============================================================
// TO USE LIVE PAYMENTS:
//   1. Go to https://dashboard.razorpay.com/app/keys
//   2. Generate your Key ID and Key Secret
//   3. Add them as environment variables:
//      RAZORPAY_KEY_ID = rzp_live_XXXXXXXXXXXX
//      RAZORPAY_KEY_SECRET = your_secret_here
//   4. On the frontend (OrderNow.jsx), replace process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID
//      with your live key ID as well.
// ============================================================

export async function POST(request) {
  try {
    const { amount, name, mobile, address, plan } = await request.json();

    if (!amount || !name || !mobile || !address || !plan) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // -------------------------------------------------------
    // PASTE YOUR RAZORPAY KEYS BELOW (or set as env variables)
    // -------------------------------------------------------
    const RAZORPAY_KEY_ID =
      process.env.RAZORPAY_KEY_ID || "YOUR_RAZORPAY_KEY_ID";
    const RAZORPAY_KEY_SECRET =
      process.env.RAZORPAY_KEY_SECRET || "YOUR_RAZORPAY_KEY_SECRET";
    // -------------------------------------------------------

    const credentials = Buffer.from(
      `${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`,
    ).toString("base64");

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
      throw new Error(
        err.error?.description || "Failed to create Razorpay order",
      );
    }

    const order = await response.json();

    return Response.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error("Razorpay route error:", error);
    return Response.json(
      { error: error.message || "Internal server error" },
      { status: 500 },
    );
  }
}
