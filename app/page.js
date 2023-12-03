import DashboardLayout from "./components/dashboardlayout";
import Card from "./components/card";
import LineGraph from "./components/linegraph";

export default function Home() {
  const Row = ({ children }) => {
    return <div className="flex flex-col md:flex-row -mx-4">{children}</div>;
  };

  return (
    <DashboardLayout>
      <Card rowSpan={1} colSpan={1}>
        Card 2 Content
      </Card>
      <Card rowSpan={1} colSpan={2} size="large" style={{ minWidth: "1000px" }}>
        <LineGraph />
      </Card>
      {/* Add more cards as needed */}
    </DashboardLayout>
  );
}
