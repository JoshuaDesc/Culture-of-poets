// Simple JavaScript for the minimal website
document.addEventListener('DOMContentLoaded', function() {
    console.log('Culture of Poets website loaded');
    
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Time-based background switching
    function setBackgroundByTime() {
        const now = new Date();
        const hour = now.getHours();
        const homepage = document.querySelector('.homepage');
        
        // Day mode: 7 AM (07:00) to 5:59 PM (17:59)
        if (hour >= 7 && hour < 18) {
            homepage.style.backgroundImage = "url('images/background.png')";
            console.log('Day mode activated');
        }
        // Sunset mode: 6 PM (18:00) to 7:59 PM (19:59)
        else if (hour >= 18 && hour < 20) {
            homepage.style.backgroundImage = "url('images/background 3.png')";
            console.log('Sunset mode activated');
        }
        // Night mode: 8 PM (20:00) to 6:59 AM (06:59)
        else {
            homepage.style.backgroundImage = "url('images/background 2.png')";
            console.log('Night mode activated');
        }
    }
    
    // Set background on page load
    setBackgroundByTime();
    
    // Check for background changes every minute
    setInterval(setBackgroundByTime, 60000);
    

    
    // Poetry quotes cycling
    const quotes = [
        "Poetry is the rhythmical creation of beauty. – Poe",
        "Poetry is truth in its Sunday clothes. – Roux",
        "Poetry is what gets lost in translation. – Frost",
        "Poetry is language at its most distilled. – Dove",
        "Poetry heals the wounds inflicted by reason. – Novalis",
        "A poem begins in delight and ends in wisdom. – Frost",
        "Poetry is the breath of life. – Plath",
        "The poet is the priest of the invisible. – Stevens",
        "Poetry is a way of taking life by the throat. – Frost",
        "Poetry is nearer to vital truth than history. – Plato",
        "Poetry is a way of remembering the soul. – Gioia",
        "Poetry is not a luxury. – Lorde",
        "To be a poet is a condition. – Graves",
        "Poetry is emotion remembered in tranquility. – Wordsworth",
        "Poetry is the language of intensity. – Boland",
        "A poet is a nightingale. – Shelley",
        "Poetry: the best words in the best order. – Coleridge",
        "Poetry is the shadow of our streetlight. – Ferlinghetti",
        "A poem is never finished, only abandoned. – Valéry",
        "Genuine poetry speaks before it's understood. – Eliot",
        "Poetry lifts the veil from hidden beauty. – Shelley",
        "Poetry is a sort of homecoming. – Celan",
        "Poetry is a map of the soul. – Jong",
        "Poetry is the journal of a sea animal. – Sandburg",
        "The poet is a liar who speaks the truth. – Cocteau",
        "Poetry is eternal graffiti of the heart. – Ferlinghetti",
        "Poetry is distilled language. – Dove",
        "Poetry is a deal of joy and pain and wonder. – Gibran",
        "Poetry is a fire in the blood. – Rumi",
        "Poetry begins where language ends. – Heaney"
    ];
    
    const quoteText = document.querySelector('.quote-text');
    let currentQuoteIndex = 0;
    
    function showNextQuote() {
        // Fade out current quote
        quoteText.classList.remove('show');
        
        setTimeout(() => {
            // Update quote text
            quoteText.textContent = quotes[currentQuoteIndex];
            
            // Fade in new quote
            quoteText.classList.add('show');
            
            // Move to next quote
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        }, 500);
    }
    
    // Show first quote
    if (quoteText) {
        showNextQuote();
        
        // Cycle quotes every 5 seconds
        setInterval(showNextQuote, 5000);
    }

    // Modal functionality
    const quotesButton = document.querySelector('.quotes-button');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const modalTitle = document.getElementById('modalTitle');
    const modalEssay = document.getElementById('modalEssay');

    // Poet essays (placeholder - you'll provide the actual content)
    const poetEssays = {
        'Poe': {
            title: 'Edgar Allan Poe',
            essay: 'Edgar Allan Poe (1809-1849) was an American writer, poet, editor, and literary critic. Known for his macabre and mysterious works, Poe is considered a central figure of Romanticism in the United States and American literature. His most famous works include "The Raven," "The Tell-Tale Heart," and "The Fall of the House of Usher." Poe\'s writing style is characterized by its dark themes, psychological depth, and innovative use of language. He is often credited with inventing the detective fiction genre and contributing to the emerging science fiction genre.'
        },
        'Roux': {
            title: 'Joseph Roux',
            essay: 'Joseph Roux (1834-1905) was a French priest and poet known for his philosophical and contemplative writings. His work often explored themes of truth, beauty, and the human condition. Roux\'s poetry is characterized by its clarity, wisdom, and ability to capture profound insights in simple, elegant language. His famous quote "Poetry is truth in its Sunday clothes" reflects his belief in poetry\'s role as a vehicle for expressing deeper truths in beautiful, refined form.'
        },
        'Frost': {
            title: 'Robert Frost',
            essay: 'Robert Frost (1874-1963) was one of America\'s most celebrated poets, known for his realistic depictions of rural life and his command of American colloquial speech. Frost frequently wrote about settings from rural life in New England in the early twentieth century, using them to examine complex social and philosophical themes. His famous works include "The Road Not Taken," "Stopping by Woods on a Snowy Evening," and "Mending Wall." Frost\'s poetry is characterized by its accessibility, deep symbolism, and exploration of universal human experiences.'
        },
        'Dove': {
            title: 'Rita Dove',
            essay: 'Rita Dove (born 1952) is an American poet and essayist. From 1993 to 1995, she served as Poet Laureate Consultant in Poetry to the Library of Congress, making her the first African American to hold that position. Dove\'s poetry is known for its lyrical beauty, historical depth, and exploration of African American experience. Her work often combines personal narrative with broader historical and cultural themes. Notable collections include "Thomas and Beulah," which won the Pulitzer Prize for Poetry in 1987.'
        },
        'Novalis': {
            title: 'Novalis',
            essay: 'Novalis (1772-1801) was the pen name of Georg Philipp Friedrich Freiherr von Hardenberg, a German poet, author, and philosopher of Early German Romanticism. His work is characterized by its mystical and philosophical nature, often exploring themes of nature, love, and the spiritual world. Novalis\'s most famous work is "Hymns to the Night," a collection of poems that blend romanticism with philosophical inquiry. His writing influenced the development of German Romanticism and continues to inspire readers with its depth and beauty.'
        },
        'Plath': {
            title: 'Sylvia Plath',
            essay: 'Sylvia Plath (1932-1963) was an American poet, novelist, and short-story writer. She is credited with advancing the genre of confessional poetry and is best known for her two published collections, "The Colossus and Other Poems" and "Ariel," as well as her semi-autobiographical novel "The Bell Jar." Plath\'s work is characterized by its intense emotional honesty, vivid imagery, and exploration of themes such as death, mental illness, and female identity. Her poetry continues to resonate with readers for its raw emotional power and technical brilliance.'
        },
        'Stevens': {
            title: 'Wallace Stevens',
            essay: 'Wallace Stevens (1879-1955) was an American modernist poet whose work is known for its philosophical depth, rich imagery, and exploration of the relationship between imagination and reality. Stevens worked as an executive for an insurance company while writing poetry, and his work often reflects his interest in the intersection of art and everyday life. His most famous works include "The Emperor of Ice-Cream," "Sunday Morning," and the collection "Harmonium." Stevens\' poetry is characterized by its intellectual complexity, musical language, and profound philosophical insights.'
        },
        'Plato': {
            title: 'Plato',
            essay: 'Plato (c. 428-348 BCE) was an ancient Greek philosopher and student of Socrates. While primarily known for his philosophical dialogues, Plato also wrote poetry and made significant contributions to the understanding of poetry\'s role in society. In his famous work "The Republic," Plato discusses the nature of poetry and its relationship to truth and morality. His philosophical writings have influenced countless poets and thinkers throughout history, and his insights into the nature of beauty, truth, and artistic expression continue to resonate today.'
        },
        'Gioia': {
            title: 'Dana Gioia',
            essay: 'Dana Gioia (born 1950) is an American poet, critic, and former Chairman of the National Endowment for the Arts. Gioia is known for his accessible yet sophisticated poetry that often explores themes of memory, family, and the human condition. His work is characterized by its formal mastery, clear language, and emotional depth. Gioia has been a strong advocate for poetry in American culture and has written extensively about the importance of poetry in contemporary society. His collections include "Daily Horoscope," "The Gods of Winter," and "Interrogations at Noon."'
        },
        'Lorde': {
            title: 'Audre Lorde',
            essay: 'Audre Lorde (1934-1992) was an American writer, feminist, womanist, librarian, and civil rights activist. As a poet, she is best known for her technical mastery and emotional expression, as well as her poems that express anger and outrage at civil and social injustices she observed throughout her life. Lorde\'s work is characterized by its powerful voice, political engagement, and exploration of identity, race, gender, and sexuality. Her most famous works include "The First Cities," "Cables to Rage," and "The Black Unicorn." Lorde\'s poetry continues to inspire and empower readers with its honesty and strength.'
        },
        'Graves': {
            title: 'Robert Graves',
            essay: 'Robert Graves (1895-1985) was an English poet, historical novelist, and critic. Graves is best known for his historical novels, particularly "I, Claudius," but he was also a prolific and influential poet. His poetry is characterized by its clarity, formal mastery, and exploration of themes such as love, war, and mythology. Graves\' work often draws on classical mythology and his experiences in World War I. His poetry collections include "Over the Brazier," "Fairies and Fusiliers," and "The White Goddess." Graves\' influence on modern poetry continues to be felt through his critical writings and poetic innovations.'
        },
        'Wordsworth': {
            title: 'William Wordsworth',
            essay: 'William Wordsworth (1770-1850) was a major English Romantic poet who, with Samuel Taylor Coleridge, helped to launch the Romantic Age in English literature with their 1798 joint publication "Lyrical Ballads." Wordsworth\'s most famous work is "The Prelude," an autobiographical poem that explores the development of the poet\'s mind. His poetry is characterized by its celebration of nature, emphasis on emotion and imagination, and use of everyday language. Wordsworth\'s famous definition of poetry as "the spontaneous overflow of powerful feelings" reflects his belief in poetry\'s connection to authentic human experience.'
        },
        'Boland': {
            title: 'Eavan Boland',
            essay: 'Eavan Boland (1944-2020) was an Irish poet, author, and professor. She is considered one of the most important Irish poets of the twentieth century, known for her exploration of Irish identity, women\'s experiences, and the relationship between personal and political history. Boland\'s poetry is characterized by its lyrical beauty, historical consciousness, and feminist perspective. Her work often addresses themes of motherhood, Irish history, and the role of women in society. Notable collections include "In Her Own Image," "The War Horse," and "Outside History." Boland\'s poetry continues to inspire readers with its honesty and insight.'
        },
        'Shelley': {
            title: 'Percy Bysshe Shelley',
            essay: 'Percy Bysshe Shelley (1792-1822) was one of the major English Romantic poets, known for his radical political and social views, as well as his innovative poetic techniques. Shelley\'s work is characterized by its idealism, passion, and exploration of themes such as love, nature, and political freedom. His most famous works include "Ozymandias," "Ode to the West Wind," and "To a Skylark." Shelley\'s poetry is known for its musical language, vivid imagery, and philosophical depth. His influence on English poetry continues to be profound, and his work remains essential reading for understanding the Romantic movement.'
        },
        'Coleridge': {
            title: 'Samuel Taylor Coleridge',
            essay: 'Samuel Taylor Coleridge (1772-1834) was an English poet, literary critic, and philosopher who, with his friend William Wordsworth, was a founder of the Romantic Movement in England. Coleridge is best known for his poems "The Rime of the Ancient Mariner" and "Kubla Khan," as well as his major prose work "Biographia Literaria." His poetry is characterized by its supernatural elements, vivid imagination, and exploration of the relationship between nature and the human mind. Coleridge\'s critical writings have also been highly influential in the development of literary theory and criticism.'
        },
        'Ferlinghetti': {
            title: 'Lawrence Ferlinghetti',
            essay: 'Lawrence Ferlinghetti (1919-2021) was an American poet, painter, social activist, and co-founder of City Lights Booksellers & Publishers. He is best known for his collection "A Coney Island of the Mind," which has sold over a million copies and has been translated into nine languages. Ferlinghetti\'s poetry is characterized by its accessibility, social consciousness, and celebration of everyday life. His work often addresses themes of democracy, freedom, and the human spirit. As a publisher, Ferlinghetti was instrumental in bringing the work of the Beat Generation to a wider audience, publishing works by Allen Ginsberg and other important poets.'
        },
        'Valéry': {
            title: 'Paul Valéry',
            essay: 'Paul Valéry (1871-1945) was a French poet, essayist, and philosopher. He is best known for his poem "Le Cimetière marin" (The Graveyard by the Sea) and his collection "Charmes." Valéry\'s poetry is characterized by its formal perfection, intellectual depth, and exploration of the creative process. His famous statement that "A poem is never finished, only abandoned" reflects his belief in the ongoing nature of artistic creation. Valéry\'s work has been highly influential in French literature and continues to be studied for its technical mastery and philosophical insights.'
        },
        'Eliot': {
            title: 'T.S. Eliot',
            essay: 'T.S. Eliot (1888-1965) was an American-born British poet, essayist, publisher, playwright, literary critic, and editor. He is considered one of the twentieth century\'s major poets and a central figure in English-language Modernist poetry. Eliot\'s most famous works include "The Waste Land," "The Love Song of J. Alfred Prufrock," and "Four Quartets." His poetry is characterized by its allusiveness, technical innovation, and exploration of modern urban life and spiritual crisis. Eliot\'s critical writings have also been highly influential in the development of literary theory and criticism.'
        },
        'Celan': {
            title: 'Paul Celan',
            essay: 'Paul Celan (1920-1970) was a Romanian-born German-language poet and translator. He is considered one of the most important German-language poets of the post-World War II era. Celan\'s poetry is characterized by its complex, often fragmented language and its exploration of themes such as the Holocaust, memory, and the relationship between language and experience. His most famous poem is "Todesfuge" (Death Fugue), which addresses the Holocaust. Celan\'s work is known for its linguistic innovation and its profound engagement with history and trauma.'
        },
        'Jong': {
            title: 'Erica Jong',
            essay: 'Erica Jong (born 1942) is an American novelist and poet, best known for her 1973 novel "Fear of Flying." Jong\'s poetry is characterized by its frank exploration of female sexuality, relationships, and the female experience. Her work often addresses themes of love, desire, and the challenges faced by women in contemporary society. Jong\'s poetry collections include "Fruits & Vegetables," "Half-Lives," and "Becoming Light." Her work has been praised for its honesty, humor, and contribution to feminist literature.'
        },
        'Sandburg': {
            title: 'Carl Sandburg',
            essay: 'Carl Sandburg (1878-1967) was an American poet, biographer, journalist, and editor. He won three Pulitzer Prizes: two for his poetry and one for his biography of Abraham Lincoln. Sandburg\'s poetry is characterized by its celebration of American life, use of free verse, and incorporation of folk songs and common speech. His most famous works include "Chicago Poems," "Cornhuskers," and "Smoke and Steel." Sandburg\'s poetry often addresses themes of urban life, the American landscape, and the working class. His work continues to be celebrated for its accessibility and its celebration of American democracy.'
        },
        'Cocteau': {
            title: 'Jean Cocteau',
            essay: 'Jean Cocteau (1889-1963) was a French poet, novelist, dramatist, designer, playwright, artist, and filmmaker. Cocteau is considered one of the most versatile and influential artists of the twentieth century. His poetry is characterized by its surrealist elements, innovative use of language, and exploration of themes such as love, death, and the creative process. Cocteau\'s work often blurs the boundaries between different art forms, reflecting his belief in the interconnectedness of all artistic expression. His influence extends beyond poetry to film, theater, and visual arts.'
        },
        'Gibran': {
            title: 'Khalil Gibran',
            essay: 'Khalil Gibran (1883-1931) was a Lebanese-American writer, poet, and visual artist. He is best known for his book "The Prophet," which has been translated into over 100 languages and has sold millions of copies worldwide. Gibran\'s poetry is characterized by its spiritual depth, lyrical beauty, and exploration of universal themes such as love, friendship, and the human condition. His work often draws on both Eastern and Western philosophical traditions, creating a unique blend of mysticism and practical wisdom. Gibran\'s poetry continues to inspire readers with its timeless insights and beautiful language.'
        },
        'Rumi': {
            title: 'Rumi',
            essay: 'Rumi (1207-1273) was a 13th-century Persian poet, Islamic scholar, and Sufi mystic. He is considered one of the greatest poets of all time, and his work has been translated into many languages and has influenced literature and spirituality worldwide. Rumi\'s poetry is characterized by its spiritual depth, celebration of divine love, and exploration of the relationship between the human soul and the divine. His most famous work is the "Masnavi," a six-volume poem that is considered one of the greatest works of Sufi literature. Rumi\'s poetry continues to inspire readers with its universal themes and spiritual wisdom.'
        },
        'Heaney': {
            title: 'Seamus Heaney',
            essay: 'Seamus Heaney (1939-2013) was an Irish poet, playwright, and translator. He received the 1995 Nobel Prize in Literature for "works of lyrical beauty and ethical depth, which exalt everyday miracles and the living past." Heaney\'s poetry is characterized by its rich language, exploration of Irish identity and history, and celebration of the natural world. His most famous works include "Death of a Naturalist," "North," and "The Spirit Level." Heaney\'s work often addresses themes of memory, place, and the relationship between personal and collective history. His poetry continues to be celebrated for its technical mastery and emotional depth.'
        }
    };

    // Click handler for quotes button
    if (quotesButton) {
        quotesButton.addEventListener('click', function() {
            const currentQuote = quoteText.textContent;
            const poetName = currentQuote.split('– ')[1]; // Extract poet name from quote
            
            if (poetEssays[poetName]) {
                modalTitle.textContent = poetEssays[poetName].title;
                modalEssay.textContent = poetEssays[poetName].essay;
                modalOverlay.classList.add('show');
            }
        });
    }

    // Close modal handlers
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            modalOverlay.classList.remove('show');
        });
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('show');
            }
        });
    }
}); 