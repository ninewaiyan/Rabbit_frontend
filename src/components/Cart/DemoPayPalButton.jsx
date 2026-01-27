import React from "react";

const DemoPayPalButton = ({ amount, onSuccess, onError }) => {
  const createOrder = () => {
    return {
      id: `DEMO_ORDER_${Date.now()}`,
      purchase_units: [
        {
          amount: {
            value: parseFloat(amount).toFixed(2),
          },
        },
      ],
      status: "CREATED",
    };
  };

  const onApprove = async (order) => {
    // simulate capture
    const capturedOrder = {
      ...order,
      status: "COMPLETED",
      update_time: new Date().toISOString(),
    };

    onSuccess(capturedOrder);
  };

  const handleClick = async () => {
    try {
      const order = createOrder();
      console.log("Demo createOrder:", order);

      // simulate network delay
      setTimeout(() => {
        onApprove(order);
      }, 800);
    } catch (err) {
      console.error(err);
      onError?.(err);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full bg-black text-white py-3 rounded hover:opacity-90"
    >
      PayPal (Demo)
    </button>
  );
};

export default DemoPayPalButton;
