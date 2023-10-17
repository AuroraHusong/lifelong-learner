
const coursesData = [
    {
        category: 'Programming',
        courses: [
          {
            title: 'Python Basics',
            description: 'Learn the fundamentals of Python programming.',
            level: 'Beginner',
            imageUrl: 'images/api_images/programming/prog1.jpg',
            author: 'John Doe',
            duration: '5 hours',
            isEnrolled: false,
          },
          {
            title: 'Intermediate Python',
            description: 'Take your Python skills to the next level.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/programming/prog2.jpg',
            author: 'Jane Smith',
            duration: '6 hours',
            isEnrolled: false,
          },
          {
            title: 'Advanced Python',
            description: 'Master advanced Python topics and techniques.',
            level: 'Advanced',
            imageUrl: 'images/api_images/programming/prog3.jpg',
            author: 'James Johnson',
            duration: '7 hours',
            isEnrolled: false,
          },
          {
            title: 'Python for Data Science',
            description: 'Use Python for data analysis and visualization.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/programming/prog4.jpg',
            author: 'Emily Brown',
            duration: '8 hours',
            isEnrolled: false,
          },
          {
            title: 'Python Web Development',
            description: 'Build web applications with Python and Flask.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/programming/prog5.jpg',
            author: 'Michael Wilson',
            duration: '6.5 hours',
            isEnrolled: false,
          },
          {
            title: 'Machine Learning with Python',
            description: 'Learn how to implement machine learning algorithms in Python.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/programming/prog6.jpg',
            author: 'Sara Davis',
            duration: '9 hours',
            isEnrolled: false,
          },
          {
            title: 'Python Game Development',
            description: 'Create games using Python and Pygame.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/programming/prog7.jpg',
            author: 'Daniel Lee',
            duration: '7.5 hours',
            isEnrolled: false,
          },
          {
            title: 'Python for Automation',
            description: 'Automate tasks and processes with Python scripts.',
            level: 'Intermediate',
            imageUrl:  'images/api_images/programming/prog8.jpg',
            author: 'Olivia White',
            duration: '6 hours',
            isEnrolled: false,
          },
          {
            title: 'Python and Django',
            description: 'Build web applications with Python and Django framework.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/programming/prog9.jpg',
            author: 'David Moore',
            duration: '7 hours',
            isEnrolled: false,
          },
          {
            title: 'Python and Data Structures',
            description: 'Explore data structures and algorithms in Python.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/programming/prog10.jpg',
            author: 'Sophia Clark',
            duration: '6.5 hours',
            isEnrolled: false,
          },
          {
            title: 'Python Testing and Debugging',
            description: 'Learn best practices for testing and debugging Python code.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/programming/prog11.jpg',
            author: 'Matthew Harris',
            duration: '5.5 hours',
            isEnrolled: false,
          },
          {
            title: 'Python Security',
            description: 'Discover best practices for securing Python applications.',
            level: 'Advanced',
            imageUrl: 'images/api_images/programming/prog12.jpg',
            author: 'Ella Martinez',
            duration: '8.5 hours',
            isEnrolled: false,
          },
        ],
      },
      {
        category: 'Design',
        courses: [
          {
            title: 'Introduction to Graphic Design',
            description: 'Learn the fundamentals of graphic design.',
            level: 'Beginner',
            imageUrl: 'images/api_images/design/design1.jpg',
            author: 'Grace Turner',
            duration: '4.5 hours',
            isEnrolled: false,
          },
          {
            title: 'UI/UX Design Principles',
            description: 'Explore user interface and user experience design.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/design/design2.jpg',
            author: 'Samuel Green',
            duration: '6 hours',
            isEnrolled: false,
          },
          {
            title: 'Typography in Design',
            description: 'Master the art of typography in design.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/design/design8.jpg',
            author: 'Lily Evans',
            duration: '5.5 hours',
            isEnrolled: false,
          },
          {
            title: 'Logo Design Workshop',
            description: 'Create memorable logos for brands and businesses.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/design/design3.jpg',
            author: 'Benjamin Carter',
            duration: '6.5 hours',
            isEnrolled: false,
          },
          {
            title: 'Illustration for Designers',
            description: 'Enhance your design skills with illustration techniques.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/design/design4.jpg',
            author: 'Ava Mitchell',
            duration: '6 hours',
            isEnrolled: false,
          },
          {
            title: 'Design Thinking and Creativity',
            description: 'Boost your creativity and problem-solving in design.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/design/design5.jpg',
            author: 'Ethan Adams',
            duration: '7 hours',
            isEnrolled: false,
          },
          {
            title: 'User-Centered Design',
            description: 'Put users at the center of your design process.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/design/design6.jpg',
            author: 'Nora Davis',
            duration: '6.5 hours',
            isEnrolled: false,
          },
          {
            title: 'Advanced UI Design',
            description: 'Design stunning user interfaces with advanced techniques.',
            level: 'Advanced',
            imageUrl: 'images/api_images/design/design7.jpg',
            author: 'Liam Wilson',
            duration: '8 hours',
            isEnrolled: false,
          },
          {
            title: '3D Modeling and Rendering',
            description: 'Create 3D designs and renderings for visualizations.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/design/design12.jpg',
            author: 'Zoe Collins',
            duration: '7 hours',
            isEnrolled: false,
          },
          {
            title: 'Interactive Prototyping',
            description: 'Prototype and test interactive designs for web and apps.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/design/design9.jpg',
            author: 'Daniel Walker',
            duration: '6.5 hours',
            isEnrolled: false,
          },
          {
            title: 'Motion Graphics Design',
            description: 'Bring designs to life with motion graphics and animations.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/design/design10.jpg',
            author: 'Mia Turner',
            duration: '7.5 hours',
            isEnrolled: false,
          },
          {
            title: 'Design Portfolio Development',
            description: 'Build a strong portfolio to showcase your design work.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/design/design11.jpg',
            author: 'Ella Mitchell',
            duration: '6 hours',
            isEnrolled: false,
          },
        ],
      },
      {
        category: 'Business & Management',
        courses: [
          {
            title: 'Business Fundamentals',
            description: 'Learn the basics of running a successful business.',
            level: 'Beginner',
            imageUrl: 'images/api_images/business/business1.jpg',
            author: 'Oliver Davis',
            duration: '4 hours',
            isEnrolled: false,
          },
          {
            title: 'Marketing Strategies',
            description: 'Develop effective marketing strategies for your business.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/business/business2.jpg',
            author: 'Sophia Clark',
            duration: '5 hours',
            isEnrolled: false,
          },
          {
            title: 'Financial Management',
            description: 'Manage your finances and make informed financial decisions.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/business/business3.jpg',
            author: 'Ethan Adams',
            duration: '5.5 hours',
            isEnrolled: false,
          },
          {
            title: 'Leadership & Team Management',
            description: 'Enhance your leadership and team management skills.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/business/business4.jpg',
            author: 'Ava Mitchell',
            duration: '6 hours',
            isEnrolled: false,
          },
          {
            title: 'Entrepreneurship Essentials',
            description: 'Master the essentials of starting and growing a business.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/business/business5.jpg',
            author: 'James Johnson',
            duration: '6.5 hours',
            isEnrolled: false,
          },
          {
            title: 'Project Management',
            description: 'Learn project management techniques for successful projects.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/business/business6.jpg',
            author: 'Nora Davis',
            duration: '7 hours',
            isEnrolled: false,
          },
          {
            title: 'Business Ethics',
            description: 'Explore ethical considerations in business and management.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/business/business7.jpg',
            author: 'Benjamin Carter',
            duration: '5.5 hours',
            isEnrolled: false,
          },
          {
            title: 'Negotiation and Conflict Resolution',
            description: 'Improve your negotiation and conflict resolution skills.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/business/business8.jpg',
            author: 'Liam Wilson',
            duration: '6.5 hours',
            isEnrolled: false,
          },
          {
            title: 'Supply Chain Management',
            description: 'Optimize your supply chain and logistics processes.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/business/business9.jpg',
            author: 'Mia Turner',
            duration: '6 hours',
            isEnrolled: false,
          },
          {
            title: 'Business Law',
            description: 'Understand the legal aspects of business operations.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/business/business10.jpg',
            author: 'Daniel Walker',
            duration: '5 hours',
            isEnrolled: false,
          },
          {
            title: 'Human Resources Management',
            description: 'Manage human resources effectively in your organization.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/business/business11.jpg',
            author: 'Ella Martinez',
            duration: '7 hours',
            isEnrolled: false,
          },
          {
            title: 'Strategic Planning',
            description: 'Develop and execute strategic plans for your business.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/business/business12.jpg',
            author: 'David Moore',
            duration: '6.5 hours',
            isEnrolled: false,
          },
        ],
      },
      {
        category: 'Fashion Design',
        courses: [
          {
            title: 'Fashion Sketching and Design',
            description: 'Learn to sketch and design fashionable clothing.',
            level: 'Beginner',
            imageUrl: 'images/api_images/fashion/fashion1.jpg',
            author: 'Lily Evans',
            duration: '4.5 hours',
            isEnrolled: false,
          },
          {
            title: 'Pattern Making',
            description: 'Create patterns and sew your own garments.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/fashion/fashion2.jpg',
            author: 'Daniel Walker',
            duration: '5 hours',
            isEnrolled: false,
          },
          {
            title: 'Textile and Fabric Selection',
            description: 'Choose the right fabrics for your fashion designs.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/fashion/fashion3.jpg',
            author: 'Nora Davis',
            duration: '5.5 hours',
            isEnrolled: false,
          },
          {
            title: 'Fashion Branding and Marketing',
            description: 'Build and promote your fashion brand.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/fashion/fashion4.jpg',
            author: 'Ella Martinez',
            duration: '6 hours',
            isEnrolled: false,
          },
          {
            title: 'Fashion History and Trends',
            description: 'Explore the history and evolution of fashion trends.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/fashion/fashion5.jpg',
            author: 'James Johnson',
            duration: '6.5 hours',
            isEnrolled: false,
          },
          {
            title: 'Fashion Illustration',
            description: 'Master the art of fashion illustration and presentation.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/fashion/fashion6.jpg',
            author: 'Mia Turner',
            duration: '7 hours',
            isEnrolled: false,
          },
          {
            title: 'Sustainable Fashion Design',
            description: 'Design environmentally-friendly and sustainable fashion.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/fashion/fashion7.jpg',
            author: 'Ava Mitchell',
            duration: '6.5 hours',
            isEnrolled: false,
          },
          {
            title: 'Fashion Merchandising',
            description: 'Learn how to merchandise and sell fashion products.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/fashion/fashion8.jpg',
            author: 'Liam Wilson',
            duration: '6 hours',
            isEnrolled: false,
          },
          {
            title: 'Fashion Photography',
            description: 'Capture fashion moments and create stunning photos.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/fashion/fashion9.jpg',
            author: 'Oliver Davis',
            duration: '5 hours',
            isEnrolled: false,
          },
          {
            title: 'Haute Couture and Runway Fashion',
            description: 'Explore high fashion and runway design techniques.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/fashion/fashion10.jpg',
            author: 'Sophia Clark',
            duration: '8 hours',
            isEnrolled: false,
          },
          {
            title: 'Costume Design',
            description: 'Design costumes for theater, film, and events.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/fashion/fashion11.jpg',
            author: 'Ethan Adams',
            duration: '7 hours',
            isEnrolled: false,
          },
          {
            title: 'Fashion Portfolio Development',
            description: 'Create a compelling portfolio of your fashion work.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/fashion/fashion12.jpg',
            author: 'Nora Davis',
            duration: '6.5 hours',
            isEnrolled: false,
          },
        ],
      },
      {
        category: 'Physical & Mental Health',
        courses: [
          {
            title: 'Healthy Living and Nutrition',
            description: 'Learn how to live a healthy lifestyle and make nutritious food choices.',
            level: 'Beginner',
            imageUrl: 'images/api_images/pmhealth/pmhealth1.jpg',
            author: 'Grace Turner',
            duration: '4.5 hours',
            isEnrolled: false,
          },
          {
            title: 'Fitness and Exercise Routine',
            description: 'Establish a regular fitness routine for a healthier life.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/pmhealth/pmhealth2.jpg',
            author: 'Samuel Green',
            duration: '6 hours',
            isEnrolled: false,
          },
          {
            title: 'Mental Health and Wellbeing',
            description: 'Explore strategies for mental health and emotional wellbeing.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/pmhealth/pmhealth3.jpg',
            author: 'Lily Evans',
            duration: '5.5 hours',
            isEnrolled: false,
          },
          {
            title: 'Yoga and Stress Reduction',
            description: 'Practice yoga and relaxation techniques for stress relief.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/pmhealth/pmhealth4.jpg',
            author: 'Benjamin Carter',
            duration: '6.5 hours',
            isEnrolled: false,
          },
          {
            title: 'Meditation and Mindfulness',
            description: 'Cultivate mindfulness and meditation for mental clarity.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/pmhealth/pmhealth5.jpg',
            author: 'Ava Mitchell',
            duration: '6 hours',
            isEnrolled: false,
          },
          {
            title: 'Weight Management and Diet Planning',
            description: 'Manage weight and plan a balanced diet for better health.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/pmhealth/pmhealth6.jpg',
            author: 'Ethan Adams',
            duration: '7 hours',
            isEnrolled: false,
          },
          {
            title: 'Coping with Stress and Anxiety',
            description: 'Learn strategies for coping with stress and anxiety.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/pmhealth/pmhealth7.jpg',
            author: 'Nora Davis',
            duration: '6.5 hours',
            isEnrolled: false,
          },
          {
            title: 'Positive Psychology and Happiness',
            description: 'Explore the science of happiness and positive psychology.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/pmhealth/pmhealth8.jpg',
            author: 'Liam Wilson',
            duration: '8 hours',
            isEnrolled: false,
          },
          {
            title: 'Sleep Hygiene and Better Sleep',
            description: 'Improve sleep quality and establish healthy sleep habits.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/pmhealth/pmhealth9.jpg',
            author: 'Zoe Collins',
            duration: '7 hours',
            isEnrolled: false,
          },
          {
            title: 'Holistic Health and Alternative Therapies',
            description: 'Discover holistic health practices and alternative therapies.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/pmhealth/pmhealth10.jpg',
            author: 'Daniel Walker',
            duration: '6.5 hours',
            isEnrolled: false,
          },
          {
            title: 'Emotional Intelligence and Resilience',
            description: 'Enhance emotional intelligence and build resilience.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/pmhealth/pmhealth11.jpg',
            author: 'Mia Turner',
            duration: '7.5 hours',
            isEnrolled: false,
          },
          {
            title: 'Healthy Aging and Longevity',
            description: 'Learn how to age healthily and promote longevity.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/pmhealth/pmhealth12.jpg',
            author: 'Ella Mitchell',
            duration: '6 hours',
            isEnrolled: false,
          },
        ],
      },
      {
        category: 'History & Religion',
        courses: [
          {
            title: 'World History: Ancient Civilizations',
            description: 'Explore the history of ancient civilizations around the world.',
            level: 'Beginner',
            imageUrl: 'images/api_images/history/history1.jpg',
            author: 'John Doe',
            duration: '4 hours',
            isEnrolled: false
          },
          {
            title: 'Religions of the World',
            description: 'Learn about the major world religions and their beliefs.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/history/history2.jpg',
            author: 'Alice Smith',
            duration: '5 hours',
            isEnrolled: false
          },
          {
            title: 'European History: Renaissance to Modern Era',
            description: 'Study European history from the Renaissance to the modern era.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/history/history3.jpg',
            author: 'Robert Johnson',
            duration: '6 hours',
            isEnrolled: false
          },
          {
            title: 'Ancient Egypt: Pharaohs and Pyramids',
            description: 'Delve into the history of ancient Egypt, its pharaohs, and pyramids.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/history/history4.jpg',
            author: 'Emily Davis',
            duration: '4.5 hours',
            isEnrolled: false
          },
          {
            title: 'The Middle Ages and Medieval History',
            description: 'Explore the history of the Middle Ages and medieval societies.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/history/history5.jpg',
            author: 'Michael White',
            duration: '5 hours',
            isEnrolled: false
          },
          {
            title: 'World Religions: Comparative Study',
            description: 'Compare and contrast the world\'s major religions.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/history/history6.jpg',
            author: 'Sophia Johnson',
            duration: '4 hours',
            isEnrolled: false
          },
          {
            title: 'American History: Founding to Present',
            description: 'Trace the history of the United States from its founding to the present.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/history/history7.jpg',
            author: 'William Smith',
            duration: '6 hours',
            isEnrolled: false
          },
          {
            title: 'Religion and Philosophy',
            description: 'Examine the intersection of religion and philosophy in human history.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/history/history8.jpg',
            author: 'Olivia Johnson',
            duration: '4.5 hours',
            isEnrolled: false
          },
          {
            title: 'History of Art and Architecture',
            description: 'Study the history of art and architectural styles across time.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/history/history9.jpg',
            author: 'Daniel Wilson',
            duration: '5 hours',
            isEnrolled: false
          },
          {
            title: 'The Reformation and Religious Movements',
            description: 'Learn about the Reformation and significant religious movements.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/history/history10.jpg',
            author: 'Sophie Johnson',
            duration: '4.5 hours',
            isEnrolled: false
          },
          {
            title: 'Ancient Greece: Mythology and History',
            description: 'Explore the mythology and history of ancient Greece.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/history/history11.jpg',
            author: 'David Davis',
            duration: '5 hours',
            isEnrolled: false
          },
          {
            title: 'The Crusades and Medieval Warfare',
            description: 'Dive into the history of the Crusades and medieval warfare.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/history/history12.jpg',
            author: 'Laura Smith',
            duration: '6 hours',
            isEnrolled: false
          }
        ]
      },
      {
        category: 'Lifestyle & Personal Development',
        courses: [
          {
            title: 'Personal Growth and Self-Improvement',
            description: 'Embark on a journey of personal growth and self-improvement.',
            level: 'Beginner',
            imageUrl: 'images/api_images/development/development1.jpg',
            author: 'John Doe',
            duration: '4 hours',
            isEnrolled: false
          },
          {
            title: 'Mindfulness and Meditation Practices',
            description: 'Incorporate mindfulness and meditation into your daily life.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/development/development2.jpg',
            author: 'Alice Smith',
            duration: '5 hours',
            isEnrolled: false
          },
          {
            title: 'Healthy Cooking and Nutrition',
            description: 'Learn to cook nutritious and delicious meals for a healthy lifestyle.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/development/development7.jpg',
            author: 'Robert Johnson',
            duration: '6 hours',
            isEnrolled: false
          },
          {
            title: 'Travel and Adventure Planning',
            description: 'Plan exciting adventures and memorable travel experiences.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/development/development3.jpg',
            author: 'Emily Davis',
            duration: '4.5 hours',
            isEnrolled: false
          },
          {
            title: 'Time Management and Productivity',
            description: 'Maximize your time and boost productivity in daily life.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/development/development4.jpg',
            author: 'Michael White',
            duration: '5 hours',
            isEnrolled: false
          },
          {
            title: 'Creative Hobbies and Crafts',
            description: 'Explore creative hobbies and crafts for self-expression.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/development/development10.jpg',
            author: 'Sophia Johnson',
            duration: '4 hours',
            isEnrolled: false
          },
          {
            title: 'Healthy Relationships and Communication',
            description: 'Build healthy relationships and improve communication skills.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/development/development5.jpg',
            author: 'William Smith',
            duration: '6 hours',
            isEnrolled: false
          },
          {
            title: 'Financial Wellness and Budgeting',
            description: 'Achieve financial wellness through effective budgeting.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/development/development6.jpg',
            author: 'Olivia Johnson',
            duration: '4.5 hours',
            isEnrolled: false
          },
          {
            title: 'Stress Reduction and Relaxation',
            description: 'Find methods to reduce stress and relax in daily life.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/development/development8.jpg',
            author: 'Daniel Wilson',
            duration: '5 hours',
            isEnrolled: false
          },
          {
            title: 'Goal Setting and Achievement',
            description: 'Set and achieve personal and professional goals.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/development/development9.jpg',
            author: 'Sophie Johnson',
            duration: '4.5 hours',
            isEnrolled: false
          },
          {
            title: 'Digital Skills and Online Learning',
            description: 'Master digital skills and enhance your online learning capabilities.',
            level: 'Intermediate',
            imageUrl: 'images/api_images/development/development11.jpg',
            author: 'David Davis',
            duration: '5 hours',
            isEnrolled: false
          },
          {
            title: 'Life Coaching and Personal Transformation',
            description: 'Experience life coaching and personal transformation strategies.',
            level: 'Intermediate',
            imageUrl:'images/api_images/development/development12.jpg',
            author: 'Laura Smith',
            duration: '6 hours',
            isEnrolled: false
          }
        ]
      },
      {
        category: 'Politics & Law',
        courses: [
          {
            title: 'Introduction to Political Science',
            description: 'Explore the fundamentals of political science and government.',
            level: 'Beginner',
            imageUrl: 'URL_to_image_25',
            author: 'Olivia White',
            duration: '4 hours',
            isEnrolled: false
          },
          {
            title: 'International Relations and Diplomacy',
            description: 'Study international relations and the art of diplomacy.',
            level: 'Intermediate',
            imageUrl: 'URL_to_image_26',
            author: 'Nathan Clark',
            duration: '6 hours',
            isEnrolled: false
          },
          {
            title: 'Constitutional Law and Civil Rights',
            description: 'Examine constitutional law and civil rights in society.',
            level: 'Intermediate',
            imageUrl: 'URL_to_image_27',
            author: 'Ella Baker',
            duration: '5 hours',
            isEnrolled: false
          },
          {
            title: 'Global Politics and Current Affairs',
            description: 'Stay informed about global politics and current events.',
            level: 'Intermediate',
            imageUrl: 'URL_to_image_28',
            author: 'James Wilson',
            duration: '4.5 hours',
            isEnrolled: false
          },
          {
            title: 'Criminal Justice and Law Enforcement',
            description: 'Gain insights into the criminal justice system and law enforcement.',
            level: 'Intermediate',
            imageUrl: 'URL_to_image_29',
            author: 'Sophie Turner',
            duration: '6 hours',
            isEnrolled: false
          },
          {
            title: 'Environmental Policy and Sustainability',
            description: 'Address environmental policy and sustainability challenges.',
            level: 'Intermediate',
            imageUrl: 'URL_to_image_30',
            author: 'Benjamin Adams',
            duration: '5 hours',
            isEnrolled: false
          },
          {
            title: 'Public Policy and Governance',
            description: 'Learn about public policy development and governance.',
            level: 'Intermediate',
            imageUrl: 'URL_to_image_31',
            author: 'Ava Roberts',
            duration: '4.5 hours',
            isEnrolled: false
          },
          {
            title: 'Human Rights and Social Justice',
            description: 'Advocate for human rights and social justice causes.',
            level: 'Intermediate',
            imageUrl: 'URL_to_image_32',
            author: 'David Miller',
            duration: '5 hours',
            isEnrolled: false
          },
          {
            title: 'Political Campaign Strategy',
            description: 'Discover effective strategies for political campaigns.',
            level: 'Intermediate',
            imageUrl: 'URL_to_image_33',
            author: 'Lily Parker',
            duration: '6 hours',
            isEnrolled: false
          },
          {
            title: 'Legal Studies and Paralegal Training',
            description: 'Explore legal studies and prepare for a career as a paralegal.',
            level: 'Intermediate',
            imageUrl: 'URL_to_image_34',
            author: 'Michael Green',
            duration: '4 hours',
            isEnrolled: false
          },
          {
            title: 'Ethics in Politics and Law',
            description: 'Discuss ethical considerations in politics and law.',
            level: 'Intermediate',
            imageUrl: 'URL_to_image_35',
            author: 'Sophia King',
            duration: '5 hours',
            isEnrolled: false
          },
          {
            title: 'Public Speaking and Debate Skills',
            description: 'Develop public speaking and debate skills for effective communication.',
            level: 'Intermediate',
            imageUrl: 'URL_to_image_36',
            author: 'Ethan Davis',
            duration: '4.5 hours',
            isEnrolled: false
          }
        ]
      }
]

  
module.exports = coursesData;

  