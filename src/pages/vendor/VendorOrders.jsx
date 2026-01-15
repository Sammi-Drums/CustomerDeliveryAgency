const requestDriver = (orderId) => {
  setOrders(prev =>
    prev.map(order =>
      order.id === orderId
        ? { ...order, status: "AWAITING_DRIVER" }
        : order
    )
  );
};
