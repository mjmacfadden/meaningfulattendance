
  

// Define month names
var monthNames = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];
  
  // Get today's date
  var today = new Date();
  var day = today.getDate();
  var monthIndex = today.getMonth();
  var year = today.getFullYear();
  
  // Format the date
  var todaysDate = `${monthNames[monthIndex]} ${day}, ${year}`;
  
  // Display the date in the element with the ID "date"
  document.getElementById("date").textContent = todaysDate;


// Format today's date in month/day format
var formattedDate = `${monthIndex + 1}/${day}`;

// Create the array with dates and strings
var data = [
    ["1/1", "Are you more of a dog person, a cat person, or do you prefer other types of pets?"],
    ["1/2", "How do you like to relax and unwind after a busy and eventful day?"],
    ["1/3", "Are there any sports or athletic activities that you have always wanted to try?"],
    ["1/4", "What is your preferred movie genre or any favorite films that inspire you?"],
    ["1/5", "Would you consider yourself more of an introvert or an extrovert in social situations?"],
    ["1/6", "Which season of the year do you enjoy the most, and why?"],
    ["1/7", "Do you have any creative hobbies or artistic outlets that you find fulfilling?"],
    ["1/8", "What forms of art or artistic expression do you find most intriguing or captivating?"],
    ["1/9", "Are there any books or authors that have had a significant impact on your life?"],
    ["1/10", "If you could live in any city in the world, where would you choose and why?"],
    ["1/11", "What is your favorite type of cuisine or dish to cook and share with loved ones?"],
    ["1/12", "Do you have any favorite animated movies or TV shows that you still enjoy?"],
    ["1/13", "What is one quality or trait in a person that you admire the most?"],
    ["1/14", "If you could possess any superpower, what would it be and how would you use it?"],
    ["1/15", "What is your favorite type of weather or atmospheric condition?"],
    ["1/16", "Do you have any favorite quotes or sayings that resonate with you?"],
    ["1/17", "What is your favorite type of cuisine or dish from a specific culture or region?"],
    ["1/18", "Are there any TV shows or series that you believe have changed the television landscape?"],
    ["1/19", "If you had the opportunity to learn any musical instrument, which one would you choose and why?"],
    ["1/20", "What is your preferred type of exercise or fitness routine to maintain a healthy lifestyle?"],
    ["1/21", "What is your favorite type of cuisine or dish from your own country?"],
    ["1/22", "Do you have any favorite hobbies or interests related to technology or gadgets?"],
    ["1/23", "What is your go-to comfort food or the dish that brings you nostalgia?"],
    ["1/24", "Are there any TV shows or series that you can watch over and over again?"],
    ["1/25", "What is your preferred music genre or any favorite songs that always boost your mood?"],
    ["1/26", "Do you possess any unique or uncommon skills that people often find fascinating?"],
    ["1/27", "If you could travel back in time to any historical event, which one would you choose and why?"],
    ["1/28", "Are you more productive in the early morning, late at night, or during the day?"],
    ["1/29", "Do you have any favorite party games or activities to enjoy with friends?"],
    ["1/30", "What is your favorite type of cuisine or dish from a different culture or country?"],
    ["1/31", "Are you a dog person, a cat person, or do you have a fondness for other animals?"],
    ["2/1", "How do you like to unwind and relax after a busy day or week?"],
    ["2/2", "Are there any sports or athletic activities that you enjoy watching or attending live?"],
    ["2/3", "What is your preferred movie genre or any favorite films that inspire and captivate you?"],
    ["2/4", "Would you describe yourself as more of an introvert or an extrovert?"],
    ["2/5", "Which season of the year brings you the most joy and why?"],
    ["2/6", "Do you have any creative hobbies or artistic passions that you enjoy pursuing?"],
    ["2/7", "What forms of art or artistic expression do you find most intriguing or captivating?"],
    ["2/8", "Are there any books or authors that have left a lasting impact on your life?"],
    ["2/9", "If you could live in any city in the world, where would you choose and why?"],
    ["2/10", "What is your favorite type of cuisine or dish to cook and share with loved ones?"],
    ["2/11", "Do you have any favorite animated movies or TV shows that you still enjoy watching?"],
    ["2/12", "What is one quality or trait in a person that you admire the most?"],
    ["2/13", "If you could possess any superpower, what would it be and how would you use it?"],
    ["2/14", "What is your favorite type of weather or atmospheric condition?"],
    ["2/15", "Do you have any favorite quotes or sayings that resonate with you?"],
    ["2/16", "What is your favorite type of cuisine or dish from a specific culture or region?"],
    ["2/17", "Are there any TV shows or series that you believe have had a significant cultural impact?"],
    ["2/18", "If you had the opportunity to learn any musical instrument, which one would you choose and why?"],
    ["2/19", "What is your preferred type of exercise or fitness routine to stay healthy and active?"],
    ["2/20", "What is your favorite type of cuisine or dish that represents your heritage?"],
    ["2/21", "Do you have any favorite hobbies or interests related to outdoor activities or nature?"],
    ["2/22", "What is your go-to comfort food or the dish that brings you a sense of nostalgia?"],
    ["2/23", "Are there any TV shows or series that you consider hidden gems and recommend to others?"],
    ["2/24", "What is your preferred music genre or any favorite songs that always lift your spirits?"],
    ["2/25", "Do you possess any unique or unusual talents that often surprise people?"],
    ["2/26", "If you could meet any historical figure, who would you choose and why?"],
    ["2/27", "Are you more productive in the early morning, late at night, or during the day?"],
    ["2/28", "Do you have any favorite card games or board games that you enjoy playing with friends?"],
    ["2/29", "If you are born on February 29th, would you tell people you are one quarter your actual age?"],
    ["3/1", "What is your favorite type of cuisine or dish from a different culture or country?"],
    ["3/2", "Are you a dog person, a cat person, or do you have a fondness for other animals?"],
    ["3/3", "How do you like to unwind and relax after a busy day or week?"],
    ["3/4", "Are there any sports or athletic activities that you enjoy watching or participating in?"],
    ["3/5", "What is your preferred movie genre or any favorite films that inspire and captivate you?"],
    ["3/6", "Would you describe yourself as more of an introvert or an extrovert?"],
    ["3/7", "Which season of the year brings you the most joy and why?"],
    ["3/8", "Do you have any creative hobbies or artistic passions that you enjoy pursuing?"],
    ["3/9", "What forms of art or artistic expression do you find most intriguing or captivating?"],
    ["3/10", "Are there any books or authors that have left a lasting impact on your life?"],
    ["3/11", "If you could live in any city in the world, where would you choose and why?"],
    ["3/12", "What is your favorite type of cuisine or dish to cook and share with loved ones?"],
    ["3/13", "Do you have any favorite animated movies or TV shows that you still enjoy watching?"],
    ["3/14", "What is one quality or trait in a person that you admire the most?"],
    ["3/15", "If you could possess any superpower, what would it be and how would you use it?"],
    ["3/16", "What is your favorite type of weather or atmospheric condition?"],
    ["3/17", "Do you have any favorite quotes or sayings that resonate with you?"],
    ["3/18", "What is your favorite type of cuisine or dish from a specific culture or region?"],
    ["3/19", "Are there any TV shows or series that you believe have had a significant cultural impact?"],
    ["3/20", "If you had the opportunity to learn any musical instrument, which one would you choose and why?"],
    ["3/21", "What is your preferred type of exercise or fitness routine to stay healthy and active?"],
    ["3/22", "What is your favorite type of cuisine or dish from a different continent?"],
    ["3/23", "Do you have any favorite hobbies or interests related to gardening or plants?"],
    ["3/24", "What is your go-to comfort food or the dish that reminds you of home?"],
    ["3/25", "Are there any TV shows or series that you consider underrated and worth watching?"],
    ["3/26", "What is your preferred music genre or any favorite songs that hold sentimental value?"],
    ["3/27", "Do you possess any unique talents or skills that you have acquired over the years?"],
    ["3/28", "If you could meet any fictional character, who would it be and why?"],
    ["3/29", "Are you naturally more of a morning person, a night owl, or a midday enthusiast?"],
    ["3/30", "Do you have any favorite word games or trivia games that you enjoy playing?"],
    ["3/31", "What is your favorite type of cuisine or dish to celebrate special occasions?"],
    ["4/1", "Are you more of a dog person, a cat person, or do you prefer other types of pets?"],
    ["4/2", "How do you like to relax and unwind after a busy and eventful day?"],
    ["4/3", "Are there any sports or athletic activities that you have always wanted to try?"],
    ["4/4", "What is your preferred movie genre or any favorite films that inspire you?"],
    ["4/5", "Would you consider yourself more of an introvert or an extrovert in social situations?"],
    ["4/6", "Which season of the year do you enjoy the most, and why?"],
    ["4/7", "Do you have any creative hobbies or artistic outlets that you find fulfilling?"],
    ["4/8", "What forms of art or artistic expression do you find most intriguing or captivating?"],
    ["4/9", "Are there any books or authors that have had a significant impact on your life?"],
    ["4/10", "If you could live in any city in the world, where would you choose and why?"],
    ["4/11", "What is your favorite type of cuisine or dish to cook and share with loved ones?"],
    ["4/12", "Do you have any favorite animated movies or TV shows that you still enjoy?"],
    ["4/13", "What is one quality or trait in a person that you admire the most?"],
    ["4/14", "If you could possess any superpower, what would it be and how would you use it?"],
    ["4/15", "What is your favorite type of weather or atmospheric condition?"],
    ["4/16", "Do you have any favorite quotes or sayings that resonate with you?"],
    ["4/17", "What is your favorite type of cuisine or dish from a specific culture or region?"],
    ["4/18", "Are there any TV shows or series that you believe have changed the television landscape?"],
    ["4/19", "If you had the opportunity to learn any musical instrument, which one would you choose and why?"],
    ["4/20", "What is your preferred type of exercise or fitness routine to maintain a healthy lifestyle?"],
    ["4/21", "What is your favorite type of cuisine or dish that you like to indulge in occasionally?"],
    ["4/22", "Do you have any favorite hobbies or interests related to photography or capturing moments?"],
    ["4/23", "What is your go-to comfort food or the dish that always brings you joy and satisfaction?"],
    ["4/24", "Are there any TV shows or series that you consider binge-worthy and highly addictive?"],
    ["4/25", "What is your preferred music genre or any favorite songs that you find empowering?"],
    ["4/26", "Do you possess any unique talents or abilities that set you apart from others?"],
    ["4/27", "If you could have dinner with any celebrity, who would you choose and why?"],
    ["4/28", "Are you more productive in the early morning, late at night, or during the day?"],
    ["4/29", "Do you have any favorite puzzle games or brain teasers that you enjoy solving?"],
    ["4/30", "What is your favorite type of cuisine or dish that reminds you of special childhood memories?"],
    ["5/1", "Are you a dog person, a cat person, or do you have a fondness for other animals?"],
    ["5/2", "How do you like to unwind and relax after a busy day or week?"],
    ["5/3", "Are there any sports or athletic activities that you enjoy watching or participating in?"],
    ["5/4", "What is your preferred movie genre or any favorite films that inspire and captivate you?"],
    ["5/5", "Would you describe yourself as more of an introvert or an extrovert?"],
    ["5/6", "Which season of the year brings you the most joy and why?"],
    ["5/7", "Do you have any creative hobbies or artistic passions that you enjoy pursuing?"],
    ["5/8", "What forms of art or artistic expression do you find most intriguing or captivating?"],
    ["5/9", "Are there any books or authors that have left a lasting impact on your life?"],
    ["5/10", "If you could live in any city in the world, where would you choose and why?"],
    ["5/11", "What is your favorite type of cuisine or dish to cook and share with loved ones?"],
    ["5/12", "Do you have any favorite animated movies or TV shows that you still enjoy watching?"],
    ["5/13", "What is one quality or trait in a person that you admire the most?"],
    ["5/14", "If you could possess any superpower, what would it be and how would you use it?"],
    ["5/15", "What is your favorite type of weather or atmospheric condition?"],
    ["5/16", "Do you have any favorite quotes or sayings that resonate with you?"],
    ["5/17", "What is your favorite type of cuisine or dish from a specific culture or region?"],
    ["5/18", "Are there any TV shows or series that you believe have had a significant cultural impact?"],
    ["5/19", "If you had the opportunity to learn any musical instrument, which one would you choose and why?"],
    ["5/20", "What is your preferred type of exercise or fitness routine to stay healthy and active?"],
    ["5/21", "Do you have any favorite board games or card games that you enjoy playing with friends or family?"],
    ["5/22", "What is your favorite type of outdoor activity or sport that you like to participate in?"],
    ["5/23", "Is there a particular skill or hobby that you have been wanting to learn or develop?"],
    ["5/24", "What is your favorite type of dessert or sweet treat that you can't resist?"],
    ["5/25", "Are there any cultural traditions or customs that you hold dear to your heart?"],
    ["5/26", "What is your favorite quote or motto?"],
    ["5/27", "What is the funniest nickname you have every had?"],
    ["5/28", "What is your favorite subject or area of study?"],
    ["5/29", "Do you have any hobbies or extracurricular activities you enjoy?"],
    ["5/30", "What is your favorite book or movie?"],
    ["5/31", "Have you traveled anywhere interesting recently?"],
    ["6/1", "Do you have any pets? If so, what are their names?"],
    ["6/2", "What is your favorite type of music or favorite band/artist?"],
    ["6/3", "Are you involved in any sports or athletic activities?"],
    ["6/4", "What is your favorite food or type of cuisine?"],
    ["6/5", "Do you have any siblings? If so, how many and what are their names?"],
    ["6/6", "What is your dream career or profession?"],
    ["6/7", "What is your favorite season or time of year?"],
    ["6/8", "Do you speak any other languages besides English?"],
    ["6/9", "What is your favorite way to relax or unwind after a long day?"],
    ["6/10", "What is your favorite historical event or period?"],
    ["6/11", "Do you have a favorite quote or saying that inspires you?"],
    ["6/12", "Are you part of any clubs or organizations?"],
    ["6/13", "What is one interesting fact about yourself that others might not know?"],
    ["6/14", "What is your favorite way to spend a weekend?"],
    ["6/15", "What is your favorite type of outdoor activity?"],
    ["6/16", "Do you have any favorite board games or video games?"],
    ["6/17", "What is your go-to karaoke song?"],
    ["6/18", "Do you have any phobias or fears?"],
    ["6/19", "What is your favorite type of art or artistic expression?"],
    ["6/20", "Are you a morning person or a night owl?"],
    ["6/21", "Do you prefer tea or coffee?"],
    ["6/22", "What is the most adventurous thing you have ever done?"],
    ["6/23", "What is your favorite holiday and why?"],
    ["6/24", "If you could have any superpower, what would it be?"],
    ["6/25", "What is your favorite type of cuisine or dish?"],
    ["6/26", "Do you have any special talents or abilities?"],
    ["6/27", "What is your favorite place you have ever visited?"],
    ["6/28", "If you could travel to any time period, which one would you choose?"],
    ["6/29", "What is your favorite type of exercise or physical activity?"],
    ["6/30", "Do you have any favorite quotes that inspire you?"],
    ["7/1", "What is something you have always wanted to learn or try?"],
    ["7/2", "What is your favorite way to de-stress or relax?"],
    ["7/3", "Do you have any favorite childhood memories?"],
    ["7/4", "How do you usually celebrate your birthday?"],
    ["7/5", "What is your favorite type of dessert?"],
    ["7/6", "Do you have any favorite quotes or mantras?"],
    ["7/7", "What is your favorite outdoor activity during the summer?"],
    ["7/8", "Do you have any favorite TV shows or series?"],
    ["7/9", "What is your dream travel destination?"],
    ["7/10", "Do you have any favorite sports teams?"],
    ["7/11", "What is your favorite way to stay active and fit?"],
    ["7/12", "Do you have any favorite podcasts or audio books?"],
    ["7/13", "What is the most memorable concert or live performance you have attended?"],
    ["7/14", "If you could have dinner with any historical figure, who would it be?"],
    ["7/15", "What is your favorite type of technology or gadget?"],
    ["7/16", "Do you have any favorite quotes from movies?"],
    ["7/17", "What is your favorite type of weather and why?"],
    ["7/18", "Do you have any favorite comedians or funny movies?"],
    ["7/19", "What is your favorite type of board game or card game?"],
    ["7/20", "Do you have any favorite quotes from books?"],
    ["7/21", "What is your favorite way to give back or help others?"],
    ["7/22", "Do you have any favorite podcasts or YouTube channels?"],
    ["7/23", "What is your favorite way to stay organized?"],
    ["7/24", "Do you have any favorite quotes from inspirational figures?"],
    ["7/25", "What is your favorite type of outdoor activity?"],
    ["7/26", "Do you have any favorite hobbies or interests?"],
    ["7/27", "What is your go-to comfort food?"],
    ["7/28", "Do you have any favorite TV shows or series?"],
    ["7/29", "What is your favorite type of music or favorite artist/band?"],
    ["7/30", "Do you have any unique or interesting talents?"],
    ["7/31", "What is your favorite type of vacation destination?"],
    ["8/1", "Are you a morning person or a night owl?"],
    ["8/2", "Do you have any favorite board games or card games?"],
    ["8/3", "What is your favorite type of cuisine or food?"],
    ["8/4", "Are you a dog person or a cat person? Or neither?"],
    ["8/5", "What is your favorite way to relax and unwind?"],
    ["8/6", "Do you have any favorite sports or athletic activities?"],
    ["8/7", "What is your favorite type of movie genre?"],
    ["8/8", "Are you more of an introvert or an extrovert?"],
    ["8/9", "What is your favorite season of the year and why?"],
    ["8/10", "Do you have any favorite hobbies or creative outlets?"],
    ["8/11", "What is your favorite type of art or artistic expression?"],
    ["8/12", "Do you have any favorite books or authors?"],
    ["8/13", "What is your dream travel destination and why?"],
    ["8/14", "What is your favorite type of outdoor adventure or adrenaline-inducing activity?"],
    ["8/15", "Do you have any favorite hobbies or interests that you pursue in your free time?"],
    ["8/16", "What is your all-time favorite dish or meal?"],
    ["8/17", "Do you have any favorite TV shows or series that you can binge-watch for hours?"],
    ["8/18", "What is your preferred genre of music or favorite musician/band?"],
    ["8/19", "Are there any unique or interesting skills that you possess?"],
    ["8/20", "If you could travel anywhere in the world, where would you go and why?"],
    ["8/21", "Are you more productive during the morning, afternoon, or evening?"],
    ["8/22", "Do you enjoy playing any specific board games or card games?"],
    ["8/23", "What is your favorite type of cuisine or culinary experience?"],
    ["8/24", "Are you a dog lover, a cat person, or do you have an affinity for another type of pet?"],
    ["8/25", "How do you like to unwind and relax after a long day?"],
    ["8/26", "Are there any sports or physical activities that you enjoy participating in?"],
    ["8/27", "What is your preferred movie genre or any favorite films?"],
    ["8/28", "Would you consider yourself more introverted or extroverted in nature?"],
    ["8/29", "Which season of the year do you enjoy the most, and why?"],
    ["8/30", "Do you have any creative hobbies or artistic pursuits that you engage in?"],
    ["8/31", "What forms of art or artistic expression do you appreciate the most?"],
    ["9/1", "Are there any books or authors that you particularly admire or enjoy reading?"],
    ["9/2", "If you could visit any destination in the world, where would it be and why?"],
    ["9/3", "What is your favorite type of outdoor activity to stay active and fit?"],
    ["9/4", "Do you have any favorite hobbies or interests related to arts and crafts?"],
    ["9/5", "What is your go-to comfort food or guilty pleasure snack?"],
    ["9/6", "Are there any TV shows or series that you enjoy watching repeatedly?"],
    ["9/7", "What is your preferred genre of music or any favorite songs?"],
    ["9/8", "Do you possess any unique or interesting talents that others may not know about?"],
    ["9/9", "If you could travel anywhere in the world, where would you go and why?"],
    ["9/10", "Are you more productive in the mornings, afternoons, or evenings?"],
    ["9/11", "Do you have any favorite board games or card games that you enjoy playing with friends or family?"],
    ["9/12", "What is your favorite type of cuisine or dish to cook at home?"],
    ["9/13", "Are you a dog person, a cat person, or do you prefer other types of pets?"],
    ["9/14", "How do you like to unwind and relax after a busy day or week?"],
    ["9/15", "Are there any sports or physical activities that you enjoy watching or following?"],
    ["9/16", "What is your preferred movie genre or any favorite movies that you can watch repeatedly?"],
    ["9/17", "Would you describe yourself as more introverted or extroverted in nature?"],
    ["9/18", "Which season of the year do you look forward to the most, and why?"],
    ["9/19", "Do you have any creative hobbies or artistic pursuits that you enjoy engaging in?"],
    ["9/20", "What forms of art or artistic expression do you find most captivating or inspiring?"],
    ["9/21", "Are there any books or authors that have had a significant impact on you?"],
    ["9/22", "If you could live anywhere in the world, where would you choose and why?"],
    ["9/23", "What is your favorite type of exercise or fitness activity to stay healthy?"],
    ["9/24", "Do you have any favorite hobbies or interests related to technology or gadgets?"],
    ["9/25", "What is your favorite dessert or sweet treat?"],
    ["9/26", "Are there any TV shows or series that you would highly recommend to others?"],
    ["9/27", "What is your preferred music genre or any favorite albums you can't get enough of?"],
    ["9/28", "Do you possess any unique or uncommon skills that others might find interesting?"],
    ["9/29", "If you could visit any historical landmark or famous monument, where would you go and why?"],
    ["9/30", "Are you more of a morning person, afternoon person, or night person?"],
    ["10/1", "Do you have any favorite card games or board games that you enjoy playing with friends or family?"],
    ["10/2", "What is your favorite cuisine or dish to indulge in when dining out?"],
    ["10/3", "Are you more of a dog person, a cat person, or do you have a fondness for other animals?"],
    ["10/4", "How do you like to de-stress and relax after a long and tiring day?"],
    ["10/5", "Are there any sports or athletic events that you enjoy attending or watching live?"],
    ["10/6", "What is your preferred movie genre or any all-time favorite movies that you can watch repeatedly?"],
    ["10/7", "Would you describe yourself as an introvert, an extrovert, or somewhere in between?"],
    ["10/8", "Which season of the year brings you the most joy and why?"],
    ["10/9", "Do you have any creative hobbies or artistic pursuits that allow you to express yourself?"],
    ["10/10", "What forms of art or artistic expression inspire you or have a profound impact on you?"],
    ["10/11", "Are there any books or authors that have significantly influenced your perspective on life?"],
    ["10/12", "What's your go to vending machine purchase?"],
    ["10/13", "What is your favorite type of cuisine to cook or experiment with in the kitchen?"],
    ["10/14", "Do you have any favorite movies from your childhood that still hold a special place in your heart?"],
    ["10/15", "What is one quality or trait that you appreciate the most in others?"],
    ["10/16", "If you could have any superpower, what would it be and how would you use it?"],
    ["10/17", "What is your favorite type of weather or atmospheric condition?"],
    ["10/18", "Do you have any favorite quotes or sayings that resonate with you?"],
    ["10/19", "What is your favorite type of cuisine or dish from a specific culture or country?"],
    ["10/20", "If you could have a non-domesticated pet, what would it be?", "-Mrs. M."],
    ["10/21", "If you could learn any musical instrument, which one would you choose and why?"],
    ["10/22", "How do you like to unwind and recharge after a long and hectic day?"],
    ["10/23", "What is your favorite thing to do on a rainy day?", "-Mrs. M."],
    ["10/24", "What is one of your favorite stores?", "-Mrs. M."],
    ["10/25", "What is your favorite candy?", "-Mrs. M."],
    ["10/26", "What is your favorite sports team?", "-Andrew"],
    ["10/27", "If you could name a planet, what would you name it?", "-Maxwell"],
    ["10/28", "Are there any TV shows or series that you consider underrated and worth watching?"],
    ["10/29", "What is your preferred music genre or any favorite songs that hold sentimental value?"],
    ["10/30", "Are you more productive in the mornings, afternoons, or evenings?"],
    ["10/31", "If you could be any type of food, what would you be?","-Layth"],
    ["11/1", "What is your favorite fruit or vegetable?", "-Ben R."],
    ["11/2", "What is one item that you think won’t exist in the future?", "-Katherine"],
    ["11/3", "What is your favorite type of sweet or pastry?"],
    ["11/4", "Do you have any favorite movies from your childhood that still hold a special place in your heart?"],
    ["11/5", "What is one quality or trait that you appreciate the most in others?"],
    ["11/6", "If you could be any animal, what animal would you be?", "-Cecilia"],
    ["11/7", "Who is your favorite rapper?", "-Jackson"],
    ["11/8", "Do you have a lucky number? If so, what is it?", "-Mrs. M."],
    ["11/9", "What is your main reason for coming to school?", "-Elinor"],
    ["11/10", "If you could travel to any fictional world, which one would you choose and why?"],
    ["11/11", "If you could live anywhere in the world, where would you choose and why?"],
    ["11/12", "What is your favorite type of cuisine or dish to cook at home?"],
    ["11/13", "What noodle best represents your personality?", "-Amanda"],
    ["11/14", "What is the #1 thing on your wishlist?", "-Amanda"],
    ["11/15", "If you could have any superpower, what would it be and why?"],
    ["11/16", "If you could be 1 in tall or 10 feet tall, what would you be?", "-Adri"],
    ["11/17", "If you were a shoe, what shoe would you be?", "-Nikolai"],
    ["11/18", "What is your favorite type of cuisine or dish from a specific culture or country?"],
    ["11/19", "Are there any TV shows or series that you believe everyone should watch at least once?"],
    ["11/20", "If you could learn to play any musical instrument, which one would you choose and why?"],
    ["11/21", "What is your favorite type of workout or fitness routine to stay active and healthy?"],
    ["11/22", "What is your favorite type of music concert or live performance?"],
    ["11/23", "Do you have any favorite hobbies or interests related to photography or visual arts?"],
    ["11/24", "What is your go-to comfort food or ultimate guilty pleasure snack?"],
    ["11/25", "Are there any TV shows or series that you consider binge-worthy and highly recommend?"],
    ["11/26", "What is your preferred music genre or any favorite songs that always get you in the mood?"],
    ["11/27", "Would you rather ride in a car or airplane to get somewhere? Why?", "-Tess"],
    ["11/28", "If you could have a dinner with any historical figure, who would you choose and why?"],
    ["11/29", "What is your favorite book genre?", "-Tess"],
    ["11/30", "What item would you bring back from the past?", "-Elinor"],
    ["12/1", "What is your go-to sport to watch?"],
    ["12/2", "Are you more drawn to dogs, cats, or do you prefer the company of other animals?"],
    ["12/3", "How do you like to unwind and recharge after a long and hectic day?"],
    ["12/4", "If you could only use one form of social media for the rest of your life, what would it be?", "-Hudson I."],
    ["12/5", "What is the best pet, in your opinion?", "-Devyan"],
    ["12/6", "Would you rather be a famous actor or famous athlete?", "-Nikolai"],
    ["12/7", "What is your favorite coffee shop (Starbucks, Dunkin Donuts, etc.)?", "-Nora"],
    ["12/8", "What type of cookie most represents your personality?", "-Jonah"],
    ["12/9", "What forms of art or artistic expression do you find particularly captivating or inspiring?"],
    ["12/10", "Are there any books or authors that have profoundly influenced your perspective on life?"],
    ["12/11", "If you had 24 hours to live and could choose anything to do, what would it be?", "-Jonah"],
    ["12/12", "Are there any TV shows or series that you believe have made a significant impact on society?"],
    ["12/13", "What is your dream car?", "-Alex"],
    ["12/14", "What is your dream job?", "-Grant"],
    ["12/15", "If you could be a celebrity for the day, who would it be? Why?", "-Simone"],
    ["12/16", "What is your favorite type of weather or atmospheric condition?"],
    ["12/17", "Do you have any favorite quotes or sayings that motivate or inspire you?"],
    ["12/18", "Would you rather: sit in a pit of non-venomous snakes for 2 hours OR sit in a pit of house spiders for 3 hours?", "-Hazel"],
    ["12/19", "If you could only eat one food for the rest of your life, what would it be?", "-Evie"],
    ["12/20", "If you had the opportunity to learn any musical instrument, which one would you choose and why?"],
    ["12/21", "What is your preferred type of workout or fitness activity to stay in shape and feel energized?"],
    ["12/22", "What is your favorite type of cuisine or dish from a different continent?"],
    ["12/23", "Do you have any favorite hobbies or interests related to gardening or plants?"],
    ["12/24", "What is your go-to comfort food or the dish that reminds you of home?"],
    ["12/25", "Are there any TV shows or series that you consider underrated and worth watching?"],
    ["12/26", "What is your preferred music genre or any favorite songs that hold sentimental value?"],
    ["12/27", "Do you possess any unique talents or skills that you have acquired over the years?"],
    ["12/28", "If you could meet any fictional character, who would it be and why?"],
    ["12/29", "Are you naturally more of a morning person, a night owl, or a midday enthusiast?"],
    ["12/30", "Do you have any favorite word games or trivia games that you enjoy playing?"],
    ["12/31", "What is your favorite type of cuisine or dish to celebrate special occasions?"],

];

