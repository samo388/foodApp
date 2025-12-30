import PageLayout from "../components/layout/PageLayout";
import PromoBanner from "../components/dashboard/PromoBanner";
import { CategoryCard } from "../components/dashboard/CategoryCard";
import DishCard from "../components/dashboard/DishCard";
import { OrderSummary } from "../components/dashboard/OrderSummary";
import { RecentOrders } from "../components/dashboard/RecentOrders";
import { Skeleton } from "../components/ui/Skeleton";
import useDashboard from "../hooks/useDashboard";

export default function Dashboard() {
  const { data, isLoading, error } = useDashboard();

  if (isLoading) return <Skeleton height={300} />;
  if (error) return <p>Failed to load dashboard</p>;

  return (
    <PageLayout>
      <PromoBanner />

      {/* Categories */}
      <section>
        <h3>Browse by Category</h3>
        <div className="grid">
          {data.categories?.map((cat) => (
            <CategoryCard key={cat} title={cat} />
          ))}
        </div>
      </section>

      {/* Popular Dishes */}
      <section>
  <h3>Popular Dishes</h3>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
      gap: 16,
    }}
  >
    <DishCard />
    <DishCard />
    <DishCard />
  </div>
</section>
      <OrderSummary />
      <RecentOrders orders={data.latestOrders} />
    </PageLayout>
  );
}
