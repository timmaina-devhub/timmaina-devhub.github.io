import ProjectCard from "@/components/ProjectCard";
import ProjectDetail from "@/components/ProjectDetail";

export default function Projects() {
  return (
    <main className="page-container">

      {/* GRID */}
      <section className="section">
        <h1 className="section-title">Projects</h1>

        <div className="projects-grid">

          <ProjectCard
            title="Sales Dashboard"
            image="/images/sales-dashboard.png"
            link="#sales-dashboard"
            description="Interactive sales insights dashboard"
          />

          <ProjectCard
            title="Customer Analysis"
            image="/images/customer-analysis.png"
            link="#customer-analysis"
            description="Customer segmentation and behavior"
          />

          <ProjectCard
            title="Predictive Model"
            image="/images/predictive-model.png"
            link="#predictive-model"
            description="Machine learning forecasting"
          />

        </div>
      </section>

      {/* DETAILS */}
      <ProjectDetail
        id="sales-dashboard"
        title="Sales Performance Dashboard"
        image="/images/sales-dashboard.png"
        problem="Lack of centralized sales insights."
        tools="Tableau, Excel"
        results="Identified key revenue drivers and regional trends."
        github="#"
        demo="#"
      />

      <ProjectDetail
        id="customer-analysis"
        title="Customer Behavior Analysis"
        image="/images/customer-analysis.png"
        problem="Limited visibility into customer patterns."
        tools="Python, Tableau"
        results="Identified key customer segments."
        github="#"
        demo="#"
      />

    </main>
  );
}
