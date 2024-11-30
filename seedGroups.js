const mongoose = require('mongoose');
const Group = require('./models/Group'); // Adjust path if the Group model is in a different directory
require('dotenv').config();

const seedGroups = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    const groups = [
      {
        name: 'Math Study Group',
        code: 'MATH123',
        description: 'A group for math enthusiasts',
        resources: [
          {
            type: 'link',  // Type of resource (link, pdf, note)
            url: 'http://example.com/resource1',  // Link to an online resource
          },
          {
            type: 'pdf',  // Type of resource (PDF)
            filePath: '/uploads/resource1.pdf',  // Local file path if the PDF is uploaded
            description: 'Math Lecture Notes',
          }
        ],
      },
      {
        name: 'Science Club',
        code: 'SCI456',
        description: 'A group for science lovers',
        resources: [
          {
            type: 'link',
            url: 'http://example.com/resource2',
          },
          {
            type: 'pdf',
            filePath: '/uploads/resource2.pdf',
            description: 'Science Article',
          }
        ],
      },
      {
        name: 'Resources Group',
        code: 'RES123',
        description: 'A group for sharing educational resources',
        resources: [
          {
            type: 'link',
            url: 'http://example.com/resource3',
          },
          {
            type: 'pdf',
            filePath: '/uploads/resource3.pdf',
            description: 'Physics Study Material',
          }
        ],
      }
    ];

    await Group.deleteMany();  // Optional: Clear previous groups
    await Group.insertMany(groups);  // Insert new groups with resources

    console.log('Groups seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding groups:', error);
    process.exit(1);
  }
};

seedGroups();
