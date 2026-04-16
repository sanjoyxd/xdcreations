import Hero from '@/components/home/Hero';
import ServicesPreview from '@/components/home/ServicesPreview';
import AnimatedCounters from '@/components/home/AnimatedCounters';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Testimonials from '@/components/home/Testimonials';
import CTABanner from '@/components/ui/CTABanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <AnimatedCounters />
      <FeaturedProjects />
      <Testimonials />
      <CTABanner
        label="Ready to Build?"
        title="Let's Create Something Remarkable Together"
        subtitle="Tell us about your project and we'll get back to you within 24 hours."
        primaryCta={{ label: 'Start Your Project', href: '/contact' }}
        secondaryCta={{ label: 'View Our Portfolio', href: '/portfolio' }}
      />
    </>
  );
}
