window.TRACK = window.TRACK || { modules: [], exam: [] };
TRACK.modules.push({
 "id": "m1",
 "order": 1,
 "code": "Govern",
 "title": "Security Governance and Frameworks",
 "subtitle": "Direct and oversee cyber risk with clear accountability, the right frameworks and a lean control library",
 "outcomes": [
  "Separate governance, management and operations and assign accountability for cyber risk",
  "Use NIST CSF 2.0 profiles and tiers to describe current and target security outcomes",
  "Explain how an ISO/IEC 27001:2022 ISMS is built, scoped and certified",
  "Combine CIS Controls and COBIT-style objectives with other frameworks for the right purpose",
  "Design a policy architecture, unified control framework and GRC operating rhythm"
 ],
 "lessons": [
  {
   "id": "m1-l1",
   "title": "Security Governance, Accountability and the Three Lines",
   "subtitle": "Who decides, who does and who checks: the foundations of governing cyber risk",
   "minutes": 30,
   "objectives": [
    "Distinguish security governance from security management and operations",
    "Assign accountability for cyber risk across the board, executives and the security function",
    "Apply the three lines model and decide where the CISO should report"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Security failures in large organisations are rarely caused by a missing tool. They are caused by unclear decisions: nobody owned the risk, nobody approved the exception, nobody told the board. **Security governance** is the system by which an organisation directs and controls security so that it supports business objectives, stays within risk appetite and meets its legal duties. **Security management** plans and runs the activities that carry out those directions. **Operations** do the daily work. Expert leaders keep the three distinct, because each needs different people, information and decision rights."
    },
    {
     "type": "compare",
     "title": "Governance, management and operations",
     "columns": [
      {
       "title": "Governance (direct and oversee)",
       "items": [
        "Sets risk appetite and priorities",
        "Approves strategy, policy and budget envelope",
        "Holds executives to account",
        "Asks: are we doing the right things?",
        "Board, risk committee, executive committee"
       ]
      },
      {
       "title": "Management (plan and run)",
       "items": [
        "Turns direction into programmes and standards",
        "Allocates people and money",
        "Reports performance and risk upward",
        "Asks: are we doing things right?",
        "CISO, CIO, business unit heads"
       ]
      },
      {
       "title": "Operations (execute)",
       "items": [
        "Runs controls day to day",
        "Monitors, patches, responds",
        "Produces evidence and metrics",
        "Asks: is it working right now?",
        "SOC, IT operations, engineering teams"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "**Accountable** means you answer for the outcome and cannot delegate that duty; there is exactly one accountable person per risk or decision. **Responsible** means you do the work. A CISO is usually responsible for designing and running the security programme, but the business owner of a payment service is accountable for accepting the cyber risk to that service.",
     "title": "Accountable versus responsible"
    },
    {
     "type": "framework",
     "title": "Six questions every governance system must answer",
     "items": [
      {
       "label": "G1",
       "title": "Direction",
       "text": "What are we protecting, why, and how much risk will we accept? Captured in strategy and risk appetite."
      },
      {
       "label": "G2",
       "title": "Decision rights",
       "text": "Who may approve policy, accept risk, grant exceptions and spend money, and at what thresholds?"
      },
      {
       "label": "G3",
       "title": "Accountability",
       "text": "Which named owner answers for each critical service, asset class and top risk?"
      },
      {
       "label": "G4",
       "title": "Policy",
       "text": "What rules apply, and how are they kept short, current and enforceable?"
      },
      {
       "label": "G5",
       "title": "Oversight",
       "text": "How do leaders know the programme is working: metrics, assurance, audit?"
      },
      {
       "label": "G6",
       "title": "Adaptation",
       "text": "How are strategy and controls changed when threats, the business or the law change?"
      }
     ]
    },
    {
     "type": "text",
     "text": "The **three lines model** gives a simple shape to accountability. The **first line** (business and IT teams who own services) owns and manages risk and runs controls. The **second line** (risk management, compliance and, in many organisations, the security risk function) sets frameworks, challenges and monitors. The **third line** (internal audit) gives independent assurance to the governing body. The model works only if roles are clear and the lines cooperate rather than duplicate."
    },
    {
     "type": "layers",
     "title": "The three lines model applied to cyber risk",
     "items": [
      {
       "label": "Governing body",
       "parts": [
        "Board and its risk or audit committee",
        "Sets appetite, oversees, receives assurance"
       ]
      },
      {
       "label": "Third line",
       "parts": [
        "Internal audit",
        "Independent assurance on design and effectiveness of cyber controls"
       ]
      },
      {
       "label": "Second line",
       "parts": [
        "Enterprise and cyber risk management",
        "Compliance and privacy office",
        "Policy, challenge, monitoring, risk reporting"
       ]
      },
      {
       "label": "First line",
       "parts": [
        "Business service owners",
        "IT, cloud and engineering teams",
        "Security operations running controls"
       ]
      },
      {
       "label": "External assurance",
       "parts": [
        "External auditors, regulators, certification bodies",
        "Sits outside the organisation but informs the board"
       ]
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Reporting line",
      "Strengths",
      "Watch-outs"
     ],
     "rows": [
      [
       "CIO or CTO",
       "Close to technology delivery; fast execution",
       "Conflict when security slows IT delivery; risk can be filtered before reaching the board"
      ],
      [
       "CEO or COO",
       "Business-wide authority; visibility of all risk",
       "CEO bandwidth; may lack technical sponsorship"
      ],
      [
       "Chief Risk Officer",
       "Strong second-line independence; aligns with enterprise risk",
       "Can drift away from engineering; operations may need to sit elsewhere"
      ],
      [
       "General Counsel",
       "Strong on regulation and privacy",
       "Programme may become compliance-only"
      ],
      [
       "Split model",
       "Operational security under CIO, cyber risk oversight under CRO",
       "Needs very clear boundaries and a shared risk register"
      ]
     ],
     "title": "Where should the CISO report? Common options"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "What protects the organisation is the CISO's direct, regular and unfiltered access to the board or its risk committee, plus a budget process that is not simply a percentage of IT spend. If either is missing, fix that before redrawing the organisation chart.",
     "title": "Reporting line matters less than access"
    },
    {
     "type": "scenario",
     "title": "A risk that nobody owns",
     "situation": "At a Chattogram container-terminal operator, the CISO discovers that the terminal operating system runs on an unsupported database. IT says the business must approve downtime for the upgrade; operations says IT owns all systems. The risk has sat on the register for 14 months without an owner. What should the CISO do FIRST?",
     "options": [
      {
       "text": "Schedule the upgrade over a weekend under the CISO's own authority.",
       "feedback": "This bypasses the business owner who must weigh operational impact. It may fix this case but leaves the accountability gap in place.",
       "best": false
      },
      {
       "text": "Escalate through the agreed governance route so the executive committee names the terminal's business owner as accountable for the risk and its treatment decision.",
       "feedback": "Best. The core failure is missing accountability. Once an owner with authority over downtime and budget is named, treatment can be decided and tracked.",
       "best": true
      },
      {
       "text": "Record the CISO as risk owner so that the register is complete.",
       "feedback": "The CISO cannot accept or fund operational risk for the terminal. A cosmetic owner makes the register look complete while nothing changes.",
       "best": false
      },
      {
       "text": "Ask internal audit to raise a finding so that someone is forced to act.",
       "feedback": "Audit may eventually find it, but management should not outsource ownership decisions to the third line.",
       "best": false
      }
     ]
    },
    {
     "type": "keypoints",
     "items": [
      "Every top risk has one named accountable owner at the right level",
      "Risk acceptance and policy exceptions have thresholds, expiry dates and are reported",
      "The board discusses cyber risk in business terms at least quarterly",
      "Security investment decisions reference the risk register and appetite",
      "Internal audit covers cyber risk on a risk-based plan, not only IT general controls"
     ],
     "title": "Signs that governance is working"
    },
    {
     "type": "reflection",
     "prompt": "Draw your organisation's current decision path for accepting a high cyber risk. Who actually decides today, and who should decide? Where does the information get filtered?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Security governance",
       "def": "The system by which leaders direct and oversee security so it supports objectives, stays within risk appetite and meets obligations."
      },
      {
       "term": "Security management",
       "def": "Planning, organising and running the security activities that carry out governance direction."
      },
      {
       "term": "Accountability",
       "def": "The duty to answer for an outcome; it cannot be delegated and sits with exactly one person per decision or risk."
      },
      {
       "term": "Decision rights",
       "def": "The documented authority to make specific decisions, such as accepting risk or approving exceptions, often with value thresholds."
      },
      {
       "term": "Three lines model",
       "def": "An accountability model separating risk ownership (first line), oversight and challenge (second line) and independent assurance (third line)."
      },
      {
       "term": "Governing body",
       "def": "The board or equivalent group that sets direction, approves appetite and holds management to account."
      },
      {
       "term": "Risk owner",
       "def": "The person with the authority and budget to decide how a specific risk is treated and to accept what remains."
      },
      {
       "term": "CISO",
       "def": "Chief Information Security Officer: the executive responsible for the security programme, strategy and reporting on cyber risk."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which activity is primarily a governance activity rather than a management activity?",
       "options": [
        "Approving the organisation's cyber risk appetite",
        "Writing the detailed patching standard for Windows and Linux servers",
        "Choosing a new endpoint detection product",
        "Running a quarterly phishing simulation"
       ],
       "answer": 0,
       "explain": "Setting appetite is direction-setting by the governing body. The others turn direction into practice and belong to management or operations."
      },
      {
       "q": "In the three lines model, internal audit's main contribution to cyber risk is to:",
       "options": [
        "Own and operate the key security controls for the business units",
        "Write the information security policy",
        "Accept residual risk for business units",
        "Provide independent assurance to the governing body"
       ],
       "answer": 3,
       "explain": "The third line is independent. Operating controls is first-line work, policy is typically management or second line, and accepting risk belongs to risk owners."
      },
      {
       "q": "A business unit head wants the CISO to be named owner of a ransomware risk to the unit's ERP system. Why is this weak?",
       "options": [
        "The CISO is a third-line function",
        "The CISO lacks authority over the ERP's budget, downtime and business trade-offs",
        "Risk owners must always be board members",
        "Ransomware risks cannot have an owner"
       ],
       "answer": 1,
       "explain": "The risk owner must have the authority to decide treatment and accept the residual risk. That lies with the business owner of the service."
      },
      {
       "q": "Which signal best shows a CISO has effective access to governance?",
       "options": [
        "A reporting line directly to the CEO shown on the organisation chart, whatever the meeting access",
        "A security budget equal to ten per cent of IT spend",
        "Regular, direct reporting to the board's risk committee without filtering",
        "Membership of the IT change advisory board"
       ],
       "answer": 2,
       "explain": "Access and unfiltered information flow matter more than the box on the chart or a benchmark ratio."
      },
      {
       "q": "Which statement correctly separates accountable and responsible?",
       "options": [
        "Many people can be responsible for work, but one person is accountable for the outcome",
        "Accountability can be delegated to a contractor along with the work, if the contract says so",
        "Responsible means the person who approves the budget",
        "Accountable and responsible are the same in security"
       ],
       "answer": 0,
       "explain": "Responsibility for doing work can be shared or delegated; accountability for the outcome stays with one named person."
      }
     ]
    }
   ]
  },
  {
   "id": "m1-l2",
   "title": "NIST CSF 2.0: Functions, Profiles and Tiers",
   "subtitle": "Using the most widely referenced cyber framework as a common language for programmes and boards",
   "minutes": 35,
   "objectives": [
    "Explain the six CSF 2.0 functions and why Govern sits at the centre",
    "Build current and target profiles and derive a prioritised gap plan",
    "Use implementation tiers to describe the rigour of risk practices"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "The **NIST Cybersecurity Framework (CSF) 2.0**, published in February 2024 by the US National Institute of Standards and Technology, is a voluntary, outcome-based framework. It does not tell you which products to buy or exactly how to configure them. It describes **outcomes** an organisation should achieve, organised so that executives, engineers and auditors can talk about the same thing. Version 2.0 widened the scope beyond critical infrastructure to every organisation and added a sixth function, **Govern**."
    },
    {
     "type": "framework",
     "title": "The six functions in plain words",
     "items": [
      {
       "label": "GV",
       "title": "Govern",
       "text": "Set and monitor the organisation's cyber risk strategy, expectations, roles, policy, oversight and supply-chain risk approach. It informs all the others."
      },
      {
       "label": "ID",
       "title": "Identify",
       "text": "Understand current risk: assets, business environment, risk assessment and improvement opportunities."
      },
      {
       "label": "PR",
       "title": "Protect",
       "text": "Use safeguards to manage risk: identity and access, awareness, data security, platform security and resilient technology infrastructure."
      },
      {
       "label": "DE",
       "title": "Detect",
       "text": "Find and analyse possible attacks and compromises through continuous monitoring and adverse-event analysis."
      },
      {
       "label": "RS",
       "title": "Respond",
       "text": "Take action on a detected incident: manage, analyse, communicate and contain or mitigate it."
      },
      {
       "label": "RC",
       "title": "Recover",
       "text": "Restore assets and operations affected by an incident and communicate during recovery."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "In the CSF 2.0 wheel, Govern is drawn at the centre because it shapes how the other five are prioritised and funded. Its categories cover organisational context, risk-management strategy, roles and authorities, policy, oversight and cybersecurity supply-chain risk management. If your programme has strong tools but no Govern outcomes, the framework is telling you the foundation is missing.",
     "title": "Why Govern sits in the middle"
    },
    {
     "type": "table",
     "head": [
      "Element",
      "What it is",
      "How you use it"
     ],
     "rows": [
      [
       "Core",
       "Functions, then categories, then subcategories (6 functions, 22 categories, 106 subcategories)",
       "A checklist of outcomes to assess and target"
      ],
      [
       "Implementation examples",
       "Short illustrations of actions that could achieve a subcategory",
       "Ideas, not mandatory controls"
      ],
      [
       "Informative references",
       "Mappings to other standards and guidance",
       "Link CSF outcomes to ISO, CIS and sector controls"
      ],
      [
       "Organisational profiles",
       "Current and target states of selected outcomes",
       "Gap analysis and roadmap"
      ],
      [
       "Community profiles",
       "Shared target profiles for a sector or use case",
       "Start from a sector baseline instead of a blank page"
      ],
      [
       "Tiers",
       "Four levels describing rigour of risk governance and management",
       "Set an ambition, not a score"
      ]
     ],
     "title": "CSF 2.0 structure"
    },
    {
     "type": "steps",
     "title": "Building a CSF profile-based roadmap",
     "items": [
      {
       "title": "Scope",
       "text": "Choose the scope: the whole organisation, a business unit or a critical service such as mobile payments."
      },
      {
       "title": "Gather context",
       "text": "Collect mission, regulatory duties, risk appetite, threat picture and dependencies."
      },
      {
       "title": "Create the current profile",
       "text": "For each selected subcategory, record what is achieved today with evidence, not opinion."
      },
      {
       "title": "Create the target profile",
       "text": "Decide which outcomes must be achieved, to what degree, by when, based on risk and obligations."
      },
      {
       "title": "Analyse gaps",
       "text": "Compare profiles, estimate cost and risk reduction of closing each gap."
      },
      {
       "title": "Prioritise and plan",
       "text": "Build a sequenced action plan with owners, budget and milestones."
      },
      {
       "title": "Implement and repeat",
       "text": "Execute, measure, and refresh profiles at least annually or after major change."
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Tier",
      "Name",
      "What it looks like"
     ],
     "rows": [
      [
       "1",
       "Partial",
       "Ad hoc, reactive; limited awareness of cyber risk at organisational level"
      ],
      [
       "2",
       "Risk informed",
       "Management approves risk practices but they are not organisation-wide policy"
      ],
      [
       "3",
       "Repeatable",
       "Formally approved, consistently applied and updated as threats and business change"
      ],
      [
       "4",
       "Adaptive",
       "Practices adapt from lessons and predictive indicators; cyber risk part of culture and decisions"
      ]
     ],
     "title": "Implementation tiers (described in our words)"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Tier 4 everywhere is expensive and unnecessary for many organisations. Choose a target tier that matches risk and resources. A regional garment exporter may sensibly target Tier 2 to 3; a central bank's payment system would aim higher.",
     "title": "Tiers are not maturity scores to maximise"
    },
    {
     "type": "scenario",
     "title": "Choosing the first use of CSF",
     "situation": "A Dhaka-based mobile financial services provider has dozens of security tools but no board-approved cyber strategy, unclear risk ownership and growing regulator questions. The new CISO wants to adopt CSF 2.0. Which focus should come FIRST?",
     "options": [
      {
       "text": "Score all 106 subcategories at once and present the average to the board.",
       "feedback": "A large self-assessment without priorities produces a number, not decisions. Averages hide what matters.",
       "best": false
      },
      {
       "text": "Start with Detect, because tools already exist and quick wins are visible.",
       "feedback": "Improving tool use is useful later, but it does not fix missing direction and ownership.",
       "best": false
      },
      {
       "text": "Assess Govern outcomes (context, risk strategy, roles, policy and oversight) and use the gaps to shape the target profile for the rest.",
       "feedback": "Best. The symptoms point to a governance gap. Govern outcomes give direction for prioritising Identify through Recover.",
       "best": true
      },
      {
       "text": "Aim for Tier 4 in every function to impress the regulator.",
       "feedback": "An unaffordable target damages credibility and ignores risk-based prioritisation.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "CSF profile gap register",
     "purpose": "Record current and target outcomes for selected subcategories and turn the differences into prioritised, owned actions.",
     "columns": [
      "Function.Category",
      "Outcome in our words",
      "Current state (evidence)",
      "Target state and date",
      "Gap and action",
      "Owner",
      "Priority"
     ],
     "example": [
      [
       "GV.RR",
       "Roles and authorities for cyber risk are defined and communicated",
       "Informal; CISO role only in job description",
       "Board-approved RACI by Q2",
       "Draft RACI, approve at risk committee",
       "Chief Risk Officer",
       "High"
      ],
      [
       "PR.AA",
       "Identities and access are managed for users, services and hardware",
       "MFA for 60% of staff; no service account inventory",
       "Phishing-resistant MFA for admins; NHI inventory by Q3",
       "MFA rollout; service account discovery",
       "Head of IAM",
       "High"
      ]
     ],
     "rows": 8
    },
    {
     "type": "reflection",
     "prompt": "If you had to present only three CSF outcomes to your board this year, which would they be and why? What evidence would show progress?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "NIST CSF 2.0",
       "def": "A voluntary, outcome-based cybersecurity framework from the US National Institute of Standards and Technology, released in 2024 with six functions."
      },
      {
       "term": "Govern function",
       "def": "The CSF 2.0 function covering context, risk strategy, roles, policy, oversight and supply-chain risk management; it informs the other five."
      },
      {
       "term": "CSF Core",
       "def": "The hierarchy of functions, categories and subcategories describing desired cybersecurity outcomes."
      },
      {
       "term": "Subcategory",
       "def": "The most specific CSF outcome statement, used for assessment and target setting."
      },
      {
       "term": "Organisational profile",
       "def": "A description of an organisation's current or target cybersecurity outcomes, used to find and prioritise gaps."
      },
      {
       "term": "Community profile",
       "def": "A shared target profile for a sector, threat or technology that organisations can adapt."
      },
      {
       "term": "Implementation tier",
       "def": "One of four levels (Partial, Risk informed, Repeatable, Adaptive) describing the rigour of cyber risk practices."
      },
      {
       "term": "Informative reference",
       "def": "A mapping from a CSF outcome to a specific clause or control in another standard or guide."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which function was added in CSF 2.0?",
       "options": [
        "Identify",
        "Recover",
        "Assure",
        "Govern"
       ],
       "answer": 3,
       "explain": "CSF 2.0 added Govern to the original five functions. Assure is not a CSF function."
      },
      {
       "q": "A team writes down which CSF outcomes it achieves today and which it must achieve in 18 months. What are they creating?",
       "options": [
        "Implementation tiers",
        "Current and target organisational profiles",
        "Informative references",
        "A community profile shared across the whole sector"
       ],
       "answer": 1,
       "explain": "Profiles capture current and target outcomes. Tiers describe rigour, references are mappings, and a community profile is shared across organisations."
      },
      {
       "q": "What is the most accurate description of CSF implementation tiers?",
       "options": [
        "Mandatory certification levels issued by NIST",
        "A ranking of control strength for each subcategory",
        "Levels of rigour in risk practices, chosen to fit the organisation",
        "Maturity scores that every organisation should push to the highest level as quickly as possible"
       ],
       "answer": 2,
       "explain": "Tiers characterise practices and should be set to fit risk and resources; NIST does not certify against them."
      },
      {
       "q": "Why are informative references useful to a GRC team?",
       "options": [
        "They link CSF outcomes to controls in other standards, reducing duplicate work",
        "They replace the need for risk assessment",
        "They list the legal requirements that apply to each sector and country using CSF",
        "They define the budget for each function"
       ],
       "answer": 0,
       "explain": "References map outcomes to frameworks such as ISO/IEC 27001 or the CIS Controls, which supports crosswalks and shared evidence."
      },
      {
       "q": "Which statement about CSF 2.0 is correct?",
       "options": [
        "It mandates specific product categories and configurations for each of the six functions",
        "It describes outcomes and leaves the choice of specific controls to the organisation",
        "It applies only to US critical infrastructure",
        "It replaces the need for an ISMS"
       ],
       "answer": 1,
       "explain": "CSF is outcome-based and voluntary; version 2.0 explicitly addresses organisations of all sizes and sectors."
      }
     ]
    }
   ]
  },
  {
   "id": "m1-l3",
   "title": "ISO/IEC 27001:2022: Building and Certifying an ISMS",
   "subtitle": "A management-system approach to information security that auditors can certify",
   "minutes": 35,
   "objectives": [
    "Describe the clause structure of an ISMS and the Plan-Do-Check-Act logic behind it",
    "Explain the four Annex A themes and how a Statement of Applicability is built",
    "Plan a realistic certification journey and avoid common audit failures"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "**ISO/IEC 27001** specifies requirements for an **information security management system (ISMS)**: a set of policies, processes, roles and controls that an organisation uses to manage information security risk and to improve continually. Unlike CSF, it is **certifiable**: an accredited certification body can audit you and issue a certificate for a defined scope. The 2022 edition reorganised its control annex; certificates against the older 2013 edition had to transition by 31 October 2025."
    },
    {
     "type": "flow",
     "title": "The ISMS as a management cycle",
     "items": [
      {
       "label": "Plan",
       "text": "Context, scope, leadership, risk assessment and treatment plan"
      },
      {
       "label": "Do",
       "text": "Implement controls, train people, operate processes"
      },
      {
       "label": "Check",
       "text": "Monitor, measure, internal audit, management review"
      },
      {
       "label": "Act",
       "text": "Correct nonconformities and improve continually"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Clause",
      "Theme",
      "Key expectations"
     ],
     "rows": [
      [
       "4",
       "Context",
       "Understand internal and external issues and interested parties; define ISMS scope"
      ],
      [
       "5",
       "Leadership",
       "Top management commitment, information security policy, roles and authorities"
      ],
      [
       "6",
       "Planning",
       "Risk assessment and treatment process, objectives, planning of changes"
      ],
      [
       "7",
       "Support",
       "Resources, competence, awareness, communication, documented information"
      ],
      [
       "8",
       "Operation",
       "Run the planned processes, perform risk assessments and treatment"
      ],
      [
       "9",
       "Performance evaluation",
       "Monitoring and measurement, internal audit, management review"
      ],
      [
       "10",
       "Improvement",
       "Nonconformity, corrective action and continual improvement"
      ]
     ],
     "title": "Mandatory clauses 4 to 10 (our summary)"
    },
    {
     "type": "framework",
     "title": "Annex A: four control themes (93 controls)",
     "items": [
      {
       "label": "A.5",
       "title": "Organisational (37)",
       "text": "Policies, roles, asset and information management, supplier relationships, cloud use, incident management, continuity readiness, legal and privacy."
      },
      {
       "label": "A.6",
       "title": "People (8)",
       "text": "Screening, terms of employment, awareness and training, disciplinary process, remote working and event reporting."
      },
      {
       "label": "A.7",
       "title": "Physical (14)",
       "text": "Perimeters, entry, offices, monitoring, equipment siting, storage media, utilities, cabling and secure disposal."
      },
      {
       "label": "A.8",
       "title": "Technological (34)",
       "text": "Endpoints, privileged access, authentication, malware, vulnerabilities, configuration, logging, network and application security, secure development."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "The 2022 edition introduced controls such as threat intelligence, information security for cloud services, ICT readiness for business continuity, physical security monitoring, configuration management, information deletion, data masking, data leakage prevention, monitoring activities, web filtering and secure coding. They signal what auditors now expect a modern ISMS to address.",
     "title": "Controls added in 2022 worth knowing"
    },
    {
     "type": "text",
     "text": "The **Statement of Applicability (SoA)** is the bridge between risk and controls. For every Annex A control it records whether the control is included, why (risk, legal, contractual or business reason), whether it is implemented, and, if excluded, why. Annex A is a reference list: you may add controls from other sources, and you compare your chosen controls against Annex A to make sure nothing necessary was omitted."
    },
    {
     "type": "steps",
     "title": "A pragmatic certification journey",
     "items": [
      {
       "title": "Define scope",
       "text": "Choose a scope that matters to customers and regulators and that you can control, such as the payment platform and its supporting teams."
      },
      {
       "title": "Gap assessment",
       "text": "Compare current practice to clauses 4 to 10 and Annex A; estimate effort."
      },
      {
       "title": "Risk assessment and treatment",
       "text": "Run a documented method; select controls; produce the SoA and treatment plan approved by risk owners."
      },
      {
       "title": "Implement and operate",
       "text": "Run controls for long enough to generate evidence, typically three months or more."
      },
      {
       "title": "Internal audit and management review",
       "text": "Audit the whole ISMS once and hold a management review before certification."
      },
      {
       "title": "Stage 1 audit",
       "text": "The certification body reviews documentation and readiness."
      },
      {
       "title": "Stage 2 audit",
       "text": "Auditors test implementation and effectiveness; nonconformities must be corrected."
      },
      {
       "title": "Surveillance and recertification",
       "text": "Annual surveillance audits and full recertification every three years."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "A scope that excludes the systems customers care about; risk assessments copied from templates; an SoA that does not match reality; no evidence that management review happened; internal audit performed by the people who run the controls; and metrics that were invented the week before the audit.",
     "title": "Common reasons ISMS audits go badly"
    },
    {
     "type": "case",
     "title": "A certificate that did not reassure",
     "context": "A software house in Dhaka supplies a hospital network with a patient-records platform. It holds an ISO/IEC 27001 certificate and the hospital's procurement team accepted it without further questions. After a breach traced to the vendor's production cloud environment, the hospital learns the certificate scope covered only the company's head-office IT and HR processes, not product development or cloud hosting.",
     "questions": [
      "What should the hospital have checked before relying on the certificate?",
      "Was the vendor's certificate misleading, and what is the governance lesson for the vendor?",
      "How should the hospital's supplier assurance process change?"
     ],
     "answer": "The hospital should have read the certificate's scope statement and asked for the SoA summary and the certification body's accreditation; a certificate only covers what is in scope. The vendor did nothing technically invalid, but presenting a narrow certificate as assurance for a service it did not cover is a governance and trust failure; the scope should cover the service sold to customers. The hospital should require scope confirmation, evidence for out-of-scope service components, contractual security obligations and the right to further assurance for critical suppliers."
    },
    {
     "type": "template",
     "title": "Statement of Applicability extract",
     "purpose": "Record, for each control, whether it applies, why, and its implementation status, so auditors and managers can trace controls back to risk.",
     "columns": [
      "Control",
      "Applicable?",
      "Justification",
      "Implementation status",
      "Evidence location",
      "Owner"
     ],
     "example": [
      [
       "A.8.24 Use of cryptography",
       "Yes",
       "Risk R-12 data disclosure; contract with bank partners",
       "Implemented for data at rest; TLS 1.2+ enforced",
       "Crypto standard v3; config reports",
       "Head of platform"
      ],
      [
       "A.7.5 Protecting against physical and environmental threats",
       "Yes",
       "Flood risk at Chattogram data room",
       "Partially implemented; raised plinth planned Q3",
       "Facilities risk report",
       "Facilities manager"
      ]
     ],
     "rows": 8
    },
    {
     "type": "reflection",
     "prompt": "If your organisation pursued ISO/IEC 27001 certification next year, which scope would give customers the most confidence while staying achievable? What would you leave out and why?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "ISMS",
       "def": "Information security management system: the policies, processes, roles and controls used to manage information security risk and improve continually."
      },
      {
       "term": "ISO/IEC 27001",
       "def": "The international standard specifying requirements for establishing, running and improving an ISMS; organisations can be certified against it."
      },
      {
       "term": "Annex A",
       "def": "The reference list of 93 information security controls in ISO/IEC 27001:2022, grouped into organisational, people, physical and technological themes."
      },
      {
       "term": "Statement of Applicability",
       "def": "A document listing each control, whether it is applicable, why, and its implementation status."
      },
      {
       "term": "Certification scope",
       "def": "The defined boundary of organisation, locations, services and assets covered by an ISMS certificate."
      },
      {
       "term": "Nonconformity",
       "def": "A failure to meet a requirement of the standard or of the organisation's own ISMS; major ones can block certification."
      },
      {
       "term": "Management review",
       "def": "A planned review by top management of ISMS performance, risks, audit results and improvement opportunities."
      },
      {
       "term": "Surveillance audit",
       "def": "A periodic audit by the certification body between recertifications to confirm the ISMS still works."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "What makes ISO/IEC 27001 different from NIST CSF in practice?",
       "options": [
        "It is purely a list of technical controls with no management requirements",
        "It does not require risk assessment",
        "It is only for government agencies",
        "Organisations can be certified against it by an accredited body"
       ],
       "answer": 3,
       "explain": "27001 specifies management-system requirements against which organisations are audited and certified; CSF is voluntary guidance without certification."
      },
      {
       "q": "Which Annex A theme contains controls on screening, awareness and disciplinary processes?",
       "options": [
        "Organisational",
        "Physical",
        "People",
        "Technological"
       ],
       "answer": 2,
       "explain": "The people theme (A.6) has eight controls covering the employment life cycle and awareness."
      },
      {
       "q": "A control from Annex A is not relevant to a company. What must the SoA show?",
       "options": [
        "Nothing, because only included controls are listed",
        "That it is implemented anyway, since every Annex A control is mandatory",
        "That it is excluded and the justification for exclusion",
        "A management signature for every control"
       ],
       "answer": 2,
       "explain": "The SoA covers every Annex A control and justifies inclusion or exclusion."
      },
      {
       "q": "Which activity belongs to the Check phase of an ISMS?",
       "options": [
        "Defining scope and interested parties",
        "Implementing endpoint controls",
        "Correcting a nonconformity",
        "Internal audit and management review"
       ],
       "answer": 3,
       "explain": "Check covers monitoring, measurement, audit and review; correction belongs to Act."
      },
      {
       "q": "A procurement team receives a supplier's ISO/IEC 27001 certificate. What should it check first?",
       "options": [
        "The total number of Annex A controls the supplier says it has implemented",
        "Whether the certificate scope covers the service being bought",
        "Whether the certificate is printed on letterhead",
        "The supplier's market share"
       ],
       "answer": 1,
       "explain": "A certificate is only meaningful for its scope; many failures come from relying on narrow scopes."
      }
     ]
    }
   ]
  },
  {
   "id": "m1-l4",
   "title": "CIS Controls and COBIT-Style Governance of Enterprise IT",
   "subtitle": "Prioritised technical safeguards meet structured governance objectives",
   "minutes": 30,
   "objectives": [
    "Use the CIS Controls and implementation groups to prioritise technical safeguards",
    "Explain COBIT-style governance and management objectives and capability levels",
    "Decide when each framework is the right tool for a problem"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Frameworks answer different questions. **CSF** asks what outcomes you need. **ISO/IEC 27001** asks whether you have a management system that keeps risk under control. The **CIS Critical Security Controls** ask which concrete safeguards stop the most common attacks first. **COBIT**, published by ISACA, asks how the whole of enterprise IT, including security, is governed and managed to create value. An expert leader uses each for its strength rather than arguing about which is best."
    },
    {
     "type": "table",
     "head": [
      "#",
      "Control area",
      "#",
      "Control area"
     ],
     "rows": [
      [
       "1",
       "Inventory of enterprise assets",
       "10",
       "Malware defences"
      ],
      [
       "2",
       "Inventory of software assets",
       "11",
       "Data recovery"
      ],
      [
       "3",
       "Data protection",
       "12",
       "Network infrastructure management"
      ],
      [
       "4",
       "Secure configuration",
       "13",
       "Network monitoring and defence"
      ],
      [
       "5",
       "Account management",
       "14",
       "Security awareness and skills training"
      ],
      [
       "6",
       "Access control management",
       "15",
       "Service provider management"
      ],
      [
       "7",
       "Continuous vulnerability management",
       "16",
       "Application software security"
      ],
      [
       "8",
       "Audit log management",
       "17",
       "Incident response management"
      ],
      [
       "9",
       "Email and web browser protections",
       "18",
       "Penetration testing"
      ]
     ],
     "title": "The 18 CIS Controls (version 8.1, in short)"
    },
    {
     "type": "compare",
     "title": "CIS implementation groups",
     "columns": [
      {
       "title": "IG1: essential hygiene",
       "items": [
        "56 safeguards",
        "Small or resource-limited organisations",
        "Defends against common, untargeted attacks",
        "The minimum every organisation should meet"
       ]
      },
      {
       "title": "IG2: adds 74 safeguards",
       "items": [
        "Organisations with IT staff and some sensitive data",
        "Handles more complex environments and regulation",
        "Builds on IG1"
       ]
      },
      {
       "title": "IG3: all 153 safeguards",
       "items": [
        "Organisations with dedicated security experts",
        "Sensitive data and targeted attackers",
        "Includes advanced testing and monitoring"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "A Gazipur garment group with 4,000 workers and a six-person IT team cannot run a full SOC. By committing to IG1 first, it inventories laptops and production PCs, enforces MFA for email and remote access, patches internet-facing systems quickly, keeps offline backups of the ERP and trains supervisors to report suspicious messages. These steps block most of the attacks it actually faces.",
     "title": "IG1 at a garment factory group"
    },
    {
     "type": "text",
     "text": "**COBIT** treats governance and management of enterprise information and technology as a system. In its 2019 edition it defines 40 **governance and management objectives** grouped into five domains. One domain is governance (evaluate, direct and monitor); four are management. Each objective is supported by components such as processes, organisational structures, policies, information flows, culture, skills and infrastructure. Design factors such as strategy, risk profile, sourcing model and threat landscape tailor which objectives matter most."
    },
    {
     "type": "layers",
     "title": "COBIT-style objective domains",
     "items": [
      {
       "label": "EDM: Evaluate, Direct and Monitor",
       "parts": [
        "Governance objectives for the board",
        "Benefits, risk optimisation, resource optimisation, stakeholder engagement"
       ]
      },
      {
       "label": "APO: Align, Plan and Organise",
       "parts": [
        "Strategy, architecture, budget, risk, security management, suppliers"
       ]
      },
      {
       "label": "BAI: Build, Acquire and Implement",
       "parts": [
        "Programmes, requirements, solutions, change, configuration"
       ]
      },
      {
       "label": "DSS: Deliver, Service and Support",
       "parts": [
        "Operations, service requests, problems, continuity, security services, business process controls"
       ]
      },
      {
       "label": "MEA: Monitor, Evaluate and Assess",
       "parts": [
        "Performance, internal control, compliance, assurance"
       ]
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Level",
      "Meaning"
     ],
     "rows": [
      [
       "0",
       "Lack of basic capability; activities missing or incomplete"
      ],
      [
       "1",
       "Process more or less achieves its purpose through incomplete activities"
      ],
      [
       "2",
       "Basic activities performed; process achieves its purpose"
      ],
      [
       "3",
       "Process is well defined, documented and consistently performed"
      ],
      [
       "4",
       "Process is measured and controlled with quantitative data"
      ],
      [
       "5",
       "Process is continuously improved using measurement"
      ]
     ],
     "title": "Capability levels for a process (COBIT-style, 0 to 5)"
    },
    {
     "type": "table",
     "head": [
      "Question",
      "Best fit",
      "Why"
     ],
     "rows": [
      [
       "Which safeguards should we implement first with limited staff?",
       "CIS Controls IG1",
       "Prescriptive, prioritised, measurable"
      ],
      [
       "How do we show customers our security is managed and audited?",
       "ISO/IEC 27001",
       "Certifiable management system"
      ],
      [
       "How do we describe our programme to the board and regulators?",
       "NIST CSF 2.0",
       "Plain outcome language, profiles and tiers"
      ],
      [
       "How is IT, including security, governed with the rest of the enterprise?",
       "COBIT-style objectives",
       "Links IT governance to enterprise goals and assurance"
      ]
     ],
     "title": "Which framework for which question?"
    },
    {
     "type": "scenario",
     "title": "Framework choice for a bank subsidiary",
     "situation": "The IT subsidiary of a Bangladeshi commercial bank already holds ISO/IEC 27001 certification for its data centre. The parent board now complains that it cannot see how IT investment, IT risk and security decisions connect to business goals, and internal audit struggles to assess IT governance consistently. Which addition helps MOST?",
     "options": [
      {
       "text": "Replace ISO/IEC 27001 with the CIS Controls.",
       "feedback": "This throws away a certified management system and still does not address governance of IT investment.",
       "best": false
      },
      {
       "text": "Extend the ISMS scope to every branch first.",
       "feedback": "Scope expansion may be useful later but does not answer the board's governance question.",
       "best": false
      },
      {
       "text": "Buy a GRC tool that produces dashboards.",
       "feedback": "A tool can support governance but cannot design decision rights or objectives on its own.",
       "best": false
      },
      {
       "text": "Adopt COBIT-style governance and management objectives to structure IT governance, decision rights and assurance across the subsidiary.",
       "feedback": "Best. The gap is enterprise IT governance and assurance, which is COBIT's focus. The ISMS remains in place for security management.",
       "best": true
      }
     ]
    },
    {
     "type": "checklist",
     "title": "Choosing and combining frameworks",
     "items": [
      "Name the question each framework will answer before adopting it",
      "Select one anchor framework for reporting and map others to it",
      "Use CIS Controls safeguards as measurable technical baselines",
      "Keep ISO/IEC 27001 scope aligned with services customers rely on",
      "Use COBIT-style objectives where IT governance and audit need structure",
      "Avoid running separate assessments for each framework on the same control"
     ]
    },
    {
     "type": "reflection",
     "prompt": "Which framework does your organisation lean on most, and which question is it currently being asked to answer that it was not designed for?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "CIS Controls",
       "def": "A prioritised set of 18 cyber defence controls and 153 safeguards maintained by the Center for Internet Security."
      },
      {
       "term": "Safeguard",
       "def": "A specific, measurable action within a CIS Control, such as maintaining a software inventory."
      },
      {
       "term": "Implementation group",
       "def": "One of three CIS tiers (IG1 to IG3) indicating which safeguards suit an organisation's resources and risk."
      },
      {
       "term": "Essential cyber hygiene",
       "def": "The IG1 baseline of safeguards that every organisation should implement to resist common attacks."
      },
      {
       "term": "COBIT",
       "def": "ISACA's framework for governance and management of enterprise information and technology."
      },
      {
       "term": "Governance objective",
       "def": "A COBIT-style objective for the governing body: evaluate options, direct management and monitor results."
      },
      {
       "term": "Design factor",
       "def": "A characteristic such as strategy, risk profile or sourcing model used to tailor a governance system."
      },
      {
       "term": "Capability level",
       "def": "A 0 to 5 rating of how well a process achieves its purpose and is defined, measured and improved."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A small NGO with one IT officer wants a practical technical starting point. Which is most suitable?",
       "options": [
        "CIS Controls implementation group 1",
        "COBIT capability level 5 for all processes",
        "ISO/IEC 27001 certification of the whole NGO",
        "CSF Tier 4 in every function"
       ],
       "answer": 0,
       "explain": "IG1 is designed for organisations with limited resources and focuses on essential hygiene."
      },
      {
       "q": "Which COBIT-style domain contains governance (as opposed to management) objectives?",
       "options": [
        "Evaluate, Direct and Monitor",
        "Align, Plan and Organise",
        "Deliver, Service and Support",
        "Monitor, Evaluate and Assess"
       ],
       "answer": 0,
       "explain": "EDM is the governance domain; the other four contain management objectives."
      },
      {
       "q": "A process is documented and consistently performed but not yet measured quantitatively. Which capability level fits best?",
       "options": [
        "Level 1",
        "Level 3",
        "Level 4",
        "Level 5"
       ],
       "answer": 1,
       "explain": "Level 3 is defined and consistent; level 4 adds quantitative measurement and control."
      },
      {
       "q": "Why might an organisation use both ISO/IEC 27001 and the CIS Controls?",
       "options": [
        "CIS Controls are required for ISO certification",
        "ISO/IEC 27001 forbids other frameworks",
        "They cover entirely unrelated subjects, so using both never creates any overlap or duplicated effort",
        "The ISMS manages risk systematically while CIS safeguards give concrete technical baselines"
       ],
       "answer": 3,
       "explain": "The two complement each other: one provides the management system, the other prescriptive safeguards that can be mapped into the SoA."
      },
      {
       "q": "Which CIS Control most directly addresses keeping offline, tested backups?",
       "options": [
        "Audit log management",
        "Secure configuration",
        "Data recovery",
        "Penetration testing"
       ],
       "answer": 2,
       "explain": "Data recovery (Control 11) covers backup and restoration practices."
      }
     ]
    }
   ]
  },
  {
   "id": "m1-l5",
   "title": "Policy Architecture, Crosswalks and the GRC Operating Model",
   "subtitle": "Turning frameworks into a lean set of policies, one control library and an operating rhythm",
   "minutes": 35,
   "objectives": [
    "Design a layered policy architecture that people actually follow",
    "Build a unified control framework that maps one control to many obligations",
    "Set up a GRC operating rhythm with exceptions, attestations and reporting"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Most organisations do not suffer from too few policies; they suffer from too many, written in different styles, never reviewed and impossible to test. A **policy architecture** separates what the board mandates from how teams comply. A **unified control framework (UCF)** then lets one well-designed control satisfy many frameworks and regulations at once, so teams test once and report many times."
    },
    {
     "type": "layers",
     "title": "A layered policy architecture",
     "items": [
      {
       "label": "Policy",
       "parts": [
        "Short statements of intent and principles",
        "Approved by board or executive committee",
        "Changes rarely"
       ]
      },
      {
       "label": "Standards",
       "parts": [
        "Mandatory, measurable requirements",
        "Owned by CISO or domain owner",
        "Example: admin accounts use phishing-resistant MFA"
       ]
      },
      {
       "label": "Procedures",
       "parts": [
        "Step-by-step how-to for a team",
        "Owned by the operating team",
        "Example: how to request privileged access"
       ]
      },
      {
       "label": "Guidelines",
       "parts": [
        "Recommended practice, not mandatory",
        "Helps people make good choices"
       ]
      },
      {
       "label": "Evidence",
       "parts": [
        "Records, reports and logs proving the standard is met",
        "Feeds audits and metrics"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "A top-level information security policy that fits on two pages, avoids technical detail and names who owns what is far more likely to be read, approved and enforced. Push detail down into standards that can change without board approval.",
     "title": "The two-page policy test"
    },
    {
     "type": "steps",
     "title": "Building a unified control framework",
     "items": [
      {
       "title": "List obligations",
       "text": "Collect regulations, contracts, certifications and internal policies that apply."
      },
      {
       "title": "Pick an anchor",
       "text": "Choose one structure (often CSF categories or ISO Annex A) to organise controls."
      },
      {
       "title": "Write controls once",
       "text": "Define each control with objective, owner, frequency, evidence and test method."
      },
      {
       "title": "Map obligations",
       "text": "Link each control to every requirement it satisfies: ISO, CIS, sector rules, customer clauses."
      },
      {
       "title": "Find gaps and overlaps",
       "text": "Unmapped requirements are gaps; duplicate controls are merged."
      },
      {
       "title": "Test once, report many",
       "text": "Collect evidence once per control and reuse it for every mapped obligation."
      }
     ]
    },
    {
     "type": "template",
     "title": "Unified control library entry",
     "purpose": "Describe one control so that it can be owned, tested and mapped to many frameworks.",
     "columns": [
      "Control ID",
      "Control statement",
      "Owner",
      "Frequency",
      "Evidence",
      "Mapped to",
      "Test method"
     ],
     "example": [
      [
       "IAM-04",
       "Privileged accounts use phishing-resistant MFA and are reviewed quarterly",
       "Head of IAM",
       "Continuous; review quarterly",
       "MFA policy report; signed review",
       "CSF PR.AA; ISO A.8.2, A.8.5; CIS 5, 6; Bangladesh Bank ICT guideline access section",
       "Sample 25 admin accounts; inspect review records"
      ]
     ],
     "rows": 8
    },
    {
     "type": "text",
     "text": "Policies always meet reality. An **exception process** lets a business proceed with a documented deviation when the risk is understood and accepted by the right person for a limited time. Without one, teams either stop work or quietly ignore the policy. With one that is too easy, exceptions become permanent. Good exception processes have risk-based approval thresholds, compensating controls, an expiry date and visible reporting."
    },
    {
     "type": "flow",
     "title": "Policy exception lifecycle",
     "items": [
      {
       "label": "Request",
       "text": "Requester states standard, reason, scope and duration"
      },
      {
       "label": "Assess",
       "text": "Security assesses risk and compensating controls"
      },
      {
       "label": "Approve",
       "text": "Owner at the right authority level accepts risk"
      },
      {
       "label": "Track",
       "text": "Exception recorded with expiry and owner"
      },
      {
       "label": "Review",
       "text": "Renew, remediate or close before expiry"
      },
      {
       "label": "Report",
       "text": "Exception volume and age reported to risk committee"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Cadence",
      "Activity",
      "Audience"
     ],
     "rows": [
      [
       "Weekly",
       "Exception and high-risk finding review",
       "Security leadership"
      ],
      [
       "Monthly",
       "Control health metrics, overdue remediation",
       "CISO and domain owners"
      ],
      [
       "Quarterly",
       "Risk register refresh, KRI review, top risks",
       "Executive risk committee"
      ],
      [
       "Half-yearly",
       "Policy and standard attestation by managers",
       "All people leaders"
      ],
      [
       "Annually",
       "Policy review, framework profile refresh, board deep dive",
       "Board or risk committee"
      ]
     ],
     "title": "GRC operating rhythm"
    },
    {
     "type": "scenario",
     "title": "Exceptions out of control",
     "situation": "A university in Rajshahi has 140 open security exceptions, 90 of them older than a year and many approved by the IT help desk. Auditors call the exception process ineffective. What is the BEST first change?",
     "options": [
      {
       "text": "Introduce risk-based approval levels with mandatory expiry dates, then review all existing exceptions with their owners and report ageing to the risk committee.",
       "feedback": "Best. It fixes authority and time limits, cleans up the backlog and makes the problem visible to governance.",
       "best": true
      },
      {
       "text": "Close all exceptions immediately and enforce the policy.",
       "feedback": "Forcing compliance overnight may break teaching or research systems and ignores why the exceptions exist.",
       "best": false
      },
      {
       "text": "Rewrite the security policy so fewer exceptions are needed.",
       "feedback": "Some standards may need revision, but that does not address unauthorised approvals or missing expiry.",
       "best": false
      },
      {
       "text": "Move exception approval to the vice-chancellor's office for every case.",
       "feedback": "Escalating everything overloads senior leaders and slows legitimate low-risk requests.",
       "best": false
      }
     ]
    },
    {
     "type": "case",
     "title": "One control, five frameworks",
     "context": "An MFS provider must satisfy Bangladesh Bank guidance, PCI DSS for card services, ISO/IEC 27001 certification and contractual requirements from two international partner banks. Each team runs its own assessment, so the identity team answers four different questionnaires on access reviews each year and still receives findings.",
     "questions": [
      "What is the root cause of duplicate effort?",
      "How would a unified control framework change the identity team's year?",
      "What governance decision is needed to make it work?"
     ],
     "answer": "The root cause is that each obligation is managed separately rather than through a single control library. With a UCF the identity team owns a small set of well-defined controls (for example quarterly privileged access review), each mapped to every relevant requirement; evidence is gathered once and reused, and testing is coordinated. The governance decision is to appoint one GRC owner for the library, agree the anchor structure and require all assurance teams to use it."
    },
    {
     "type": "reflection",
     "prompt": "Pick one security standard in your organisation. Who owns it, when was it last reviewed, how is compliance measured and how many exceptions exist against it?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Policy architecture",
       "def": "A layered structure of policies, standards, procedures and guidelines with clear owners and approval levels."
      },
      {
       "term": "Standard",
       "def": "A mandatory, measurable requirement that implements a policy, such as minimum encryption settings."
      },
      {
       "term": "Procedure",
       "def": "Step-by-step instructions for performing a task in line with a standard."
      },
      {
       "term": "Unified control framework",
       "def": "A single library of controls, each mapped to all the frameworks and obligations it satisfies."
      },
      {
       "term": "Crosswalk",
       "def": "A mapping between requirements in two or more frameworks showing where they overlap."
      },
      {
       "term": "Policy exception",
       "def": "A documented, time-limited and approved deviation from a policy or standard with accepted risk."
      },
      {
       "term": "Compensating control",
       "def": "An alternative control that reduces risk when the required control cannot be applied."
      },
      {
       "term": "Attestation",
       "def": "A formal confirmation by a manager or owner that requirements are understood and met."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which document should contain a requirement such as 'TLS 1.2 or higher for all external services'?",
       "options": [
        "The board-approved policy",
        "A guideline",
        "A procedure for help-desk staff",
        "A standard"
       ],
       "answer": 3,
       "explain": "Measurable mandatory technical requirements belong in standards so they can change without board approval."
      },
      {
       "q": "What is the main benefit of a unified control framework?",
       "options": [
        "It removes the need for audits",
        "It replaces all regulations",
        "Evidence is collected once per control and reused for many obligations",
        "It lets each assurance team keep its own control definitions and testing calendar"
       ],
       "answer": 2,
       "explain": "A UCF reduces duplication by mapping one control to many requirements."
      },
      {
       "q": "Which feature is essential in a healthy exception process?",
       "options": [
        "Unlimited duration once approved",
        "An expiry date with review before renewal",
        "Approval by a peer in the requester's own team to keep things fast",
        "No reporting, to protect the business"
       ],
       "answer": 1,
       "explain": "Expiry forces review and stops temporary exceptions becoming permanent."
      },
      {
       "q": "A compensating control is best described as:",
       "options": [
        "An alternative safeguard that reduces risk when the required control cannot be applied",
        "A control that compensates staff for overtime",
        "A control added only after an external audit finding has been raised against the organisation",
        "A duplicate control kept for redundancy"
       ],
       "answer": 0,
       "explain": "Compensating controls provide comparable risk reduction by other means."
      },
      {
       "q": "Who should normally approve a high-risk exception to the access control standard for a core banking system?",
       "options": [
        "Any member of the IT service desk who is on duty when the request is logged",
        "The accountable business owner at the authority level set for high risks",
        "The person requesting the exception",
        "The external auditor"
       ],
       "answer": 1,
       "explain": "Risk acceptance requires the right owner and authority level; auditors must stay independent."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m2",
 "order": 2,
 "code": "Quantify",
 "title": "Risk Assessment and Cyber-Risk Quantification",
 "subtitle": "Turn cyber risk into decision-ready estimates of frequency, magnitude and value",
 "outcomes": [
  "Write well-formed risk scenarios and choose a fit-for-purpose assessment method",
  "Set risk appetite, tolerances and accountable treatment decisions",
  "Apply FAIR-style decomposition with calibrated ranges",
  "Use Monte Carlo results, loss exceedance curves and ROSI to compare investments",
  "Keep scenarios current using threat intelligence and near misses"
 ],
 "lessons": [
  {
   "id": "m2-l1",
   "title": "Risk Assessment Methods and the Limits of Heat Maps",
   "subtitle": "From asset lists to decision-ready risk statements",
   "minutes": 30,
   "objectives": [
    "Write well-formed cyber risk statements that link threat, weakness and business impact",
    "Compare asset-based, scenario-based and threat-based assessment approaches",
    "Explain why ordinal heat maps mislead and when they are still acceptable"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A **risk** is the effect of uncertainty on objectives. In cyber terms, it is the possibility that a **threat** exploits a **weakness** to cause a **loss** to something the organisation values. A risk assessment identifies such possibilities, estimates how often they might happen and how much they could cost, and compares the result with the organisation's appetite. The output is not a colourful chart; it is information that helps someone decide what to do and how much to spend."
    },
    {
     "type": "flow",
     "title": "A well-formed risk statement",
     "items": [
      {
       "label": "Threat",
       "text": "Who or what could act: a ransomware group, an insider, a flood"
      },
      {
       "label": "Event",
       "text": "What happens: encrypts the hospital's patient system"
      },
      {
       "label": "Weakness",
       "text": "Why it could succeed: flat network, no offline backups"
      },
      {
       "label": "Asset or service",
       "text": "What is affected: outpatient and emergency services"
      },
      {
       "label": "Consequence",
       "text": "Business impact: 5 days of disruption, diverted ambulances, regulatory scrutiny"
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "**Weak:** 'Risk of cyber attack.' **Strong:** 'A financially motivated ransomware group gains access through an unpatched VPN appliance and encrypts the core banking database, halting branch and app transactions for up to three days and triggering regulatory reporting and customer compensation.' Only the second can be estimated, owned and treated.",
     "title": "Weak versus strong"
    },
    {
     "type": "compare",
     "title": "Three ways to structure an assessment",
     "columns": [
      {
       "title": "Asset-based",
       "items": [
        "Start from an inventory of assets and their value",
        "Identify threats and vulnerabilities per asset",
        "Thorough but can produce thousands of low-value rows",
        "Common in traditional ISMS work"
       ]
      },
      {
       "title": "Scenario-based",
       "items": [
        "Start from a small set of loss scenarios that matter to the business",
        "Estimate frequency and magnitude for each",
        "Fits board conversations and quantification",
        "Risk of missing scenarios if workshops are narrow"
       ]
      },
      {
       "title": "Threat-based",
       "items": [
        "Start from threat actors and their techniques",
        "Map techniques to controls and detection",
        "Excellent for security engineering priorities",
        "Needs translation into business impact for leaders"
       ]
      }
     ]
    },
    {
     "type": "steps",
     "title": "A practical assessment cycle",
     "items": [
      {
       "title": "Establish context",
       "text": "Objectives, scope, appetite, criteria for likelihood and impact, and who must be consulted."
      },
      {
       "title": "Identify",
       "text": "List loss scenarios from business services, threat intelligence, incidents and audit findings."
      },
      {
       "title": "Analyse",
       "text": "Estimate frequency and magnitude, ideally as ranges with stated confidence."
      },
      {
       "title": "Evaluate",
       "text": "Compare with appetite and tolerance; rank by exposure and urgency."
      },
      {
       "title": "Treat",
       "text": "Choose to mitigate, transfer, avoid or accept, with an owner and plan."
      },
      {
       "title": "Monitor and review",
       "text": "Track key risk indicators and refresh when the business, threats or controls change."
      }
     ]
    },
    {
     "type": "text",
     "text": "Many organisations rate likelihood and impact from 1 to 5 and multiply them. This is quick and helps start conversations, but it has serious weaknesses. Ordinal numbers are labels, not quantities: a 4 is not twice a 2. Multiplying them creates **range compression** (very different risks land in the same cell) and **rank reversal** (a cell that looks higher can hide a smaller loss). Different people interpret 'likely' differently, and risks cannot be added up into a portfolio."
    },
    {
     "type": "table",
     "head": [
      "Problem",
      "Example",
      "Fix"
     ],
     "rows": [
      [
       "Ambiguous words",
       "'Likely' means 20% to one manager and 80% to another",
       "Anchor each level to a numeric frequency range"
      ],
      [
       "Range compression",
       "A BDT 50 lakh and a BDT 40 crore loss both score 'major'",
       "Use wider, logarithmic impact bands or real ranges"
      ],
      [
       "Cannot aggregate",
       "Twenty 'medium' risks do not add up to anything",
       "Quantify top risks in money so they can be summed"
      ],
      [
       "False precision",
       "Scores like 13.5 suggest accuracy that does not exist",
       "Show ranges and confidence instead of single scores"
      ],
      [
       "Anchoring and politics",
       "Scores drift to whatever unlocks budget",
       "Calibrate estimators and document evidence"
      ]
     ],
     "title": "Heat-map problems and practical fixes"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "A qualitative scale is acceptable for triage, for low-value risks and where data is genuinely missing, provided each level is anchored to numbers. Reserve quantitative analysis for the top risks, investment decisions and anything the board must compare with money.",
     "title": "When qualitative is enough"
    },
    {
     "type": "scenario",
     "title": "A board asks for one number",
     "situation": "The audit committee of a listed cement manufacturer asks the CISO: 'How much could we lose from cyber in a bad year?' The current register has 85 risks scored on a 5x5 matrix. What is the BEST response?",
     "options": [
      {
       "text": "Add up the 85 scores and convert the total to taka using an average loss per point.",
       "feedback": "Ordinal scores cannot be converted to money in this way; the result would be meaningless.",
       "best": false
      },
      {
       "text": "Quote the largest single breach fine reported in the industry.",
       "feedback": "A dramatic anecdote is not an estimate of this company's exposure.",
       "best": false
      },
      {
       "text": "Say that cyber losses cannot be estimated and offer more training.",
       "feedback": "Uncertainty is not a reason to give no estimate. Ranges with confidence are useful.",
       "best": false
      },
      {
       "text": "Explain that the matrix cannot answer the question, then quantify the top five loss scenarios as ranges and present an annual loss distribution with a bad-year percentile.",
       "feedback": "Best. It is honest about the method's limits and gives the committee a money-based, probabilistic answer for the risks that drive exposure.",
       "best": true
      }
     ]
    },
    {
     "type": "template",
     "title": "Cyber risk scenario register",
     "purpose": "Describe the top loss scenarios in a form that can be owned, estimated and compared with appetite.",
     "columns": [
      "ID",
      "Threat and event",
      "Weakness",
      "Service affected",
      "Frequency (range)",
      "Impact (range)",
      "Owner"
     ],
     "example": [
      [
       "CR-01",
       "Ransomware encrypts core banking and backups",
       "Flat network; backups online",
       "Branch and app payments",
       "1 in 10 to 1 in 4 years",
       "BDT 15 to 120 crore",
       "Chief Operating Officer"
      ],
      [
       "CR-02",
       "Insider exports customer data to a competitor",
       "Broad data access; weak DLP",
       "Retail lending",
       "1 in 5 to 1 in 2 years",
       "BDT 2 to 25 crore",
       "Head of retail"
      ]
     ],
     "rows": 8
    },
    {
     "type": "reflection",
     "prompt": "Take the top three risks from your organisation's register. Could a newcomer estimate how often each happens and what it would cost from the wording alone? Rewrite one using the five-part structure."
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Risk",
       "def": "The effect of uncertainty on objectives; in cyber, the possibility of loss when a threat exploits a weakness."
      },
      {
       "term": "Threat",
       "def": "Anything capable of acting against an asset to cause harm, such as a criminal group, insider or natural event."
      },
      {
       "term": "Vulnerability",
       "def": "A weakness that a threat could exploit, in technology, process or people."
      },
      {
       "term": "Loss scenario",
       "def": "A specific, plausible story of a threat event and its business consequence that can be estimated."
      },
      {
       "term": "Ordinal scale",
       "def": "A ranking scale such as 1 to 5 where numbers show order but not size; arithmetic on them is misleading."
      },
      {
       "term": "Range compression",
       "def": "The heat-map effect where very different risks fall into the same score or cell."
      },
      {
       "term": "Risk register",
       "def": "The managed record of identified risks with owners, ratings, treatments and status."
      },
      {
       "term": "Risk criteria",
       "def": "The terms of reference, including appetite and rating scales, against which risks are evaluated."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which element is missing from the statement 'Ransomware could hit our ERP'?",
       "options": [
        "The weakness and the business consequence",
        "The name of the threat actor's country of origin",
        "A five-by-five score",
        "The name of the security vendor"
       ],
       "answer": 0,
       "explain": "A useful statement names how the event could succeed and what it would cost the business."
      },
      {
       "q": "Why is multiplying a 1 to 5 likelihood by a 1 to 5 impact problematic?",
       "options": [
        "Multiplication exaggerates every score, so all risks look worse than they really are",
        "The scores are always too low",
        "Ordinal numbers show order, not quantity, so the products mislead",
        "Regulators forbid matrices"
       ],
       "answer": 2,
       "explain": "Ordinal labels cannot be treated as measurements; products compress and can reverse rankings."
      },
      {
       "q": "A threat-based assessment starts from:",
       "options": [
        "A complete inventory of hardware, software and data assets",
        "The previous year's audit report only",
        "The insurance policy schedule",
        "Threat actors and their techniques"
       ],
       "answer": 3,
       "explain": "Threat-based approaches begin with adversaries and techniques, then map controls and detection."
      },
      {
       "q": "Which practice most improves a qualitative scale?",
       "options": [
        "Adding more colours to the heat map",
        "Anchoring each level to numeric frequency and impact ranges",
        "Allowing decimals in scores",
        "Letting each assessor define the levels personally, based on experience"
       ],
       "answer": 1,
       "explain": "Anchors reduce ambiguity and make scores comparable across assessors."
      },
      {
       "q": "For which purpose is a qualitative heat map most acceptable?",
       "options": [
        "Quick triage of many lower-value risks",
        "Comparing a BDT 30 crore investment with expected loss reduction",
        "Summing total exposure for the board",
        "Pricing cyber insurance"
       ],
       "answer": 0,
       "explain": "Qualitative methods suit triage; money decisions and aggregation need quantification."
      }
     ]
    }
   ]
  },
  {
   "id": "m2-l2",
   "title": "Risk Appetite, Tolerance and Treatment",
   "subtitle": "Deciding how much cyber risk is acceptable and what to do about the rest",
   "minutes": 30,
   "objectives": [
    "Write a cyber risk appetite statement with measurable tolerances",
    "Choose between mitigation, transfer, avoidance and acceptance with sound reasoning",
    "Run a risk acceptance process that is fast, accountable and auditable"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A **risk appetite** is the amount and type of risk an organisation is willing to pursue or retain to achieve its objectives. It is set by the board. **Risk tolerance** turns appetite into measurable limits for specific risks or metrics. **Risk capacity** is the maximum loss the organisation could survive. Appetite should sit comfortably inside capacity, and tolerances should trigger action before appetite is breached."
    },
    {
     "type": "layers",
     "title": "From capacity to daily decisions",
     "items": [
      {
       "label": "Risk capacity",
       "parts": [
        "Maximum loss the organisation can absorb",
        "Capital, liquidity, licence conditions"
       ]
      },
      {
       "label": "Risk appetite",
       "parts": [
        "Board statement of how much risk to take for which goals",
        "Qualitative plus a few headline metrics"
       ]
      },
      {
       "label": "Risk tolerances",
       "parts": [
        "Measurable limits per risk type or metric",
        "Example: critical vulnerabilities on internet-facing systems fixed within 7 days, 95% of the time"
       ]
      },
      {
       "label": "Key risk indicators",
       "parts": [
        "Metrics that warn when tolerances are approached",
        "Reported monthly or quarterly"
       ]
      },
      {
       "label": "Operational limits and standards",
       "parts": [
        "Day-to-day rules teams follow"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "'We have **low appetite** for cyber events that interrupt customer payments or expose customer data, and **moderate appetite** for risk in experimenting with new digital channels, provided they are isolated from the core ledger. We will tolerate no more than **4 hours** of unplanned payment downtime per quarter and **zero** confirmed exposures of more than 1,000 customer records per year.'",
     "title": "Appetite statement for a mobile financial service"
    },
    {
     "type": "framework",
     "title": "Four treatment options",
     "items": [
      {
       "label": "T1",
       "title": "Mitigate (modify)",
       "text": "Reduce frequency or impact with controls: MFA, segmentation, backups, monitoring."
      },
      {
       "label": "T2",
       "title": "Transfer (share)",
       "text": "Shift part of the financial impact to others through insurance or contracts. Accountability stays with you."
      },
      {
       "label": "T3",
       "title": "Avoid",
       "text": "Stop or change the activity that creates the risk, such as retiring an exposed legacy service."
      },
      {
       "label": "T4",
       "title": "Accept (retain)",
       "text": "Knowingly keep the risk because it is within appetite or treatment costs more than the benefit, with owner sign-off."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Cyber insurance can pay for response, recovery and some liabilities, but it cannot restore customer trust, prevent regulatory action or bring back lost data. Policies also contain exclusions and security conditions; failing to maintain stated controls such as MFA can reduce or void cover. Treat insurance as one part of a treatment plan, not the plan.",
     "title": "Insurance does not transfer accountability"
    },
    {
     "type": "table",
     "head": [
      "Residual risk level",
      "Who may accept",
      "Maximum duration",
      "Reporting"
     ],
     "rows": [
      [
       "Low",
       "Service owner",
       "12 months",
       "Register only"
      ],
      [
       "Medium",
       "Business unit head with CISO consultation",
       "12 months",
       "Quarterly summary to risk committee"
      ],
      [
       "High",
       "Executive committee member",
       "6 months",
       "Named in risk committee report"
      ],
      [
       "Outside appetite",
       "Board or board risk committee",
       "3 months with a plan",
       "Board pack, every meeting"
      ]
     ],
     "title": "Acceptance authority by residual risk"
    },
    {
     "type": "steps",
     "title": "A disciplined treatment decision",
     "items": [
      {
       "title": "Confirm the risk",
       "text": "Check the scenario, current controls and current exposure estimate."
      },
      {
       "title": "List options",
       "text": "Include at least one mitigation, one transfer or avoidance option and 'accept'."
      },
      {
       "title": "Estimate effect and cost",
       "text": "Expected reduction in frequency or impact, cost to implement and run, time to effect."
      },
      {
       "title": "Compare with appetite",
       "text": "Choose the cheapest option that brings residual risk within tolerance."
      },
      {
       "title": "Decide and record",
       "text": "Owner approves; record rationale, residual estimate and review date."
      },
      {
       "title": "Track",
       "text": "Monitor implementation and key risk indicators; revisit if they drift."
      }
     ]
    },
    {
     "type": "scenario",
     "title": "Accept or mitigate?",
     "situation": "A garment buying house in Dhaka relies on a legacy order-tracking system that cannot support MFA. Replacing it costs BDT 3 crore and takes a year. The estimated annual loss from account takeover is BDT 20 to 40 lakh. The system will be retired in 18 months anyway. What is the BEST treatment decision?",
     "options": [
      {
       "text": "Replace the system immediately because all MFA gaps are unacceptable.",
       "feedback": "Spending BDT 3 crore to remove a risk worth far less, months before retirement, is poor value.",
       "best": false
      },
      {
       "text": "Accept the residual risk for a fixed period with compensating controls such as VPN-only access with MFA at the gateway and login monitoring, approved by the business owner.",
       "feedback": "Best. Compensating controls cut exposure cheaply, the acceptance is time-limited and the planned retirement removes the risk.",
       "best": true
      },
      {
       "text": "Buy cyber insurance and take no other action.",
       "feedback": "Insurance alone does not reduce likelihood and may not cover losses linked to known weak authentication.",
       "best": false
      },
      {
       "text": "Let the IT manager accept the risk informally.",
       "feedback": "Acceptance must be made by the accountable owner at the right authority level and recorded.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Risk acceptance record",
     "purpose": "Document a decision to retain risk so that it is accountable, time-limited and reviewable.",
     "columns": [
      "Risk ID",
      "Residual risk and estimate",
      "Reason for acceptance",
      "Compensating controls",
      "Accepted by",
      "Expiry",
      "Review trigger"
     ],
     "example": [
      [
       "CR-07",
       "Medium: BDT 20 to 40 lakh per year",
       "System retiring in 18 months; replacement cost disproportionate",
       "VPN with MFA, login alerts",
       "Head of merchandising",
       "30 June",
       "Any confirmed account takeover"
      ]
     ],
     "rows": 6
    },
    {
     "type": "reflection",
     "prompt": "Does your organisation's appetite statement mention cyber explicitly? Write one sentence of appetite and two measurable tolerances for the service you know best."
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Risk appetite",
       "def": "The amount and type of risk an organisation is willing to pursue or retain to meet its objectives, set by the board."
      },
      {
       "term": "Risk tolerance",
       "def": "A measurable limit that turns appetite into thresholds for specific risks or metrics."
      },
      {
       "term": "Risk capacity",
       "def": "The maximum level of loss an organisation can absorb before failing its obligations or survival."
      },
      {
       "term": "Residual risk",
       "def": "The risk that remains after treatment and existing controls are taken into account."
      },
      {
       "term": "Inherent risk",
       "def": "The risk level before considering controls; useful mainly to show how much controls matter."
      },
      {
       "term": "Risk transfer",
       "def": "Sharing the financial consequences of a risk with another party, such as an insurer or supplier."
      },
      {
       "term": "Risk acceptance",
       "def": "A documented decision by an authorised owner to retain a risk, usually time-limited and reviewed."
      },
      {
       "term": "Key risk indicator",
       "def": "A metric that signals increasing risk exposure before a loss occurs."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Who should set the organisation's overall cyber risk appetite?",
       "options": [
        "The SOC manager",
        "The external auditor, after testing controls",
        "The cyber insurer",
        "The board or its risk committee"
       ],
       "answer": 3,
       "explain": "Appetite is a governance decision for the board; others inform or test it."
      },
      {
       "q": "Which is an example of risk avoidance?",
       "options": [
        "Buying a cyber insurance policy that covers incidents on the portal",
        "Adding a web application firewall in front of the portal",
        "Retiring an internet-facing legacy portal that cannot be secured",
        "Documenting acceptance of the portal risk for six months"
       ],
       "answer": 2,
       "explain": "Avoidance removes the activity that creates the risk; the others are transfer, mitigation and acceptance."
      },
      {
       "q": "How does risk tolerance differ from risk appetite?",
       "options": [
        "Tolerance is always higher than capacity",
        "Tolerance sets measurable limits that put appetite into practice",
        "Tolerance is set by the SOC, while appetite is set by the IT department",
        "They are identical terms"
       ],
       "answer": 1,
       "explain": "Appetite is the broad statement; tolerances are specific, measurable thresholds."
      },
      {
       "q": "Why should risk acceptances expire?",
       "options": [
        "Because insurers require monthly renewals",
        "Because accepted risks automatically become illegal after twelve months",
        "So that the decision is revisited when conditions or controls change",
        "To create more audit findings"
       ],
       "answer": 2,
       "explain": "Expiry forces review and stops temporary decisions becoming permanent."
      },
      {
       "q": "Which statement about cyber insurance is most accurate?",
       "options": [
        "It transfers all accountability to the insurer",
        "It makes security controls unnecessary",
        "It always covers regulatory fines and penalties in every country where you operate",
        "It can share financial impact but leaves accountability and reputation with the organisation"
       ],
       "answer": 3,
       "explain": "Insurance shares some financial consequences, with exclusions; accountability does not transfer."
      }
     ]
    }
   ]
  },
  {
   "id": "m2-l3",
   "title": "FAIR-Style Risk Decomposition",
   "subtitle": "Breaking cyber risk into frequency and magnitude you can actually estimate",
   "minutes": 40,
   "objectives": [
    "Decompose a loss scenario into frequency and magnitude factors",
    "Estimate factors as calibrated ranges rather than single guesses",
    "Calculate expected annual loss using simple FAIR-style formulas"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Factor Analysis of Information Risk (**FAIR**), an open standard maintained by The Open Group, is the best-known model for quantifying cyber risk. Its key idea is simple: risk is the probable **frequency** and probable **magnitude** of future loss. When a factor is hard to estimate directly, you break it into smaller factors that are easier to estimate. The description below is our own simplified, FAIR-style reasoning for leaders; formal practitioners use the full published taxonomy."
    },
    {
     "type": "layers",
     "title": "A FAIR-style factor tree (top to bottom)",
     "items": [
      {
       "label": "Risk",
       "parts": [
        "Annualised loss exposure, expressed as a distribution in money"
       ]
      },
      {
       "label": "Frequency and magnitude",
       "parts": [
        "Loss event frequency (how often per year)",
        "Loss magnitude (how much per event)"
       ]
      },
      {
       "label": "Frequency drivers",
       "parts": [
        "Threat event frequency: how often threats act",
        "Vulnerability (susceptibility): chance an attempt becomes a loss"
       ]
      },
      {
       "label": "Susceptibility drivers",
       "parts": [
        "Threat capability",
        "Resistance strength of controls"
       ]
      },
      {
       "label": "Magnitude drivers",
       "parts": [
        "Primary loss: borne directly by the organisation",
        "Secondary loss: from reactions of regulators, customers, partners"
       ]
      }
     ]
    },
    {
     "type": "formula",
     "title": "Core FAIR-style relationships",
     "items": [
      {
       "name": "Risk (annualised)",
       "expr": "Risk = LEF × LM",
       "meaning": "Expected yearly loss equals how often loss events happen times how much each costs; in practice both are distributions, combined by simulation."
      },
      {
       "name": "Loss event frequency",
       "expr": "LEF = TEF × Vuln",
       "meaning": "Threat events per year multiplied by the probability that an event becomes a loss."
      },
      {
       "name": "Susceptibility",
       "expr": "Vuln = P(TCap > RS)",
       "meaning": "The probability that the threat's capability exceeds the resistance strength of your controls."
      },
      {
       "name": "Loss magnitude",
       "expr": "LM = PL + (SLEF × SLM)",
       "meaning": "Primary loss plus the chance of secondary reactions times their size."
      },
      {
       "name": "Classic single-point version",
       "expr": "ALE = SLE × ARO; SLE = AV × EF",
       "meaning": "Annualised loss expectancy from single loss expectancy, asset value, exposure factor and annual rate; useful for intuition, weak for decisions because it hides uncertainty."
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Form",
      "Examples",
      "Usually primary or secondary"
     ],
     "rows": [
      [
       "Productivity",
       "Lost sales, idle staff, delayed shipments",
       "Primary"
      ],
      [
       "Response",
       "Incident responders, forensics, legal advice, notifications",
       "Primary (some secondary)"
      ],
      [
       "Replacement",
       "Rebuilding systems, replacing hardware, re-issuing cards",
       "Primary"
      ],
      [
       "Fines and judgements",
       "Regulatory penalties, lawsuits, contractual damages",
       "Secondary"
      ],
      [
       "Competitive advantage",
       "Lost trade secrets, cancelled tenders",
       "Secondary"
      ],
      [
       "Reputation",
       "Customer churn, higher cost of capital, lost partners",
       "Secondary"
      ]
     ],
     "title": "Forms of loss to consider"
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "A **calibrated estimator** has practised giving ranges such that, when they say they are 90% confident, the true answer falls inside their range about 90% of the time. Calibration training uses trivia questions and feedback. Most untrained people give ranges that are far too narrow; calibration widens them honestly and makes estimates defensible.",
     "title": "Calibrated estimation"
    },
    {
     "type": "steps",
     "title": "Estimating one scenario",
     "items": [
      {
       "title": "Define the scenario tightly",
       "text": "Asset, threat community, effect and time frame, for example 'ransomware by criminal groups against the hospital EHR in the next 12 months'."
      },
      {
       "title": "Estimate threat event frequency",
       "text": "Use incident data, sector reports and attack telemetry; express as a range such as 2 to 12 attempts per year."
      },
      {
       "title": "Estimate susceptibility",
       "text": "Consider threat capability against your controls; for example 5% to 20% of serious attempts succeed."
      },
      {
       "title": "Estimate primary loss",
       "text": "Productivity, response and replacement costs per event, as minimum, most likely and maximum."
      },
      {
       "title": "Estimate secondary loss",
       "text": "Probability that regulators, customers or partners react, and the size of those losses."
      },
      {
       "title": "Combine and sanity-check",
       "text": "Calculate or simulate; compare with industry data and challenge outliers."
      }
     ]
    },
    {
     "type": "formula",
     "title": "Working the numbers",
     "items": [
      {
       "name": "PERT most-likely mean",
       "expr": "Mean ≈ (min + 4 × mode + max) ÷ 6",
       "meaning": "A quick way to summarise a three-point estimate; e.g. (2 + 4×6 + 20) ÷ 6 ≈ 7.7."
      },
      {
       "name": "Example LEF",
       "expr": "LEF = 6 attempts/yr × 0.10 = 0.6 loss events/yr",
       "meaning": "Six serious attempts a year, one in ten succeeds."
      },
      {
       "name": "Example LM",
       "expr": "LM = 8 crore + (0.4 × 15 crore) = 14 crore",
       "meaning": "BDT 8 crore primary loss plus a 40% chance of BDT 15 crore secondary loss."
      },
      {
       "name": "Example expected loss",
       "expr": "Risk ≈ 0.6 × 14 crore = BDT 8.4 crore per year",
       "meaning": "A point summary; the decision should also consider the bad-year tail."
      }
     ]
    },
    {
     "type": "scenario",
     "title": "A single number or a range?",
     "situation": "A CFO at a Chattogram shipping company asks the security team to replace its FAIR-style ranges with single 'best guess' numbers because 'ranges look uncertain'. What should the CISO do?",
     "options": [
      {
       "text": "Keep ranges, explain that they express real uncertainty honestly, and show the expected value alongside a bad-year percentile for decisions.",
       "feedback": "Best. Ranges make uncertainty visible and support better decisions; giving the expected value and a tail percentile answers the CFO's need for simplicity.",
       "best": true
      },
      {
       "text": "Replace every range with its midpoint to make the report cleaner.",
       "feedback": "Midpoints hide skew and tail risk, which are often what matter most for cyber losses.",
       "best": false
      },
      {
       "text": "Use only the maximum of each range to be conservative.",
       "feedback": "Always using worst cases inflates exposure and leads to poor investment decisions.",
       "best": false
      },
      {
       "text": "Stop quantifying and return to the heat map.",
       "feedback": "Abandoning quantification throws away the main benefit for a presentational concern.",
       "best": false
      }
     ]
    },
    {
     "type": "case",
     "title": "Quantifying ransomware at a hospital network",
     "context": "A private hospital network in Dhaka runs five hospitals on a shared electronic health record (EHR). Workshops estimate: 4 to 15 serious ransomware attempts per year reaching the network; with current controls 5% to 15% would succeed; primary loss per event of BDT 6 to 30 crore (diversion of patients, overtime, recovery); a 30% chance of secondary loss of BDT 10 to 50 crore from regulators, lawsuits and lost corporate contracts.",
     "questions": [
      "Using midpoints, estimate loss event frequency and expected annual loss.",
      "What does the calculation hide that the board should also see?",
      "Which single control investment would you analyse first, and how would it change the factors?"
     ],
     "answer": "Midpoints: TEF about 9.5, susceptibility about 10%, so LEF ≈ 0.95 events per year. Primary loss midpoint BDT 18 crore; secondary expected 0.3 × 30 = 9 crore; LM ≈ 27 crore; expected annual loss ≈ BDT 25.7 crore. The midpoint calculation hides the wide spread: a bad year could involve two events or the high end of losses, so the board should see a loss exceedance curve or a 90th to 95th percentile. A strong candidate is immutable, offline backups with tested EHR restoration plus network segmentation: segmentation reduces susceptibility, while backups reduce primary loss duration; both should be re-estimated and compared with cost."
    },
    {
     "type": "reflection",
     "prompt": "Pick a risk you know well. Which factor would be easiest for you to estimate, and which one would you need to decompose further? Who in your organisation holds the data?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "FAIR",
       "def": "Factor Analysis of Information Risk, an open standard model that expresses risk as the probable frequency and magnitude of future loss."
      },
      {
       "term": "Loss event frequency",
       "def": "How often, within a time frame, a threat event is expected to result in loss."
      },
      {
       "term": "Threat event frequency",
       "def": "How often, within a time frame, threat agents are expected to act against an asset."
      },
      {
       "term": "Susceptibility",
       "def": "The probability that a threat event becomes a loss event, driven by threat capability versus resistance strength."
      },
      {
       "term": "Primary loss",
       "def": "Loss borne directly by the organisation as a result of the event, such as downtime and response costs."
      },
      {
       "term": "Secondary loss",
       "def": "Loss arising from reactions of external parties such as regulators, customers or litigants."
      },
      {
       "term": "Calibrated estimate",
       "def": "A range given by a trained estimator whose stated confidence matches how often they are right."
      },
      {
       "term": "Annualised loss expectancy",
       "def": "The classic single-point expected yearly loss: single loss expectancy times annual rate of occurrence."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "In FAIR-style analysis, loss event frequency is derived from:",
       "options": [
        "Threat event frequency and susceptibility",
        "Asset value multiplied by the exposure factor of each asset",
        "Primary and secondary loss",
        "Capability level and maturity"
       ],
       "answer": 0,
       "explain": "LEF combines how often threats act with how likely each attempt is to cause loss."
      },
      {
       "q": "A regulator's fine after a breach is typically treated as:",
       "options": [
        "A secondary loss",
        "A primary loss",
        "A threat event",
        "A resistance strength factor"
       ],
       "answer": 0,
       "explain": "Fines arise from reactions of external stakeholders and are classed as secondary."
      },
      {
       "q": "Threat events: 10 per year. Susceptibility: 20%. Loss per event: BDT 5 crore. What is the expected annual loss?",
       "options": [
        "BDT 50 crore",
        "BDT 2 crore",
        "BDT 10 crore",
        "BDT 25 crore"
       ],
       "answer": 2,
       "explain": "LEF = 10 × 0.2 = 2 events per year; 2 × 5 crore = 10 crore."
      },
      {
       "q": "Why is calibration training useful for risk workshops?",
       "options": [
        "It removes all uncertainty from estimates",
        "It replaces the need for data",
        "It guarantees that every estimate is conservative and errs on the high side",
        "It makes people's stated confidence match how often they are right"
       ],
       "answer": 3,
       "explain": "Calibration aligns confidence with accuracy; it does not remove uncertainty."
      },
      {
       "q": "What is the main weakness of the classic ALE = SLE × ARO approach?",
       "options": [
        "It cannot be calculated without specialised simulation software",
        "Single points hide uncertainty and the bad-year tail",
        "It ignores asset value",
        "It only works for physical risks"
       ],
       "answer": 1,
       "explain": "Single-point estimates hide spread; distributions show what a bad year looks like."
      }
     ]
    }
   ]
  },
  {
   "id": "m2-l4",
   "title": "Monte Carlo, Loss Exceedance and the Value of Controls",
   "subtitle": "Simulating thousands of years to show what a bad year looks like and what controls are worth",
   "minutes": 40,
   "objectives": [
    "Explain how Monte Carlo simulation combines frequency and magnitude ranges",
    "Read and present a loss exceedance curve against risk tolerance",
    "Compare control investments using risk reduction and return on security investment"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "When frequency and magnitude are ranges, you cannot simply multiply midpoints and call it done. **Monte Carlo simulation** draws random values from each range thousands of times, each draw representing one possible year. The result is a distribution of annual losses. From it you can read the average, the median, the probability of exceeding any amount and the losses in a bad year such as the 1-in-20."
    },
    {
     "type": "flow",
     "title": "How a cyber Monte Carlo works",
     "items": [
      {
       "label": "Choose distributions",
       "text": "Poisson for event counts; lognormal or PERT for losses"
      },
      {
       "label": "Fit to estimates",
       "text": "Use calibrated 90% ranges to set parameters"
      },
      {
       "label": "Simulate years",
       "text": "Draw number of events, then a loss for each event"
      },
      {
       "label": "Sum per year",
       "text": "Each simulated year gives one annual loss"
      },
      {
       "label": "Analyse",
       "text": "Mean, percentiles, exceedance probabilities"
      },
      {
       "label": "Compare",
       "text": "Repeat with proposed controls and measure the shift"
      }
     ]
    },
    {
     "type": "cli",
     "title": "A minimal annual-loss simulation",
     "device": "Python notebook",
     "lines": [
      "import numpy as np",
      "rng = np.random.default_rng(7)",
      "N = 100_000                       # simulated years",
      "events = rng.poisson(0.3, N)      # about 0.3 loss events per year",
      "lo, hi = 2e7, 4e8                 # 90% range per event: BDT 2 to 40 crore",
      "mu = (np.log(lo) + np.log(hi)) / 2",
      "sigma = (np.log(hi) - np.log(lo)) / 3.29",
      "annual = np.array([rng.lognormal(mu, sigma, k).sum() for k in events])",
      "print('Mean annual loss (crore):', round(annual.mean() / 1e7, 1))",
      "print('P(annual loss > 10 crore):', round((annual > 1e8).mean(), 3))",
      "print('95th percentile (crore):', round(np.percentile(annual, 95) / 1e7, 1))",
      "# Mean annual loss (crore): 4.1",
      "# P(annual loss > 10 crore): 0.134",
      "# 95th percentile (crore): 23.3"
     ],
     "note": "3.29 is twice 1.645, the z-value for a 90% two-sided interval, so the lognormal matches the stated range. Most simulated years have no loss at all; the mean is pulled up by rare, large years."
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "In the simulation above the average annual loss is about BDT 4 crore, but in roughly one year in seven losses exceed BDT 10 crore, and a 1-in-20 year costs more than BDT 23 crore. Boards care about that tail because it threatens budgets, covenants and reputation.",
     "title": "The mean is not the story"
    },
    {
     "type": "text",
     "text": "A **loss exceedance curve (LEC)** plots loss amounts on the horizontal axis and the probability of exceeding each amount in a year on the vertical axis. Draw the organisation's **risk tolerance curve** on the same chart: the maximum probability the board will accept for each loss level. Where the inherent or current LEC sits above the tolerance curve, risk is outside appetite and needs treatment."
    },
    {
     "type": "formula",
     "title": "Comparing controls",
     "items": [
      {
       "name": "Risk reduction",
       "expr": "ΔRisk = EL(before) − EL(after)",
       "meaning": "Expected annual loss removed by the control, from two simulations or estimates."
      },
      {
       "name": "Return on security investment",
       "expr": "ROSI = (ΔRisk − annual cost) ÷ annual cost",
       "meaning": "Positive means the expected benefit exceeds the cost; compare options on the same basis."
      },
      {
       "name": "Risk reduction per taka",
       "expr": "Efficiency = ΔRisk ÷ annual cost",
       "meaning": "Ranks options when budget is limited."
      },
      {
       "name": "Tail reduction",
       "expr": "ΔP = P(L > X before) − P(L > X after)",
       "meaning": "How much a control lowers the chance of a bad year beyond a tolerance threshold X."
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Option",
      "Annual cost (BDT crore)",
      "Expected loss after (crore)",
      "ΔRisk (crore)",
      "ROSI"
     ],
     "rows": [
      [
       "Current state",
       "0",
       "12.0",
       "–",
       "–"
      ],
      [
       "Phishing-resistant MFA for all staff",
       "1.0",
       "8.5",
       "3.5",
       "2.5"
      ],
      [
       "Immutable backups and restore testing",
       "1.5",
       "7.0",
       "5.0",
       "2.3"
      ],
      [
       "Full 24x7 managed detection service",
       "4.0",
       "8.0",
       "4.0",
       "0.0"
      ],
      [
       "MFA plus backups together",
       "2.5",
       "4.8",
       "7.2",
       "1.9"
      ]
     ],
     "title": "Worked comparison for a payment processor"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Controls overlap: combining MFA and backups saves less than the sum of each alone. Simulate combinations rather than adding savings. Also disclose that estimates are uncertain and that ROSI is a decision aid, not a promise. A control with lower ROSI may still be required by law or to reduce the tail below tolerance.",
     "title": "Interactions and honesty"
    },
    {
     "type": "scenario",
     "title": "Which investment first?",
     "situation": "Using the comparison table above, the payment processor has BDT 2.5 crore this year and must bring the 1-in-20-year loss below BDT 30 crore, its tolerance. Only the MFA-plus-backups combination does so in simulation. What should the CISO recommend?",
     "options": [
      {
       "text": "Fund MFA alone because it has the highest ROSI.",
       "feedback": "Highest ROSI does not meet the tail requirement set by the board.",
       "best": false
      },
      {
       "text": "Fund the managed detection service because detection is fashionable.",
       "feedback": "It costs more than the budget and shows no net benefit in this analysis.",
       "best": false
      },
      {
       "text": "Fund MFA and backups together, because it is the only affordable option that brings the tail within tolerance, even though its ROSI is lower than MFA alone.",
       "feedback": "Best. The binding requirement is the tolerance on bad years; ROSI ranks options but does not override appetite.",
       "best": true
      },
      {
       "text": "Defer all investment until estimates are more precise.",
       "feedback": "Waiting leaves the organisation outside tolerance; estimates are already good enough to act.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Control investment comparison",
     "purpose": "Compare candidate controls on expected loss, tail risk and cost so that funding decisions are transparent.",
     "columns": [
      "Option",
      "Annual cost",
      "Expected loss before",
      "Expected loss after",
      "P(loss > tolerance) after",
      "ROSI",
      "Notes"
     ],
     "example": [
      [
       "Immutable backups",
       "BDT 1.5 crore",
       "BDT 12 crore",
       "BDT 7 crore",
       "4%",
       "2.3",
       "Also reduces downtime for non-cyber failures"
      ]
     ],
     "rows": 6
    },
    {
     "type": "reflection",
     "prompt": "Which of your current security investments could you defend with a before-and-after estimate of expected loss and tail risk? Which one would struggle, and why might it still be justified?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Monte Carlo simulation",
       "def": "A method that repeatedly samples from input distributions to build the distribution of an outcome, such as annual loss."
      },
      {
       "term": "Loss exceedance curve",
       "def": "A chart showing the probability that annual losses will exceed each possible amount."
      },
      {
       "term": "Risk tolerance curve",
       "def": "A board-defined curve of the maximum acceptable probability of exceeding each loss level."
      },
      {
       "term": "Lognormal distribution",
       "def": "A right-skewed distribution often used for loss sizes because most losses are small but a few are very large."
      },
      {
       "term": "Poisson distribution",
       "def": "A distribution commonly used to model the number of events in a fixed period at a given average rate."
      },
      {
       "term": "Percentile",
       "def": "The value below which a given percentage of simulated outcomes fall; the 95th percentile is a 1-in-20 bad year."
      },
      {
       "term": "ROSI",
       "def": "Return on security investment: risk reduction minus cost, divided by cost."
      },
      {
       "term": "Tail risk",
       "def": "The risk of rare, very large losses at the extreme end of the distribution."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "What does each iteration of a cyber Monte Carlo simulation usually represent?",
       "options": [
        "One possible year of losses",
        "One employee",
        "One control test performed by internal audit",
        "One audit finding"
       ],
       "answer": 0,
       "explain": "Each draw simulates a year: number of events and loss per event."
      },
      {
       "q": "A loss exceedance curve shows a 10% probability of exceeding BDT 20 crore. The tolerance curve allows 5% at that level. What does this mean?",
       "options": [
        "Risk is within appetite",
        "The simulation is wrong and must be rerun with more iterations",
        "Insurance is unnecessary",
        "Risk at that level is outside tolerance and needs treatment"
       ],
       "answer": 3,
       "explain": "The current probability is above what the board accepts, so treatment is needed."
      },
      {
       "q": "A control costs BDT 2 crore per year and reduces expected loss from 10 to 5 crore. What is its ROSI?",
       "options": [
        "2.5",
        "1.5",
        "0.5",
        "5.0"
       ],
       "answer": 1,
       "explain": "(5 − 2) ÷ 2 = 1.5."
      },
      {
       "q": "Why should combined controls be simulated rather than adding individual savings?",
       "options": [
        "Simulation software cannot add separate savings figures reliably",
        "Regulators require combined simulation",
        "Controls overlap, so combined savings are usually less than the sum",
        "Individual savings are always zero"
       ],
       "answer": 2,
       "explain": "Two controls often reduce the same events, so savings are not additive."
      },
      {
       "q": "Which distribution is commonly used for the size of individual cyber losses?",
       "options": [
        "Uniform",
        "Normal with mean zero",
        "Lognormal",
        "Binary"
       ],
       "answer": 2,
       "explain": "Loss sizes are right-skewed; the lognormal captures many small and a few very large losses."
      }
     ]
    }
   ]
  },
  {
   "id": "m2-l5",
   "title": "Threat-Informed Risk Scenarios",
   "subtitle": "Using threat intelligence and attack techniques to make risk scenarios real",
   "minutes": 30,
   "objectives": [
    "Build risk scenarios from threat intelligence relevant to your sector and region",
    "Map adversary techniques to controls to estimate susceptibility",
    "Keep the risk register current with intelligence, incidents and near misses"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Risk estimates are only as good as the scenarios behind them. **Threat-informed risk management** starts from who is actually attacking organisations like yours and how. Intelligence turns vague fears into specific scenarios; mapping attacker techniques to your controls turns gut feel about susceptibility into evidence."
    },
    {
     "type": "table",
     "head": [
      "Threat community",
      "Typical goals",
      "Relevant sectors in South Asia"
     ],
     "rows": [
      [
       "Ransomware and extortion groups",
       "Money through encryption and data-leak extortion",
       "Hospitals, manufacturing, logistics, universities"
      ],
      [
       "Financially motivated fraud groups",
       "Payment fraud, account takeover, SIM-swap",
       "Banks, MFS providers, e-commerce"
      ],
      [
       "State-aligned actors",
       "Espionage, pre-positioning in critical infrastructure",
       "Government, telecom, energy, defence suppliers"
      ],
      [
       "Hacktivists",
       "Defacement, DDoS and leaks for political messaging",
       "Government, media, high-profile brands"
      ],
      [
       "Insiders",
       "Fraud, data theft, sabotage or careless error",
       "All sectors, especially those with broad access"
      ],
      [
       "Opportunistic criminals",
       "Mass exploitation of known vulnerabilities",
       "Any internet-facing organisation"
      ]
     ],
     "title": "Threat communities and typical goals"
    },
    {
     "type": "flow",
     "title": "From intelligence to a risk scenario",
     "items": [
      {
       "label": "Collect",
       "text": "Sector reports, CERT advisories, peer sharing, own incidents"
      },
      {
       "label": "Select threats",
       "text": "Choose the few communities most likely to target you"
      },
      {
       "label": "Map techniques",
       "text": "List their common initial access, movement and impact techniques"
      },
      {
       "label": "Check controls",
       "text": "Prevent, detect and recover coverage for each technique"
      },
      {
       "label": "Write scenarios",
       "text": "Threat, event, weakness, service, consequence"
      },
      {
       "label": "Estimate",
       "text": "Frequency and magnitude ranges, with evidence"
      }
     ]
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Public knowledge bases of adversary tactics and techniques, such as MITRE ATT&CK, give security engineers and risk analysts a shared vocabulary. Mapping your preventive and detective controls to the techniques used by your priority threat groups shows where susceptibility is high and justifies the estimate in the risk register.",
     "title": "Use a common technique language"
    },
    {
     "type": "table",
     "head": [
      "Technique theme",
      "Prevent",
      "Detect",
      "Recover",
      "Coverage judgement"
     ],
     "rows": [
      [
       "Phishing for credentials",
       "Phishing-resistant MFA for 70% of staff",
       "Impossible-travel alerts",
       "Account reset runbook",
       "Partial"
      ],
      [
       "Exploiting internet-facing apps",
       "Patch SLA 14 days, WAF",
       "Exploit signatures, anomaly alerts",
       "Rebuild from images",
       "Good"
      ],
      [
       "Valid accounts via stolen VPN credentials",
       "MFA on VPN",
       "VPN login analytics",
       "Session revocation",
       "Good"
      ],
      [
       "Disabling backups and shadow copies",
       "Backup admin separation",
       "Alerts on backup deletion",
       "Immutable copies",
       "Weak: no immutability"
      ],
      [
       "Data exfiltration to cloud storage",
       "Web filtering",
       "Large upload alerts",
       "Not applicable",
       "Partial"
      ]
     ],
     "title": "Technique-to-control coverage (extract)"
    },
    {
     "type": "keypoints",
     "items": [
      "National CIRT and sector CERT advisories (for example Bangladesh's national government CIRT and banking-sector sharing groups)",
      "Your own incidents, near misses and red-team findings",
      "Industry breach and ransomware reports, read critically for sample bias",
      "Lists of vulnerabilities known to be exploited in the wild",
      "Insurance claims data shared by brokers",
      "Peer CISO groups and information sharing and analysis centres"
     ],
     "title": "Intelligence sources worth wiring into risk"
    },
    {
     "type": "scenario",
     "title": "A near miss changes the estimate",
     "situation": "A university's SOC detects and stops attackers who used a stolen student credential to reach a research file server. The risk register still rates 'data theft from research systems' as rare because 'nothing has happened'. What should the risk owner do?",
     "options": [
      {
       "text": "Treat the near miss as evidence: raise the frequency estimate, review susceptibility controls on research systems and record the change with its rationale.",
       "feedback": "Best. Near misses are valuable data about threat event frequency and control weaknesses.",
       "best": true
      },
      {
       "text": "Leave the rating unchanged because no data was lost.",
       "feedback": "Ignoring near misses keeps estimates optimistic and blinds governance to rising threat activity.",
       "best": false
      },
      {
       "text": "Rate the risk as certain and freeze all research system access.",
       "feedback": "Overreacting disrupts research and is not supported by a single event.",
       "best": false
      },
      {
       "text": "Wait for the annual risk review to update the register.",
       "feedback": "Material new evidence should trigger an interim update.",
       "best": false
      }
     ]
    },
    {
     "type": "checklist",
     "title": "Keeping scenarios current",
     "items": [
      "Review top scenarios after any significant incident or near miss",
      "Refresh threat community assumptions at least twice a year",
      "Update technique-to-control coverage after major control changes",
      "Record the evidence behind every frequency and susceptibility estimate",
      "Retire scenarios when the asset or service is decommissioned",
      "Share anonymised scenarios with peers to test realism"
     ]
    },
    {
     "type": "reflection",
     "prompt": "Name the two threat communities most likely to cause your organisation a material loss in the next year. What evidence supports your choice, and which of their techniques are you least prepared for?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Threat intelligence",
       "def": "Evidence-based knowledge about threats, their capabilities and intentions, used to inform decisions."
      },
      {
       "term": "Threat community",
       "def": "A group of threat agents with similar goals and methods, such as ransomware groups or insiders."
      },
      {
       "term": "Tactics, techniques and procedures",
       "def": "The behaviour of an adversary: its goals, the methods it uses and its specific implementations."
      },
      {
       "term": "MITRE ATT&CK",
       "def": "A public knowledge base of adversary tactics and techniques based on real-world observations."
      },
      {
       "term": "Near miss",
       "def": "An event that could have caused loss but was stopped or did not do so; valuable risk evidence."
      },
      {
       "term": "Threat-informed defence",
       "def": "Prioritising controls and detection according to the techniques of the most relevant adversaries."
      },
      {
       "term": "Control coverage",
       "def": "The degree to which preventive, detective and recovery controls address a given technique."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "What is the main benefit of mapping adversary techniques to controls?",
       "options": [
        "It replaces frequency estimation",
        "It gives evidence for susceptibility estimates and shows gaps",
        "It ensures compliance with every applicable cyber law and regulation",
        "It removes the need for incident response"
       ],
       "answer": 1,
       "explain": "Technique coverage shows where attacks are likely to succeed, informing susceptibility."
      },
      {
       "q": "A bank sees a rise in SIM-swap fraud against customers. Which threat community does this most likely reflect?",
       "options": [
        "Financially motivated fraud groups",
        "State-aligned espionage actors",
        "Hacktivists",
        "Natural hazards"
       ],
       "answer": 0,
       "explain": "SIM-swap is a common fraud technique for account takeover and payment theft."
      },
      {
       "q": "How should a near miss affect the risk register?",
       "options": [
        "It should be ignored, because no loss actually occurred",
        "It should be reported only to the insurer",
        "It should automatically make the risk critical",
        "It should prompt a review of frequency and control estimates"
       ],
       "answer": 3,
       "explain": "Near misses are evidence that the threat is active and controls may be weaker than assumed."
      },
      {
       "q": "Which is the weakest basis for a frequency estimate?",
       "options": [
        "A sense that 'it has never happened here'",
        "Sector incident data from peers and CERTs",
        "Own near-miss records",
        "CERT advisories about active campaigns"
       ],
       "answer": 0,
       "explain": "Absence of past incidents in one organisation says little about future frequency, and may reflect poor detection."
      },
      {
       "q": "Why read industry breach reports critically?",
       "options": [
        "They are always fabricated by security vendors for marketing purposes",
        "They only cover physical security",
        "They are written by regulators",
        "They often have sample bias and differing definitions"
       ],
       "answer": 3,
       "explain": "Reports draw on particular samples and definitions; adjust them for your context."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m3",
 "order": 3,
 "code": "Architect",
 "title": "Security Architecture, Zero Trust, Cloud and OT",
 "subtitle": "Design security into enterprise, cloud and industrial environments with traceable decisions",
 "outcomes": [
  "Apply security architecture principles, patterns and decision records",
  "Plan and govern a phased zero trust programme",
  "Design segmentation, secure access and application security that fit delivery speed",
  "Govern multi-cloud and hybrid estates with landing zones and guardrails",
  "Protect OT, ICS and IoT environments where safety and availability come first"
 ],
 "lessons": [
  {
   "id": "m3-l1",
   "title": "Security Architecture Principles and Reference Models",
   "subtitle": "Designing security into the enterprise, not bolting it on afterwards",
   "minutes": 30,
   "objectives": [
    "Apply core security architecture principles to design decisions",
    "Use a layered, business-driven architecture approach to trace controls to business needs",
    "Record architecture decisions so they can be governed and revisited"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "**Security architecture** is the discipline of designing how security controls, technology and processes fit together across the enterprise so that business goals are met within risk appetite. Where governance sets direction, architecture translates it into structures that engineers can build: zones, trust boundaries, identity flows, data paths and patterns that teams can reuse. Good architecture makes the secure way the easy way."
    },
    {
     "type": "framework",
     "title": "Principles that stand the test of time",
     "items": [
      {
       "label": "A1",
       "title": "Least privilege",
       "text": "Every user, service and device gets only the access it needs, for only as long as it needs it."
      },
      {
       "label": "A2",
       "title": "Defence in depth",
       "text": "Layer independent controls so that one failure does not lead to compromise."
      },
      {
       "label": "A3",
       "title": "Secure by default",
       "text": "Products and platforms ship with safe settings; insecure options must be deliberately enabled."
      },
      {
       "label": "A4",
       "title": "Assume breach",
       "text": "Design so an attacker inside one zone cannot easily move to others, and detection is built in."
      },
      {
       "label": "A5",
       "title": "Economy of mechanism",
       "text": "Prefer simple designs; complexity hides flaws and slows response."
      },
      {
       "label": "A6",
       "title": "Separation of duties",
       "text": "No single person or service can complete a sensitive action alone."
      },
      {
       "label": "A7",
       "title": "Fail securely",
       "text": "When a control fails it should deny rather than open access, unless safety requires otherwise."
      },
      {
       "label": "A8",
       "title": "Traceability",
       "text": "Every control traces to a business requirement or risk, and every decision is recorded."
      }
     ]
    },
    {
     "type": "text",
     "text": "Business-driven architecture methods, such as the well-known SABSA approach, work top-down. They begin with what the business is trying to achieve and what it must protect, then move through conceptual, logical and physical design to the components and operations. The value is **traceability**: every firewall rule, identity policy or encryption setting can be traced back to a business attribute such as 'available', 'confidential' or 'compliant'."
    },
    {
     "type": "layers",
     "title": "A layered, business-driven view",
     "items": [
      {
       "label": "Contextual (business)",
       "parts": [
        "What the business does, its goals and obligations",
        "Business attributes such as available, private, auditable"
       ]
      },
      {
       "label": "Conceptual (architect)",
       "parts": [
        "Security principles, trust model, risk appetite",
        "Which attributes matter most for each service"
       ]
      },
      {
       "label": "Logical (designer)",
       "parts": [
        "Security services: identity, access, logging, encryption",
        "Zones, trust boundaries, data flows"
       ]
      },
      {
       "label": "Physical (builder)",
       "parts": [
        "Platforms, mechanisms, configurations",
        "Specific technologies and their settings"
       ]
      },
      {
       "label": "Component and operational",
       "parts": [
        "Products, standards, runbooks",
        "Monitoring, change and lifecycle management"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "A reference architecture is a reusable pattern for a common problem, such as 'internet-facing web application', 'partner API' or 'remote administration'. Each describes zones, controls, logging and acceptable variations. Teams that start from approved patterns move faster and pass review sooner than teams that design from scratch.",
     "title": "Reference architectures save time"
    },
    {
     "type": "template",
     "title": "Architecture decision record (ADR)",
     "purpose": "Capture a significant security architecture decision, its context and consequences, so that it can be reviewed, governed and revisited.",
     "columns": [
      "ADR #",
      "Decision",
      "Context and drivers",
      "Options considered",
      "Consequences and residual risk",
      "Owner",
      "Review date"
     ],
     "example": [
      [
       "ADR-014",
       "All admin access via a privileged access gateway with session recording",
       "Audit finding on shared admin accounts; ransomware trend",
       "Jump hosts; PAM gateway; cloud-native bastions",
       "Extra latency for admins; licence cost; removes direct RDP/SSH",
       "Head of infrastructure",
       "Annual"
      ]
     ],
     "rows": 6
    },
    {
     "type": "steps",
     "title": "Running a security architecture review",
     "items": [
      {
       "title": "Understand the business need",
       "text": "What does the solution do, for whom, with what data and what availability?"
      },
      {
       "title": "Classify",
       "text": "Data classification, criticality and regulatory scope."
      },
      {
       "title": "Model threats",
       "text": "Draw data flows and trust boundaries; identify threats using a structured method such as STRIDE."
      },
      {
       "title": "Match patterns",
       "text": "Compare with reference architectures; note deviations."
      },
      {
       "title": "Agree controls",
       "text": "Required controls, compensating controls and residual risk."
      },
      {
       "title": "Record and approve",
       "text": "ADR, risk acceptance if needed, and conditions for go-live."
      }
     ]
    },
    {
     "type": "scenario",
     "title": "Architecture review or rubber stamp?",
     "situation": "A bank's digital team plans to launch a new customer API in three weeks. The architecture review board meets monthly and has a backlog of 30 requests. Teams have started bypassing it. What is the BEST improvement?",
     "options": [
      {
       "text": "Make board approval mandatory and add penalties for bypassing it.",
       "feedback": "Enforcement without fixing capacity increases delays and resentment, so bypassing will continue in other forms.",
       "best": false
      },
      {
       "text": "Publish approved reference patterns and let teams that conform self-certify, reserving full board review for deviations and high-risk designs.",
       "feedback": "Best. Patterns scale good design, reduce the queue and keep expert attention on the riskiest cases.",
       "best": true
      },
      {
       "text": "Abolish the board and rely on penetration testing before launch.",
       "feedback": "Testing late finds problems when they are expensive to fix and does not provide design guidance.",
       "best": false
      },
      {
       "text": "Let the digital team's lead developer approve their own designs.",
       "feedback": "Self-approval without patterns or criteria removes independent challenge.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Which three reference patterns would save the most review effort in your organisation next year? What would each one need to specify?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Security architecture",
       "def": "The design of how security controls, technology and processes fit together across the enterprise to meet business goals within risk appetite."
      },
      {
       "term": "Defence in depth",
       "def": "Using multiple independent layers of control so that a single failure does not lead to compromise."
      },
      {
       "term": "Least privilege",
       "def": "Granting only the minimum access needed for the minimum time required."
      },
      {
       "term": "Trust boundary",
       "def": "A point in a system where data or control passes between areas with different levels of trust."
      },
      {
       "term": "Reference architecture",
       "def": "A reusable, approved design pattern for a common problem, including zones, controls and variations."
      },
      {
       "term": "Architecture decision record",
       "def": "A short document capturing a significant decision, its context, options and consequences."
      },
      {
       "term": "Threat modelling",
       "def": "A structured method to identify threats to a system by analysing its components, data flows and trust boundaries."
      },
      {
       "term": "STRIDE",
       "def": "A threat modelling mnemonic: spoofing, tampering, repudiation, information disclosure, denial of service and elevation of privilege."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which principle is applied when a payment approval needs two different people?",
       "options": [
        "Economy of mechanism, which keeps designs as simple as possible",
        "Secure by default",
        "Separation of duties",
        "Fail securely"
       ],
       "answer": 2,
       "explain": "Requiring two people prevents one person completing a sensitive action alone."
      },
      {
       "q": "What is the main benefit of a business-driven, layered architecture method?",
       "options": [
        "It removes the need for any threat modelling at the logical layer",
        "Traceability from controls to business needs",
        "It selects products automatically",
        "It guarantees compliance with every regulation"
       ],
       "answer": 1,
       "explain": "Layered methods connect technical controls to business attributes and requirements."
      },
      {
       "q": "An ADR is primarily used to:",
       "options": [
        "Approve the annual security budget for the architecture team",
        "Replace the risk register",
        "Document incident timelines",
        "Record a decision, its context and consequences"
       ],
       "answer": 3,
       "explain": "ADRs keep the reasoning behind decisions so they can be governed and revisited."
      },
      {
       "q": "Which item belongs in a threat model?",
       "options": [
        "The vendor's market share and its most recent analyst rating",
        "Data flows and trust boundaries",
        "Staff holiday schedules",
        "The marketing launch plan"
       ],
       "answer": 1,
       "explain": "Threat modelling analyses how data moves and where trust changes."
      },
      {
       "q": "A firewall fails and starts allowing all traffic. Which principle has been violated?",
       "options": [
        "Least privilege",
        "Traceability of every control back to a business requirement",
        "Fail securely",
        "Economy of mechanism"
       ],
       "answer": 2,
       "explain": "A failing control should default to denying access unless safety requires otherwise."
      }
     ]
    }
   ]
  },
  {
   "id": "m3-l2",
   "title": "Zero Trust: Principles, Components and Roadmap",
   "subtitle": "Replacing implicit trust in the network with continuous, policy-based decisions",
   "minutes": 35,
   "objectives": [
    "Explain zero trust tenets and the policy decision and enforcement model",
    "Assess maturity across identity, devices, networks, applications and data",
    "Build a realistic, phased zero trust roadmap"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Traditional security trusted anything inside the corporate network. Remote work, cloud services, partners and ransomware broke that model: once an attacker is inside, a flat network lets them move freely. **Zero trust** is a strategy, not a product. It removes implicit trust based on network location and instead grants access per request, based on identity, device health, context and policy, with continuous monitoring. NIST's SP 800-207 is a widely used reference for the architecture."
    },
    {
     "type": "keypoints",
     "items": [
      "Treat every data source and computing service as a resource to protect",
      "Secure all communication regardless of network location",
      "Grant access to individual resources per session, with least privilege",
      "Decide access by dynamic policy using identity, device state, behaviour and environment",
      "Monitor and measure the security posture of all owned and associated assets",
      "Authenticate and authorise strictly and dynamically before access is allowed",
      "Collect information about assets, traffic and requests and use it to improve policy"
     ],
     "title": "Zero trust tenets (our summary)"
    },
    {
     "type": "flow",
     "title": "The zero trust access decision",
     "items": [
      {
       "label": "Subject",
       "text": "User, service or device requests a resource"
      },
      {
       "label": "Policy enforcement point",
       "text": "Intercepts the request; nothing passes by default"
      },
      {
       "label": "Policy engine",
       "text": "Evaluates identity, device posture, risk signals and policy"
      },
      {
       "label": "Policy administrator",
       "text": "Instructs the enforcement point to allow or deny the session"
      },
      {
       "label": "Resource",
       "text": "Access granted for this session only, and monitored"
      },
      {
       "label": "Feedback",
       "text": "Telemetry updates risk scores and future decisions"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Pillar",
      "Traditional",
      "Advanced",
      "Optimal"
     ],
     "rows": [
      [
       "Identity",
       "Passwords, some MFA",
       "Phishing-resistant MFA, risk-based access",
       "Continuous verification, identity analytics"
      ],
      [
       "Devices",
       "Inventory incomplete",
       "Posture checked at access",
       "Real-time posture feeds every decision"
      ],
      [
       "Networks",
       "Flat, perimeter-based",
       "Macro-segmentation, encrypted traffic",
       "Micro-segmented, application-level access"
      ],
      [
       "Applications and workloads",
       "Accessible once on the network",
       "Per-application access via proxies",
       "Continuous authorisation, workload identity"
      ],
      [
       "Data",
       "Unclassified, perimeter-protected",
       "Classified, labelled, encrypted",
       "Dynamic data-level policy and rights management"
      ]
     ],
     "title": "Zero trust maturity by pillar (based on widely used public models)"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Public maturity models add three capabilities that cut across all pillars: **visibility and analytics**, **automation and orchestration**, and **governance**. Without them, zero trust becomes a collection of disconnected tools. Governance defines policy, ownership and exceptions; analytics provides the signals; automation enforces decisions consistently.",
     "title": "Cross-cutting capabilities decide success"
    },
    {
     "type": "steps",
     "title": "A phased zero trust roadmap",
     "items": [
      {
       "title": "Define protect surfaces",
       "text": "Identify the most critical data, applications, assets and services (DAAS) and their owners."
      },
      {
       "title": "Map transaction flows",
       "text": "Understand how users, services and data move around each protect surface."
      },
      {
       "title": "Strengthen identity",
       "text": "Phishing-resistant MFA, single sign-on and conditional access for priority users and admins."
      },
      {
       "title": "Know your devices",
       "text": "Inventory and posture checks; managed devices for privileged work."
      },
      {
       "title": "Replace broad network access",
       "text": "Move from VPN-to-everything to per-application access; segment critical zones."
      },
      {
       "title": "Protect data directly",
       "text": "Classify, encrypt and apply policy where data lives."
      },
      {
       "title": "Monitor and improve",
       "text": "Feed telemetry back into policy; measure maturity by pillar each year."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Buying a product labelled 'zero trust' without changing access policy; starting with the hardest legacy system; ignoring operational technology and service accounts; and declaring victory after rolling out MFA. Measure progress by how much implicit trust has actually been removed.",
     "title": "Zero trust traps"
    },
    {
     "type": "scenario",
     "title": "Where to start zero trust",
     "situation": "A government-owned power generation company has a flat corporate network, VPN access for 900 staff and contractors to 'everything', and a newly connected plant historian. The board has funded a three-year zero trust programme. Which first step gives the MOST value?",
     "options": [
      {
       "text": "Replace every firewall with a new platform branded as zero trust.",
       "feedback": "Product replacement without policy change leaves implicit trust in place.",
       "best": false
      },
      {
       "text": "Begin by micro-segmenting every workload in the data centre.",
       "feedback": "Segmenting everything at once without flow mapping is slow and risks outages.",
       "best": false
      },
      {
       "text": "Identify protect surfaces and their flows, then put phishing-resistant MFA and per-application access in front of the most critical ones, starting with administrators and contractors.",
       "feedback": "Best. It focuses limited effort on the highest-value assets and the riskiest identities, and removes the broadest implicit trust first.",
       "best": true
      },
      {
       "text": "Wait until all legacy systems are retired before starting.",
       "feedback": "Legacy systems are exactly where zero trust controls such as isolation and brokered access help most.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Zero trust maturity tracker",
     "purpose": "Record current and target maturity per pillar with the next concrete step and owner.",
     "columns": [
      "Pillar",
      "Current stage",
      "Target (12 months)",
      "Next step",
      "Owner",
      "Evidence of progress"
     ],
     "example": [
      [
       "Identity",
       "Initial: MFA for email only",
       "Advanced: phishing-resistant MFA for admins and contractors",
       "Roll out security keys to 120 admins",
       "Head of IAM",
       "Percentage of privileged logins using phishing-resistant MFA"
      ],
      [
       "Networks",
       "Traditional: flat network",
       "Initial: critical zones segmented",
       "Segment plant historian and finance systems",
       "Network architect",
       "Number of zones with deny-by-default rules"
      ]
     ],
     "rows": 6
    },
    {
     "type": "reflection",
     "prompt": "Where does your organisation still grant trust simply because a device is 'on the network'? List three examples and the zero trust control that would replace each."
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Zero trust",
       "def": "A security strategy that removes implicit trust based on network location and grants access per request based on policy and context."
      },
      {
       "term": "Implicit trust",
       "def": "Access granted simply because a user or device is inside a network or zone, without verification."
      },
      {
       "term": "Policy decision point",
       "def": "The logical component, made up of the policy engine and policy administrator, that decides whether a session is allowed."
      },
      {
       "term": "Policy enforcement point",
       "def": "The component that intercepts requests and allows or blocks sessions according to the decision."
      },
      {
       "term": "Protect surface",
       "def": "The small set of critical data, applications, assets and services that a zero trust programme protects first."
      },
      {
       "term": "Device posture",
       "def": "The security state of a device, such as patch level, encryption and endpoint protection, used in access decisions."
      },
      {
       "term": "Conditional access",
       "def": "Access policy that considers conditions such as user risk, device state and location before granting access."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "What does zero trust remove?",
       "options": [
        "Trust based only on network location",
        "All authentication requirements for users already inside the corporate network",
        "The need for logging",
        "The use of encryption"
       ],
       "answer": 0,
       "explain": "Zero trust removes implicit trust from location and replaces it with policy-based decisions."
      },
      {
       "q": "Which component evaluates identity, posture and policy to decide on access?",
       "options": [
        "Policy enforcement point sitting in front of each resource",
        "Resource",
        "Subject",
        "Policy engine"
       ],
       "answer": 3,
       "explain": "The policy engine decides; the administrator instructs the enforcement point to act."
      },
      {
       "q": "Which is the best early zero trust step for most organisations?",
       "options": [
        "Micro-segmenting every workload in all data centres in the first quarter",
        "Phishing-resistant MFA for administrators",
        "Buying a new firewall",
        "Removing all logging"
       ],
       "answer": 1,
       "explain": "Strong identity for the most privileged users removes major risk quickly."
      },
      {
       "q": "What is a protect surface?",
       "options": [
        "The external attack surface visible from the internet, including every exposed port",
        "A physical barrier",
        "The critical data, applications, assets and services protected first",
        "A type of firewall rule"
       ],
       "answer": 2,
       "explain": "A protect surface is small and critical, unlike the broad attack surface."
      },
      {
       "q": "Why are cross-cutting capabilities such as analytics and governance vital?",
       "options": [
        "They connect pillars into consistent, enforced policy",
        "They allow each pillar to be bought from a separate vendor without integration",
        "They are only needed for audits",
        "They replace identity controls"
       ],
       "answer": 0,
       "explain": "Without visibility, automation and governance, tools stay disconnected."
      }
     ]
    }
   ]
  },
  {
   "id": "m3-l3",
   "title": "Segmentation, Secure Access and Application Security",
   "subtitle": "Limiting blast radius and building security into how software is delivered",
   "minutes": 35,
   "objectives": [
    "Design segmentation that limits the spread of attacks without breaking the business",
    "Compare secure access models including VPN, SSE and SASE",
    "Govern application and API security through a secure development lifecycle"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Ransomware incidents show the same pattern repeatedly: an attacker gains one foothold and then moves sideways across a flat network to domain controllers, backups and every server. **Segmentation** limits that blast radius. At the same time, applications and APIs have become the main way customers and partners reach organisations, so **application security** must be built into delivery rather than tested at the end."
    },
    {
     "type": "compare",
     "title": "Segmentation approaches",
     "columns": [
      {
       "title": "Macro-segmentation",
       "items": [
        "Zones by function or trust: users, servers, OT, guest, management",
        "Enforced by firewalls or virtual routing",
        "Quick to start, coarse"
       ]
      },
      {
       "title": "Micro-segmentation",
       "items": [
        "Policy per workload or application tier",
        "Enforced by host agents, hypervisor or cloud security groups",
        "Fine-grained, needs good flow data"
       ]
      },
      {
       "title": "Identity-based segmentation",
       "items": [
        "Access defined by who or what is connecting",
        "Policy follows the user or workload",
        "Fits zero trust and hybrid environments"
       ]
      }
     ]
    },
    {
     "type": "steps",
     "title": "Segmenting without breaking the business",
     "items": [
      {
       "title": "Discover flows",
       "text": "Collect real traffic data for weeks, not assumptions from diagrams."
      },
      {
       "title": "Group assets",
       "text": "Group by application and sensitivity; identify crown jewels and management planes."
      },
      {
       "title": "Design policy",
       "text": "Write allow rules for needed flows; deny everything else between groups."
      },
      {
       "title": "Monitor mode",
       "text": "Run rules in alert-only mode to find missed dependencies."
      },
      {
       "title": "Enforce gradually",
       "text": "Enforce zone by zone, starting with the most critical."
      },
      {
       "title": "Maintain",
       "text": "Tie rule changes to change management and review them regularly."
      }
     ]
    },
    {
     "type": "compare",
     "title": "Remote and branch access models",
     "columns": [
      {
       "title": "Traditional VPN",
       "items": [
        "Connects the device to the network",
        "Broad access once connected",
        "Central backhaul of traffic",
        "Familiar and cheap but conflicts with zero trust"
       ]
      },
      {
       "title": "Security service edge (SSE)",
       "items": [
        "Cloud-delivered secure web gateway, cloud access security broker and zero trust network access",
        "Per-application access",
        "Inspects traffic close to the user"
       ]
      },
      {
       "title": "SASE",
       "items": [
        "SSE combined with software-defined WAN",
        "Networking and security policy from one cloud-delivered service",
        "Fits branch-heavy, cloud-first organisations"
       ]
      }
     ]
    },
    {
     "type": "flow",
     "title": "A secure development lifecycle",
     "items": [
      {
       "label": "Requirements",
       "text": "Security and privacy requirements, abuse cases"
      },
      {
       "label": "Design",
       "text": "Threat modelling and approved patterns"
      },
      {
       "label": "Build",
       "text": "Secure coding, secrets scanning, dependency checks"
      },
      {
       "label": "Test",
       "text": "Static and dynamic testing, API testing"
      },
      {
       "label": "Release",
       "text": "Signed builds, change approval, configuration checks"
      },
      {
       "label": "Operate",
       "text": "Runtime protection, logging, vulnerability response"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Risk",
      "Example",
      "Control"
     ],
     "rows": [
      [
       "Broken object-level authorisation",
       "Changing an account ID in a request returns another customer's data",
       "Check authorisation on every object, server side"
      ],
      [
       "Weak authentication",
       "API keys embedded in a mobile app",
       "Short-lived tokens, mutual TLS for partners"
      ],
      [
       "Excessive data exposure",
       "API returns full records and the app filters them",
       "Return only needed fields"
      ],
      [
       "No rate limiting",
       "Credential stuffing at thousands of attempts per minute",
       "Rate limits, bot detection"
      ],
      [
       "Shadow APIs",
       "Old API versions still live and unmonitored",
       "API inventory and gateway enforcement"
      ]
     ],
     "title": "API security essentials"
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "A regional e-commerce platform exposed an order-tracking API that returned any order when given its number. Order numbers were sequential. A researcher enumerated hundreds of thousands of orders with names, phone numbers and addresses in a few hours. The fix was simple: check that the authenticated customer owns the order. The governance lesson was harder: no API inventory, no threat model and no security testing in the release process.",
     "title": "Broken authorisation at scale"
    },
    {
     "type": "scenario",
     "title": "Funding application security",
     "situation": "A fintech releases code 40 times a week. Its only application security control is an annual penetration test, which last found 23 high-severity issues, many repeats. The CTO resists 'slowing developers down'. What should the CISO propose?",
     "options": [
      {
       "text": "Require a manual security sign-off before every release.",
       "feedback": "With 40 releases a week, manual sign-off becomes a bottleneck and will be bypassed.",
       "best": false
      },
      {
       "text": "Increase penetration testing to twice a year.",
       "feedback": "More late testing finds the same issues more often but does not prevent them.",
       "best": false
      },
      {
       "text": "Accept the risk because releases are frequent and bugs can be fixed quickly.",
       "feedback": "Fast releases do not protect data already exposed by a vulnerability.",
       "best": false
      },
      {
       "text": "Build automated security checks into the pipeline, provide secure-by-default libraries and train security champions in each squad, measuring repeat findings and fix times.",
       "feedback": "Best. Automation and enablement fit the release speed, prevent repeat issues and address the CTO's concern by keeping the secure path fast.",
       "best": true
      }
     ]
    },
    {
     "type": "checklist",
     "title": "Application security governance checklist",
     "items": [
      "Maintain an inventory of applications and APIs with owners and data classification",
      "Require threat models for new high-risk systems and major changes",
      "Run automated code, dependency and secrets scanning in every pipeline",
      "Define release gates for critical findings with an exception route",
      "Track mean time to fix by severity and repeat-finding rates",
      "Appoint and support security champions in delivery teams",
      "Test APIs explicitly, including authorisation on every object"
     ]
    },
    {
     "type": "reflection",
     "prompt": "If an attacker compromised one ordinary laptop in your organisation today, what could they reach within an hour? What segmentation change would shrink that most?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Segmentation",
       "def": "Dividing networks or systems into zones with controlled communication to limit the spread of attacks."
      },
      {
       "term": "Micro-segmentation",
       "def": "Fine-grained segmentation that applies policy at the level of individual workloads or application tiers."
      },
      {
       "term": "Blast radius",
       "def": "The extent of damage an attacker or failure can cause from a single point of compromise."
      },
      {
       "term": "Security service edge",
       "def": "A cloud-delivered set of security services such as secure web gateway, CASB and zero trust network access."
      },
      {
       "term": "SASE",
       "def": "Secure access service edge: the convergence of SSE security services with software-defined WAN networking."
      },
      {
       "term": "Secure development lifecycle",
       "def": "A software process that builds security activities into every phase from requirements to operation."
      },
      {
       "term": "Security champion",
       "def": "A developer or engineer in a delivery team who promotes and supports secure practices."
      },
      {
       "term": "Broken object-level authorisation",
       "def": "An API flaw where a user can access objects they do not own by changing identifiers in requests."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "What is the first step in segmenting an existing network safely?",
       "options": [
        "Block all traffic between zones on day one and fix complaints as they arrive",
        "Buy micro-segmentation agents",
        "Discover actual traffic flows",
        "Rename the VLANs"
       ],
       "answer": 2,
       "explain": "Without real flow data, policies break business processes."
      },
      {
       "q": "What does SASE add to SSE?",
       "options": [
        "A traditional VPN concentrator located in the head-office data centre",
        "Software-defined WAN networking",
        "On-premises tape backup",
        "Physical access control"
       ],
       "answer": 1,
       "explain": "SASE combines cloud-delivered security (SSE) with SD-WAN networking."
      },
      {
       "q": "An API returns another customer's record when an ID is changed. What is this?",
       "options": [
        "Broken object-level authorisation",
        "Excessive rate limiting applied too aggressively to legitimate users",
        "Denial of service",
        "A strong token design"
       ],
       "answer": 0,
       "explain": "The server fails to check that the requester owns the object."
      },
      {
       "q": "Which control best prevents secrets being committed to code repositories?",
       "options": [
        "An annual penetration test of the production website by an external firm",
        "A longer password policy",
        "A new firewall rule",
        "Automated secrets scanning in the pipeline"
       ],
       "answer": 3,
       "explain": "Scanning in the pipeline catches secrets before they are merged or deployed."
      },
      {
       "q": "Why run new segmentation rules in monitor mode first?",
       "options": [
        "To make the rules permanent without approval",
        "Because monitor mode blocks more traffic than enforcement mode",
        "To find missed dependencies before enforcement",
        "To avoid logging"
       ],
       "answer": 2,
       "explain": "Monitor mode reveals legitimate flows that would otherwise be blocked."
      }
     ]
    }
   ]
  },
  {
   "id": "m3-l4",
   "title": "Cloud and Hybrid Security Governance",
   "subtitle": "Shared responsibility, landing zones and guardrails across many clouds",
   "minutes": 35,
   "objectives": [
    "Apply the shared responsibility model to IaaS, PaaS and SaaS",
    "Design landing zones and preventive and detective guardrails",
    "Govern multi-cloud and hybrid estates, including data residency and cost-security trade-offs"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Cloud changes who does what. A provider secures the infrastructure it runs; the customer remains responsible for how it configures and uses the service. Most cloud breaches are not caused by provider failures but by customer misconfiguration, exposed keys and over-permissive identities. **Cloud security governance** sets the rules, structures and automated guardrails that let teams move quickly while staying within policy."
    },
    {
     "type": "table",
     "head": [
      "Layer",
      "IaaS",
      "PaaS",
      "SaaS"
     ],
     "rows": [
      [
       "Data and its classification",
       "Customer",
       "Customer",
       "Customer"
      ],
      [
       "Identities and access",
       "Customer",
       "Customer",
       "Customer"
      ],
      [
       "Application",
       "Customer",
       "Customer",
       "Provider"
      ],
      [
       "Operating system and runtime",
       "Customer",
       "Provider",
       "Provider"
      ],
      [
       "Virtual network controls",
       "Customer",
       "Shared",
       "Provider"
      ],
      [
       "Physical hosts, network, data centre",
       "Provider",
       "Provider",
       "Provider"
      ]
     ],
     "title": "Shared responsibility by service model"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Whatever the service model, the customer decides who has access and how data is classified, shared and retained. A SaaS provider cannot stop an administrator from sharing a folder publicly or from granting a third-party app access to every mailbox.",
     "title": "The customer always owns data and identity"
    },
    {
     "type": "layers",
     "title": "A governed landing zone",
     "items": [
      {
       "label": "Organisation and governance",
       "parts": [
        "Account or subscription hierarchy",
        "Policy inheritance",
        "Billing and tagging standards"
       ]
      },
      {
       "label": "Identity",
       "parts": [
        "Central identity provider and SSO",
        "Role-based access, no long-lived keys",
        "Break-glass accounts"
       ]
      },
      {
       "label": "Network",
       "parts": [
        "Hub-and-spoke or transit design",
        "Private connectivity to on-premises",
        "Central egress inspection"
       ]
      },
      {
       "label": "Security services",
       "parts": [
        "Central logging account",
        "Cloud security posture management",
        "Key management"
       ]
      },
      {
       "label": "Workload accounts",
       "parts": [
        "Separate accounts per application and environment",
        "Pre-approved patterns via infrastructure as code"
       ]
      }
     ]
    },
    {
     "type": "compare",
     "title": "Guardrails",
     "columns": [
      {
       "title": "Preventive",
       "items": [
        "Policies that block risky actions, such as public storage or unapproved regions",
        "Enforced at organisation level",
        "Strong but must allow approved exceptions"
       ]
      },
      {
       "title": "Detective",
       "items": [
        "Posture scanning and alerts for drift",
        "Cloud security posture management and CNAPP tools",
        "Feed findings to owners with SLAs"
       ]
      },
      {
       "title": "Corrective",
       "items": [
        "Automatic remediation of known-bad settings",
        "Use carefully for low-risk fixes",
        "Keeps estate clean at scale"
       ]
      }
     ]
    },
    {
     "type": "cli",
     "title": "Policy as code: deny public storage (generic example)",
     "device": "Policy engine (Rego-style)",
     "lines": [
      "package cloud.storage",
      "# Deny any storage bucket that allows public read",
      "deny[msg] {",
      "  bucket := input.resources[_]",
      "  bucket.type == \"storage_bucket\"",
      "  bucket.acl == \"public-read\"",
      "  msg := sprintf(\"Bucket %s must not be public\", [bucket.name])",
      "}"
     ],
     "note": "Policy as code lets the same rule be tested in pipelines before deployment and checked continuously afterwards. The syntax shown is illustrative of declarative policy languages."
    },
    {
     "type": "table",
     "head": [
      "Decision",
      "Options",
      "Governance consideration"
     ],
     "rows": [
      [
       "Which clouds for what",
       "Primary cloud plus specialised; true multi-cloud",
       "Skills, tooling and logging multiply with each provider"
      ],
      [
       "Data residency",
       "In-country region, regional, global",
       "Sector rules, contracts and law enforcement access"
      ],
      [
       "Identity",
       "One identity provider federated to all clouds",
       "Avoid separate admin identities per cloud"
      ],
      [
       "Logging",
       "Central log platform across clouds and on-premises",
       "Retention, cost and investigation needs"
      ],
      [
       "Exit and concentration",
       "Portability patterns, exit plans",
       "Regulators increasingly expect credible exit strategies"
      ]
     ],
     "title": "Governance decisions for multi-cloud and hybrid"
    },
    {
     "type": "scenario",
     "title": "Shadow cloud at a university",
     "situation": "A Dhaka university discovers 37 cloud accounts opened on personal cards by research groups, several storing student data, none connected to central logging. The registrar wants them all closed immediately. What should the CISO recommend?",
     "options": [
      {
       "text": "Offer a governed landing zone with central billing, SSO and logging, migrate accounts into it with a deadline, and close any that hold sensitive data without an owner.",
       "feedback": "Best. It removes the risk while giving researchers a faster legitimate path, which stops shadow cloud recurring.",
       "best": true
      },
      {
       "text": "Close all 37 accounts today without notice.",
       "feedback": "Abrupt closure may destroy research data and pushes groups to hide future accounts.",
       "best": false
      },
      {
       "text": "Leave them alone because research needs freedom.",
       "feedback": "Student data in ungoverned accounts is a clear compliance and breach risk.",
       "best": false
      },
      {
       "text": "Ask each group to complete a 60-question security questionnaire every year.",
       "feedback": "Paperwork without a governed platform does not reduce technical risk.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Cloud guardrail register",
     "purpose": "List the guardrails that apply across cloud accounts, how they are enforced and how exceptions work.",
     "columns": [
      "Guardrail",
      "Type",
      "Scope",
      "Enforcement mechanism",
      "Exception process",
      "Owner"
     ],
     "example": [
      [
       "No public storage buckets",
       "Preventive",
       "All accounts",
       "Organisation-level policy plus pipeline check",
       "CISO approval for public websites only",
       "Cloud platform team"
      ],
      [
       "Logs to central account for 400 days",
       "Preventive and detective",
       "All production accounts",
       "Policy plus daily posture scan",
       "None",
       "Security operations"
      ]
     ],
     "rows": 6
    },
    {
     "type": "reflection",
     "prompt": "Which cloud services in your organisation are outside central identity and logging today? What would it take to bring the riskiest one in?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Shared responsibility model",
       "def": "The division of security duties between cloud provider and customer, which varies by service model."
      },
      {
       "term": "Landing zone",
       "def": "A pre-configured, governed cloud environment with identity, network, logging and policy foundations for workloads."
      },
      {
       "term": "Guardrail",
       "def": "An automated policy that prevents, detects or corrects actions outside agreed security rules."
      },
      {
       "term": "Policy as code",
       "def": "Expressing security and compliance rules in machine-readable code that can be tested and enforced automatically."
      },
      {
       "term": "CSPM",
       "def": "Cloud security posture management: tools that continuously check cloud configurations against policy."
      },
      {
       "term": "CNAPP",
       "def": "Cloud-native application protection platform: combined posture, workload and identity protection for cloud applications."
      },
      {
       "term": "Data residency",
       "def": "Requirements about the geographic location where data is stored and processed."
      },
      {
       "term": "Shadow IT",
       "def": "Technology services used without the knowledge or approval of the organisation's IT and security functions."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "In a SaaS service, who is responsible for deciding who can access customer data?",
       "options": [
        "The provider, because it runs the application and all of its infrastructure",
        "The customer",
        "The internet service provider",
        "Nobody, as it is automatic"
       ],
       "answer": 1,
       "explain": "Identity and data access remain customer responsibilities in every service model."
      },
      {
       "q": "Which is a preventive guardrail?",
       "options": [
        "An organisation policy blocking unapproved regions",
        "A weekly report of misconfigured storage sent to application owners for review",
        "A post-incident review",
        "An annual audit"
       ],
       "answer": 0,
       "explain": "Preventive guardrails stop the action before it happens."
      },
      {
       "q": "Why use separate cloud accounts per application and environment?",
       "options": [
        "To increase the number of invoices the finance team must reconcile each month",
        "To avoid logging",
        "Because providers require it",
        "To limit blast radius and simplify access control"
       ],
       "answer": 3,
       "explain": "Account separation is a strong isolation boundary and clarifies ownership."
      },
      {
       "q": "What is the main advantage of policy as code?",
       "options": [
        "It removes the need for any human approval of exceptions or policy changes",
        "It replaces encryption",
        "It makes cloud services free",
        "Rules can be tested and enforced automatically"
       ],
       "answer": 3,
       "explain": "Code-based policy is consistent, testable and automatable."
      },
      {
       "q": "What is the most common cause of cloud data breaches?",
       "options": [
        "Physical theft of disks from the provider's data centres by insiders",
        "Undersea cable cuts",
        "Customer misconfiguration and weak identity control",
        "Provider bankruptcy"
       ],
       "answer": 2,
       "explain": "Most incidents stem from how customers configure and grant access to services."
      }
     ]
    }
   ]
  },
  {
   "id": "m3-l5",
   "title": "OT, ICS and IoT Security",
   "subtitle": "Protecting physical processes where safety and availability come first",
   "minutes": 40,
   "objectives": [
    "Explain how OT security priorities differ from IT and why safety comes first",
    "Apply zones, conduits and security levels to an industrial site",
    "Govern IoT devices across their lifecycle"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "**Operational technology (OT)** monitors and controls physical processes: turbines in a power plant, pumps in a water utility, conveyors in a garment factory, chillers in a hospital. **Industrial control systems (ICS)** such as PLCs, SCADA and distributed control systems are part of OT. Attacks here can stop production, damage equipment, harm the environment and endanger lives. That changes priorities: in OT, **safety and availability** usually come before confidentiality."
    },
    {
     "type": "compare",
     "title": "IT and OT priorities",
     "columns": [
      {
       "title": "Typical IT",
       "items": [
        "Confidentiality, integrity, availability",
        "Patch monthly or faster",
        "Devices replaced every 3 to 5 years",
        "Rebooting is routine",
        "Active scanning is normal"
       ]
      },
      {
       "title": "Typical OT",
       "items": [
        "Safety, availability, integrity, then confidentiality",
        "Patching needs vendor approval and outage windows",
        "Equipment lasts 15 to 30 years",
        "Unplanned reboot may stop a process",
        "Active scanning can crash fragile devices"
       ]
      }
     ]
    },
    {
     "type": "layers",
     "title": "A reference model of industrial levels (Purdue-style)",
     "items": [
      {
       "label": "Levels 4 and 5: Enterprise",
       "parts": [
        "Business systems, email, ERP",
        "Internet access"
       ]
      },
      {
       "label": "Level 3.5: Industrial DMZ",
       "parts": [
        "Brokers data between IT and OT",
        "No direct traffic crosses it"
       ]
      },
      {
       "label": "Level 3: Site operations",
       "parts": [
        "Historians, engineering workstations, patch servers"
       ]
      },
      {
       "label": "Level 2: Supervisory control",
       "parts": [
        "HMI and SCADA servers that operators use"
       ]
      },
      {
       "label": "Level 1: Basic control",
       "parts": [
        "PLCs, controllers, safety instrumented systems"
       ]
      },
      {
       "label": "Level 0: Physical process",
       "parts": [
        "Sensors, actuators, motors, valves"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "The international IEC 62443 series groups assets with similar security needs into **zones** and defines the communication paths between them as **conduits**. Each zone gets a target **security level** describing the attacker it must resist, from casual misuse (SL1) to sophisticated attackers with extensive resources (SL4). Conduits carry controls such as firewalls, data diodes or brokers.",
     "title": "Zones and conduits"
    },
    {
     "type": "table",
     "head": [
      "Level",
      "Protects against"
     ],
     "rows": [
      [
       "SL1",
       "Casual or accidental violation"
      ],
      [
       "SL2",
       "Intentional attack using simple means, low resources and generic skills"
      ],
      [
       "SL3",
       "Intentional attack using sophisticated means, moderate resources and system-specific skills"
      ],
      [
       "SL4",
       "Intentional attack using sophisticated means, extended resources and high motivation"
      ]
     ],
     "title": "Security levels in plain words"
    },
    {
     "type": "steps",
     "title": "Starting an OT security programme",
     "items": [
      {
       "title": "Get leadership and engineering together",
       "text": "Make plant managers and safety engineers co-owners, not just IT."
      },
      {
       "title": "Build an asset inventory passively",
       "text": "Use passive network monitoring and engineering records; avoid aggressive scanning."
      },
      {
       "title": "Map zones and conduits",
       "text": "Group assets, document all connections including vendor remote access."
      },
      {
       "title": "Close the riskiest paths",
       "text": "Remove direct IT-to-OT routes, control remote access through a monitored broker with MFA."
      },
      {
       "title": "Back up and plan recovery",
       "text": "Offline backups of controller logic and configurations; tested restoration."
      },
      {
       "title": "Monitor",
       "text": "OT-aware detection of unusual commands and new devices."
      },
      {
       "title": "Patch and harden by risk",
       "text": "Coordinate with vendors; use compensating controls where patching is impossible."
      }
     ]
    },
    {
     "type": "case",
     "title": "Ransomware reaches the factory floor",
     "context": "A knit-composite garment group near Narayanganj runs dyeing and finishing machines controlled by PLCs and HMI workstations. HMIs run an old desktop operating system and connect to the corporate network so production data can feed the ERP. Ransomware encrypts the corporate file servers and then the HMIs. Machines stop mid-batch, ruining a large export order with a buyer deadline.",
     "questions": [
      "Which architecture weakness allowed the spread to production?",
      "What immediate recovery priorities should the incident lead set?",
      "What three governance changes would you make after recovery?"
     ],
     "answer": "The weakness was direct connectivity between corporate and production networks with no industrial DMZ, plus unsupported HMIs. Immediate priorities are safety checks on stopped processes, isolating OT from IT, restoring HMIs from known-good images and PLC logic backups, and communicating with buyers about the delayed order. Governance changes: make production leadership co-owner of OT risk; require an industrial DMZ with brokered data transfer and controlled vendor access; and fund an OT asset inventory, offline backups and a lifecycle plan for unsupported HMIs."
    },
    {
     "type": "table",
     "head": [
      "Lifecycle stage",
      "Key question",
      "Control"
     ],
     "rows": [
      [
       "Procure",
       "Does the product meet a security baseline?",
       "No universal default passwords, update support period, vulnerability disclosure policy"
      ],
      [
       "Onboard",
       "Is it known and isolated?",
       "Inventory, unique credentials, dedicated network segment"
      ],
      [
       "Operate",
       "Is it behaving normally and patched?",
       "Monitoring, update process, certificate management"
      ],
      [
       "Retire",
       "Is data removed and access revoked?",
       "Secure wipe, credential revocation, inventory update"
      ]
     ],
     "title": "IoT device governance"
    },
    {
     "type": "scenario",
     "title": "The vendor wants permanent remote access",
     "situation": "A hospital's new MRI scanner vendor asks for a permanent always-on VPN into the clinical network for 'predictive maintenance'. The biomedical engineering team supports it. What should the CISO require?",
     "options": [
      {
       "text": "Approve the VPN because the vendor is reputable.",
       "feedback": "Reputation does not prevent compromise of the vendor's own systems, which would then reach the hospital.",
       "best": false
      },
      {
       "text": "Refuse any remote access.",
       "feedback": "This may void support or delay critical repairs; a controlled route is better.",
       "best": false
      },
      {
       "text": "Allow the VPN but require the vendor to sign an annual security statement.",
       "feedback": "A statement does not technically restrict access or provide monitoring.",
       "best": false
      },
      {
       "text": "Brokered remote access to the device segment only, with MFA, session approval and recording, written into the support contract.",
       "feedback": "Best. It meets the vendor's legitimate need while removing broad, unmonitored access to the clinical network.",
       "best": true
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Who in your organisation would make the decision to shut down a production or clinical system during a cyber incident? Is that decision documented and practised?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Operational technology",
       "def": "Hardware and software that monitors and controls physical devices and processes."
      },
      {
       "term": "Industrial control system",
       "def": "Systems such as PLCs, SCADA and distributed control systems used to operate industrial processes."
      },
      {
       "term": "PLC",
       "def": "Programmable logic controller: a ruggedised computer that controls machinery and processes."
      },
      {
       "term": "HMI",
       "def": "Human-machine interface: the screens and software operators use to monitor and control a process."
      },
      {
       "term": "Industrial DMZ",
       "def": "A buffer zone between enterprise and control networks where data is brokered so no traffic passes directly."
      },
      {
       "term": "Zone and conduit",
       "def": "Grouping of assets with similar security needs (zone) and the controlled communication path between groups (conduit)."
      },
      {
       "term": "Security level",
       "def": "In IEC 62443, the target strength of protection for a zone, from SL1 to SL4."
      },
      {
       "term": "Safety instrumented system",
       "def": "An independent control system that brings a process to a safe state when dangerous conditions arise."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which priority usually comes first in OT security?",
       "options": [
        "Confidentiality of production data shared with buyers and partners",
        "Safety",
        "Speed of patching",
        "Cost reduction"
       ],
       "answer": 1,
       "explain": "Physical processes can harm people and equipment, so safety leads."
      },
      {
       "q": "Why is aggressive active scanning risky in OT networks?",
       "options": [
        "Fragile devices can crash and stop processes",
        "Scanning tools are illegal to use inside industrial plants in most countries",
        "It is slower than passive monitoring",
        "It requires internet access"
       ],
       "answer": 0,
       "explain": "Many controllers were not designed to handle unexpected traffic."
      },
      {
       "q": "What is the role of an industrial DMZ?",
       "options": [
        "Host the safety instrumented system so that it can be reached from the internet",
        "Store all email",
        "Broker data between IT and OT without direct traffic",
        "Replace the PLCs"
       ],
       "answer": 2,
       "explain": "The DMZ prevents direct connections across the IT-OT boundary."
      },
      {
       "q": "A zone must resist sophisticated attackers with moderate resources. Which target security level fits?",
       "options": [
        "SL3",
        "SL1, because it is the baseline level that every zone receives",
        "SL2",
        "SL0"
       ],
       "answer": 0,
       "explain": "SL3 addresses sophisticated means with moderate resources and system-specific skills."
      },
      {
       "q": "Which IoT procurement requirement best reduces mass compromise?",
       "options": [
        "The device must use the same password across all units for easier maintenance",
        "No universal default passwords",
        "Bright status lights",
        "A long warranty"
       ],
       "answer": 1,
       "explain": "Shared default credentials are a common cause of mass IoT compromise."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m4",
 "order": 4,
 "code": "Protect",
 "title": "Identity, Data Protection and Privacy",
 "subtitle": "Govern who can access what, and protect data and personal information throughout its life",
 "outcomes": [
  "Run identity governance with effective lifecycle, access models and certifications",
  "Control privileged access and govern non-human identities with phishing-resistant authentication",
  "Classify and protect data proportionately across its lifecycle",
  "Govern cryptography, key management and the move to post-quantum algorithms",
  "Apply data protection principles, DPIAs and breach notification duties"
 ],
 "lessons": [
  {
   "id": "m4-l1",
   "title": "Identity Governance and Administration",
   "subtitle": "Making sure the right people have the right access, and can prove it",
   "minutes": 35,
   "objectives": [
    "Design joiner, mover and leaver processes driven by authoritative sources",
    "Choose between role-based, attribute-based and policy-based access models",
    "Run access certifications and segregation-of-duties controls that actually reduce risk"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Identity has become the main security perimeter. Attackers increasingly log in rather than break in, using stolen credentials, abused tokens and forgotten accounts. **Identity governance and administration (IGA)** is the set of processes and tools that decide who should have access to what, grant and remove it on time, and prove to auditors that access is appropriate. It is where security, HR, business owners and audit meet."
    },
    {
     "type": "flow",
     "title": "The identity lifecycle",
     "items": [
      {
       "label": "Joiner",
       "text": "HR record triggers account creation with birthright access"
      },
      {
       "label": "Request",
       "text": "Additional access requested and approved by the owner"
      },
      {
       "label": "Mover",
       "text": "Role change removes old access and grants new"
      },
      {
       "label": "Review",
       "text": "Owners certify access periodically"
      },
      {
       "label": "Leaver",
       "text": "Accounts disabled on the last day, then removed"
      },
      {
       "label": "Audit",
       "text": "Evidence of each step retained"
      }
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Most organisations handle joiners and leavers reasonably well. **Movers** are the silent risk: people change roles and keep old access, accumulating privileges over years. A branch officer promoted to head office who still has teller rights can create and approve transactions. Mover processes must remove before they add.",
     "title": "The mover problem"
    },
    {
     "type": "compare",
     "title": "Access models",
     "columns": [
      {
       "title": "Role-based (RBAC)",
       "items": [
        "Access bundled into roles matching jobs",
        "Easy to review and explain",
        "Role explosion if roles are too fine-grained"
       ]
      },
      {
       "title": "Attribute-based (ABAC)",
       "items": [
        "Decisions use attributes of user, resource and context",
        "Fine-grained and dynamic",
        "Harder to review; needs clean attribute data"
       ]
      },
      {
       "title": "Policy-based (PBAC)",
       "items": [
        "Central, readable policies evaluated at run time",
        "Combines roles and attributes",
        "Needs a policy engine and strong governance of policy changes"
       ]
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Process",
      "Conflicting duties",
      "Why they conflict"
     ],
     "rows": [
      [
       "Payments",
       "Create vendor and approve payment to vendor",
       "One person could pay a fake supplier"
      ],
      [
       "Payroll",
       "Change salary data and approve payroll run",
       "One person could raise their own pay"
      ],
      [
       "IT change",
       "Develop code and deploy to production unreviewed",
       "Malicious or faulty code could go live unchecked"
      ],
      [
       "Security",
       "Administer logs and administer the systems being logged",
       "Activity could be hidden"
      ],
      [
       "Mobile money",
       "Reset customer PIN and approve high-value transfers",
       "Account takeover and theft by one insider"
      ]
     ],
     "title": "Segregation of duties examples"
    },
    {
     "type": "steps",
     "title": "An access certification that is not a rubber stamp",
     "items": [
      {
       "title": "Scope by risk",
       "text": "Review privileged, sensitive and SoD-relevant access more often; low-risk access less often."
      },
      {
       "title": "Give context",
       "text": "Show reviewers what each entitlement means in plain words, last use date and peer comparison."
      },
      {
       "title": "Ask the right person",
       "text": "The resource owner or manager who understands the need, not IT."
      },
      {
       "title": "Make revocation easy",
       "text": "One click to remove; automatic fulfilment within days."
      },
      {
       "title": "Detect rubber-stamping",
       "text": "Flag reviewers who approve everything in seconds."
      },
      {
       "title": "Close the loop",
       "text": "Confirm removals happened and report outcomes to the risk committee."
      }
     ]
    },
    {
     "type": "template",
     "title": "Access review record",
     "purpose": "Document a periodic review of access for one application so decisions and removals are evidenced.",
     "columns": [
      "Application",
      "User",
      "Entitlement (plain words)",
      "Last used",
      "Reviewer decision",
      "Reason",
      "Removal confirmed"
     ],
     "example": [
      [
       "Core banking",
       "R. Hossain",
       "Approve transfers above BDT 10 lakh",
       "112 days ago",
       "Revoke",
       "Moved to compliance team",
       "Yes, ticket 4471"
      ],
      [
       "Core banking",
       "S. Akter",
       "Create beneficiary",
       "2 days ago",
       "Keep",
       "Current operations role",
       "Not applicable"
      ]
     ],
     "rows": 8
    },
    {
     "type": "scenario",
     "title": "Rubber-stamp reviews",
     "situation": "An insurance company's quarterly access reviews show a 99.6% approval rate. Internal audit finds 41 leavers still active and 12 users with conflicting payment rights. Managers say the reviews are 'too long to read'. What should the IAM lead change FIRST?",
     "options": [
      {
       "text": "Require managers to sign a declaration that they read every line.",
       "feedback": "More paperwork does not make long, unclear reviews meaningful.",
       "best": false
      },
      {
       "text": "Fix leaver automation from HR, then redesign reviews to focus on high-risk access with plain-language entitlements, usage data and SoD flags.",
       "feedback": "Best. Leavers are a process failure that reviews should never have to catch, and focused, contextual reviews make real decisions possible.",
       "best": true
      },
      {
       "text": "Move reviews from quarterly to monthly.",
       "feedback": "Doubling the frequency of a broken process doubles the fatigue.",
       "best": false
      },
      {
       "text": "Let the IAM team approve all access centrally instead of managers.",
       "feedback": "IAM lacks business context; removing owners from decisions weakens accountability.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Pick one person who has changed roles in your organisation in the last two years. Would you be confident that their old access was removed? How would you prove it?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Identity governance and administration",
       "def": "Processes and tools that manage the identity lifecycle, access requests, reviews and evidence of appropriate access."
      },
      {
       "term": "Joiner-mover-leaver",
       "def": "The lifecycle events of starting, changing role and leaving that should drive access changes."
      },
      {
       "term": "Authoritative source",
       "def": "The trusted system, usually HR, that triggers identity lifecycle events."
      },
      {
       "term": "Birthright access",
       "def": "Access granted automatically to everyone in a role on day one."
      },
      {
       "term": "RBAC",
       "def": "Role-based access control: access granted through roles that match job functions."
      },
      {
       "term": "ABAC",
       "def": "Attribute-based access control: access decided from attributes of the user, resource and context."
      },
      {
       "term": "Segregation of duties",
       "def": "Splitting conflicting tasks between different people so one person cannot complete a sensitive process alone."
      },
      {
       "term": "Access certification",
       "def": "A periodic review in which owners confirm or revoke users' access."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which lifecycle event most often causes privilege accumulation?",
       "options": [
        "Joiner, because new staff often receive access before training is complete",
        "Leaver",
        "Password reset",
        "Mover"
       ],
       "answer": 3,
       "explain": "Role changes frequently add new access without removing the old."
      },
      {
       "q": "What should trigger account disablement for a departing employee?",
       "options": [
        "A request from a colleague in the same team",
        "The HR record of the leaving date",
        "The next quarterly access review",
        "The employee's own email"
       ],
       "answer": 1,
       "explain": "HR is the authoritative source and should drive timely disablement."
      },
      {
       "q": "A reviewer approves 600 entitlements in four minutes. What does this indicate?",
       "options": [
        "Rubber-stamping that the process should flag",
        "A highly efficient review",
        "That all access is appropriate",
        "A need for more entitlements"
       ],
       "answer": 0,
       "explain": "Such speed shows decisions are not being made; good IGA processes detect this."
      },
      {
       "q": "Which pair of duties creates a segregation-of-duties conflict?",
       "options": [
        "Reading a report and printing it",
        "Logging in and changing one's own password",
        "Viewing a dashboard and exporting a chart",
        "Creating a vendor and approving payments to it"
       ],
       "answer": 3,
       "explain": "One person could create a fake supplier and pay it."
      },
      {
       "q": "What is a common drawback of very fine-grained RBAC?",
       "options": [
        "It cannot be reviewed at all",
        "It ignores job functions",
        "Role explosion that makes roles hard to manage",
        "It requires no identity data"
       ],
       "answer": 2,
       "explain": "Too many narrowly defined roles become unmanageable and hard to review."
      }
     ]
    }
   ]
  },
  {
   "id": "m4-l2",
   "title": "Privileged Access, Strong Authentication and Non-Human Identities",
   "subtitle": "Protecting the keys to the kingdom, for people and machines alike",
   "minutes": 35,
   "objectives": [
    "Design privileged access management with just-in-time and session controls",
    "Choose authentication strength by risk, favouring phishing-resistant methods",
    "Govern service accounts, API keys, tokens and other non-human identities"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "In almost every serious breach, attackers seek **privileged access**: domain administrator, cloud root, database owner or backup administrator rights. With them, they can disable defences, encrypt everything and erase evidence. **Privileged access management (PAM)** reduces the number of privileged accounts, limits when they can be used, controls how sessions happen and records what is done."
    },
    {
     "type": "framework",
     "title": "Privileged access principles",
     "items": [
      {
       "label": "P1",
       "title": "Minimise standing privilege",
       "text": "Few or no permanent admin rights; elevate only when needed."
      },
      {
       "label": "P2",
       "title": "Just in time",
       "text": "Grant privilege for a task and a time window, then remove it automatically."
      },
      {
       "label": "P3",
       "title": "Separate admin identities",
       "text": "Use dedicated admin accounts that never read email or browse the web."
      },
      {
       "label": "P4",
       "title": "Secure admin workstations",
       "text": "Perform privileged work from hardened, managed devices."
      },
      {
       "label": "P5",
       "title": "Vault and rotate",
       "text": "Store shared and service credentials in a vault and rotate them automatically."
      },
      {
       "label": "P6",
       "title": "Record and review",
       "text": "Record privileged sessions and review high-risk activity."
      },
      {
       "label": "P7",
       "title": "Break glass",
       "text": "Keep emergency accounts with strong protection, monitoring and tested procedures."
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Method",
      "Resists password reuse",
      "Resists phishing",
      "Notes"
     ],
     "rows": [
      [
       "Password only",
       "No",
       "No",
       "Unacceptable for remote or privileged access"
      ],
      [
       "SMS one-time code",
       "Yes",
       "No",
       "Vulnerable to SIM-swap and real-time phishing"
      ],
      [
       "Authenticator app code",
       "Yes",
       "No",
       "Can be relayed by phishing proxies"
      ],
      [
       "Push approval with number matching",
       "Yes",
       "Partly",
       "Reduces fatigue attacks; still phishable in some flows"
      ],
      [
       "Passkeys or FIDO2 security keys",
       "Yes",
       "Yes",
       "Bound to the real site; phishing-resistant"
      ],
      [
       "Certificate or smart card",
       "Yes",
       "Yes",
       "Strong; heavier to manage"
      ]
     ],
     "title": "Authentication strength (from weakest to strongest)"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Real-time phishing kits can relay one-time codes and push approvals to attackers. Methods that cryptographically bind authentication to the genuine website, such as FIDO2 security keys and passkeys, defeat these attacks. Make them mandatory for administrators, finance approvers and executives first.",
     "title": "Phishing-resistant MFA is the new baseline for admins"
    },
    {
     "type": "text",
     "text": "**Non-human identities (NHIs)** include service accounts, application credentials, API keys, cloud workload roles, bots and certificates. In many organisations they outnumber human identities many times over. They often have broad privileges, never expire, are shared between systems and have no clear owner. Stolen tokens and keys from code repositories and CI/CD systems are now a leading way into cloud environments."
    },
    {
     "type": "table",
     "head": [
      "Problem",
      "Control"
     ],
     "rows": [
      [
       "No inventory",
       "Discover NHIs across directories, clouds, code and pipelines; record owner and purpose"
      ],
      [
       "Long-lived secrets",
       "Prefer short-lived tokens and workload identity federation; rotate what remains"
      ],
      [
       "Hard-coded keys",
       "Secrets scanning; vault retrieval at run time"
      ],
      [
       "Excess permissions",
       "Least-privilege roles based on observed usage"
      ],
      [
       "Orphaned accounts",
       "Owner required at creation; disable when owner leaves or system retires"
      ],
      [
       "Invisible misuse",
       "Baseline normal behaviour and alert on anomalies such as new locations or APIs"
      ]
     ],
     "title": "Governing non-human identities"
    },
    {
     "type": "scenario",
     "title": "Domain admin sprawl",
     "situation": "A Dhaka garment group discovers 64 accounts with domain administrator rights, including former contractors and three service accounts with passwords unchanged since 2017. Ransomware groups are targeting its sector. What is the BEST first action?",
     "options": [
      {
       "text": "Buy a PAM product and plan a two-year rollout before changing anything.",
       "feedback": "Tools help, but immediate reduction of privilege and stale credentials should not wait for a long project.",
       "best": false
      },
      {
       "text": "Change all 64 passwords and keep the accounts.",
       "feedback": "Password changes do nothing about excessive standing privilege.",
       "best": false
      },
      {
       "text": "Reduce domain admins to a small named group with separate admin accounts and phishing-resistant MFA, vault and rotate service account credentials, and disable orphaned accounts.",
       "feedback": "Best. It removes the most dangerous standing privilege quickly and closes known orphaned and stale credentials.",
       "best": true
      },
      {
       "text": "Require admins to sign the acceptable-use policy again.",
       "feedback": "Policy acknowledgement does not reduce technical exposure.",
       "best": false
      }
     ]
    },
    {
     "type": "checklist",
     "title": "Privileged access quick wins",
     "items": [
      "Count and justify every account with domain, cloud root or database owner rights",
      "Create separate admin accounts with no email or internet access",
      "Enforce phishing-resistant MFA on all privileged access",
      "Vault and rotate shared and service credentials",
      "Remove local administrator rights from standard user devices",
      "Monitor and alert on privileged group membership changes",
      "Test break-glass accounts and their alerting quarterly"
     ]
    },
    {
     "type": "reflection",
     "prompt": "How many non-human identities exist in your environment, and who owns them? If you cannot answer, what would be the first source you would query?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Privileged access management",
       "def": "Controls and tools that minimise, broker, monitor and record the use of high-level privileges."
      },
      {
       "term": "Standing privilege",
       "def": "Privileged rights that remain permanently assigned whether or not they are being used."
      },
      {
       "term": "Just-in-time access",
       "def": "Granting elevated access only for a specific task and time window, then removing it automatically."
      },
      {
       "term": "Break-glass account",
       "def": "An emergency account used only when normal access fails, protected and monitored closely."
      },
      {
       "term": "Phishing-resistant MFA",
       "def": "Authentication, such as FIDO2 keys or passkeys, that cannot be relayed by a fake website."
      },
      {
       "term": "Passkey",
       "def": "A FIDO-based credential stored on a device or synced securely that replaces passwords and resists phishing."
      },
      {
       "term": "Non-human identity",
       "def": "An identity used by software rather than a person, such as a service account, API key or workload role."
      },
      {
       "term": "Secrets vault",
       "def": "A secured system that stores, issues and rotates credentials and keys for people and applications."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which authentication method is phishing-resistant?",
       "options": [
        "SMS one-time code sent to the user's registered mobile number",
        "Authenticator app code",
        "Security questions",
        "FIDO2 security key"
       ],
       "answer": 3,
       "explain": "FIDO2 binds authentication to the real site, so codes cannot be relayed."
      },
      {
       "q": "What does just-in-time access reduce?",
       "options": [
        "The number of users in the organisation",
        "The need for logging",
        "Standing privilege",
        "Encryption overhead"
       ],
       "answer": 2,
       "explain": "Privilege exists only when needed, shrinking the window for misuse."
      },
      {
       "q": "Why should administrators use separate admin accounts?",
       "options": [
        "So privileged credentials are not exposed through email or browsing",
        "Because licensing rules require a separate account for every administrator",
        "To make passwords shorter",
        "To avoid MFA"
       ],
       "answer": 0,
       "explain": "Daily activities like email are the main route for credential theft."
      },
      {
       "q": "Which practice best reduces the risk of leaked cloud keys in code?",
       "options": [
        "Longer static keys that are rotated every five years",
        "Short-lived workload identity instead of static keys",
        "Storing keys in a shared spreadsheet",
        "Emailing keys to developers"
       ],
       "answer": 1,
       "explain": "Short-lived, federated credentials leave little for attackers to steal."
      },
      {
       "q": "Which statement about non-human identities is most accurate?",
       "options": [
        "They often outnumber human identities and lack owners",
        "They are always less privileged than human accounts",
        "They never need rotation",
        "They cannot be misused by attackers"
       ],
       "answer": 0,
       "explain": "NHIs are numerous, often over-privileged and poorly owned."
      }
     ]
    }
   ]
  },
  {
   "id": "m4-l3",
   "title": "Data Governance, Classification and Loss Prevention",
   "subtitle": "Knowing what data you have, where it lives and who may use it",
   "minutes": 30,
   "objectives": [
    "Establish data ownership and a practical classification scheme",
    "Apply controls proportionate to classification across the data lifecycle",
    "Use discovery, DLP and data security posture tools without drowning in alerts"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "You cannot protect data you cannot find. Most organisations hold copies of customer, employee and financial data in far more places than they realise: shared drives, SaaS apps, analytics platforms, test environments, email and now AI tools. **Data governance** sets ownership, rules and quality expectations; **data security** applies controls proportionate to value and sensitivity throughout the data lifecycle."
    },
    {
     "type": "table",
     "head": [
      "Level",
      "Examples",
      "Minimum controls"
     ],
     "rows": [
      [
       "Public",
       "Published annual report, marketing pages",
       "Integrity controls on publication"
      ],
      [
       "Internal",
       "Policies, internal memos, staff directory",
       "Access limited to staff; no public sharing"
      ],
      [
       "Confidential",
       "Customer records, contracts, salary data",
       "Need-to-know access, encryption, logging, DLP"
      ],
      [
       "Restricted",
       "Card data, health records, national ID scans, encryption keys, board papers before release",
       "Named access, strong encryption, monitoring, no external sharing without approval"
      ]
     ],
     "title": "A four-level classification scheme"
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Four levels are enough for most organisations. More levels confuse staff and produce inconsistent labels. Pair the scheme with default labels for common repositories so that people only classify by exception.",
     "title": "Keep the scheme small"
    },
    {
     "type": "flow",
     "title": "Data lifecycle controls",
     "items": [
      {
       "label": "Create or collect",
       "text": "Collect only what is needed; label at creation"
      },
      {
       "label": "Store",
       "text": "Encrypt; restrict access by classification"
      },
      {
       "label": "Use",
       "text": "Monitor access; mask in non-production"
      },
      {
       "label": "Share",
       "text": "Approved channels; DLP; contracts with recipients"
      },
      {
       "label": "Archive",
       "text": "Retention schedule; protected archives"
      },
      {
       "label": "Destroy",
       "text": "Secure deletion with evidence"
      }
     ]
    },
    {
     "type": "compare",
     "title": "Data discovery and protection tools",
     "columns": [
      {
       "title": "Data discovery and classification",
       "items": [
        "Scan repositories for sensitive patterns",
        "Apply or suggest labels",
        "Feeds inventory and risk"
       ]
      },
      {
       "title": "Data loss prevention (DLP)",
       "items": [
        "Inspect data in motion and in use",
        "Block, warn or log risky transfers",
        "Needs tuning to avoid alert floods"
       ]
      },
      {
       "title": "Data security posture management",
       "items": [
        "Maps sensitive data across cloud stores",
        "Highlights exposure, excess access, shadow copies",
        "Fits cloud-heavy estates"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Staff pasting customer records or source code into public AI chat tools is now one of the commonest forms of accidental disclosure. Provide approved AI tools with enterprise data controls, state clearly which classifications may be used with them, and monitor uploads to unapproved services.",
     "title": "Generative AI tools and data leakage"
    },
    {
     "type": "scenario",
     "title": "DLP alert flood",
     "situation": "An MFS provider deployed DLP across email and endpoints. In the first month it produced 48,000 alerts, mostly false positives from staff sending their own national ID numbers to HR. The SOC has stopped reading them. What should the data protection lead do?",
     "options": [
      {
       "text": "Switch every policy to blocking so alerts no longer need review.",
       "feedback": "Blocking noisy policies will break legitimate work and cause a backlash.",
       "best": false
      },
      {
       "text": "Turn DLP off because it does not work.",
       "feedback": "The tool can work once scoped and tuned; switching it off loses visibility.",
       "best": false
      },
      {
       "text": "Hire more SOC analysts to read every alert.",
       "feedback": "Reviewing poorly tuned alerts wastes people and morale.",
       "best": false
      },
      {
       "text": "Start in monitor mode for tuned, high-value policies, such as bulk customer data leaving to personal email, exempt known business flows, and add blocking only once precision is acceptable.",
       "feedback": "Best. Focusing on the highest-risk patterns and tuning before blocking turns DLP into a useful control.",
       "best": true
      }
     ]
    },
    {
     "type": "template",
     "title": "Data inventory entry",
     "purpose": "Record where important data lives, who owns it and how it is protected.",
     "columns": [
      "Data set",
      "Owner",
      "Classification",
      "Locations",
      "Retention",
      "Key controls",
      "Gaps"
     ],
     "example": [
      [
       "Customer KYC records",
       "Head of compliance",
       "Restricted",
       "Core system, document store, two SaaS tools",
       "5 years after account closure",
       "Encryption, role-based access, DLP on email",
       "Copies in test environment unmasked"
      ]
     ],
     "rows": 8
    },
    {
     "type": "reflection",
     "prompt": "Where is the most sensitive data in your organisation that nobody has formally classified? How would you find out?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Data governance",
       "def": "The framework of ownership, policies and standards that ensures data is managed as an asset."
      },
      {
       "term": "Data owner",
       "def": "The accountable person who decides classification, access and retention for a data set."
      },
      {
       "term": "Data custodian",
       "def": "The person or team that operates systems storing data and applies controls set by the owner."
      },
      {
       "term": "Data classification",
       "def": "Assigning data to sensitivity levels that determine minimum protection requirements."
      },
      {
       "term": "Data loss prevention",
       "def": "Technology and processes that detect and prevent unauthorised transfer of sensitive data."
      },
      {
       "term": "Data masking",
       "def": "Replacing sensitive values with realistic but fictitious data, for example in test environments."
      },
      {
       "term": "Retention schedule",
       "def": "Rules stating how long each type of data is kept and when it must be destroyed."
      },
      {
       "term": "DSPM",
       "def": "Data security posture management: tools that find sensitive data across cloud stores and assess its exposure."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Who should decide the classification of a customer data set?",
       "options": [
        "The data custodian, because it runs the database platform day to day",
        "Any employee who uses it",
        "The data owner",
        "The external auditor"
       ],
       "answer": 2,
       "explain": "Owners are accountable for classification and access decisions; custodians apply controls."
      },
      {
       "q": "What is the main purpose of data masking in test environments?",
       "options": [
        "To speed up database queries",
        "To let testing proceed without exposing real personal data",
        "To compress data for storage",
        "To satisfy the cloud provider"
       ],
       "answer": 1,
       "explain": "Masking replaces sensitive values so test copies are not a breach risk."
      },
      {
       "q": "A DLP deployment produces mostly false positives. What is the best next step?",
       "options": [
        "Switch every rule to blocking mode so that alerts no longer reach analysts",
        "Uninstall it",
        "Ignore the alerts",
        "Tune to high-value policies in monitor mode before blocking"
       ],
       "answer": 3,
       "explain": "Scoping and tuning make DLP precise enough to enforce."
      },
      {
       "q": "Why is a short classification scheme preferred?",
       "options": [
        "It satisfies every regulation automatically without any extra controls",
        "It removes the need for encryption",
        "Staff can apply it consistently",
        "It is required by all standards"
       ],
       "answer": 2,
       "explain": "Simplicity drives consistent labelling and practical controls."
      },
      {
       "q": "Which lifecycle stage includes secure deletion with evidence?",
       "options": [
        "Archive",
        "Destroy",
        "Share",
        "Collect"
       ],
       "answer": 1,
       "explain": "Destruction should be secure and evidenced, in line with retention schedules."
      }
     ]
    }
   ]
  },
  {
   "id": "m4-l4",
   "title": "Cryptography and Key Management Governance",
   "subtitle": "Encryption is easy to switch on and hard to govern well",
   "minutes": 35,
   "objectives": [
    "Set encryption standards for data at rest, in transit and in use",
    "Govern key management, including key ownership, custody and rotation",
    "Plan crypto-agility and the migration to post-quantum cryptography"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Encryption is only as strong as the management of its keys. Organisations commonly encrypt databases but store keys on the same server, use certificates that expire unexpectedly and take down services, or cannot say which systems still use outdated algorithms. **Cryptography governance** sets standards, ownership and lifecycle processes for algorithms, keys and certificates."
    },
    {
     "type": "table",
     "head": [
      "State",
      "Typical controls",
      "Governance question"
     ],
     "rows": [
      [
       "Data in transit",
       "TLS 1.2 or 1.3, mutual TLS for services, VPN or private links",
       "Are weak protocols disabled everywhere, including internal traffic?"
      ],
      [
       "Data at rest",
       "Disk, database and object encryption; field-level encryption for sensitive values",
       "Who controls the keys, and are they separate from the data?"
      ],
      [
       "Data in use",
       "Confidential computing, tokenisation, masking",
       "Is the extra protection justified by the threat and cost?"
      ]
     ],
     "title": "Where encryption applies"
    },
    {
     "type": "layers",
     "title": "A key management hierarchy",
     "items": [
      {
       "label": "Root of trust",
       "parts": [
        "Hardware security module (HSM)",
        "Master keys never leave the hardware"
       ]
      },
      {
       "label": "Key encryption keys",
       "parts": [
        "Protect data keys",
        "Rotated on a set schedule"
       ]
      },
      {
       "label": "Data encryption keys",
       "parts": [
        "Encrypt the actual data",
        "Many per system; can be rotated by re-wrapping"
       ]
      },
      {
       "label": "Applications and services",
       "parts": [
        "Request keys through a key management service",
        "Access controlled and logged"
       ]
      }
     ]
    },
    {
     "type": "compare",
     "title": "Who holds the keys in cloud?",
     "columns": [
      {
       "title": "Provider-managed keys",
       "items": [
        "Simplest; provider creates and rotates",
        "Least customer control",
        "Fine for lower-sensitivity data"
       ]
      },
      {
       "title": "Customer-managed keys (BYOK)",
       "items": [
        "Customer controls key policy and rotation in the provider's KMS",
        "Can revoke to make data unreadable",
        "Common for regulated data"
       ]
      },
      {
       "title": "Hold your own key (HYOK) or external key manager",
       "items": [
        "Keys stay outside the provider",
        "Strongest control and sovereignty",
        "More complexity, latency and outage risk"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "A sufficiently large quantum computer could break widely used public-key algorithms such as RSA and elliptic-curve cryptography. In 2024 NIST published its first post-quantum standards, for key establishment (ML-KEM) and digital signatures (ML-DSA and SLH-DSA). Attackers can **harvest now and decrypt later**, so long-lived sensitive data is already at risk. The first step is not buying products; it is building a cryptographic inventory and making systems crypto-agile.",
     "title": "Post-quantum cryptography is a governance programme"
    },
    {
     "type": "steps",
     "title": "Preparing for post-quantum migration",
     "items": [
      {
       "title": "Inventory",
       "text": "Find where public-key cryptography is used: protocols, certificates, code libraries, devices, suppliers."
      },
      {
       "title": "Prioritise",
       "text": "Rank by data lifetime and exposure: data that must stay secret for ten years or more comes first."
      },
      {
       "title": "Engage suppliers",
       "text": "Ask vendors for post-quantum roadmaps and include requirements in contracts."
      },
      {
       "title": "Build crypto-agility",
       "text": "Centralise crypto libraries and configuration so algorithms can be swapped without rewriting systems."
      },
      {
       "title": "Pilot hybrid modes",
       "text": "Test combined classical and post-quantum key exchange where supported."
      },
      {
       "title": "Migrate and verify",
       "text": "Phase migration by priority; verify with scanning and testing."
      }
     ]
    },
    {
     "type": "template",
     "title": "Cryptographic inventory",
     "purpose": "Record where cryptography is used so that weak algorithms, expiring certificates and post-quantum priorities can be managed.",
     "columns": [
      "System",
      "Use",
      "Algorithm and key size",
      "Key or certificate owner",
      "Expiry or rotation",
      "Data secrecy lifetime",
      "Migration priority"
     ],
     "example": [
      [
       "Payment API gateway",
       "TLS server certificate",
       "ECDSA P-256",
       "Platform team",
       "Expires 14 March",
       "Low (session data)",
       "Medium"
      ],
      [
       "Archive of signed land records",
       "Document signing",
       "RSA 2048",
       "Registry IT",
       "Key rotated every 3 years",
       "Decades",
       "High"
      ]
     ],
     "rows": 8
    },
    {
     "type": "scenario",
     "title": "Certificate outage",
     "situation": "A national e-commerce platform suffers a four-hour outage on its busiest sale day because a TLS certificate on an internal API gateway expired. Nobody knew who owned it. What is the BEST long-term fix?",
     "options": [
      {
       "text": "Buy certificates with the longest available validity.",
       "feedback": "Longer validity delays the problem and is increasingly limited by browser and industry rules.",
       "best": false
      },
      {
       "text": "Build a certificate inventory with owners, automate issuance and renewal, and alert well before expiry.",
       "feedback": "Best. It addresses the root causes: no inventory, no owner and manual renewal.",
       "best": true
      },
      {
       "text": "Ask the network team to check certificates monthly by hand.",
       "feedback": "Manual checks do not scale and will fail again.",
       "best": false
      },
      {
       "text": "Disable certificate validation on internal APIs.",
       "feedback": "This removes protection against interception and impersonation.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Which data in your organisation must remain confidential for more than ten years? Which systems protect it, and what cryptography do they use?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Key management",
       "def": "The governance and processes for generating, storing, distributing, rotating and destroying cryptographic keys."
      },
      {
       "term": "Hardware security module",
       "def": "A tamper-resistant device that generates and protects keys and performs cryptographic operations."
      },
      {
       "term": "Envelope encryption",
       "def": "Encrypting data with a data key and then encrypting that key with a key encryption key."
      },
      {
       "term": "BYOK",
       "def": "Bring your own key: the customer controls encryption keys used by a cloud service through the provider's key service."
      },
      {
       "term": "Crypto-agility",
       "def": "The ability to change algorithms and keys quickly without redesigning systems."
      },
      {
       "term": "Post-quantum cryptography",
       "def": "Algorithms designed to resist attack by quantum computers, such as those standardised by NIST in 2024."
      },
      {
       "term": "Harvest now, decrypt later",
       "def": "Collecting encrypted data today to decrypt it once more powerful computing becomes available."
      },
      {
       "term": "Tokenisation",
       "def": "Replacing a sensitive value with a non-sensitive token that maps back to it only in a secured vault."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "What is the main weakness of storing a database encryption key on the same server as the data?",
       "options": [
        "Anyone who compromises the server gets both data and key",
        "Encryption becomes slower than without a key on the server",
        "The key will expire sooner",
        "Backups become larger"
       ],
       "answer": 0,
       "explain": "Separating keys from data is fundamental; co-location defeats much of the benefit."
      },
      {
       "q": "Which key option gives a customer the most control over cloud data?",
       "options": [
        "Provider-managed keys created and rotated automatically by the cloud service",
        "No encryption",
        "Shared keys between tenants",
        "Hold your own key in an external key manager"
       ],
       "answer": 3,
       "explain": "Keeping keys outside the provider gives the strongest control, with extra complexity."
      },
      {
       "q": "Why should post-quantum planning start now?",
       "options": [
        "Quantum computers already break all symmetric encryption used today in practice",
        "Encrypted data harvested today may be decrypted later",
        "Regulators ban RSA from next month",
        "It is cheaper to wait"
       ],
       "answer": 1,
       "explain": "Long-lived secrets are exposed to harvest-now, decrypt-later attacks."
      },
      {
       "q": "What is the first practical step towards post-quantum migration?",
       "options": [
        "Replacing every algorithm in production immediately with experimental alternatives",
        "Turning off TLS",
        "Buying a quantum computer",
        "A cryptographic inventory"
       ],
       "answer": 3,
       "explain": "You must know where cryptography is used before prioritising migration."
      },
      {
       "q": "Which approach best prevents outages from expired certificates?",
       "options": [
        "Buying certificates with the longest possible validity and checking them once a year",
        "Disabling validation",
        "Automated issuance and renewal with an owned inventory",
        "Using self-signed certificates everywhere"
       ],
       "answer": 2,
       "explain": "Automation and ownership address the root cause."
      }
     ]
    }
   ]
  },
  {
   "id": "m4-l5",
   "title": "Privacy Engineering and Data Protection",
   "subtitle": "Respecting people's data rights by design, across borders",
   "minutes": 35,
   "objectives": [
    "Apply core data protection principles and lawful bases to processing",
    "Run a data protection impact assessment and embed privacy by design",
    "Manage data subject rights, breach notification and cross-border transfers"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Security protects data from unauthorised access. **Privacy** asks whether the organisation should collect and use the data at all, for what purpose, for how long and with what transparency to the person concerned. Data protection laws around the world, including the EU General Data Protection Regulation (GDPR), India's Digital Personal Data Protection Act 2023 and Bangladesh's newer personal data protection rules, share a common core even though details and penalties differ."
    },
    {
     "type": "framework",
     "title": "Common data protection principles",
     "items": [
      {
       "label": "D1",
       "title": "Lawfulness and transparency",
       "text": "Have a valid legal basis and tell people clearly what you do with their data."
      },
      {
       "label": "D2",
       "title": "Purpose limitation",
       "text": "Use data only for the purposes stated when it was collected."
      },
      {
       "label": "D3",
       "title": "Data minimisation",
       "text": "Collect only what is needed for the purpose."
      },
      {
       "label": "D4",
       "title": "Accuracy",
       "text": "Keep data correct and up to date."
      },
      {
       "label": "D5",
       "title": "Storage limitation",
       "text": "Keep data no longer than necessary."
      },
      {
       "label": "D6",
       "title": "Integrity and confidentiality",
       "text": "Protect data with appropriate security."
      },
      {
       "label": "D7",
       "title": "Accountability",
       "text": "Be able to demonstrate compliance with evidence."
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Basis",
      "Example",
      "Caution"
     ],
     "rows": [
      [
       "Consent",
       "Marketing messages to app users",
       "Must be free, specific, informed and as easy to withdraw as to give"
      ],
      [
       "Contract",
       "Processing a delivery address to ship an order",
       "Only what is necessary for the contract"
      ],
      [
       "Legal obligation",
       "Keeping KYC records for anti-money-laundering rules",
       "Point to the specific law"
      ],
      [
       "Vital interests",
       "Sharing a patient's details in an emergency",
       "Narrow; life-or-death situations"
      ],
      [
       "Public task",
       "A government agency issuing identity documents",
       "Applies to public functions"
      ],
      [
       "Legitimate interests",
       "Fraud detection on payments",
       "Balance against the person's rights; not available in every law"
      ]
     ],
     "title": "Typical lawful bases for processing"
    },
    {
     "type": "steps",
     "title": "Data protection impact assessment (DPIA)",
     "items": [
      {
       "title": "Screen",
       "text": "Is the processing likely to be high-risk: large scale, sensitive data, monitoring, new technology, profiling?"
      },
      {
       "title": "Describe",
       "text": "Data, purposes, flows, recipients, retention and systems."
      },
      {
       "title": "Assess necessity",
       "text": "Is the processing proportionate to the purpose? Could less data achieve it?"
      },
      {
       "title": "Identify risks to people",
       "text": "Discrimination, financial loss, identity theft, loss of control, chilling effects."
      },
      {
       "title": "Plan measures",
       "text": "Minimisation, pseudonymisation, access limits, transparency, opt-outs."
      },
      {
       "title": "Sign off and review",
       "text": "Data protection officer advice, owner approval, review on change."
      }
     ]
    },
    {
     "type": "template",
     "title": "DPIA summary",
     "purpose": "Summarise a high-risk processing activity, its risks to individuals and agreed measures.",
     "columns": [
      "Processing activity",
      "Personal data",
      "Risk to individuals",
      "Likelihood and severity",
      "Measures",
      "Residual risk",
      "Approved by"
     ],
     "example": [
      [
       "Credit scoring from mobile wallet transactions",
       "Transaction history, location, contacts metadata",
       "Unfair refusal of credit; sensitive inferences",
       "Medium likelihood, high severity",
       "Exclude contacts; explainable model; human review of refusals; opt-out",
       "Medium",
       "Chief Risk Officer after DPO review"
      ]
     ],
     "rows": 6
    },
    {
     "type": "flow",
     "title": "Breach response for personal data",
     "items": [
      {
       "label": "Detect and contain",
       "text": "Stop the leak and preserve evidence"
      },
      {
       "label": "Assess",
       "text": "Which data, how many people, likely harm"
      },
      {
       "label": "Decide notifications",
       "text": "Regulator, affected people, partners, by legal deadlines"
      },
      {
       "label": "Notify",
       "text": "Clear, honest messages with advice for those affected"
      },
      {
       "label": "Remediate and learn",
       "text": "Fix causes; update DPIA and controls"
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "Under GDPR, notifiable personal data breaches must generally be reported to the supervisory authority within **72 hours** of becoming aware. Sector regulators, such as central banks and telecom regulators, often set their own, sometimes shorter, incident reporting timelines. A multinational may face several clocks at once, so map them before an incident.",
     "title": "Deadlines differ"
    },
    {
     "type": "scenario",
     "title": "A new analytics idea",
     "situation": "A Bangladeshi MFS provider's growth team wants to use customers' transaction histories and phone contact lists to build a 'social credit' score sold to partner lenders. The data protection officer has not been consulted. What should the CISO and privacy lead insist on FIRST?",
     "options": [
      {
       "text": "Encrypt the data set before giving it to the growth team.",
       "feedback": "Encryption protects confidentiality but does not answer whether the processing is lawful or fair.",
       "best": false
      },
      {
       "text": "Let the project proceed and add a line to the privacy notice later.",
       "feedback": "Retrospective transparency does not make unfair or unlawful processing acceptable.",
       "best": false
      },
      {
       "text": "A DPIA that tests necessity, lawful basis, transparency and risks to customers before any data is processed or shared.",
       "feedback": "Best. This is high-risk profiling with onward sharing; the DPIA is the right gate to decide whether and how it can proceed.",
       "best": true
      },
      {
       "text": "Ban all analytics on customer data.",
       "feedback": "A blanket ban blocks legitimate, lawful uses; the issue is this specific high-risk design.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Pick one product or service your organisation runs. If a customer asked 'what data do you hold about me and why?', how long would it take to answer accurately?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Personal data",
       "def": "Any information relating to an identified or identifiable living person."
      },
      {
       "term": "Sensitive personal data",
       "def": "Categories such as health, biometrics, religion or financial details that need extra protection under many laws."
      },
      {
       "term": "Lawful basis",
       "def": "The legal ground, such as consent or contract, that permits processing of personal data."
      },
      {
       "term": "Purpose limitation",
       "def": "The principle that data collected for one purpose should not be reused for incompatible purposes."
      },
      {
       "term": "DPIA",
       "def": "Data protection impact assessment: a structured assessment of risks to individuals from high-risk processing."
      },
      {
       "term": "Privacy by design",
       "def": "Building privacy protections into systems and processes from the start rather than adding them later."
      },
      {
       "term": "Data protection officer",
       "def": "A role that advises on and monitors compliance with data protection law within an organisation."
      },
      {
       "term": "Pseudonymisation",
       "def": "Processing data so it cannot be linked to a person without separately held additional information."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which principle is breached when a retailer keeps every customer's data forever 'just in case'?",
       "options": [
        "Storage limitation",
        "Accuracy",
        "Lawfulness and transparency",
        "Integrity and confidentiality"
       ],
       "answer": 0,
       "explain": "Data should not be kept longer than necessary for its purpose."
      },
      {
       "q": "When should a DPIA be carried out?",
       "options": [
        "After a breach has occurred and the regulator has asked for one",
        "Before high-risk processing begins",
        "Only when customers complain",
        "Once every ten years"
       ],
       "answer": 1,
       "explain": "DPIAs are preventive and should shape the design."
      },
      {
       "q": "Which statement about consent is correct?",
       "options": [
        "It can be assumed if a customer does not object within thirty days of a notice",
        "It is the only lawful basis",
        "It must be as easy to withdraw as to give",
        "It never expires"
       ],
       "answer": 2,
       "explain": "Valid consent is freely given, specific, informed and withdrawable."
      },
      {
       "q": "Under GDPR, the general deadline to notify the supervisory authority of a notifiable breach is:",
       "options": [
        "72 hours after becoming aware",
        "30 days after the breach is fully investigated and closed",
        "24 hours after the breach occurred",
        "There is no deadline"
       ],
       "answer": 0,
       "explain": "The 72-hour clock starts when the controller becomes aware of the breach."
      },
      {
       "q": "Which technique reduces privacy risk while keeping data useful for analysis?",
       "options": [
        "Copying the full data set into a spreadsheet for every analyst",
        "Removing encryption",
        "Extending retention",
        "Pseudonymisation"
       ],
       "answer": 3,
       "explain": "Pseudonymised data limits linkage to individuals without separate information."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.exam.push([
 {
  "module": "m1",
  "q": "At a hospital group, the CIO tells the board that cyber risk is 'under control' because 95% of laptops have endpoint protection. The board's risk committee wants a meaningful view of cyber risk. What should the CISO propose FIRST?",
  "options": [
   "Quarterly reporting of top risks to clinical services, with owners and appetite status",
   "A monthly dashboard showing every security tool's coverage percentage across all sites and device types",
   "An annual penetration test summary presented directly to the board by the testing vendor",
   "A comparison of the security budget against published industry spending benchmarks"
  ],
  "answer": 0,
  "explain": "Boards need risk expressed against business services and appetite, with owners. Tool coverage, test reports and benchmarks are inputs, not a governance view of risk."
 },
 {
  "module": "m1",
  "q": "A telecom operator's internal audit team has been asked to design and run the new access-review process because 'they understand controls best'. What is the main governance concern?",
  "options": [
   "Audit staff usually lack the technical skills needed to run access reviews on network equipment",
   "Audit would later assess a control it designed and runs",
   "Access reviews must always be run personally by the CISO",
   "The regulator forbids internal audit from ever reviewing access controls"
  ],
  "answer": 1,
  "explain": "The third line must stay independent of the controls it assures. Skills and regulatory claims are not the core issue."
 },
 {
  "module": "m1",
  "q": "A regional power distribution company wants one framework to explain its security programme in plain outcome language to the board and the regulator, with current and target states. Which is the BEST fit?",
  "options": [
   "CIS Controls implementation group 3 safeguards for every system",
   "ISO/IEC 27001 Annex A technological controls only",
   "COBIT capability assessments of every IT process in the company",
   "NIST CSF 2.0 profiles with chosen target tiers"
  ],
  "answer": 3,
  "explain": "CSF profiles describe outcomes in plain language and support current-to-target planning. The other choices are useful but are either too technical or too broad for this purpose."
 },
 {
  "module": "m1",
  "q": "During ISO/IEC 27001 preparation, a consultant offers a complete set of risk assessments and an SoA copied from another client in the same industry. What is the BEST response?",
  "options": [
   "Adopt them as they are, since the industry, regulators and threat actors are the same",
   "Adopt them but ask the certification auditor to waive the evidence requirements",
   "Use them as reference only and run the organisation's own risk assessment",
   "Reject Annex A entirely and use the consultant's control list instead"
  ],
  "answer": 2,
  "explain": "The SoA must reflect the organisation's own risks and decisions. Copied assessments are a common audit failure; Annex A remains the comparison list."
 },
 {
  "module": "m1",
  "q": "A fintech has 300 staff, a small IT team and no security specialists. Ransomware attempts are rising. The CEO asks which technical safeguards to implement first. What should the security lead recommend?",
  "options": [
   "CIS Controls IG1 safeguards: inventory, MFA, patching, recoverable backups",
   "Start an ISO/IEC 27001 certification project covering the entire company and all its suppliers",
   "Assess every COBIT objective to capability level 3 before buying anything",
   "Build a 24x7 internal security operations centre"
  ],
  "answer": 0,
  "explain": "IG1 targets essential hygiene for organisations with limited resources and directly addresses common ransomware entry points. The others are larger, slower or unaffordable."
 },
 {
  "module": "m1",
  "q": "A university's information security policy is 46 pages long, mixes board principles with firewall port rules and has not been approved since 2019. What is the BEST improvement?",
  "options": [
   "Add a new chapter on cloud security and send the whole document for board re-approval",
   "Publish it on the intranet with a mandatory read receipt for all staff",
   "Replace it with the ISO/IEC 27002 control text",
   "A short approved policy, with technical rules moved into owned standards"
  ],
  "answer": 3,
  "explain": "A layered architecture keeps the policy stable and lets detailed standards change through their owners. Adding chapters or read receipts keeps the structural problem; copying standard text does not fit the organisation."
 },
 {
  "module": "m1",
  "q": "An MFS provider's security team approves policy exceptions itself and none has an expiry date. Two years later there are 210 open exceptions. Which change addresses the root cause?",
  "options": [
   "Have the security team carefully re-review all 210 open exceptions before the next audit",
   "Ban all exceptions to the policy in the future",
   "Risk-owner approval at set thresholds, expiry dates and ageing reports",
   "Move the exception list into a new GRC tool with better dashboards"
  ],
  "answer": 2,
  "explain": "The root cause is the wrong approver and no time limit. Re-reviewing, banning or moving the list does not change who accepts risk or for how long."
 },
 {
  "module": "m1",
  "q": "A bank must comply with central-bank ICT guidance, PCI DSS and ISO/IEC 27001, and receives customer questionnaires. Each compliance team tests the same firewall review separately. What should the GRC lead implement?",
  "options": [
   "A separate compliance team for every framework, each with its own calendar and evidence store",
   "A unified control framework with evidence collected once",
   "An outsourced audit of each framework every quarter",
   "A policy that customer questionnaires will no longer be answered"
  ],
  "answer": 1,
  "explain": "A UCF removes duplicate testing while keeping every obligation covered. The other options either keep duplication or ignore obligations."
 },
 {
  "module": "m2",
  "q": "An insurer's CISO presents a 5x5 heat map with two risks in the same red cell. One could cost BDT 80 lakh, the other BDT 60 crore. The CFO asks why they look equal. What is the BEST explanation and next step?",
  "options": [
   "The heat map is correct because both risks have the same likelihood score assigned by the workshop",
   "Add a sixth impact level to the matrix for very large losses",
   "Ordinal scoring compresses ranges; quantify both as money ranges",
   "Average the two impacts and show one combined risk"
  ],
  "answer": 2,
  "explain": "Range compression puts very different losses in the same cell. Quantifying in money resolves it; adding levels or averaging hides the difference."
 },
 {
  "module": "m2",
  "q": "The board of an MFS provider approves 'low appetite for payment disruption'. Operations asks how it will know when appetite is close to being breached. What should be defined next?",
  "options": [
   "Measurable tolerances and key risk indicators linked to them",
   "A longer appetite statement covering every system in the company in detail",
   "A new insurance policy with higher limits",
   "An annual penetration test"
  ],
  "answer": 0,
  "explain": "Tolerances turn appetite into measurable limits and KRIs warn before they are breached. The other actions do not make appetite measurable."
 },
 {
  "module": "m2",
  "q": "A risk owner wants to accept a risk that sits outside the board's appetite because the fix is expensive. What should happen?",
  "options": [
   "Allow the risk owner to accept it, as the owner understands the business best and holds the budget",
   "Record it as accepted and inform the board next year",
   "Transfer it by buying insurance with no further discussion",
   "Escalate to the board or its risk committee for decision"
  ],
  "answer": 3,
  "explain": "Risks outside appetite need acceptance at the level that set the appetite. Owner-level acceptance, delayed disclosure or insurance alone undermine governance."
 },
 {
  "module": "m2",
  "q": "In a FAIR-style analysis, threat event frequency is 20 per year and susceptibility is 5%. Primary loss per event is BDT 4 crore and there is a 25% chance of a BDT 8 crore secondary loss. What is the expected annual loss?",
  "options": [
   "BDT 4 crore",
   "BDT 6 crore",
   "BDT 12 crore",
   "BDT 24 crore"
  ],
  "answer": 1,
  "explain": "LEF = 20 × 0.05 = 1 event per year. LM = 4 + (0.25 × 8) = 6 crore. Expected loss = 1 × 6 = BDT 6 crore."
 },
 {
  "module": "m2",
  "q": "A workshop participant gives a 90% confidence range of 'exactly 3 incidents' for next year. What should the facilitator do?",
  "options": [
   "Accept the estimate, because precise numbers make the model easier to explain to the board",
   "Replace it with the industry average without discussion",
   "Ask for a range wide enough to be right about 90% of the time",
   "Exclude the participant from future workshops"
  ],
  "answer": 2,
  "explain": "A single number expresses false certainty. Calibration asks for honest ranges; replacing or excluding inputs loses knowledge."
 },
 {
  "module": "m2",
  "q": "A Monte Carlo shows mean annual cyber loss of BDT 5 crore but a 1-in-20 loss of BDT 45 crore. The board tolerance is BDT 30 crore at 1-in-20. What is the correct conclusion?",
  "options": [
   "Risk is within appetite because the mean is well below BDT 30 crore",
   "Risk is outside tolerance even though the mean looks manageable",
   "The simulation should be rerun until the tail falls below BDT 30 crore",
   "Tail results should be ignored because they are rare"
  ],
  "answer": 1,
  "explain": "Tolerance was set on the tail, and the 95th percentile exceeds it. The mean does not answer the board's question."
 },
 {
  "module": "m2",
  "q": "Two controls each reduce expected loss by BDT 4 crore when assessed alone. The team reports that together they will save BDT 8 crore. What is the main flaw?",
  "options": [
   "Savings must always be multiplied, not added, so the true combined figure is BDT 16 crore",
   "ROSI cannot be calculated for two controls",
   "Savings should be reported only as percentages",
   "Overlapping controls rarely give additive savings"
  ],
  "answer": 3,
  "explain": "Controls often affect the same events, so combined savings are less than the sum. Simulating the combination gives the realistic figure."
 },
 {
  "module": "m3",
  "q": "A bank's architecture review board is a bottleneck, and teams are bypassing it. Most requests are for common designs such as internal web apps. What is the BEST way to restore governance without slowing delivery?",
  "options": [
   "Approved reference patterns with self-certification for conforming designs",
   "Require every team to attend the monthly board in person with a full design pack, however simple the change",
   "Replace reviews with a penetration test before go-live",
   "Allow each team's lead developer to approve designs"
  ],
  "answer": 0,
  "explain": "Patterns scale secure design and focus experts on deviations. Heavier process, late testing or self-approval weaken governance."
 },
 {
  "module": "m3",
  "q": "A power company starting zero trust has a flat network and VPN access to everything for staff and contractors. Which step reduces implicit trust MOST in the first phase?",
  "options": [
   "Replace all firewalls with new devices marketed as zero trust and keep the existing access rules",
   "Micro-segment every workload in one release",
   "Wait for legacy systems to be retired",
   "Per-application access with phishing-resistant MFA for admins and contractors"
  ],
  "answer": 3,
  "explain": "Brokered per-application access with strong identity removes the broadest trust for the riskiest users. Product swaps, big-bang segmentation or waiting do not."
 },
 {
  "module": "m3",
  "q": "Ransomware at a logistics company spread from one laptop to every server within hours. Leadership asks for an architectural fix. Which proposal BEST limits the blast radius?",
  "options": [
   "Buy more antivirus licences so that every server and laptop runs two separate products",
   "Increase password length to 20 characters",
   "Segment critical zones, starting from real flow data in monitor mode",
   "Block internet access for all staff"
  ],
  "answer": 2,
  "explain": "Segmentation based on observed flows stops lateral movement without breaking operations. More antivirus, longer passwords or blocking the internet do not address spread."
 },
 {
  "module": "m3",
  "q": "An e-commerce firm learns that customers can view others' orders by changing a number in an API call. Beyond fixing the bug, what governance change addresses the root cause?",
  "options": [
   "Ask the developer who wrote the API to be more careful in future and sign a declaration",
   "An API inventory, threat modelling and API authorisation testing before release",
   "Move the API to a different cloud provider",
   "Hide order numbers in the user interface"
  ],
  "answer": 1,
  "explain": "The failure was missing design and testing for authorisation. Personal promises, hosting moves or UI changes leave the process gap."
 },
 {
  "module": "m3",
  "q": "A hospital moves email to a SaaS platform. The CIO says 'the provider is now responsible for our email security'. Which responsibility stays with the hospital?",
  "options": [
   "Managing identities, access and data sharing settings",
   "Patching the servers that run the provider's mail service in its data centres",
   "Physical security of the provider's buildings",
   "Maintaining the provider's network hardware"
  ],
  "answer": 0,
  "explain": "In SaaS, customers keep responsibility for identities, access and how data is shared; the provider runs infrastructure and application."
 },
 {
  "module": "m3",
  "q": "Cloud teams at a telecom keep creating public storage buckets that are later found by researchers. Detective alerts are ignored. What is the MOST effective control?",
  "options": [
   "Send the weekly misconfiguration report to a larger distribution list including senior managers",
   "An organisation-level preventive guardrail blocking public buckets, with an exception route",
   "Train cloud engineers once a year",
   "Ask the provider to monitor the buckets"
  ],
  "answer": 1,
  "explain": "Preventive guardrails stop the risky configuration at source. Wider reports, annual training or provider monitoring leave the action possible."
 },
 {
  "module": "m3",
  "q": "A textile mill's PLC network is directly reachable from the corporate network so the ERP can read production counts. What should the security architect recommend?",
  "options": [
   "Install the corporate endpoint agent on every PLC and controller so they are monitored like laptops",
   "Allow the connection but change the PLC passwords monthly",
   "Disconnect the ERP from production data permanently",
   "An industrial DMZ that brokers production data so no traffic crosses directly"
  ],
  "answer": 3,
  "explain": "An industrial DMZ preserves the business need while removing direct IT-to-OT paths. PLCs rarely support IT agents; password changes do not remove the path; disconnection removes business value."
 },
 {
  "module": "m3",
  "q": "A hospital's new imaging-device vendor requests permanent VPN access to the clinical network. What is the BEST response?",
  "options": [
   "Brokered, approved and recorded access to the device's segment only, under contract",
   "Grant the VPN because the vendor holds a security certification and has many hospital customers",
   "Refuse all remote support",
   "Grant access but review logs once a year"
  ],
  "answer": 0,
  "explain": "Controlled, narrow access meets the need while limiting risk. Certifications do not restrict access; outright refusal can endanger support; annual reviews are too late."
 },
 {
  "module": "m4",
  "q": "An audit at a bank finds that a branch manager promoted to head-office treasury two years ago can still approve branch cash transactions. Which control failure does this show MOST clearly?",
  "options": [
   "The joiner process gave the manager too little access when they first started at the branch",
   "Password complexity rules were too weak",
   "The mover process did not remove old access",
   "The leaver process failed"
  ],
  "answer": 2,
  "explain": "Retaining old access after a role change is a mover failure. The person did not leave, and passwords are unrelated."
 },
 {
  "module": "m4",
  "q": "Quarterly access reviews at an insurer show 99.7% approvals, yet audit finds dozens of inappropriate entitlements. What is the MOST effective redesign?",
  "options": [
   "Require every manager to review every entitlement in every system each month and sign a declaration",
   "Let the IAM team approve all access centrally",
   "Risk-focused reviews with plain-language entitlements, usage data and SoD flags",
   "Remove reviews and rely on audit"
  ],
  "answer": 2,
  "explain": "Context and focus enable real decisions. More volume, central IT approval or relying on audit remove ownership or worsen fatigue."
 },
 {
  "module": "m4",
  "q": "Attackers phished an MFS provider's finance staff with a fake login page that relayed authenticator-app codes in real time. Which control would have defeated this attack?",
  "options": [
   "A longer one-time code with eight digits instead of six, refreshed every thirty seconds",
   "Phishing-resistant MFA such as FIDO2 keys or passkeys",
   "SMS codes instead of app codes",
   "Quarterly phishing awareness videos"
  ],
  "answer": 1,
  "explain": "Phishing-resistant methods bind authentication to the genuine site, so relayed codes are useless. Longer codes or SMS are still relayable; training helps but does not stop the technique."
 },
 {
  "module": "m4",
  "q": "A cloud breach at a software firm began with an API key committed to a public code repository four years earlier. The key had full administrative rights. Which combination addresses the root causes?",
  "options": [
   "Rotate the leaked key and keep using static keys for all other systems as before",
   "Make the repository private",
   "Require developers to sign a secrets policy",
   "Short-lived workload credentials, secrets scanning and least-privilege roles"
  ],
  "answer": 3,
  "explain": "The causes were long-lived, over-privileged, unmanaged keys in code. Rotation, privacy settings or signatures leave those causes in place."
 },
 {
  "module": "m4",
  "q": "A hospital's staff paste patient summaries into a public AI chatbot to draft discharge letters. What is the BEST governance response?",
  "options": [
   "Provide an approved AI tool with data controls, set rules by classification and monitor uploads",
   "Block every AI-related website at the firewall and discipline any staff member found using one",
   "Ignore it because the chatbot is popular",
   "Ask the chatbot provider to delete the data"
  ],
  "answer": 0,
  "explain": "Giving a safe, approved route with clear rules and monitoring meets the need and reduces leakage. Blanket bans drive workarounds; ignoring or asking for deletion does not control future risk."
 },
 {
  "module": "m4",
  "q": "A government land registry signs digital land records that must remain trustworthy for decades. Which cryptographic action should be prioritised?",
  "options": [
   "Increase the RSA key length once and treat the matter as permanently solved",
   "Stop signing records digitally",
   "Wait for regulators to issue a deadline",
   "Inventory signing systems and plan post-quantum migration with crypto-agility"
  ],
  "answer": 3,
  "explain": "Long-lived signatures are a priority for post-quantum planning. Larger keys only delay the problem; stopping signing or waiting adds risk."
 },
 {
  "module": "m4",
  "q": "A telecom wants to use subscribers' location history for targeted advertising sold to third parties. What should happen BEFORE processing starts?",
  "options": [
   "Encrypt the location data and proceed, because encryption satisfies data protection law in full",
   "A DPIA with a confirmed lawful basis, transparency and safeguards",
   "Inform subscribers after the campaign launches",
   "Seek approval from the IT steering committee only"
  ],
  "answer": 1,
  "explain": "High-risk profiling and sharing needs a DPIA and lawful basis. Encryption alone, retrospective notice or IT approval do not meet privacy obligations."
 }
]);
