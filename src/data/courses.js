import { courseCategories } from './courseCategories';

const detailedCourses = [
  {
    slug: 'ms-office',
    title: 'MS Office',
    shortDescription:
      'Learn essential Microsoft Office tools for documentation, data handling, and presentations.',
    fullDescription:
      'MS Office course is designed to provide essential computer skills required for daily office work. It covers the most widely used Microsoft applications that help in documentation, data management, and presentations.',
    overview:
      'MS Office course is designed to provide essential computer skills required for daily office work. It covers the most widely used Microsoft applications that help in documentation, data management, and presentations.',
    courseContent: [
      'Introduction to Computers',
      'Microsoft Word',
      'Creating documents',
      'Formatting text',
      'Tables and layouts',
      'Microsoft Excel',
      'Basic formulas and functions',
      'Data entry and formatting',
      'Charts and graphs',
      'Microsoft PowerPoint',
      'Creating presentations',
      'Slide design and animations',
      'File Management',
    ],
    tools: ['MS Word', 'MS Excel', 'MS PowerPoint'],
    duration: '1-2 Months',
    keyFeatures: [
      'Practical hands-on training',
      'Beginner-friendly sessions',
      'Real-time examples',
      'Industry-relevant skills',
      'Placement assistance',
    ],
    roles: [
      'Office Executive',
      'Data Entry Operator',
      'Administrative Assistant',
    ],
  },

  {
    slug: 'internet-concepts',
    title: 'Internet Concepts',
    shortDescription:
      'Learn basic internet usage, communication tools, and safe online practices.',
    fullDescription:
      'This course introduces basic internet usage, communication tools, and online safety practices.',
    overview:
      'This course introduces basic internet usage, communication tools, and online safety practices.',
    courseContent: [
      'Internet basics',
      'Browsers and search engines',
      'Email usage',
      'Online safety and security',
    ],
    tools: ['Web browsers', 'Email platforms'],
    duration: '1 Month',
    keyFeatures: ['Practical sessions', 'Easy learning'],
    roles: ['Office Assistant', 'Support Executive'],
  },
  {
    slug: 'tally-erp',
    title: 'Tally ERP',
    shortDescription:
      'Learn accounting, taxation, and financial management using Tally ERP.',
    fullDescription:
      'Tally ERP course teaches accounting, taxation, and financial management using Tally software.',
    overview:
      'Tally ERP course teaches accounting, taxation, and financial management using Tally software.',
    courseContent: [
      'Accounting fundamentals',
      'GST concepts',
      'Inventory management',
      'Financial reports',
    ],
    tools: ['Tally ERP'],
    duration: '2 Months',
    keyFeatures: ['Industry-oriented training', 'Practical accounting'],
    roles: ['Accountant', 'Finance Executive'],
  },

  {
    slug: 'manual-testing',
    title: 'Manual Testing',
    shortDescription:
      'Learn to validate software functionality and improve product quality without automation tools.',
    fullDescription:
      'Manual Testing focuses on verifying software functionality without using automation tools. It helps identify bugs and ensures software quality.',
    overview:
      'Manual Testing focuses on verifying software functionality without using automation tools. It helps identify bugs and ensures software quality.',
    courseContent: [
      'Software Testing Basics',
      'SDLC & STLC',
      'Test Case Design',
      'Bug Tracking',
      'Functional Testing',
      'Regression Testing',
    ],
    tools: ['JIRA', 'Bug Tracking Tools'],
    duration: '2 Months',
    keyFeatures: ['Hands-on testing practice', 'Real-time scenarios'],
    roles: ['Software Tester', 'QA Analyst'],
  },
  {
    slug: 'automation-testing',
    title: 'Automation Testing',
    shortDescription:
      'Automate test cases to improve testing efficiency and accuracy.',
    fullDescription:
      'Automation Testing involves using tools to automate test cases, improving efficiency and accuracy in software testing.',
    overview:
      'Automation Testing involves using tools to automate test cases, improving efficiency and accuracy in software testing.',
    courseContent: [
      'Introduction to Automation',
      'Selenium Basics',
      'Test Script Writing',
      'Framework Development',
      'Test Execution',
    ],
    tools: ['Selenium', 'TestNG'],
    duration: '2-3 Months',
    keyFeatures: ['Practical automation training', 'Real-world projects'],
    roles: ['Automation Tester', 'QA Engineer'],
  },
  {
    slug: 'selenium',
    title: 'Selenium',
    shortDescription:
      'Master web automation testing with Selenium WebDriver.',
    fullDescription:
      'Selenium course provides in-depth knowledge of web automation testing using Selenium WebDriver.',
    overview:
      'Selenium course provides in-depth knowledge of web automation testing using Selenium WebDriver.',
    courseContent: [
      'Selenium WebDriver',
      'Locators & Elements',
      'Test Automation Scripts',
      'Handling Web Components',
      'Integration with frameworks',
    ],
    tools: ['Selenium WebDriver'],
    duration: '2 Months',
    keyFeatures: ['Hands-on automation', 'Industry tools'],
    roles: ['Automation Engineer', 'Test Engineer'],
  },

  {
    slug: 'autocad-mechanical',
    title: 'AutoCAD Mechanical',
    shortDescription:
      'Create precise mechanical drawings and designs using industry-standard CAD tools.',
    fullDescription:
      'AutoCAD Mechanical course focuses on creating precise mechanical drawings and designs using industry-standard CAD tools.',
    overview:
      'AutoCAD Mechanical course focuses on creating precise mechanical drawings and designs using industry-standard CAD tools.',
    courseContent: [
      'Introduction to AutoCAD',
      '2D Drafting & Design',
      'Mechanical Components Drawing',
      'Dimensioning & Annotation',
      'Assembly Drawings',
    ],
    tools: ['AutoCAD Mechanical'],
    duration: '2 Months',
    keyFeatures: ['Hands-on drafting', 'Real-time projects'],
    roles: ['Mechanical Design Engineer', 'CAD Engineer'],
  },
  {
    slug: 'catia',
    title: 'CATIA',
    shortDescription:
      'Advanced 3D design software for mechanical product design and modeling.',
    fullDescription:
      'CATIA is an advanced 3D design software used in mechanical engineering for product design and modeling.',
    overview:
      'CATIA is an advanced 3D design software used in mechanical engineering for product design and modeling.',
    courseContent: [
      'Sketching & Part Design',
      'Assembly Design',
      'Surface Modeling',
      'Drafting',
      'Product Design',
    ],
    tools: ['CATIA'],
    duration: '2-3 Months',
    keyFeatures: ['Industry-level design training'],
    roles: ['Design Engineer', 'Product Designer'],
  },
  {
    slug: 'solidworks',
    title: 'SolidWorks',
    shortDescription:
      'Learn 3D modeling and product design for mechanical components.',
    fullDescription:
      'SolidWorks course teaches 3D modeling and product design for mechanical components.',
    overview:
      'SolidWorks course teaches 3D modeling and product design for mechanical components.',
    courseContent: [
      'Part Modeling',
      'Assembly Design',
      'Sheet Metal Design',
      'Simulation Basics',
      'Drawing Tools',
    ],
    tools: ['SolidWorks'],
    duration: '2 Months',
    keyFeatures: ['Practical 3D modeling sessions'],
    roles: ['Mechanical Designer', 'CAD Engineer'],
  },
  {
    slug: 'ansys',
    title: 'Ansys',
    shortDescription:
      'Engineering simulation and analysis for mechanical systems.',
    fullDescription:
      'Ansys course focuses on engineering simulation and analysis for mechanical systems.',
    overview:
      'Ansys course focuses on engineering simulation and analysis for mechanical systems.',
    courseContent: [
      'Introduction to Simulation',
      'Structural Analysis',
      'Thermal Analysis',
      'Meshing Techniques',
      'Result Interpretation',
    ],
    tools: ['Ansys'],
    duration: '2 Months',
    keyFeatures: ['Simulation-based learning'],
    roles: ['Simulation Engineer', 'Analysis Engineer'],
  },

  {
    slug: 'autocad',
    title: 'AutoCAD',
    shortDescription:
      'Create accurate 2D drawings and layouts for civil engineering projects.',
    fullDescription:
      'AutoCAD for Civil Engineering focuses on creating accurate 2D drawings and layouts used in construction and infrastructure projects.',
    overview:
      'AutoCAD for Civil Engineering focuses on creating accurate 2D drawings and layouts used in construction and infrastructure projects.',
    courseContent: [
      'Introduction to AutoCAD',
      '2D Drafting & Design',
      'Floor Plans & Layouts',
      'Dimensioning & Annotation',
      'Plotting & Printing',
    ],
    tools: ['AutoCAD'],
    duration: '2 Months',
    keyFeatures: ['Practical drafting sessions', 'Real-time projects'],
    roles: ['Civil Draftsman', 'Design Engineer'],
  },
  {
    slug: 'staad-pro',
    title: 'STAAD Pro',
    shortDescription:
      'Learn structural analysis and design for buildings and infrastructure.',
    fullDescription:
      'STAAD Pro is used for structural analysis and design of buildings, bridges, and other structures.',
    overview:
      'STAAD Pro is used for structural analysis and design of buildings, bridges, and other structures.',
    courseContent: [
      'Structural Modeling',
      'Load Calculations',
      'Analysis & Design',
      'Reinforcement Design',
      'Result Interpretation',
    ],
    tools: ['STAAD Pro'],
    duration: '2-3 Months',
    keyFeatures: ['Industry-standard structural design training'],
    roles: ['Structural Engineer', 'Design Engineer'],
  },
  {
    slug: 'etabs',
    title: 'ETABS',
    shortDescription:
      'Building analysis and design for civil engineering projects.',
    fullDescription:
      'ETABS is widely used for building analysis and design in civil engineering projects.',
    overview:
      'ETABS is widely used for building analysis and design in civil engineering projects.',
    courseContent: [
      'Building Modeling',
      'Load Application',
      'Structural Analysis',
      'Design & Detailing',
      'Report Generation',
    ],
    tools: ['ETABS'],
    duration: '2 Months',
    keyFeatures: ['Real-world building design projects'],
    roles: ['Structural Engineer', 'Project Engineer'],
  },
  {
    slug: 'primavera',
    title: 'Primavera',
    shortDescription:
      'Project planning, scheduling, and management for construction projects.',
    fullDescription:
      'Primavera course teaches project planning, scheduling, and management for construction projects.',
    overview:
      'Primavera course teaches project planning, scheduling, and management for construction projects.',
    courseContent: [
      'Project Planning',
      'Scheduling Techniques',
      'Resource Management',
      'Project Tracking',
      'Risk Management',
    ],
    tools: ['Primavera'],
    duration: '1-2 Months',
    keyFeatures: ['Project management focused training'],
    roles: ['Project Planner', 'Project Manager'],
  },
  {
    slug: 'revit',
    title: 'Revit Architecture',
    shortDescription:
      'Learn BIM-based building design and documentation in Revit.',
    fullDescription:
      'Revit Architecture focuses on Building Information Modeling (BIM) for designing and managing building projects in a 3D environment.',
    overview:
      'Revit Architecture focuses on Building Information Modeling (BIM) for designing and managing building projects in a 3D environment.',
    courseContent: [
      'BIM Fundamentals',
      '3D Building Modeling',
      'Family Creation',
      'Rendering & Visualization',
      'Documentation & Detailing',
    ],
    tools: ['Revit Architecture'],
    duration: '2 Months',
    keyFeatures: [
      'Hands-on BIM projects',
      'Real-time building design',
      'Industry-relevant tools',
      'Expert guidance',
    ],
    roles: ['BIM Engineer', 'Architectural Designer', 'Revit Modeler'],
  },
  {
    slug: 'bim',
    title: 'BIM (Building Information Modeling)',
    shortDescription:
      'Manage digital construction workflows across the project lifecycle.',
    fullDescription:
      'BIM course provides knowledge of digital construction workflows and managing building data across the project lifecycle.',
    overview:
      'BIM course provides knowledge of digital construction workflows and managing building data across the project lifecycle.',
    courseContent: [
      'Introduction to BIM',
      'BIM Workflow',
      'Model Coordination',
      'Clash Detection',
      'Construction Planning',
    ],
    tools: ['Revit', 'Navisworks'],
    duration: '2 Months',
    keyFeatures: [
      'Industry-focused training',
      'Real-time coordination projects',
      'Practical implementation',
    ],
    roles: ['BIM Engineer', 'BIM Coordinator', 'Project Engineer'],
  },
  {
    slug: 'sketchup',
    title: 'SketchUp',
    shortDescription:
      'User-friendly 3D modeling for architectural and interior visualization.',
    fullDescription:
      'SketchUp is a user-friendly 3D modeling tool used for architectural and interior design visualization.',
    overview:
      'SketchUp is a user-friendly 3D modeling tool used for architectural and interior design visualization.',
    courseContent: [
      '3D Modeling Basics',
      'Designing Layouts',
      'Texturing & Rendering',
      'Visualization Techniques',
      'Exporting Models',
    ],
    tools: ['SketchUp'],
    duration: '1 Month',
    keyFeatures: [
      'Easy-to-learn interface',
      'Practical design sessions',
      'Quick visualization skills',
    ],
    roles: ['3D Designer', 'Interior Designer', 'Visualization Expert'],
  },

  {
    slug: 'data-science',
    title: 'Data Science',
    shortDescription:
      'Extract meaningful insights from data using statistics, programming, and visualization.',
    fullDescription:
      'Data Science course focuses on extracting meaningful insights from data using statistical analysis, programming, and visualization techniques.',
    overview:
      'Data Science course focuses on extracting meaningful insights from data using statistical analysis, programming, and visualization techniques.',
    courseContent: [
      'Introduction to Data Science',
      'Python for Data Analysis',
      'Data Cleaning & Preprocessing',
      'Data Visualization',
      'Statistics Basics',
      'Working with Real-world Datasets',
    ],
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    duration: '3 Months',
    keyFeatures: [
      'Hands-on projects',
      'Real-time datasets',
      'Industry-oriented curriculum',
      'Expert trainers',
    ],
    roles: ['Data Scientist', 'Data Analyst', 'Business Analyst'],
  },
  {
    slug: 'machine-learning',
    title: 'Machine Learning',
    shortDescription:
      'Build predictive models and learn from data using modern ML techniques.',
    fullDescription:
      'Machine Learning enables systems to learn from data and make predictions or decisions without being explicitly programmed.',
    overview:
      'Machine Learning enables systems to learn from data and make predictions or decisions without being explicitly programmed.',
    courseContent: [
      'Supervised Learning',
      'Unsupervised Learning',
      'Regression & Classification',
      'Clustering',
      'Model Evaluation',
      'Feature Engineering',
    ],
    tools: ['Python', 'Scikit-learn'],
    duration: '2-3 Months',
    keyFeatures: [
      'Practical model building',
      'Real-world problem solving',
      'Hands-on implementation',
    ],
    roles: ['Machine Learning Engineer', 'Data Scientist'],
  },
  {
    slug: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    shortDescription:
      'Build intelligent systems that solve problems using AI concepts.',
    fullDescription:
      'Artificial Intelligence focuses on building intelligent systems capable of performing tasks that normally require human intelligence.',
    overview:
      'Artificial Intelligence focuses on building intelligent systems capable of performing tasks that normally require human intelligence.',
    courseContent: [
      'AI Fundamentals',
      'Machine Learning Concepts',
      'Neural Networks',
      'Problem Solving Techniques',
      'AI Applications',
    ],
    tools: ['Python', 'AI Libraries'],
    duration: '2-3 Months',
    keyFeatures: [
      'Industry-relevant AI concepts',
      'Real-world use cases',
      'Practical training',
    ],
    roles: ['AI Engineer', 'ML Engineer'],
  },
  {
    slug: 'deep-learning',
    title: 'Deep Learning',
    shortDescription:
      'Master neural networks to solve advanced AI problems.',
    fullDescription:
      'Deep Learning is a subset of AI that uses neural networks to model complex patterns and solve advanced problems.',
    overview:
      'Deep Learning is a subset of AI that uses neural networks to model complex patterns and solve advanced problems.',
    courseContent: [
      'Neural Networks Basics',
      'Convolutional Neural Networks (CNN)',
      'Natural Language Processing (NLP)',
      'Model Training & Optimization',
    ],
    tools: ['TensorFlow', 'Keras'],
    duration: '2 Months',
    keyFeatures: [
      'Advanced AI training',
      'Real-world applications',
      'Project-based learning',
    ],
    roles: ['Deep Learning Engineer', 'AI Specialist'],
  },
  {
    slug: 'power-bi',
    title: 'Power BI',
    shortDescription:
      'Create interactive dashboards and business reports using Power BI.',
    fullDescription:
      'Power BI course helps in creating interactive dashboards and reports for business data visualization.',
    overview:
      'Power BI course helps in creating interactive dashboards and reports for business data visualization.',
    courseContent: [
      'Power BI Basics',
      'Data Import & Transformation',
      'Dashboard Creation',
      'Data Visualization',
      'Reporting',
    ],
    tools: ['Microsoft Power BI'],
    duration: '1-2 Months',
    keyFeatures: [
      'Hands-on dashboard creation',
      'Business-oriented training',
    ],
    roles: ['Data Analyst', 'BI Developer'],
  },

  {
    slug: 'r-programming',
    title: 'R Programming',
    shortDescription:
      'Learn statistical analysis, data visualization, and modeling using R.',
    fullDescription:
      'R Programming is widely used for statistical analysis, data visualization, and data science applications. This course helps in analyzing datasets and building statistical models.',
    overview:
      'R Programming is widely used for statistical analysis, data visualization, and data science applications. This course helps in analyzing datasets and building statistical models.',
    courseContent: [
      'Introduction to R',
      'Data Types & Variables',
      'Data Manipulation',
      'Statistical Analysis',
      'Data Visualization',
      'Working with Datasets',
    ],
    tools: ['R', 'RStudio'],
    duration: '2 Months',
    keyFeatures: [
      'Hands-on data analysis',
      'Real-time datasets',
      'Visualization techniques',
    ],
    roles: ['Data Analyst', 'Statistician', 'Data Scientist'],
  },
  {
    slug: 'power-bi-sql',
    title: 'Power BI SQL',
    shortDescription:
      'Combine SQL querying with Power BI to build meaningful dashboards.',
    fullDescription:
      'Power BI SQL course focuses on combining database querying with business intelligence tools to create meaningful dashboards and reports.',
    overview:
      'Power BI SQL course focuses on combining database querying with business intelligence tools to create meaningful dashboards and reports.',
    courseContent: [
      'SQL Basics',
      'Database Queries',
      'Joins & Functions',
      'Data Extraction',
      'Power BI Integration',
      'Dashboard Creation',
    ],
    tools: ['SQL', 'Power BI'],
    duration: '2 Months',
    keyFeatures: [
      'Real-time reporting',
      'Dashboard creation',
      'Industry-focused training',
    ],
    roles: ['BI Developer', 'Data Analyst', 'Reporting Analyst'],
  },

  {
    slug: 'c',
    title: 'C Programming',
    shortDescription:
      'Build a strong programming foundation with C language fundamentals.',
    fullDescription:
      'C Programming is a foundational language used to understand core programming concepts and build efficient applications.',
    overview:
      'C Programming is a foundational language used to understand core programming concepts and build efficient applications.',
    courseContent: [
      'Basics of C',
      'Data Types & Variables',
      'Control Structures',
      'Functions',
      'Arrays & Strings',
      'Pointers',
    ],
    tools: ['C Compiler (GCC)', 'IDEs'],
    duration: '1-2 Months',
    keyFeatures: [
      'Strong programming foundation',
      'Logical thinking development',
      'Hands-on coding practice',
    ],
    roles: ['Software Developer', 'Embedded Systems Engineer'],
  },
  {
    slug: 'cpp',
    title: 'C++ Programming',
    shortDescription:
      'Learn object-oriented programming concepts using C++.',
    fullDescription:
      'C++ is an extension of C that supports object-oriented programming concepts for building complex applications.',
    overview:
      'C++ is an extension of C that supports object-oriented programming concepts for building complex applications.',
    courseContent: [
      'OOP Concepts',
      'Classes & Objects',
      'Inheritance & Polymorphism',
      'File Handling',
      'STL Basics',
    ],
    tools: ['C++ Compiler', 'IDEs'],
    duration: '2 Months',
    keyFeatures: ['OOP-based learning', 'Real-time coding exercises'],
    roles: ['Software Developer', 'Game Developer'],
  },
  {
    slug: 'java',
    title: 'Java',
    shortDescription:
      'Build enterprise-level applications using Java.',
    fullDescription:
      'Java is a widely used programming language for building enterprise-level applications.',
    overview:
      'Java is a widely used programming language for building enterprise-level applications.',
    courseContent: [
      'Core Java',
      'OOP Concepts',
      'Exception Handling',
      'Collections Framework',
      'JDBC Basics',
    ],
    tools: ['Java', 'Eclipse/IntelliJ'],
    duration: '3 Months',
    keyFeatures: ['Industry-oriented curriculum', 'Real-time projects'],
    roles: ['Java Developer', 'Backend Developer'],
  },
  {
    slug: 'python',
    title: 'Python',
    shortDescription:
      'Learn a versatile language used for web, data, and automation.',
    fullDescription:
      'Python is a versatile programming language used in web development, data science, and automation.',
    overview:
      'Python is a versatile programming language used in web development, data science, and automation.',
    courseContent: [
      'Python Basics',
      'Data Structures',
      'OOP Concepts',
      'Libraries (NumPy, Pandas)',
      'Mini Projects',
    ],
    tools: ['Python', 'Jupyter Notebook'],
    duration: '2-3 Months',
    keyFeatures: ['Easy to learn', 'Real-world applications'],
    roles: ['Python Developer', 'Data Analyst'],
  },
  {
    slug: 'dotnet',
    title: '.NET',
    shortDescription:
      'Build web and desktop apps using Microsoft .NET technologies.',
    fullDescription:
      '.NET is a framework used to build web and desktop applications using Microsoft technologies.',
    overview:
      '.NET is a framework used to build web and desktop applications using Microsoft technologies.',
    courseContent: [
      'C# Basics',
      'ASP.NET',
      'Web Application Development',
      'Database Integration',
      'MVC Architecture',
    ],
    tools: ['Visual Studio', '.NET'],
    duration: '3 Months',
    keyFeatures: ['Enterprise application development', 'Practical projects'],
    roles: ['.NET Developer', 'Software Engineer'],
  },
  {
    slug: 'angular',
    title: 'Angular',
    shortDescription:
      'Build dynamic and responsive web applications with Angular.',
    fullDescription:
      'Angular is a frontend framework used to build dynamic and responsive web applications.',
    overview:
      'Angular is a frontend framework used to build dynamic and responsive web applications.',
    courseContent: [
      'Angular Basics',
      'Components & Modules',
      'Data Binding',
      'Routing',
      'API Integration',
    ],
    tools: ['Angular', 'TypeScript'],
    duration: '2 Months',
    keyFeatures: ['Modern UI development', 'Real-time applications'],
    roles: ['Frontend Developer', 'Web Developer'],
  },

  {
    slug: 'oracle',
    title: 'Oracle',
    shortDescription:
      'Manage enterprise databases using Oracle technologies.',
    fullDescription:
      'Oracle course focuses on managing databases using Oracle technologies, widely used in enterprise applications.',
    overview:
      'Oracle course focuses on managing databases using Oracle technologies, widely used in enterprise applications.',
    courseContent: [
      'Introduction to Databases',
      'Oracle Architecture',
      'SQL Queries',
      'PL/SQL Programming',
      'Database Administration Basics',
    ],
    tools: ['Oracle Database', 'SQL*Plus'],
    duration: '2 Months',
    keyFeatures: [
      'Hands-on database practice',
      'Industry-standard tools',
      'Real-time scenarios',
    ],
    roles: ['Oracle DBA', 'Database Administrator'],
  },
  {
    slug: 'sql',
    title: 'SQL',
    shortDescription:
      'Learn to manage and query databases using SQL.',
    fullDescription:
      'SQL course teaches how to manage and query databases efficiently using Structured Query Language.',
    overview:
      'SQL course teaches how to manage and query databases efficiently using Structured Query Language.',
    courseContent: [
      'SQL Basics',
      'Data Retrieval (SELECT)',
      'Joins & Subqueries',
      'Functions & Aggregates',
      'Database Design',
    ],
    tools: ['MySQL / SQL Server'],
    duration: '1-2 Months',
    keyFeatures: [
      'Query writing skills',
      'Practical exercises',
      'Real-world datasets',
    ],
    roles: ['SQL Developer', 'Data Analyst'],
  },
  {
    slug: 'sql-server',
    title: 'SQL Server',
    shortDescription:
      'Manage and analyze data using Microsoft SQL Server.',
    fullDescription:
      'SQL Server course covers Microsoft?s database system for managing and analyzing data.',
    overview:
      'SQL Server course covers Microsoft?s database system for managing and analyzing data.',
    courseContent: [
      'SQL Server Basics',
      'Database Creation',
      'Stored Procedures',
      'Triggers',
      'Performance Tuning',
    ],
    tools: ['Microsoft SQL Server'],
    duration: '2 Months',
    keyFeatures: ['Enterprise-level training', 'Practical database tasks'],
    roles: ['SQL Server DBA', 'Database Developer'],
  },
  {
    slug: 'mysql',
    title: 'MySQL',
    shortDescription:
      'Learn an open-source database system for web apps and data management.',
    fullDescription:
      'MySQL is a widely used open-source database system for web applications and data management.',
    overview:
      'MySQL is a widely used open-source database system for web applications and data management.',
    courseContent: [
      'MySQL Basics',
      'CRUD Operations',
      'Joins & Indexing',
      'Database Optimization',
      'Backup & Recovery',
    ],
    tools: ['MySQL'],
    duration: '1-2 Months',
    keyFeatures: ['Web-focused database training', 'Hands-on queries'],
    roles: ['MySQL Developer', 'Database Engineer'],
  },

  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription:
      'Promote businesses and brands using modern online marketing strategies.',
    fullDescription:
      'Digital Marketing course focuses on promoting businesses and brands using online platforms. It covers strategies and tools required to build a strong digital presence.',
    overview:
      'Digital Marketing course focuses on promoting businesses and brands using online platforms. It covers strategies and tools required to build a strong digital presence.',
    courseContent: [
      'Introduction to Digital Marketing',
      'Search Engine Optimization (SEO)',
      'Search Engine Marketing (SEM)',
      'Social Media Marketing',
      'Google Ads',
      'Email Marketing',
      'Web Analytics',
    ],
    tools: ['Google Ads', 'Google Analytics', 'Social Media Platforms'],
    duration: '2 Months',
    keyFeatures: [
      'Real-time campaign practice',
      'Industry-relevant tools',
      'Hands-on training',
      'Practical assignments',
    ],
    roles: ['Digital Marketing Executive', 'SEO Analyst', 'Social Media Manager'],
  },

  {
    slug: 'photoshop',
    title: 'Photoshop',
    shortDescription:
      'Learn image editing, graphic design, and digital art creation.',
    fullDescription:
      'Photoshop course teaches image editing, graphic design, and digital art creation using Adobe Photoshop.',
    overview:
      'Photoshop course teaches image editing, graphic design, and digital art creation using Adobe Photoshop.',
    courseContent: [
      'Introduction to Photoshop',
      'Image Editing & Retouching',
      'Layers & Masks',
      'Color Correction',
      'Photo Manipulation',
      'Design Basics',
    ],
    tools: ['Adobe Photoshop'],
    duration: '1-2 Months',
    keyFeatures: [
      'Hands-on design practice',
      'Creative projects',
      'Industry tools',
    ],
    roles: ['Graphic Designer', 'Photo Editor'],
  },
  {
    slug: 'illustrator',
    title: 'Illustrator',
    shortDescription:
      'Create vector graphics for logos, illustrations, and branding.',
    fullDescription:
      'Illustrator course focuses on vector graphics design for logos, illustrations, and branding.',
    overview:
      'Illustrator course focuses on vector graphics design for logos, illustrations, and branding.',
    courseContent: [
      'Vector Design Basics',
      'Shapes & Paths',
      'Logo Design',
      'Typography',
      'Color & Gradients',
    ],
    tools: ['Adobe Illustrator'],
    duration: '1-2 Months',
    keyFeatures: ['Creative design projects', 'Branding techniques'],
    roles: ['Graphic Designer', 'Illustrator'],
  },
  {
    slug: 'premiere-pro',
    title: 'Premiere Pro',
    shortDescription:
      'Edit and produce videos for media and content creation.',
    fullDescription:
      'Premiere Pro course teaches video editing and production for media and content creation.',
    overview:
      'Premiere Pro course teaches video editing and production for media and content creation.',
    courseContent: [
      'Video Editing Basics',
      'Timeline & Transitions',
      'Audio Editing',
      'Effects & Filters',
      'Exporting Videos',
    ],
    tools: ['Adobe Premiere Pro'],
    duration: '1-2 Months',
    keyFeatures: ['Hands-on video editing', 'Real-world projects'],
    roles: ['Video Editor', 'Content Creator'],
  },
  {
    slug: 'after-effects',
    title: 'After Effects',
    shortDescription:
      'Create motion graphics and visual effects for videos.',
    fullDescription:
      'After Effects focuses on motion graphics and visual effects for videos and animations.',
    overview:
      'After Effects focuses on motion graphics and visual effects for videos and animations.',
    courseContent: [
      'Motion Graphics Basics',
      'Animation Techniques',
      'Visual Effects',
      'Keyframes & Transitions',
      'Compositing',
    ],
    tools: ['Adobe After Effects'],
    duration: '1-2 Months',
    keyFeatures: ['Animation projects', 'Visual effects training'],
    roles: ['Motion Graphics Designer', 'VFX Artist'],
  },
  {
    slug: 'maya',
    title: 'Maya',
    shortDescription:
      'Learn 3D animation and modeling for films, games, and design.',
    fullDescription:
      'Maya is a 3D animation and modeling software used in films, games, and design industries.',
    overview:
      'Maya is a 3D animation and modeling software used in films, games, and design industries.',
    courseContent: [
      '3D Modeling',
      'Animation Basics',
      'Texturing & Lighting',
      'Rendering',
      'Character Design',
    ],
    tools: ['Autodesk Maya'],
    duration: '2 Months',
    keyFeatures: ['3D design training', 'Animation projects'],
    roles: ['3D Artist', 'Animator'],
  },

  {
    slug: 'java-full-stack',
    title: 'Java Full Stack',
    shortDescription:
      'Build complete web applications using Java backend and modern frontend tools.',
    fullDescription:
      'Java Full Stack course focuses on developing complete web applications using Java technologies for backend and modern frontend tools.',
    overview:
      'Java Full Stack course focuses on developing complete web applications using Java technologies for backend and modern frontend tools.',
    courseContent: [
      'Core Java & Advanced Java',
      'Object-Oriented Programming',
      'JDBC & Database Connectivity',
      'Spring & Spring Boot',
      'REST API Development',
      'Frontend (HTML, CSS, JavaScript)',
      'Basic React/Angular',
      'Project Development',
    ],
    tools: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    duration: '5-6 Months',
    keyFeatures: [
      'End-to-end development training',
      'Real-time projects',
      'Industry-oriented curriculum',
      'Placement assistance',
    ],
    roles: ['Full Stack Developer', 'Java Developer', 'Backend Developer'],
  },
  {
    slug: 'python-full-stack',
    title: 'Python Full Stack',
    shortDescription:
      'Learn full-stack development using Python and modern frontend tech.',
    fullDescription:
      'Python Full Stack course teaches complete web development using Python for backend and modern frontend technologies.',
    overview:
      'Python Full Stack course teaches complete web development using Python for backend and modern frontend technologies.',
    courseContent: [
      'Python Fundamentals',
      'Data Structures',
      'Django / Flask Framework',
      'Database Integration',
      'Frontend (HTML, CSS, JavaScript)',
      'API Development',
      'Project Deployment',
    ],
    tools: ['Python', 'Django', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    duration: '5-6 Months',
    keyFeatures: [
      'Full-stack development training',
      'Hands-on projects',
      'Real-world applications',
      'Placement assistance',
    ],
    roles: ['Python Developer', 'Full Stack Developer', 'Web Developer'],
  },

  {
    slug: 'aws',
    title: 'AWS (Amazon Web Services)',
    shortDescription:
      'Learn cloud computing concepts and core AWS services.',
    fullDescription:
      'AWS course introduces cloud computing concepts and services provided by Amazon Web Services. It helps learners understand how to build, deploy, and manage applications on the cloud.',
    overview:
      'AWS course introduces cloud computing concepts and services provided by Amazon Web Services. It helps learners understand how to build, deploy, and manage applications on the cloud.',
    courseContent: [
      'Introduction to Cloud Computing',
      'AWS Fundamentals',
      'EC2 (Elastic Compute Cloud)',
      'S3 (Storage Services)',
      'IAM (Identity & Access Management)',
      'VPC (Virtual Private Cloud)',
      'Cloud Deployment',
    ],
    tools: ['Amazon Web Services (AWS Console)'],
    duration: '2-3 Months',
    keyFeatures: [
      'Hands-on cloud training',
      'Real-time deployment practice',
      'Industry-relevant skills',
      'Expert guidance',
    ],
    roles: ['Cloud Engineer', 'AWS Developer', 'Cloud Administrator'],
  },
  {
    slug: 'python-full-stack-development',
    title: 'Python Full Stack Development',
    shortDescription:
      'Build dynamic web apps from frontend to backend using Python technologies.',
    fullDescription:
      'Learn to build dynamic, scalable, and robust web applications from front-end to back-end. Gain expertise in Python programming, web frameworks, and database integration.',
    topics: [
      'Python Fundamentals (variables, loops, functions)',
      'Data Structures (lists, tuples, dictionaries, sets)',
      'Object-Oriented Programming (OOP)',
      'Web Development using Django & Flask',
      'Frontend: HTML, CSS, JavaScript',
      'Database: SQL',
      'Project Development & Deployment',
    ],
    duration: '6 Months',
    roles: ['Python Developer', 'Full Stack Developer'],
  },
  {
    slug: 'java-full-stack-development',
    title: 'Java Full Stack Development',
    shortDescription:
      'Build enterprise applications with Java, Spring Boot, and modern web tech.',
    fullDescription:
      'Learn to build end-to-end enterprise-level applications using Java technologies.',
    topics: [
      'Core Java & Advanced Java',
      'Object-Oriented Programming',
      'JDBC & Database Connectivity',
      'Web Technologies (HTML, CSS, JavaScript)',
      'Frameworks: Spring, Spring Boot',
      'REST APIs',
      'Project Development',
    ],
    duration: '6 Months',
    roles: ['Java Developer', 'Backend Developer', 'Full Stack Developer'],
  },
  {
    slug: 'web-development',
    title: 'Web Development (HTML, CSS, JavaScript, React)',
    shortDescription:
      'Create responsive, interactive websites and modern web applications.',
    fullDescription:
      'Learn to create responsive, interactive, and modern web applications.',
    topics: [
      'HTML5, CSS3',
      'JavaScript (ES6+)',
      'Responsive Design',
      'React JS',
      'UI Development',
      'Real-time Projects',
    ],
    duration: 'Flexible',
    roles: ['Web Developer', 'Frontend Developer'],
  },
  {
    slug: 'data-science-machine-learning',
    title: 'Data Science & Machine Learning',
    shortDescription:
      'Analyze data, build models, and deliver insights with ML tools.',
    fullDescription:
      'Learn to analyze data, build models, and extract insights.',
    topics: [
      'Python for Data Science',
      'Data Analysis & Visualization',
      'Statistics',
      'Machine Learning Algorithms',
      'Model Building',
      'Real-world Datasets',
    ],
    duration: '2-3 Months',
    roles: ['Data Scientist', 'Data Analyst'],
  },
  {
    slug: 'artificial-intelligence',
    title: 'Artificial Intelligence (AI)',
    shortDescription:
      'Build intelligent systems and predictive solutions with AI concepts.',
    fullDescription:
      'Learn to build intelligent systems and predictive solutions.',
    topics: [
      'AI Fundamentals',
      'Machine Learning Concepts',
      'Neural Networks',
      'Deep Learning Basics',
      'Real-world Applications',
    ],
    duration: 'Flexible',
    roles: ['AI Engineer', 'ML Engineer'],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    shortDescription:
      'Design intuitive digital experiences with modern design tools.',
    fullDescription:
      'Learn to design intuitive, user-friendly digital experiences.',
    topics: [
      'UI Design Principles',
      'UX Research',
      'Wireframing & Prototyping',
      'Tools: Figma / Adobe XD',
      'User Testing',
    ],
    duration: '45 Days',
    roles: ['UI/UX Designer'],
  },
];

const detailedSlugs = new Set(detailedCourses.map((course) => course.slug));
const fallbackCourses = courseCategories
  .flatMap((category) => category.courses)
  .filter((course) => !detailedSlugs.has(course.slug))
  .map((course) => ({
    slug: course.slug,
    title: course.title,
    shortDescription: `Explore ${course.title} fundamentals with industry-focused training.`,
    fullDescription: `${course.title} training focuses on core concepts, practical labs, and real-world applications to build job-ready skills.`,
    overview: `${course.title} training focuses on core concepts, practical labs, and real-world applications to build job-ready skills.`,
    courseContent: ['Core Concepts', 'Hands-on Practice', 'Project Work', 'Interview Guidance'],
    tools: ['Industry Tools', 'Real-world Examples'],
    duration: 'Flexible',
    keyFeatures: [
      'Instructor-led sessions',
      'Hands-on practice',
      'Career guidance',
    ],
    roles: ['Entry-level Opportunities', 'Specialist Roles'],
  }));

export const courses = [...detailedCourses, ...fallbackCourses];
