import {
  EducationItem,
  ExperienceItem,
  ProjectItem,
  SkillCategory,
  CertificationItem,
  InterestItem,
  LanguageItem
} from '../types/portfolio';

export const personalInfo = {
  name: 'Suman Das',
  role: 'Mechanical Engineering Student',
  headline: 'Mechanical Engineering • CAD • Data Visualization',
  tagline: 'Detail-oriented mechanical engineering student with hands-on industrial training at Indian Railways, CAD modeling expertise, and basic data visualization knowledge.',
  location: 'Purba Medinipur, West Bengal',
  currentInstitution: 'Ramkrishna Mahato Government Engineering College, Purulia',
  affiliation: 'Maulana Abul Kalam Azad University of Technology (MAKAUT)',
  degreeTimeline: '2024 – 2027',
  phone: '+91-9832108788',
  email: 'hariharadasa074@gmail.com',
  linkedIn: 'linkedin.com/in/suman-das44',
  linkedInUrl: 'https://www.linkedin.com/in/suman-das44/',
  aboutBio: [
    'I am a detail-oriented Mechanical Engineering student currently pursuing my B.Tech at Ramkrishna Mahato Government Engineering College, Purulia (MAKAUT). My engineering foundation is built on both rigorous academic theory and practical workshop manufacturing.',
    'I completed my Diploma in Mechanical Engineering from Contai Polytechnic, where I designed and fabricated a functional Single Acting Reciprocating Pump utilizing a slider-crank mechanism.',
    'Recently, I completed industrial vocational training with Indian Railways at the Routine Overhaul (ROH) Depot in Jharkhand. There, I gained first-hand exposure to railway wagon diagnostics, bogie overhaul, CBC couplers, air brake distributor valves, precision wheelset distance calibration, and heavy industrial machinery like surface wheel lathes and EOT cranes.',
    'I am proficient in 2D/3D CAD design with AutoCAD and SolidWorks, combined with basic knowledge of data visualization using Power BI and Microsoft Excel. I am driven by a passion for mechanical maintenance, automotive systems, and applied research.'
  ],
  stats: [
    { label: 'Degree', value: 'B.Tech Mechanical' },
    { label: 'Graduation', value: '2024 – 2027' },
    { label: 'Design Tools', value: 'AutoCAD & SolidWorks' },
    { label: 'Industrial Training', value: 'Indian Railways' },
    { label: 'Core Competency', value: 'CAD & Maintenance' }
  ]
};

export const educationData: EducationItem[] = [
  {
    degree: 'B.Tech in Mechanical Engineering',
    institution: 'Ramkrishna Mahato Government Engineering College, Purulia',
    affiliation: 'Maulana Abul Kalam Azad University of Technology (MAKAUT)',
    duration: '2024 – 2027',
    grade: 'Expected First Class',
    highlights: [
      'Manufacturing Process Workshop & Machine Tools',
      'Computer-Aided Design (CAD)',
      'Automobile Engineering',
      'Fluid Mechanics & Hydraulics Machinery Laboratory',
      'Industrial Engineering & Operations Management'
    ]
  },
  {
    degree: 'Diploma in Mechanical Engineering',
    institution: 'Contai Polytechnic',
    affiliation: 'West Bengal State Council of Technical Education (WBSCTE)',
    duration: '2021 – 2024',
    grade: 'CGPA: 8.0 / 10',
    highlights: [
      'Core foundation in Engineering Mechanics, Strength of Materials, and Thermodynamics',
      'Machining operations: Lathe turning, milling, shaping, and precision fitting',
      'Theory of Machines, Slider-Crank mechanism, and machine fabrication',
      'Awarded Diploma with 8.0 CGPA performance across technical coursework'
    ]
  }
];

export const experienceData: ExperienceItem = {
  role: 'Vocational Industrial Trainee',
  organization: 'Indian Railways',
  location: 'ROH (Routine Overhaul) Depot, Jharkhand',
  duration: '28 July 2026 – 09 August 2026',
  summary: 'Intensive on-site industrial vocational training in railway freight rolling-stock maintenance, bogie overhaul, mechanical brake rigging, and precision metrology inspection.',
  responsibilities: [
    {
      title: 'Industrial Safety & PPE Compliance',
      description: 'Strictly adhered to railway safety protocols, workshop hazard zoning, personal protective equipment (PPE) compliance, and heavy shop-floor safety procedures.',
      icon: 'ShieldCheck'
    },
    {
      title: 'Wagon Component Maintenance',
      description: 'Documented the maintenance of heavy wagon components including freight bogies (CASNUB), air brake distributor valves (DV), and Center Buffer Coupler (CBC) systems.',
      icon: 'Wrench'
    },
    {
      title: 'Braking & Mechanical Joints Analysis',
      description: 'Analysed the mechanical operation of articulated joints, brake levers, slack adjusters, and pneumatic brake cylinder assemblies during train inspection cycles.',
      icon: 'Activity'
    },
    {
      title: 'Heavy Workshop Machinery Monitoring',
      description: 'Monitored the operation and maintenance schedule of pit-mounted surface wheel lathes, heavy Electric Overhead Traveling (EOT) cranes, and hydraulic baling presses.',
      icon: 'Cog'
    },
    {
      title: 'Precision Wheelset Distance Calibration',
      description: 'Calibrated wheel flange-to-flange distances and wheel diameter profile tolerances using standardized master reference wheels and high-precision distance micrometer gauges.',
      icon: 'Gauge'
    }
  ]
};

