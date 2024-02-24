const courses = [
    {
       course_id:142,
       title:"C S 142:Introduction to Computer Programming",
       course_description:"Introduction to object-oriented program design and development.  Principles of algorithm formulation and implementation.",
       credits:3,
       prereq_id:null,
       note:null
    },
    {
       course_id:224,
       title:"C S 224:Introduction to Computer Systems",
       course_description:"How a computer works to execute sequential code:low level data representation and abstraction, the relationship between C and assembly, computer architecture and pipelining, the memory hierarchy, dynamic memory allocation, and linking.",
       credits:3,
       prereq_id:235,
       note:null
    },
    {
       course_id:235,
       title:"C S 235:Data Structures and Algorithms",
       course_description:"Fundamental data structures and algorithms of computer science; basic algorithm analysis; recursion; sorting and searching; lists, stacks, queues, trees, hashing; object-oriented data abstraction.",
       credits:3,
       prereq_id:142,
       note:null
    },
    {
       course_id:236,
       title:"C S 236:Discrete Structures",
       course_description:"Introduction to grammars and parsing; predicate and propositional logic; proof techniques; sets, functions, relations, relational data model; graphs and graph algorithms.",
       credits:3,
       prereq_id:235,
       note:null
    },
    {
       course_id:240,
       title:"C S 240:Advanced Software Construction",
       course_description:"Advanced software development with an object-oriented focus. Design, implementation, and testing of medium-sized programs including a server program.",
       credits:4,
       prereq_id:235,
       note:null
    },
    {
       course_id:252,
       title:"C S 252:Introduction to Computational Theory",
       course_description:"Finite state automata, regular languages, lexical analysis; push-down automata, context-free languages, parsing; Turing machines and unrestricted grammars; computability complexity, NP-completeness.",
       credits:3,
       prereq_id:236,
       note:"concurrent enrollment in 236"
    },
    {
       course_id:256,
       title:"C S 256:Introduction to Human Computer Interaction",
       course_description:"Introduction to designing the user experience. Students learn good interviewing techniques, how to develop low fidelity prototypes on paper, and how to create basic high fidelity prototypes in Figma.",
       credits:3,
       prereq_id:null,
       note:null
    },
    {
       course_id:260,
       title:"C S 260:Web Programming",
       course_description:"Introduction to web application design and implementation. Both front end and back end development with an emphasis on REST architectures.",
       credits:3,
       prereq_id:142,
       note:null
    },
    {
       course_id:312,
       title:"C S 312:Algorithm Design and Analysis",
       course_description:"A study of the design and analysis of algorithms as solutions to problems, including dynamic programming, linear programming, greedy algorithms, divide-and-conquer algorithms, graph algorithms, and intelligent search algorithms.",
       credits:3,
       prereq_id:236,
       note:null
    },
    {
       course_id:324,
       title:"C S 324:Systems Programming",
       course_description:"Systems programming principles and concepts, including Linux systems programming, multiprocessing, concurrency, exceptional control flow, caching, sockets, protocols, and non-blocking I/O.",
       credits:3,
       prereq_id:224,
       note:null
    },
    {
       course_id:329,
       title:"C S 329:Testing, Analysis, and Verification",
       course_description:"Fundamental challenge of software quality through the entire software product life-cycle. Sound engineering principles to ensure and assure quality at each stage of the life-cycle with an emphasis in early stages on testing techniques, dynamic and static program analysis, and formal verification for high assurance systems. Practical application to software artifacts and algorithm implementation connects the course material to real world application in the field.",
       credits:3,
       prereq_id:240,
       note:null
    },
    {
       course_id:330,
       title:"C S 330:Concepts of Programming Languages",
       course_description:"Principles and concepts characterizing high-level computer programming languages, process and data abstration, encapsulation, inheritance, functional programming, logic programming, scanners, and parsers.",
       credits:3,
       prereq_id:null,
       note:"CS 236 + CS 260 or CS 224 + CS 236 or CS 235 + MATH 290"
    },
    {
       course_id:340,
       title:"C S 340:Software Design",
       course_description:"Use design, development, testing and refactoring techniques to build and evolve reliable, maintainable and scalable software systems. Covers a wide range of design patterns and principles. Also introduces students to software architecture and architectural patterns.",
       credits:3,
       prereq_id:240,
       note:null
    },
    {
       course_id:345,
       title:"C S 345:Operating Systems Design",
       course_description:"Principles and concepts of operating systems design and the implementation of an operating system.",
       credits:3,
       prereq_id:224,
       note:null
    },
    {
       course_id:355,
       title:"C S 355:Interactive Graphics and Image Processing",
       course_description:"Introduces basic concepts of computer graphics and image processing. Includes characteristics of physical cameras and displays; color models; basic image processing algorithms:2D and 3D homogeneous coordinate transformations; fundamentals of 3D rendering geometry; lighting and shading:image warping and texture mapping; and frequency-domain processing.",
       credits:3,
       prereq_id:240,
       note:null
    },
    {
       course_id:356,
       title:"C S 356:Advanced Techniques in Human Computer Interaction",
       course_description:"This class combines designing the user experience with implementing the technology. Students learn website design, information architecture, and how to design for the broader ecosystem of use. Finally, students will learn principles specifically relevant to website design and information architecture. Web design is one of the most common UX jobs and so this makes their skills highly marketable.",
       credits:3,
       prereq_id:256,
       note:null
    },
    {
       course_id:401,
       title:"C S 401:Topics in Computer Science",
       course_description:"Undergraduate level subjects as announced before each semester.",
       credits:3,
       prereq_id:null,
       note:"Instructor's consent"
    },
    {
       course_id:404,
       title:"C S 404:Ethics and Computers in Society",
       course_description:"Societal impact of computer technology, the computer scientist's place in society, ethical issues.  Reading, discussion, and writing seminar.",
       credits:2,
       prereq_id:240,
       note:"WRTG 316"
    },
    {
       course_id:405,
       title:"C S 405:Creating and Managing a Software Business",
       course_description:"Entrepreneurship, idea/opportunity generation, strategic planning, legal organization, product development, marketing/sales, customer support, fund raising, and effective management.",
       credits:3,
       prereq_id:240,
       note:"WRTG 316"
    },
    {
       course_id:412,
       title:"C S 412:Linear Programming and Convex Optimization",
       course_description:"Optimization, problem formulation, and solution algorithms, including simplex and interior point methods.  Applications from control, data mining, finance, game theory, learning, network flow, operations research, and statistical estimation.",
       credits:3,
       prereq_id:null,
       note:"MATH 213 + MATH 215"
    },
    {
       course_id:428,
       title:"C S 428:Software Engineering",
       course_description:"Analysis, design, implementation, and testing of significant software systems.",
       credits:3,
       prereq_id:340,
       note:null
    },
    {
       course_id:431,
       title:"C S 431:Algorithmic Languages and Compilers",
       course_description:"Formal description of algorithmic languages and techniques used in their compilation: semantics, ambiguities, procedures, replication, iteration, recursion.",
       credits:3,
       prereq_id:340,
       note:null
    },
    {
       course_id:450,
       title:"C S 450:Computer Vision",
       course_description:"Introduction to fundamental concepts and algorithms of computer vision, including feature extraction, detection, segmentation, registration, recognition, motion, 3D vision, and image understanding. Applies techniques from image processing, geometry, Bayesian methods, optimization, and machine learning to computer vision problems.",
       credits:3,
       prereq_id:312,
       note:null
    },
    {
       course_id:452,
       title:"C S 452:Database Modeling Concepts",
       course_description:"Database models: relational, deductive, object-oriented.  Integrity constraints, query languages, database design.",
       credits:3,
       prereq_id:240,
       note:null
    },
    {
       course_id:453,
       title:"C S 453:Fundamentals of Information Retrieval",
       course_description:"Concepts and terminology of information retrieval (IR) systems.  Design methodologies and issues.  Fundamental IR models examined: Boolean, Vector Space, Probabilistic models, and evaluation strategies.",
       credits:3,
       prereq_id:240,
       note:null
    },
    {
       course_id:455,
       title:"C S 455:Computer Graphics",
       course_description:"Interactive computer graphics systems programming and architecture.",
       credits:3,
       prereq_id:355,
       note:"MATH 213"
    },
    {
       course_id:456,
       title:"C S 456:Mobile and Ubiquitous Human-Computer Interaction",
       course_description:"Iterative user experience design for mobile and ubiquitous computing with an emphasis on conceptualization and prototyping in specific contexts. Complete an open-ended project from initial design through functional prototype, with design and critique sessions.",
       credits:3,
       prereq_id:356,
       note:null
    },
    {
       course_id:460,
       title:"C S 460:Computer Communications and Networking",
       course_description:"Introduction to data communications and computer networking.  Communications fundamentals, computer networks, software, architecture, telecommunications, regulation, standards.",
       credits:3,
       prereq_id:324,
       note:null
    },
    {
       course_id:462,
       title:"C S 462:Large-Scale Distributed System Design",
       course_description:"Principles and concepts of designing and building distributed systems.  Introduction to architectures for distributed computation.  Reliability, availability, and scalability of large applications.  Cloud computing and APIs.",
       credits:3,
       prereq_id:324,
       note:"or equivalent experience"
    },
    {
       course_id:465,
       title:"C S 465:Computer Security",
       course_description:"Introduction to computer security fundamentals:confidentiality, integrity, authentication, and access control. Secret key and public key cryptography, network security protocols, viruses, and fire walls.",
       credits:3,
       prereq_id:324,
       note:null
    },
    {
       course_id:470,
       title:"C S 470:Introduction to Artificial Intelligence",
       course_description:"Introduction to core areas of artifical intelligence; intelligent agents, problem solving and search, knowledge-based systems and inference, planning, uncertainty, learning, and perception.",
       credits:3,
       prereq_id:312,
       note:null
    },
    {
       course_id:472,
       title:"C S 472:Introduction to Machine Learning",
       course_description:"Machine learning models and other mechanisms allowing computers to learn and find knowledge from data.",
       credits:3,
       prereq_id:312,
       note:null
    },
    {
       course_id:474,
       title:"C S 474:Introduction to Deep Learning",
       course_description:"Theory and practice of modern deep learning and associated software frameworks. A broad look at the field, drawing on material from machine vision, machine translation,  dynamical systems, audio processing, neural computing and human perception. Supporting mathematical concepts are also covered, including linear algebra, stochastic optimization, and hardware acceleration.",
       credits:3,
       prereq_id:312,
       note:null
    },
    {
       course_id:480,
       title:"C S 480:Software Engineering Capstone 1",
       course_description:"Culminating experience based on skills learned in advanced technical courses. Students work in teams to plan, design, implement, test, and demonstrate a major project.",
       credits:3,
       prereq_id:329,
       note:null
    },
    {
       course_id:481,
       title:"C S 481:Software Engineering Capstone 2",
       course_description:"Culminating experience based on skills learned in advanced technical courses. Students work in teams to plan, design, implement, test, and demonstrate a major project.",
       credits:3,
       prereq_id:480,
       note:null
    },
    {
       course_id:482,
       title:"C S 482:Data Science Capstone 1",
       course_description:"Culminating experience based on skills learned in advanced technical courses. Students work in teams to plan, design, implement, test, and demonstrate a major project.",
       credits:3,
       prereq_id:240,
       note:null
    },
    {
       course_id:483,
       title:"C S 483:Data Science Capstone 2",
       course_description:"Culminating experience based on skills learned in advanced technical courses. Students work in teams to plan, design, implement, test, and demonstrate a major project.",
       credits:3,
       prereq_id:482,
       note:null
    },
    {
       course_id:486,
       title:"C S 486:Verification and Validation",
       course_description:"Foundational topics in verification and validation; the application of logic to building correct systems. Covers logics to formally specify properties of systems, verifications of basic systems, and advanced topics in formal verification for complex systems.",
       credits:3,
       prereq_id:312,
       note:null
    },
    {
       course_id:493,
       title:"C S 493:Computing Competitions",
       course_description:"Students work in teams to prepare for and compete in computer science competitions in areas such as programming, data science, and ethical hacking.",
       credits:3,
       prereq_id:240,
       note:null
    },
    {
       course_id:494,
       title:"C S 494:Capstone 1",
       course_description:"Culminating experience based on skills learned in advanced technical courses. Students work in teams to plan, design, test, and demonstrate a major project.",
       credits:3,
       prereq_id:240,
       note:null
    },
    {
       course_id:495,
       title:"C S 495:Capstone 2",
       course_description:"The second semester of a culminating experience based on skills learned in advanced technical courses. Students work in teams to plan, design, test, and demonstrate a major project.",
       credits:3,
       prereq_id:240,
       note:null
    },
    {
       course_id:497,
       title:"C S 497:Undergraduate Research",
       course_description:"Students receive course credit for doing undergraduate research under the supervision of a faculty mentor.",
       credits:3,
       prereq_id:null,
       note:"Students must turn in signed research agreement at least 1 business day before add/drop deadline in order to receive permission-to-add code."
    },
    {
       course_id:498,
       title:"C S 498:Undergraduate Special Projects",
       course_description:"Students identify an interesting problem in computer science and solve it with the aid of faculty members.",
       credits:3,
       prereq_id:240,
       note:null
    },
    {
       course_id:501,
       title:"C S 501:Advanced Topics in Computer Science",
       course_description:"Advanced undergraduate- and graduate-level subjects as announced before each semester.",
       credits:3,
       prereq_id:null,
       note:"Instructor's consent"
    },
    {
       course_id:513,
       title:"C S 513:Robust Control",
       course_description:"Introduction to the analysis and design of feedback systems guaranteed to perform well in spite of model uncertainty.",
       credits:3,
       prereq_id:null,
       note:"MATH 213 + MATH 215"
    }
]

export default courses;