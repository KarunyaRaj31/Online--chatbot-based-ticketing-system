const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");

let userMessage;
const inputIntHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span> <p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}

const generateResponse = (incomingChatLi) => {
    const messageElement = incomingChatLi.querySelector("p");
    
    // Predefined questions and answers
    const qaPairs = {




// "Are you visiting the museum for a special occasion?"
// "Have you been to this museum before?"
// "What part of the museum are you most excited to see?"
// "Do you prefer art, history, or science exhibits?"
// "Would you like a recommendation for a must-see exhibit?"
// "Are you interested in learning about any new exhibits?"
// "What’s your favorite type of museum experience – interactive, visual, or educational?"
// "Do you prefer self-guided tours or guided tours?"
// "Are you planning to visit the museum gift shop during your visit?"
// "Would you like to hear about any upcoming events or workshops at the museum?"
// "Are you visiting alone, with family, or with friends?"
// "Would you like to know the best times to avoid crowds?"
// "Do you prefer to explore at your own pace or follow a set itinerary?"
// "Are you interested in any virtual museum tours?"
// "Do you know the museum offers special evening or after-hours tours?"
// "Have you visited any other museums recently?"
// "Would you like a list of nearby cafes or restaurants to visit after your museum tour?"
// "Would you like to learn some fun facts about the museum before your visit?"
// "Are you a fan of art or history exhibitions?"
// "Do you want to make your visit more interactive with a scavenger hunt?"




// "What date would you like to visit the museum?",
// "At what time would you like to visit?",
// "How long do you plan to stay?",
// "How many tickets would you like to book?",
// "Are you booking for adults, children, or seniors?",
// "Will you need group tickets?",
// "Would you like to purchase standard, student, or senior tickets?",
// "Are you interested in a guided tour ticket?",
// "Would you like to purchase a family pass or a season pass?",
// "Are you planning to visit any special exhibitions?",
// "Would you like to book tickets for any events or workshops?",
// "Do you want to include access to the [specific exhibition]?",
// "Are you a member of the museum?",
// "Do you have any discount codes or vouchers?",
// "Are you eligible for any discounts (student, senior, military)?",
// "Do you have any accessibility requirements?",
// "Would you prefer an audio guide or a printed guide?",
// "Do you want to schedule a guided tour?",
// "How would you like to pay for your tickets?",
// "Would you prefer to pay now or upon arrival?",
// "Would you like your tickets emailed or sent via text?",
// "Would you prefer a digital or printed ticket?",
// "Shall I go ahead and confirm your booking?",
// "Would you like to receive a reminder before your visit?",
// "Is there anything else I can assist you with?",




// "WHAT DATE WOULD YOU LIKE TO VISIT THE MUSEUM?",
// "AT WHAT TIME WOULD YOU LIKE TO VISIT?", 
// "HOW LONG DO YOU PLAN TO STAY?", 
// "HOW MANY TICKETS WOULD YOU LIKE TO BOOK?", 
// "ARE YOU BOOKING FOR ADULTS, CHILDREN, OR SENIORS?", 
// "WILL YOU NEED GROUP TICKETS?", 
// "WOULD YOU LIKE TO PURCHASE STANDARD, STUDENT, OR SENIOR TICKETS?", 
// "ARE YOU INTERESTED IN A GUIDED TOUR TICKET?", 
// "WOULD YOU LIKE TO PURCHASE A FAMILY PASS OR A SEASON PASS?", 
// "ARE YOU PLANNING TO VISIT ANY SPECIAL EXHIBITIONS?", 
// "WOULD YOU LIKE TO BOOK TICKETS FOR ANY EVENTS OR WORKSHOPS?", 
// "DO YOU WANT TO INCLUDE ACCESS TO THE [SPECIFIC EXHIBITION]?", 
// "ARE YOU A MEMBER OF THE MUSEUM?", 
// "DO YOU HAVE ANY DISCOUNT CODES OR VOUCHERS?", 
// "ARE YOU ELIGIBLE FOR ANY DISCOUNTS (STUDENT, SENIOR, MILITARY)?", 
// "DO YOU HAVE ANY ACCESSIBILITY REQUIREMENTS?", 
// "WOULD YOU PREFER AN AUDIO GUIDE OR A PRINTED GUIDE?", 
// "DO YOU WANT TO SCHEDULE A GUIDED TOUR?", 
// "HOW WOULD YOU LIKE TO PAY FOR YOUR TICKETS?", 
// "WOULD YOU PREFER TO PAY NOW OR UPON ARRIVAL?", 
// "WOULD YOU LIKE YOUR TICKETS EMAILED OR SENT VIA TEXT?", 
// "WOULD YOU PREFER A DIGITAL OR PRINTED TICKET?", 
// "SHALL I GO AHEAD AND CONFIRM YOUR BOOKING?", 
// "WOULD YOU LIKE TO RECEIVE A REMINDER BEFORE YOUR VISIT?", 
// "IS THERE ANYTHING ELSE I CAN ASSIST YOU WITH?".




// "what date would you like to visit the museum?", 
// "at what time would you like to visit?", 
// "how long do you plan to stay?", 
// "how many tickets would you like to book?", 
// "are you booking for adults, children, or seniors?", 
// "will you need group tickets?", 
// "would you like to purchase standard, student, or senior tickets?", 
// "are you interested in a guided tour ticket?", 
// "would you like to purchase a family pass or a season pass?", 
// "are you planning to visit any special exhibitions?", 
// "would you like to book tickets for any events or workshops?", 
// "do you want to include access to the [specific exhibition]?", 
// "are you a member of the museum?", "do you have any discount codes or vouchers?", 
// "are you eligible for any discounts (student, senior, military)?", 
// "do you have any accessibility requirements?", 
// "would you prefer an audio guide or a printed guide?", 
// "do you want to schedule a guided tour?", 
// "how would you like to pay for your tickets?", 
// "would you prefer to pay now or upon arrival?", 
// "would you like your tickets emailed or sent via text?", 
// "would you prefer a digital or printed ticket?", 
// "shall i go ahead and confirm your booking?", 
// "would you like to receive a reminder before your visit?", 
// "is there anything else i can assist you with?".




// --------------------------------------------------------------------------


        "Hi": "Hi! How may I assist you?                 do you want to book ticket.",
        "HI": "HI! How may I assist you?                 do you want to book ticket.",
        "hi": "hi! How may I assist you?                 do you want to book ticket.",
        "hello": "hello! How may I assist you?                 do you want to book ticket.",
        "Hello": "Hello! How may I assist you?                 do you want to book ticket.",
        "HELLO": "HELLO! How may I assist you?                 do you want to book ticket.",

        "नमस्ते":"नमस्ते! मैं आपकी किस प्रकार सहायता कर सकता हूँ?                                             क्या आप टिकट बुक करना चाहते हैं.",
        


        "yes":"Price of one ticket is 20Rs                 how many do you want to book...   1,2,3..?",
        "YES":"Price of one ticket is 20Rs                 how many do you want to book...   1,2,3..?",
        "Yes":"Price of one ticket is 20Rs                 how many do you want to book...   1,2,3..?",

        "hindi":"आप कैसे हैं?",
        "HINDI":"आप कैसे हैं?",
        "Hindi":"आप कैसे हैं?",

        "english":"How are you?",
        "ENGLISH":"How are you?",
        "English":"How are you?",

        "bengali":"আপনি কেমন আছেন?",
        "BENGALI":"আপনি কেমন আছেন?",
        "Bengali":"আপনি কেমন আছেন?",



        "मैं ठीक हूँ":"हमेशा अच्छे रहो👍",

        "fine":"Greate👍",
        "fine":"Greate👍",
        "fine":"Greate👍",

        "i am fine":"Grate👍",
        "I AM FINE":"Grate👍",
        "I am fine":"Grate👍",



        "price of ticket":"Price of one ticket is 20Rs                 how many do you want to book...   1,2,3..?",
        "PRICE OF TICKET":"Price of one ticket is 20Rs                 how many do you want to book...   1,2,3..?",
        "Price of ticket":"Price of one ticket is 20Rs                 how many do you want to book...   1,2,3..?",

        "टिकट की कीमत":"एक टिकट की कीमत 20 रुपये है                  आप कितने टिकट बुक करना चाहते हैं... 1,2,3..?",



        "टिकट":"एक टिकट की कीमत 20 रुपये है                  आप कितने टिकट बुक करना चाहते हैं... 1,2,3..?",

        "ticket":"Price of one ticket is 20Rs                 how many do you want to book...   1,2,3..?",
        "TICKET":"Price of one ticket is 20Rs                 how many do you want to book...   1,2,3..?",
        "Ticket":"Price of one ticket is 20Rs                 how many do you want to book...   1,2,3..?",



        "टिकट नियुक्त करें":"एक टिकट की कीमत 20 रुपये है                  आप कितने टिकट बुक करना चाहते हैं... 1,2,3..?",

        "book ticket":"Price of one ticket is 20Rs                 how many do you want to book...   1,2,3..?",
        "BOOK TICKET":"Price of one ticket is 20Rs                 how many do you want to book...   1,2,3..?",
        "Book ticket":"Price of one ticket is 20Rs                 how many do you want to book...   1,2,3..?",
        


        "1 टिकट बुक करें":"आपकी राशि 20RS है.                      जारी रखना ठीक है",
        "2 टिकट बुक करें":"आपकी राशि 40RS है.                      जारी रखना ठीक है",
        "3 टिकट बुक करें":"आपकी राशि 60RS है.                      जारी रखना ठीक है",
        "4 टिकट बुक करें":"आपकी राशि 80RS है.                      जारी रखना ठीक है",
        "5 टिकट बुक करें":"आपकी राशि 100RS है.                      जारी रखना ठीक है",

        "book 1 ticket":"your amount is 20RS                                      OK to process",
        "BOOK 1 TICKET":"your amount is 20RS                                      continue to process",
        "Book 1 ticket":"your amount is 20RS                                      continue to process",
        "book 2 ticket":"your amount is 40RS                                      continue to process",
        "BOOK 2 TICKET":"your amount is 40RS                                      continue to process",
        "Book 2 ticket":"your amount is 40RS                                      continue to process",
        "book 3 ticket":"your amount is 60RS                                      continue to process",
        "BOOK 3 TICKET":"your amount is 60RS                                      continue to process",
        "Book 3 ticket":"your amount is 60RS                                      continue to process",
        "book 4 ticket":"your amount is 80RS                                      continue to process",
        "BOOK 4 TICKET":"your amount is 80RS                                      continue to process",
        "Book 4 ticket":"your amount is 80RS                                      continue to process",
        "book 5 ticket":"your amount is 100RS                                      continue to process",
        "BOOK 5 TICKET":"your amount is 100RS                                      continue to process",
        "Book 5 ticket":"your amount is 100RS                                      continue to process",
        "book 6 ticket":"your amount is 1200RS                                      continue to process",
        "BOOK 6 TICKET":"your amount is 120RS                                      continue to process",
        "Book 6 ticket":"your amount is 120RS                                      continue to process",
        "book 7 ticket":"your amount is 140RS                                      continue to process",
        "BOOK 7 TICKET":"your amount is 140RS                                      continue to process",
        "Book 7 ticket":"your amount is 140RS                                      continue to process",
        "book 8 ticket":"your amount is 160RS                                      continue to process",
        "BOOK 8 TICKET":"your amount is 160RS                                      continue to process",
        "Book 8 ticket":"your amount is 160RS                                      continue to process",
        "book 9 ticket":"your amount is 180RS                                      continue to process",
        "BOOK 9 TICKET":"your amount is 180RS                                      continue to process",
        "Book 9 ticket":"your amount is 180RS                                      continue to process",
        "book 10 ticket":"your amount is 200RS                                      continue to process",
        "BOOK 10 TICKET":"your amount is 200RS                                      continue to process",
        "Book 10 ticket":"your amount is 200RS                                      continue to process",
        


        "1 टिकट":"आपकी राशि 20RS है.                      जारी रखना ठीक है",
        "2 टिकट":"आपकी राशि 40RS है.                      जारी रखना ठीक है",
        "3 टिकट":"आपकी राशि 60RS है.                      जारी रखना ठीक है",
        "4 टिकट":"आपकी राशि 80RS है.                      जारी रखना ठीक है",
        "5 टिकट":"आपकी राशि 100RS है.                      जारी रखना ठीक है",

        "1 ticket":"your amount is 20RS                                      continue to process",
        "1 TICKET":"your amount is 20RS                                      continue to process",
        "1 ticket":"your amount is 20RS                                      continue to process",
        "2 ticket":"your amount is 40RS                                      continue to process",
        "2 TICKET":"your amount is 40RS                                      continue to process",
        "2 ticket":"your amount is 40RS                                      continue to process",
        "3 ticket":"your amount is 60RS                                      continue to process",
        "3 TICKET":"your amount is 60RS                                      continue to process",
        "3 ticket":"your amount is 60RS                                      continue to process",
        "4 ticket":"your amount is 80RS                                      continue to process",
        "4 TICKET":"your amount is 80RS                                      continue to process",
        "4 ticket":"your amount is 80RS                                      continue to process",
        "5 ticket":"your amount is 100RS                                      continue to process",
        "5 TICKET":"your amount is 100RS                                      continue to process",
        "5 ticket":"your amount is 100RS                                      continue to process",
        "6 ticket":"your amount is 1200RS                                      continue to process",
        "6 TICKET":"your amount is 120RS                                      continue to process",
        "6 ticket":"your amount is 120RS                                      continue to process",
        "7 ticket":"your amount is 140RS                                      continue to process",
        "7 TICKET":"your amount is 140RS                                      continue to process",
        "7 ticket":"your amount is 140RS                                      continue to process",
        "8 ticket":"your amount is 160RS                                      continue to process",
        "8 TICKET":"your amount is 160RS                                      continue to process",
        "8 ticket":"your amount is 160RS                                      continue to process",
        "9 ticket":"your amount is 180RS                                      continue to process",
        "9 TICKET":"your amount is 180RS                                      continue to process",
        "9 ticket":"your amount is 180RS                                      continue to process",
        "10 ticket":"your amount is 200RS                                      continue to process",
        "10 TICKET":"your amount is 200RS                                      continue to process",
        "10 ticket":"your amount is 200RS                                      continue to process",



        "1":"your amount is 20RS ",
        "2":"your amount is 40RS ",
        "3":"your amount is 60RS ",
        "4":"your amount is 80RS ",
        "5":"your amount is 100RS ",
        "6":"your amount is 120RS ",
        "7":"your amount is 140RS ",
        "8":"your amount is 160RS ",
        "9":"your amount is 180RS ",
        "10":"your amount is 200RS ",

        "one":"20RS",
        "two":"40RS",
        "three":"60RS",
        "four":"80RS",
        "five":"100RS",



        "हा":"कुछ ही देर में! आपको भुगतान पृष्ठ पर निर्देशित किया जाता है",

        "ok":"shortly! You are directed on payment page",
        "Ok":"shortly! You are directed on payment page",
        "OK":"shortly! You are directed on payment page",














        "What is your name?": "I am your friendly chatbot!",
        "what is your name?": "I am your friendly chatbot!",
        "WHAT IS YOUR NAME?": "I am your friendly chatbot!",
        "WHAT IS YOUR NAME": "I am your friendly chatbot!",

        
        "What is the price of ticket": "Prices of tickets are 20Rs.",
        "what is the price of ticket": "Prices of tickets are 20Rs.",
        "WHAT ARE THE PRICE OF TICKETS": "Prices of tickets are 20Rs.",
        
        "What is the price of tickets for kids?":"Prices for children under the age of 5 is free",
        "what is the price of tickets for kids?":"Prices for children under the age of 10 is free",
        "What is the price of ticket for kid?":"Prices for children under the age of 10 is free",
        "what is the price of ticket for kid?":"Prices for children under the age of 10 is free",
        

        "How can i book tickets?": "You can book tickets online using our portal.",
        "how can i book tickets?": "You can book tickets online using our portal.",
        "How can i book ticket?": "You can book tickets online using our portal.",
        "how can i book ticket?": "You can book tickets online using our portal.",

        "What are the available timings?": "We offer multiple showtimes: 10 AM, 1 PM, 4 PM, and 7 PM.",
        "what are the available timings?": "We offer multiple showtimes: 10 AM, 1 PM, 4 PM, and 7 PM.",


    };

    // Find a response based on the userMessage
    const response = qaPairs[userMessage] || "Sorry, I don't have an answer for that. Please try asking something else.";


    // Simulate a delay before responding
    setTimeout(() => {
        messageElement.textContent = response;
        chatbox.scrollTo(0, chatbox.scrollHeight);
    }, 1000); // 1-second delay for realism
};

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;
    chatInput.value = "";
    chatInput.style.height = `${inputIntHeight}px`;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
    
    setTimeout(() => {
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
}

chatInput.addEventListener("input", () => {
    chatInput.style.height = `${inputIntHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

sendChatBtn.addEventListener("click", handleChat);

chatbotToggler.addEventListener("click", () => {
    document.body.classList.toggle("show-chatbot");
});

chatbotCloseBtn.addEventListener("click", () => {
    document.body.classList.remove("show-chatbot");
});

chatInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        handleChat();
    }
});



 

// --------------------------------------------------------------------------

let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})


