export const featuredProject: ProjectItem = {
  title: 'Single Acting Reciprocating Pump',
  category: 'Mechanical Design / Manufacturing',
  scope: 'Diploma Project — Contai Polytechnic',
  description: 'Designed and fabricated a functional Single Acting Reciprocating Pump utilizing a slider-crank mechanism for positive displacement hydraulic discharge.',
  detailedDescription: [
    'Conceived, mathematically calculated, modeled, and fabricated a working positive displacement reciprocating pump driven by an electric prime mover through a precision slider-crank assembly.',
    'In this single-acting reciprocating pump mechanism, fluid is drawn into the PVC cylinder during the suction stroke through a one-way metal suction check valve, and discharged under positive hydraulic pressure during the forward delivery stroke through a dedicated non-return valve.',
    'Carried out hands-on fabrication operations including precision drilling, structural arc welding of the base frame, piston assembly fitting for tight hydraulic seal, valve manifold assembly, and alignment of the connecting rod and crank pin bearing.'
  ],
  mechanism: 'Slider-Crank Mechanism (Rotary to Linear Reciprocating Motion)',
  tags: [
    'Mechanical Design',
    'Slider-Crank Mechanism',
    'Fabrication',
    'Reciprocating Pump',
    'Hydraulic Machinery'
  ],
  specifications: [
    { label: 'Mechanism Type', value: 'Slider-Crank Mechanism' },
    { label: 'Action Cycle', value: 'Single Acting (Suction & Delivery per Crank Revolution)' },
    { label: 'Primary Materials', value: 'PVC Cylinder, Metal valves, Syringe as piston' },
    { label: 'Fabrication Methods', value: 'Drilling and Arc Welding' },
    { label: 'Testing Medium', value: 'Hydraulic Water Circulation at Atmospheric Suction' }
  ],
  components: [
    'PVC Reciprocating Cylinder Barrel',
    'Syringe Piston Assembly with Tight Hydraulic Seal',
    'Piston Rod & Alignment Gland Bushing',
    'Crosshead Guide Block',
    'High-Tensile Connecting Rod',
    'Balanced Crank Disc & Drive Shaft',
    'Metal Suction Check Valve',
    'Metal Delivery Non-Return Valve',
    'Suction & Discharge Piping System'
  ],
  procedureTitle: 'Procedure to make this idea into reality: Single-Acting Reciprocating Pump',
  procedureSteps: [
    {
      stepNumber: 1,
      title: 'Mechanism & Cylinder Assembly',
      items: [
        { label: 'Mechanism', description: 'Operates on a slider-crank mechanism to convert rotary motion into reciprocating motion.' },
        { label: 'Cylinder', description: 'Fabricated from electrical wiring PVC pipe.' },
        { label: 'Piston & Suction', description: 'A syringe functions as the piston inside the PVC cylinder bore to produce suction.' },
        { label: 'Linkage', description: 'A nail is used as the connecting pin to join the piston assembly to the crank.' }
      ]
    },
    {
      stepNumber: 2,
      title: 'Valve Fabrication',
      items: [
        { label: 'Materials & Joining', description: 'Pump valves were fabricated by joining a washer and a bolt using a workshop arc welding machine.' }
      ]
    },
    {
      stepNumber: 3,
      title: 'Mounting Challenge & Solution',
      challenge: 'Securing and properly positioning the welded valve inside the cylinder bore of the vertical pump configuration.',
      solution: 'Utilizing the thermoplastic properties of electrical wiring PVC pipe—which softens when heated with a lighter and permanently retains its bent shape upon cooling—the pipe was heated and shaped to form a valve seating base. Additional pipe segments were incorporated to lock the valve firmly in place inside the cylinder bore.'
    },
    {
      stepNumber: 4,
      title: 'Drive System Challenge & Solution',
      challenge: "The load was too heavy (due to metal valve and high discharge of water) that electrical motor can't pull the water.",
      solution: 'So we made a manual handle to rotate the crank disc (made of cardboard).'
    }
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Technical Skills',
    description: 'Core engineering drafting, modeling, and analytical competencies',
    skills: [
      {
        name: '2D CAD Drawing',
        levelDescription: 'Orthographic projections, assembly drawings, section views, geometric dimensioning and tolerancing (GD&T)',
        applications: 'Machine part drafting, workshop fabrication blueprints, hydraulic layout schematics'
      },
      {
        name: '3D CAD Drawing',
        levelDescription: 'Parametric solid modeling, assembly constraints, mechanical part mating, and exploded views',
        applications: 'Pump assemblies, gear systems, rolling-stock component modeling'
      },
      {
        name: 'Data Visualization',
        levelDescription: 'Basic knowledge of data visualization principles, KPI charting, and introductory dashboards',
        applications: 'Tata data visualization simulation, equipment status reporting, summary charts'
      }
    ]
  },
  {
    category: 'Software & Tools',
    description: 'Industry-standard design, calculation, and technical tools',
    skills: [
      {
        name: 'AutoCAD',
        levelDescription: '2D drafting, layer management, precision dimensioning, title block standards',
        applications: 'Engineering fabrication drawings, mechanical component details'
      },
      {
        name: 'SolidWorks',
        levelDescription: '3D feature-based parametric modeling, assembly motion, sheet metal, and part modeling',
        applications: 'Slider-crank mechanism modeling, pump casing design'
      },
      {
        name: 'Power BI',
        levelDescription: 'Basic knowledge of standard visual charts and introductory data exploration',
        applications: 'Tata Data Visualization certificate project'
      },
      {
        name: 'Microsoft Excel',
        levelDescription: 'Engineering calculation sheets, statistical formulas, pivot tables, charts'
      }
    ]
  },
  {
    category: 'Professional Strengths',
    description: 'Work ethic and problem-solving mindset applied to technical engineering',
    skills: [
      {
        name: 'Critical Thinking',
        levelDescription: 'Root-cause diagnostic analysis, logical troubleshooting of mechanical failures and dimensional tolerances',
        applications: 'Evaluated brake rigging wear patterns and hydraulic valve leakages during railway training'
      },
      {
        name: 'Diligence',
        levelDescription: 'Meticulous attention to safety standards, precision metrology, tolerance specs, and documentation',
        applications: 'Ensured zero-error calibration on master wheel distance gauges and thorough maintenance records'
      }
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    title: 'Data Visualisation: Empowering Business with Effective Insights',
    issuer: 'Tata Group (Issued by Forage)',
    date: 'March 19th, 2026',
    credentialId: 'gC24iPBEyuK6Tp96F',
    skillsCovered: [
      'Framing the Business Scenario',
      'Choosing the Right Visuals',
      'Creating Effective Visuals',
      'Communicating Insights and Analysis'
    ],
    description: 'Hands-on practical job simulation program completed by Suman Das under Tata Insights and Quants & Forage. Demonstrated competency in framing business scenarios, selecting appropriate visual charts, constructing effective dashboards, and communicating insights to executive leadership.'
  }
];

export const interestsData: InterestItem[] = [
  {
    title: 'Mechanical Maintenance',
    description: 'Preventive, predictive, and corrective maintenance of industrial machinery, rotating equipment, alignment tolerances, and lubrication systems.',
    focusAreas: ['Vibration Analysis', 'Component Overhaul', 'Bearing Diagnostics', 'Preventive Scheduling'],
    icon: 'Wrench'
  },
  {
    title: 'Automobile Engineering',
    description: 'Internal combustion engines, electric and hybrid powertrains, transmission dynamics, pneumatic/hydraulic braking mechanisms, and vehicle safety architecture.',
    focusAreas: ['Brake Rigging & Anti-Lock Systems', 'Powertrain Dynamics', 'Suspension Tuning', 'EV Transition'],
    icon: 'Car'
  },
  {
    title: 'Engineering Research',
    description: 'Applied investigations into thermodynamic efficiency, sustainable manufacturing processes, advanced fluid power systems, and fatigue life of machine members.',
    focusAreas: ['Fluid Dynamics', 'Finite Element Analysis', 'Sustainable Fabrication', 'Mechanism Design'],
    icon: 'Microscope'
  }
];

export const languagesData: LanguageItem[] = [
  {
    language: 'Bengali',
    proficiency: 'Native / Mother Tongue',
    nativeScript: 'বাংলা'
  },
  {
    language: 'English',
    proficiency: 'Fluent / Professional Working Proficiency',
    nativeScript: 'English'
  },
  {
    language: 'Hindi',
    proficiency: 'Fluent / Conversational & Technical',
    nativeScript: 'हिन्दी'
  }
];
