// src/site.config.ts
// Fill these from your Jekyll _config.yml values
export const site = {
  title:        "EPID 750",                 // from: title
  subtitle:     "",                      // from: subtitle (optional)
 description: `
  <p>This course focuses on the foundational relationships between study design 
and regression for doctoral students in Epidemiology. The course starts with a focus
on study design principles, using the target trial emulation framework. The course
then focuses in depths on applied regression modeling, including:</p>

  <ul>
    <li>Regression as a toolkit for descriptive, predictive, and causal inference</li>
    <li>Generalized linear models, variance estimation, conditional versus marginal adjustment</li>
    <li>Flexible and penalized regression</li>
    <li>Regression for outcome dependent sampling designs</li>
    <li>Models for time-to-event outcomes, including nonparametric estimators, parametric, and semiparametric approaches</li>
  </ul>
   
This course adopts the philosophy that regression machinery is fundamentally descriptive in nature, 
at the level of the statistical model. The scientific use of a regression model, whether descriptive,
predictive, or causal, is determined by the question being asked and the assumptions
brought to the analysis. This course will demonstrate how and why.</p>
`,                      // from: description  ← put your course blurb here
  email:        "ashley.naimi@emory.edu",                      // from: email
  twitterUser:  "ashley_naimi",                      // from: twitter_username (no @)
  githubUser:   "ainaimi",                      // from: github_username
  authorUrl:    "https://bit.ly/3GFu2o1",                      // from: authorurl (your professional site)
  syllabusUrl:  "",                      // from: syllabus_url (optional)
}

// Derived links (safe even if the usernames are blank)
export const links = {
  emailHref:   (site.email ? `mailto:${site.email}` : ""),
  twitterHref: (site.twitterUser ? `https://twitter.com/${site.twitterUser}` : ""),
  githubHref:  (site.githubUser ? `https://github.com/${site.githubUser}` : ""),
  authorHref:  site.authorUrl || "",
}
