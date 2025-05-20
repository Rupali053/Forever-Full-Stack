// import nodemailer from "nodemailer";

// const sendOrderMail = async (toEmail, userName, orderDetails) => {
//     try {
//         const transporter = nodemailer.createTransport({
//             service: "gmail", // or use custom SMTP
//             auth: {
//                 user: process.env.EMAIL_USER,
//                 pass: process.env.EMAIL_PASS,
//             },
//         });

//         const itemList = orderDetails.items.map(
//             (item) => `${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}`
//         ).join("<br>");

//         const mailOptions = {
//             from: `"Forever" <${process.env.EMAIL_USER}>`,
//             to: toEmail,
//             subject: "🎉 Order Placed Successfully!",
//             html: `
//                 <h2>Hi ${userName},</h2>
//                 <p>Thank you for your order! Here are your order details:</p>
//                 <p><strong>Order ID:</strong> ${orderDetails.id}</p>
//                 <p><strong>Items:</strong><br>${itemList}</p>
//                 <p><strong>Total Amount:</strong> ₹${orderDetails.amount}</p>
//                 <p><strong>Payment Method:</strong> ${orderDetails.paymentMethod}</p>
//                 <br>
//                 <p>We’ll notify you once your order is shipped.</p>
//                 <p>Thank you for shopping with us!</p>
//                 <p>- Forever Team</p>
//             `,
//         };

//         await transporter.sendMail(mailOptions);
//         console.log("✅ Order confirmation email sent to:", toEmail);
//     } catch (error) {
//         console.error("❌ Failed to send order mail:", error.message);
//     }
// };

// export default sendOrderMail;













import nodemailer from "nodemailer";

const sendOrderMail = async (toEmail, userName, orderDetails) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const itemListHtml = orderDetails.items.map(
            (item) => `
                <tr>
                    <td style="padding: 8px; border-bottom: 1px solid #ddd;">${item.name}</td>
                    <td style="padding: 8px; text-align: center; border-bottom: 1px solid #ddd;">${item.quantity}</td>
                    <td style="padding: 8px; text-align: right; border-bottom: 1px solid #ddd;">₹${item.price * item.quantity}</td>
                </tr>`
        ).join("");

        const mailOptions = {
            from: `"Forever Store 🛍️" <${process.env.EMAIL_USER}>`,
            to: toEmail,
            subject: "✅ Your Forever Order is Confirmed!",
            html: `
                <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 30px;">
                    <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; padding: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
                        <h2 style="color: #4CAF50;">Hi ${userName} 👋,</h2>
                        <p style="font-size: 16px;">🎉 <strong>Thank you for your order!</strong> Your items are being prepared. Here's what you ordered:</p>

                        <p style="font-size: 15px;"><strong>🆔 Order ID:</strong> <span style="color: #555;">${orderDetails.id}</span></p>

                        <table style="width:100%; border-collapse: collapse; margin-top: 10px; background-color: #fafafa;">
                            <thead>
                                <tr style="background-color: #f1f1f1;">
                                    <th style="padding: 10px; text-align: left; border-bottom: 2px solid #ddd;">Item</th>
                                    <th style="padding: 10px; text-align: center; border-bottom: 2px solid #ddd;">Qty</th>
                                    <th style="padding: 10px; text-align: right; border-bottom: 2px solid #ddd;">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${itemListHtml}
                            </tbody>
                        </table>

                        <p style="font-size: 15px; margin-top: 20px;"><strong>💰 Total Amount:</strong> <span style="color: #000;">₹${orderDetails.amount}</span></p>
                        <p style="font-size: 15px;"><strong>💳 Payment Method:</strong> ${orderDetails.paymentMethod}</p>

                        <p style="font-size: 15px; margin-top: 30px;">🚚 We’ll notify you as soon as your order is shipped.</p>
                        <p style="font-size: 15px;">If you have any questions, feel free to reach out.</p>

                        <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">

                        <p style="font-size: 14px; color: #666;">Thanks for shopping with <strong style="color: #4CAF50;">Forever</strong> 💚</p>
                        <p style="font-size: 14px; color: #666;">– The Forever Team</p>
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);
        console.log("✅ Order confirmation email sent to:", toEmail);
    } catch (error) {
        console.error("❌ Failed to send order email:", error.message);
    }
};

export default sendOrderMail;
