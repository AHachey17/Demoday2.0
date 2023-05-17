const mongoose = require("mongoose");

const CashierSchema = new mongoose.Schema({
  0: {
    question: {
      type: String,
      default: "How do you handle cash transactions accurately and efficiently?"
    },
    answer: {
      type: String,
      default: "When handling cash transactions, I ensure accuracy by carefully counting the money received and providing the correct change. I am proficient in using cash registers and POS systems to process transactions efficiently. Additionally, I double-check the amount before finalizing the transaction to avoid any mistakes."
    }
  },
  1: {
    question: {
      type: String,
      default: "How do you handle customer complaints or difficult situations?"
    },
    answer: {
      type: String,
      default: "When faced with customer complaints or difficult situations, I remain calm and attentive. I listen carefully to the customer's concerns and empathize with their perspective. I aim to find a solution that meets their needs while adhering to company policies. If necessary, I involve a supervisor or manager to resolve the issue satisfactorily."
    }
  },
  2: {
    question: {
      type: String,
      default: "How do you ensure the accuracy of inventory or stock levels?"
    },
    answer: {
      type: String,
      default: "To ensure the accuracy of inventory or stock levels, I am meticulous in recording sales, restocking items, and conducting regular inventory checks. I am familiar with inventory management systems and follow proper procedures for receiving and counting stock. By maintaining accurate records and promptly reporting any discrepancies, I contribute to efficient inventory management."
    }
  },
  3: {
    question: {
      type: String,
      default: "How do you handle situations where a customer's payment method is declined?"
    },
    answer: {
      type: String,
      default: "If a customer's payment method is declined, I remain discreet and professional. I kindly inform the customer of the situation and suggest alternative payment methods, such as using a different card, paying in cash, or speaking with their bank. I prioritize customer service and work with the customer to find a suitable solution while ensuring the security and integrity of the transaction."
    }
  },
  4: {
    question: {
      type: String,
      default: "How do you handle situations where a customer requests a refund or return?"
    },
    answer: {
      type: String,
      default: "When a customer requests a refund or return, I adhere to the company's refund and return policies. I carefully listen to the customer's reasons for the request and verify the eligibility of the product for return or refund. I strive to provide excellent customer service by processing the refund or return promptly and courteously, ensuring a positive customer experience."
    }
  },
  5: {
    question: {
      type: String,
      default: "How do you ensure the security of cash and personal information during transactions?"
    },
    answer: {
      type: String,
      default: "To ensure the security of cash and personal information during transactions, I strictly adhere to established security protocols. I am diligent in handling cash securely, keeping it out of public view and depositing it in the appropriate safe or cash register. I am also mindful of protecting customer information by following privacy guidelines and maintaining confidentiality."
    }
  },
  6: {
    question: {
      type: String,
      default: "How do you handle a long queue of customers and maintain efficiency?"
    },
    answer: {
      type: String,
      default: "When faced with a long queue of customers, I prioritize efficiency while providing excellent customer service. I remain focused and work quickly without compromising accuracy. I use effective communication skills to keep customers informed about the wait times and engage in small talk to make their experience more pleasant. If necessary, I seek assistance from colleagues or supervisors to ensure a smooth flow of customers."
    }
  },
  7: {
    question: {
      type: String,
      default: "How do you handle situations where you encounter an unfamiliar product or pricing?"
    },
    answer: {
      type: String,
      default: "If I encounter an unfamiliar product or pricing, I proactively seek assistance to ensure accurate information and avoid any mistakes. I consult product catalogs, price lists, or colleagues with relevant expertise to clarify any uncertainties. By prioritizing accuracy and customer satisfaction, I aim to provide reliable information to customers and maintain a positive shopping experience."
    }
  },
  8: {
    question: {
      type: String,
      default: "How do you provide excellent customer service as a cashier?"
    },
    answer: {
      type: String,
      default: "As a cashier, I prioritize providing excellent customer service by greeting customers with a friendly and welcoming demeanor. I actively listen to their needs and questions, offering assistance and guidance. I strive to create a positive and efficient checkout experience, ensuring accurate transactions, and expressing appreciation for their patronage. I am always ready to address any concerns or inquiries with a positive attitude."
    }
  },
  9: {
    question: {
      type: String,
      default: "How do you handle situations where a customer is dissatisfied with a product or service?"
    },
    answer: {
      type: String,
      default: "If a customer is dissatisfied with a product or service, I approach the situation with empathy and a willingness to resolve the issue. I listen attentively to their concerns, validate their feelings, and offer appropriate solutions within the company's guidelines. I aim to turn a negative experience into a positive one by providing alternatives, exchanges, or refunds, and ensuring the customer feels valued and heard."
    }
  }
});

module.exports = mongoose.model("Cashier", CashierSchema);
