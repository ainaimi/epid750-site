---
title: "EPID 785R"
layout: page
permalink: /syllabus/
output:
  pdf_document:
    df_print: paged
header-includes:
- \usepackage{hyperref}
- \hypersetup{colorlinks=true,urlcolor=blue}
---

__COURSE TITLE:__ Applied Foundations of Study Design and Regression Modeling

__COURSE WEBSITE:__ [https://ainaimi.github.io/epid750-site/](https://ainaimi.github.io/epid750-site/)

__DEPARTMENT:__ Epidemiology

__CREDIT HOURS__: 4

__SEMESTER__: Fall 2026

__MEETING TIMES__:
* __LECTURE__: Tuesday, 9:00 AM – 12:00 PM
* __LAB__: Monday, 9:00 – 10:20 AM

__MEETING LOCATION__: R. Randall Rollins Bldg. R344

__INSTRUCTOR NAME:__ Ashley I. Naimi

__INSTRUCTOR CONTACT INFORMATION__

* __EMAIL__: ashley.naimi@emory.edu
* __SCHOOL ADDRESS OR MAILBOX LOCATION__: CNR 4013
* __OFFICE HOURS__: By Appointment

## COURSE DESCRIPTION

This course focuses on the applied foundations of and relationships between study design
and regression modeling. The total credit hours is four, with two credit hours of lecture
and lab. There will be a large degree of syncretism between the lab and lecture components,
to emphasize the key relationships between design and analysis in an applied framework.
A central organizing principle of the course is the distinction between the descriptive,
predictive, and causal uses of regression — a trichotomy that recurs throughout the
semester and provides a common framework for evaluating every analytic choice we make.

Students are expected to have some regression modeling experience (introductory
courses on linear, logistic, and possibly time-to-event regression) as well as some
ability to read, write, and run R programs.

## PRE-REQUISITES

This course will build on basic and intermediate analytic methods covered
in introductory statistics, regression, epidemiology, and data science courses.
Prerequisite skills and concepts include: basic measures of occurrence (e.g., risk, rate,
odds), confounding, misclassification, selection bias, study designs, estimation of
target parameters such as risk differences and ratios, cumulative incidence,
issues related to causality, interaction, effect modification
and mediation, as well as concepts, methods, and application of key mathematical
modeling approaches used to evaluate multivariable data such as logistic regression.

## DIVERSITY, EQUITY, AND INCLUSION CONSIDERATIONS

This course will focus on the theory and application of quantitative and statistical
methods to various types of data. Data analysis is a complex topic that
can combine biomedical, physiological, mathematical, social, political, and economic
dimensions into a single domain. As a result of this complexity, it is important to understand
how knowledge generated via data analysis is shaped by and is used to shape social
and cultural perspectives and values on life, health, well-being, prosperity,
and the optimal organization of human societies.

It is impossible to understand these perspectives without acknowledging the role
that early 20th century views on race, ethnicity, sex, gender, and other related
socio-political constructs played in shaping quantitative methods that we still
use today. For example, the "founding fathers" of statistics (Francis Galton, Karl
Pearson, and Ronald Fisher) were also founders of 20th century Eugenics, and they
used the new math they derived to characterize many of the egregious and
scientifically unjustifiable eugenic acts (forced sterilization, marriage
prohibitions, or the supposed moral superiority of "Nordics" or "Aryans") with
the patina of "objectivity."

The literature on this topic is expansive, complex, and rapidly growing, and we
will not be able to cover many of the problems with how statistical and quantitative
methods were and are used inappropriately for iniquitous ends. However, a deep
understanding of the connection between data, statistics, and substantive theory
can go a long way in both dismantling unsubstantiated claims (both eugenic, and
more generally), as well as design studies that can generate a more nuanced understanding
of the complexity of health. My hope is that EPID 785R will serve this end.

## COURSE LEARNING OBJECTIVES

  1. Describe key components of study protocol (eligibility criteria, treatment strategies, treatment assignment, time zero, blinding, randomization, follow-up structure, outcomes, causal contrast, censoring, truncation, competing events) and apply these components to target trial emulation.
  2. Compare intention-to-treat and per-protocol analyses, and explain the conditions under which each is an appropriate inferential target in a randomized trial and an emulated trial with observational data.
  3. Define cumulative risk, incidence rates, odds, and hazards as functions of the outcome distribution; explain the properties of each as an epidemiologic measure; identify the components of a well-defined exposure, including the implied intervention, referent group, exposure timing, and measurement considerations.
  4. Distinguish between case-base, incidence-density, and cumulative (survivor) sampling for case-control study designs; explain how sampling schemes relate to inferential targets.
  5. Distinguish the descriptive, predictive, and causal uses of regression analysis; explain why regression machinery is fundamentally descriptive at the level of the statistical model regardless of the scientific question being asked; and articulate the specific assumptions required for each use to yield a valid scientific answer.
  6. Identify and explain the structural components of a regression model (link function, outcome distribution, target and nuisance functions, offsets). Explain the relationship between parametric → semiparametric → nonparametric models with their associated bias-variance tradeoff implications.
  7. Apply the GLM family (logistic, log-binomial, Poisson, multinomial, etc) to epidemiologic data from different study designs; evaluate model fit and the limitations of using model fit tools.
  8. Compute model-based, sandwich, and bootstrap variance estimates; recognize when each is appropriate. Explain the consequences of using model-based standard errors under misspecification.
  9. Distinguish conditional from marginal effect estimates and identify when each is the appropriate inferential target; implement g-computation and IP weighting in time-fixed settings to obtain marginal estimates from a fitted regression model.
  10. Explain the sources and implications of collapsibility, using the characteristic collapsibility function to identify whether a modeling strategy will yield different conditional versus marginal association measures.
  11. Apply splines, generalized additive models, and partially linear models to flexibly estimate dose-response relationships and model nuisance functions. Demonstrate why misspecification of the nuisance function in a parametric model can bias inference on the target parameter.
  12. Apply ridge, lasso, and elastic net regression to data. Select the penalty parameter using cross-validation. Explain why post-selection inference problems and estimation bias make penalized regression inappropriate for causal estimation.
  13. Implement weighted regression and partial likelihood methods for case-control, nested case-control, and case-cohort data. Articulate how case weights restore valid estimation of the target parameter under outcome-dependent sampling.
  14. Explain what structurally distinguishes time-to-event outcomes from other types of data. Estimate cause-specific and subdistribution cumulative incidence functions using the Kaplan-Meier and Aalen-Johansen estimators. Explain why censoring competing events can lead to overestimation of cumulative incidence.
  15. Fit parametric AFT models and the semiparametric Cox model to time-to-event data and construct cumulative risk curves from each. Explain why the hazard ratio accumulates selection bias in heterogeneous populations over follow-up time.


## COURSE LOGISTICS

### Course Website and CANVAS

- Materials needed for the course are primarily located on the course website:
[https://ainaimi.github.io/epid750-site/](https://ainaimi.github.io/epid750-site/).
This includes the syllabus, lecture notes, lab handouts and starter files,
data sets, assignment handouts, and the reading list.

- A few materials are the exception and will be hosted on CANVAS instead: PDFs of
the reading-list articles and, potentially, some course videos.

- All assignments will be submitted via CANVAS by the assigned due date.

- Main course communications (announcements, updates, discussion, and questions)
will occur via the course **Slack workspace** (see the Slack section below), which
all students are expected to join. Of course, email remains available for individual
correspondence (reach out to me!: <a href="mailto:ashley.naimi@emory.edu">ashley.naimi@emory.edu</a>).

### Slack

**All students are expected to join the course Slack workspace.** Some announcements will still be
made via the CANVAS site, but the Slack channel will be a place for discussion, questions, and 
general interactions. Join using
the invite link posted on Canvas
at the start of the semester, and check it regularly.

### In Class Computing

You are encouraged to bring your laptop to class (though it is not a requirement). We may not
use them every time, but should the occasion arise, we may delve into some of the concepts
by analyzing actual data, or simulating data, or writing functions, or engaging with code in
some way. Most of the code writing and execution will be conducted in the labs for each course,
but there may be occasions in the lecture where we run code.

### R and Posit

Students will be expected to have [R](https://cran.r-project.org/) and [Posit](https://posit.co/) [(formerly RStudio)](https://posit.co/blog/rstudio-is-becoming-posit/) installed and working on their computers. In addition, the following packages should be installed and in working order:

```
"tidyverse", "here", "sandwich", "lmtest", "boot", "mgcv", "glmnet", "survival", "flexsurv", "cmprsk", "pacman"
```

Other packages will have to be installed during the course of the semester. Students should be familiar with how to install packages in R from CRAN.

Depending on the analytic scenario, you may have to install a development package from, e.g., GitHub. The best way to do this is to use the `install_github()` function in the `remotes` package (the `remotes` package can be installed from CRAN. However, you will have to address the potential GitHub API limits, which can lead to installation errors. To deal with this problem, you will need your own GitHub account.

The easiest way to address this issue is to use a Github personal access token (PAT). There are a number of ways to do this, and it's important to [read the basic information on PATs](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). Within R and RStudio, one straightforward way to manage PATs is to install and use the `usethis` package, which has a suite of functions available for creating and integrating PATs. Once you've installed `usethis`, you can:

- Use `usethis::browse_github_pat()` to create a GitHub token

- Use `usethis::edit_r_environ()` and add the environment variable by adding the following line to the R environment file: `GITHUB_PAT = 'your_github_token'`.

- Restart R (so that the GITHUB_PAT is read) and try to reinstall the packages that were resulting in the API limit error.

Be aware: **your Github PAT is a password, and should be treated as such.**


## COURSE GRADING

Grading in the regression and study design course will be based on
assignments, peer grading, and the final exam.

**Assignments** will be provided throughout the semester, and will be
due roughly every two weeks. Students may resubmit these assignments as many times
as they would like through the course of the semester. The purpose of these
assignments is for feedback, not grades. Students are encouraged to work in groups
to complete the assignments, but each student must submit their own individual
assignments. Because the focus of these assignments is learning, and not performance,
full grade will be allocated for completion. Each assignment consists
of a set of **free response questions** provided by the instructor, covering
the material of the preceding weeks.

Successful completion of the assignment portion of the class will
count for 30% of the overall grade.

### Assignment Schedule

Each assignment is worth **5 points** (6 × 5 = 30 points total; 30% of final grade).

| Assignment | Weeks Covered | Topics | Due Date | Points |
|-----------|---------------|--------|----------|--------|
| 1 | 1–2 | RCT & Emulation; Data Collection | Tue Sep 15 | 5 |
| 2 | 3–4 | Outcome-Dependent Sampling; Regression as a Toolkit | Tue Sep 22 | 5 |
| 3 | 5–6 | Anatomy of a Regression Model; Generalized Linear Models | Tue Oct 6 | 5 |
| 4 | 7–8 | Variance Estimation; Conditional vs. Marginal Adjustment | Tue Oct 27 | 5 |
| 5 | 9–10 | Flexible Regression; Penalized Regression | Tue Nov 10 | 5 |
| 6 | 11–13 | Regression for Outcome-Dependent Sampling; Survival Analysis: Concepts; Survival Analysis: Parametric and Semiparametric Models | Tue Dec 1 | 5 |

**Peer grading** will be expected on all of the assignments,
patterned after scientific peer review. Each
student will be expected to provide constructive feedback on the
assignments of other students in the class. Make your feedback
specific, constructive, and actionable. Avoid sweeping generalizations, or "ad
hominem" critiques. Be kind. Students who are grading should take the time
to grade as though they were evaluating their peers' understanding and ability
to communicate the material. Again, the
focus of peer grading is learning, and not performance. Full
grades will be allocated for completion. Successful completion of the peer
grading requirement will count for 20% of the overall grade.

### Peer Grading Details

Your peer review should be structured like a scientific manuscript review: begin with a brief summary, then provide substantive, specific feedback. The goal is to help your peer identify gaps in understanding and improve their ability to communicate difficult ideas — not to assign a score. Be direct, be kind, and be specific. Vague praise ("great job") and vague criticism ("needs work") are not useful. Point to the exact claim, explanation, or question that concerns you, and explain why.

For each free response answer, address the following:

- *Summary*: In 1–2 sentences, characterize the author's argument or approach.
- *Strengths*: What is correct and clearly articulated? Where does the author demonstrate genuine understanding beyond surface recall?
- *Weaknesses*: Are there factual errors, logical gaps, or missing components? Is the answer responsive to all parts of the question?
- *Suggestions*: Identify the single most important thing the author could add or correct to strengthen their answer.

### Peer Grading Schedule

Each peer grade is worth **4 points** (5 × 4 = 20 points total; 20% of final grade). Peer grading is not required for Assignment 6.

| Peer Grade | Grading | Due Date | Points |
|-----------|---------|----------|--------|
| 1 | Assignment 1 | Tue Sep 22 | 4 |
| 2 | Assignment 2 | Tue Oct 6 | 4 |
| 3 | Assignment 3 | Tue Oct 27 | 4 |
| 4 | Assignment 4 | Tue Nov 10 | 4 |
| 5 | Assignment 5 | Tue Nov 24 | 4 |

**Final exam** will be given at the end of the semester as a summative performance
based assessment covering all material outlined in the syllabus. The final exam will
count for 50% of the final grade.

**A note on the labs.** The weekly labs are hands-on practice sessions. Each one
produces a completed, rendered document (and sometimes derived datasets that later
labs reuse) that is **yours to keep**. Lab work is not collected or graded. The
labs exist to build the skills that the assignments and the final exam
draw on, so treat the finished documents as study materials.

### Final Exam Topics

The final exam will consist of hand-written long-answer questions drawn from the following topics, and you are encouraged to prepare study sheets — explaining each topic in your own words, as though teaching it — along these lines:

1. Target trial emulation — describe the components of a study protocol and explain how each translates from an RCT to an observational setting
2. ITT vs. per-protocol analysis — compare the two estimands and explain the conditions under which each is appropriate in both randomized and emulated trials
3. Time zero, left truncation, and right censoring — define each, explain how they differ structurally, and describe the consequences of mishandling them
4. Case-control sampling schemes — compare case-base, incidence-density, and cumulative (survivor) sampling; explain what each can validly estimate and why
5. Case weights in outcome-dependent sampling — explain the rationale for case weights and how they restore valid estimation of the target parameter
6. The descriptive-predictive-causal trichotomy — explain why regression machinery is always descriptive at the model level, and what additional assumptions are required for predictive or causal use
7. Anatomy of a GLM — identify and explain the role of each structural component (link function, distribution, target/nuisance functions, offset)
8. The parametric → semiparametric → nonparametric spectrum — explain the bias-variance tradeoff implications of moving along this spectrum
9. Collapsibility and the CCF — explain why the conditional OR does not equal the marginal OR under logistic regression, and how the collapsibility characteristic function formalizes this
10. G-computation vs. IP weighting — describe how each obtains a marginal estimate from a fitted regression model and under what assumptions each is valid
11. Model-based vs. sandwich vs. bootstrap variance — explain when each estimator is appropriate and the consequences of using model-based SEs under misspecification
12. Nuisance function misspecification as bias — explain why a flexible nuisance function is not just a cosmetic improvement but a bias-correction strategy in causal estimation
13. Penalized regression and causal inference — explain why lasso is inappropriate for causal estimation, citing estimation bias and post-selection inference problems
14. Cross-validation for penalty selection — describe what cross-validation estimates in the penalized regression context and what it does not guarantee
15. Competing events and cumulative incidence — explain why applying 1 − KM in the presence of a competing event overestimates cumulative incidence, and how the Aalen-Johansen estimator addresses this
16. The hazard ratio as a summary measure — explain why the hazard ratio accumulates selection bias in heterogeneous populations over follow-up time and what this implies for causal interpretation
17. Parametric AFT vs. semiparametric Cox — compare what the parametric baseline assumption buys in an AFT model versus the Cox partial likelihood approach; explain how risk curves are constructed from each
18. Exposure definition — identify and explain the components of a well-defined exposure (implied intervention, referent group, timing, measurement), with an example
19. Partial likelihood for case-control data — explain how the Cox partial likelihood handles outcome-dependent samples and contrast the `glm` and `coxph` approaches
20. The exponential family as organizing concept — explain how the exponential family unifies the GLM family and what the canonical link function represents


## COURSE POLICIES

### Attendance

In person attendance in both the lecture and lab components of this course is expected.

### AI Use

We are now clearly living in an epoch where consideration of AI use is a
must. You are permitted to use AI in this course as you see fit and to the extent that you wish to.

**However**, be aware of two critical points:

1) Per the honor code below, which you are bound by, the work that you submit
for this course must be YOUR original work. This means that presenting
unprocessed output from an LLM as your own work in any of the homework assignments
constitutes a violation of the honor code.

2) Your final exam counts for 50% of your final grade, and is
an in person closed book exam. If you are unable to provide correct answers to the exam questions
because you used AI as a crutch over the course of the semester, you will likely not be
able to pass the test.

### Academic Integrity

You are bound by Emory University's Student Honor and Conduct Code. RSPH requires that all material submitted by a student fulfilling his or her academic course of study **must be the original work of the student.** Violations of academic honor include any action by a student indicating dishonesty or a lack of integrity in academic ethics. Academic dishonesty refers to cheating, plagiarizing, assisting other students without authorization, lying, tampering, or stealing in performing any academic work, and will not be tolerated under any circumstances.

The [RSPH Honor Code](http://www.sph.emory.edu/cms/current_students/enrollment_services/honor_code.html) states: "*Plagiarism is the act of presenting as one's own work the expression, words, or ideas of another person whether published or unpublished (including the work of another student). A writer's work should be regarded as his/her own property.*"

You are expected to uphold and cooperate in maintaining academic integrity as a member of the Laney Graduate School. By taking this course, you affirm your commitment to the Laney Graduate School Honor Code, which you can find in the Laney Graduate School Handbook. You should ensure that you are familiar with the rights and responsibilities of members of our academic community and with policies that apply to students as members of our academic community. Any individual, when they suspect that an offense of academic misconduct has occurred, shall report this suspected breach to the appropriate Director of Graduate Studies, Program Director, or Dean of the Laney Graduate School. If an allegation is reported to a Director of Graduate Studies or a Program Director, they are in turn required to report the allegation to the Dean of Laney Graduate School.

### Accessibility and Accommodations

Accessibility Services works with students who have disabilities to provide reasonable accommodations. In order to receive consideration for reasonable accommodations, you must contact the Office of Accessibility Services (OAS). It is the responsibility of the student to register with OAS. Please note that accommodations are not retroactive and that disability accommodations are not provided until an accommodation letter has been processed.

Students who registered with OAS and have a letter outlining their academic accommodations are strongly encouraged to coordinate a meeting time with me to discuss a protocol to implement the accommodations as needed throughout the semester. This meeting should occur as early in the semester as possible.

Contact Accessibility Services for more information at (404) 727-9877 or accessibility@emory.edu. Additional information is available at the OAS website at http://equityandinclusion.emory.edu/access/students/index.html


## COURSE OUTLINE

| Week | Lecture *(Tue, 9:00 AM – 12:00 PM)* | Lab *(Mon, 9:00 – 10:20 AM)* |
|------|----------------|-----------|
| **1**<br>Lab: Mon 8/31<br>Lec: Tue 9/1 | **Randomized Controlled Trials & Emulation**<br>• Randomized, Quasi-Randomized, Non-Randomized Studies<br>• The Protocol and Objective<br>• Eligibility Criteria<br>• Blinding and Randomization<br>• Time Zero and Follow Up<br>• Censoring and Truncation (Left, Right, Interval)<br>• Competing Events<br>• Contrast: ITT, Per Protocol, As Treated | **No Lab: Asynchronous Video Series Review**<br>• Basic Math<br>• Calculus Primer (integration, differentiation, and Taylor series expansions)<br>• Linear Algebra Primer |
|  |  |  |
| **2**<br>Lab: Mon 9/7 *(Labor Day — no lab)*<br>Lec: Tue 9/8 | **Data Collection**<br>• Cause Specific and Subdistribution Risk<br>• Functions of cumulative risk<br>&nbsp;&nbsp;--> Risk, Rate, Odds, Hazards, and Other<br>• The Exposure and Implied Intervention<br>• Exposed and Referent Groups<br>• Exposure Timing<br>• Continuous Exposures<br>• Covariate Collection<br>• Measurement Concerns | **Lab 1: Construct an Emulated Trial with Raw Data** *(assigned asynchronously — Labor Day)*<br>• Apply eligibility criteria<br>• set time zero<br>• code the exposure, outcome, and covariates<br>• define follow-up and handle censoring |
|  |  |  |
| **3**<br>Lab: Mon 9/14<br>Lec: Tue 9/15 | **Outcome Dependent Sampling**<br>• Continuous/Categorical/Binary Outcomes<br>• CACO<br>• Case-Base Sampling<br>• Incidence Density (risk set) Sampling<br>• Cumulative (survivor) Sampling<br>• Exposure OR in a CACO Study<br>• Case-Cohort<br>• Sampling of Cases<br>• Sampling of Sub-Cohort<br>• Case Weights and Rationale | **Lab 2: Three Ways to Sample Controls**<br>• Take the cohort from Lab 1 and draw three case-control samples from it<br>• Cumulative (survivor) sampling → the cohort odds ratio<br>• Case-base sampling → the cohort risk ratio<br>• Incidence-density (risk-set) sampling → the cohort rate ratio<br>• Check each against the fully enumerated cohort |
|  |  |  |
| **4**<br>Lab: Mon 9/21<br>Lec: Tue 9/22 | **Regression as a Toolkit: The Descriptive-Predictive-Causal Framework**<br>• Regression machinery is always descriptive <br>• Descriptive-predictive-causal trichotomy<br>• Conditional expectation as the regression target<br>• Bias-variance as a practical tension | **Lab 3: Three Questions**<br>• Formulate a descriptive, predictive, and causal estimand from data provided<br>• Identify the distinct assumptions required for each |
|  |  |  |
| **5**<br>Lab: Mon 9/28<br>Lec: Tue 9/29 | **The Anatomy of a Regression Model**<br>• The LHS and the RHS<br>• Target and nuisance functions<br>• Link functions<br>• Distributions<br>• Offsets<br>• The parametric → semiparametric → nonparametric spectrum | **Lab 4: Dissect a Regression Model**<br>• Change link functions (identity → log → logit) and compare fitted values and interpretation<br>• Add an offset to a rate model<br>• Fit the same relationship three ways: linear model, spline, NPMLE<br>• Visualize the parametric → nonparametric spectrum |
|  |  |  |
| **6**<br>Lab: Mon 10/5<br>Lec: Tue 10/6 | **Generalized Linear Models**<br>• Linear model and OLS: what are we minimizing and why?<br>• MLE and IRWLS: one worked numerical example<br>• Logistic, log-binomial, Poisson, multinomial, other<br>• Exponential family as organizing concept; canonical link functions and what they represent<br>• GLM diagnostics | **Lab 5: Fit the GLM Family to a Single Outcome**<br>• Fit logistic, log-binomial, Poisson with offset, and linear probability models to the same binary outcome<br>• Compare estimated associations, convergence behavior, and predicted probabilities<br>• Residual plots, leverage, and Cook's distance |
|  |  |  |
| *Fall Break*<br>*Oct 12–13* | *No class* | *No class* |
|  |  |  |
| **7**<br>Lab: Mon 10/19<br>Lec: Tue 10/20 | **Variance Estimation**<br>• Residuals and the variance-covariance matrix<br>• Translating outcome variability into coefficient standard errors<br>• Model-based<br>• Sandwich<br>• Robust (HC versus cluster robust, brief connection to GEE)<br>• Bootstrap | **Lab 6: Compute Variance Three Ways**<br>• Derive model-based, sandwich (HC3), and bootstrap SEs manually with code<br>• Compute the same using canned software functions<br>• Simulate data with and without heteroscedasticity to show when estimates agree and diverge<br>• Add a clustering variable and compute cluster-robust SEs<br>• Note cross-software HC variant defaults (R, Stata, SAS) |
|  |  |  |
| **8**<br>Lab: Mon 10/26<br>Lec: Tue 10/27 | **Conditional vs. Marginal Adjustment**<br>• Reinforcing the target/nuisance distinction: exposure effect as target, confounder model as nuisance<br>• Collapsibility and the CCF<br>• Marginal Standardization, connections to g-Formula and g-Computation<br>• Propensity Scores<br>• IP weighting for marginal adjustment | **Lab 7: Conditional vs. Marginal Estimates**<br>• Simulate data with known marginal and conditional effect structure<br>• Fit logistic and log-linear models; extract conditional estimates<br>• Implement g-computation and IP weighting<br>• Demonstrate empirically that the conditional OR ≠ marginal OR under logistic<br>• Build the CCF: code g_ν(·) = f^{-1}{f(·) + ν} for logit and log links and plot the curves |
|  |  |  |
| **9**<br>Lab: Mon 11/2<br>Lec: Tue 11/3 *(Election Day — async)* | **Flexible Regression**<br>• Why linearity fails: misspecification in the nuisance function is a bias problem<br>• Splines: natural, restricted cubic, B-splines<br>• GAMs: additive structure as a practical default for nuisance modeling<br>• Partially linear models: parametric target, flexible nuisance | **Lab 8: Model a Continuous Exposure Flexibly**<br>• Fit the exposure five ways: linear, quadratic, natural cubic spline (3 knots), natural cubic spline (5 knots), GAM<br>• Overlay fitted curves with confidence bands<br>• Fit a partially linear model: parametric exposure, GAM-smoothed confounders<br>• Compare the exposure coefficient to the fully linear model |
|  |  |  |
| **10**<br>Lab: Mon 11/9<br>Lec: Tue 11/10 | **Penalized Regression and Model Evaluation**<br>• What penalization does: shrinkage and regularization as bias-variance management<br>• Ridge, lasso, elastic net, Firth<br>• Cross-validation: tuning the penalty and honest model evaluation<br>• Penalization and post-selection inference problems | **Lab 9: OLS Instability and Regularization**<br>• Augment a real dataset with simulated near-collinear noise predictors<br>• Demonstrate OLS coefficient instability as predictors correlate<br>• Fit ridge, lasso, and elastic net; plot coefficient paths<br>• Use cross-validation to select the penalty |
|  |  |  |
| **11**<br>Lab: Mon 11/16<br>Lec: Tue 11/17 | **Regression for Outcome-Dependent Sampling** *(returning to the designs from Week 3)*<br>• Case-control, nested case-control, case-cohort, and outcome-dependent sampling regression schemes<br>• Partial likelihood for case-control data<br>• Weights for outcome-dependent sampled data | **Lab 10: Weighted Regression for Outcome-Dependent Samples**<br>• Return to the case-control datasets from Lab 2<br>• Fit unweighted logistic regression; show bias in absolute risk estimates<br>• Restore valid estimation with case weights<br>• Use coxph to show how partial likelihood for case-control data works<br>• Contrast the glm and coxph approaches |
|  |  |  |
| **12**<br>Lab: Mon 11/23<br>Lec: Tue 11/24<br>*(Thanksgiving recess Thu–Fri 11/26–27)* | **Survival Analysis: Concepts**<br>• What makes time-to-event data structurally different?<br>• The risk curve (CDF) as the quantity of interest<br>• Why the hazard ratio accumulates selection bias in heterogeneous populations over follow-up time and what this implies for causal interpretation<br>• KM and Aalen-Johansen as nonparametric estimators<br>• Left truncation / delayed entry; risk-set adjustment and the extended KM estimator<br>• Competing events: cause-specific vs. subdistribution risk | **Lab 11: Estimate the Risk Curve Nonparametrically**<br>• Trace redistribution to the right on a small hand-built dataset<br>• Fit KM on the full time-to-event data<br>• Introduce late entry; fit the extended KM with delayed-entry risk sets<br>• Introduce a competing event; fit 1 − KM naively to show overestimation of cumulative incidence<br>• Fit Aalen-Johansen<br>• Overlay all three risk curves |
|  |  |  |
| **13**<br>Lab: Mon 11/30<br>Lec: Tue 12/1 | **Survival Analysis: Parametric and Semiparametric Models**<br>• AFT models: what the parametric baseline buys you; Weibull, generalized gamma<br>• Building risk curves from AFT models<br>• Cox: semiparametric structure, the baseline as a nuisance function, partial likelihood recovery<br>• Building risk curves from Cox<br>• Descriptive-predictive-causal lens: choice of summary measure matters especially in causal contexts | **Lab 12: Build Risk Curves from Survival Models**<br>• Fit Weibull and generalized gamma AFT models and a Cox model<br>• Extract and plot predicted risk curves from each<br>• Overlay against the KM from Lab 11 |
|  |  |  |
| **14 — Review**<br>Lab: Mon 12/7<br>Lec: Tue 12/8 | **Review** | **Final Exam Preparation** |
|  |  |  |
| **Final Exam**<br>Dec 9–15<br>*(exact date TBD)* | Covering all 20 topics listed above. | — |
