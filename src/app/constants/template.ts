export const templates = [
  { id: 'blank', label: 'Blank Document', imageUrl: '/blank-document.svg', initialContent: '' },
  {
    id: 'software-proposal',
    label: 'Software Development Proposal',
    imageUrl: '/software-proposal.svg',
    initialContent: `
      <section style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; color: #2c3e50; max-width: 800px; margin: auto; background-color: #f9f9f9; border-radius: 12px; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);">
        <header style="text-align: center; margin-bottom: 40px;">
          <h1 style="font-size: 2.5rem; margin: 0; color: #1e1e2f;">Software Development Proposal</h1>
          <p style="font-size: 1rem; color: #555;">Prepared for: <strong>[Client Name]</strong></p>
          <p style="font-size: 1rem; color: #555;">Date: <strong>[Proposal Date]</strong></p>
        </header>
  
        <section style="margin-bottom: 32px;">
          <h2 style="font-size: 1.5rem; color: #1e1e2f;">Project Overview</h2>
          <p style="font-size: 1rem; line-height: 1.6;">
            We propose a comprehensive software solution to address the business needs of [Client Company]. This project includes design, development, testing, and deployment of a scalable and user-friendly software product tailored to your requirements.
          </p>
        </section>
  
        <section style="margin-bottom: 32px;">
          <h2 style="font-size: 1.5rem; color: #1e1e2f;">Goals & Objectives</h2>
          <ul style="padding-left: 20px; line-height: 1.6;">
            <li>Streamline internal operations and enhance efficiency.</li>
            <li>Deliver a modern, responsive user interface.</li>
            <li>Ensure scalable backend architecture.</li>
            <li>Maintain high standards of security and performance.</li>
          </ul>
        </section>
  
        <section style="margin-bottom: 32px;">
          <h2 style="font-size: 1.5rem; color: #1e1e2f;">Deliverables</h2>
          <ol style="padding-left: 20px; line-height: 1.6;">
            <li>Detailed UI/UX mockups.</li>
            <li>Fully functional software product (MVP).</li>
            <li>API documentation and user guide.</li>
            <li>Support and maintenance plan.</li>
          </ol>
        </section>
  
        <section style="margin-bottom: 32px;">
          <h2 style="font-size: 1.5rem; color: #1e1e2f;">Timeline</h2>
          <p style="line-height: 1.6;">
            The estimated timeline for project completion is <strong>[X weeks/months]</strong>, broken down into the following phases:
          </p>
          <ul style="padding-left: 20px; line-height: 1.6;">
            <li><strong>Discovery & Planning:</strong> 1 week</li>
            <li><strong>Design & Prototyping:</strong> 2 weeks</li>
            <li><strong>Development:</strong> 4 weeks</li>
            <li><strong>Testing & Deployment:</strong> 2 weeks</li>
          </ul>
        </section>
  
        <section style="margin-bottom: 32px;">
          <h2 style="font-size: 1.5rem; color: #1e1e2f;">Cost Estimate</h2>
          <p style="line-height: 1.6;">
            The total cost for the project is estimated at <strong>$[Amount]</strong>, including design, development, testing, and deployment.
          </p>
        </section>
  
        <footer style="text-align: center; margin-top: 40px; font-size: 0.9rem; color: #888;">
          <p>Thank you for the opportunity to present this proposal.</p>
          <p>We look forward to collaborating with you.</p>
          <p><strong>[Your Company Name]</strong></p>
        </footer>
      </section>
    `,
  },
  {
    id: 'project-proposal',
    label: 'Project Proposal',
    imageUrl: '/project-proposal.svg',
    initialContent: `
      <section style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; color: #2c3e50; max-width: 800px; margin: auto; background-color: #fdfdfd; border-radius: 12px; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);">
        <header style="text-align: center; margin-bottom: 40px;">
          <h1 style="font-size: 2.5rem; margin: 0; color: #1a1a2e;">Project Proposal</h1>
          <p style="font-size: 1rem; color: #555;">Prepared for: <strong>[Client Name]</strong></p>
          <p style="font-size: 1rem; color: #555;">Date: <strong>[Proposal Date]</strong></p>
        </header>
  
        <section style="margin-bottom: 32px;">
          <h2 style="font-size: 1.5rem; color: #1a1a2e;">Executive Summary</h2>
          <p style="font-size: 1rem; line-height: 1.6;">
            This proposal outlines the strategy, scope, and implementation plan for the [Project Title]. Our goal is to deliver a high-quality solution that meets your organizational goals and creates long-term value.
          </p>
        </section>
  
        <section style="margin-bottom: 32px;">
          <h2 style="font-size: 1.5rem; color: #1a1a2e;">Project Scope</h2>
          <ul style="padding-left: 20px; line-height: 1.6;">
            <li>Define and document project requirements.</li>
            <li>Design user experience and interfaces.</li>
            <li>Develop and test core functionality.</li>
            <li>Deploy to production and provide training/support.</li>
          </ul>
        </section>
  
        <section style="margin-bottom: 32px;">
          <h2 style="font-size: 1.5rem; color: #1a1a2e;">Objectives</h2>
          <p style="line-height: 1.6;">
            The primary objectives of this project include:
          </p>
          <ol style="padding-left: 20px; line-height: 1.6;">
            <li>Solving key business challenges through technology.</li>
            <li>Improving operational efficiency and productivity.</li>
            <li>Providing measurable outcomes and KPIs.</li>
          </ol>
        </section>
  
        <section style="margin-bottom: 32px;">
          <h2 style="font-size: 1.5rem; color: #1a1a2e;">Timeline</h2>
          <ul style="padding-left: 20px; line-height: 1.6;">
            <li><strong>Phase 1 – Planning:</strong> 1 week</li>
            <li><strong>Phase 2 – Design:</strong> 2 weeks</li>
            <li><strong>Phase 3 – Development:</strong> 4 weeks</li>
            <li><strong>Phase 4 – QA & Deployment:</strong> 2 weeks</li>
          </ul>
        </section>
  
        <section style="margin-bottom: 32px;">
          <h2 style="font-size: 1.5rem; color: #1a1a2e;">Budget Estimate</h2>
          <p style="line-height: 1.6;">
            The total estimated budget for this project is <strong>$[Estimated Amount]</strong>, including all phases from planning to deployment.
          </p>
        </section>
  
        <section style="margin-bottom: 32px;">
          <h2 style="font-size: 1.5rem; color: #1a1a2e;">Next Steps</h2>
          <p style="line-height: 1.6;">
            Upon approval, we will proceed with formal agreements and initiate the planning phase. We’re committed to collaborating closely with your team to ensure project success.
          </p>
        </section>
  
        <footer style="text-align: center; margin-top: 40px; font-size: 0.9rem; color: #888;">
          <p>We appreciate the opportunity to submit this proposal.</p>
          <p><strong>[Your Company Name]</strong> | [Your Contact Info]</p>
        </footer>
      </section>
    `,
  },
  {
    id: 'business-letter',
    label: 'Business Letter',
    imageUrl: '/business-letter.svg',
    initialContent: `
      <section style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; color: #2e2e2e; max-width: 700px; margin: auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);">
        <header style="margin-bottom: 30px;">
          <p style="margin: 0; font-size: 1rem;">[Your Name]</p>
          <p style="margin: 0; font-size: 1rem;">[Your Position]</p>
          <p style="margin: 0; font-size: 1rem;">[Company Name]</p>
          <p style="margin: 0; font-size: 1rem;">[Company Address]</p>
          <p style="margin-top: 10px; font-size: 1rem;">[Email Address] | [Phone Number]</p>
        </header>
  
        <p style="font-size: 1rem; margin-bottom: 30px;"><strong>Date:</strong> [Letter Date]</p>
  
        <section style="margin-bottom: 30px;">
          <p style="margin: 0; font-size: 1rem;"><strong>To:</strong></p>
          <p style="margin: 0; font-size: 1rem;">[Recipient's Name]</p>
          <p style="margin: 0; font-size: 1rem;">[Recipient's Position]</p>
          <p style="margin: 0; font-size: 1rem;">[Recipient's Company]</p>
          <p style="margin: 0; font-size: 1rem;">[Recipient's Address]</p>
        </section>
  
        <main style="margin-bottom: 30px;">
          <p style="font-size: 1rem; line-height: 1.7;">
            Dear [Recipient's Name],
          </p>
          <p style="font-size: 1rem; line-height: 1.7;">
            I am writing to [state the purpose of your letter clearly and concisely—e.g., follow up on a meeting, request information, offer a proposal, or express appreciation].
          </p>
          <p style="font-size: 1rem; line-height: 1.7;">
            [Include any relevant background or context. Keep the tone professional and focused. You may use additional paragraphs as necessary to elaborate on the key points.]
          </p>
          <p style="font-size: 1rem; line-height: 1.7;">
            Thank you for your time and consideration. I look forward to your response.
          </p>
          <p style="font-size: 1rem; line-height: 1.7;">Sincerely,</p>
          <p style="margin-top: 40px; font-size: 1rem;"><strong>[Your Full Name]</strong></p>
          <p style="font-size: 1rem;">[Your Position]</p>
        </main>
      </section>
    `,
  },
  {
    id: 'resume',
    label: 'Resume',
    imageUrl: '/resume.svg',
    initialContent: `
      <section style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 850px; margin: auto; background-color: #ffffff; padding: 40px; border-radius: 12px; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1); color: #333;">
        <header style="text-align: center; margin-bottom: 40px;">
          <h1 style="font-size: 2.5rem; margin-bottom: 5px;">[Your Full Name]</h1>
          <p style="font-size: 1rem;">[Your Job Title] | [Email Address] | [Phone Number] | [LinkedIn URL] | [Portfolio/Website]</p>
        </header>
  
        <section style="margin-bottom: 32px;">
          <h2 style="font-size: 1.5rem; color: #1e1e2f; border-bottom: 2px solid #eee; padding-bottom: 8px;">Professional Summary</h2>
          <p style="font-size: 1rem; line-height: 1.6;">
            [Brief summary highlighting your key strengths, experience, and career goals. Ideally 2–3 sentences.]
          </p>
        </section>
  
        <section style="margin-bottom: 32px;">
          <h2 style="font-size: 1.5rem; color: #1e1e2f; border-bottom: 2px solid #eee; padding-bottom: 8px;">Skills</h2>
          <ul style="display: flex; flex-wrap: wrap; list-style: none; padding-left: 0; gap: 10px;">
            <li style="background: #f1f1f1; padding: 6px 12px; border-radius: 8px;">JavaScript</li>
            <li style="background: #f1f1f1; padding: 6px 12px; border-radius: 8px;">React</li>
            <li style="background: #f1f1f1; padding: 6px 12px; border-radius: 8px;">Node.js</li>
            <li style="background: #f1f1f1; padding: 6px 12px; border-radius: 8px;">MongoDB</li>
            <!-- Add more skills here -->
          </ul>
        </section>
  
        <section style="margin-bottom: 32px;">
          <h2 style="font-size: 1.5rem; color: #1e1e2f; border-bottom: 2px solid #eee; padding-bottom: 8px;">Experience</h2>
          <div style="margin-bottom: 20px;">
            <h3 style="margin: 0;">[Job Title] — <span style="font-weight: normal;">[Company Name]</span></h3>
            <p style="margin: 0; font-size: 0.9rem; color: #666;">[Start Date] – [End Date]</p>
            <ul style="margin-top: 8px; padding-left: 20px; line-height: 1.6;">
              <li>Describe your key responsibilities and achievements here.</li>
              <li>Focus on measurable results and technologies used.</li>
            </ul>
          </div>
          <!-- Repeat for more roles -->
        </section>
  
        <section style="margin-bottom: 32px;">
          <h2 style="font-size: 1.5rem; color: #1e1e2f; border-bottom: 2px solid #eee; padding-bottom: 8px;">Education</h2>
          <p style="margin: 0;"><strong>[Degree]</strong>, [University Name]</p>
          <p style="margin: 0; font-size: 0.9rem; color: #666;">[Graduation Year]</p>
        </section>
  
        <section>
          <h2 style="font-size: 1.5rem; color: #1e1e2f; border-bottom: 2px solid #eee; padding-bottom: 8px;">Certifications</h2>
          <ul style="padding-left: 20px; line-height: 1.6;">
            <li>[Certification Name] – [Issuing Organization]</li>
          </ul>
        </section>
      </section>
    `,
  },
  {
    id: 'letter',
    label: 'Letter',
    imageUrl: '/letter.svg',
    initialContent: `
      <section style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; max-width: 700px; margin: auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); color: #333;">
        <header style="margin-bottom: 30px;">
          <p style="margin: 0;">[Your Name]</p>
          <p style="margin: 0;">[Your Address]</p>
          <p style="margin: 0;">[City, State ZIP Code]</p>
          <p style="margin-top: 10px;">[Email Address] | [Phone Number]</p>
        </header>
  
        <p style="margin-bottom: 30px;"><strong>Date:</strong> [Letter Date]</p>
  
        <section style="margin-bottom: 30px;">
          <p style="margin: 0;"><strong>To:</strong></p>
          <p style="margin: 0;">[Recipient's Name]</p>
          <p style="margin: 0;">[Recipient's Address]</p>
          <p style="margin: 0;">[City, State ZIP Code]</p>
        </section>
  
        <main style="margin-bottom: 30px;">
          <p>Dear [Recipient's Name],</p>
  
          <p style="line-height: 1.7;">
            [Opening paragraph introducing the purpose of the letter, such as expressing gratitude, requesting information, providing an update, or making an announcement.]
          </p>
  
          <p style="line-height: 1.7;">
            [Second paragraph providing additional details, elaboration, or context for the topic being discussed.]
          </p>
  
          <p style="line-height: 1.7;">
            [Closing paragraph that summarizes the message and includes a call to action or polite ending.]
          </p>
  
          <p>Sincerely,</p>
  
          <p style="margin-top: 40px;"><strong>[Your Full Name]</strong></p>
        </main>
      </section>
    `,
  },
];
