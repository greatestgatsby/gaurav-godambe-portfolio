import React from 'react';
import { cn } from '@/lib/utils';
import { BlogPostType } from '@/data/blogPosts';

interface BlogPostProps {
  className?: string;
  post?: BlogPostType;
}

const BlogPost = ({ className, post }: BlogPostProps) => {
  // If no post is provided, show default content
  if (!post) {
    return (
      <article className={cn('prose prose-lg max-w-4xl mx-auto px-4 md:px-0', className)}>
        <div className="text-center py-10">
          <h1 className="text-3xl font-bold text-navy-900">Coming Soon</h1>
          <p className="text-navy-600 mt-4">This article is currently being prepared and will be available soon.</p>
        </div>
      </article>
    );
  }

  // Show "Coming Soon" message for posts without full content
  if (!post.content) {
    return (
      <article className={cn('prose prose-lg max-w-4xl mx-auto px-4 md:px-0', className)}>
        <div className="text-center py-10">
          <h1 className="text-3xl font-bold text-navy-900">Coming Soon</h1>
          <p className="text-navy-600 mt-4">This article is currently being prepared and will be available soon.</p>
        </div>
      </article>
    );
  }

  // For the original "fullarticle" post
  if (post.content === 'fullarticle') {
    return (
      <article className={cn('prose prose-lg max-w-4xl mx-auto px-4 md:px-0', className)}>
        <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
          The Future of FP&A: How AI is Transforming Financial Planning
        </h1>
        
        <p className="text-navy-600 mb-8">
          Financial Planning and Analysis (FP&A) used to be a slow grind — spreadsheets, version control nightmares, and forecasts built more on gut feel than data. But that's changing fast. Artificial Intelligence (AI) and Machine Learning (ML) aren't just buzzwords anymore — they're rewriting the rulebook for how finance teams operate.
        </p>
        
        <p className="text-navy-600 mb-8">
          Let's cut through the hype and look at what's actually happening — and what's next.
        </p>

        <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
          From Back Office to Strategic Nerve Center
        </h2>
      
        <p className="text-navy-600 mb-4">
          FP&A teams have always struggled to balance number-crunching with strategic insight. With AI, that balance is shifting. We're moving from static, rear-view-mirror reporting to real-time, forward-looking analysis.
        </p>
      
        <p className="text-navy-600 mb-4">
          Tools powered by AI can now:
        </p>
      
        <ul className="list-disc pl-6 mb-6 text-navy-600">
          <li className="mb-2"><strong>Automate routine tasks</strong>: Think data consolidation, variance analysis, and report generation — all handled without manual input.</li>
          <li className="mb-2"><strong>Detect patterns</strong>: ML models analyze historical data to spot trends human analysts might miss.</li>
          <li className="mb-2"><strong>Generate scenarios instantly</strong>: AI can model thousands of potential outcomes in seconds, allowing for more agile, responsive planning.</li>
        </ul>
      
        <p className="text-navy-600 mb-8">
          This means FP&A teams spend less time building reports and more time influencing decisions.
        </p>

        <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
          Real-Time Forecasting: No Longer a Fantasy
        </h2>
      
        <p className="text-navy-600 mb-4">
          Traditional forecasting models are rigid and based on historical averages. That's fine when markets are stable — but we don't live in that world anymore.
        </p>
      
        <p className="text-navy-600 mb-4">
          AI brings adaptive forecasting. These models learn from new data constantly — adjusting forecasts in real time as market dynamics shift. Finance leaders can now spot a deviation from plan the moment it starts, not after it's already done damage.
        </p>
      
        <p className="text-navy-600 mb-8">
          Companies like Workday, Anaplan, and Oracle are already embedding this capability into their platforms. If you're still running quarterly forecasts on Excel, you're behind.
        </p>

        <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
        Better Insights, Faster Decisions
        </h2>
      
        <p className="text-navy-600 mb-4">
          AI doesn't replace finance professionals — it augments them. Human judgment still matters. But AI enhances it by providing deeper insights, faster.
        </p>
      
        <p className="text-navy-600 mb-4">
          For example:
        </p>
      
        <ul className="list-disc pl-6 mb-6 text-navy-600">
          <li className="mb-2"><strong>Natural Language Processing (NLP)</strong> lets you ask, "What's driving our margin drop in EMEA?" and get an instant, data-backed answer.</li>
          <li className="mb-2"><strong>Anomaly detection algorithms</strong> flag unusual spend before it becomes a problem — not after month-end close.</li>
          <li className="mb-2"><strong>Predictive analytics</strong> help anticipate cash flow risks, customer churn, or supplier issues before they hit your bottom line.</li>
        </ul>
      
        <p className="text-navy-600 mb-8">
          In short, AI helps finance go from reactive to proactive.
        </p>

        <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
          The Skills FP&A Pros Now Need
        </h2>
      
        <p className="text-navy-600 mb-4">
          The shift isn't just about tools. It's also about people. Tomorrow's FP&A analyst needs to be part data scientist, part storyteller.
        </p>
      
        <p className="text-navy-600 mb-4">
          Here's what's rising in demand:
        </p>
      
        <ul className="list-disc pl-6 mb-6 text-navy-600">
          <li className="mb-2"><strong>Data literacy</strong>: Understanding how models work and how to question the output.</li>
          <li className="mb-2"><strong>Tech fluency</strong>: Navigating platforms, APIs, and automation tools.</li>
          <li className="mb-2"><strong>Business acumen</strong>: Connecting the dots between data and decisions.</li>
          <li className="mb-2"><strong>Communication</strong>: Explaining complex insights clearly to non-finance stakeholders.</li>
        </ul>
      
        <p className="text-navy-600 mb-8">
          The finance pros who thrive will be those who embrace change and learn fast.
        </p>

        <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
          So Where Is This Headed?
        </h2>
      
        <p className="text-navy-600 mb-4">
          We're still early. Most companies are somewhere between automating reports and experimenting with predictive models. But the direction is clear.
        </p>
      
        <p className="text-navy-600 mb-4">
          Expect to see:
        </p>
      
        <ul className="list-disc pl-6 mb-6 text-navy-600">
          <li className="mb-2"><strong>Hyper-automation</strong>: End-to-end planning workflows with almost no manual touch.</li>
          <li className="mb-2"><strong>Self-serve analytics</strong>: Business users running their own what-if scenarios without calling finance.</li>
          <li className="mb-2"><strong>Embedded finance</strong>: FP&A insights delivered directly into operational tools like CRM and ERP systems.</li>
          <li className="mb-2"><strong>Explainable AI</strong>: Models that show <em>why</em> they made a prediction, not just the output.</li>
        </ul>
      
        <p className="text-navy-600 mb-8">
          In a few years, AI-driven FP&A won't be a competitive advantage. It'll be the cost of entry.
        </p>

        <hr className="my-10 border-t border-gray-300" />
      
        <p className="text-navy-900 font-semibold mb-8">
          <strong>Bottom line:</strong> AI is pushing FP&A out of the back office and into the heart of strategic decision-making. It's not just about faster analysis — it's about better decisions, made with confidence, at speed. If you're not evolving your tools and your skills, you're not just behind — you're exposed.
        </p>
      
        <p className="text-navy-900 font-semibold">
          It's time to adapt.
        </p>
      </article>
    );
  }

  // For the Gemini report post
  if (post.content === 'gemini-report') {
    return (
      <article className={cn('prose prose-lg max-w-4xl mx-auto px-4 md:px-0', className)}>
        <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
          AI and the Future of FP&A: A 2023-2028 Outlook
        </h1>
        
        <div className="text-sm font-medium text-navy-500 mb-4">
          Published on {post.date} | Category: {post.category}
        </div>

        <p className="text-navy-600 mb-6">
          As we navigate through 2023 and look ahead to 2028, the integration of Artificial Intelligence (AI) in Financial Planning and Analysis (FP&A) is not just an option but a competitive necessity. This report examines how AI is reshaping FP&A functions and what finance leaders can expect in the next five years.
        </p>

        <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
          Executive Summary
        </h2>
        
        <p className="text-navy-600 mb-4">
          The landscape of FP&A is rapidly evolving with AI as its catalyst. Our analysis points to a 40-60% reduction in manual data processing by 2028, with predictive accuracy improving by 30-45% for organizations fully embracing AI-driven FP&A. This transformation will fundamentally alter how financial teams operate, shifting focus from data gathering to strategic insight generation.
        </p>

        <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
          Current State of AI in FP&A (2023)
        </h2>
        
        <h3 className="text-xl font-bold text-navy-800 mt-6 mb-3">
          Adoption Statistics
        </h3>
        
        <ul className="list-disc pl-6 mb-6 text-navy-600">
          <li className="mb-2">42% of finance departments have implemented basic AI for data processing</li>
          <li className="mb-2">Only 18% have deployed advanced predictive modeling</li>
          <li className="mb-2">67% of CFOs cite "improving forecasting accuracy" as their primary goal for AI investment</li>
        </ul>

        <h3 className="text-xl font-bold text-navy-800 mt-6 mb-3">
          Current Applications
        </h3>

        <p className="text-navy-600 mb-4">
          Today's AI implementations in FP&A typically focus on:
        </p>
        
        <ul className="list-disc pl-6 mb-6 text-navy-600">
          <li className="mb-2"><strong>Automated Data Consolidation:</strong> Reducing manual aggregation by 40-60%</li>
          <li className="mb-2"><strong>Basic Variance Analysis:</strong> Flagging significant deviations and suggesting potential causes</li>
          <li className="mb-2"><strong>Preliminary Forecasting Models:</strong> Providing initial projections based on historical patterns</li>
          <li className="mb-2"><strong>Report Generation:</strong> Creating standardized financial reports with minimal human intervention</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
          The 5-Year Projection (2023-2028)
        </h2>

        <h3 className="text-xl font-bold text-navy-800 mt-6 mb-3">
          Phase 1: Enhanced Predictive Capabilities (2023-2025)
        </h3>
        
        <p className="text-navy-600 mb-4">
          The next two years will see significant improvements in:
        </p>
        
        <ul className="list-disc pl-6 mb-6 text-navy-600">
          <li className="mb-2"><strong>Forecast Accuracy:</strong> Improvement of 15-25% through multi-variable modeling</li>
          <li className="mb-2"><strong>Scenario Analysis:</strong> Ability to model 100+ variables simultaneously vs. 10-15 in traditional models</li>
          <li className="mb-2"><strong>Anomaly Detection:</strong> 85% success rate in identifying unusual patterns before they impact performance</li>
        </ul>

        <h3 className="text-xl font-bold text-navy-800 mt-6 mb-3">
          Phase 2: Autonomous Finance Operations (2025-2027)
        </h3>
        
        <p className="text-navy-600 mb-4">
          The middle phase will bring:
        </p>
        
        <ul className="list-disc pl-6 mb-6 text-navy-600">
          <li className="mb-2"><strong>Continuous Forecasting:</strong> Real-time adjustments to projections as conditions change</li>
          <li className="mb-2"><strong>Automated Decision Recommendations:</strong> AI suggesting specific actions based on financial trends</li>
          <li className="mb-2"><strong>Natural Language Interfaces:</strong> Allowing non-finance executives to query financial data conversationally</li>
          <li className="mb-2"><strong>Prescriptive Analytics:</strong> Moving beyond "what might happen" to "what should we do about it"</li>
        </ul>

        <h3 className="text-xl font-bold text-navy-800 mt-6 mb-3">
          Phase 3: Cognitive Finance Systems (2027-2028)
        </h3>
        
        <p className="text-navy-600 mb-4">
          By 2028, leading organizations will implement:
        </p>
        
        <ul className="list-disc pl-6 mb-6 text-navy-600">
          <li className="mb-2"><strong>Self-Optimizing Planning Models:</strong> AI systems that continuously improve their own accuracy</li>
          <li className="mb-2"><strong>Integrated Strategic Advisors:</strong> AI assistants that participate in strategic planning discussions</li>
          <li className="mb-2"><strong>Cross-Functional Optimization:</strong> AI models that optimize across departments simultaneously</li>
          <li className="mb-2"><strong>External Data Integration:</strong> Automatic incorporation of macroeconomic, competitive, and market signals</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
          Key Technology Enablers
        </h2>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold text-navy-800 mb-4">
            Technologies Accelerating AI in FP&A
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-navy-700 mb-2">
                Large Language Models (LLMs)
              </h4>
              <p className="text-navy-600 text-sm">
                Enabling natural language querying and narrative explanation of financial results
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-navy-700 mb-2">
                Time Series Neural Networks
              </h4>
              <p className="text-navy-600 text-sm">
                Dramatically improving forecasting accuracy for complex data sets
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-navy-700 mb-2">
                Reinforcement Learning
              </h4>
              <p className="text-navy-600 text-sm">
                Allowing models to learn from outcomes and continually optimize planning scenarios
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-navy-700 mb-2">
                Causal AI
              </h4>
              <p className="text-navy-600 text-sm">
                Moving beyond correlation to understand true business drivers
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
          Implications for FP&A Teams
        </h2>
        
        <h3 className="text-xl font-bold text-navy-800 mt-6 mb-3">
          Evolving Skill Requirements
        </h3>
        
        <p className="text-navy-600 mb-4">
          By 2028, high-performing FP&A professionals will need:
        </p>
        
        <ul className="list-disc pl-6 mb-6 text-navy-600">
          <li className="mb-2"><strong>Advanced Data Literacy:</strong> Understanding complex analytical methods and their limitations</li>
          <li className="mb-2"><strong>AI Collaboration Skills:</strong> Effectively working alongside and guiding AI systems</li>
          <li className="mb-2"><strong>Business Strategy Expertise:</strong> Translating AI insights into actionable business recommendations</li>
          <li className="mb-2"><strong>Technology Fluency:</strong> Confidence in deploying and modifying AI solutions for specific needs</li>
        </ul>

        <h3 className="text-xl font-bold text-navy-800 mt-6 mb-3">
          Organizational Structure Changes
        </h3>
        
        <p className="text-navy-600 mb-4">
          The future FP&A department will likely include:
        </p>
        
        <ul className="list-disc pl-6 mb-6 text-navy-600">
          <li className="mb-2"><strong>AI Financial Analysts:</strong> Specialists in training and overseeing financial AI systems</li>
          <li className="mb-2"><strong>Business Insight Translators:</strong> Experts in communicating AI-generated insights to leadership</li>
          <li className="mb-2"><strong>Financial Data Engineers:</strong> Ensuring clean, appropriate data flows to modeling systems</li>
          <li className="mb-2"><strong>Strategic Finance Advisors:</strong> Senior professionals focused on high-level planning and decisioning</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
          Implementation Roadmap
        </h2>
        
        <div className="border-l-4 border-accent pl-6 mb-8">
          <h3 className="text-xl font-bold text-navy-800 mb-3">
            For Organizations Beginning Their AI Journey
          </h3>
          
          <ol className="list-decimal pl-6 mb-4 text-navy-600">
            <li className="mb-2"><strong>Data Foundation (6-9 months):</strong> Establish centralized financial data repository with governance</li>
            <li className="mb-2"><strong>Process Mapping (3-4 months):</strong> Document current FP&A workflows to identify AI opportunities</li>
            <li className="mb-2"><strong>Pilot Implementation (4-6 months):</strong> Deploy AI solution in one specific area (e.g., revenue forecasting)</li>
            <li className="mb-2"><strong>Capability Building (Ongoing):</strong> Develop internal expertise through training and experience</li>
            <li className="mb-2"><strong>Scaled Deployment (12+ months):</strong> Expand AI implementation across FP&A functions</li>
          </ol>
        </div>

        <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
          Challenges and Considerations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="text-lg font-bold text-red-800 mb-2">
              Implementation Risks
            </h3>
            <ul className="list-disc pl-4 text-navy-600 text-sm">
              <li className="mb-1">Data quality issues undermining model accuracy</li>
              <li className="mb-1">Change management challenges and resistance</li>
              <li className="mb-1">Integration complexities with legacy systems</li>
              <li className="mb-1">Difficulty measuring ROI on AI investments</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-lg font-bold text-yellow-800 mb-2">
              Ethical Considerations
            </h3>
            <ul className="list-disc pl-4 text-navy-600 text-sm">
              <li className="mb-1">Transparency in AI decision-making processes</li>
              <li className="mb-1">Potential biases in training data</li>
              <li className="mb-1">Appropriate human oversight and intervention</li>
              <li className="mb-1">Data privacy and security concerns</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
          Conclusion and Strategic Recommendations
        </h2>
        
        <p className="text-navy-600 mb-4">
          The transformation of FP&A through AI over the next five years will be profound. Organizations that move decisively now will create significant competitive advantages, while those that delay risk falling permanently behind.
        </p>

        <div className="bg-navy-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold text-navy-800 mb-4">
            Key Recommendations
          </h3>
          
          <ul className="list-disc pl-6 mb-4 text-navy-600">
            <li className="mb-2"><strong>Invest in AI-ready data infrastructure immediately</strong> — this foundation is critical</li>
            <li className="mb-2"><strong>Develop a clear, phased roadmap</strong> for AI in FP&A with concrete milestones</li>
            <li className="mb-2"><strong>Balance quick wins with long-term transformation</strong> to maintain momentum</li>
            <li className="mb-2"><strong>Focus on building internal capabilities</strong> alongside implementing new technologies</li>
            <li className="mb-2"><strong>Create governance frameworks</strong> to ensure responsible AI use in financial decision-making</li>
          </ul>
        </div>

        <p className="text-navy-700 font-semibold mt-10">
          By embracing AI-driven transformation in FP&A, organizations can move from reactive reporting to proactive strategy, ultimately driving better business outcomes and competitive advantage in an increasingly complex business environment.
        </p>
      </article>
    );
  }

  // Default case for other posts with content
  return (
    <article className={cn('prose prose-lg max-w-4xl mx-auto px-4 md:px-0', className)}>
      <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
        {post.title}
      </h1>
      <div className="text-navy-600">
        <p>This content is currently being prepared.</p>
      </div>
    </article>
  );
};

export default BlogPost;
