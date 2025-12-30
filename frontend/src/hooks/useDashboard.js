import { useQuery } from "@tanstack/react-query";
import { fetchDashboardData } from "../services/dashboardService";

export default function useDashboard() {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: fetchDashboardData,
  });
}
