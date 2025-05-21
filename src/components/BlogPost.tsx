import React from 'react';
import { cn } from '@/lib/utils';
import { BlogPostType } from '@/data/blogPosts';
import { ChartContainer, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

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

  // For the Nifty200 Quality 30 blog post
  if (post.content === 'nifty200-quality') {
    // Chart data
    const marketCapData = [
      { name: 'Large Cap', value: 75.2, fill: '#118AB2' },
      { name: 'Mid Cap', value: 24.8, fill: '#06D6A0' },
    ];

    const sectorData = [
      { name: 'FMCG', value: 30.34, fill: '#118AB2' },
      { name: 'IT', value: 23.31, fill: '#06D6A0' },
      { name: 'Capital Goods', value: 12.50, fill: '#FFD166' },
      { name: 'Oil & Gas', value: 9.77, fill: '#FF6B6B' },
      { name: 'Consumer Durables', value: 6.96, fill: '#BDE0FE' },
      { name: 'Automobiles', value: 6.39, fill: '#A2D2FF' },
    ];

    const cagrData = [
      { name: 'Nifty200 Quality 30 TRI', value: 18.0, fill: '#06D6A0' },
      { name: 'Nifty 200 TRI', value: 14.5, fill: '#118AB2' },
      { name: 'Nifty 50 TRI', value: 14.5, fill: '#FFD166' },
    ];

    return (
      <article className={cn('max-w-5xl mx-auto px-4 md:px-0 bg-gray-100', className)}>
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900">SBI Nifty200 Quality 30 Index Fund NFO</h1>
          <p className="text-xl text-accent mt-2">An In-Depth Look at a Quality-Focused Investment Opportunity</p>
        </header>

        <main>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-6 text-center">Introducing the Fund</h2>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <p className="text-navy-800 mb-4 leading-relaxed">
                SBI Mutual Fund has introduced the SBI Nifty200 Quality 30 Index Fund, an open-ended passive scheme. Its primary goal is to mirror the performance of the Nifty200 Quality 30 Index, investing in 30 financially sound companies from the Nifty200 universe. This fund offers a rule-based, transparent approach to tap into high-quality businesses.
              </p>
              <h3 className="text-2xl font-semibold text-accent mb-4">NFO At a Glance 📅</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-6">
                <div className="p-4 bg-sky-100 rounded-lg">
                  <p className="text-lg font-semibold text-accent">NFO Open Date</p>
                  <p className="text-xl font-bold text-navy-900">May 16, 2025</p>
                </div>
                <div className="p-4 bg-sky-100 rounded-lg">
                  <p className="text-lg font-semibold text-accent">NFO Close Date</p>
                  <p className="text-xl font-bold text-navy-900">May 29, 2025</p>
                </div>
                <div className="p-4 bg-sky-100 rounded-lg">
                  <p className="text-lg font-semibold text-accent">Minimum Investment</p>
                  <p className="text-xl font-bold text-navy-900">₹5,000</p>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-green-500 mb-4">Core Objective 🎯</h3>
              <p className="text-navy-800 leading-relaxed">
                The fund aims to provide returns that correspond to the total returns of the securities within the Nifty200 Quality 30 TRI index, before expenses, subject to tracking error. It's a passive strategy, meaning no active stock picking by the fund manager, Mr. Viral Chhadva.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-6 text-center">The "Quality" Factor Explained</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-accent mb-4">What is Factor Investing?</h3>
              <p className="text-navy-800 mb-4 leading-relaxed">
                Factor investing targets specific drivers of return beyond traditional market cap weighting. This fund focuses on the "Quality" factor, aiming to invest in companies showing financial health, profitability, and sustainable growth.
              </p>

              <h3 className="text-2xl font-semibold text-yellow-500 mb-4">Index Construction: How Quality is Defined 🛠️</h3>
              <p className="text-navy-800 mb-4 leading-relaxed">
                The Nifty200 Quality 30 Index selects 30 companies from the Nifty200 universe based on:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-50 border-2 border-accent text-navy-800 p-3 rounded-md text-center shadow-sm">Return on Equity (ROE)</div>
                <div className="bg-blue-50 border-2 border-accent text-navy-800 p-3 rounded-md text-center shadow-sm">Financial Leverage (Debt-to-Equity)</div>
                <div className="bg-blue-50 border-2 border-accent text-navy-800 p-3 rounded-md text-center shadow-sm">EPS Growth Variability (Stable Earnings)</div>
              </div>
              <p className="text-navy-800 mb-4 leading-relaxed">
                This rule-based method ensures a transparent, unbiased selection of financially robust companies.
              </p>

              <h3 className="text-2xl font-semibold text-accent mb-4">Weighting Methodology ⚖️</h3>
              <p className="text-navy-800 leading-relaxed">
                Company weights in the index are based on their quality score and the <span className="text-red-500 font-semibold">square root of their free-float market capitalization</span>. A <span className="text-red-500 font-semibold">5% cap on any single stock</span> ensures diversification and manages concentration risk.
              </p>
              <p className="text-navy-800 mt-4 leading-relaxed">
                <span className="font-semibold">Nuance:</span> While the fund is passive, the underlying Nifty200 Quality 30 Index is "active" due to potential frequent churn. This can mean higher transaction costs for the fund.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-6 text-center">A Look Inside the Index</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-semibold text-center text-navy-900 mb-4">Market Cap Exposure</h3>
                <div className="h-64 md:h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={marketCapData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                      >
                        {marketCapData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <Legend />
                      <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-navy-800 mt-4 text-center leading-relaxed">
                  The index is predominantly large-cap (75.2%), with a significant mid-cap allocation (24.8%), contributing to its "Very High Risk" profile.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-semibold text-center text-navy-900 mb-4">Top Sectoral Allocations</h3>
                <div className="h-64 md:h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={sectorData}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <XAxis type="number" domain={[0, 'dataMax']} />
                      <YAxis type="category" dataKey="name" width={100} />
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Bar dataKey="value" nameKey="name">
                        {sectorData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-navy-800 mt-4 leading-relaxed">
                  Dominated by FMCG (30.34%) and IT (23.31%), suggesting a defensive tilt but also sectoral concentration risk. Financial Services exposure is relatively low (2.93%).
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h3 className="text-2xl font-semibold text-center text-green-500 mb-4">Key Index Metrics 📊</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mt-4">
                <div>
                  <p className="text-4xl font-bold text-accent">28.74x</p>
                  <p className="text-sm text-navy-800 mt-1">P/E Ratio</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-accent">8.68x</p>
                  <p className="text-sm text-navy-800 mt-1">P/B Ratio (approx.)</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-accent">2.05%</p>
                  <p className="text-sm text-navy-800 mt-1">Dividend Yield (approx.)</p>
                </div>
              </div>
              <p className="text-navy-800 mt-4 text-center leading-relaxed">
                These premium valuations reflect the market's perception of quality, stability, and consistent earnings. Future returns will likely depend more on earnings growth than valuation re-rating.
              </p>
              <p className="text-navy-800 mt-2 text-sm text-center">Top holdings include Nestle, HUL, Coal India, TCS, Infosys, etc., reinforcing the quality theme.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-6 text-center">Performance: The "Quality" Edge</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-center text-navy-900 mb-4">Long-Term Outperformance (Index CAGR)</h3>
              <div className="h-64 md:h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={cagrData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 20]} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Bar dataKey="value" nameKey="name">
                      {cagrData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-navy-800 mt-4 text-center leading-relaxed">
                The Nifty200 Quality 30 TRI has shown significant long-term outperformance (18.0% CAGR since April 2005) compared to broader market indices like Nifty 200 & Nifty 50 (both 14.5%).
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h3 className="text-2xl font-semibold text-red-500 mb-4">Resilience in Downturns 🛡️</h3>
              <p className="text-navy-800 leading-relaxed">
                Historically, the Nifty200 Quality 30 Index has outperformed broader indices during market turbulence (e.g., Global Sell-off 2015-16, COVID-19 2020). This "flight to quality" makes it attractive for downside protection.
              </p>
              <h3 className="text-2xl font-semibold text-navy-900 mt-6 mb-4">Risk-Adjusted & Rolling Returns</h3>
              <p className="text-navy-800 leading-relaxed">
                The index has demonstrated higher risk-adjusted returns over the long run. Rolling returns analysis also confirms sustained outperformance over 1, 5, and 10-year periods compared to Nifty 50 & Nifty 200.
              </p>
              <p className="text-navy-800 mt-2 text-sm bg-yellow-100 p-3 rounded-md border-l-4 border-yellow-500">
                <span className="font-semibold">Important Note:</span> The existing UTI Nifty200 Quality 30 Index Fund (launched Sep 2024) showed a -10.18% return since launch (as of May 2025). This highlights that short-term performance can vary, and the quality theme may underperform in certain market phases, reinforcing the need for a long-term view.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-6 text-center">Risks & Who Should Invest</h2>
            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-red-700 mb-4">"Very High Risk Fund" ⚠️</h3>
              <p className="text-red-700 leading-relaxed">
                This fund is classified as "Very High Risk" due to its 95-100% equity exposure and the "active" nature of its underlying index (potential for churn and higher transaction costs). Investors must be prepared for significant capital fluctuations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-semibold text-navy-900 mb-4">Key Risks to Consider</h3>
                <ul className="space-y-3 text-navy-800">
                  <li className="flex items-start"><span className="text-xl mr-2 text-red-500">📉</span><span><span className="font-semibold">Underperformance in Bull Markets:</span> Quality may lag when high-growth stocks rally.</span></li>
                  <li className="flex items-start"><span className="text-xl mr-2 text-yellow-500">🎯</span><span><span className="font-semibold">Tracking Error:</span> "Active index" nature can make minimizing tracking error challenging.</span></li>
                  <li className="flex items-start"><span className="text-xl mr-2 text-green-500">🧱</span><span><span className="font-semibold">Sectoral Concentration:</span> High exposure to FMCG & IT poses sector-specific risks.</span></li>
                  <li className="flex items-start"><span className="text-xl mr-2 text-accent">⏳</span><span><span className="font-semibold">Exit Load:</span> 0.25% if redeemed within 15 days.</span></li>
                  <li className="flex items-start"><span className="text-xl mr-2 text-navy-900">🚫</span><span><span className="font-semibold">No Return Guarantee:</span> Equity investments are subject to market risks.</span></li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-semibold text-navy-900 mb-4">Ideal Investor Profile</h3>
                <ul className="space-y-3 text-navy-800">
                  <li className="flex items-start"><span className="text-xl mr-2 text-accent">🕰️</span><span><span className="font-semibold">Long-Term Horizon:</span> Minimum 5-7 years.</span></li>
                  <li className="flex items-start"><span className="text-xl mr-2 text-red-500">🎢</span><span>Comfortable with "Very High Risk".</span></li>
                  <li className="flex items-start"><span className="text-xl mr-2 text-green-500">📈</span><span>Seeking long-term wealth creation via quality companies.</span></li>
                  <li className="flex items-start"><span className="text-xl mr-2 text-yellow-500">🧩</span><span>Looking for portfolio diversification with a defensive tilt.</span></li>
                  <li className="flex items-start"><span className="text-xl mr-2 text-navy-900">📜</span><span>Prefers a passive, rule-based investment approach.</span></li>
                </ul>
                <div className="mt-6 text-center p-4 rounded-lg bg-blue-50 border border-accent">
                  <p className="text-lg text-accent">Recommended Investment Horizon</p>
                  <p className="text-5xl font-bold text-navy-900">5-7 Years</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-6 text-center">Final Thoughts</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-green-500 mb-4">Strengths 👍</h3>
                  <ul className="list-disc list-inside text-navy-800 space-y-1">
                    <li>Access to diversified high-quality companies.</li>
                    <li>Transparent, rule-based stock selection.</li>
                    <li>Proven long-term index outperformance.</li>
                    <li>Resilience during market downturns.</li>
                    <li>Relatively low-cost (being an index fund).</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-500 mb-4">Considerations 👎</h3>
                  <ul className="list-disc list-inside text-navy-800 space-y-1">
                    <li>"Very High Risk" classification.</li>
                    <li>Potential for frequent index churn (costs, tracking error).</li>
                    <li>May underperform in strong bull markets.</li>
                    <li>Sectoral concentration (FMCG, IT).</li>
                    <li>Minor exit load for very short-term redemptions.</li>
                  </ul>
                </div>
              </div>
              <hr className="my-6 border-gray-300" />
              <h3 className="text-2xl font-semibold text-navy-900 mb-4">Expert Recommendation</h3>
              <p className="text-navy-800 leading-relaxed">
                The SBI Nifty200 Quality 30 Index Fund is a <span className="text-red-500 font-semibold">compelling option for long-term investors</span> seeking disciplined, passive exposure to high-quality Indian equities. It's particularly suited for those prioritizing <span className="text-red-500 font-semibold">downside protection and consistent compounding</span>.
              </p>
              <p className="text-navy-800 mt-2 leading-relaxed">
                However, be aware of its "Very High Risk" nature and potential for short-term underperformance. Consider it a <span className="text-red-500 font-semibold">strategic allocation within a well-diversified portfolio</span>. A minimum 5-7 year horizon and moderate to high-risk appetite are key for this NFO.
              </p>
            </div>
          </section>
        </main>

        <footer className="text-center mt-12 py-6 border-t border-gray-300">
          <p className="text-sm text-gray-600">Disclaimer: This infographic is for informational purposes only, based on the provided analysis of the SBI Nifty200 Quality 30 Index Fund NFO. It does not constitute financial advice. Investors should consult with a financial advisor before making any investment decisions. Mutual fund investments are subject to market risks, read all scheme related documents carefully.</p>
        </footer>
      </article>
    );
  }

  // For the original blog post (fullarticle)
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

  // Default case for posts without detailed content
  return (
    <article className={cn('prose prose-lg max-w-4xl mx-auto px-4 md:px-0', className)}>
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold text-navy-900">Coming Soon</h1>
        <p className="text-navy-600 mt-4">This article is currently being prepared and will be available soon.</p>
      </div>
    </article>
  );
};

export default BlogPost;