// Find the matching string
var matchingString = "No matching string found.";
var creditTo = "foo";

for (var i = 0; i < data.length; i++) {
  var [date, string, credit] = data[i];

  if (date === formattedDate) {
    matchingString = string;
    creditTo = credit;
    break;
  }
  console.log(string);
  console.log(credit);
}

// Display the matching string in the element with the ID "question"
document.getElementById("question").textContent = matchingString;
document.getElementById("element-id").textContent = creditTo;


//TRY ANOTHER
function tryAnother() {
    // Randomly select a value from the data array
    var randomData = data[Math.floor(Math.random() * data.length)];
  
    // Get the random date and question
    var [date, question, credit] = randomData;
  
    // Pad the month and day with preceding zeros if necessary
    var [month, day] = date.split('/');
    var formattedMonth = month.padStart(2, '0');
    var formattedDay = day.padStart(2, '0');
    var randomDate = formattedMonth + formattedDay;
    
  
    // Display the random question in the element with the ID "question"
    document.getElementById("question").textContent = question;
    document.getElementById("element-id").textContent = credit;
  
    // Update the URL with the date parameter
    var urlParams = new URLSearchParams(window.location.search);
    urlParams.set("date", randomDate);
    
    // Replace the current URL with the updated URL containing the date parameter
    var newUrl = window.location.pathname + "?" + urlParams.toString();
    window.history.replaceState(null, null, newUrl);
  }

  function displayQuestionFromURL() {
    // Get the date parameter from the URL
    var urlParams = new URLSearchParams(window.location.search);
    var dateParam = urlParams.get("date");
  
    // Split the date parameter into month and day
    var month = dateParam.slice(0, 2);
    var day = dateParam.slice(2);
  
    // Remove leading zeros from the month and day if present
    if (month.startsWith("0")) {
      month = month.slice(1);
    }
    if (day.startsWith("0")) {
      day = day.slice(1);
    }
  
    // Format the date parameter to match the array format (m/d)
    var formattedDateParam = `${month}/${day}`;
  
    // Find the matching question
    var matchingQuestion = "No matching question found.";
    var otherCredit = "Foo"
    for (var i = 0; i < data.length; i++) {
      var [date, question, credit] = data[i];
  
      if (date === formattedDateParam) {
        matchingQuestion = question;
        otherCredit = credit;
        break;
      }
    }
  
    // Display the matching question in the element with the ID "question"
    document.getElementById("question").textContent = matchingQuestion;
    document.getElementById("element-id").textContent = otherCredit;
  }
  
  
  
  window.onload = function() {
    // Other code...
  
    displayQuestionFromURL();
  };
  