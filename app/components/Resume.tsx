import { cn } from "@/lib/utils";

interface ResumeProps {
  className?: string;
}

export default function Resume({ className }: ResumeProps) {
  return (
    <div
      className={cn(
        "max-w-5xl mx-auto p-8 bg-card text-card-foreground rounded-lg shadow-sm",
        className,
      )}
    >
      {/* Header using the same grid as experience section */}
      <div className="grid grid-cols-4 gap-8 mb-12">
        {/* Column 1 - Name */}
        <div>
          <h1 className="text-3xl font-bold">Babar Javaid</h1>
        </div>

        {/* Column 2 - Title and Contact (spans 3 columns) */}
        <div className="col-span-3 grid grid-cols-4">
          {/* Title taking 3 columns */}
          <div className="col-span-3">
            <p className="text-lg">Principal Software Architect</p>
          </div>
          {/* Contact taking 1 column */}
          <div className="text-sm space-y-1">
            <p>javaidbabar@gmail.com</p>
            <p>+923234361373</p>
            <p>linkedin.com/in/javaidbabar</p>
          </div>
        </div>
      </div>

      {/* Profile Summary Section */}
      <div className="grid grid-cols-4 gap-8 mb-12">
        <div>
          <h2 className="text-xl font-semibold">PROFILE</h2>
        </div>
        <div className="col-span-3">
          <p className="text-sm">
            Principal Software Architect with 20+ years of experience in
            designing and implementing large-scale distributed systems. Proven
            track record of leading technical transformation initiatives and
            building high-performing engineering teams. Expert in cloud
            architecture, microservices, and enterprise integration patterns
            with a focus on scalable, resilient solutions.
          </p>
        </div>
      </div>

      {/* Experience Section - 2 columns (25%/75% split) */}
      <div className="grid grid-cols-4 gap-8">
        {/* Column 1 - Heading */}
        <div>
          <h2 className="text-xl font-semibold">EXPERIENCE</h2>
        </div>

        {/* Column 2 - Experience Details (spans 3 columns) */}
        <div className="col-span-3 space-y-8">
          {/* Experience 1 */}
          <div>
            {/* Company and Duration row */}
            <div className="grid grid-cols-4 mb-1">
              <h3 className="text-lg font-medium col-span-3">Company Name</h3>
              <p className="text-sm text-muted-foreground">
                Jan 2022 - Present
              </p>
            </div>
            <p className="text-base text-muted-foreground mb-2">
              Senior Product Designer
            </p>
            <ul className="text-sm space-y-1">
              <li>
                • Led the redesign of core product features resulting in 40%
                increase in user engagement
              </li>
              <li>
                • Established and maintained the company&apos;s first design system
              </li>
              <li>
                • Mentored junior designers and facilitated design thinking
                workshops
              </li>
            </ul>
          </div>

          {/* Experience 2 */}
          <div>
            {/* Company and Duration row */}
            <div className="grid grid-cols-4 mb-1">
              <h3 className="text-lg font-medium col-span-3">
                Previous Company
              </h3>
              <p className="text-sm text-muted-foreground">
                Mar 2020 - Dec 2021
              </p>
            </div>
            <p className="text-base text-muted-foreground mb-2">
              Product Designer
            </p>
            <ul className="text-sm space-y-1">
              <li>
                • Collaborated with product and engineering teams to launch 5
                major features
              </li>
              <li>
                • Conducted user research and usability testing with over 100
                participants
              </li>
              <li>
                • Improved conversion rates by 25% through data-driven design
                iterations
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="grid grid-cols-4 gap-8 mt-12 mb-12">
        <div>
          <h2 className="text-xl font-semibold">EDUCATION</h2>
        </div>
        <div className="col-span-3 space-y-6">
          <div>
            <div className="grid grid-cols-4 mb-1">
              <h3 className="text-lg font-medium col-span-3">
                University Name
              </h3>
              <p className="text-sm text-muted-foreground">2016 - 2020</p>
            </div>
            <p className="text-base text-muted-foreground">
              Bachelor of Design
            </p>
          </div>
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="grid grid-cols-4 gap-8 mb-12">
        <div>
          <h2 className="text-xl font-semibold">TECHNICAL SKILLS</h2>
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-base font-medium mb-2">
                Architecture & Design
              </h3>
              <ul className="text-sm space-y-1">
                <li>• Microservices Architecture</li>
                <li>• Domain-Driven Design</li>
                <li>• Event-Driven Architecture</li>
                <li>• Cloud-Native Architecture</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-medium mb-2">Technologies</h3>
              <ul className="text-sm space-y-1">
                <li>• Java/Spring, Node.js, .NET Core</li>
                <li>• AWS, Azure, GCP</li>
                <li>• Kubernetes, Docker</li>
                <li>• CI/CD, DevOps</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership & Certifications */}
      <div className="grid grid-cols-4 gap-8 mb-12">
        <div>
          <h2 className="text-xl font-semibold">LEADERSHIP & CERTIFICATIONS</h2>
        </div>
        <div className="col-span-3 space-y-4">
          <div>
            <h3 className="text-base font-medium mb-2">Leadership</h3>
            <ul className="text-sm space-y-1">
              <li>• Technical Advisory Board Member</li>
              <li>• Enterprise Architecture Review Committee Lead</li>
              <li>• Mentored 50+ senior engineers to architect positions</li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-medium mb-2">Certifications</h3>
            <ul className="text-sm space-y-1">
              <li>• AWS Solutions Architect Professional</li>
              <li>• Google Cloud Professional Architect</li>
              <li>• TOGAF 9.2 Certified</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Achievements Section */}
      <div className="grid grid-cols-4 gap-8 mb-12">
        <div>
          <h2 className="text-xl font-semibold">KEY ACHIEVEMENTS</h2>
        </div>
        <div className="col-span-3">
          <ul className="text-sm space-y-2">
            <li>
              • Led digital transformation of a Fortune 500 company, resulting
              in $50M annual cost savings
            </li>
            <li>
              • Designed cloud migration strategy affecting 200+ applications
              and 1000+ servers
            </li>
            <li>
              • Established enterprise architecture practice and governance
              framework across 5 business units
            </li>
            <li>
              • Published 3 technical papers on distributed systems architecture
            </li>
          </ul>
        </div>
      </div>

      {/* Projects Section */}
      <div className="grid grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-semibold">PROJECTS</h2>
        </div>
        <div className="col-span-3 space-y-8">
          <div>
            <div className="grid grid-cols-4 mb-1">
              <h3 className="text-lg font-medium col-span-3">
                E-commerce Redesign
              </h3>
              <p className="text-sm text-muted-foreground">2023</p>
            </div>
            <ul className="text-sm space-y-1">
              <li>
                • Led end-to-end redesign of an e-commerce platform serving 1M+
                users
              </li>
              <li>
                • Improved checkout conversion rate by 35% through streamlined
                UX
              </li>
              <li>
                • Implemented new design system reducing development time by 40%
              </li>
            </ul>
          </div>
          <div>
            <div className="grid grid-cols-4 mb-1">
              <h3 className="text-lg font-medium col-span-3">
                Mobile Banking App
              </h3>
              <p className="text-sm text-muted-foreground">2022</p>
            </div>
            <ul className="text-sm space-y-1">
              <li>
                • Designed a new mobile banking experience for a fintech startup
              </li>
              <li>
                • Achieved 4.8/5 App Store rating within first month of launch
              </li>
              <li>
                • Reduced customer support tickets by 45% through intuitive UI
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
