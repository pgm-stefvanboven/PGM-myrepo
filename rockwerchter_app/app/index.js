/*
 * Opdracht 1: Rock Werchter
 * ===================================================================
 * Cursus: Programming 1: Essentials
 * Week: 5
 * gemaakt door: Stef Van Boven
 * Datum: 19/10/2022
 */

/*
Maak een Node.js applicatie waarin de lineup wordt getoond van Rock Werchter 2022. De lineup bestaat uit een lijst van concerten.

Een concert bestaat uit:

id
band (object)
name
synopsis
socials (object)
website
facebook
twitter
instagram
picture (object)
small
media (array van objecten)
link
type
place (object)
name
from
to
isHeadliner
reviews  (array van objecten)
rating
comment
reviewedAt
comments (array van objecten)
nickName
message
comments (array van objecten)
...

Tips
Gebruik bij voorkeur een IIFE om de applicatie te omsluiten
Gebruik object literal voor de data, bv.: const lineup= [{},...]; of een constructor function bv: function Lineup (title) {...}
Definieer de functies
showLineupInConsole
getStringForLineup
getStringForConcert
getStringForHeadliner
getStringForDate
getStringForSocials
getStringForMedia
getStringForReviews
getStringForReview
getStringForRating
getStringForComments
...
Datums + tijd worden uitgedrukt met een number, bv. const createdAt = 1602654613115;
Converteer de Epoch time naar een date object m.b.v. de Date klasse
Gebruik de map functie van een array om de elementen uit een array te transformeren
Gebruik een template literal om een string op te bouwen
Gebruik slechts 1 console.log()
*/
const lineup = [
    {
        id: '4b1839f2-664b-46ae-8011-bf2079e139e0',
        band: {
            name: 'Pearl Jam',
            synopsis: 'Pearl Jam stelt zijn volledige zomertournee 2021 uit naar de zomer van 2022. Het hele tourschema is ineens ook bekendgemaakt. En zo kent Rock Werchter 2022 zijn eerste naam. Op donderdag 30 juni 2022 is Pearl Jam de headliner op de openingsdag van het festival.',
            socials: {
                website: 'https://pearljam.com/',
                facebook: 'https://www.facebook.com/pearljam',
                twitter: 'https://www.twitter.com/pearljam',
                instagram: 'https://www.instagram.com/pearlja',
            },
            picture: {
                small: 'https://assets.rockwerchter.be/files/cache/medium/files/14686-pearl-jam-032020-6c9a9964-flat-lowres-5f1a952633f63.jpg'
            },
            media: [
                {
                    link: 'https://youtu.be/qM0zINtulhM',
                    type: 'youtube',
                },
                {
                    link: 'https://www.youtube.com/watch?v=qM0zINtulhM',
                    type: 'youtube',
                },
                {
                    link: 'https://upload.wikimedia.org/wikipedia/commons/6/69/PearlJam-Amsterdam-2012_%28cropped%29.jpg',
                    type: 'image',
                },
            ],
        },
        place: {
            name: 'Main Stage',
        },
        date: {
        from: 1656622800000,
        to: 1656627300000,
        isHeadliner: true
        },
        reviews: [
            {
                rating: 9,
                comment: 'First of all, wow! The show immediately grabs you with its first couple of scenes, letting you know that this show is going to have a more adult tone. Seeing the workings of everyday people in the galaxy, the perspective of an imperial loyalist, and a thief making his way through the galaxy is so thrilling and exciting. The big and little details you get out of all the varying cultures on different planets allows you to completely melt into and engross yourself in the Star Wars galaxy, which is what many of us love so much.',
                reviewedAt: 1666257618541,
            },
            {
                rating: 8,
                comment: 'Andor has proven to be my favorite of the Star Wars Disney+ series, because it simply provides the basics of storytelling. Characters have motivation and personality, the dialogue is smart and snappy, and the stakes feel personal and real. The production team has also done a wonderful job creating a world that looks and sounds blue collar - no Jedi or Sith, just billions of working persons trying to make a living and simply get by. All the flash of Star Wars - the lightsaber fights, space battles and blaster fights, come second to simply telling a decent story. And for that alone, I think Andor is a step in the right direction.',
                reviewedAt: 1666259750124,
            },
            {
                rating: 8,
                comment: 'I Hope we could see more like this in the future... Disney have some problems with storylines from old characters but the news stories like mandalorian they nailed it... Please make this tone for the rest of the franchise. Star Wars should be a grown-up thing like most of the fans that grow up with. Stop wasting our time with current political agenda and give us timeless stories we can remember like the first movies from George Lucas. Thanks you Disney for let this happening',
                reviewedAt: 1666259864039,
            },
        ],
        comments: [
            {
                nickName: 'JaPPa03',
                message: 'In feite zijn deze camera’s een soort update die je doorgaans na interne feedback zou doorvoeren voordat je een product op de markt brengt. Vooral de dual card slot is iets wat ze verkeerd hebben ingeschat terwijl het geen nieuwe kritiek is op camera’s.',
                comments: [
                    {
                        nickName: 'Inoble',
                        message: 'Precies dat idee heb ik ook, een gevalletje D600, 800 > 610, 810. An sich natuurlijk een prima camera en feitelijk (aannemend) beter dan de voorgangers maar een upgrade niet waard wanneer je met Nikon schiet en graag bij Nikon wilt blijven.',
                    },
                ],
            },
        ],
    },
    {
        lineup: [
            {
                id: '3c8ed215-6a29-4017-a0f0-f9ed699f107d',
                band: {
                    name: 'Altın Gün',
                    synopsis: 'Jasper Verhulst koopt zich tijdens een Turkse toernee met de Nederlandse artiest Jacco Gardner arm in de tweedehands platenzaken in Istanbul. Hij zoekt en vindt er Turkse psychedelische folk uit de jaren 70. Klanken die uitgestorven zijn. Terug thuis wil Verhulst dat erfgoed nieuw leven inblazen. Hij zet een band op met twee zangers-muzikanten met Turkse roots en vier Nederlandse begeleiders. De naam is Altın Gün, Turks voor ‘gouden dag’. In november 2019 wordt hun tweede album ‘Gece’ genomineerd voor de Grammy Awards. Het levert uitnodigingen op voor grote festivals als Coachella en Fuji Rock. ‘Yol’ (2021) moest opgenomen worden in een idyllisch huis in Malibu. Het wordt helaas Amsterdam. De verplichte afzondering van de groepsleden laat zich horen in meer synthesizers en drummachines. Wat voor extra dansbaarheid zorgt.',
                    socials: {
                        website: 'https://pearljam.com/',
                        facebook: 'https://www.facebook.com/pearljam',
                        twitter: 'https://www.twitter.com/altingunband',
                        instagram: 'https://www.instagram.com/altingunban',
                    },
                    picture: {
                        small: 'https://assets.rockwerchter.be/files/cache/medium/files/14686-pearl-jam-032020-6c9a9964-flat-lowres-5f1a952633f63.jpg'
                    },
                    media: [
                        {
                            link: 'https://youtu.be/QhDfOYn0118',
                            type: 'youtube',
                        },
                        {
                            link: 'https://festileaks.com/wp-content/uploads/2018/08/Alting-Gun-foto.jpg',
                            type: 'image',
                        },
                    ],
                },
                place: {
                    name: 'KluB C',
                },
                DayOfStart: 1593521400000,
                DayOfEnd: 1593525000000,
                isHeadliner: true,
                reviews: [
                    {
                        rating: 9,
                        comment: 'I finally watched The Mandalorian after putting it off for so long and I absolutely loved it! I don t consider myself to be a huge Star Wars superfan like some of these other fans out there but I am a regular fan that really enjoys watching the movies.I didn t even mind the latest trilogy, Rogue One and Solo more than most but The Mandalorian is without a doubt the best thing Star Wars related since the original trilogy.',
                        reviewedAt: 1666287731171,
                    },
                    {
                        rating: 7,
                        comment: 'I ve been a fan of Star Wars since I was a child in the 1980s. As such, I was very disappointed with Disney s latest trilogy. Thankfully, shows like the Mandalorian manage to steer well clear of the atrociousness that those three films are.',
                        reviewedAt: 1666287846544,
                    },
                    {
                        rating: 7,
                        comment: 'Another good spin-off series in an everlasting run of them it seems now. I ve always realized that the Star Wars franchise is puffed up and placed with "baby bumpers" to be extra kid friendly. But a prevailing criticism I have with the ever continuous series of comic book movies and series and the Star Wars franchise: If you re going to have such adult themes like battle, war and killing(sometimes with decapitation?!), show some blood every once in a while?? Any color blood. My god, I just don t understand why it isn t acceptable for these creators to show this dude killing multiples of people as a bounty hunter, then never show any of the blood that accompanies killing someone.',
                        reviewedAt: 1666287929980,
                    },
                ],
                comments: [
                    {
                        nickName: 'Joris748',
                        message: 'Nice, goede iteratie van de Z6 en Z7. Veel van de kritiekpunten zijn aangepakt.',
                        comments: [
                            {
                                nickName: 'JaPPa03',
                                message: 'Als de APS-C crop voor 4K/60 op de Z6 geen probleem voor je is, is het zeker een mooie upgrade.',
                                comments: [
                                    {
                                        nickName: 'Inoble',
                                        message: 'Persoonlijk vind ik het toch een gemiste kans voor filmmakers. Nu zal die markt niet voornamelijk bij Nikon liggen maar ze zorgen er naar mijn idee toch voor dat ze zichzelf buiten spel zetten door de wensen te honoreren maar een cropfactor in te brengen.',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

function getStringForLineup(lineup) {
  return lineup.map((lineup, index) => {
    return `
    for (let prop in lineup) {
      tmpStr += ${prop}:\t${lineup[prop]};  
    }
    `
  }).join(''); 
}
// console.log(lineup[0])


function getStringForConcert(concert) {
    return concert.map((concert, index) => {
        return `concert 1: ${index}: ${lineup[0].band.name} \n`
      }).join('');
}
console.log(lineup[0].band.name)
// console.log(lineup[0].band.synopsis)


function getStringForHeadliner(headliner) {
    return headliner.map((headliner, index) => {
      return `
      for (let prop in headliner) {
        tmpStr += ${prop}:\t${headliner[prop]};
    }
    `

    }).join('');
}
// console.log(lineup[0].isHeadliner)


function getStringForDate(date) {
    return date.map((date, index) => {
        return `
        for (let prop in date) {
          tmpStr += ${from}:\t${date[from]};
          tmpStr += ${to}:\t${date[to]};
        }
        `
    }).join('');     
}
// console.log(lineup[0].date)

function getStringForSocials(socials) {
    socials = {
        website: "https://pearljam.com/",
        facebook: "https://www.facebook.com/pearljam",
        twitter: "https://www.twitter.com/pearljam",
        instagram: "https://www.instagram.com/pearlja",
    };

    for (let prop in socials) {
         tmpStr += `${prop}:\t${socials[prop]}`;
         console.log(`'${prop}' '${socials[prop]}'.`);
    }
}




function getStringForMedia(media) {
    return media.map((medium, index) => {
      return `Medium ${index}: ${medium.link} \n`
    }).join('');

}
// console.log(lineup[0].band.media)
