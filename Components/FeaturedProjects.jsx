import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <section className="section">

      <h3 className="section-title">Featured Projects</h3>

      <div className="grid-3">

        <ProjectCard
          title="Sales Performance Dashboard"
          image="/images/sales-dashboard.png"
          link="/projects#sales-dashboard"
          description="Explore insights on regional performance and revenue trends."
        />

        <ProjectCard
          title="Customer Behavior Analysis"
          image="/images/customer-analysis.png"
          link="/projects#customer-analysis"
          description="Discover purchasing patterns and customer segmentation."
        />

        <ProjectCard
          title="Predictive Modeling"
          image="/images/predictive-model.png"
          link="/projects#predictive-model"
          description="Forecast outcomes using machine learning models."
        />

      </div>

    </section>
  );
}
