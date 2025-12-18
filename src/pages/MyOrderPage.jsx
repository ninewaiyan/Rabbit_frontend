import React, { useEffect, useState } from "react";
import { FaShippingFast } from "react-icons/fa";

const MyOrderPage = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    //Simulate fetching orders
    setTimeout(() => {
      const mockOrders = [
        {
          _id: "12345",
          createdAt: new Date(),
          shippingAddress: { city: "New York", country: "USA" },
          orderItems: [
            {
              name: "Product 1",
              image: "https://picsum.photos/200/300?random=1",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },

        {
          _id: "23456",
          createdAt: new Date(),
          shippingAddress: { city: "New York", country: "USA" },
          orderItems: [
            {
              name: "Product 2",
              image: "https://picsum.photos/200/300?random=2",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
      ];
      setOrders(mockOrders);
    },1000);
  },[]);
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-6">
            My Orders
        </h2>
        <div className="relative shadow-md sm:rounded-lg">

        </div>
    </div>
  );
};

export default MyOrderPage;
