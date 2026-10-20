window.TRACK = window.TRACK || { modules: [], exam: [] };
TRACK.modules.push({
 "id": "m5",
 "order": 5,
 "code": "Extend",
 "title": "Third-Party and Supply-Chain Risk",
 "subtitle": "Govern the suppliers, software and services that extend your attack surface",
 "outcomes": [
  "Run a tiered third-party risk lifecycle with clear ownership",
  "Interpret assurance evidence and manage fourth-party and concentration risk",
  "Secure the software supply chain with SBOMs, provenance and pipeline controls",
  "Write security into contracts, plan exits and respond to supplier incidents"
 ],
 "lessons": [
  {
   "id": "m5-l1",
   "title": "The Third-Party Risk Management Lifecycle",
   "subtitle": "Your attack surface includes every supplier you trust",
   "minutes": 35,
   "objectives": [
    "Explain why third-party risk has become a board-level concern",
    "Run a tiered third-party risk lifecycle from sourcing to offboarding",
    "Assign clear ownership between procurement, business owners and security"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Modern organisations run on suppliers: cloud platforms, SaaS applications, payment processors, managed service providers, software vendors, call centres and logistics partners. Each relationship extends trust and often network or data access beyond your walls. Attackers know this. Compromising one supplier can open doors to hundreds of customers, and a single supplier outage can stop an entire sector. **Third-party risk management (TPRM)** is the discipline of knowing, assessing and controlling these dependencies."
    },
    {
     "type": "keypoints",
     "items": [
      "Supply-chain compromises have hit thousands of organisations through one trusted update or file-transfer product",
      "A faulty security software update in July 2024 crashed millions of computers worldwide, showing that a supplier failure need not be an attack",
      "Regulators in banking and critical infrastructure now hold firms accountable for outsourced services",
      "Customers judge you for a breach at your processor as if it were your own",
      "Concentration on a few cloud and software providers creates sector-wide single points of failure",
      "Under the EU's DORA, financial supervisors began designating critical ICT third-party providers for direct oversight in late 2025"
     ],
     "title": "Why boards now ask about suppliers"
    },
    {
     "type": "cycle",
     "title": "The TPRM lifecycle",
     "center": "Business owner",
     "caption": "The loop restarts at every renewal or change of scope; offboarding evidence and lessons feed the next sourcing decision. The business owner stays accountable all the way round.",
     "items": [
      {
       "label": "Plan and source",
       "text": "Define need, appetite and requirements before choosing"
      },
      {
       "label": "Tier",
       "text": "Rate inherent risk by data, access and criticality"
      },
      {
       "label": "Due diligence",
       "text": "Security, resilience, finance, legal, ESG"
      },
      {
       "label": "Contract",
       "text": "Security, audit, notification and exit terms"
      },
      {
       "label": "Monitor",
       "text": "Ongoing assurance proportional to tier"
      },
      {
       "label": "Offboard",
       "text": "Revoke access, return or destroy data"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Tier",
      "Typical profile",
      "Assurance depth",
      "Review cycle"
     ],
     "rows": [
      [
       "1 Critical",
       "Supports an important business service or holds large volumes of restricted data; hard to replace",
       "Full assessment, evidence review, on-site or virtual audit, exit plan",
       "Annual plus continuous monitoring"
      ],
      [
       "2 High",
       "Access to confidential data or internal network; moderate substitutability",
       "Questionnaire with evidence, certificate review",
       "Annual"
      ],
      [
       "3 Moderate",
       "Limited data or access; replaceable",
       "Short questionnaire, certificate check",
       "Every two years"
      ],
      [
       "4 Low",
       "No data, no access, commodity service",
       "Basic checks at onboarding",
       "On renewal"
      ]
     ],
     "title": "Tiering by inherent risk"
    },
    {
     "type": "matrix",
     "title": "Tiering suppliers by inherent risk",
     "x": "Data and system access",
     "y": "Business criticality and difficulty to replace",
     "caption": "Two questions place most suppliers: what could they expose, and what stops if they fail? Critical suppliers with little data access still need deep resilience and exit work.",
     "quadrants": [
      {
       "title": "Tier 2: critical, little data",
       "items": [
        "Payment network link",
        "Data centre facilities",
        "Focus: resilience, exit plan"
       ]
      },
      {
       "title": "Tier 1: critical with deep access",
       "items": [
        "Core ledger hosting",
        "Managed SOC provider",
        "Full assessment, continuous monitoring"
       ]
      },
      {
       "title": "Tier 4: low",
       "items": [
        "Stationery, catering",
        "Basic checks at onboarding"
       ]
      },
      {
       "title": "Tier 2-3: sensitive but replaceable",
       "items": [
        "Payroll SaaS",
        "Marketing platform with customer lists",
        "Focus: data protection terms"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "The commonest TPRM failure is sending the same 300-question questionnaire to every supplier. The team drowns, suppliers give boilerplate answers and the few critical relationships get no more attention than the stationery vendor. Tiering by inherent risk lets you spend effort where it matters.",
     "title": "Tier first, then assess"
    },
    {
     "type": "table",
     "head": [
      "Role",
      "Responsibilities"
     ],
     "rows": [
      [
       "Business owner",
       "Accountable for the supplier relationship and accepting its residual risk"
      ],
      [
       "Procurement",
       "Runs sourcing and contracting; ensures TPRM steps are completed before signature"
      ],
      [
       "Security and privacy",
       "Defines requirements, assesses controls, advises on residual risk"
      ],
      [
       "Legal",
       "Drafts and negotiates contractual protections"
      ],
      [
       "Risk management (second line)",
       "Sets TPRM framework, monitors portfolio risk and concentration"
      ],
      [
       "Internal audit (third line)",
       "Assures that the TPRM process works"
      ]
     ],
     "title": "Who does what in TPRM"
    },
    {
     "type": "scenario",
     "title": "Assessment after signature",
     "situation": "A Bangladeshi insurer's marketing team signs a three-year contract with a customer-engagement SaaS platform and uploads 900,000 policyholder records before security hears about it. What is the BEST response from the CISO?",
     "options": [
      {
       "text": "Run a prioritised risk assessment of the platform now, agree remediation or compensating controls with the business owner, and fix the procurement process so TPRM is completed before signature.",
       "feedback": "Best. It deals with the live exposure and closes the process gap that allowed it.",
       "best": true
      },
      {
       "text": "Order the data deleted from the platform immediately.",
       "feedback": "Possibly needed later, but acting before assessing may break a legitimate business service without evidence.",
       "best": false
      },
      {
       "text": "Accept the situation because the contract is signed.",
       "feedback": "A signed contract does not make the risk acceptable, and the business owner must make an informed decision.",
       "best": false
      },
      {
       "text": "Report the marketing team to the board for breaching policy.",
       "feedback": "Escalating blame does not reduce risk or prevent recurrence.",
       "best": false
      }
     ]
    },
    {
     "type": "checklist",
     "title": "Minimum TPRM controls",
     "items": [
      "Maintain a complete supplier inventory with business owner and tier",
      "Block purchase orders for tier 1 and 2 suppliers until assessment is complete",
      "Record what data and system access each supplier has",
      "Use contract templates with security and notification clauses",
      "Track remediation actions agreed with suppliers",
      "Report critical supplier risk and concentration to the risk committee",
      "Offboard with access revocation and data return or destruction evidence"
     ]
    },
    {
     "type": "reflection",
     "prompt": "Which supplier, if it disappeared tomorrow, would stop your organisation's most important service? Do you have a tested plan for that day?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Third-party risk management",
       "def": "The discipline of identifying, assessing, controlling and monitoring risks arising from suppliers and partners."
      },
      {
       "term": "Inherent supplier risk",
       "def": "The risk a supplier relationship carries before considering the supplier's controls, based on data, access and criticality."
      },
      {
       "term": "Supplier tiering",
       "def": "Classifying suppliers by inherent risk to decide the depth and frequency of assurance."
      },
      {
       "term": "Due diligence",
       "def": "Investigation of a supplier's security, resilience, financial, legal and other risks before contracting."
      },
      {
       "term": "Offboarding",
       "def": "Ending a supplier relationship safely, including access removal and data return or destruction."
      },
      {
       "term": "Supply-chain attack",
       "def": "An attack that compromises a trusted supplier or its products to reach the supplier's customers."
      },
      {
       "term": "Business owner of a supplier",
       "def": "The person accountable for the relationship and for accepting its residual risk."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Every supplier extends your attack surface; failures need not be attacks to stop your services.",
      "Tier first by inherent risk, then scale due diligence, contract terms and monitoring to the tier.",
      "The business owner is accountable for supplier risk; procurement, security, legal and risk support the decision.",
      "Block purchase orders for higher tiers until assessment is complete, and offboard with evidence."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "What should determine how deeply a supplier is assessed?",
       "options": [
        "Its inherent risk tier",
        "The supplier's size and brand recognition in the market",
        "Alphabetical order",
        "The length of the contract document"
       ],
       "answer": 0,
       "explain": "Tiering by data, access and criticality directs effort where risk is greatest."
      },
      {
       "q": "Who should be accountable for accepting residual risk from a supplier?",
       "options": [
        "Procurement, because it signed the purchase order and manages the contract file",
        "The supplier",
        "The business owner of the relationship",
        "Internal audit"
       ],
       "answer": 2,
       "explain": "The business owner benefits from the service and must own its risk."
      },
      {
       "q": "Which stage includes revoking supplier access and confirming data destruction?",
       "options": [
        "Due diligence",
        "Tiering",
        "Sourcing",
        "Offboarding"
       ],
       "answer": 3,
       "explain": "Offboarding closes the relationship safely."
      },
      {
       "q": "Why is sending one long questionnaire to every supplier ineffective?",
       "options": [
        "Suppliers are legally prohibited from answering questionnaires longer than fifty questions",
        "Effort is spread evenly regardless of risk",
        "It is too cheap",
        "It covers too few topics"
       ],
       "answer": 1,
       "explain": "Undifferentiated assessment wastes effort on low-risk suppliers and starves critical ones."
      },
      {
       "q": "Which event best illustrates supplier risk that is not an attack?",
       "options": [
        "A phishing email sent to staff",
        "A faulty software update from a security vendor crashing many systems",
        "A stolen laptop",
        "A brute-force login attempt"
       ],
       "answer": 1,
       "explain": "Supplier failures can cause major outages without any malicious actor."
      }
     ]
    }
   ]
  },
  {
   "id": "m5-l2",
   "title": "Assessing and Monitoring Suppliers",
   "subtitle": "Evidence over promises: questionnaires, reports, certificates and continuous signals",
   "minutes": 35,
   "objectives": [
    "Interpret assurance evidence such as SOC 2 reports and ISO/IEC 27001 certificates",
    "Combine questionnaires, evidence and external signals into a supplier risk view",
    "Manage fourth-party and concentration risk"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Supplier assurance is about **evidence**. A questionnaire tells you what a supplier says; independent reports, certificates, test results and observable signals tell you what is likely true. Expert TPRM teams know what each form of evidence proves, what it does not, and how to read the fine print."
    },
    {
     "type": "table",
     "head": [
      "Evidence",
      "What it shows",
      "Read carefully"
     ],
     "rows": [
      [
       "SOC 2 Type I report",
       "Controls were suitably designed at a point in time",
       "Says nothing about whether controls operated over time"
      ],
      [
       "SOC 2 Type II report",
       "Controls were designed and operated effectively over a period, often 6 to 12 months",
       "Scope, exceptions found, complementary user entity controls"
      ],
      [
       "ISO/IEC 27001 certificate",
       "An ISMS meeting the standard exists for the stated scope",
       "Scope statement, issuing body accreditation, validity date"
      ],
      [
       "Penetration test summary",
       "Specific systems were tested at a point in time",
       "Scope, date, severity of findings, remediation status"
      ],
      [
       "Completed questionnaire",
       "Supplier's self-description of controls",
       "Unverified unless backed by evidence"
      ],
      [
       "Security ratings",
       "Externally observable hygiene signals",
       "Can be noisy; validate before acting"
      ]
     ],
     "title": "Common assurance evidence"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "SOC 2 reports often list **complementary user entity controls (CUECs)**: controls the customer must operate for the supplier's controls to work, such as managing your own users' access or MFA settings. If you ignore them, the supplier's clean report does not protect you.",
     "title": "Complementary user entity controls"
    },
    {
     "type": "steps",
     "title": "Reading a SOC 2 Type II report in 20 minutes",
     "items": [
      {
       "title": "Check the period and type",
       "text": "Type II covering a recent 6 to 12 month period."
      },
      {
       "title": "Check the scope",
       "text": "Does it include the service, regions and subservice organisations you use?"
      },
      {
       "title": "Read the auditor's opinion",
       "text": "Unqualified, qualified or adverse?"
      },
      {
       "title": "Scan the exceptions",
       "text": "Which controls failed testing, and what was management's response?"
      },
      {
       "title": "List CUECs",
       "text": "Assign each to an owner in your organisation."
      },
      {
       "title": "Note carve-outs",
       "text": "Subservice providers excluded from scope are fourth parties you must assess separately."
      }
     ]
    },
    {
     "type": "text",
     "text": "**Fourth parties** are your suppliers' suppliers. Your payroll SaaS runs on a cloud provider, uses an email service and a support-desk tool. You have no contract with them, but their failure becomes yours. **Concentration risk** arises when many critical services, yours or your whole sector's, depend on the same provider. Regulators increasingly ask firms to map these dependencies."
    },
    {
     "type": "topology",
     "title": "Hidden concentration behind three suppliers",
     "caption": "Three suppliers with separate contracts all run on the same cloud provider, so one regional outage stops payroll, core banking and customer service at once. You only see it by asking who your suppliers depend on.",
     "nodes": [
      {
       "id": "mail",
       "kind": "cloud",
       "label": "Email service",
       "sub": "Fourth party",
       "x": 0,
       "y": 0
      },
      {
       "id": "cloud",
       "kind": "cloud",
       "label": "Cloud provider",
       "sub": "Same region for all three",
       "x": 3,
       "y": 0
      },
      {
       "id": "desk",
       "kind": "cloud",
       "label": "Support desk",
       "sub": "Fourth party",
       "x": 6,
       "y": 0
      },
      {
       "id": "pay",
       "kind": "server",
       "label": "Payroll SaaS",
       "sub": "Tier 2",
       "x": 0,
       "y": 3
      },
      {
       "id": "core",
       "kind": "server",
       "label": "Core banking",
       "sub": "Hosting provider, Tier 1",
       "x": 3,
       "y": 3
      },
      {
       "id": "crm",
       "kind": "server",
       "label": "CRM SaaS",
       "sub": "Tier 2",
       "x": 6,
       "y": 3
      },
      {
       "id": "org",
       "kind": "team",
       "label": "Your bank",
       "x": 3,
       "y": 6
      }
     ],
     "zones": [
      {
       "label": "Fourth parties: no contract with you",
       "x": 0,
       "y": 0,
       "w": 7,
       "h": 1,
       "tone": "warn"
      },
      {
       "label": "Your suppliers",
       "x": 0,
       "y": 3,
       "w": 7,
       "h": 1,
       "tone": "neutral"
      }
     ],
     "links": [
      {
       "a": "org",
       "b": "pay"
      },
      {
       "a": "org",
       "b": "core",
       "style": "bold"
      },
      {
       "a": "org",
       "b": "crm"
      },
      {
       "a": "pay",
       "b": "cloud",
       "style": "dashed"
      },
      {
       "a": "core",
       "b": "cloud",
       "style": "dashed"
      },
      {
       "a": "crm",
       "b": "cloud",
       "style": "dashed"
      },
      {
       "a": "pay",
       "b": "mail",
       "style": "dashed"
      },
      {
       "a": "crm",
       "b": "desk",
       "style": "dashed"
      }
     ]
    },
    {
     "type": "compare",
     "title": "Point-in-time versus continuous monitoring",
     "columns": [
      {
       "title": "Point-in-time",
       "items": [
        "Annual questionnaire and evidence review",
        "Deep but quickly outdated",
        "Misses changes between reviews"
       ]
      },
      {
       "title": "Continuous",
       "items": [
        "Breach news, security ratings, certificate expiry, financial alerts",
        "Timely signals of change",
        "Needs triage to avoid noise"
       ]
      },
      {
       "title": "Event-driven",
       "items": [
        "Reassess on supplier breach, ownership change, new service scope",
        "Focuses effort on real changes",
        "Requires contractual notification duties"
       ]
      }
     ]
    },
    {
     "type": "scenario",
     "title": "A clean report with a catch",
     "situation": "A hospital is onboarding a cloud lab-results platform. The supplier's SOC 2 Type II report has an unqualified opinion but carves out its hosting provider and lists a CUEC requiring customers to enforce MFA for all users. The hospital's clinicians use shared logins. What should the TPRM lead do?",
     "options": [
      {
       "text": "Approve immediately because the opinion is unqualified.",
       "feedback": "An unqualified opinion assumes customers operate CUECs; shared logins break that assumption.",
       "best": false
      },
      {
       "text": "Approve only once the hospital can meet the CUEC with individual accounts and MFA, and separately assess the hosting provider as a critical fourth party.",
       "feedback": "Best. The supplier's assurance depends on the customer's controls and the carved-out hosting provider; both gaps must be closed.",
       "best": true
      },
      {
       "text": "Reject the supplier because of the carve-out.",
       "feedback": "Carve-outs are common; the right response is to assess the fourth party, not to reject automatically.",
       "best": false
      },
      {
       "text": "Ask the supplier to enforce MFA for the hospital.",
       "feedback": "The CUEC is a customer responsibility; the hospital must manage its own users.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Supplier risk assessment summary",
     "purpose": "Combine evidence into a decision on a tier 1 or tier 2 supplier.",
     "columns": [
      "Supplier and service",
      "Tier",
      "Evidence reviewed",
      "Key findings",
      "Fourth parties",
      "Residual risk",
      "Decision and conditions"
     ],
     "example": [
      [
       "LabCloud results platform",
       "1",
       "SOC 2 Type II (Jan to Dec), pen test summary, DR test report",
       "1 exception in change control; CUEC on MFA",
       "Hosting provider (carved out)",
       "Medium",
       "Approve once MFA live; annual review; 24-hour breach notice"
      ]
     ],
     "rows": 6
    },
    {
     "type": "reflection",
     "prompt": "Pick your most critical supplier. Which of its own suppliers would cause you an outage if they failed? How did you find out?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "SOC 2 report",
       "def": "An independent auditor's report on a service organisation's controls relevant to security, availability, processing integrity, confidentiality or privacy."
      },
      {
       "term": "Type I report",
       "def": "An attestation that controls were suitably designed at a specific point in time."
      },
      {
       "term": "Type II report",
       "def": "An attestation that controls were suitably designed and operated effectively over a period of time."
      },
      {
       "term": "Complementary user entity control",
       "def": "A control the customer must operate for the service organisation's controls to achieve their objectives."
      },
      {
       "term": "Carve-out",
       "def": "A subservice organisation excluded from the scope of a supplier's assurance report."
      },
      {
       "term": "Fourth party",
       "def": "A supplier to your supplier, on which your service indirectly depends."
      },
      {
       "term": "Concentration risk",
       "def": "The risk that many critical services depend on the same provider or technology."
      },
      {
       "term": "Security rating",
       "def": "An external score of an organisation's observable security hygiene, based on internet-facing signals."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Questionnaires show what suppliers say; independent reports, certificates and tests show what is likely true.",
      "A SOC 2 Type II report covers operation over a period; read its scope, exceptions, carve-outs and CUECs.",
      "Carved-out subservice providers are fourth parties you must assess yourself.",
      "Combine periodic deep reviews for higher tiers with continuous and event-driven monitoring, and map concentration."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "What does a SOC 2 Type II report provide that a Type I does not?",
       "options": [
        "A guarantee that the supplier will never suffer a security breach in future",
        "A certificate of ISO compliance",
        "A penetration test",
        "Evidence that controls operated effectively over a period"
       ],
       "answer": 3,
       "explain": "Type II tests operating effectiveness over time; Type I covers design at one point."
      },
      {
       "q": "A supplier's assurance report lists a CUEC requiring customers to review user access quarterly. What does this mean for you?",
       "options": [
        "You must operate that control yourself",
        "The supplier will review your user access for you every quarter",
        "It can be ignored",
        "The report is invalid"
       ],
       "answer": 0,
       "explain": "CUECs are customer responsibilities that the supplier's controls rely on."
      },
      {
       "q": "What is a fourth party?",
       "options": [
        "A regulator that oversees your supplier's industry sector",
        "A competitor",
        "A supplier to your supplier",
        "An internal department"
       ],
       "answer": 2,
       "explain": "Fourth parties sit one step further down the supply chain."
      },
      {
       "q": "Many banks in one country rely on the same core banking hosting provider. Which risk does this illustrate?",
       "options": [
        "Insider risk at each bank's branch network",
        "Credential stuffing",
        "Concentration risk",
        "Data residency"
       ],
       "answer": 2,
       "explain": "Sector-wide dependence on one provider creates a systemic single point of failure."
      },
      {
       "q": "Why validate security ratings before acting on them?",
       "options": [
        "They are confidential and cannot be shared with the supplier",
        "They can include noisy or misattributed signals",
        "They are always perfectly accurate",
        "They are issued by regulators"
       ],
       "answer": 1,
       "explain": "Ratings are useful signals but can misattribute assets or overweight minor issues."
      }
     ]
    }
   ]
  },
  {
   "id": "m5-l3",
   "title": "Software Supply Chain Security",
   "subtitle": "Trusting the code you did not write and the pipelines that build what you did",
   "minutes": 40,
   "objectives": [
    "Explain how software supply-chain attacks work and why they scale",
    "Use SBOMs, provenance and signing to govern software components",
    "Secure build pipelines and manage open-source dependency risk"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Most modern applications are assembled, not written: typically the large majority of the code comes from open-source libraries and third-party components. Build systems pull dependencies automatically and push releases to thousands of customers. Attackers target this chain because one compromise reaches many victims: a poisoned update, a malicious package with a name similar to a popular one, a hijacked maintainer account or a compromised build server."
    },
    {
     "type": "table",
     "head": [
      "Pattern",
      "How it works",
      "Key control"
     ],
     "rows": [
      [
       "Compromised build or update",
       "Attacker alters a vendor's build so signed updates carry malware",
       "Hardened, isolated builds; provenance verification"
      ],
      [
       "Malicious maintainer",
       "A contributor gains trust over years, then inserts a backdoor",
       "Review of critical dependencies; reproducible builds"
      ],
      [
       "Typosquatting and dependency confusion",
       "Fake package with a similar or internal name is pulled automatically",
       "Private registries, pinned versions, allow-lists"
      ],
      [
       "Exploited popular component",
       "A flaw in a widely used library affects thousands of apps",
       "SBOMs and fast vulnerability matching"
      ],
      [
       "Stolen signing keys or tokens",
       "Attacker signs malicious code as the vendor",
       "HSM-protected keys, short-lived tokens"
      ],
      [
       "Self-spreading registry malware",
       "Malware steals maintainers' publishing tokens and republishes itself in their other packages, as seen in a major registry in 2025",
       "Phishing-resistant MFA and short-lived publishing credentials for maintainers; pinned versions; delay adopting brand-new releases"
      ]
     ],
     "title": "Supply-chain attack patterns"
    },
    {
     "type": "case",
     "title": "A backdoor nearly everywhere",
     "context": "In March 2024 an engineer investigating unusually slow remote logins on a test Linux system traced the delay to a widely used open-source compression library. A contributor who had spent about two years building trust and gaining maintainer rights had hidden a backdoor in recent release packages, designed to undermine remote login authentication on some Linux distributions. It was caught before reaching most stable releases.",
     "questions": [
      "What made this attack possible, and why are such attacks hard to detect?",
      "Which governance controls could an enterprise apply to reduce exposure to similar attacks?",
      "What does the case teach about the role of open-source maintainers?"
     ],
     "answer": "The attack exploited social trust in an overstretched volunteer project and hid malicious code in release artefacts rather than in the visible source, making review difficult. Enterprises can maintain SBOMs to know where components are used, prefer stable releases, monitor for advisories and respond fast, verify provenance and reproducible builds for critical components, and limit what internet-facing services expose. The case shows that critical infrastructure depends on small, often unfunded maintainer teams; organisations that rely on them should contribute funding or engineering support and track project health as part of supplier risk."
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "An **SBOM** is a machine-readable list of the components, versions and dependencies in a piece of software, commonly in SPDX or CycloneDX format. It lets you answer within hours, not weeks, the question 'where do we use the vulnerable library?' The EU Cyber Resilience Act makes an SBOM part of the technical documentation for products with digital elements sold in the EU. A related **VEX** statement tells you whether a known vulnerability is actually exploitable in that product.",
     "title": "Software bill of materials (SBOM)"
    },
    {
     "type": "layers",
     "title": "Securing the build pipeline (bottom to top)",
     "items": [
      {
       "label": "Release and distribution",
       "parts": [
        "Signed artefacts",
        "Published provenance",
        "Verified on install"
       ]
      },
      {
       "label": "Build",
       "parts": [
        "Isolated, ephemeral build environments",
        "Generated provenance and SBOM",
        "No manual changes to artefacts"
       ]
      },
      {
       "label": "Dependencies",
       "parts": [
        "Private mirror or registry",
        "Pinned versions and checksums",
        "Automated vulnerability and licence checks"
       ]
      },
      {
       "label": "Source",
       "parts": [
        "Protected branches, two-person review",
        "Signed commits for critical repos",
        "Secrets scanning"
       ]
      },
      {
       "label": "Identities",
       "parts": [
        "Phishing-resistant MFA for developers and maintainers",
        "Least-privilege pipeline tokens"
       ]
      }
     ]
    },
    {
     "type": "sequence",
     "title": "From commit to verified deployment",
     "actors": [
      "Developer",
      "Source repo",
      "Build service",
      "Signing (HSM)",
      "Artifact registry",
      "Deploy pipeline"
     ],
     "caption": "Integrity is checked twice: the build signs what it produced and records how, and the deploy pipeline refuses anything whose signature or provenance does not match policy.",
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "Signed commit, two-person review"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Trigger build from protected branch"
      },
      {
       "from": 2,
       "to": 4,
       "label": "Fetch pinned dependencies (private mirror)"
      },
      {
       "from": 2,
       "to": 2,
       "label": "Ephemeral build; generate SBOM"
      },
      {
       "from": 2,
       "to": 3,
       "label": "Sign artefact and provenance"
      },
      {
       "from": 3,
       "to": 2,
       "label": "Signatures; key never leaves HSM",
       "reply": true
      },
      {
       "from": 2,
       "to": 4,
       "label": "Publish artefact, SBOM, provenance"
      },
      {
       "from": 5,
       "to": 4,
       "label": "Fetch release"
      },
      {
       "from": 5,
       "to": 5,
       "label": "Verify signature, provenance, policy"
      },
      {
       "from": 5,
       "to": 5,
       "label": "Deploy only if every check passes"
      }
     ]
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Industry frameworks such as SLSA (Supply-chain Levels for Software Artifacts) describe increasing levels of build integrity, from simply documenting how something was built up to hardened, isolated builds with verifiable provenance. Use such levels to set requirements for internal teams and suppliers rather than inventing your own scale.",
     "title": "Graduated assurance levels for builds"
    },
    {
     "type": "steps",
     "title": "Governing open-source use",
     "items": [
      {
       "title": "Inventory",
       "text": "Generate SBOMs for every application in the pipeline."
      },
      {
       "title": "Set policy",
       "text": "Approved sources, licence rules, maximum vulnerability severity, minimum project health."
      },
      {
       "title": "Automate checks",
       "text": "Block builds that pull unapproved or critically vulnerable components."
      },
      {
       "title": "Respond fast",
       "text": "When a new critical flaw appears, query SBOMs and patch by exposure."
      },
      {
       "title": "Support critical projects",
       "text": "Fund or contribute to projects your business depends on."
      },
      {
       "title": "Require from suppliers",
       "text": "Ask for SBOMs, vulnerability disclosure policies and secure development evidence."
      }
     ]
    },
    {
     "type": "scenario",
     "title": "A critical library flaw",
     "situation": "A widely used logging library is found to have a remotely exploitable flaw. A bank's CISO asks 'where are we exposed?' Teams estimate it will take three weeks to check all 400 applications manually. What capability would have shortened this MOST?",
     "options": [
      {
       "text": "SBOMs for all applications, stored centrally and queryable, combined with supplier SBOMs for bought software.",
       "feedback": "Best. A queryable inventory of components answers the exposure question in hours.",
       "best": true
      },
      {
       "text": "An annual penetration test of the main internet banking site.",
       "feedback": "A single test does not reveal every place a library is used.",
       "best": false
      },
      {
       "text": "A web application firewall rule for the main website.",
       "feedback": "Useful as a temporary shield for some exposures but does not tell you where the library is.",
       "best": false
      },
      {
       "text": "A policy banning open-source software.",
       "feedback": "Unrealistic and would not help with the existing estate.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "If a critical flaw were announced tomorrow in a component you depend on, how long would it take to know every system affected, including products you buy?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Software supply chain",
       "def": "Everything involved in producing and delivering software: source, dependencies, build systems, signing and distribution."
      },
      {
       "term": "SBOM",
       "def": "Software bill of materials: a machine-readable inventory of components and versions in a software product."
      },
      {
       "term": "VEX",
       "def": "Vulnerability exploitability exchange: a statement of whether a known vulnerability affects a specific product."
      },
      {
       "term": "Provenance",
       "def": "Verifiable information about where, when and how a software artefact was built."
      },
      {
       "term": "SLSA",
       "def": "Supply-chain Levels for Software Artifacts: a framework of increasing build integrity requirements."
      },
      {
       "term": "Typosquatting",
       "def": "Publishing malicious packages with names similar to popular ones to trick developers or tools."
      },
      {
       "term": "Dependency confusion",
       "def": "Tricking build tools into pulling a public malicious package instead of an internal one with the same name."
      },
      {
       "term": "Code signing",
       "def": "Digitally signing software so users can verify its publisher and that it has not been altered."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "One compromised component, maintainer account or build server can reach thousands of victims.",
      "SBOMs answer 'where are we exposed?' in hours; VEX says whether a flaw is actually exploitable.",
      "Protect the pipeline end to end: reviewed source, pinned dependencies, isolated builds, signed artefacts and verification at deploy.",
      "Ask suppliers for SBOMs and secure development evidence, and support the open-source projects you depend on."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "What is the main purpose of an SBOM?",
       "options": [
        "To prove the software has no vulnerabilities at the time of release",
        "To replace code review",
        "To license the software",
        "To list components and versions so exposure can be found quickly"
       ],
       "answer": 3,
       "explain": "SBOMs are inventories; they do not prove absence of flaws."
      },
      {
       "q": "A build tool pulls a public package that shares a name with an internal package. What is this attack called?",
       "options": [
        "Dependency confusion",
        "Typosquatting of a popular public package with a misspelled name",
        "Cross-site scripting",
        "SQL injection"
       ],
       "answer": 0,
       "explain": "Dependency confusion abuses name resolution between public and private registries."
      },
      {
       "q": "Which control best protects code-signing keys?",
       "options": [
        "Saving them in the repository so the build can find them easily",
        "Storing them in a hardware security module with strict access",
        "Emailing them to release managers",
        "Rotating them every ten years"
       ],
       "answer": 1,
       "explain": "HSM protection prevents theft and misuse of signing keys."
      },
      {
       "q": "What does a VEX statement add to an SBOM?",
       "options": [
        "Whether a known vulnerability is actually exploitable in the product",
        "A list of every developer who has ever contributed to the component",
        "The software licence price",
        "The build server's IP address"
       ],
       "answer": 0,
       "explain": "VEX tells you if a listed vulnerable component matters in context."
      },
      {
       "q": "Why are malicious-maintainer attacks hard to detect?",
       "options": [
        "They always come from known hostile IP addresses that are easy to block",
        "They only affect closed-source software",
        "They abuse legitimate trust and may hide code in release artefacts",
        "They are prevented by antivirus"
       ],
       "answer": 2,
       "explain": "Trusted insiders and hidden artefacts evade normal review."
      },
      {
       "q": "In 2025 malware spread through a public package registry by stealing maintainers' publishing tokens. Which control would most directly have limited its spread from your developers' accounts?",
       "options": [
        "A larger antivirus deployment on build servers, with daily full scans of every dependency cache",
        "Phishing-resistant MFA and short-lived publishing credentials for maintainers",
        "Annual secure-coding training",
        "Moving source code to a different hosting provider"
       ],
       "answer": 1,
       "explain": "The worm propagated with stolen long-lived publishing tokens. Strong MFA and short-lived publishing credentials remove what it needed; scanning, training or rehosting do not."
      }
     ]
    }
   ]
  },
  {
   "id": "m5-l4",
   "title": "Cloud, SaaS and Outsourcing: Contracts, Exit and Concentration",
   "subtitle": "Writing security into contracts and planning for the day a provider fails",
   "minutes": 35,
   "objectives": [
    "Specify security, notification and audit terms in supplier contracts",
    "Design credible exit and substitution plans for critical providers",
    "Respond to supplier incidents as part of your own incident process"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A contract is a security control. It defines what the supplier must do, what you can verify, how fast you will hear about problems and how you can leave. Financial regulators, including central banks in South Asia and the EU's Digital Operational Resilience Act (DORA), now set explicit expectations for outsourcing and ICT third-party contracts, especially for critical services. DORA, for example, requires financial entities to keep a register of information on all their ICT third-party arrangements."
    },
    {
     "type": "table",
     "head": [
      "Clause",
      "What it should say"
     ],
     "rows": [
      [
       "Security requirements",
       "Reference your standards or an agreed annex; minimum controls such as MFA, encryption, logging"
      ],
      [
       "Incident notification",
       "Notify suspected incidents affecting you within a defined time, such as 24 hours, with ongoing updates"
      ],
      [
       "Right to audit and assurance",
       "Annual independent reports, right to audit or pooled audits, remediation of findings"
      ],
      [
       "Data location and handling",
       "Where data is stored, sub-processing approvals, return and deletion on exit"
      ],
      [
       "Subcontracting",
       "Notification and approval of material subcontractors; flow-down of obligations"
      ],
      [
       "Resilience",
       "Recovery objectives, testing participation, capacity guarantees"
      ],
      [
       "Exit and transition",
       "Assistance, data formats, timescales and continued service during transition"
      ],
      [
       "Liability and insurance",
       "Caps and carve-outs appropriate to the data and service; cyber insurance requirements"
      ]
     ],
     "title": "Security clauses for critical supplier contracts"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Hyperscale cloud and SaaS providers rarely accept bespoke clauses. Compensate by reading their standard terms, using their assurance reports and audit programmes, joining pooled audits where offered, configuring the controls you own and putting more effort into your exit plan.",
     "title": "Negotiating with very large providers"
    },
    {
     "type": "framework",
     "title": "Elements of a credible exit plan",
     "items": [
      {
       "label": "E1",
       "title": "Trigger events",
       "text": "When you would leave: insolvency, repeated breaches, regulatory direction, price shock."
      },
      {
       "label": "E2",
       "title": "Alternative options",
       "text": "Named substitute providers or in-house capability, with lead times."
      },
      {
       "label": "E3",
       "title": "Data portability",
       "text": "Formats, export tools and volumes tested in practice."
      },
      {
       "label": "E4",
       "title": "Transition timeline",
       "text": "Realistic phased migration with business sign-off."
      },
      {
       "label": "E5",
       "title": "Interim resilience",
       "text": "How the service continues if the provider stops suddenly, a stressed exit."
      },
      {
       "label": "E6",
       "title": "Ownership and testing",
       "text": "A named owner and a periodic test or desk review."
      }
     ]
    },
    {
     "type": "compare",
     "title": "Planned versus stressed exit",
     "columns": [
      {
       "title": "Planned exit",
       "items": [
        "Contract ends or strategy changes",
        "Months to migrate",
        "Provider cooperates",
        "Focus: cost and smooth transition"
       ]
      },
      {
       "title": "Stressed exit",
       "items": [
        "Provider fails, is breached or is sanctioned",
        "Days or hours to act",
        "Provider may not cooperate",
        "Focus: continuity of critical service and data access"
       ]
      }
     ]
    },
    {
     "type": "flow",
     "title": "Responding to a supplier incident",
     "items": [
      {
       "label": "Learn",
       "text": "Notice from supplier, news, threat intel or your own detection"
      },
      {
       "label": "Assess exposure",
       "text": "Which data, access and services connect to the supplier?"
      },
      {
       "label": "Contain",
       "text": "Revoke tokens, disable integrations, block connections"
      },
      {
       "label": "Coordinate",
       "text": "Joint bridge with supplier; agree facts and timeline"
      },
      {
       "label": "Notify",
       "text": "Regulators and customers as required by your own obligations"
      },
      {
       "label": "Review",
       "text": "Reassess the supplier; update contract and controls"
      }
     ]
    },
    {
     "type": "sequence",
     "title": "Handling a supplier incident without waiting",
     "actors": [
      "Threat intel",
      "Security lead",
      "IT operations",
      "Supplier",
      "Legal and DPO",
      "Regulator"
     ],
     "caption": "Containment of your own exposure starts before the supplier speaks; the supplier's facts then shape the notification decision, which runs on your own legal clock.",
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "Supplier's product mass-exploited"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Suspend integration, rotate keys"
      },
      {
       "from": 1,
       "to": 3,
       "label": "Which of our data was exposed?"
      },
      {
       "from": 2,
       "to": 1,
       "label": "Contained; logs preserved",
       "reply": true
      },
      {
       "from": 3,
       "to": 1,
       "label": "Confirmed: files accessed",
       "reply": true
      },
      {
       "from": 1,
       "to": 4,
       "label": "Assess notification duties"
      },
      {
       "from": 4,
       "to": 5,
       "label": "Notify within legal deadline"
      },
      {
       "from": 1,
       "to": 3,
       "label": "Joint bridge: fixes and timeline"
      }
     ]
    },
    {
     "type": "scenario",
     "title": "A file-transfer supplier is breached",
     "situation": "A news report says a managed file-transfer service used by a garment exporter to exchange purchase orders and payment files with buyers has a mass-exploited vulnerability. The supplier has not contacted its customers. What should the exporter's security lead do FIRST?",
     "options": [
      {
       "text": "Wait for the supplier's official notification before acting.",
       "feedback": "Suppliers may be slow or unaware of impact; delay increases data loss risk.",
       "best": false
      },
      {
       "text": "Terminate the contract immediately.",
       "feedback": "Termination does not contain data already exposed and may disrupt business without assessment.",
       "best": false
      },
      {
       "text": "Issue a press statement that the company is unaffected.",
       "feedback": "Making claims before assessment risks being wrong publicly.",
       "best": false
      },
      {
       "text": "Treat it as a potential incident: identify what data and connections pass through the service, contain by suspending integrations and rotating credentials, and open a line to the supplier.",
       "feedback": "Best. Waiting for supplier notification loses time; the exporter must assess and contain its own exposure.",
       "best": true
      }
     ]
    },
    {
     "type": "template",
     "title": "Critical supplier exit plan",
     "purpose": "Record how a critical service would be moved or kept running if a supplier relationship ended, including in a stressed exit.",
     "columns": [
      "Service and supplier",
      "Exit triggers",
      "Alternatives and lead time",
      "Data export method and test date",
      "Stressed-exit continuity",
      "Owner",
      "Last reviewed"
     ],
     "example": [
      [
       "Core banking hosting by DataCo",
       "Insolvency, regulatory direction, repeated outages",
       "Second provider (6 months); own DC (12 months)",
       "Nightly encrypted export; tested March",
       "Read-only replica in second site for 30 days",
       "COO",
       "June"
      ]
     ],
     "rows": 6
    },
    {
     "type": "reflection",
     "prompt": "For your most critical cloud or SaaS provider, could you continue the service for one week if it became unavailable without warning? What would break first?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Outsourcing",
       "def": "Using an external provider to perform a function the organisation would otherwise perform itself."
      },
      {
       "term": "Right to audit",
       "def": "A contractual right for the customer or its regulator to audit a supplier's relevant controls."
      },
      {
       "term": "Pooled audit",
       "def": "An audit of a supplier performed jointly on behalf of several customers to share cost and effort."
      },
      {
       "term": "Exit plan",
       "def": "A documented plan for moving a service away from a supplier, in both planned and stressed situations."
      },
      {
       "term": "Stressed exit",
       "def": "Leaving a supplier suddenly because of failure, breach or legal action, with little cooperation."
      },
      {
       "term": "Sub-processor",
       "def": "A third party engaged by a supplier to process your data on its behalf."
      },
      {
       "term": "Incident notification clause",
       "def": "A contract term requiring the supplier to report incidents affecting the customer within a set time."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "A contract is a control: security requirements, notification times, audit rights, subcontracting and exit terms.",
      "With hyperscale providers, compensate for standard terms with their assurance reports, pooled audits and stronger exit plans.",
      "Plan for a stressed exit and test data export in practice, not only on paper.",
      "Treat a supplier breach as your incident: assess and contain your own exposure without waiting."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which contract clause most directly reduces delays in learning about a supplier breach?",
       "options": [
        "A liability cap set at the value of one year's fees",
        "A clause on invoice formats",
        "A marketing clause",
        "Incident notification within a defined time"
       ],
       "answer": 3,
       "explain": "Notification timelines ensure you hear quickly and can meet your own obligations."
      },
      {
       "q": "What is a stressed exit?",
       "options": [
        "A planned migration at contract expiry with full supplier cooperation and months of notice",
        "A price renegotiation",
        "Leaving a supplier suddenly after failure or breach",
        "A staff transfer"
       ],
       "answer": 2,
       "explain": "Stressed exits happen at short notice and often without cooperation."
      },
      {
       "q": "A hyperscale provider will not accept a bespoke right-to-audit clause. What is a sensible compensating approach?",
       "options": [
        "Use its assurance reports and pooled audits, and strengthen your exit plan",
        "Accept no assurance at all and rely on the provider's marketing statements",
        "Refuse to use any cloud services",
        "Audit its data centres without permission"
       ],
       "answer": 0,
       "explain": "Standard reports, pooled audits and exit planning provide assurance where bespoke terms are unavailable."
      },
      {
       "q": "During a supplier incident, which action should you take without waiting for the supplier?",
       "options": [
        "Publicly blame the supplier on social media before facts are known",
        "Delete all supplier data from your systems",
        "Cancel all contracts",
        "Assess and contain your own exposure"
       ],
       "answer": 3,
       "explain": "Your obligations and risk do not wait for supplier updates."
      },
      {
       "q": "Why should exit plans include tested data export?",
       "options": [
        "Regulators always ask to see the exported data in full",
        "Untested exports often fail on format, volume or time",
        "It reduces licence fees",
        "It improves supplier ratings"
       ],
       "answer": 1,
       "explain": "Only testing reveals whether data can actually be moved in time."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m6",
 "order": 6,
 "code": "Operate",
 "title": "Security Operations Strategy and Metrics",
 "subtitle": "Run detection, response and exposure management as measurable, accountable services",
 "outcomes": [
  "Choose and staff a security operations model that fits the organisation",
  "Build and validate threat-informed detection as code",
  "Govern incident response with decision rights, playbooks and evidence handling",
  "Prioritise vulnerabilities and exposures by real-world risk",
  "Design KPIs and KRIs that inform decisions from operations to the board"
 ],
 "lessons": [
  {
   "id": "m6-l1",
   "title": "Security Operations Operating Models",
   "subtitle": "In-house, outsourced or hybrid: designing a SOC that fits the organisation",
   "minutes": 35,
   "objectives": [
    "Compare in-house, MSSP, MDR and hybrid security operations models",
    "Estimate staffing for round-the-clock coverage",
    "Define the scope, services and maturity path of a security operations function"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A **security operations centre (SOC)** is less a room full of screens than a set of capabilities: collecting telemetry, detecting threats, investigating, responding and improving defences. The strategic question for a leader is not 'do we need a SOC?' but 'which capabilities must we own, which can we buy, and how do we make them work together?'"
    },
    {
     "type": "compare",
     "title": "Operating model options",
     "columns": [
      {
       "title": "In-house SOC",
       "items": [
        "Full control and deep business context",
        "Expensive: staff, tools, 24x7 rota",
        "Hard to hire and retain skills",
        "Fits large, highly regulated or high-threat organisations"
       ]
      },
      {
       "title": "Managed services (MSSP or MDR)",
       "items": [
        "Fast to start, 24x7 coverage included",
        "Provider sees many customers' threats",
        "Less business context; response limits",
        "Fits small and mid-sized organisations"
       ]
      },
      {
       "title": "Hybrid",
       "items": [
        "Provider covers monitoring and first response out of hours",
        "Internal team owns context, escalation, detection tuning and major incidents",
        "Needs clear runbooks and shared tooling",
        "The commonest model in 2026"
       ]
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Service",
      "Internal team",
      "Provider"
     ],
     "rows": [
      [
       "Log and telemetry onboarding",
       "Owns sources and quality",
       "Advises and monitors health"
      ],
      [
       "Alert triage 24x7",
       "Daytime overlap",
       "Primary"
      ],
      [
       "Investigation and containment",
       "Decision authority for business-impacting actions",
       "Pre-approved containment actions"
      ],
      [
       "Detection engineering",
       "Business-specific use cases",
       "Generic threat content"
      ],
      [
       "Threat hunting",
       "Hypotheses from business context",
       "Hunts across customer base"
      ],
      [
       "Major incident command",
       "Primary",
       "Support"
      ]
     ],
     "title": "Core SOC services and who typically owns them in a hybrid model"
    },
    {
     "type": "sequence",
     "title": "A 2 a.m. escalation in a hybrid SOC",
     "actors": [
      "MDR analyst",
      "Endpoint platform",
      "Internal on-call",
      "Service owner"
     ],
     "caption": "The provider acts at once within pre-approved limits; anything that disrupts a business service goes to the internal team and the accountable owner, who can decide within minutes because the route was agreed in advance.",
     "steps": [
      {
       "from": 0,
       "to": 0,
       "label": "Triage: ransomware precursor on a laptop"
      },
      {
       "from": 0,
       "to": 1,
       "label": "Isolate laptop (pre-approved action)"
      },
      {
       "from": 0,
       "to": 2,
       "label": "Escalate: same activity on file server"
      },
      {
       "from": 2,
       "to": 3,
       "label": "Isolate file server? Branch impact"
      },
      {
       "from": 3,
       "to": 2,
       "label": "Approved; branches use offline process",
       "reply": true
      },
      {
       "from": 2,
       "to": 1,
       "label": "Isolate file server"
      },
      {
       "from": 2,
       "to": 0,
       "label": "Keep hunting; update hourly",
       "reply": true
      }
     ]
    },
    {
     "type": "formula",
     "title": "Staffing a 24x7 seat",
     "items": [
      {
       "name": "Hours to cover per seat",
       "expr": "24 × 365 = 8,760 hours per year",
       "meaning": "One analyst position staffed every hour of the year."
      },
      {
       "name": "Productive hours per analyst",
       "expr": "≈ 2,080 contracted − leave, holidays, training, sickness ≈ 1,600 to 1,800",
       "meaning": "Varies by country and policy; use your own HR data."
      },
      {
       "name": "FTE per 24x7 seat",
       "expr": "FTE = 8,760 ÷ productive hours ≈ 4.9 to 5.5",
       "meaning": "Roughly five to six people for one continuous seat."
      },
      {
       "name": "Triage capacity",
       "expr": "Analysts needed = (alerts per day × minutes per alert) ÷ (60 × productive hours per shift)",
       "meaning": "Shows why reducing noise is cheaper than hiring."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "A Dhaka bank wants two analysts on duty at all times. At about 1,700 productive hours each, that needs roughly 2 × 8,760 ÷ 1,700 ≈ 10.3 people before team leads, engineers and threat hunters. Presenting this calculation helps executives see why a hybrid model is often the realistic choice.",
     "title": "The arithmetic that changes minds"
    },
    {
     "type": "chart",
     "kind": "bar",
     "title": "People needed for one 24x7 seat",
     "caption": "Worked from the formula above (8,760 hours divided by productive hours per analyst), not survey data. Every hundred hours of leave, training or sickness per person pushes the headcount up.",
     "labels": [
      "1,500 h",
      "1,600 h",
      "1,700 h",
      "1,800 h"
     ],
     "series": [
      {
       "name": "FTE per seat",
       "values": [
        5.8,
        5.5,
        5.2,
        4.9
       ]
      }
     ],
     "yLabel": "FTE"
    },
    {
     "type": "framework",
     "title": "SOC maturity path",
     "items": [
      {
       "label": "S1",
       "title": "Visibility",
       "text": "Critical log sources onboarded, time-synchronised and retained."
      },
      {
       "label": "S2",
       "title": "Detection",
       "text": "Use cases mapped to priority threats; alerts triaged consistently."
      },
      {
       "label": "S3",
       "title": "Response",
       "text": "Playbooks, decision rights and containment actions agreed and practised."
      },
      {
       "label": "S4",
       "title": "Proactive",
       "text": "Threat hunting, purple teaming and detection-as-code."
      },
      {
       "label": "S5",
       "title": "Optimising",
       "text": "Automation, metrics-driven improvement and business-aligned risk reporting."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "title": "AI assistants in the SOC",
     "text": "AI tools that summarise alerts, draft queries or suggest containment can raise analyst capacity, but govern them like any privileged automation: keep a human decision for business-impacting actions, log prompts and outputs, test them on your own data before trusting them, and remember that attacker-controlled text in emails, logs or tickets can try to manipulate them (prompt injection)."
    },
    {
     "type": "scenario",
     "title": "Build or buy?",
     "situation": "A private university in Sylhet with 25,000 students has a four-person IT security team, no night cover and growing ransomware attacks on the education sector. The registrar asks whether to build an in-house 24x7 SOC. What should the CISO recommend?",
     "options": [
      {
       "text": "Build a full in-house 24x7 SOC with twelve new hires.",
       "feedback": "Costly and slow to staff; the university is unlikely to fund or retain this team.",
       "best": false
      },
      {
       "text": "Rely on the internal team during office hours and accept no night cover.",
       "feedback": "Ransomware groups favour nights and weekends; this leaves the most dangerous hours uncovered.",
       "best": false
      },
      {
       "text": "A hybrid model: a managed detection and response provider for 24x7 monitoring and first containment, with the internal team owning context, escalation and improvement.",
       "feedback": "Best. It delivers round-the-clock coverage affordably while keeping business knowledge and authority in-house.",
       "best": true
      },
      {
       "text": "Outsource everything, including major incident decisions.",
       "feedback": "A provider lacks authority and context for business-impacting decisions.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "SOC service responsibility matrix",
     "purpose": "Clarify which party performs, approves and is informed for each security operations service in a hybrid model.",
     "columns": [
      "Service",
      "Internal SOC",
      "Provider",
      "IT operations",
      "Business owner",
      "Response time target"
     ],
     "example": [
      [
       "Isolate an infected laptop",
       "Informed",
       "Performs (pre-approved)",
       "Informed",
       "Not involved",
       "15 minutes"
      ],
      [
       "Disable a payment server",
       "Approves and leads",
       "Recommends",
       "Performs",
       "Consulted",
       "30 minutes"
      ]
     ],
     "rows": 8
    },
    {
     "type": "reflection",
     "prompt": "If a serious alert fired at 2 a.m. on a public holiday, who would see it, who could act on it and who could authorise disconnecting a business system?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Security operations centre",
       "def": "The function that monitors, detects, investigates and responds to security threats."
      },
      {
       "term": "MSSP",
       "def": "Managed security service provider: an external company that operates security services such as monitoring for customers."
      },
      {
       "term": "MDR",
       "def": "Managed detection and response: an external service that monitors, investigates and performs response actions."
      },
      {
       "term": "Hybrid SOC",
       "def": "An operating model combining internal security staff with an external provider."
      },
      {
       "term": "Full-time equivalent",
       "def": "A unit expressing staffing as the number of full-time workers needed."
      },
      {
       "term": "Triage",
       "def": "The rapid assessment of alerts to decide which need investigation and in what order."
      },
      {
       "term": "Threat hunting",
       "def": "Proactive searching for threats that have evaded existing detection, based on hypotheses."
      },
      {
       "term": "Telemetry",
       "def": "Logs, events and signals collected from systems for monitoring and analysis."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Decide which SOC capabilities to own and which to buy; hybrid models are the common answer.",
      "One continuously staffed seat needs roughly five to six people, so reducing noise is cheaper than hiring.",
      "Providers act within pre-approved limits; business-impacting containment stays with the internal team and owners.",
      "Govern AI assistants in the SOC like privileged automation, with human approval and logging."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Roughly how many people does one continuously staffed 24x7 seat require?",
       "options": [
        "Two, working twelve-hour shifts every day of the year without leave",
        "Three",
        "Ten",
        "About five to six"
       ],
       "answer": 3,
       "explain": "8,760 hours divided by about 1,600 to 1,800 productive hours gives around five to six."
      },
      {
       "q": "In a hybrid SOC, which decision should normally stay with the internal team?",
       "options": [
        "Disconnecting a business-critical system",
        "Triage of routine malware alerts on employee laptops overnight",
        "Updating generic threat signatures",
        "Collecting log health metrics"
       ],
       "answer": 0,
       "explain": "Business-impacting actions need internal authority and context."
      },
      {
       "q": "Which is a key advantage of MDR for a small organisation?",
       "options": [
        "Complete knowledge of the organisation's business processes from the first day",
        "No need for internal security staff at all",
        "Affordable round-the-clock coverage",
        "Guaranteed prevention of all incidents"
       ],
       "answer": 2,
       "explain": "Providers spread 24x7 costs across customers but still need internal context."
      },
      {
       "q": "Why is reducing alert noise often cheaper than hiring analysts?",
       "options": [
        "Noisy alerts are automatically ignored by the SIEM",
        "Analyst need scales with alert volume and handling time",
        "Hiring is illegal in some sectors",
        "Alerts do not affect staffing"
       ],
       "answer": 1,
       "explain": "The triage capacity formula shows fewer, better alerts reduce staffing needs."
      },
      {
       "q": "Which stage of SOC maturity introduces threat hunting and purple teaming?",
       "options": [
        "Visibility",
        "Proactive",
        "Detection",
        "Response"
       ],
       "answer": 1,
       "explain": "Proactive capabilities build on visibility, detection and response."
      }
     ]
    }
   ]
  },
  {
   "id": "m6-l2",
   "title": "Detection Engineering and Threat-Informed Defence",
   "subtitle": "Building detections deliberately, measuring coverage and testing that they work",
   "minutes": 35,
   "objectives": [
    "Run a detection engineering lifecycle with detections managed as code",
    "Measure detection coverage against priority threat techniques",
    "Validate defences through purple teaming and adversary emulation"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Many SOCs run on default vendor rules and hope. **Detection engineering** treats detections as products: designed for specific threats, written and version-controlled as code, tested against realistic attacks, tuned with data and retired when no longer useful. Combined with threat intelligence about the adversaries most likely to target you, it becomes **threat-informed defence**."
    },
    {
     "type": "cycle",
     "title": "The detection engineering lifecycle",
     "center": "Detections as code",
     "caption": "Detections are products with a life: each turn starts from the threats that matter, proves the rule against an emulated attack and ends by tuning or retiring it.",
     "items": [
      {
       "label": "Prioritise",
       "text": "Techniques used by priority threat groups"
      },
      {
       "label": "Research",
       "text": "Behaviour and data needed"
      },
      {
       "label": "Build",
       "text": "Logic written as code with tests"
      },
      {
       "label": "Validate",
       "text": "Emulated attacks; true and false positives"
      },
      {
       "label": "Deploy",
       "text": "Change control and a runbook"
      },
      {
       "label": "Tune or retire",
       "text": "Measure precision; improve or remove"
      }
     ]
    },
    {
     "type": "cli",
     "title": "A detection written as code (generic rule format)",
     "device": "Detection rule (YAML-style)",
     "lines": [
      "title: Backup catalogue deletion by non-backup admin",
      "id: det-0142",
      "status: production",
      "description: Detects deletion of backup catalogues or shadow copies, common before ransomware encryption",
      "logsource: { product: windows, category: process_creation }",
      "detection:",
      "  selection:",
      "    CommandLine|contains: ['delete shadows', 'resize shadowstorage', 'delete catalog']",
      "  filter_backup_admins:",
      "    User|endswith: ['svc-backup']",
      "  condition: selection and not filter_backup_admins",
      "level: high",
      "tags: [attack.impact, inhibit_system_recovery]",
      "runbook: RB-17 isolate host, confirm with backup team, check for encryption activity"
     ],
     "note": "Generic rule formats such as Sigma-style YAML let detections be reviewed, tested and converted for different SIEM platforms. Exclusions must be tightly scoped and reviewed."
    },
    {
     "type": "table",
     "head": [
      "Measure",
      "How",
      "Caution"
     ],
     "rows": [
      [
       "Technique coverage",
       "Share of priority techniques with at least one tested detection",
       "Coverage on paper is not coverage in practice"
      ],
      [
       "Data source coverage",
       "Share of critical assets sending required telemetry",
       "Gaps in logging make detections blind"
      ],
      [
       "Validated detection rate",
       "Share of emulated attack steps detected in tests",
       "The most honest measure; needs regular testing"
      ],
      [
       "Precision",
       "True positives ÷ all alerts for a rule",
       "Low precision burns analyst time"
      ],
      [
       "Time to detect in tests",
       "From emulated action to alert",
       "Shows whether detection is fast enough to stop impact"
      ]
     ],
     "title": "Measuring detection coverage"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "In **purple teaming**, attackers (red) and defenders (blue) work together: the red team runs a technique, the blue team checks whether it was seen, and both improve detections on the spot. A few days of purple teaming against your priority techniques often improves detection more than a year of untargeted rule tuning.",
     "title": "Purple teaming beats annual pen tests for detection"
    },
    {
     "type": "steps",
     "title": "Running a purple-team exercise",
     "items": [
      {
       "title": "Choose a threat profile",
       "text": "For example, a ransomware group known to target manufacturing in South Asia."
      },
      {
       "title": "Select techniques",
       "text": "Pick 15 to 30 techniques from that profile, across initial access to impact."
      },
      {
       "title": "Agree safety rules",
       "text": "Test environment or controlled production scope; rollback plans."
      },
      {
       "title": "Execute and observe",
       "text": "Run each technique; record prevented, detected, logged only or missed."
      },
      {
       "title": "Fix and retest",
       "text": "Write or tune detections; repeat until detected."
      },
      {
       "title": "Report",
       "text": "Coverage before and after, residual gaps with owners."
      }
     ]
    },
    {
     "type": "chart",
     "kind": "bar",
     "title": "Purple-team results by tactic (illustrative)",
     "caption": "Illustrative results matching the scenario below: 9 of 30 emulated techniques detected at first, 24 after a week of fixes and retests. Reporting by tactic shows where the remaining blind spots are.",
     "labels": [
      "Initial access",
      "Execution",
      "Persistence",
      "Priv. escalation",
      "Lateral movement",
      "Impact"
     ],
     "series": [
      {
       "name": "Techniques tested",
       "values": [
        5,
        5,
        5,
        5,
        5,
        5
       ]
      },
      {
       "name": "Detected before",
       "values": [
        2,
        1,
        1,
        2,
        1,
        2
       ]
      },
      {
       "name": "Detected after retest",
       "values": [
        4,
        4,
        3,
        4,
        4,
        5
       ]
      }
     ],
     "yLabel": "Techniques"
    },
    {
     "type": "scenario",
     "title": "A wall of green",
     "situation": "A SOC dashboard shows 85% coverage of a public technique matrix because rules exist for most techniques. A purple-team exercise then detects only 9 of 30 emulated techniques used by a priority ransomware group. What should the SOC manager report to the CISO?",
     "options": [
      {
       "text": "That validated detection is 30% for the priority threat, with a plan to fix the missed techniques and to report validated coverage instead of rule counts.",
       "feedback": "Best. It replaces a misleading paper metric with tested evidence and a remediation plan.",
       "best": true
      },
      {
       "text": "That coverage is 85% and the exercise was unrealistic.",
       "feedback": "Dismissing tested evidence in favour of paper coverage misleads leadership.",
       "best": false
      },
      {
       "text": "That the SOC needs a new SIEM platform.",
       "feedback": "The gap is in detection logic and data, not proven to be the platform.",
       "best": false
      },
      {
       "text": "That results should be kept within the SOC to avoid alarming executives.",
       "feedback": "Hiding material control weaknesses undermines governance.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Detection use-case register",
     "purpose": "Track each detection from priority technique to validated status and owner.",
     "columns": [
      "ID",
      "Technique theme",
      "Threat groups",
      "Data sources",
      "Last validated",
      "Precision",
      "Owner"
     ],
     "example": [
      [
       "DET-0142",
       "Inhibit system recovery (backup deletion)",
       "Ransomware groups A and C",
       "Endpoint process logs",
       "12 May, detected in 2 minutes",
       "92%",
       "Detection engineer 2"
      ]
     ],
     "rows": 8
    },
    {
     "type": "reflection",
     "prompt": "Which three attacker techniques would hurt your organisation most if they went undetected for a week? When were detections for them last tested?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Detection engineering",
       "def": "The discipline of designing, building, testing and maintaining threat detections as managed products."
      },
      {
       "term": "Detection as code",
       "def": "Managing detection rules in version control with review, testing and automated deployment."
      },
      {
       "term": "Use case",
       "def": "A defined detection scenario linking a threat behaviour to data, logic, response and owner."
      },
      {
       "term": "Purple teaming",
       "def": "Collaborative exercises in which attackers and defenders test and improve detections together."
      },
      {
       "term": "Adversary emulation",
       "def": "Reproducing the known behaviour of a specific threat group to test defences."
      },
      {
       "term": "Precision",
       "def": "The share of alerts from a detection that are true positives."
      },
      {
       "term": "False positive",
       "def": "An alert that fires on benign activity."
      },
      {
       "term": "Validated coverage",
       "def": "The share of priority techniques shown by testing to be detected."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Treat detections as products: designed for specific threats, version-controlled, tested, tuned and retired.",
      "Validated detection from emulated attacks is the honest measure; rule counts and paper coverage mislead.",
      "Purple teaming against priority techniques improves detection quickly and shows remaining gaps by tactic.",
      "Track precision so that noisy rules do not consume analyst time."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "What is the most honest measure of detection capability?",
       "options": [
        "Validated detection rate from emulated attacks",
        "The number of rules installed in the SIEM, including disabled vendor defaults",
        "The size of log storage",
        "The number of analysts"
       ],
       "answer": 0,
       "explain": "Testing shows what is actually detected; rule counts do not."
      },
      {
       "q": "What is purple teaming?",
       "options": [
        "A red team test kept secret from defenders until the final report is delivered",
        "A compliance audit",
        "Attackers and defenders testing and improving detections together",
        "A vendor product evaluation"
       ],
       "answer": 2,
       "explain": "Purple teaming is collaborative and focused on improving detection."
      },
      {
       "q": "A rule raised 400 alerts last month and 8 were true positives. What is its precision?",
       "options": [
        "8%",
        "20%",
        "50%",
        "2%"
       ],
       "answer": 3,
       "explain": "8 ÷ 400 = 0.02, or 2%."
      },
      {
       "q": "Why manage detections as code?",
       "options": [
        "Because SIEM platforms cannot accept any rules that are written through the user interface",
        "To hide rules from auditors",
        "For review, testing, version control and repeatable deployment",
        "To avoid documentation"
       ],
       "answer": 2,
       "explain": "Code practices bring quality control to detection logic."
      },
      {
       "q": "Where should detection engineering priorities come from?",
       "options": [
        "Whatever rules the SIEM vendor shipped with the most recent product release",
        "Techniques used by the most relevant threat groups",
        "Alphabetical order of techniques",
        "Random selection"
       ],
       "answer": 1,
       "explain": "Threat-informed priorities focus effort on likely attacks."
      }
     ]
    }
   ]
  },
  {
   "id": "m6-l3",
   "title": "Incident Response Governance",
   "subtitle": "Decision rights, playbooks and evidence before the crisis, not during it",
   "minutes": 40,
   "objectives": [
    "Design an incident response plan with clear roles, severity levels and decision rights",
    "Build playbooks for the most likely high-impact incidents",
    "Manage evidence, legal considerations and lessons learned"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Incident response is where governance meets reality at speed. Technical skill matters, but most failures in major incidents are failures of decision-making: nobody knew who could take a payment system offline, legal joined too late, regulators heard from journalists first. An **incident response plan** sets these decisions in advance so that people can act within minutes."
    },
    {
     "type": "flow",
     "title": "Incident response phases",
     "items": [
      {
       "label": "Prepare",
       "text": "Plan, roles, tools, playbooks, exercises"
      },
      {
       "label": "Detect and analyse",
       "text": "Triage, scope, severity"
      },
      {
       "label": "Contain",
       "text": "Stop spread; preserve evidence"
      },
      {
       "label": "Eradicate",
       "text": "Remove attacker access and tools"
      },
      {
       "label": "Recover",
       "text": "Restore services safely; monitor"
      },
      {
       "label": "Learn",
       "text": "Review, improve controls and plans"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Severity",
      "Example",
      "Incident lead",
      "Who decides business-impacting containment",
      "Notify"
     ],
     "rows": [
      [
       "SEV1 Critical",
       "Ransomware spreading; payment fraud in progress",
       "Head of incident response",
       "COO or delegate within 30 minutes",
       "CEO, CISO, legal, regulator assessment"
      ],
      [
       "SEV2 High",
       "Confirmed compromise of a server with sensitive data",
       "SOC manager",
       "Service owner",
       "CISO, legal, privacy"
      ],
      [
       "SEV3 Medium",
       "Malware on one laptop, contained",
       "Duty analyst",
       "Pre-approved actions",
       "SOC manager"
      ],
      [
       "SEV4 Low",
       "Blocked phishing campaign",
       "Duty analyst",
       "Not needed",
       "Weekly report"
      ]
     ],
     "title": "Severity levels with decision rights"
    },
    {
     "type": "sequence",
     "title": "SEV1 escalation with decision rights",
     "actors": [
      "SOC analyst",
      "Incident lead",
      "Executive on call",
      "Legal and comms",
      "Regulator"
     ],
     "caption": "The plan names who decides and how fast. Containment that halts revenue needs an accountable executive within minutes, while legal and communications start the notification clock in parallel.",
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "Ransomware heading for payments: SEV1"
      },
      {
       "from": 1,
       "to": 1,
       "label": "Open bridge; start decision log"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Isolate payment cluster? Halts payments"
      },
      {
       "from": 2,
       "to": 1,
       "label": "Approved within 30 minutes",
       "reply": true
      },
      {
       "from": 1,
       "to": 0,
       "label": "Run isolation playbook"
      },
      {
       "from": 1,
       "to": 3,
       "label": "Assess notifications; draft statement"
      },
      {
       "from": 3,
       "to": 4,
       "label": "Initial notification by the deadline"
      },
      {
       "from": 2,
       "to": 2,
       "label": "Convene crisis team if impact grows"
      }
     ]
    },
    {
     "type": "case",
     "title": "The 2016 central bank payment heist",
     "context": "In February 2016 attackers who had been inside Bangladesh Bank's network for weeks used its SWIFT payment messaging access to send dozens of fraudulent transfer instructions, worth nearly US$1 billion, to the bank's account at the Federal Reserve Bank of New York. Most were blocked, but about US$81 million reached accounts in the Philippines and was largely laundered through casinos; a further US$20 million sent to Sri Lanka was stopped and recovered. Malware had been used to hide transaction confirmations, and the timing exploited weekends and holidays across time zones, delaying detection and cross-border response.",
     "questions": [
      "Which preventive and detective weaknesses allowed the attack to succeed?",
      "What incident response governance problems made recovery harder?",
      "What should a payments organisation in South Asia put in place today as a result?"
     ],
     "answer": "Weaknesses included insufficient segmentation and hardening of the payment environment, compromised operator credentials, and no independent, out-of-band reconciliation that would reveal hidden confirmations. Response was slowed by weekend and holiday timing across countries, unclear escalation paths with correspondent banks and the time needed to coordinate legal action. Today a payments organisation should isolate payment systems in a protected zone with phishing-resistant MFA and privileged access controls, reconcile payment messages independently and in near real time, monitor 24x7 including weekends, pre-agree emergency contacts and procedures with correspondent banks and regulators, and exercise payment-fraud playbooks regularly. The industry also strengthened customer security controls for payment messaging in response."
    },
    {
     "type": "timeline",
     "title": "How timing shaped the 2016 heist",
     "caption": "Every gap in the timeline is a governance lesson: weekends and holidays in different countries delayed discovery and recall, which is why payment monitoring and correspondent contacts must work round the clock.",
     "items": [
      {
       "when": "Weeks before",
       "label": "Undetected access",
       "text": "Attackers study payment operations and obtain operator credentials"
      },
      {
       "when": "4 Feb 2016",
       "label": "Fraudulent instructions",
       "text": "Dozens of payment messages worth nearly US$1 billion sent on a Thursday night"
      },
      {
       "when": "5-6 Feb",
       "label": "Bangladesh weekend",
       "text": "Malware suppresses confirmations; discovery is delayed"
      },
      {
       "when": "8 Feb",
       "label": "Holiday in the Philippines",
       "text": "Recall requests reach receiving banks slowly"
      },
      {
       "when": "Outcome",
       "label": "About US$81 million lost",
       "text": "Most transfers blocked; US$20 million sent to Sri Lanka recovered"
      }
     ]
    },
    {
     "type": "framework",
     "title": "Playbooks every organisation should have",
     "items": [
      {
       "label": "PB1",
       "title": "Ransomware",
       "text": "Isolation strategy, backup protection, decision on shutting down, extortion handling."
      },
      {
       "label": "PB2",
       "title": "Business email compromise",
       "text": "Payment recall, mailbox investigation, partner notification."
      },
      {
       "label": "PB3",
       "title": "Data breach",
       "text": "Scoping, legal privilege, notifications, customer support."
      },
      {
       "label": "PB4",
       "title": "Cloud account compromise",
       "text": "Key revocation, resource audit, provider engagement."
      },
      {
       "label": "PB5",
       "title": "Insider misuse",
       "text": "HR and legal coordination, evidence handling, discreet investigation."
      },
      {
       "label": "PB6",
       "title": "Supplier compromise",
       "text": "Integration shutdown, joint investigation, contract levers."
      }
     ]
    },
    {
     "type": "keypoints",
     "items": [
      "Involve legal counsel early; in some jurisdictions this can protect investigation reports",
      "Preserve volatile evidence (memory, active connections) before rebuilding systems",
      "Keep a timestamped log of decisions and actions taken",
      "Maintain chain of custody for evidence that may be used in court or by regulators",
      "Know which incidents must be reported to police, regulators or national CERTs and within what time",
      "Use out-of-band communication if corporate email or chat may be compromised"
     ],
     "title": "Evidence and legal considerations"
    },
    {
     "type": "scenario",
     "title": "Who can pull the plug?",
     "situation": "At 1 a.m. the SOC of an MFS provider sees ransomware spreading from a file server towards the transaction-processing cluster. Isolating the cluster will halt all customer payments. The on-call engineer cannot reach the CTO. What should the incident response plan have defined?",
     "options": [
      {
       "text": "That the engineer always waits for the CTO.",
       "feedback": "Waiting allows ransomware to reach the core system.",
       "best": false
      },
      {
       "text": "That the SOC may isolate any system at any time without consulting the business.",
       "feedback": "Unlimited authority can cause unnecessary outages; criteria and accountable approval are needed.",
       "best": false
      },
      {
       "text": "A named, reachable decision-maker and deputy for SEV1 business-impacting containment, with pre-agreed criteria for isolation.",
       "feedback": "Best. Decision rights and criteria set in advance allow fast, authorised action at 1 a.m.",
       "best": true
      },
      {
       "text": "That containment decisions are made at the next morning's stand-up.",
       "feedback": "Far too slow for a spreading SEV1 incident.",
       "best": false
      }
     ]
    },
    {
     "type": "checklist",
     "title": "Incident response readiness",
     "items": [
      "Approved plan with severity levels and decision rights",
      "Contact sheet with deputies, including out-of-hours and out-of-band channels",
      "Playbooks for the top six incident types",
      "Retainers in place for forensics, legal and crisis communications",
      "Regulatory and contractual notification matrix",
      "Evidence collection tools and trained staff",
      "Exercises held at least twice a year, including executives",
      "Lessons-learned process with tracked actions"
     ]
    },
    {
     "type": "reflection",
     "prompt": "When did your organisation last practise an incident with the executives who would make the real decisions? What decision took the longest?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Incident response plan",
       "def": "The documented approach, roles and decision rights for handling security incidents."
      },
      {
       "term": "Playbook",
       "def": "Step-by-step guidance for responding to a specific type of incident."
      },
      {
       "term": "Severity level",
       "def": "A classification of incident impact that drives escalation, decision rights and notification."
      },
      {
       "term": "Containment",
       "def": "Actions that stop an incident from spreading or causing further harm."
      },
      {
       "term": "Eradication",
       "def": "Removing the attacker's access, tools and persistence from the environment."
      },
      {
       "term": "Chain of custody",
       "def": "The documented handling of evidence from collection to presentation, proving it was not altered."
      },
      {
       "term": "Out-of-band communication",
       "def": "Communication channels separate from potentially compromised corporate systems."
      },
      {
       "term": "Lessons learned",
       "def": "A structured post-incident review that produces tracked improvements."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Most major-incident failures are decision failures; set severity levels, decision rights and deputies in advance.",
      "Maintain playbooks for the likeliest high-impact incidents and exercise them with the real decision-makers.",
      "Involve counsel early, preserve evidence with chain of custody and keep a timestamped decision log.",
      "Use out-of-band channels when attackers may be reading corporate email or chat."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which incident response phase includes removing attacker persistence?",
       "options": [
        "Containment",
        "Detection",
        "Preparation",
        "Eradication"
       ],
       "answer": 3,
       "explain": "Eradication removes access and tools after containment."
      },
      {
       "q": "Why use out-of-band communication during some incidents?",
       "options": [
        "Attackers may be monitoring corporate email or chat",
        "It is cheaper than using corporate email during normal working hours",
        "Regulators require personal phones",
        "It avoids documentation"
       ],
       "answer": 0,
       "explain": "If systems are compromised, attackers can read response plans."
      },
      {
       "q": "What is chain of custody for?",
       "options": [
        "Tracking which supplier delivered the forensic laptops and when they were paid",
        "Assigning severity",
        "Choosing playbooks",
        "Proving evidence was not altered between collection and use"
       ],
       "answer": 3,
       "explain": "Chain of custody preserves evidential integrity."
      },
      {
       "q": "What lesson from the 2016 central bank heist relates directly to monitoring?",
       "options": [
        "Payment messages need independent, round-the-clock reconciliation including weekends",
        "Payment systems should be connected to the general office network for easier access",
        "Banks should avoid using correspondent accounts",
        "Incidents should only be reported after funds are recovered"
       ],
       "answer": 0,
       "explain": "Hidden confirmations and weekend timing delayed detection."
      },
      {
       "q": "Who should normally approve isolating a revenue-critical system during a SEV1 incident?",
       "options": [
        "Any analyst on shift, at their own discretion and without informing anyone",
        "The external forensics firm",
        "A pre-designated executive decision-maker or deputy",
        "The regulator"
       ],
       "answer": 2,
       "explain": "Business-impacting decisions need pre-agreed, accountable authority."
      }
     ]
    }
   ]
  },
  {
   "id": "m6-l4",
   "title": "Vulnerability and Exposure Management",
   "subtitle": "From endless patch lists to risk-based exposure reduction",
   "minutes": 35,
   "objectives": [
    "Prioritise vulnerabilities using severity, exploitation evidence and asset context",
    "Set remediation SLAs and an exception route that the business accepts",
    "Run a continuous threat exposure management cycle"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Organisations face tens of thousands of new published vulnerabilities each year, and large estates can show millions of open findings. Trying to fix everything by CVSS score alone is impossible and misdirects effort. **Risk-based vulnerability management** focuses on what attackers actually exploit, on assets that matter, and on exposure, not just software flaws."
    },
    {
     "type": "table",
     "head": [
      "Signal",
      "What it tells you",
      "Limitation"
     ],
     "rows": [
      [
       "CVSS base score (v3.1 or v4.0)",
       "Technical severity of the flaw in general",
       "Ignores whether it is exploited and your context"
      ],
      [
       "EPSS",
       "Estimated probability of exploitation activity in the next 30 days",
       "A model; changes over time"
      ],
      [
       "Known-exploited lists (such as CISA KEV)",
       "Confirmed exploitation in the wild",
       "Lags new campaigns; not exhaustive"
      ],
      [
       "Asset criticality and exposure",
       "Internet-facing, crown-jewel, reachable from untrusted zones",
       "Needs an accurate asset inventory"
      ],
      [
       "Compensating controls",
       "Whether the flaw is reachable or mitigated",
       "Must be verified, not assumed"
      ]
     ],
     "title": "Prioritisation signals"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Only a small fraction of published vulnerabilities are ever seen exploited in the wild. Combining exploitation evidence with asset exposure can cut the 'must fix now' list dramatically while reducing more real risk than fixing by CVSS alone.",
     "title": "Most vulnerabilities are never exploited"
    },
    {
     "type": "callout",
     "kind": "warning",
     "title": "Do not depend on a single feed",
     "text": "Public vulnerability data is less complete than many teams assume. Since 2024 the main US national vulnerability database has carried a large backlog of records awaiting enrichment, and in 2025 the CVE programme itself went through a funding scare. Combine several sources, such as vendor advisories, known-exploited catalogues, EPSS and national CERT alerts, with your own asset context."
    },
    {
     "type": "table",
     "head": [
      "Category",
      "Definition",
      "Target"
     ],
     "rows": [
      [
       "Emergency",
       "Known exploited and internet-facing or crown-jewel",
       "72 hours or mitigate"
      ],
      [
       "High",
       "High EPSS or critical CVSS on exposed asset",
       "14 days"
      ],
      [
       "Medium",
       "Critical or high on internal asset without exploitation evidence",
       "30 to 60 days"
      ],
      [
       "Low",
       "Everything else",
       "Next maintenance cycle"
      ]
     ],
     "title": "Example remediation SLAs"
    },
    {
     "type": "matrix",
     "title": "Prioritising by exploitation and exposure",
     "x": "Exploitation evidence (EPSS, known-exploited)",
     "y": "Asset exposure and criticality",
     "caption": "The two signals that matter most place a finding in a quadrant, and the quadrant sets the SLA from the table above. CVSS refines the order inside each quadrant; it does not replace these axes.",
     "quadrants": [
      {
       "title": "High: 14 days",
       "items": [
        "Internet-facing or crown jewel",
        "No exploitation seen yet",
        "Watch for status change"
       ]
      },
      {
       "title": "Emergency: 72 hours",
       "items": [
        "Known exploited on exposed asset",
        "Patch or mitigate now"
       ]
      },
      {
       "title": "Low: next cycle",
       "items": [
        "Internal, low value",
        "No exploitation evidence"
       ]
      },
      {
       "title": "Medium: 30-60 days",
       "items": [
        "Exploited elsewhere, internal asset",
        "Verify reachability and controls"
       ]
      }
     ]
    },
    {
     "type": "formula",
     "title": "Vulnerability management metrics",
     "items": [
      {
       "name": "SLA compliance",
       "expr": "SLA% = vulnerabilities fixed within SLA ÷ vulnerabilities due in period × 100",
       "meaning": "Shows discipline; report by category and owner."
      },
      {
       "name": "Mean time to remediate",
       "expr": "MTTR = Σ (fix date − discovery date) ÷ number fixed",
       "meaning": "Track separately for emergency and high categories."
      },
      {
       "name": "Exposure window",
       "expr": "Days a known-exploited flaw stays open on internet-facing assets",
       "meaning": "The metric attackers care about."
      },
      {
       "name": "Risk burn-down",
       "expr": "Σ risk score of open findings over time",
       "meaning": "Shows whether exposure is falling, not just ticket counts."
      }
     ]
    },
    {
     "type": "cycle",
     "title": "Continuous threat exposure management (CTEM)",
     "center": "Exposure falls",
     "caption": "CTEM is a loop: each cycle rescopes to what matters now and proves that attack paths are really closed before declaring success.",
     "items": [
      {
       "label": "Scope",
       "text": "Attack surfaces that matter to the business"
      },
      {
       "label": "Discover",
       "text": "Assets, flaws, misconfigurations, identity exposures"
      },
      {
       "label": "Prioritise",
       "text": "Exploitability, impact, control coverage"
      },
      {
       "label": "Validate",
       "text": "Test whether attack paths really work"
      },
      {
       "label": "Mobilise",
       "text": "Agree fixes with owners and track them"
      }
     ]
    },
    {
     "type": "scenario",
     "title": "Patch everything critical?",
     "situation": "A telecom operator's scanner shows 41,000 'critical' CVSS findings. Infrastructure teams say they can patch about 3,000 per month. The CIO wants all criticals closed this quarter. What should the CISO propose?",
     "options": [
      {
       "text": "Patch in CVSS order until the quarter ends.",
       "feedback": "CVSS alone ignores exploitation evidence and asset context, so effort goes to low-risk items.",
       "best": false
      },
      {
       "text": "Accept all criticals as a risk until a new patching tool arrives.",
       "feedback": "Blanket acceptance leaves exploited flaws open.",
       "best": false
      },
      {
       "text": "Ask the vendor to lower CVSS scores.",
       "feedback": "Changing scores does not change risk.",
       "best": false
      },
      {
       "text": "Prioritise known-exploited and high-EPSS flaws on internet-facing and crown-jewel assets first, with clear SLAs and reported risk burn-down.",
       "feedback": "Best. It targets the vulnerabilities that attackers actually use on assets that matter, within real capacity.",
       "best": true
      }
     ]
    },
    {
     "type": "template",
     "title": "Vulnerability exception request",
     "purpose": "Request a time-limited exception to a remediation SLA with compensating controls.",
     "columns": [
      "Finding",
      "Asset and exposure",
      "Reason fix is delayed",
      "Compensating controls",
      "Proposed date",
      "Risk owner approval"
     ],
     "example": [
      [
       "Remote code execution in VPN appliance firmware",
       "Internet-facing VPN, 900 users",
       "Vendor patch breaks MFA integration",
       "Restrict source IPs, enhanced monitoring, virtual patch on WAF",
       "Within 10 days",
       "Head of infrastructure, CISO consulted"
      ]
     ],
     "rows": 6
    },
    {
     "type": "reflection",
     "prompt": "What share of your organisation's open critical findings are on internet-facing systems with known exploitation? Can you get that number in under an hour?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "CVSS",
       "def": "Common Vulnerability Scoring System: a standard for rating the technical severity of vulnerabilities."
      },
      {
       "term": "EPSS",
       "def": "Exploit Prediction Scoring System: a model estimating the probability that a vulnerability will be exploited soon."
      },
      {
       "term": "Known exploited vulnerability",
       "def": "A vulnerability with reliable evidence of active exploitation in the wild."
      },
      {
       "term": "Risk-based vulnerability management",
       "def": "Prioritising remediation by exploitation likelihood, asset value and exposure rather than severity alone."
      },
      {
       "term": "Remediation SLA",
       "def": "The agreed maximum time to fix or mitigate a vulnerability of a given category."
      },
      {
       "term": "CTEM",
       "def": "Continuous threat exposure management: a cycle of scoping, discovering, prioritising, validating and mobilising fixes."
      },
      {
       "term": "Virtual patch",
       "def": "A temporary control, such as a WAF or IPS rule, that blocks exploitation until a fix is applied."
      },
      {
       "term": "Attack surface",
       "def": "All the points where an attacker could try to enter or extract data from an environment."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "CVSS measures technical severity; exploitation evidence and asset exposure decide priority.",
      "Set SLAs by category, with a time-limited exception route and verified compensating controls.",
      "Report risk burn-down and exposure windows, not only ticket counts.",
      "Run exposure management as a continuous cycle and combine several vulnerability data sources."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which signal most directly shows a vulnerability is being used by attackers now?",
       "options": [
        "A CVSS base score of 9.8 assigned when the flaw was first published",
        "Listing on a known-exploited vulnerabilities catalogue",
        "The age of the vulnerability",
        "Vendor name"
       ],
       "answer": 1,
       "explain": "Known-exploited lists record confirmed exploitation."
      },
      {
       "q": "What does EPSS estimate?",
       "options": [
        "The cost of patching each affected system across the estate",
        "Technical severity",
        "The probability of exploitation activity in the near future",
        "Number of affected vendors"
       ],
       "answer": 2,
       "explain": "EPSS is a probability model for exploitation."
      },
      {
       "q": "43 of 50 high-category vulnerabilities due this month were fixed within SLA. What is SLA compliance?",
       "options": [
        "43%",
        "86%",
        "93%",
        "50%"
       ],
       "answer": 1,
       "explain": "43 ÷ 50 = 0.86."
      },
      {
       "q": "Which CTEM stage tests whether an attack path really works?",
       "options": [
        "Validate",
        "Scope",
        "Discover",
        "Mobilise"
       ],
       "answer": 0,
       "explain": "Validation confirms exploitability before mobilising effort."
      },
      {
       "q": "What is a virtual patch?",
       "options": [
        "A patch that only exists in the vendor's release notes but is never actually shipped",
        "A patch for virtual machines",
        "A permanent replacement for patching",
        "A temporary blocking control until the real fix is applied"
       ],
       "answer": 3,
       "explain": "Virtual patches mitigate exposure temporarily."
      }
     ]
    }
   ]
  },
  {
   "id": "m6-l5",
   "title": "Security Metrics, KPIs and KRIs",
   "subtitle": "Measuring what matters to decisions, not what is easy to count",
   "minutes": 35,
   "objectives": [
    "Distinguish activity metrics, KPIs and KRIs and when each is useful",
    "Design metrics with clear definitions, owners, targets and thresholds",
    "Build a metrics hierarchy from operations to the board"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Security teams generate endless numbers: blocked emails, scanned hosts, closed tickets. Few of these help anyone decide anything. Good metrics answer a question someone needs answered: are we getting better, are we within appetite, where should we invest? An expert leader curates a small set of meaningful measures and retires the rest."
    },
    {
     "type": "compare",
     "title": "Three kinds of measures",
     "columns": [
      {
       "title": "Activity metrics",
       "items": [
        "Counts of work done: alerts handled, scans run, trainings delivered",
        "Useful for team management",
        "Say little about risk"
       ]
      },
      {
       "title": "Key performance indicators (KPIs)",
       "items": [
        "How well a process performs against a target",
        "Example: 95% of emergency vulnerabilities fixed in 72 hours",
        "Drive operational improvement"
       ]
      },
      {
       "title": "Key risk indicators (KRIs)",
       "items": [
        "Signals that exposure is rising towards tolerance",
        "Example: number of internet-facing assets with known-exploited flaws open beyond 7 days",
        "Drive governance decisions"
       ]
      }
     ]
    },
    {
     "type": "framework",
     "title": "Qualities of a good security metric",
     "items": [
      {
       "label": "M1",
       "title": "Decision-linked",
       "text": "Someone will act differently depending on the value."
      },
      {
       "label": "M2",
       "title": "Clearly defined",
       "text": "Exact formula, data source, scope and frequency are written down."
      },
      {
       "label": "M3",
       "title": "Owned",
       "text": "A named owner explains movements and leads action."
      },
      {
       "label": "M4",
       "title": "Targeted",
       "text": "A target or threshold shows what good and bad look like."
      },
      {
       "label": "M5",
       "title": "Trended",
       "text": "Shown over time, not as a single snapshot."
      },
      {
       "label": "M6",
       "title": "Hard to game",
       "text": "Improving the number requires improving the reality."
      }
     ]
    },
    {
     "type": "formula",
     "title": "Useful operational formulas",
     "items": [
      {
       "name": "Mean time to detect",
       "expr": "MTTD = Σ (detection time − compromise start) ÷ incidents",
       "meaning": "From investigation timelines; shows dwell time."
      },
      {
       "name": "Mean time to contain",
       "expr": "MTTC = Σ (containment time − detection time) ÷ incidents",
       "meaning": "Shows response speed once alerted."
      },
      {
       "name": "Phishing resilience",
       "expr": "Report rate = reports ÷ simulated emails delivered; Click rate = clicks ÷ delivered",
       "meaning": "Report rate rising matters more than click rate falling."
      },
      {
       "name": "Control coverage",
       "expr": "Coverage = assets with control active ÷ assets in scope × 100",
       "meaning": "Requires an accurate inventory as the denominator."
      },
      {
       "name": "Privileged MFA coverage",
       "expr": "Phishing-resistant MFA privileged accounts ÷ all privileged accounts × 100",
       "meaning": "A strong KRI for credential-based attack risk."
      }
     ]
    },
    {
     "type": "layers",
     "title": "A metrics hierarchy",
     "items": [
      {
       "label": "Board",
       "parts": [
        "5 to 8 KRIs against appetite",
        "Top risks and trend",
        "Major incidents and lessons"
       ]
      },
      {
       "label": "Executive committee",
       "parts": [
        "KRIs by business unit",
        "Programme milestones and budget",
        "Exceptions and accepted risks"
       ]
      },
      {
       "label": "CISO and domain owners",
       "parts": [
        "KPIs per control area",
        "SLA compliance and backlogs"
       ]
      },
      {
       "label": "Operational teams",
       "parts": [
        "Activity and quality metrics",
        "Daily queues and health"
       ]
      }
     ]
    },
    {
     "type": "tree",
     "title": "One board KRI and the measures beneath it",
     "caption": "Each level explains the one above: when the board KRI moves, owners can point to the KPI that moved it and the activity that moved the KPI.",
     "root": {
      "label": "KRI: critical services restorable within tolerance",
      "text": "Board, against appetite",
      "children": [
       {
        "label": "KPI: restore tests passed in 90 days",
        "text": "CISO and service owners",
        "children": [
         {
          "label": "Restore tests run"
         },
         {
          "label": "Business validation completed"
         }
        ]
       },
       {
        "label": "KPI: immutable copy coverage",
        "text": "Infrastructure lead",
        "children": [
         {
          "label": "Systems onboarded to vault"
         },
         {
          "label": "Backup jobs succeeded"
         }
        ]
       },
       {
        "label": "KPI: backup admins on phishing-resistant MFA",
        "text": "IAM lead",
        "children": [
         {
          "label": "Admin accounts reviewed"
         }
        ]
       }
      ]
     }
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "A 'watermelon' dashboard is green outside and red inside: every KPI meets target because targets are too easy, scope excludes difficult systems or the denominator is wrong. A coverage figure of 98% is meaningless if the asset inventory misses a third of the estate. Audit your own metrics before others do.",
     "title": "Watermelon metrics"
    },
    {
     "type": "chart",
     "kind": "line",
     "title": "A KRI trend against its threshold (illustrative)",
     "unit": "%",
     "yLabel": "Privileged accounts",
     "caption": "Illustrative data. The board sees direction and distance to target at a glance: coverage of phishing-resistant MFA for privileged accounts crossed the 90% threshold only in the sixth quarter.",
     "labels": [
      "Q1",
      "Q2",
      "Q3",
      "Q4",
      "Q5",
      "Q6"
     ],
     "series": [
      {
       "name": "Phishing-resistant MFA coverage",
       "values": [
        42,
        55,
        63,
        71,
        84,
        92
       ]
      },
      {
       "name": "Threshold",
       "values": [
        90,
        90,
        90,
        90,
        90,
        90
       ]
      }
     ]
    },
    {
     "type": "scenario",
     "title": "Choosing a board KRI",
     "situation": "A hospital group's CISO must pick one KRI for the board on ransomware readiness. Which is the MOST useful?",
     "options": [
      {
       "text": "Number of malware samples blocked last quarter.",
       "feedback": "An activity count that rises and falls with attacker volume and says nothing about readiness.",
       "best": false
      },
      {
       "text": "Percentage of critical clinical systems with immutable backups restored successfully in a test within the last 90 days.",
       "feedback": "Best. It is outcome-focused, tied directly to recovery from ransomware and hard to game.",
       "best": true
      },
      {
       "text": "Number of staff who completed security training.",
       "feedback": "Useful for compliance but weakly related to recovery capability.",
       "best": false
      },
      {
       "text": "Count of firewall rules reviewed.",
       "feedback": "An activity measure without a clear link to ransomware outcomes.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Metric definition card",
     "purpose": "Define a metric precisely so that it is consistent, owned and actionable.",
     "columns": [
      "Metric",
      "Question answered",
      "Formula and data source",
      "Owner",
      "Target / threshold",
      "Frequency",
      "Action if breached"
     ],
     "example": [
      [
       "Known-exploited exposure window",
       "Are we closing doors attackers are using?",
       "Median days open for KEV-listed flaws on internet-facing assets; scanner + CMDB",
       "Head of infrastructure",
       "≤ 3 days / > 7 days red",
       "Weekly; board quarterly",
       "Escalate to CIO; emergency change window"
      ]
     ],
     "rows": 8
    },
    {
     "type": "reflection",
     "prompt": "Look at the security metrics your leadership currently receives. Which one would you remove, and which missing measure would change a real decision?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "KPI",
       "def": "Key performance indicator: a measure of how well a process performs against a target."
      },
      {
       "term": "KRI",
       "def": "Key risk indicator: a measure signalling that risk exposure is approaching tolerance."
      },
      {
       "term": "Activity metric",
       "def": "A count of work performed, useful for managing teams but weak for judging risk."
      },
      {
       "term": "MTTD",
       "def": "Mean time to detect: average time from the start of a compromise to its detection."
      },
      {
       "term": "MTTC",
       "def": "Mean time to contain: average time from detection to containment of an incident."
      },
      {
       "term": "Dwell time",
       "def": "How long an attacker remains in an environment before being detected or removed."
      },
      {
       "term": "Watermelon metric",
       "def": "A metric that looks green on dashboards while the underlying reality is poor."
      },
      {
       "term": "Denominator problem",
       "def": "Errors in the population a metric is measured against, such as an incomplete asset inventory."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Activity metrics manage teams, KPIs drive process improvement and KRIs inform governance against appetite.",
      "A good metric is decision-linked, clearly defined, owned, targeted, trended and hard to game.",
      "Check denominators: coverage figures are only as good as the asset inventory behind them.",
      "Give the board a handful of trended KRIs, each traceable to the KPIs and activities beneath it."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which is a key risk indicator rather than an activity metric?",
       "options": [
        "Number of phishing emails blocked last month by the email gateway",
        "Number of scans run",
        "Internet-facing assets with known-exploited flaws open beyond 7 days",
        "Tickets closed per analyst"
       ],
       "answer": 2,
       "explain": "The KRI signals rising exposure against a tolerance."
      },
      {
       "q": "In a phishing simulation, which trend most indicates growing resilience?",
       "options": [
        "Falling number of simulations sent each quarter",
        "Rising report rate",
        "Rising click rate",
        "Shorter emails"
       ],
       "answer": 1,
       "explain": "People reporting suspicious messages is the behaviour that enables response."
      },
      {
       "q": "Control coverage shows 98%, but the asset inventory misses a third of the estate. What is this?",
       "options": [
        "A denominator problem",
        "An excellent result that should be reported to the board immediately as a success",
        "A precision problem",
        "A KRI breach"
       ],
       "answer": 0,
       "explain": "The metric is measured against an incomplete population."
      },
      {
       "q": "What makes a metric 'decision-linked'?",
       "options": [
        "It is displayed on a large screen in the SOC so everyone can see it",
        "It is collected automatically",
        "It has many decimal places",
        "Someone will act differently depending on its value"
       ],
       "answer": 3,
       "explain": "Metrics exist to inform decisions."
      },
      {
       "q": "Which level of the metrics hierarchy should see 5 to 8 KRIs against appetite?",
       "options": [
        "The board",
        "Operational teams",
        "Individual analysts",
        "Suppliers"
       ],
       "answer": 0,
       "explain": "Boards need a few risk measures tied to appetite."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m7",
 "order": 7,
 "code": "Endure",
 "title": "Resilience, Continuity and Crisis Management",
 "subtitle": "Keep important services running through disruption and lead the organisation through crisis",
 "outcomes": [
  "Set impact tolerances and recovery objectives through business impact analysis",
  "Select continuity and DR strategies and design ransomware-resistant backups",
  "Lead crisis management with clear command, decisions and communications",
  "Prepare extortion policy and run exercises that produce lasting improvement"
 ],
 "lessons": [
  {
   "id": "m7-l1",
   "title": "Operational Resilience and Business Impact Analysis",
   "subtitle": "Deciding what must keep running, how fast it must return and what it depends on",
   "minutes": 35,
   "objectives": [
    "Identify important business services and set impact tolerances",
    "Run a business impact analysis that produces defensible recovery objectives",
    "Map the people, technology, facilities and suppliers each service depends on"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Security can reduce the chance of disruption but never remove it. Floods, power failures, cyber attacks, supplier collapse and human error will happen. **Operational resilience** is the ability to keep delivering important business services through disruption, or to recover them within tolerable limits. It shifts attention from protecting individual systems to protecting the services customers and society depend on."
    },
    {
     "type": "compare",
     "title": "Traditional continuity versus operational resilience",
     "columns": [
      {
       "title": "Traditional BCP and DR",
       "items": [
        "Starts from systems and sites",
        "Assumes disruption can be prevented or quickly fixed",
        "Plans per department",
        "Tests individual recovery steps"
       ]
      },
      {
       "title": "Operational resilience",
       "items": [
        "Starts from important business services",
        "Assumes severe but plausible disruption will happen",
        "Maps end-to-end dependencies across teams and suppliers",
        "Tests whether the service stays within impact tolerance"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "An **impact tolerance** is the maximum tolerable level of disruption to an important business service, usually expressed as a time limit, such as 'customers can make payments again within 4 hours', sometimes with volume or data limits. Several financial regulators now expect firms to set tolerances and prove they can stay within them in severe but plausible scenarios; UK firms, for example, had to be able to do so by March 2025, and the EU's DORA sets similar resilience-testing expectations.",
     "title": "Impact tolerance"
    },
    {
     "type": "table",
     "head": [
      "Term",
      "Meaning",
      "Example"
     ],
     "rows": [
      [
       "MTPD (or MTD)",
       "Maximum tolerable period of disruption before impact becomes unacceptable",
       "Hospital emergency admissions: 2 hours"
      ],
      [
       "RTO",
       "Recovery time objective: target time to restore a service or system",
       "EHR read access: 1 hour"
      ],
      [
       "RPO",
       "Recovery point objective: maximum acceptable data loss, measured in time",
       "Payment ledger: 0 to 5 minutes"
      ],
      [
       "MBCO",
       "Minimum business continuity objective: reduced service level acceptable during disruption",
       "50% of branch transactions, cash withdrawals only"
      ]
     ],
     "title": "Recovery objectives"
    },
    {
     "type": "formula",
     "title": "Consistency rules",
     "items": [
      {
       "name": "Time ordering",
       "expr": "RTO < MTPD",
       "meaning": "The recovery target must leave margin before disruption becomes intolerable."
      },
      {
       "name": "Dependency rule",
       "expr": "RTO(dependency) ≤ RTO(service) − time to restart the service on top of it",
       "meaning": "A service cannot recover faster than the systems it relies on."
      },
      {
       "name": "Data rule",
       "expr": "Backup or replication interval ≤ RPO",
       "meaning": "If you back up every 24 hours, your real RPO cannot be one hour."
      }
     ]
    },
    {
     "type": "timeline",
     "title": "Recovery objectives on one clock (illustrative)",
     "caption": "Illustrative times for a payment service. Data written after the last good copy is lost (the RPO question); the RTO target must land well before the MTPD, leaving margin for detection and decision time.",
     "items": [
      {
       "when": "02:00",
       "label": "Last good backup",
       "text": "Recovery point: later data must be re-entered or is lost"
      },
      {
       "when": "05:30",
       "label": "Disruption starts",
       "text": "Ransomware encrypts the ledger"
      },
      {
       "when": "06:15",
       "label": "Detected and declared",
       "text": "Detection and decision time count against the RTO"
      },
      {
       "when": "09:30",
       "label": "Service restored",
       "text": "Within a 4-hour RTO"
      },
      {
       "when": "11:30",
       "label": "MTPD reached",
       "text": "Beyond 6 hours, impact becomes intolerable"
      }
     ]
    },
    {
     "type": "steps",
     "title": "Running a business impact analysis (BIA)",
     "items": [
      {
       "title": "List services",
       "text": "Identify business services from the customer's point of view, not departments."
      },
      {
       "title": "Rate impact over time",
       "text": "Assess financial, customer, regulatory, safety and reputational impact at 1 hour, 4 hours, 1 day, 1 week."
      },
      {
       "title": "Set MTPD and MBCO",
       "text": "Find the point where impact becomes intolerable and the minimum acceptable service level."
      },
      {
       "title": "Map dependencies",
       "text": "People, sites, applications, data, third parties and utilities for each service."
      },
      {
       "title": "Derive RTO and RPO",
       "text": "Set objectives for each dependency consistent with the service tolerance."
      },
      {
       "title": "Validate and approve",
       "text": "Business owners sign off; compare with current capability to find gaps."
      }
     ]
    },
    {
     "type": "tree",
     "title": "Dependency map for one important service",
     "caption": "The service can recover no faster than its slowest dependency. Identity services, SMS gateways and the people who run recovery are the dependencies most often missing from plans.",
     "root": {
      "label": "Mobile payments",
      "text": "MTPD 6 h; MBCO: cash-out and balance checks",
      "children": [
       {
        "label": "People",
        "children": [
         {
          "label": "Payments operations"
         },
         {
          "label": "On-call engineers"
         }
        ]
       },
       {
        "label": "Technology",
        "children": [
         {
          "label": "App and API"
         },
         {
          "label": "Core ledger database"
         },
         {
          "label": "Identity service"
         }
        ]
       },
       {
        "label": "Third parties",
        "children": [
         {
          "label": "SMS gateway"
         },
         {
          "label": "Cloud hosting"
         }
        ]
       },
       {
        "label": "Facilities",
        "children": [
         {
          "label": "Primary data centre"
         }
        ]
       }
      ]
     }
    },
    {
     "type": "template",
     "title": "Business impact analysis worksheet",
     "purpose": "Capture impact over time and recovery objectives for one important business service.",
     "columns": [
      "Service",
      "Impact at 4 h",
      "Impact at 24 h",
      "MTPD",
      "RTO",
      "RPO",
      "Key dependencies"
     ],
     "example": [
      [
       "Mobile wallet transfers",
       "Customer complaints surge; regulator queries",
       "Merchants switch providers; BDT 15 crore lost revenue; possible regulatory action",
       "6 hours",
       "2 hours",
       "5 minutes",
       "Core ledger, card switch, SMS gateway, two data centres, telecom APIs"
      ]
     ],
     "rows": 8
    },
    {
     "type": "scenario",
     "title": "Recovery objectives that do not add up",
     "situation": "A hospital sets a 2-hour RTO for its electronic health record. The BIA reveals that the EHR depends on a database restored from nightly backups, which takes 9 hours to restore, and on an identity service with no recovery plan. What should the resilience lead do?",
     "options": [
      {
       "text": "Keep the 2-hour RTO in the plan because it is what clinicians need.",
       "feedback": "A target that cannot be achieved creates false confidence.",
       "best": false
      },
      {
       "text": "Change the RTO to 9 hours without telling clinicians.",
       "feedback": "Silently changing objectives removes the owner's decision and may endanger patients.",
       "best": false
      },
      {
       "text": "Ask the database team to restore faster during an incident.",
       "feedback": "Wishful thinking; restoration speed is limited by design and data volume.",
       "best": false
      },
      {
       "text": "Report the gap to the service owner and executive committee, and propose options such as a warm standby database and recovery plan for identity, or a formally accepted longer RTO with clinical downtime procedures.",
       "feedback": "Best. Objectives must be achievable or consciously accepted; the business must see the gap and the cost of closing it.",
       "best": true
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Pick the most important service your organisation delivers. Can you list every dependency that would stop it, including suppliers and utilities, within ten minutes?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Operational resilience",
       "def": "The ability to deliver important business services through disruption, or recover them within tolerable limits."
      },
      {
       "term": "Important business service",
       "def": "A service provided to external customers or users whose disruption would cause intolerable harm."
      },
      {
       "term": "Impact tolerance",
       "def": "The maximum tolerable level of disruption to an important business service, often set as a time limit."
      },
      {
       "term": "Business impact analysis",
       "def": "A process that assesses the impact of disruption over time and sets recovery priorities and objectives."
      },
      {
       "term": "MTPD",
       "def": "Maximum tolerable period of disruption: the time after which impact becomes unacceptable."
      },
      {
       "term": "RTO",
       "def": "Recovery time objective: the target time to restore a service, system or activity."
      },
      {
       "term": "RPO",
       "def": "Recovery point objective: the maximum acceptable amount of data loss, measured in time."
      },
      {
       "term": "MBCO",
       "def": "Minimum business continuity objective: the minimum acceptable service level during disruption."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Operational resilience starts from important business services seen by customers, not from systems or departments.",
      "Set impact tolerances, then derive RTO, RPO and MBCO that are consistent with them (RTO shorter than MTPD).",
      "Map people, technology, facilities and third parties; a service cannot recover faster than what it depends on.",
      "Show owners the gap between objectives and real capability so they can fund it or accept it."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which statement about RTO and MTPD is correct?",
       "options": [
        "The RTO should always be longer than the MTPD to allow for testing and validation",
        "They must be identical",
        "MTPD applies only to IT systems",
        "The RTO should be shorter than the MTPD"
       ],
       "answer": 3,
       "explain": "Recovery must complete before disruption becomes intolerable."
      },
      {
       "q": "Backups run once every 24 hours. What is the best achievable RPO from backups alone?",
       "options": [
        "Zero data loss, because the backups are encrypted and stored offsite",
        "Up to 24 hours of data loss",
        "One hour",
        "Five minutes"
       ],
       "answer": 1,
       "explain": "The backup interval limits the recovery point."
      },
      {
       "q": "Operational resilience starts its analysis from:",
       "options": [
        "The list of servers in the data centre ordered by age",
        "The org chart",
        "Important business services",
        "The insurance policy"
       ],
       "answer": 2,
       "explain": "Resilience focuses on end-to-end services delivered to customers."
      },
      {
       "q": "What does the MBCO describe?",
       "options": [
        "The minimum acceptable service level during disruption",
        "The maximum budget for continuity",
        "The number of backup copies",
        "The time to detect an incident"
       ],
       "answer": 0,
       "explain": "MBCO defines reduced but acceptable operations."
      },
      {
       "q": "Why must dependencies be mapped in a BIA?",
       "options": [
        "Mapping dependencies is required before buying any cyber insurance policy",
        "To reduce licence costs",
        "To shorten the BIA",
        "A service cannot recover faster than what it depends on"
       ],
       "answer": 3,
       "explain": "Dependencies with slower recovery make service RTOs unachievable."
      }
     ]
    }
   ]
  },
  {
   "id": "m7-l2",
   "title": "Continuity and Disaster Recovery Strategy",
   "subtitle": "Choosing recovery strategies, protecting backups and proving recovery works",
   "minutes": 35,
   "objectives": [
    "Select continuity and DR strategies proportionate to recovery objectives",
    "Design backups that survive ransomware and insider attack",
    "Plan and evaluate recovery tests that build real confidence"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Once recovery objectives are set, leaders must choose strategies that meet them at acceptable cost. Faster recovery and less data loss cost more. The art is to match strategy to the service's tolerance, then to prove through testing that it works under realistic conditions, including cyber attacks that target the recovery capability itself."
    },
    {
     "type": "table",
     "head": [
      "Strategy",
      "Typical RTO",
      "Typical RPO",
      "Relative cost",
      "Notes"
     ],
     "rows": [
      [
       "Backup and restore",
       "Hours to days",
       "Hours",
       "Low",
       "Restore time grows with data volume"
      ],
      [
       "Pilot light",
       "Hours",
       "Minutes to hours",
       "Low to medium",
       "Core components running minimally in a second site or cloud"
      ],
      [
       "Warm standby",
       "Minutes to an hour",
       "Minutes",
       "Medium to high",
       "Scaled-down full environment kept running"
      ],
      [
       "Active-active",
       "Near zero",
       "Near zero",
       "High",
       "Both sites serve traffic; design complexity and shared failure risk"
      ]
     ],
     "title": "DR strategy options"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Real-time replication copies corruption and encryption as faithfully as good data. Ransomware or a destructive insider will happily destroy both sites of an active-active pair. You still need isolated, immutable, point-in-time copies.",
     "title": "Replication is not backup"
    },
    {
     "type": "framework",
     "title": "The 3-2-1-1-0 backup rule",
     "items": [
      {
       "label": "3",
       "title": "Three copies",
       "text": "Production data plus at least two backups."
      },
      {
       "label": "2",
       "title": "Two media types",
       "text": "For example disk and object storage, or disk and tape."
      },
      {
       "label": "1",
       "title": "One off-site",
       "text": "At least one copy in a different location."
      },
      {
       "label": "1",
       "title": "One immutable or offline",
       "text": "At least one copy that cannot be altered or deleted, even by administrators, for the retention period."
      },
      {
       "label": "0",
       "title": "Zero errors",
       "text": "Backups verified by automated restore tests with no errors."
      }
     ]
    },
    {
     "type": "keypoints",
     "items": [
      "Separate backup administration identities from the main directory, with phishing-resistant MFA",
      "Enable immutability or object lock with retention that admins cannot shorten",
      "Alert on deletion of backup jobs, catalogues or snapshots",
      "Keep backup infrastructure in its own network zone",
      "Protect the backup catalogue and encryption keys so restores remain possible",
      "Store recovery documentation offline as well as online"
     ],
     "title": "Protecting the backup system itself"
    },
    {
     "type": "topology",
     "title": "A ransomware-resistant backup design",
     "caption": "Stolen domain admin rights reach production but not the backups: the backup zone is outside the domain, run by separate MFA-protected identities, and holds immutable and offline copies.",
     "nodes": [
      {
       "id": "att",
       "kind": "attacker",
       "label": "Attacker",
       "sub": "Holds domain admin",
       "x": 3,
       "y": 0
      },
      {
       "id": "dir",
       "kind": "server",
       "label": "Directory",
       "sub": "Production domain",
       "x": 0,
       "y": 1
      },
      {
       "id": "prod",
       "kind": "server",
       "label": "Prod servers",
       "sub": "Domain-joined",
       "x": 6,
       "y": 1
      },
      {
       "id": "bkp",
       "kind": "server",
       "label": "Backup server",
       "sub": "Not domain-joined",
       "x": 3,
       "y": 3
      },
      {
       "id": "adm",
       "kind": "user",
       "label": "Backup admin",
       "sub": "Separate identity, FIDO2",
       "x": 6,
       "y": 4
      },
      {
       "id": "imm",
       "kind": "storage",
       "label": "Immutable store",
       "sub": "Object lock, 30 days",
       "x": 1,
       "y": 5
      },
      {
       "id": "off",
       "kind": "storage",
       "label": "Offline copy",
       "sub": "Off-site, disconnected",
       "x": 4,
       "y": 6
      }
     ],
     "zones": [
      {
       "label": "Production domain",
       "x": 0,
       "y": 1,
       "w": 7,
       "h": 1,
       "tone": "neutral"
      },
      {
       "label": "Isolated backup zone",
       "x": 1,
       "y": 3,
       "w": 6,
       "h": 4,
       "tone": "good"
      }
     ],
     "links": [
      {
       "a": "att",
       "b": "dir",
       "style": "attack",
       "label": "admin rights"
      },
      {
       "a": "att",
       "b": "prod",
       "style": "attack",
       "label": "encrypts"
      },
      {
       "a": "prod",
       "b": "bkp",
       "label": "backup traffic only"
      },
      {
       "a": "adm",
       "b": "bkp",
       "label": "MFA"
      },
      {
       "a": "bkp",
       "b": "imm",
       "label": "write once"
      },
      {
       "a": "bkp",
       "b": "off",
       "style": "dashed",
       "label": "weekly"
      }
     ]
    },
    {
     "type": "formula",
     "title": "Estimating real recovery time",
     "items": [
      {
       "name": "Recovery time",
       "expr": "T(recover) = T(detect) + T(decide) + T(prepare) + data size ÷ restore throughput + T(validate)",
       "meaning": "Most plans count only the restore step and forget detection, decision and validation."
      },
      {
       "name": "Restore example",
       "expr": "20 TB ÷ 2 TB per hour = 10 hours of copying alone",
       "meaning": "Shows why large systems may need standby rather than restore."
      },
      {
       "name": "Test pass rate",
       "expr": "Pass rate = recoveries meeting RTO and RPO in tests ÷ recoveries tested × 100",
       "meaning": "A strong KRI for resilience."
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Test",
      "What happens",
      "Confidence",
      "Disruption"
     ],
     "rows": [
      [
       "Plan review",
       "Owners read and update the plan",
       "Low",
       "None"
      ],
      [
       "Tabletop",
       "Team discusses a scenario step by step",
       "Low to medium",
       "None"
      ],
      [
       "Technical restore test",
       "Restore systems or data in isolation and validate",
       "Medium to high",
       "Low"
      ],
      [
       "Simulation",
       "Teams perform recovery actions in a realistic exercise",
       "High",
       "Low to medium"
      ],
      [
       "Failover test",
       "Production moves to the secondary site",
       "Very high",
       "Medium; needs careful planning"
      ]
     ],
     "title": "Types of continuity and recovery tests"
    },
    {
     "type": "template",
     "title": "Recovery test plan",
     "purpose": "Plan a recovery test with clear objectives, success criteria and results.",
     "columns": [
      "System or service",
      "Scenario",
      "Objective (RTO / RPO)",
      "Success criteria",
      "Participants",
      "Result",
      "Actions"
     ],
     "example": [
      [
       "Core ERP (garment group)",
       "Ransomware encrypts primary site; restore from immutable copy in second site",
       "8 h / 4 h",
       "Orders and payroll processed by test users; data within 4 h of failure point",
       "IT ops, ERP team, finance, security",
       "Restored in 11 h; payroll interface failed",
       "Automate interface reconfiguration; retest in 60 days"
      ]
     ],
     "rows": 6
    },
    {
     "type": "scenario",
     "title": "Backups that would not survive",
     "situation": "A Chattogram logistics company backs up nightly to a disk appliance joined to the main Windows domain, using a domain admin account. Copies are replicated to a second site the same way. What is the MOST important change?",
     "options": [
      {
       "text": "Increase backup frequency to every hour.",
       "feedback": "More frequent copies are still deletable by the same compromised admin.",
       "best": false
      },
      {
       "text": "Add an immutable or offline copy managed by separate, MFA-protected backup identities outside the main domain, and test restores.",
       "feedback": "Best. Ransomware actors routinely use domain admin rights to delete domain-joined backups; isolation and immutability break that path.",
       "best": true
      },
      {
       "text": "Add a third replicated site.",
       "feedback": "Another copy under the same control fails in the same way.",
       "best": false
      },
      {
       "text": "Encrypt the backups with the domain admin's key.",
       "feedback": "Encryption does not prevent deletion or encryption by an attacker who holds the same rights.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "When did your organisation last restore a critical system end to end, including validation by business users? How long did it really take?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Disaster recovery",
       "def": "The technical capability and plans to restore IT services after a disruptive event."
      },
      {
       "term": "Business continuity plan",
       "def": "A documented plan for continuing critical business activities during and after disruption."
      },
      {
       "term": "Warm standby",
       "def": "A scaled-down but running copy of the production environment ready to take over."
      },
      {
       "term": "Active-active",
       "def": "An architecture where two or more sites serve traffic simultaneously."
      },
      {
       "term": "Immutable backup",
       "def": "A backup copy that cannot be altered or deleted for a defined retention period."
      },
      {
       "term": "3-2-1-1-0 rule",
       "def": "A backup principle: three copies, two media, one off-site, one immutable or offline, zero restore errors."
      },
      {
       "term": "Failover",
       "def": "Switching service from a primary to a secondary system or site."
      },
      {
       "term": "Tabletop exercise",
       "def": "A discussion-based exercise in which participants walk through a scenario."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Match DR strategy to tolerance and cost: backup and restore, pilot light, warm standby or active-active.",
      "Replication copies corruption and encryption; keep isolated, immutable, point-in-time copies (3-2-1-1-0).",
      "Protect the backup system itself with separate identities, its own zone and alerts on deletion.",
      "Real recovery time includes detection, decision and validation; prove it with restore tests."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Why is real-time replication not a substitute for backup?",
       "options": [
        "It is always slower than nightly tape backup in a disaster",
        "Regulators forbid it",
        "It copies corruption and encryption to the replica",
        "It only works in cloud"
       ],
       "answer": 2,
       "explain": "Replication mirrors bad changes as well as good ones."
      },
      {
       "q": "A system holds 30 TB and restores at 3 TB per hour. What is the minimum copying time?",
       "options": [
        "3 hours",
        "10 hours",
        "30 hours",
        "90 hours"
       ],
       "answer": 1,
       "explain": "30 ÷ 3 = 10 hours, before detection, decisions and validation."
      },
      {
       "q": "Which test gives the most confidence with low disruption for a single system?",
       "options": [
        "A plan review in which owners confirm the document is still accurate",
        "A tabletop discussion",
        "A technical restore test with business validation",
        "Reading vendor documentation"
       ],
       "answer": 2,
       "explain": "Actually restoring and validating proves capability without moving production."
      },
      {
       "q": "What does the extra '1' in 3-2-1-1-0 add to the classic rule?",
       "options": [
        "One extra copy stored on the same server as production",
        "One additional administrator",
        "One annual test",
        "One immutable or offline copy"
       ],
       "answer": 3,
       "explain": "Immutability or offline storage protects against deletion and ransomware."
      },
      {
       "q": "Which DR strategy generally offers the lowest cost and longest RTO?",
       "options": [
        "Active-active across two regions with automatic traffic steering",
        "Backup and restore",
        "Warm standby",
        "Pilot light"
       ],
       "answer": 1,
       "explain": "Backup and restore is cheapest but slowest."
      }
     ]
    }
   ]
  },
  {
   "id": "m7-l3",
   "title": "Crisis Management and Communications",
   "subtitle": "Leading the organisation when an incident becomes a crisis",
   "minutes": 35,
   "objectives": [
    "Structure a crisis management team with strategic, tactical and operational levels",
    "Make sound decisions under uncertainty and time pressure",
    "Communicate with staff, customers, regulators and media honestly and on time"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Most security incidents are handled by technical teams. A **crisis** is different: it threatens the organisation's strategy, reputation, finances or people, attracts external attention and needs decisions at executive level. A major ransomware attack on a hospital, a breach of millions of customer records or a payment fraud wave at an MFS provider are crises. Technical response continues, but leadership must take the strategic decisions and speak for the organisation."
    },
    {
     "type": "layers",
     "title": "Crisis command structure",
     "items": [
      {
       "label": "Strategic (gold)",
       "parts": [
        "CEO or delegated executive chair",
        "Sets objectives and priorities; approves major decisions and statements"
       ]
      },
      {
       "label": "Tactical (silver)",
       "parts": [
        "Crisis manager, heads of operations, IT, security, legal, communications, HR",
        "Turns strategy into coordinated plans"
       ]
      },
      {
       "label": "Operational (bronze)",
       "parts": [
        "Incident response, IT recovery, customer service, site teams",
        "Executes actions and reports progress"
       ]
      },
      {
       "label": "Support functions",
       "parts": [
        "Logging and decision record",
        "External advisers: legal, forensics, crisis PR"
       ]
      }
     ]
    },
    {
     "type": "steps",
     "title": "A decision cycle for uncertain situations",
     "items": [
      {
       "title": "Gather facts",
       "text": "What do we know, what do we not know, what are we assuming?"
      },
      {
       "title": "Assess",
       "text": "What could happen next in the best, likely and worst cases?"
      },
      {
       "title": "Consider options",
       "text": "At least two options plus 'do nothing', with consequences."
      },
      {
       "title": "Decide",
       "text": "Choose, record the rationale and the information available at the time."
      },
      {
       "title": "Communicate",
       "text": "Tell those who must act and those who must know."
      },
      {
       "title": "Review",
       "text": "Set a time to revisit the decision as facts change."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Crises punish both paralysis and overconfidence. Record what you knew when you decided. Regulators and courts judge whether decisions were reasonable at the time, not with hindsight, and a clear decision log is the best defence.",
     "title": "Decide with the facts you have"
    },
    {
     "type": "sequence",
     "title": "From incident to crisis: the first hours",
     "actors": [
      "Incident lead",
      "Crisis manager",
      "CEO (gold)",
      "Comms lead",
      "Regulator"
     ],
     "caption": "Technical response continues underneath while gold sets objectives and approves what the organisation says. Every decision and message has an owner and a next-update time.",
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "Incident meets crisis criteria"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Convene crisis team within the hour"
      },
      {
       "from": 2,
       "to": 2,
       "label": "Set objectives: safety, service, trust"
      },
      {
       "from": 3,
       "to": 2,
       "label": "Holding statement for approval"
      },
      {
       "from": 2,
       "to": 3,
       "label": "Approved; publish with next update time",
       "reply": true
      },
      {
       "from": 1,
       "to": 4,
       "label": "Formal notification by the deadline"
      },
      {
       "from": 4,
       "to": 1,
       "label": "Request for further information",
       "reply": true
      },
      {
       "from": 0,
       "to": 1,
       "label": "Hourly situation report"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Decision paper: restore or rebuild?"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Stakeholder",
      "What they need",
      "Channel",
      "Timing"
     ],
     "rows": [
      [
       "Staff",
       "What happened, what to do and not do, what to say to customers",
       "Out-of-band messaging, briefings",
       "Early and regular"
      ],
      [
       "Customers",
       "Impact on them, what to do, how you will help",
       "Website, SMS, app notices, call centre scripts",
       "As soon as facts allow"
      ],
      [
       "Regulators",
       "Notification within required time, facts, actions, contacts",
       "Formal channels",
       "Per legal deadlines"
      ],
      [
       "Board",
       "Situation, decisions needed, exposure",
       "Briefings and decision papers",
       "Within hours, then regularly"
      ],
      [
       "Partners and suppliers",
       "Effect on shared services, actions needed",
       "Account managers, technical bridges",
       "Early if connected"
      ],
      [
       "Media and public",
       "Accurate, consistent statement",
       "Spokesperson, press release",
       "When needed; avoid speculation"
      ]
     ],
     "title": "Stakeholder communication map"
    },
    {
     "type": "template",
     "title": "Holding statement",
     "purpose": "Prepare an initial public statement that can be issued quickly, saying only what is known and what people should do.",
     "columns": [
      "Element",
      "Content",
      "Approved by",
      "Channel",
      "Next update time"
     ],
     "example": [
      [
       "What happened",
       "We are responding to a cyber security incident affecting some of our systems",
       "Crisis chair and legal",
       "Website, media",
       "18:00 today"
      ],
      [
       "What we are doing and what customers should do",
       "Services X and Y are temporarily unavailable; we never ask for PINs or passwords by phone",
       "Communications lead",
       "SMS, app, call centre",
       "18:00 today"
      ]
     ],
     "rows": 6
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Saying 'no customer data was affected' before the investigation confirms it; going silent for days; blaming a supplier publicly before facts are known; inconsistent messages from different executives; and staff learning about the incident from social media. Scammers also exploit breaches by impersonating the organisation, so tell customers what you will never ask them for.",
     "title": "Communication mistakes that turn incidents into crises"
    },
    {
     "type": "scenario",
     "title": "The first statement",
     "situation": "Two hours into a ransomware attack, a Dhaka hospital's systems are down and journalists are calling. Forensics cannot yet say whether patient data was stolen. The CEO wants to announce that 'no patient data has been compromised' to reassure the public. What should the crisis communications lead advise?",
     "options": [
      {
       "text": "Issue a holding statement confirming an incident, its effect on services and patient safety measures, stating that the investigation into data impact is under way and when the next update will come.",
       "feedback": "Best. It is honest, timely and protects credibility if data theft is later confirmed.",
       "best": true
      },
      {
       "text": "Announce that no patient data was compromised, as the CEO wishes.",
       "feedback": "Unverified reassurance that later proves false severely damages trust and may breach legal duties.",
       "best": false
      },
      {
       "text": "Say nothing until the investigation is complete.",
       "feedback": "Silence lets rumour fill the gap and fails patients who need to know how to get care.",
       "best": false
      },
      {
       "text": "Blame a named hacker group to show the hospital is a victim.",
       "feedback": "Attribution is uncertain early and distracts from what patients need to know.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Who is your organisation's crisis spokesperson? Have they ever rehearsed a cyber incident statement under time pressure?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Crisis",
       "def": "An event that threatens the organisation's strategy, reputation, finances or people and needs executive-level decisions."
      },
      {
       "term": "Crisis management team",
       "def": "The executive group that sets strategy, priorities and communications during a crisis."
      },
      {
       "term": "Gold, silver, bronze",
       "def": "A three-level command structure: strategic, tactical and operational."
      },
      {
       "term": "Decision log",
       "def": "A record of decisions, their rationale and the information available at the time."
      },
      {
       "term": "Holding statement",
       "def": "A short, pre-approved initial statement acknowledging an incident while facts are gathered."
      },
      {
       "term": "Spokesperson",
       "def": "The designated person who speaks for the organisation to media and the public."
      },
      {
       "term": "Stakeholder map",
       "def": "A list of groups affected by a crisis with their needs, channels and timing."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "A crisis threatens strategy, reputation or people and needs executive decisions; technical response continues beneath it.",
      "Gold sets objectives and approves statements, silver coordinates, bronze executes.",
      "Decide with the facts available, record why and set a time to revisit.",
      "Communicate early and honestly with a holding statement; never claim 'no data affected' before it is confirmed."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which level of the crisis structure approves major decisions and public statements?",
       "options": [
        "Strategic (gold)",
        "Operational (bronze), because it is closest to the technical facts on the ground",
        "Tactical (silver)",
        "Support functions"
       ],
       "answer": 0,
       "explain": "The strategic level sets direction and approves major decisions."
      },
      {
       "q": "Why keep a decision log during a crisis?",
       "options": [
        "To assign blame to individuals once the crisis is over and the review begins",
        "To show decisions were reasonable given information at the time",
        "Because insurers require it in every policy",
        "To replace communications"
       ],
       "answer": 1,
       "explain": "A log provides accountability and protection against hindsight judgements."
      },
      {
       "q": "What should a first holding statement avoid?",
       "options": [
        "Telling customers what the organisation will never ask them for during the incident",
        "Saying when the next update will come",
        "Unverified claims about data impact",
        "Acknowledging the incident"
       ],
       "answer": 2,
       "explain": "Premature reassurance can be proved false later."
      },
      {
       "q": "Which stakeholder group must usually be notified within legal deadlines?",
       "options": [
        "Regulators",
        "Media outlets that have contacted the organisation asking for comment on the incident",
        "Competitors",
        "Former employees"
       ],
       "answer": 0,
       "explain": "Regulatory notifications often have binding timelines."
      },
      {
       "q": "Why warn customers about impersonation during a breach?",
       "options": [
        "Customers are legally required to change their names after a breach",
        "To reduce call volumes",
        "To delay notification",
        "Scammers exploit breaches by pretending to be the organisation"
       ],
       "answer": 3,
       "explain": "Fraudsters use publicity around breaches to phish customers."
      }
     ]
    }
   ]
  },
  {
   "id": "m7-l4",
   "title": "Ransomware Resilience and Exercising",
   "subtitle": "Preparing the hardest decisions in advance and practising until they are routine",
   "minutes": 40,
   "objectives": [
    "Govern the decision on extortion demands within legal and ethical limits",
    "Design and run executive tabletop exercises that change behaviour",
    "Turn exercise and incident lessons into funded improvements"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Ransomware has become the most disruptive cyber threat for most organisations: attackers encrypt systems, steal data and threaten to publish it, sometimes adding denial-of-service attacks or contacting customers directly. Technical controls reduce the likelihood, but leadership must also prepare for the day they fail, including the decision whether to engage with criminals at all."
    },
    {
     "type": "keypoints",
     "items": [
      "Legal constraints: sanctions on certain groups, reporting duties and local law on facilitating crime",
      "Ability to recover without paying: state of backups, time to restore, safety implications",
      "Reliability: payment does not guarantee working decryption or deletion of stolen data",
      "Ethics and policy: funding criminal activity and encouraging future attacks",
      "Insurance terms and the insurer's role in negotiation",
      "Regulator and law-enforcement expectations and engagement"
     ],
     "title": "Factors in any extortion decision (prepared before an incident)"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Boards should agree in advance who decides, which advisers must be consulted, and the conditions under which the organisation would never pay, for example sanctions or no proof of decryption. This is not legal advice; laws on ransom payments differ by country and are changing (some countries now require payments to be reported, Australia since May 2025 for example, and others have moved to ban payments by public bodies and critical infrastructure operators), so take qualified advice before any incident.",
     "title": "Decide the policy, not the payment, in peacetime"
    },
    {
     "type": "tree",
     "title": "A pre-agreed extortion decision path",
     "caption": "A simplified example of what a board might approve in peacetime, not legal advice. Where backups work and restore within tolerance, the path ends without engaging the attackers at all.",
     "root": {
      "label": "Extortion demand received",
      "text": "Apply the board-approved policy",
      "children": [
       {
        "label": "Legal or sanctions bar",
        "text": "Counsel confirms payment is prohibited",
        "children": [
         {
          "label": "Do not pay; recover and report"
         }
        ]
       },
       {
        "label": "No legal bar",
        "text": "Assess recovery without paying",
        "children": [
         {
          "label": "Recovery within tolerance",
          "text": "Backups verified, restore time acceptable",
          "children": [
           {
            "label": "Recover; do not engage"
           }
          ]
         },
         {
          "label": "Recovery beyond tolerance",
          "text": "Safety or survival at stake",
          "children": [
           {
            "label": "Board decides with counsel, insurer, police"
           }
          ]
         }
        ]
       }
      ]
     }
    },
    {
     "type": "steps",
     "title": "Designing an executive tabletop exercise",
     "items": [
      {
       "title": "Set objectives",
       "text": "For example: test decision rights for shutting down services and the extortion policy."
      },
      {
       "title": "Choose a realistic scenario",
       "text": "Base it on threats facing your sector, such as ransomware with data theft at a hospital group."
      },
      {
       "title": "Write injects",
       "text": "Timed developments: encrypted systems, a leak site post, a journalist call, a regulator question."
      },
      {
       "title": "Invite the real decision-makers",
       "text": "CEO, COO, CFO, legal, communications, CISO, and their deputies."
      },
      {
       "title": "Facilitate, do not lecture",
       "text": "Ask what they would decide and why; capture disagreements."
      },
      {
       "title": "Debrief",
       "text": "Hot debrief immediately; written report with actions, owners and dates."
      }
     ]
    },
    {
     "type": "template",
     "title": "Exercise inject schedule",
     "purpose": "Plan the timed developments that drive a tabletop exercise and the decision each one tests.",
     "columns": [
      "Time",
      "Inject",
      "Decision tested",
      "Expected participants",
      "Observer notes"
     ],
     "example": [
      [
       "T+0:00",
       "SOC reports encryption spreading in finance systems",
       "Severity and activation of crisis team",
       "CISO, COO",
       ""
      ],
      [
       "T+1:30",
       "Leak site lists the company with sample payroll files",
       "Notification duties and extortion policy",
       "CEO, legal, HR, comms",
       ""
      ]
     ],
     "rows": 8
    },
    {
     "type": "case",
     "title": "A hospital group's long night",
     "context": "A private hospital group in Dhaka with four sites is hit by ransomware at 11 p.m. on a Thursday before a long weekend. Clinical systems and the EHR are encrypted; laboratory and radiology results are unavailable. The attackers claim to have stolen 2 TB of patient records and demand payment within 72 hours. Backups exist but the last full restore test was 18 months ago, and the backup server was joined to the main domain.",
     "questions": [
      "What should the crisis team's first three decisions be?",
      "How should the extortion demand be handled?",
      "What would you change in the next 90 days?"
     ],
     "answer": "First decisions: activate the crisis team and clinical downtime procedures to protect patient safety (including diverting emergency cases if needed); isolate networks and preserve evidence while engaging forensic and legal advisers; and start the notification assessment for regulators, law enforcement and the national CIRT. The extortion demand should be handled under a pre-agreed policy: verify claims, check sanctions and legal constraints, assess whether backups are usable and how long recovery would take, involve the insurer and counsel, and avoid any commitment until facts are clear; payment does not guarantee data deletion. In the next 90 days: isolate and make backups immutable with separate admin identities, test full EHR restoration, segment clinical networks, enforce phishing-resistant MFA for admins and remote access, and exercise the crisis plan with executives before the next holiday period."
    },
    {
     "type": "cycle",
     "title": "From lesson to improvement",
     "center": "Risk committee tracks",
     "caption": "If the loop is broken at 'assign' or 'verify', the same finding returns every year; the risk committee's tracking keeps it turning.",
     "items": [
      {
       "label": "Capture",
       "text": "Hot debrief and written observations"
      },
      {
       "label": "Analyse",
       "text": "Root causes, not only symptoms"
      },
      {
       "label": "Assign",
       "text": "Owners, dates and budget"
      },
      {
       "label": "Track",
       "text": "Progress reported to the risk committee"
      },
      {
       "label": "Verify",
       "text": "Retest in the next exercise"
      }
     ]
    },
    {
     "type": "scenario",
     "title": "The lesson that never closes",
     "situation": "A bank's last three cyber exercises all found that the out-of-hours contact list was out of date and no deputy could approve shutting down internet banking. Each report listed the same action. What should the CISO do?",
     "options": [
      {
       "text": "Add the same action to this year's report again.",
       "feedback": "Repeating the action without changing ownership guarantees the same result.",
       "best": false
      },
      {
       "text": "Stop running exercises because nothing changes.",
       "feedback": "Exercises are revealing a real weakness; stopping them hides it.",
       "best": false
      },
      {
       "text": "Escalate the repeated failure to the risk committee as a governance issue, assign the action to a named executive with a deadline, and verify it in a short unannounced call-tree test.",
       "feedback": "Best. Repeated findings show the improvement loop is broken; executive ownership and verification fix it.",
       "best": true
      },
      {
       "text": "Update the contact list personally the night before the next exercise.",
       "feedback": "A one-off fix by the CISO does not create a sustainable process.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "If ransomware hit your organisation tonight, who would decide whether to engage with the attackers, and on what basis? Is that written down and agreed?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Ransomware",
       "def": "Malicious software or an attack that encrypts data or systems to extort payment, often combined with data theft."
      },
      {
       "term": "Double extortion",
       "def": "Encrypting systems and also threatening to publish stolen data unless paid."
      },
      {
       "term": "Extortion policy",
       "def": "A pre-agreed board position on whether and how the organisation would respond to ransom demands."
      },
      {
       "term": "Inject",
       "def": "A scripted development introduced during an exercise to test decisions."
      },
      {
       "term": "Hot debrief",
       "def": "An immediate review held at the end of an exercise or incident while memories are fresh."
      },
      {
       "term": "After-action report",
       "def": "A written record of what happened in an exercise or incident, findings and tracked actions."
      },
      {
       "term": "Clinical downtime procedures",
       "def": "Manual processes that allow healthcare to continue safely when clinical systems are unavailable."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Set the extortion policy, decision rights and advisers in peacetime, with legal advice.",
      "Paying does not guarantee working decryption or deletion of stolen data, and some countries now regulate payments.",
      "Effective tabletops use real decision-makers, realistic injects and tracked actions.",
      "A finding that repeats every year means the improvement loop is broken; escalate and verify."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "When should an organisation set its policy on responding to ransom demands?",
       "options": [
        "Before any incident, approved by the board",
        "During the incident, once the size of the demand and the attacker's identity are known",
        "After paying",
        "Never"
       ],
       "answer": 0,
       "explain": "Peacetime decisions avoid rushed choices under pressure."
      },
      {
       "q": "Why does paying a ransom not guarantee safety?",
       "options": [
        "Payments are always refunded by the attackers after recovery is complete",
        "Insurers always pay instead",
        "Decryption may fail and stolen data may still be leaked or sold",
        "Encryption stops after payment automatically"
       ],
       "answer": 2,
       "explain": "Criminals are unreliable and stolen data cannot be 'returned'."
      },
      {
       "q": "What makes an executive tabletop effective?",
       "options": [
        "A long technical presentation delivered to the board by the security vendor",
        "Avoiding disagreements",
        "Keeping it secret from executives",
        "Real decision-makers, realistic injects and tracked actions"
       ],
       "answer": 3,
       "explain": "Participation by real decision-makers under realistic pressure drives change."
      },
      {
       "q": "What does 'double extortion' combine?",
       "options": [
        "Two separate ransom payments requested from the same organisation in one month",
        "Encryption and threatened publication of stolen data",
        "Phishing and malware",
        "Two attackers"
       ],
       "answer": 1,
       "explain": "Attackers both lock systems and threaten leaks."
      },
      {
       "q": "An exercise finding has been repeated three years in a row. What does this indicate?",
       "options": [
        "The exercise scenarios are too difficult and should be simplified next time",
        "The finding is unimportant",
        "The improvement loop is not working",
        "Exercises should stop"
       ],
       "answer": 2,
       "explain": "Repeated findings show actions are not owned or verified."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m8",
 "order": 8,
 "code": "Lead",
 "title": "Regulation, Audit and Board Leadership",
 "subtitle": "Meet legal duties, earn assurance and lead the security programme in front of the board",
 "outcomes": [
  "Map international and Bangladeshi cyber and data obligations to controls and owners",
  "Plan and respond to audits, distinguishing design from operating effectiveness",
  "Report cyber risk to the board and build risk-based budgets and business cases",
  "Lead the security programme through strategy, operating model and people",
  "Complete the ZCSTG capstone and approach expert scenario questions with confidence"
 ],
 "lessons": [
  {
   "id": "m8-l1",
   "title": "The Global Regulatory Landscape for Cyber and Data",
   "subtitle": "Mapping the laws and rules that shape security programmes in 2026",
   "minutes": 35,
   "objectives": [
    "Summarise the main international cyber and data regulations security leaders meet",
    "Identify common regulatory themes such as management accountability and incident reporting",
    "Build an obligations register that links laws to controls and owners"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Cyber security is no longer only a technical or voluntary matter. Governments now regulate how organisations manage cyber risk, report incidents, protect personal data and oversee suppliers, and many make senior management personally accountable. A security leader does not need to be a lawyer, but must know which rules apply, what they demand and when to call legal counsel. This lesson summarises major regimes in our own words; always check the official texts and seek legal advice."
    },
    {
     "type": "table",
     "head": [
      "Regime",
      "Who it affects",
      "Key security expectations"
     ],
     "rows": [
      [
       "EU GDPR (since 2018)",
       "Organisations processing personal data of people in the EU, including from abroad",
       "Security of processing, DPIAs, 72-hour breach notification, fines up to 4% of global turnover"
      ],
      [
       "EU NIS2 Directive (transposition deadline October 2024; several national laws arrived late)",
       "Essential and important entities in many sectors",
       "Risk-management measures, management body approval and training, staged incident reporting (24 h, 72 h, one month)"
      ],
      [
       "EU DORA (applies from January 2025)",
       "Financial entities and their critical ICT providers",
       "ICT risk framework, incident reporting, resilience testing, third-party register and contracts"
      ],
      [
       "EU Cyber Resilience Act (in force December 2024)",
       "Manufacturers, importers and distributors of products with digital elements sold in the EU",
       "Secure-by-design requirements, SBOM and vulnerability handling for the support period; exploited-vulnerability and incident reporting from September 2026; full application December 2027"
      ],
      [
       "EU AI Act (in force August 2024, phased)",
       "Providers and deployers of AI systems placed on or used in the EU market",
       "Prohibited practices banned since February 2025; duties for general-purpose models since August 2025; high-risk obligations phased in later, with timing under review, so check the current timetable"
      ],
      [
       "US SEC cyber disclosure rules (2023)",
       "US-listed companies",
       "Disclose material incidents within four business days of determining materiality; annual disclosure of risk management and governance"
      ],
      [
       "PCI DSS v4.x",
       "Organisations storing, processing or transmitting payment card data",
       "Prescriptive controls (v4.0.1 current); future-dated requirements mandatory since March 2025"
      ],
      [
       "India DPDP Act 2023",
       "Organisations processing digital personal data in India",
       "Consent and notice, data fiduciary duties, breach reporting; rules notified in late 2025 and phased in"
      ]
     ],
     "title": "Selected international regimes (simplified)"
    },
    {
     "type": "timeline",
     "title": "Key dates in cyber and data regulation",
     "caption": "Obligations arrive in waves; a regime 'in force' often applies in stages. Keep this view in the obligations register and recheck future dates against official sources.",
     "items": [
      {
       "when": "May 2018",
       "label": "GDPR applies",
       "text": "72-hour breach notification"
      },
      {
       "when": "Dec 2023",
       "label": "SEC disclosure rules",
       "text": "Material incidents disclosed within four business days of determination"
      },
      {
       "when": "Aug 2024",
       "label": "EU AI Act in force",
       "text": "Obligations phased from 2025"
      },
      {
       "when": "Oct 2024",
       "label": "NIS2 transposition deadline",
       "text": "National laws, several late"
      },
      {
       "when": "Dec 2024",
       "label": "Cyber Resilience Act in force",
       "text": "Product security obligations phased in"
      },
      {
       "when": "Jan 2025",
       "label": "DORA applies",
       "text": "EU financial entities and ICT providers"
      },
      {
       "when": "Mar 2025",
       "label": "PCI DSS v4 fully effective",
       "text": "Future-dated requirements mandatory"
      },
      {
       "when": "Sep 2026",
       "label": "CRA reporting starts",
       "text": "Actively exploited vulnerabilities and severe incidents"
      },
      {
       "when": "Dec 2027",
       "label": "CRA fully applies",
       "text": "Essential requirements and conformity assessment"
      }
     ]
    },
    {
     "type": "keypoints",
     "items": [
      "Boards and senior managers must approve, oversee and understand cyber risk measures",
      "Risk-based security measures proportionate to the organisation and its services",
      "Short, staged incident reporting deadlines to regulators",
      "Supplier and ICT third-party risk management with contractual requirements",
      "Resilience testing, from vulnerability scanning to threat-led penetration testing",
      "Evidence: documentation that demonstrates compliance on request"
     ],
     "title": "Themes that recur across regimes"
    },
    {
     "type": "sequence",
     "title": "NIS2-style staged incident reporting",
     "actors": [
      "Entity",
      "CSIRT or authority",
      "Service recipients"
     ],
     "caption": "Reporting is staged so that authorities hear early and learn more as facts firm up. National laws set the detail; the early warning comes before you know everything.",
     "steps": [
      {
       "from": 0,
       "to": 0,
       "label": "Aware of a significant incident"
      },
      {
       "from": 0,
       "to": 1,
       "label": "Early warning within 24 hours"
      },
      {
       "from": 0,
       "to": 1,
       "label": "Incident notification within 72 hours"
      },
      {
       "from": 1,
       "to": 0,
       "label": "Guidance; request for updates",
       "reply": true
      },
      {
       "from": 0,
       "to": 2,
       "label": "Inform affected recipients where needed"
      },
      {
       "from": 0,
       "to": 1,
       "label": "Intermediate report on request"
      },
      {
       "from": 0,
       "to": 1,
       "label": "Final report within one month"
      }
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Several regimes now let regulators sanction members of management bodies, require them to undergo training or expect boards to approve cyber risk measures explicitly. This has changed board behaviour: directors ask sharper questions and expect CISOs to give clear, documented answers.",
     "title": "Personal accountability is spreading"
    },
    {
     "type": "steps",
     "title": "Building an obligations register",
     "items": [
      {
       "title": "Identify applicable laws",
       "text": "By country of operation, customers' locations, sector and listing."
      },
      {
       "title": "Extract obligations",
       "text": "Break each law into specific, testable obligations in plain words."
      },
      {
       "title": "Map to controls",
       "text": "Link each obligation to controls in your unified control framework."
      },
      {
       "title": "Assign owners",
       "text": "Each obligation has an accountable owner and a legal adviser."
      },
      {
       "title": "Track change",
       "text": "Monitor new laws, amendments and regulator guidance."
      },
      {
       "title": "Evidence compliance",
       "text": "Keep evidence ready for inspections and audits."
      }
     ]
    },
    {
     "type": "template",
     "title": "Regulatory obligations register",
     "purpose": "Record each regulatory obligation in plain words, mapped to controls, owners and evidence.",
     "columns": [
      "Source",
      "Obligation (plain words)",
      "Applies to",
      "Mapped controls",
      "Owner",
      "Evidence",
      "Status"
     ],
     "example": [
      [
       "NIS2 national law (EU subsidiary)",
       "Notify the national CSIRT of a significant incident with an early warning within 24 hours",
       "EU operations",
       "IR-03 notification matrix; IR-05 on-call",
       "Head of incident response",
       "Notification log; exercise report",
       "Compliant"
      ],
      [
       "GDPR",
       "Notify the supervisory authority of a notifiable personal data breach within 72 hours",
       "EU customer data",
       "PR-07 breach assessment; IR-03",
       "Data protection officer",
       "Breach register",
       "Compliant"
      ]
     ],
     "rows": 8
    },
    {
     "type": "scenario",
     "title": "Which incident clock?",
     "situation": "A Bangladeshi software exporter with an EU subsidiary and EU customer data suffers an intrusion that may have exposed personal data and disrupted a service provided to an EU hospital. The incident lead asks which notification deadline applies. What is the BEST response?",
     "options": [
      {
       "text": "Activate the pre-built notification matrix with legal counsel, because several regimes may apply at once with different deadlines and recipients, and start the earliest clock now.",
       "feedback": "Best. Multiple obligations can run in parallel; a prepared matrix and legal advice prevent missed deadlines.",
       "best": true
      },
      {
       "text": "Only Bangladeshi law applies because the company is headquartered in Dhaka.",
       "feedback": "Laws such as GDPR and national NIS2 laws can apply to foreign organisations and subsidiaries.",
       "best": false
      },
      {
       "text": "Wait until the investigation confirms data theft before considering any notification.",
       "feedback": "Some clocks start when you become aware of a likely incident, not when it is confirmed.",
       "best": false
      },
      {
       "text": "Let the EU hospital decide whether anyone needs to be told.",
       "feedback": "The hospital has its own duties, but the exporter's obligations remain its own.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Which regulation would hurt your organisation most if you breached it? Who owns compliance with it, and when were its obligations last mapped to your controls?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "GDPR",
       "def": "The EU General Data Protection Regulation, governing processing of personal data of people in the EU."
      },
      {
       "term": "NIS2",
       "def": "The EU directive setting cyber risk-management and incident reporting duties for essential and important entities."
      },
      {
       "term": "DORA",
       "def": "The EU Digital Operational Resilience Act for financial entities, covering ICT risk, incidents, testing and third parties."
      },
      {
       "term": "Materiality",
       "def": "The significance of an event to investors or the organisation, which can trigger disclosure duties."
      },
      {
       "term": "Obligations register",
       "def": "A record of regulatory and contractual obligations mapped to controls, owners and evidence."
      },
      {
       "term": "Threat-led penetration testing",
       "def": "Intelligence-driven red-team testing of live production systems required for some financial firms."
      },
      {
       "term": "Extraterritorial effect",
       "def": "When a law applies to organisations outside the country that made it, for example because they serve its residents."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Know which regimes apply by country, customers, sector and listing, and when to call counsel.",
      "Common themes: management accountability, risk-based measures, staged incident reporting, supplier oversight and testing.",
      "Product and AI rules (the Cyber Resilience Act and AI Act) now sit beside organisational rules such as NIS2 and DORA.",
      "An obligations register links each obligation to controls, owners and evidence, and tracks changes."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which regime focuses specifically on the digital operational resilience of financial entities in the EU?",
       "options": [
        "GDPR, because it covers all information held by financial entities in the EU",
        "DORA",
        "PCI DSS",
        "NIS2 only"
       ],
       "answer": 1,
       "explain": "DORA is the EU regulation dedicated to financial-sector ICT resilience."
      },
      {
       "q": "Under NIS2-style reporting, what usually comes first after a significant incident?",
       "options": [
        "An early warning within about 24 hours",
        "A full final report within twenty-four hours, including root cause and lessons learned",
        "A press release",
        "Nothing for 30 days"
       ],
       "answer": 0,
       "explain": "NIS2 introduces staged reporting starting with an early warning."
      },
      {
       "q": "Why might GDPR apply to a company based in Dhaka?",
       "options": [
        "Because every company in the world must comply with GDPR regardless of its customers",
        "It uses cloud services",
        "It has a website",
        "It processes personal data of people in the EU, for example by serving them"
       ],
       "answer": 3,
       "explain": "GDPR has extraterritorial reach when organisations offer services to or monitor people in the EU."
      },
      {
       "q": "What is the main purpose of an obligations register?",
       "options": [
        "To map laws to controls, owners and evidence",
        "To list every law in the world that mentions technology, whether it applies or not",
        "To replace legal advice",
        "To publish fines"
       ],
       "answer": 0,
       "explain": "It turns legal text into managed, testable obligations."
      },
      {
       "q": "Which theme appears across many recent cyber regulations?",
       "options": [
        "A ban on outsourcing any IT service to third parties",
        "Management accountability for cyber risk",
        "Mandatory use of one vendor's products",
        "Abolition of incident reporting"
       ],
       "answer": 1,
       "explain": "Regulators increasingly expect boards to approve and oversee cyber risk measures."
      },
      {
       "q": "A Dhaka company sells a connected industrial sensor into the EU. Which EU law most directly sets security requirements for the product itself?",
       "options": [
        "NIS2, because it covers every company that sells into the EU market",
        "The Cyber Resilience Act",
        "DORA, because sensors may be used by banks",
        "GDPR, because the sensor might collect personal data in some deployments"
       ],
       "answer": 1,
       "explain": "The Cyber Resilience Act applies to products with digital elements placed on the EU market, including from foreign manufacturers. NIS2 and DORA regulate organisations; GDPR governs personal data processing."
      }
     ]
    }
   ]
  },
  {
   "id": "m8-l2",
   "title": "Bangladesh's Digital and Cyber Laws",
   "subtitle": "A careful overview for security leaders working in or with Bangladesh",
   "minutes": 35,
   "objectives": [
    "Describe in general terms how Bangladesh's cyber and digital laws have evolved",
    "Identify the main authorities and sector regulators relevant to cyber risk",
    "Apply a prudent compliance approach while the legal framework continues to change"
   ],
   "blocks": [
    {
     "type": "callout",
     "kind": "warning",
     "text": "This lesson is a general, simplified overview for learning, written in our own words. Bangladesh's cyber and data laws have changed several times in recent years and may change again. Provisions, institutions and penalties described here may have been amended. Always read the current official texts, check regulator circulars and take advice from qualified Bangladeshi lawyers before acting. Nothing here is legal advice.",
     "title": "Read this first"
    },
    {
     "type": "text",
     "text": "Bangladesh's digital economy has grown rapidly: mobile financial services, e-commerce, garment-sector digitisation, digital government services and a large IT exports sector. Its legal framework has evolved alongside, moving from early electronic transactions law to broader cyber security statutes, and more recently towards personal data protection. Security leaders need to understand the direction of travel, the authorities involved and how sector regulators such as the central bank set detailed expectations."
    },
    {
     "type": "timeline",
     "title": "How the main cyber statutes have evolved (simplified)",
     "caption": "Each step replaced or reshaped the one before, and the most recent instruments were ordinances made without a sitting Parliament. Always confirm which texts are currently in force.",
     "items": [
      {
       "when": "2006",
       "label": "ICT Act",
       "text": "Electronic records, digital signatures, early computer offences; later amended"
      },
      {
       "when": "2018",
       "label": "Digital Security Act",
       "text": "National agency and critical information infrastructure; speech offences widely criticised"
      },
      {
       "when": "2023",
       "label": "Cyber Security Act",
       "text": "Replaced the 2018 Act with much of its structure; National Cyber Security Agency continued"
      },
      {
       "when": "2025",
       "label": "Cyber security ordinance",
       "text": "Replaced the 2023 Act, removing several speech-related offences"
      },
      {
       "when": "2025",
       "label": "Personal data protection",
       "text": "An ordinance approved after years of drafts; commencement and rules to be checked"
      },
      {
       "when": "2026 onward",
       "label": "Parliamentary review",
       "text": "Ordinances go before the new Parliament, which may enact, amend or let them lapse"
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Body",
      "Role relevant to cyber risk"
     ],
     "rows": [
      [
       "National Cyber Security Agency (NCSA)",
       "National cyber security authority under the cyber law; policy, coordination, critical information infrastructure oversight"
      ],
      [
       "BGD e-GOV CIRT",
       "National computer incident response team for government and critical sectors; advisories and incident coordination"
      ],
      [
       "Bangladesh Bank",
       "Central bank; issues ICT security guidelines and incident expectations for banks and financial institutions; oversees MFS providers"
      ],
      [
       "Bangladesh Financial Intelligence Unit (BFIU)",
       "Anti-money-laundering supervision; relevant to fraud and payment incidents"
      ],
      [
       "BTRC",
       "Telecommunications regulator; licence conditions for operators, including security and lawful interception"
      ],
      [
       "Office of the Controller of Certifying Authorities (CCA)",
       "Licenses certifying authorities for digital signatures under the ICT law"
      ],
      [
       "Law enforcement cyber units",
       "Investigation of cyber crime complaints and incidents"
      ]
     ],
     "title": "Authorities and bodies security leaders should know (check current names and mandates)"
    },
    {
     "type": "keypoints",
     "items": [
      "Critical information infrastructure (CII): systems the government designates as vital, with duties such as audits and incident reporting",
      "Offences such as illegal access, damage to computer systems, computer fraud and identity misuse",
      "Powers for investigation, search and seizure of digital evidence",
      "A national agency and emergency response teams with coordination roles",
      "Provisions affecting online content, which have been the most debated and amended part of the laws"
     ],
     "title": "Concepts that commonly appear in the cyber statutes"
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "For a bank or MFS provider, Bangladesh Bank's ICT security guidelines and circulars typically drive most security requirements: governance roles, IT risk management, access control, data centre and DR expectations, payment system security, vendor management and incident reporting. Guidelines are revised periodically, so a bank's compliance team should track each new version and circular and map it into the control library.",
     "title": "Sector rules often matter more day to day"
    },
    {
     "type": "steps",
     "title": "A prudent compliance approach in a changing framework",
     "items": [
      {
       "title": "Track the law actively",
       "text": "Assign legal counsel to monitor gazette notifications, ordinances, Acts of Parliament and rules, including whether the 2025 ordinances have been enacted, amended or lapsed; brief the risk committee on changes."
      },
      {
       "title": "Check CII status",
       "text": "Determine whether any of your systems are, or could be, designated as critical information infrastructure."
      },
      {
       "title": "Map sector rules",
       "text": "Load central bank, telecom or other regulator requirements into your obligations register."
      },
      {
       "title": "Prepare for personal data duties",
       "text": "Inventory personal data, set lawful bases, appoint a privacy lead and prepare breach procedures now."
      },
      {
       "title": "Agree reporting routes",
       "text": "Know which incidents go to which authority, within what time, and who reports."
      },
      {
       "title": "Protect people's rights",
       "text": "Handle any law-enforcement data requests through legal review and documented procedures."
      }
     ]
    },
    {
     "type": "scenario",
     "title": "A data request without paperwork",
     "situation": "A Dhaka e-commerce company receives a phone call from someone claiming to be a law-enforcement officer, asking for a customer's order history and delivery address urgently for an investigation. No written request has been provided. What should the security or privacy lead do?",
     "options": [
      {
       "text": "Provide the data immediately to avoid obstructing an investigation.",
       "feedback": "Unverified callers may be fraudsters, and disclosure without a legal basis may breach the customer's rights.",
       "best": false
      },
      {
       "text": "Refuse all requests from law enforcement as a matter of policy.",
       "feedback": "Lawful requests must be handled properly; blanket refusal creates legal risk.",
       "best": false
      },
      {
       "text": "Ask the customer for permission first by email.",
       "feedback": "This may compromise a genuine investigation and is not the correct process.",
       "best": false
      },
      {
       "text": "Follow the documented law-enforcement request procedure: verify the requester through official channels, require a written request with legal basis, and have legal counsel review before disclosing anything.",
       "feedback": "Best. It respects lawful requests while protecting customers from impersonation and unlawful disclosure.",
       "best": true
      }
     ]
    },
    {
     "type": "case",
     "title": "Getting ready for personal data protection",
     "context": "A mid-sized MFS provider in Bangladesh holds data on 6 million customers: national ID details, transaction histories, device identifiers and location data from agents. With a personal data protection ordinance approved and rules expected, the board asks the CISO and chief compliance officer for a readiness plan within six months.",
     "questions": [
      "What should the first three months of the plan contain?",
      "Which data processing activities are likely to need impact assessments?",
      "How should the plan stay robust if final rules differ from current drafts?"
     ],
     "answer": "The first three months should build a data inventory and data-flow maps, appoint accountable owners and a privacy lead, review notices and lawful bases for each processing purpose, assess security controls for national ID and transaction data, and prepare a breach assessment and notification procedure. Credit scoring, location tracking via agents, sharing with partner lenders and any use of biometrics or national ID data at scale are likely to need impact assessments. To stay robust, design to widely shared principles (minimisation, purpose limitation, security, transparency, accountability and rights handling) rather than to draft wording, track official rules through legal counsel and keep a change log so the plan can be adjusted when final requirements are published."
    },
    {
     "type": "reflection",
     "prompt": "Which Bangladeshi regulator would you hear from first after a serious cyber incident in your organisation, and do you have their incident reporting contact and timeline written down?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "ICT Act 2006",
       "def": "Bangladesh's early law recognising electronic records and digital signatures and defining computer offences, later amended."
      },
      {
       "term": "Critical information infrastructure",
       "def": "Computer systems designated by the government as vital, which carry additional security and reporting duties."
      },
      {
       "term": "National Cyber Security Agency",
       "def": "Bangladesh's national authority for cyber security under the cyber law (check current mandate)."
      },
      {
       "term": "BGD e-GOV CIRT",
       "def": "Bangladesh's national computer incident response team serving government and critical sectors."
      },
      {
       "term": "Bangladesh Bank ICT security guideline",
       "def": "The central bank's guidance setting ICT security expectations for banks and financial institutions."
      },
      {
       "term": "Ordinance",
       "def": "A law issued by the executive when parliament is not in session, which has legal force subject to later legislative processes."
      },
      {
       "term": "Law-enforcement request procedure",
       "def": "A documented process for verifying and legally reviewing requests from authorities for customer data."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Bangladesh's cyber law moved from the ICT Act through the 2018 and 2023 Acts to 2025 ordinances, and may change again.",
      "Sector rules, especially Bangladesh Bank's ICT security guidelines and circulars, drive most day-to-day requirements.",
      "Prepare for personal data duties by designing to shared principles rather than to draft wording.",
      "Handle law-enforcement requests through verification, written legal basis and counsel review."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Why does this course recommend checking current official texts for Bangladesh's cyber laws?",
       "options": [
        "Because the laws are only available in summaries prepared by private training organisations",
        "Because the laws do not apply to companies",
        "Because they are secret",
        "The framework has changed several times and may change again"
       ],
       "answer": 3,
       "explain": "Frequent amendments mean summaries can become outdated."
      },
      {
       "q": "For a Bangladeshi bank, which source typically drives most detailed security requirements day to day?",
       "options": [
        "The telecom regulator's licence conditions for mobile network operators",
        "Foreign data protection laws only",
        "Bangladesh Bank's ICT security guidelines and circulars",
        "Industry blogs"
       ],
       "answer": 2,
       "explain": "Sector regulators set detailed expectations for regulated entities."
      },
      {
       "q": "What is critical information infrastructure in the context of the cyber statutes?",
       "options": [
        "Any computer connected to the internet anywhere in the country",
        "Only military systems",
        "Social media accounts",
        "Systems designated as vital, with extra duties such as audits and incident reporting"
       ],
       "answer": 3,
       "explain": "CII designation brings specific obligations."
      },
      {
       "q": "Which part of Bangladesh's cyber laws has been most debated and amended?",
       "options": [
        "Provisions on recognising electronic records and digital signatures",
        "Provisions affecting online content and speech",
        "Rules on data centre cooling",
        "Software licensing fees"
       ],
       "answer": 1,
       "explain": "Speech-related offences drew the most criticism and changes."
      },
      {
       "q": "What is the best response to an unverified phone request from someone claiming to be police?",
       "options": [
        "Verify through official channels and require a written, legally reviewed request",
        "Disclose immediately, because refusing could be treated as obstruction of an investigation",
        "Ignore all such requests permanently",
        "Post the request on social media"
       ],
       "answer": 0,
       "explain": "Verification and legal review protect both the investigation and customers."
      }
     ]
    }
   ]
  },
  {
   "id": "m8-l3",
   "title": "Audit and Assurance",
   "subtitle": "Proving that controls work, to yourself, your board and your regulators",
   "minutes": 35,
   "objectives": [
    "Distinguish design effectiveness from operating effectiveness and test each",
    "Plan risk-based audits with sensible sampling and well-written findings",
    "Use continuous controls monitoring to reduce audit effort and surprises"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "**Assurance** is confidence, based on evidence, that controls are designed and operating as intended. It comes from several sources: management self-assessment, second-line monitoring, internal audit, external audit, certification bodies and regulators. A mature security leader welcomes assurance, prepares evidence continuously and treats findings as free consulting rather than as attacks."
    },
    {
     "type": "compare",
     "title": "Design versus operating effectiveness",
     "columns": [
      {
       "title": "Design effectiveness",
       "items": [
        "Would the control, if performed as described, address the risk?",
        "Tested by walkthrough and inspection of design",
        "Example: the access review procedure covers all privileged accounts and requires revocation within 5 days"
       ]
      },
      {
       "title": "Operating effectiveness",
       "items": [
        "Did the control actually operate consistently over the period?",
        "Tested by sampling evidence across the period",
        "Example: 25 sampled reviews were completed on time and revocations happened"
       ]
      }
     ]
    },
    {
     "type": "matrix",
     "title": "Reading design and operating test results together",
     "x": "Operating effectiveness",
     "y": "Design effectiveness",
     "caption": "Only the top-right quadrant gives assurance. The bottom-right is the dangerous one: a control that runs faithfully but was never designed to address the risk gives false comfort.",
     "quadrants": [
      {
       "title": "Well designed, not operating",
       "items": [
        "Procedure exists but is skipped",
        "Fix discipline and evidence"
       ]
      },
      {
       "title": "Effective",
       "items": [
        "Designed for the risk",
        "Operated across the period",
        "Can be relied on"
       ]
      },
      {
       "title": "Ineffective",
       "items": [
        "Redesign and rebuild"
       ]
      },
      {
       "title": "Operating, poorly designed",
       "items": [
        "Runs every month, misses the risk",
        "False comfort: redesign"
       ]
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Control frequency",
      "Typical sample",
      "Notes"
     ],
     "rows": [
      [
       "Annual",
       "1",
       "Test the single occurrence"
      ],
      [
       "Quarterly",
       "2",
       "Often the auditor's choice of quarters"
      ],
      [
       "Monthly",
       "2 to 5",
       "Higher for key controls"
      ],
      [
       "Weekly",
       "5 to 15",
       ""
      ],
      [
       "Daily",
       "20 to 40",
       ""
      ],
      [
       "Many times a day or automated",
       "25 to 60, or test the configuration once plus change control",
       "Automated controls can be tested by design plus change management"
      ]
     ],
     "title": "Typical sample sizes for operating effectiveness (illustrative)"
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "**IT general controls (ITGCs)** are the foundation controls that make application controls reliable: access management (who can use and administer systems), change management (how changes are approved, tested and deployed) and IT operations (backups, job scheduling, incident handling). Weak ITGCs undermine trust in every automated control that depends on them.",
     "title": "IT general controls"
    },
    {
     "type": "framework",
     "title": "Writing a useful audit finding",
     "items": [
      {
       "label": "C1",
       "title": "Condition",
       "text": "What was found, with facts: '12 of 25 sampled leavers kept access for more than 30 days.'"
      },
      {
       "label": "C2",
       "title": "Criteria",
       "text": "What should have happened: 'Policy requires disablement within 1 day.'"
      },
      {
       "label": "C3",
       "title": "Cause",
       "text": "Why it happened: 'HR feed to the directory fails for contractors.'"
      },
      {
       "label": "C4",
       "title": "Consequence",
       "text": "Why it matters: 'Former staff could access customer data.'"
      },
      {
       "label": "C5",
       "title": "Corrective action",
       "text": "What to do, by whom, by when: 'Fix contractor feed; IAM lead; 31 March.'"
      }
     ]
    },
    {
     "type": "steps",
     "title": "Preparing for an audit without panic",
     "items": [
      {
       "title": "Know the scope",
       "text": "Agree scope, criteria and timing with the auditor early."
      },
      {
       "title": "Self-assess",
       "text": "Test key controls yourself first; fix what you can."
      },
      {
       "title": "Organise evidence",
       "text": "Collect evidence continuously in a shared repository mapped to controls."
      },
      {
       "title": "Brief control owners",
       "text": "Owners explain their own controls; security coordinates."
      },
      {
       "title": "Respond to findings constructively",
       "text": "Agree facts, propose realistic actions and dates."
      },
      {
       "title": "Track to closure",
       "text": "Report action status to the audit committee until verified."
      }
     ]
    },
    {
     "type": "sequence",
     "title": "The life of an audit finding",
     "actors": [
      "Audit committee",
      "Internal audit",
      "Control owner",
      "CISO"
     ],
     "caption": "The owner, not the CISO, answers for the control. Facts are agreed before the report, and the committee tracks actions until audit has verified them.",
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "Approve risk-based audit plan"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Request evidence for 25 samples"
      },
      {
       "from": 2,
       "to": 1,
       "label": "Evidence from repository",
       "reply": true
      },
      {
       "from": 1,
       "to": 2,
       "label": "Draft finding: condition, criteria, cause"
      },
      {
       "from": 2,
       "to": 3,
       "label": "Agree realistic action and date"
      },
      {
       "from": 2,
       "to": 1,
       "label": "Management response",
       "reply": true
      },
      {
       "from": 1,
       "to": 0,
       "label": "Report finding and action plan"
      },
      {
       "from": 1,
       "to": 1,
       "label": "Verify closure before reporting it closed"
      }
     ]
    },
    {
     "type": "text",
     "text": "**Continuous controls monitoring (CCM)** automates testing of controls using data from systems: for example, checking daily that all privileged accounts use phishing-resistant MFA, that backups completed and were immutable, or that no public storage exists in cloud accounts. CCM turns annual sampling into continuous evidence, catches failures quickly and lets auditors rely on automated results after testing the monitoring itself."
    },
    {
     "type": "scenario",
     "title": "A repeated audit finding",
     "situation": "Internal audit at a telecom reports for the third year that change management for network devices is ineffective: 30% of sampled changes had no approval. The network head says the team is too busy for paperwork. What should the CISO recommend?",
     "options": [
      {
       "text": "Ask audit to reduce the sample size so fewer exceptions appear.",
       "feedback": "Changing sampling hides the problem rather than fixing it.",
       "best": false
      },
      {
       "text": "Accept the finding again because the team is busy.",
       "feedback": "A repeated finding on a key ITGC is a governance failure, not a workload issue.",
       "best": false
      },
      {
       "text": "Agree with the network head an automated change workflow integrated with device configuration tools and continuous monitoring of unapproved changes, with progress reported to the audit committee.",
       "feedback": "Best. It fixes the cause (manual, burdensome process) and gives continuous evidence, while accountability stays with the network head.",
       "best": true
      },
      {
       "text": "Have the security team approve all network changes.",
       "feedback": "This shifts work without fixing the process and blurs ownership.",
       "best": false
      }
     ]
    },
    {
     "type": "checklist",
     "title": "Signs of a healthy assurance relationship",
     "items": [
      "Audit plans are risk-based and include cyber, not only ITGCs",
      "Findings are agreed on facts within the agreed timeline",
      "Actions have owners and realistic dates and are rarely extended",
      "Repeated findings are escalated to the audit committee",
      "Evidence is collected continuously, not built the week before",
      "Automated controls and monitoring are relied upon after testing"
     ]
    },
    {
     "type": "reflection",
     "prompt": "Which of your key security controls could you prove worked every day of the last year? Which would rely on someone's memory?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Assurance",
       "def": "Evidence-based confidence that controls are designed and operating as intended."
      },
      {
       "term": "Design effectiveness",
       "def": "Whether a control, as designed, would address the risk if performed correctly."
      },
      {
       "term": "Operating effectiveness",
       "def": "Whether a control actually operated consistently as designed over a period."
      },
      {
       "term": "IT general controls",
       "def": "Foundation controls over access, change management and IT operations that support application controls."
      },
      {
       "term": "Sampling",
       "def": "Testing a selection of control occurrences to draw conclusions about the whole population."
      },
      {
       "term": "Audit finding",
       "def": "A documented control weakness with condition, criteria, cause, consequence and corrective action."
      },
      {
       "term": "Continuous controls monitoring",
       "def": "Automated, ongoing testing of controls using system data."
      },
      {
       "term": "Audit committee",
       "def": "A board committee that oversees financial reporting, internal control and audit, often including cyber risk."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Design effectiveness asks whether a control would work; operating effectiveness asks whether it did, across the period.",
      "Weak IT general controls undermine every automated control that depends on them.",
      "A useful finding states condition, criteria, cause, consequence and corrective action.",
      "Continuous controls monitoring turns annual samples into ongoing evidence and earlier warnings."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A walkthrough confirms that a procedure, if followed, would detect unauthorised changes. What has been tested?",
       "options": [
        "Operating effectiveness over the whole audit period using a statistical sample",
        "Materiality",
        "Design effectiveness",
        "Business impact"
       ],
       "answer": 2,
       "explain": "Walkthroughs test whether the design addresses the risk, not whether it operated."
      },
      {
       "q": "Which of these is an IT general control?",
       "options": [
        "A three-way match between purchase order, invoice and goods receipt in the ERP",
        "A sales target",
        "Change management for production systems",
        "A marketing approval"
       ],
       "answer": 2,
       "explain": "Change management is a core ITGC; the three-way match is an application control."
      },
      {
       "q": "What does the 'cause' element of a finding explain?",
       "options": [
        "What the policy requires the control owner to do and how often",
        "The financial impact",
        "Who the auditor was",
        "Why the condition occurred"
       ],
       "answer": 3,
       "explain": "Cause identifies the root reason, guiding corrective action."
      },
      {
       "q": "Why is continuous controls monitoring valuable?",
       "options": [
        "It detects control failures quickly and provides ongoing evidence",
        "It removes the need for any internal audit function in regulated organisations",
        "It replaces management accountability",
        "It is required by every law"
       ],
       "answer": 0,
       "explain": "CCM gives timely detection and reusable evidence."
      },
      {
       "q": "For a control performed monthly, what sample size is typical?",
       "options": [
        "1",
        "2 to 5",
        "25 to 60",
        "All 365 days"
       ],
       "answer": 1,
       "explain": "Monthly controls are usually tested with a small sample of occurrences."
      }
     ]
    }
   ]
  },
  {
   "id": "m8-l4",
   "title": "Board Reporting and Security Budgets",
   "subtitle": "Speaking the board's language and funding the programme credibly",
   "minutes": 35,
   "objectives": [
    "Structure board reporting around risk, appetite, decisions and assurance",
    "Build a security budget and business case using risk-based reasoning",
    "Answer the questions boards most often ask about cyber risk"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Boards do not want a tour of the security stack. They want to know: what are our most significant cyber risks, are they within appetite, are we getting better, what decisions do you need from us and how do we know your answers are true? A CISO who answers these clearly, consistently and honestly earns trust and budget."
    },
    {
     "type": "layers",
     "title": "A one-page board cyber report",
     "items": [
      {
       "label": "Headline",
       "parts": [
        "Overall position against appetite: within, approaching, outside",
        "One sentence on the trend"
       ]
      },
      {
       "label": "Top risks",
       "parts": [
        "5 to 7 scenarios with owner, trend and appetite status",
        "Quantified ranges where available"
       ]
      },
      {
       "label": "Key risk indicators",
       "parts": [
        "5 to 8 KRIs with thresholds and trend"
       ]
      },
      {
       "label": "Programme",
       "parts": [
        "Major milestones, budget versus plan, blockers"
       ]
      },
      {
       "label": "Events",
       "parts": [
        "Material incidents, near misses and lessons",
        "Regulatory developments"
       ]
      },
      {
       "label": "Decisions needed",
       "parts": [
        "Risk acceptances above threshold, investments, policy approvals"
       ]
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Question",
      "Good answer includes"
     ],
     "rows": [
      [
       "Could what happened to company X happen to us?",
       "The scenario, our relevant controls, test evidence, residual gap and plan"
      ],
      [
       "How much should we spend?",
       "Risk-based business case, tolerance gaps closed, comparison with peers as context only"
      ],
      [
       "Are we compliant?",
       "Obligations register status, open findings, regulator interactions"
      ],
      [
       "Would we know if we were breached?",
       "Detection coverage validated by testing, dwell-time measures"
      ],
      [
       "Can we recover?",
       "Tested recovery against impact tolerance for important services"
      ],
      [
       "Who is accountable?",
       "Named risk owners, decision rights, three lines model"
      ]
     ],
     "title": "Questions boards often ask, and what a good answer contains"
    },
    {
     "type": "compare",
     "title": "Budgeting approaches",
     "columns": [
      {
       "title": "Benchmark-based",
       "items": [
        "Spend as a percentage of IT budget or revenue, compared with peers",
        "Easy to explain",
        "Ignores your actual risk and history of under-investment"
       ]
      },
      {
       "title": "Compliance-based",
       "items": [
        "Fund what regulations and audits require",
        "Clear justification",
        "Can miss risks no rule mentions"
       ]
      },
      {
       "title": "Risk-based",
       "items": [
        "Fund controls that bring top risks within tolerance most efficiently",
        "Directly tied to appetite and quantification",
        "Needs credible risk estimates and ongoing measurement"
       ]
      }
     ]
    },
    {
     "type": "formula",
     "title": "Business case arithmetic",
     "items": [
      {
       "name": "Total cost of ownership",
       "expr": "TCO = initial cost + Σ annual running costs (licences, people, support) over the life",
       "meaning": "People and operations often exceed the purchase price."
      },
      {
       "name": "Net present value",
       "expr": "NPV = Σ (benefit_t − cost_t) ÷ (1 + r)^t",
       "meaning": "Benefits here are reductions in expected loss; r is the organisation's discount rate."
      },
      {
       "name": "Payback period",
       "expr": "Years until cumulative risk reduction exceeds cumulative cost",
       "meaning": "Simple and intuitive, but ignores later years and the tail."
      },
      {
       "name": "Spend benchmark (context only)",
       "expr": "Security spend ÷ IT spend × 100",
       "meaning": "Surveys often report ranges around high single digits to low teens, varying widely by sector."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Many security programmes buy tools with capital budgets and then cannot afford the people to operate them. Present budgets in three parts: run (keep current controls working), grow (close gaps to target) and transform (strategic initiatives), and show what risk each part addresses.",
     "title": "Budget for running costs, not just projects"
    },
    {
     "type": "chart",
     "kind": "bar",
     "title": "A three-year budget in run, grow and transform (illustrative)",
     "unit": " cr",
     "yLabel": "BDT crore",
     "caption": "Illustrative figures. As projects finish, their running costs move into 'run', so a credible plan shows run rising even when the total is flat; hiding that shift is how tools end up unstaffed.",
     "labels": [
      "Year 1",
      "Year 2",
      "Year 3"
     ],
     "series": [
      {
       "name": "Run",
       "values": [
        12,
        15,
        18
       ]
      },
      {
       "name": "Grow",
       "values": [
        8,
        6,
        4
       ]
      },
      {
       "name": "Transform",
       "values": [
        4,
        4,
        3
       ]
      }
     ]
    },
    {
     "type": "template",
     "title": "Board decision paper",
     "purpose": "Present a cyber risk decision to the board concisely with options and a recommendation.",
     "columns": [
      "Decision required",
      "Context and risk",
      "Options considered",
      "Recommendation",
      "Cost and funding",
      "Residual risk",
      "If we do nothing"
     ],
     "example": [
      [
       "Approve BDT 8 crore over 2 years for backup immutability and EHR recovery standby",
       "Ransomware 1-in-20-year loss estimated at BDT 60 crore, above tolerance of BDT 30 crore",
       "Do nothing; immutability only; immutability plus standby",
       "Immutability plus standby",
       "BDT 5 crore capex, BDT 1.5 crore opex per year; within approved envelope",
       "1-in-20 loss about BDT 25 crore, within tolerance",
       "Remain outside appetite; regulator concern after peer incidents"
      ]
     ],
     "rows": 4
    },
    {
     "type": "scenario",
     "title": "The budget conversation",
     "situation": "The CFO of a listed garment group tells the CISO that peers spend about 7% of IT budget on security, so the CISO's request for 12% is 'excessive'. The group has had two ransomware near misses and its quantified ransomware tail risk is above board tolerance. What is the BEST response?",
     "options": [
      {
       "text": "Reduce the request to 7% to match peers.",
       "feedback": "Matching peers ignores the group's specific risk and near misses.",
       "best": false
      },
      {
       "text": "Present the risk-based case: the tolerance gap, options to close it, their cost and risk reduction, and treat peer benchmarks as context rather than a target.",
       "feedback": "Best. Risk-based justification ties spending to the board's own appetite, which a percentage benchmark cannot do.",
       "best": true
      },
      {
       "text": "Argue that more spending is always better in security.",
       "feedback": "An unsupported claim that undermines credibility.",
       "best": false
      },
      {
       "text": "Escalate to the board without discussing with the CFO.",
       "feedback": "Bypassing the CFO damages relationships and the case is better made together.",
       "best": false
      }
     ]
    },
    {
     "type": "case",
     "title": "Rebuilding board confidence",
     "context": "A Dhaka-listed commercial bank suffered a card-fraud incident last year that the board first learned about from the media. The new CISO finds that the previous board reports were 30-page technical documents, risk was described only as 'medium', and no decisions were ever requested. The board chair asks for a new approach within one quarter.",
     "questions": [
      "What should the first new board report contain?",
      "How should the CISO handle incident escalation to the board in future?",
      "Which three decisions might the CISO reasonably ask the board to make in the first year?"
     ],
     "answer": "The first report should be short: overall position against an explicit cyber risk appetite, the top risks with owners and trends (quantified where possible), a handful of KRIs, an honest account of the card-fraud incident and lessons, programme status and clear decisions requested. Incident escalation should follow pre-agreed criteria so that material incidents reach the board chair or risk committee within hours, before media coverage. Reasonable first-year decisions include approving a cyber risk appetite with tolerances, approving a funded multi-year programme to close tolerance gaps, and approving the incident escalation and extortion policies, along with any risk acceptances above management's authority."
    },
    {
     "type": "reflection",
     "prompt": "If you had five minutes with your board next week, which single decision would you ask them to make, and what evidence would you bring?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Board pack",
       "def": "The set of papers provided to board members before a meeting, including risk reports and decision papers."
      },
      {
       "term": "Decision paper",
       "def": "A concise paper asking a governing body for a specific decision, with options and a recommendation."
      },
      {
       "term": "Total cost of ownership",
       "def": "The full cost of a solution over its life, including purchase, operation, people and support."
      },
      {
       "term": "Net present value",
       "def": "The value today of future benefits minus costs, discounted at the organisation's cost of capital."
      },
      {
       "term": "Run, grow, transform",
       "def": "A budgeting structure separating keeping current controls running, closing gaps and strategic change."
      },
      {
       "term": "Risk-based budgeting",
       "def": "Allocating security funds to the controls that most efficiently bring top risks within tolerance."
      },
      {
       "term": "Escalation criteria",
       "def": "Pre-agreed conditions under which incidents or risks must be reported to senior leaders or the board."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Board reports show position against appetite, top risks, a few KRIs, events and the decisions needed.",
      "Risk-based budgets tie spending to closing tolerance gaps; peer benchmarks are context, not targets.",
      "Count total cost of ownership, including the people who run the tools.",
      "Agree escalation criteria so the board hears about material incidents within hours, never from the media."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "What should a board cyber report always include?",
       "options": [
        "A complete list of every security tool deployed, with version numbers and licence counts",
        "Raw log samples",
        "Decisions the board is being asked to make",
        "Vendor marketing material"
       ],
       "answer": 2,
       "explain": "Boards govern through decisions; reports should make those explicit."
      },
      {
       "q": "Why are spend benchmarks weak as the sole basis for a security budget?",
       "options": [
        "They are always calculated incorrectly by the survey providers that publish them",
        "They ignore the organisation's own risk and appetite",
        "They are illegal to use",
        "They are too precise"
       ],
       "answer": 1,
       "explain": "Peers' spending does not reflect your threats, history or tolerance."
      },
      {
       "q": "A tool costs BDT 2 crore to buy and BDT 1 crore a year to run for four years. What is its four-year TCO?",
       "options": [
        "BDT 2 crore",
        "BDT 4 crore",
        "BDT 8 crore",
        "BDT 6 crore"
       ],
       "answer": 3,
       "explain": "2 + (1 × 4) = 6 crore."
      },
      {
       "q": "In a 'run, grow, transform' budget, what does 'run' fund?",
       "options": [
        "Keeping existing controls operating",
        "Strategic initiatives that will change the organisation's business model in five years",
        "Closing gaps to target only",
        "Board training"
       ],
       "answer": 0,
       "explain": "Run covers the cost of operating current controls."
      },
      {
       "q": "How should a board learn about a material cyber incident?",
       "options": [
        "Through pre-agreed escalation criteria, within hours",
        "From the annual report prepared at the end of the financial year",
        "From the media",
        "Only if customers complain"
       ],
       "answer": 0,
       "explain": "Escalation criteria ensure timely, direct board awareness."
      }
     ]
    }
   ]
  },
  {
   "id": "m8-l5",
   "title": "Leading the Security Programme and the Capstone",
   "subtitle": "Strategy, operating model, people and the final defence",
   "minutes": 35,
   "objectives": [
    "Write a security strategy on a page linked to business goals",
    "Choose an operating model and build the team and culture to deliver it",
    "Prepare the ZCSTG capstone and approach expert scenario questions"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Technology and governance come together in leadership. A security programme succeeds when its strategy is clearly linked to what the business is trying to do, when its operating model puts responsibility where knowledge and authority sit, and when its people are capable, trusted and sustainable. This final lesson pulls the eight blueprint sheets together and prepares you for the capstone."
    },
    {
     "type": "layers",
     "title": "Security strategy on a page",
     "items": [
      {
       "label": "Mission",
       "parts": [
        "Why security exists here, in business words: 'Keep customers' money and data safe so they can trust us'"
       ]
      },
      {
       "label": "Outcomes (3 years)",
       "parts": [
        "Top risks within appetite",
        "Resilient important services",
        "Regulator-ready assurance"
       ]
      },
      {
       "label": "Strategic pillars",
       "parts": [
        "Identity-first zero trust",
        "Data protection by design",
        "Resilience and recovery",
        "Third-party assurance",
        "People and culture"
       ]
      },
      {
       "label": "Enablers",
       "parts": [
        "Operating model, skills, budget, architecture standards, metrics"
       ]
      },
      {
       "label": "Measures",
       "parts": [
        "KRIs against tolerance",
        "Validated detection and recovery",
        "Audit and regulatory findings closed"
       ]
      }
     ]
    },
    {
     "type": "compare",
     "title": "Security operating models",
     "columns": [
      {
       "title": "Centralised",
       "items": [
        "One security function sets policy and runs most controls",
        "Consistent and efficient",
        "Can be distant from business units"
       ]
      },
      {
       "title": "Federated",
       "items": [
        "Business units run their own security teams under central policy",
        "Close to the business",
        "Risk of inconsistency and duplication"
       ]
      },
      {
       "title": "Hybrid with BISOs",
       "items": [
        "Central function for policy, architecture, SOC and GRC",
        "Business information security officers embedded in major units",
        "Balances consistency with business intimacy; the common choice in large groups"
       ]
      }
     ]
    },
    {
     "type": "tree",
     "title": "A hybrid security operating model with BISOs",
     "caption": "Shared capabilities stay central for consistency and scale, while BISOs sit inside the major business units, translating risk into their language and bringing their priorities back.",
     "root": {
      "label": "CISO",
      "text": "Strategy, appetite, board reporting",
      "children": [
       {
        "label": "Architecture",
        "text": "Patterns, standards, reviews"
       },
       {
        "label": "Security operations",
        "text": "Hybrid SOC, detection, response"
       },
       {
        "label": "GRC and assurance",
        "text": "Policy, risk, controls, regulation"
       },
       {
        "label": "Identity",
        "text": "IGA, PAM, authentication"
       },
       {
        "label": "BISOs",
        "text": "Embedded in business units",
        "children": [
         {
          "label": "Retail banking"
         },
         {
          "label": "Corporate banking"
         },
         {
          "label": "Digital channels"
         }
        ]
       }
      ]
     }
    },
    {
     "type": "framework",
     "title": "People and culture levers",
     "items": [
      {
       "label": "L1",
       "title": "Clear roles and career paths",
       "text": "Engineering, architecture, GRC and operations tracks with growth."
      },
      {
       "label": "L2",
       "title": "Sustainable operations",
       "text": "Rotas, automation and leave that prevent burnout in the SOC."
      },
      {
       "label": "L3",
       "title": "Security champions",
       "text": "Trained advocates in delivery teams and business units."
      },
      {
       "label": "L4",
       "title": "Psychological safety",
       "text": "People report mistakes and near misses without fear."
      },
      {
       "label": "L5",
       "title": "Partnership with the business",
       "text": "Security framed as enabling safe growth, not saying no."
      },
      {
       "label": "L6",
       "title": "Personal integrity and protection",
       "text": "Documented decisions, clear escalation, appropriate indemnity and insurance for leaders."
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Horizon",
      "Focus",
      "Example initiatives"
     ],
     "rows": [
      [
       "Now (0 to 6 months)",
       "Close critical exposures and set governance",
       "Phishing-resistant MFA for admins; immutable backups; appetite approved; obligations register"
      ],
      [
       "Next (6 to 18 months)",
       "Build core capabilities",
       "Per-application access; data classification; tiered TPRM; hybrid SOC; BIA and recovery tests; approved AI tools and AI use rules"
      ],
      [
       "Later (18 to 36 months)",
       "Optimise and quantify",
       "Micro-segmentation; CTEM; post-quantum inventory; risk-based budgeting; continuous controls monitoring"
      ]
     ],
     "title": "A three-horizon roadmap example"
    },
    {
     "type": "timeline",
     "title": "Roadmap horizons",
     "caption": "Each horizon earns the credibility and funding for the next: visible risk reduction first, then core capabilities, then optimisation and quantification.",
     "items": [
      {
       "when": "0-6 months",
       "label": "Now",
       "text": "Close critical exposures; approve appetite and obligations register"
      },
      {
       "when": "6-18 months",
       "label": "Next",
       "text": "Per-application access, tiered TPRM, hybrid SOC, BIA and recovery tests"
      },
      {
       "when": "18-36 months",
       "label": "Later",
       "text": "Micro-segmentation, CTEM, post-quantum inventory, risk-based budgeting"
      }
     ]
    },
    {
     "type": "steps",
     "title": "The ZCSTG capstone process",
     "items": [
      {
       "title": "Choose an organisation",
       "text": "Use a provided fictional case or an anonymised real one complex enough to touch all eight blueprint sheets."
      },
      {
       "title": "Govern",
       "text": "Draft decision rights, three lines, policy architecture and a CSF-style target profile."
      },
      {
       "title": "Quantify",
       "text": "Estimate the top ten risk scenarios with ranges and a loss exceedance view."
      },
      {
       "title": "Architect and protect",
       "text": "Set the target architecture, zero-trust, cloud and OT roadmaps, identity and data programmes."
      },
      {
       "title": "Extend, operate, endure",
       "text": "Design TPRM, SOC model, metrics, BIA and recovery strategy."
      },
      {
       "title": "Lead",
       "text": "Map regulation, plan assurance, build the budget and roadmap, present to a mock board and defend trade-offs."
      }
     ]
    },
    {
     "type": "table",
     "head": [
      "Habit",
      "Why it works"
     ],
     "rows": [
      [
       "Identify your role and the stage",
       "A CISO, an auditor and a board member have different 'best' actions"
      ],
      [
       "Look for the governance gap",
       "Many technical symptoms have an accountability or decision-rights root cause"
      ],
      [
       "Prefer risk-based, proportionate actions",
       "Extreme or blanket options are rarely best"
      ],
      [
       "Respect authority and independence",
       "Owners accept risk, audit stays independent, boards set appetite"
      ],
      [
       "Watch FIRST, BEST and MOST",
       "Sequence and emphasis change the answer"
      ],
      [
       "Choose evidence over assertion",
       "Tested results beat policies, promises and paper coverage"
      ]
     ],
     "title": "Answering expert scenario questions"
    },
    {
     "type": "scenario",
     "title": "Practice: the new CISO's first month",
     "situation": "You join a regional power distribution company as its first CISO. There is no risk appetite for cyber, a flat IT/OT network, an unreviewed 60-page policy, a small IT security team and a regulator asking about critical infrastructure obligations. What should you do FIRST?",
     "options": [
      {
       "text": "Buy an OT monitoring platform in week one to show progress.",
       "feedback": "A tool without priorities or ownership may not address the biggest risk and wastes credibility.",
       "best": false
      },
      {
       "text": "Build a rapid picture of top risks and obligations with business and engineering leaders, then agree governance foundations with the executive (decision rights, appetite draft and a 90-day plan for the most critical exposures, such as IT/OT separation).",
       "feedback": "Best. It balances quick risk reduction with the governance foundations everything else depends on, and engages the people who own the risk.",
       "best": true
      },
      {
       "text": "Rewrite the 60-page policy before doing anything else.",
       "feedback": "Policy matters, but rewriting it first delays risk reduction and engagement.",
       "best": false
      },
      {
       "text": "Start a full ISO/IEC 27001 certification project immediately.",
       "feedback": "Certification may be useful later; it is not the first priority for the most critical exposures.",
       "best": false
      }
     ]
    },
    {
     "type": "checklist",
     "title": "Capstone submission checklist",
     "items": [
      "Governance charter with decision rights and three lines",
      "Top-ten risk scenarios with ranges and a loss exceedance view",
      "Target architecture and phased roadmaps for zero trust, cloud and OT",
      "Identity, data protection and privacy programme with a sample DPIA",
      "Third-party and software supply-chain process with tiering and exit plans",
      "SOC model, metrics catalogue and KRIs linked to appetite",
      "BIA, recovery strategy and crisis playbook",
      "Regulatory obligations map and assurance plan",
      "Three-year budget, business case and roadmap",
      "Ten-slide board presentation and defence of three trade-offs"
     ]
    },
    {
     "type": "reflection",
     "prompt": "Looking across the eight blueprint sheets (govern, quantify, architect, protect, extend, operate, endure, lead), which is weakest in your organisation today, and what would you do about it in the next 90 days?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Security strategy",
       "def": "A plan linking security outcomes, priorities and investments to business goals over several years."
      },
      {
       "term": "Operating model",
       "def": "How security responsibilities, people, processes and reporting lines are organised."
      },
      {
       "term": "BISO",
       "def": "Business information security officer: a security leader embedded in a business unit."
      },
      {
       "term": "Federated model",
       "def": "An operating model in which business units run security teams under central policy."
      },
      {
       "term": "Roadmap horizon",
       "def": "A time band such as now, next and later used to sequence initiatives."
      },
      {
       "term": "Psychological safety",
       "def": "A climate in which people can report mistakes and concerns without fear of blame."
      },
      {
       "term": "Capstone",
       "def": "The final ZCSTG project in which learners design and defend a complete security strategy and governance programme."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Write strategy on a page in business language, linked to outcomes and measures.",
      "Put responsibility where knowledge and authority sit; hybrid models with BISOs balance consistency and closeness.",
      "Sustain people with clear careers, sane rotas, champions and psychological safety.",
      "In scenario questions, look for the governance gap, respect authority and prefer evidence over assertion."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "What should a security strategy's mission be written in?",
       "options": [
        "Technical language naming the specific products and configurations to be deployed",
        "Legal language only",
        "Vendor terminology",
        "Business language linked to what the organisation values"
       ],
       "answer": 3,
       "explain": "A mission in business terms connects security to purpose."
      },
      {
       "q": "What is the main advantage of a hybrid model with BISOs?",
       "options": [
        "Every business unit chooses its own policies and tools independently",
        "No central security function is needed",
        "Central consistency combined with close business partnership",
        "It eliminates the need for a SOC"
       ],
       "answer": 2,
       "explain": "BISOs bring business intimacy while central functions keep consistency."
      },
      {
       "q": "In expert scenario questions, what often lies behind a technical symptom?",
       "options": [
        "A shortage of the latest security products in the organisation's toolset",
        "A governance or accountability gap",
        "A typing error",
        "Insufficient bandwidth"
       ],
       "answer": 1,
       "explain": "Many symptoms stem from unclear ownership or decision rights."
      },
      {
       "q": "Which roadmap horizon typically contains 'close critical exposures and set governance'?",
       "options": [
        "Later (18 to 36 months)",
        "Next (6 to 18 months)",
        "Now (0 to 6 months)",
        "After the next audit"
       ],
       "answer": 2,
       "explain": "Urgent exposures and foundations come first."
      },
      {
       "q": "Why is psychological safety important in security teams?",
       "options": [
        "It removes the need for any incident response plan or escalation procedure",
        "It reduces salaries",
        "It replaces training",
        "People report mistakes and near misses early"
       ],
       "answer": 3,
       "explain": "Early reporting of errors and near misses reduces harm."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.exam.push([
 {
  "module": "m5",
  "q": "A TPRM team sends the same 280-question questionnaire to all 1,400 suppliers. Critical suppliers receive no deeper review, and response rates are low. What should the team change FIRST?",
  "options": [
   "Tier suppliers by inherent risk and scale assurance to the tier",
   "Shorten the questionnaire to 50 questions and send it to every supplier twice a year instead",
   "Hire more analysts to read all responses",
   "Stop assessing suppliers and rely on contracts"
  ],
  "answer": 0,
  "explain": "Tiering focuses effort on critical relationships. Shorter or more frequent uniform questionnaires, more staff or dropping assessment do not fix the misallocation."
 },
 {
  "module": "m5",
  "q": "A business unit signs a SaaS contract and uploads customer data before security is informed. Which process control would prevent this MOST effectively?",
  "options": [
   "Security reviews all purchase orders after payment, looking for unapproved software suppliers",
   "Annual awareness training for business units",
   "Procurement cannot issue orders for higher-tier suppliers until TPRM is complete",
   "A clause in the code of conduct"
  ],
  "answer": 2,
  "explain": "A hard gate in procurement stops data flowing before assessment. After-the-fact review, training or conduct clauses are weaker."
 },
 {
  "module": "m5",
  "q": "A supplier's SOC 2 Type II report is unqualified, but its hosting provider is carved out. The service is critical. What should the TPRM lead do?",
  "options": [
   "Accept the report because an unqualified opinion covers all of the supplier's dependencies",
   "Assess the hosting provider separately as a critical fourth party",
   "Reject the supplier because carve-outs are not allowed",
   "Ask the auditor to reissue the report"
  ],
  "answer": 1,
  "explain": "Carved-out subservice organisations are not covered by the opinion, so they need their own assessment. Rejection or reissue are not appropriate responses."
 },
 {
  "module": "m5",
  "q": "A clinic's cloud booking supplier's assurance report lists a CUEC requiring customers to remove leavers' access promptly. The clinic has no leaver process for the platform. What is the implication?",
  "options": [
   "The supplier's controls may not achieve their objectives until the clinic fixes its leaver process",
   "None, because the supplier is responsible for all user access to its platform",
   "The report is invalid",
   "The clinic should change supplier"
  ],
  "answer": 0,
  "explain": "CUECs are customer responsibilities; failing them undermines the assurance. The report remains valid and changing supplier is unnecessary."
 },
 {
  "module": "m5",
  "q": "A new critical flaw appears in a popular open-source library. A telecom needs to know within a day which products, including bought software, are affected. Which capability matters MOST?",
  "options": [
   "A contract clause requiring suppliers to declare that their products are free of all vulnerabilities",
   "An annual code review",
   "A firewall rule blocking the library's website",
   "Central, queryable SBOMs for in-house apps and supplier products"
  ],
  "answer": 3,
  "explain": "SBOMs provide the inventory needed to answer quickly. Declarations, annual reviews or blocking websites do not reveal where components are used."
 },
 {
  "module": "m5",
  "q": "An internal package named 'payments-core' is replaced in builds by a public package with the same name containing malware. Which control would have prevented this?",
  "options": [
   "Running antivirus on developer laptops and requiring weekly full-disk scans",
   "Rotating developer passwords",
   "Resolving internal names only from a private registry with pinned versions",
   "Increasing code review time"
  ],
  "answer": 2,
  "explain": "Dependency confusion is prevented by controlling where packages resolve from and pinning versions."
 },
 {
  "module": "m5",
  "q": "A central bank asks a commercial bank how it would keep payments running if its card-processing provider failed suddenly. The bank has only a planned-exit clause in the contract. What is missing?",
  "options": [
   "A tested stressed-exit and continuity plan for the service",
   "A longer contract term with the current provider so that it is less likely to leave the market",
   "A higher liability cap",
   "A pooled audit"
  ],
  "answer": 0,
  "explain": "Stressed exit planning addresses sudden failure. Longer terms, liability caps or audits do not keep payments running."
 },
 {
  "module": "m5",
  "q": "A logistics firm learns from the news that its file-transfer supplier is being mass-exploited. The supplier is silent. What should the firm do FIRST?",
  "options": [
   "Wait for formal notice from the supplier, as required by the contract, before taking any action",
   "Identify affected data and connections, then contain by suspending integrations and rotating credentials",
   "Terminate the contract at once",
   "Announce publicly that customers are not affected"
  ],
  "answer": 1,
  "explain": "The firm must assess and contain its own exposure promptly. Waiting, terminating without assessment or premature statements increase risk."
 },
 {
  "module": "m6",
  "q": "A mid-sized hospital wants 24x7 security monitoring but has a five-person security team. The CFO asks for the most realistic model. What should the CISO recommend?",
  "options": [
   "Build an internal 24x7 SOC by asking the five staff to rotate night shifts every week",
   "Monitor only during office hours",
   "A hybrid model with MDR for round-the-clock monitoring and internal ownership of escalation",
   "Outsource all incident decisions to the provider"
  ],
  "answer": 2,
  "explain": "A hybrid model provides affordable 24x7 coverage while retaining context and authority. A five-person rota is unsustainable; office hours leave gaps; full outsourcing removes accountability."
 },
 {
  "module": "m6",
  "q": "A SOC reports 90% coverage of a public technique matrix based on rules installed. A purple-team test detects 8 of 25 emulated techniques. What should be reported to leadership?",
  "options": [
   "The 90% figure, because rules exist and the purple-team test used an unrealistic environment",
   "Nothing until all gaps are fixed",
   "That a new SIEM is required",
   "Validated detection of about one-third for the tested threat, with a plan to close gaps"
  ],
  "answer": 3,
  "explain": "Tested results are the honest measure. Reporting paper coverage misleads; hiding results undermines governance; the platform is not shown to be the cause."
 },
 {
  "module": "m6",
  "q": "During a SEV1 ransomware incident at night, the SOC cannot reach anyone authorised to isolate the core billing system. What is the root cause in the incident response plan?",
  "options": [
   "No named deputies and criteria for business-impacting containment",
   "The SOC lacks enough analysts on the night shift to monitor the billing system closely",
   "The playbook format is outdated",
   "The SIEM retention is too short"
  ],
  "answer": 0,
  "explain": "Decision rights with deputies and criteria enable action out of hours. Staffing, formatting or retention do not resolve authority."
 },
 {
  "module": "m6",
  "q": "An attacker may have access to corporate email during an active intrusion. The incident team plans to coordinate by email. What should the incident lead require?",
  "options": [
   "Encrypt all incident emails with the existing corporate certificates and continue as planned",
   "Pause the response until email is rebuilt",
   "Switch to a pre-agreed out-of-band communication channel",
   "Use public social media to coordinate"
  ],
  "answer": 2,
  "explain": "If email is compromised, encryption with the same environment may not help. Out-of-band channels keep the response hidden from the attacker."
 },
 {
  "module": "m6",
  "q": "A bank has 60,000 open vulnerabilities and can fix 4,000 per month. Which prioritisation approach reduces the MOST real risk?",
  "options": [
   "Highest CVSS scores first, regardless of asset exposure or any evidence of exploitation",
   "Known-exploited and high-EPSS flaws on exposed and crown-jewel assets first",
   "Oldest vulnerabilities first",
   "Those easiest to patch first"
  ],
  "answer": 1,
  "explain": "Exploitation evidence combined with asset context targets what attackers use against what matters. CVSS alone, age or ease misdirect effort."
 },
 {
  "module": "m6",
  "q": "An internet-facing VPN has a known-exploited flaw, but the vendor patch breaks MFA. What is the BEST action?",
  "options": [
   "Apply the patch immediately even though MFA will stop working for all remote users",
   "Accept the risk until next quarter",
   "Disable the VPN permanently",
   "Time-limited exception with source restrictions, monitoring and a virtual patch"
  ],
  "answer": 3,
  "explain": "Compensating controls reduce exposure until a working fix is available. Breaking MFA, long acceptance or permanent shutdown are worse trade-offs."
 },
 {
  "module": "m6",
  "q": "A board asks for one measure of the organisation's resilience to credential-based attacks. Which KRI is BEST?",
  "options": [
   "Number of password resets processed by the service desk last quarter",
   "Number of security awareness emails sent",
   "Share of privileged accounts using phishing-resistant MFA",
   "Total number of user accounts"
  ],
  "answer": 2,
  "explain": "Phishing-resistant MFA coverage for privileged accounts directly reflects exposure to credential attacks. The others are activity counts."
 },
 {
  "module": "m7",
  "q": "A payments company sets a 2-hour RTO for its wallet service. Its ledger database restores from nightly backups in 7 hours. What should the resilience lead do?",
  "options": [
   "Show the gap to the owner with options such as warm standby, or a formally accepted longer RTO",
   "Keep the 2-hour RTO in the plan, because it reflects what the business needs from the service",
   "Quietly change the RTO to 7 hours",
   "Ask the database team to work faster in an incident"
  ],
  "answer": 0,
  "explain": "Objectives must be achievable or consciously accepted. Keeping an impossible target, silent changes or hope are not governance."
 },
 {
  "module": "m7",
  "q": "A firm replicates its ERP in real time to a second data centre and believes it does not need backups. What is the main flaw?",
  "options": [
   "The second data centre may be too far away for real-time replication to keep up during busy periods",
   "Replication copies corruption and encryption to the second site",
   "Replication is too expensive",
   "Regulators ban replication"
  ],
  "answer": 1,
  "explain": "Replication mirrors destructive changes; isolated point-in-time copies are still needed."
 },
 {
  "module": "m7",
  "q": "Ransomware groups often delete backups using stolen domain admin rights. Which design change BEST protects recovery?",
  "options": [
   "Running backups every hour instead of every night using the same domain administrator account",
   "Adding a third replicated site",
   "Renaming the backup server",
   "Immutable copies managed by separate, MFA-protected backup identities"
  ],
  "answer": 3,
  "explain": "Separation and immutability break the attacker's path to deletion. Frequency, more replicas or renaming do not."
 },
 {
  "module": "m7",
  "q": "A 40 TB file service restores at 4 TB per hour. Detection and decision usually take 3 hours and validation 2 hours. What is a realistic recovery time?",
  "options": [
   "About 10 hours",
   "About 5 hours",
   "About 15 hours",
   "About 40 hours"
  ],
  "answer": 2,
  "explain": "3 hours to detect and decide + 40 ÷ 4 = 10 hours of copying + 2 hours to validate ≈ 15 hours."
 },
 {
  "module": "m7",
  "q": "Three hours into a breach, the CEO wants to announce that 'no customer data was affected', but forensics has not confirmed this. What should the crisis team issue?",
  "options": [
   "The CEO's reassurance, because customers need confidence and the statement can be corrected later if needed",
   "A holding statement with known facts, customer advice and a time for the next update",
   "Nothing until the investigation finishes",
   "A statement blaming a named supplier"
  ],
  "answer": 1,
  "explain": "Honest holding statements protect credibility. Unverified reassurance, silence or premature blame cause harm."
 },
 {
  "module": "m7",
  "q": "Which is the MOST appropriate time for a board to agree its position on ransom payments?",
  "options": [
   "In advance, with legal advice, decision rights and conditions documented",
   "During the incident, once the negotiators have assessed the attacker's reliability and demand",
   "After the incident, as part of the lessons-learned review",
   "Never; it should be left to the insurer"
  ],
  "answer": 0,
  "explain": "Peacetime policy avoids rushed decisions and clarifies constraints. Leaving it to the insurer or to the moment is poor governance."
 },
 {
  "module": "m7",
  "q": "Three successive exercises at a hospital found that nobody could authorise clinical downtime procedures at night. What is the BEST corrective action?",
  "options": [
   "Record the same action in this year's report and repeat the full exercise in twelve months' time",
   "Stop exercises until the issue is fixed",
   "Let the CISO approve clinical downtime",
   "Assign the action to a named executive, report it to the risk committee and verify it in a short unannounced test"
  ],
  "answer": 3,
  "explain": "Executive ownership and verification close the loop. Repeating the action, stopping exercises or giving clinical authority to the CISO are wrong."
 },
 {
  "module": "m7",
  "q": "A regulator asks a bank to show it can stay within impact tolerance for payments under a severe but plausible scenario. Which evidence is STRONGEST?",
  "options": [
   "Results of a scenario test showing payments restored within tolerance, with lessons tracked",
   "A signed policy stating that the bank will always restore payments within its stated tolerance",
   "A list of DR products",
   "An ISO certificate for the data centre"
  ],
  "answer": 0,
  "explain": "Tested evidence against the scenario demonstrates capability; statements, product lists or certificates do not."
 },
 {
  "module": "m8",
  "q": "A Bangladeshi IT services firm with EU customers and an EU subsidiary detects an intrusion affecting an EU client service and possibly personal data. Which approach to notifications is BEST?",
  "options": [
   "Apply only Bangladeshi law, since the firm's head office and main data centre are both in Dhaka",
   "Use a prepared multi-regime notification matrix with legal counsel and start the earliest applicable clock",
   "Wait until data theft is confirmed by forensics",
   "Leave notification to the EU client"
  ],
  "answer": 1,
  "explain": "Several regimes may apply with different deadlines; a prepared matrix and counsel prevent missed obligations. The other options ignore applicable duties or delay."
 },
 {
  "module": "m8",
  "q": "A bank's compliance team summarises Bangladesh's cyber law from a two-year-old training slide. What is the MAIN risk?",
  "options": [
   "Training slides are copyrighted and cannot be used by compliance teams under any circumstances",
   "Older laws are always stricter, so the bank will over-comply",
   "There is no risk if the slide was accurate at the time",
   "The law may have been replaced or amended since, so obligations could be wrong"
  ],
  "answer": 3,
  "explain": "Bangladesh's cyber statutes changed several times in recent years; outdated summaries can misstate obligations."
 },
 {
  "module": "m8",
  "q": "Internal audit finds for the third consecutive year that network device changes lack approval. Which response BEST resolves the issue?",
  "options": [
   "Ask audit to use a smaller sample size next year so that the number of exceptions reported falls",
   "Accept the finding again due to workload",
   "Automate the change workflow with continuous monitoring and report progress to the audit committee",
   "Let security approve all network changes"
  ],
  "answer": 2,
  "explain": "Fixing the process cause and adding monitoring closes the gap with evidence. Smaller samples hide it; acceptance or shifting work does not fix it."
 },
 {
  "module": "m8",
  "q": "An auditor confirms through a walkthrough that a backup procedure would meet the RPO if followed, but has not examined any actual backup records. What can be concluded?",
  "options": [
   "Design effectiveness only; operating effectiveness is untested",
   "The control is fully effective, because a walkthrough covers both its design and its operation",
   "The control is ineffective",
   "Operating effectiveness only"
  ],
  "answer": 0,
  "explain": "Walkthroughs test design. Operating effectiveness needs evidence that the control ran over the period."
 },
 {
  "module": "m8",
  "q": "A CFO rejects a security budget because it exceeds peer spending ratios. The organisation's quantified tail risk is above board tolerance. What should the CISO present?",
  "options": [
   "A revised budget reduced to match the peer average, with a note that risk may increase as a result",
   "A risk-based case showing how options close the tolerance gap and at what cost",
   "A list of tools other companies have bought",
   "A warning that breaches are inevitable"
  ],
  "answer": 1,
  "explain": "Linking investment to the board's own tolerance is the strongest justification; benchmarks are context only."
 },
 {
  "module": "m8",
  "q": "A board learned of a major incident from the media. Which control would MOST directly prevent this recurring?",
  "options": [
   "A longer and more detailed quarterly board report covering all incidents of every severity level",
   "A new SIEM platform",
   "Pre-agreed escalation criteria and timelines for informing the board",
   "Mandatory security training for directors"
  ],
  "answer": 2,
  "explain": "Escalation criteria ensure the board hears promptly about material incidents. Longer reports, tools or training do not guarantee timely escalation."
 },
 {
  "module": "m8",
  "q": "A newly appointed CISO at a power utility finds no cyber risk appetite, a flat IT/OT network and regulator questions about critical infrastructure. What should the CISO do FIRST?",
  "options": [
   "Purchase an OT monitoring platform immediately so that the regulator can see visible progress",
   "Rewrite the security policy first",
   "Start ISO/IEC 27001 certification",
   "Engage business and engineering leaders on top risks and obligations, then agree governance foundations and a 90-day plan"
  ],
  "answer": 3,
  "explain": "Foundations and urgent risk reduction with risk owners come first. Tools, policy rewrites or certification are later or narrower steps."
 }
]);
