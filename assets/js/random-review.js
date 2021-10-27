var reviews = [
    "Thank you Anne for fitting me in yesterday when you realised I was desperate to get the house cleaned before the blinds and curtains were fitted. Marie and Michaela did a great job, leaving it sparkling clean. I will certainly recommend you to anyone who needs a cleaner. That you are so approachable, helpful and friendly is a bonus. - <strong>Rosemary OBoyle</strong>",
    "Great job on all the awkward hate to do Jobs! Came home from my holidays and my house was sparkling, highly recommended!! - <strong>Lynne Gardiner</strong>",
    "Domestic Angels are angels to me, just left lovely Kelly cleaning my house in preparation for mums arrival, while I chill at hairdressers, thank you to Anne & her team, can\'t recommend them enough - <strong>Julie Magee</strong>",
    "Anne is a gem, such a professional and thorough service, lovely to bring family to stay up North after Anne has worked her magic ⭐️ can’t recommend highly enough, trustworthy and so friendly and personable, five stars just isn’t enough! - <strong>Debbie McPherson</strong>",
    "Great job, house fresh n clean😍 I would highly recommended Anne she's reliable trustworthy, friendly and takes the burden. 😍😍 - <strong>Sally Mc Ardle</strong>",
    "Thank you so much for the fabulous job Domestic Angels do cleaning my holiday rental business.  The house is spotless after each changeover and their eagle eyes spot any missing/ damaged items, which are promptly reported. I can’t recommend this team of girls enough,  they truly are a team of angels - <strong>Angela McCabe</strong>"
]

function shuffle(reviews) {
    reviews.sort(() => Math.random() - 0.5);
}

function randomJS() {
    shuffle(reviews);
    document.getElementById("review-1").innerHTML = reviews[0];
    document.getElementById("review-2").innerHTML = reviews[1];
    document.getElementById("review-3").innerHTML = reviews[2];
}