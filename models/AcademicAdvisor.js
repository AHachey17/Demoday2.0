const mongoose = require("mongoose");

const AcademicAdvisorSchema = new mongoose.Schema({
  0: {
    question: {
      type: String,
      default: "What experience do you have in academic advising?"
    },
    answer: {
      type: String,
      default: "I have X years of experience in academic advising. In my previous role, I worked closely with students to help them navigate their academic journey, providing guidance on course selection, degree requirements, and academic policies."
    },
  },
  1: {
    question: {
      type: String,
      default: "How do you stay updated with the latest academic program requirements and policies?"
    },
    answer: {
      type: String,
      default: "I stay updated with the latest academic program requirements and policies by regularly attending professional development workshops, conferences, and seminars. I also maintain strong relationships with faculty members and participate in faculty meetings to stay informed about any changes or updates to the curriculum."
    },
  },
  2: {
    question: {
      type: String,
      default: "How would you handle a student who is struggling academically?"
    },
    answer: {
      type: String,
      default: "If a student is struggling academically, I would first schedule a meeting with them to understand the challenges they are facing. I would listen to their concerns, offer support, and provide resources such as tutoring services or study groups. I would work with them to create an action plan, set realistic goals, and provide ongoing guidance and encouragement to help them improve their academic performance."
    },
  },
  3: {
    question: {
      type: String,
      default: "How do you prioritize and manage your workload as an academic advisor?"
    },
    answer: {
      type: String,
      default: "As an academic advisor, I prioritize my workload by setting clear goals and deadlines. I use tools such as calendars and task management software to stay organized. I also practice effective time management techniques, such as breaking down larger tasks into smaller, manageable ones, and regularly reviewing and adjusting my schedule based on changing priorities. Additionally, I maintain open communication with students and colleagues to ensure timely and efficient support."
    },
  },
  4: {
    question: {
      type: String,
      default: "Describe your approach to building relationships with students and fostering a supportive advising environment."
    },
    answer: {
      type: String,
      default: "I believe in building strong relationships with students based on trust, empathy, and open communication. I create a supportive advising environment by actively listening to students' concerns, treating them with respect and professionalism, and tailoring my approach to meet their individual needs. I encourage students to share their goals and aspirations, and I provide guidance and resources to help them navigate their academic journey successfully."
    },
  },
  5: {
    question: {
      type: String,
      default: "How do you handle confidentiality and privacy concerns in academic advising?"
    },
    answer: {
      type: String,
      default: "Confidentiality and privacy are essential in academic advising. I strictly adhere to confidentiality policies and ensure that students' personal and academic information is handled with utmost care. I explain to students the importance of confidentiality and reassure them that their information will not be shared without their consent, except in situations where there may be a risk to their safety or the safety of others."
    },
  }
});

module.exports = mongoose.model("AcademicAdvisor", AcademicAdvisorSchema);
