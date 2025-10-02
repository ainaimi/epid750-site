// src/site.config.ts
// Fill these from your Jekyll _config.yml values
export const site = {
  title:        "ML4CI",                 // from: title
  //  subtitle:     "Machine Learning for Causal Inference",                      // from: subtitle (optional)
 description: `
  <p>This course covers the basics behind using machine learning methods for estimating causal effects.</p>

  <p>By the end of this course you should have a solid understanding of:</p>
  <ul>
    <li>the challenges of estimating causal effects with data</li>
    <li>when/why one should use machine learning to estimate causal effects</li>
    <li>the challenges of using machine learning methods for estimating causal effects</li>
    <li>how to estimate causal effects with machine learning methods in R</li>
  </ul>

  <p>The literature on ML and causal inference is expansive and complex. 
  There are some essential concepts that are not easy to understand for 
  those with little to no formal technical background. The purpose of this 
  course is to help you fill this gap, and give you some ability to use advanced 
  analytic techniques in data.</p>
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
