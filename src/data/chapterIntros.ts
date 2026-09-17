// Unique, human-written introductions for each chapter — the prose that makes
// each chapter page distinct (for readers, search, and answer engines) rather
// than 18 near-identical verse lists. Key verses double as internal links to
// the per-verse pages and as citable anchors.

export type KeyVerse = { n: number; note: string };
export type ChapterIntro = { intro: string; keyVerses: KeyVerse[] };

export const chapterIntros: Record<number, ChapterIntro> = {
  1: {
    intro:
      "The Gita opens not with an answer but with a collapse. On the field of Kurukshetra, with two armies drawn up and ready, the warrior Arjuna asks his charioteer Krishna to halt between the ranks. Seeing his own teachers, cousins and elders arrayed against him, he is overcome — his bow slips from his hand, his limbs fail, and he refuses to fight. Chapter 1 is this unravelling: grief, doubt, and the honest admission that he does not know what is right. It is the necessary starting point for everything that follows, because the Gita's teaching only begins once Arjuna has run out of his own answers. Anyone who has frozen at the edge of an impossible choice will recognise this chapter — it names the crisis before it offers a way through.",
    keyVerses: [
      { n: 1, note: 'Dhritarashtra asks what happened on the field of dharma' },
      { n: 47, note: 'Arjuna sinks down and lets his bow fall' },
    ],
  },
  2: {
    intro:
      "Chapter 2 is often called the Gita in miniature — Krishna's first full reply to Arjuna's despair, and a summary of much that the rest will unfold. He begins by distinguishing the eternal self (atman) from the perishable body: what is real is never born and never dies. From there he turns to action, introducing the idea that will define the whole text — do your work without clinging to its results. He describes the sthitaprajna, the person of steady wisdom, unshaken by pleasure or pain, fear or anger, and traces how unchecked desire slides into anger, confusion and ruin. This is where the Gita's psychology lives: how to act fully while holding the outcome lightly. If you read only one chapter, many begin here.",
    keyVerses: [
      { n: 20, note: 'The self is never born and never dies' },
      { n: 47, note: 'You have a right to your action, never to its fruits' },
      { n: 62, note: 'How desire, unwatched, becomes anger and downfall' },
    ],
  },
  3: {
    intro:
      "If the self is eternal and wisdom is the goal, Arjuna asks, why act at all? Chapter 3 answers: because no one can truly stop acting — even stillness is a choice — and because action done rightly is itself a path. Krishna teaches karma yoga: work performed as an offering, without attachment to reward, for the good of the whole. He warns against both restless doing and false renunciation, and names the enemy within — desire and anger — that drags a person off course. The chapter reframes ordinary duty as spiritual practice: it is not what you do but the spirit in which you do it that frees or binds you.",
    keyVerses: [
      { n: 19, note: 'Act without attachment, and you reach the highest' },
      { n: 35, note: "Better your own path, imperfectly, than another's well" },
    ],
  },
  4: {
    intro:
      "Krishna reveals that this teaching is ancient — passed down through a lineage of sages and renewed by him in every age whenever righteousness declines. Chapter 4 weaves action and knowledge together: the wise act without being bound, because they understand it is nature's qualities that act, not the true self. Krishna describes many forms of sacrifice and concludes that the sacrifice of knowledge is highest — wisdom, like fire, turns all action to ash. For the doubter, he gives a direct instruction: seek out those who have seen the truth, ask humbly, and serve; understanding will follow.",
    keyVerses: [
      { n: 7, note: 'Whenever dharma declines, I come into being' },
      { n: 8, note: 'To protect the good, I appear age after age' },
      { n: 38, note: 'Nothing in the world purifies like knowledge' },
    ],
  },
  5: {
    intro:
      "Arjuna is caught between two teachings — renounce action, or act without attachment? Chapter 5 resolves the tension: both lead to the same place, but action in the right spirit is the surer path. The truly free person renounces not action but the sense of 'I am the doer,' offering everything to the divine like a lotus leaf untouched by the water it rests on. Krishna describes the peace of one who is equal-minded toward all, at home everywhere, whose happiness is found within rather than in passing pleasures. It is a portrait of inner freedom lived out in the middle of an active life.",
    keyVerses: [
      { n: 10, note: 'Act offering everything, untouched like a lotus leaf' },
      { n: 29, note: 'Knowing the friend of all beings, one finds peace' },
    ],
  },
  6: {
    intro:
      "Here the Gita turns inward to the practice of meditation. Krishna gives practical guidance — a steady seat, moderation in food, sleep and effort, a still and one-pointed mind — and describes the disciplined person who has made the self a friend rather than an enemy. The goal is a mind as steady as a lamp in a windless place. When Arjuna protests that the mind is as hard to hold as the wind, Krishna agrees, but insists it can be trained through practice (abhyasa) and non-attachment (vairagya). And he offers reassurance: no sincere effort is ever lost — a seeker who falls short in this life takes up the path again in the next.",
    keyVerses: [
      { n: 5, note: 'Lift yourself by yourself; be your own friend' },
      { n: 19, note: 'A steady mind, like a lamp in a windless place' },
      { n: 35, note: 'The restless mind is tamed by practice and detachment' },
    ],
  },
  7: {
    intro:
      "Chapter 7 shifts from method to the nature of the divine itself. Krishna describes his two natures — the material world of eight elements, and the higher life-force that sustains it — and declares that all things are strung upon him like beads on a thread. He speaks of the three gunas that veil reality, and of the four kinds of people who turn to him, praising the seeker of wisdom as dearest of all. Few, he says, truly know him beyond his outer forms. The chapter begins the Gita's turn toward devotion: knowledge deepened into a living relationship with the source of everything.",
    keyVerses: [
      { n: 7, note: 'All this is strung on me like beads on a thread' },
      { n: 19, note: 'After many births, the wise take refuge in me' },
    ],
  },
  8: {
    intro:
      "Arjuna asks a series of questions about Brahman, the self, action, and what happens at death — and Chapter 8 answers. Krishna teaches that whatever state of mind one holds at the final moment shapes what follows, and so counsels remembering the divine at all times, not only at the end. He describes the imperishable Absolute beyond the changing world, and the yogi's steady departure from the body, and contemplates the vast cycles of creation and dissolution. It is a meditation on impermanence and the deathless, and on the one goal from which there is no return.",
    keyVerses: [
      { n: 5, note: 'Whoever remembers me at the last moment comes to me' },
      { n: 7, note: 'Therefore remember me at all times, and act' },
    ],
  },
  9: {
    intro:
      "Krishna calls this the king of knowledge and the royal secret — the most direct and joyful teaching, easy to practise and never wasted. He reveals that he pervades and holds the entire universe yet is not contained by it. What matters is not status, birth or ritual but the heart's turning: whoever offers even a leaf, a flower, or a little water with love, he receives. Chapter 9 is the Gita at its most tender and inclusive — the promise that sincere devotion, from anyone, is enough, and that no one who turns toward the divine is ever lost.",
    keyVerses: [
      { n: 22, note: 'To the devoted, I carry what they lack and keep what they have' },
      { n: 26, note: 'A leaf, a flower, a fruit, water — offered with love, I accept' },
    ],
  },
  10: {
    intro:
      "How do you contemplate the infinite? Chapter 10 offers a way in. At Arjuna's request, Krishna names his vibhutis — the glories through which his presence can be glimpsed: among lights he is the sun, among mountains the Himalaya, among words the sacred syllable Om, among rivers the Ganges, the radiance in everything radiant. These are not a complete list but a doorway; wherever there is beauty, power or excellence, a spark of the divine is there. The chapter trains the eye to see the sacred woven through the ordinary world, and ends with Krishna holding all of it with a single fragment of himself.",
    keyVerses: [
      { n: 20, note: 'I am the self seated in the heart of all beings' },
      { n: 41, note: 'Wherever there is glory or power, know it as a spark of mine' },
    ],
  },
  11: {
    intro:
      "This is the Gita's overwhelming centre. Arjuna asks to see Krishna's true form and is given divine sight to behold the Vishvarupa — the cosmic body containing all worlds, all beings, all time, with countless faces, blazing like a thousand suns. Awed and terrified, he sees warriors rushing into fiery mouths and understands that time itself is the great devourer. He praises, trembles, and begs forgiveness for having treated Krishna as an ordinary friend. Then the vision softens back to the familiar form. Chapter 11 is a direct encounter with the sublime — beauty and terror together — and a reminder of how small our usual view of reality is.",
    keyVerses: [
      { n: 32, note: 'I am time, the mighty force that destroys the worlds' },
      { n: 55, note: 'The one who works for me, free of attachment, comes to me' },
    ],
  },
  12: {
    intro:
      "After the cosmic vision, Arjuna asks a simple question: who is the better yogi — one who worships the personal Krishna, or one who seeks the formless Absolute? Chapter 12 answers gently that both reach the goal, but the path of loving devotion is easier for embodied beings. Krishna offers a ladder for those who cannot fix the mind on him: try steady practice, then work done for his sake, then simply surrendering the fruits of all action. The chapter closes with one of the Gita's most beloved passages — a portrait of the devotee dear to the divine: free of hatred, friendly, patient, content, and steady in joy and sorrow alike.",
    keyVerses: [
      { n: 8, note: 'Fix your mind on me, and you will dwell in me' },
      { n: 13, note: 'The one who hates no being, friendly and compassionate…' },
    ],
  },
  13: {
    intro:
      "Chapter 13 draws a fundamental distinction: the 'field' (kshetra) — the body, mind and all that can be observed — and the 'knower of the field' (kshetrajna), the consciousness that observes. Confusing the two is the root of bondage; distinguishing them is the beginning of freedom. Krishna lists the qualities that make up real knowledge — humility, non-violence, patience, self-control, steadiness — and describes the supreme self that dwells in all beings, unchanging amid change. Like one sun lighting the whole world, a single awareness illumines every field. It is the Gita's most philosophical chapter, mapping the difference between what we have and what we are.",
    keyVerses: [
      { n: 2, note: 'Know both the field and the knower of the field' },
      { n: 28, note: 'Seeing the same Lord in all, one does not harm the self' },
    ],
  },
  14: {
    intro:
      "Everything in nature, Krishna explains, is woven from three strands or qualities — the gunas. Sattva binds through attachment to harmony and knowledge; rajas through restless craving and activity; tamas through inertia, confusion and neglect. These three shape our moods, choices and even how we die, and we are pulled between them constantly. Freedom is not choosing one but rising beyond all three. Chapter 14 describes the gunatita — the person who has crossed over the gunas, who watches them come and go without being disturbed, treating a clod, a stone and gold alike, steady in praise and blame. It is a precise map of the inner weather and how to stop being ruled by it.",
    keyVerses: [
      { n: 5, note: 'Sattva, rajas and tamas — the three qualities that bind' },
      { n: 22, note: 'The one beyond the gunas neither craves nor recoils' },
    ],
  },
  15: {
    intro:
      "Chapter 15 opens with a striking image: the world as an inverted tree, roots above and branches below, which must be cut with the axe of non-attachment to find its source. Krishna describes the eternal fragment of himself that becomes the living soul, and how the wise perceive it while the deluded do not. He reveals himself as the light in the sun and moon, the fire that digests, the memory and knowledge in every heart. He names three levels of being — the perishable, the imperishable, and the Supreme Person (Purushottama) beyond both. Short and radiant, the chapter distils the whole teaching to its highest point.",
    keyVerses: [
      { n: 1, note: 'The imperishable tree with its roots above' },
      { n: 7, note: 'An eternal fragment of myself becomes the living soul' },
    ],
  },
  16: {
    intro:
      "Chapter 16 contrasts two ways of being in the world. The divine nature (daivi sampad) shows itself as fearlessness, purity, generosity, honesty, gentleness, and freedom from anger and pride. The demonic nature (asuri sampad) is marked by arrogance, hypocrisy, endless craving, and the conviction that the world exists only to satisfy the self. Krishna is unsparing about where the second path leads. He names three gates to self-ruin — lust, anger and greed — and counsels turning from all three. The chapter is a moral compass, asking honestly which qualities we are feeding in ourselves, and pointing to wisdom as the guide for what to do and what to leave undone.",
    keyVerses: [
      { n: 1, note: 'Fearlessness, purity, generosity — the marks of the divine' },
      { n: 21, note: 'Lust, anger and greed — the three gates to ruin' },
    ],
  },
  17: {
    intro:
      "'A person is made of their faith,' Krishna says — and Chapter 17 shows how the three gunas colour everything, even our sincerity. Faith, food, sacrifice, discipline and charity each come in three kinds: pure (sattvic), passionate (rajasic) and dark (tamasic). The food we prefer, the way we give, the tone of our worship all reveal the quality of our inner life. Krishna describes the austerity of body, speech and mind, praising words that are truthful, kind and calming, and closes with the sacred formula 'Om Tat Sat.' Its quiet lesson: it is not only what we do, but the quality of heart behind it, that gives an act its worth.",
    keyVerses: [
      { n: 3, note: 'A person is shaped by their faith; as the faith, so the person' },
      { n: 15, note: 'Speech that is true, kind and calming is austerity' },
    ],
  },
  18: {
    intro:
      "The longest chapter gathers the whole Gita into its conclusion. Krishna distinguishes renunciation of action (sannyasa) from renunciation of its fruits (tyaga), praising the second as the path for an active life. He revisits the three gunas one last time — sorting knowledge, action, the doer, understanding and even happiness into their three kinds — and affirms that doing one's own duty imperfectly is better than doing another's well. Then comes the Gita's ultimate counsel: give up all lesser supports and take refuge in the divine alone. Arjuna's confusion is gone; he stands ready to act. The dialogue ends with a blessing: where there is skill in action joined to the divine, there victory and well-being are sure.",
    keyVerses: [
      { n: 66, note: 'Abandon all supports and take refuge in me alone' },
      { n: 78, note: 'Where Krishna and Arjuna are, there is fortune and victory' },
    ],
  },
};
