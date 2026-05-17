/**
 * Anchored Steps — Content Patch v3
 * Weeks 11-21 studyNotes are directly assigned (no string matching).
 * All other fixes use short, reliable .replace() patterns.
 */
(function () {
  if (!window.__APPDATA__) { console.error("patch.js: __APPDATA__ not found"); return; }
  var weeks = window.__APPDATA__.ALL_WEEKS;
  function W(n) { return weeks.find(function (w) { return w.week === n; }); }
  var w;
  console.log("patch.js v3: loaded. Weeks:", weeks.length);

  // ── WEEKS 11–21: direct assignment of correct studyNotes ─────────────────

  w = W(11);
  if (w) w.studyNotes = "Scripture presents forgiveness as a response rooted in God\u2019s grace toward us. Believers are called to forgive not because others deserve it, but because God has forgiven them in Christ (Ephesians 4:32). Forgiveness reflects the heart of the gospel.\n\nJesus teaches that forgiveness is not optional for His followers (Matthew 6:14). This does not mean forgiveness ignores justice or minimizes wrongdoing, but that it releases the burden of vengeance to God. Forgiveness frees the believer from bitterness and resentment.\n\nBiblical forgiveness is an act of obedience empowered by grace. It often begins as a decision before it becomes an emotion. As believers choose forgiveness, God works healing within the heart. Forgiveness restores peace, protects unity, and reflects Christ\u2019s mercy to the world.";

  w = W(12);
  if (w) w.studyNotes = "Scripture presents prayer as essential to the believer\u2019s relationship with God. Paul\u2019s instruction to \u201cpray without ceasing\u201d emphasizes continual dependence rather than constant verbal expression (1 Thessalonians 5:17). Prayer is meant to shape how believers live, think, and respond.\n\nJesus taught that prayer flows from intimacy, not performance. In Matthew 6:6, He emphasizes private communion with the Father rather than outward display. Prayer strengthens trust by drawing believers into honest and personal relationship with God.\n\nPrayer also serves as the pathway to peace. Philippians 4:6 teaches believers to bring every concern to God with thanksgiving, replacing anxiety with trust. Through prayer, believers exchange worry for God\u2019s peace and direction.\n\nA disciplined prayer life deepens faith, sharpens spiritual awareness, and aligns the heart with God\u2019s will. Prayer does not change God, but it transforms the one who prays, cultivating humility, trust, and ongoing dependence on Him.";

  w = W(13);
  if (w) w.studyNotes = "Scripture presents integrity as moral wholeness \u2014 a life where beliefs, words, and actions align with God\u2019s truth. Proverbs teaches that integrity provides guidance and security, while compromise ultimately leads to destruction (Proverbs 11:3; 10:9). Integrity stabilizes the believer by grounding life in truth rather than convenience.\n\nIntegrity begins in the heart and is revealed through daily choices. Job\u2019s commitment to guard his eyes illustrates intentional boundaries that protect character (Job 31:1). Integrity often requires proactive decisions that preserve faithfulness before temptation arises.\n\nWalking in integrity does not mean perfection, but consistency and repentance when failure occurs. God honors those who pursue honesty and uprightness, even when obedience is costly. A life of integrity builds trust, strengthens witness, and reflects devotion to God. Integrity keeps the heart undivided and the walk secure.";

  w = W(14);
  if (w) w.studyNotes = "Scripture presents self-control as evidence of a Spirit-led life. Paul teaches that God supplies power, love, and self-control through the Holy Spirit, not through fear or human striving (2 Timothy 1:7). Self-control reflects a mind shaped by truth and guided by wisdom.\n\nProverbs warns that a lack of self-control leaves a person vulnerable, like a city without walls (Proverbs 25:28). Boundaries protect what God is building. Without restraint, even good desires can become destructive.\n\nPaul describes discipline as intentional training that keeps life aligned with God\u2019s purpose (1 Corinthians 9:27). Self-control does not eliminate desire; it directs it. As believers practice restraint through dependence on the Spirit, self-control produces clarity, stability, and spiritual strength. True self-control leads to freedom that honors God and guards the heart.";

  w = W(15);
  if (w) w.studyNotes = "Scripture teaches that wisdom originates with God and is grounded in reverence for Him. Proverbs explains that wisdom begins with the fear of the Lord, meaning a posture of humility and submission to God\u2019s authority (Proverbs 9:10). Without reverence, knowledge lacks direction.\n\nJames reminds believers that wisdom is a gift God freely gives to those who ask in faith (James 1:5). God does not rebuke sincere requests for guidance, but generously provides understanding to those who seek Him.\n\nBiblical wisdom is not merely knowing what is right, but choosing what honors God in everyday decisions. Trusting God rather than personal understanding leads to paths shaped by clarity and peace (Proverbs 3:5\u20136). Wisdom aligns the heart with God\u2019s will and produces discernment, stability, and faithful obedience.";

  w = W(16);
  if (w) w.studyNotes = "Scripture teaches that discernment is a mark of spiritual maturity. Hebrews explains that believers grow in discernment through practice, learning to distinguish between good and evil over time (Hebrews 5:14). Discernment is developed, not automatic.\n\nJohn instructs believers to test spiritual influences rather than accept every teaching or message (1 John 4:1). Discernment protects the heart from deception and aligns judgment with God\u2019s truth. It requires attentiveness to Scripture and dependence on the Spirit.\n\nGod\u2019s Word serves as the primary guide for discernment. Psalm 119:105 reminds believers that Scripture illuminates the path ahead, providing clarity when decisions are unclear. As believers grow in knowledge of God\u2019s Word and sensitivity to the Spirit, discernment strengthens.\n\nDiscernment does not produce fear, but confidence. It enables believers to walk wisely, choose faithfully, and remain grounded in truth.";

  w = W(17);
  if (w) w.studyNotes = "Scripture presents peace as a gift from God that transcends human understanding. Paul teaches that God\u2019s peace guards both the heart and mind, offering protection from anxiety and fear (Philippians 4:7). Peace flows from trusting God with every concern through prayer.\n\nJesus distinguishes His peace from the world\u2019s version of peace, which depends on circumstances (John 14:27). God\u2019s peace remains steady even in uncertainty because it is rooted in His presence rather than external stability.\n\nIsaiah describes peace as the result of a mind fixed on God (Isaiah 26:3). When believers trust God fully, peace becomes a sustaining force rather than a fleeting feeling. Peace grows through surrender, obedience, and confidence in God\u2019s faithfulness. True peace anchors the soul and reflects a heart resting securely in God.";

  w = W(18);
  if (w) w.studyNotes = "Scripture presents servanthood as central to the life and mission of Jesus. In Mark 10:45, Jesus clearly defines His purpose as service and sacrifice, establishing servanthood as the pattern for His followers. True greatness in God\u2019s kingdom is measured not by authority, but by humility and love.\n\nJesus consistently modeled servanthood through compassion, obedience, and self-giving love. From washing the disciples\u2019 feet to laying down His life, Jesus demonstrated that serving others reflects the heart of God. Servanthood flows from love, not obligation.\n\nPaul reminds believers that freedom in Christ leads to serving one another in love (Galatians 5:13). When believers choose servanthood, pride is replaced with humility, and self-interest gives way to compassion. Servanthood shapes character, strengthens community, and reveals Christ to the world through everyday acts of faithfulness.";

  w = W(19);
  if (w) w.studyNotes = "Scripture teaches that everything belongs to God, and believers are entrusted as stewards rather than owners. Psalm 24:1 reminds us that all creation belongs to the Lord, shaping how we view our possessions, time, and abilities. Stewardship begins with recognizing God\u2019s ownership.\n\nPaul emphasizes that faithfulness is the defining quality of a steward (1 Corinthians 4:2). God does not measure success by abundance alone, but by obedience and responsibility with what has been given. Stewardship involves consistency, integrity, and intentional care.\n\nPeter expands stewardship beyond material resources, teaching that spiritual gifts are also entrusted for service to others (1 Peter 4:10). Faithful stewardship reflects gratitude toward God and love toward people. When believers manage resources wisely, they honor God\u2019s trust and participate in His purposes. Stewardship shapes character, cultivates discipline, and aligns everyday life with eternal priorities.";

  w = W(20);
  if (w) w.studyNotes = "Scripture presents joy as a defining mark of a life rooted in God. Nehemiah reminds God\u2019s people that joy is not optional, but a source of strength that sustains them during rebuilding and renewal (Nehemiah 8:10). Joy empowers endurance.\n\nPaul commands believers to rejoice continually, not because life is easy, but because joy is grounded in the Lord Himself (Philippians 4:4). Joy becomes a spiritual discipline that redirects focus from circumstances to God\u2019s faithfulness.\n\nThe Psalms reveal that true joy flows from God\u2019s presence rather than external pleasure (Psalm 16:11). Joy grows as believers remain connected to God through trust, worship, and obedience. While happiness may fluctuate, joy remains steady. God\u2019s joy restores perspective, renews hope, and strengthens faith through every season.";

  w = W(21);
  if (w) w.studyNotes = "Scripture reveals kindness as a reflection of God\u2019s own character. Titus describes God\u2019s kindness as the motivation behind salvation, showing that kindness initiates restoration and invites repentance (Titus 3:4). Kindness is not weakness, but purposeful love.\n\nPaul urges believers to practice kindness as an outflow of forgiveness and grace (Ephesians 4:32). Biblical kindness goes beyond politeness; it actively seeks the good of others, even when undeserved. It is rooted in compassion and sustained by humility.\n\nGod\u2019s kindness leads hearts toward healing and transformation. Romans teaches that kindness draws people toward repentance rather than fear. As believers reflect God\u2019s kindness through words and actions, they participate in God\u2019s redemptive work. Kindness builds unity, strengthens relationships, and serves as a powerful witness of God\u2019s love in daily life.";

  // ── ALL WEEKS: strip trailing PDF page numbers from reflectionPrompts ──────
  weeks.forEach(function(wk) {
    if (!wk.reflectionPrompts) return;
    wk.reflectionPrompts = wk.reflectionPrompts.map(function(p) {
      return p.replace(/ \d{1,4}$/, "");
    });
  });

  // ── WEEK 23 ───────────────────────────────────────────────────────────────
  w = W(23);
  if (w) {
    w.studyNotes = w.studyNotes.replace("faithfulness feels unnoticed or Paul", "Paul");
    w.reflectionPrompts[0] = w.reflectionPrompts[0].replace("Where id God", "Where is God");
  }

  // ── WEEK 24 ───────────────────────────────────────────────────────────────
  w = W(24);
  if (w) {
    w.studyNotes = w.studyNotes
      .replace("communication style under inner character", "inner character")
      .replace("to speak building up with grace", "to speak with grace")
      .replace("while speech fosters", "while gracious speech fosters")
      .replace("conflict guide my speech more (James 1:19). God-honoring intentionally? communication", "conflict (James 1:19). God-honoring communication");
  }

  // ── WEEK 25 ───────────────────────────────────────────────────────────────
  w = W(25);
  if (w) {
    w.studyNotes = w.studyNotes.replace("to strengthen protect believers", "to protect believers");
    w.reflectionPrompts[3] = w.reflectionPrompts[3].replace("purse Godly", "pursue Godly");
  }

  // ── WEEK 26 ───────────────────────────────────────────────────────────────
  w = W(26);
  if (w) w.studyNotes = w.studyNotes.replace("strengthen? preserve purity", "strengthen and preserve purity");

  // ── WEEK 27 ───────────────────────────────────────────────────────────────
  w = W(27);
  if (w) w.studyNotes = w.studyNotes.replace("gifts for the of others", "gifts for the good of others");

  // ── WEEK 28 ───────────────────────────────────────────────────────────────
  w = W(28);
  if (w) w.studyNotes = w.studyNotes.replace("healed, pursue peace and relationships strengthened, and reconciliation?", "healed, relationships strengthened, and reconciliation pursued.");

  // ── WEEK 29 ───────────────────────────────────────────────────────────────
  w = W(29);
  if (w) {
    w.studyNotes = w.studyNotes
      .replace("Paul difficulty instructs", "Paul instructs")
      .replace("restore greatest impact on those joy and confidence. around me?", "restore joy and confidence, with the greatest impact on those around me.")
      .replace("but strengthen unity and intentional support truth.", "but intentional support rooted in truth.");
    w.reflectionPrompts[0] = w.reflectionPrompts[0].replace("difficulty seasons", "difficult seasons");
  }

  // ── WEEK 30 ───────────────────────────────────────────────────────────────
  w = W(30);
  if (w) {
    w.studyNotes = w.studyNotes.replace("design? purpose becomes clearer.", "purpose becomes clearer.");
    w.reflectionPrompts[1] = w.reflectionPrompts[1].replace("reffing", "refining");
  }

  // ── WEEK 31 ───────────────────────────────────────────────────────────────
  w = W(31);
  if (w) w.studyNotes = w.studyNotes.replace("recognition alone, but excellence? by devotion to God.", "recognition, but by devotion to God and a pursuit of excellence.");

  // ── WEEK 32 ───────────────────────────────────────────────────────────────
  w = W(32);
  if (w) {
    w.studyNotes = w.studyNotes
      .replace("than personal ambition", "purposes rather than personal ambition")
      .replace("when it has God is surrendered to God.", "when it is surrendered to God.")
      .replace("glorify God? body of Christ.", "the body of Christ.")
      .replace("Calling may seasons,", "Calling may change across seasons,");
  }

  // ── WEEK 33 ───────────────────────────────────────────────────────────────
  w = W(33);
  if (w) {
    w.studyNotes = w.studyNotes
      .replace("all are prevent intended", "all are intended")
      .replace("body of gifts Christ.", "body of Christ.")
      .replace("encourages growth, service? and reflects", "encourages growth, and reflects");
  }

  // ── WEEK 34 ───────────────────────────────────────────────────────────────
  w = W(34);
  if (w) {
    w.studyNotes = w.studyNotes
      .replace("instructs journey? Timothy", "instructs Timothy")
      .replace("influence impactful?", "")
      .replace("Mentorship to mentor models", "Mentorship models")
      .replace("or correction, to others? mentorship", "or correction, mentorship");
  }

  // ── WEEK 35 ───────────────────────────────────────────────────────────────
  w = W(35);
  if (w) {
    w.studyNotes = w.studyNotes
      .replace("Jesus leadership? redefines", "Jesus redefines")
      .replace("self- awareness", "self-awareness")
      .replace("God God developing in me as a values leaders who example, model godly character", "God values leaders who model godly character");
  }

  // ── WEEK 36 ───────────────────────────────────────────────────────────────
  w = W(36);
  if (w) w.reflectionPrompts[0] = w.reflectionPrompts[0].replace("How do i respond", "How do I respond");

  // ── WEEK 37 ───────────────────────────────────────────────────────────────
  w = W(37);
  if (w) {
    w.studyNotes = w.studyNotes
      .replace("over time achievement.", "over time rather than achievement.")
      .replace("in words, and actions? others.", "in others.")
      .replace("A on to consistent life", "A consistent life");
    w.endReflections[0] = w.endReflections[0].replace("Legacy -building", "legacy-building");
  }

  // ── WEEK 39 ───────────────────────────────────────────────────────────────
  w = W(39);
  if (w) {
    var idx = w.studyNotes.indexOf("When believers others?");
    if (idx !== -1) w.studyNotes = w.studyNotes.substring(0, idx) + "When believers anchor their hope in God\u2019s promises, they experience strength, peace, and renewed purpose.";
  }

  // ── WEEK 40 ───────────────────────────────────────────────────────────────
  w = W(40);
  if (w) w.studyNotes = w.studyNotes.replace("God compassion is compassionate,", "God is compassionate,");

  // ── WEEK 41 ───────────────────────────────────────────────────────────────
  w = W(41);
  if (w) w.studyNotes = w.studyNotes.replace("with grace, becomes visible.", "with grace, Christ becomes visible.");

  // ── WEEK 42 ───────────────────────────────────────────────────────────────
  w = W(42);
  if (w) w.studyNotes = w.studyNotes.replace("loosen a the grip", "loosen the grip");

  // ── WEEK 43 ───────────────────────────────────────────────────────────────
  w = W(43);
  if (w) {
    w.studyNotes = w.studyNotes
      .replace("vision is from God? essential", "vision is essential")
      .replace("decisions? promises.", "promises.")
      .replace("clarity or trust in God", "and obedience. When believers seek God")
      .replace("and obedience. When believers seek God's and obedience.", "and obedience.")
      .replace("When believers timing? seek", "When believers seek");
  }

  // ── WEEK 44 ───────────────────────────────────────────────────────────────
  w = W(44);
  if (w) {
    w.studyNotes = w.studyNotes.replace("Perseverance through sustained", "Perseverance is sustained through");
    w.endReflections[0] = w.endReflections[0].replace("through trail this", "through trial this");
  }

  // ── WEEK 45 ───────────────────────────────────────────────────────────────
  w = W(45);
  if (w) {
    w.studyNotes = w.studyNotes
      .replace("Galatians not to grow weary in doing good, reminding them that endurance produces fruit over time (Galatians 6:9).", "Galatians 6:9 urges believers not to grow weary in doing good, noting that endurance produces fruit over time.")
      .replace("and look like in sacrificial.", "and sacrificial.");
    w.endReflections[1] = w.endReflections[1].replace("patience ir commitment", "patience or commitment");
  }

  // ── WEEK 46 ───────────────────────────────────────────────────────────────
  w = W(46);
  if (w) {
    w.studyNotes = w.studyNotes
      .replace("established by Sabbath? God.", "established by God.")
      .replace("look like When practiced", "When practiced");
  }

  // ── WEEK 47 ───────────────────────────────────────────────────────────────
  w = W(47);
  if (w) w.studyNotes = w.studyNotes.replace("When toward believers surrender", "When believers surrender");

  // ── WEEK 48 ───────────────────────────────────────────────────────────────
  w = W(48);
  if (w) w.studyNotes = w.studyNotes.replace("not human remain open to", "not human").replace("God's effort.", "effort.");

  // ── WEEK 49 ───────────────────────────────────────────────────────────────
  w = W(49);
  if (w) {
    w.studyNotes = w.studyNotes
      .replace("a central hope return of", "a central hope of")
      .replace("live with return encourage urgency", "live with urgency");
    var idx49 = w.studyNotes.indexOf("perseverance. perseverance?");
    if (idx49 !== -1) w.studyNotes = w.studyNotes.substring(0, idx49 + 13);
    w.endReflections[0] = w.endReflections[0].replace("enternity", "eternity");
  }

  // ── WEEK 50 ───────────────────────────────────────────────────────────────
  w = W(50);
  if (w) {
    w.studyNotes = w.studyNotes.replace("Abiding like in means", "Abiding means");
    w.reflectionPrompts[2] = w.reflectionPrompts[2].replace("What practice help", "What practices help");
  }

  // ── WEEK 51 ───────────────────────────────────────────────────────────────
  w = W(51);
  if (w) {
    w.studyNotes = w.studyNotes
      .replace("purpose, journey up perseverance,", "purpose, perseverance,")
      .replace("Faith that endures reflects circumstances.", "Faith that endures reflects trust in God regardless of circumstances.");
    var idx51 = w.studyNotes.indexOf("like in my");
    if (idx51 !== -1) w.studyNotes = w.studyNotes.substring(0, idx51) + w.studyNotes.substring(idx51 + 10);
  }

  // ── WEEK 52 ───────────────────────────────────────────────────────────────
  w = W(52);
  if (w) {
    w.studyNotes = w.studyNotes
      .replace("how God has growth,", "how God has worked through growth,")
      .replace("carry forward into the next A year", "A year");
    w.keywords = "Reflection, Gratitude, Faithfulness";
    if (w.endReflections[2]) w.endReflections[2] = w.endReflections[2].replace(/^where /, "Where ");
  }

  // ── TYPOS ─────────────────────────────────────────────────────────────────
  w = W(14);
  if (w) {
    w.endReflections[0] = w.endReflections[0].replace("is self-control strengthen", "did self-control strengthen");
    w.endReflections[2] = w.endReflections[2].replace("Waht habits", "What habits");
  }
  w = W(15);
  if (w) w.endReflections[2] = w.endReflections[2].replace("How I continue growing", "How will I continue growing");
  w = W(20);
  if (w) {
    w.endReflections[0] = w.endReflections[0].replace("expercience", "experience");
    w.endReflections[2] = w.endReflections[2].replace("foward", "forward");
  }
  w = W(23);
  if (w) w.endReflections[2] = w.endReflections[2].replace("foward", "forward");
  w = W(25);
  if (w) {
    w.trackerLabel = w.trackerLabel.replace("Accountabilty", "Accountability");
    w.endReflections[0] = w.endReflections[0].replace("Accountabilty", "Accountability");
  }
  w = W(29);
  if (w) w.trackerLabel = w.trackerLabel.replace("Encouragment", "Encouragement");
  w = W(34);
  if (w) w.endReflections[2] = w.endReflections[2].replace("How I continue investing", "How will I continue investing");

  console.log("patch.js v3: complete.");
})();
