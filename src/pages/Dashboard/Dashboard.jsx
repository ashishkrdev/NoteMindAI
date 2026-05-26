import DashboardPreview from '../../components/DashboardPreview/DashboardPreview.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';

function Dashboard() {
  return (
    <>
      <Navbar />
      <main className="dashboard-route">
        <div className="container">
          <DashboardPreview expanded />
        </div>
      </main>
    </>
  );
}

export default Dashboard;
