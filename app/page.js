import DashboardLayout from "./components/dashboardlayout";
import Card from "./components/card";
import LineGraph from "./components/linegraph";
import KPI from "./components/kpi";
import StackedPie from "./components/stackedpie";

export default function Home() {
  return (
    <DashboardLayout>
      <Card rowSpan={1} colSpan={1}>
        <KPI label={"Test"} value={5} />
      </Card>
      <Card rowSpan={1} colSpan={1}>
        <KPI label={"Test"} value={5} />
      </Card>
      <Card rowSpan={1} colSpan={1}>
        <KPI label={"Test"} value={5} />
      </Card>
      <Card rowSpan={1} colSpan={1}>
        <StackedPie />
      </Card>
      <Card rowSpan={1} colSpan={2} size="large">
        <LineGraph />
      </Card>
      <Card rowSpan={2} colSpan={2}>
        Content
      </Card>
      {/* Add more cards as needed */}
    </DashboardLayout>
  );
}
