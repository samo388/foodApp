export async function fetchDashboardData() {
  // Simulate API delay
  await new Promise((res) => setTimeout(res, 800));

  return {
    kpis: [
      {
        title: "Orders",
        value: 128,
        trend: "success",
      },
      {
        title: "Revenue",
        value: "24,500 EGP",
        trend: "success",
      },
      {
        title: "Users",
        value: 312,
        trend: "warning",
      },
    ],

    latestOrders: [
      {
        id: 1,
        customer: "Ahmed",
        total: 320,
        status: "Completed",
      },
      {
        id: 2,
        customer: "Mona",
        total: 210,
        status: "Pending",
      },
      {
        id: 3,
        customer: "Omar",
        total: 450,
        status: "Completed",
      },
    ],

    popularFoods: [
      {
        id: 1,
        name: "Burger",
        orders: 52,
      },
      {
        id: 2,
        name: "Pizza",
        orders: 41,
      },
      {
        id: 3,
        name: "Pasta",
        orders: 29,
      },
    ],
  };
}
