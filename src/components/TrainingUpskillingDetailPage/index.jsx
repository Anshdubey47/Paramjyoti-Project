import TrainingHero from "./TrainingHero";
import TrainingTabs from "./TrainingTabs";
import CourseOverview from "./CourseOverview";
import LearningOutcomes from "./LearningOutcomes";
import CurriculumBreakdown from "./CurriculumBreakdown";
import PricingPlans from "./PricingPlans";
import Testimonials from "./Testimonials";

const TrainingUpskillingDetailPage = () => {
  return (
    <>
      <div className="mx-auto px-6">
      <TrainingHero />
      <TrainingTabs />
      <CourseOverview />
      <LearningOutcomes />
      <CurriculumBreakdown />
      <PricingPlans />
      <Testimonials />
      </div>
    </>
  );
};

export default TrainingUpskillingDetailPage;
