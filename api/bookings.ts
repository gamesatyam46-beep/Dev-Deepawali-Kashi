export default function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const booking = req.body;
    return res.status(200).json({
      success: true,
      booking: {
        ...booking,
        bookingRef: `KASHI-DD26-${Math.floor(100000 + Math.random() * 900000)}`,
        createdAt: new Date().toISOString(),
        status: 'Confirmed & VIP Pass Issued',
        qrPayload: `DEV-DEEPAWALI-2026|${booking.guestName || 'Guest'}|${booking.tierId || 'Boat Pass'}`
      }
    });
  }
  return res.status(200).json({ message: 'Booking API ready' });
}
