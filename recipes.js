const RECIPES = [
  // ========== PORTION UNDER TIAN ==========
  {
    id: 1, title: "Köttfärssås med pasta", blog: "portionundertian", blogName: "Portion under tian",
    blogUrl: "https://www.portionundertian.se",
    categories: ["pasta", "köttfärs", "snabb", "budget", "vardagsmat"],
    servings: 4, time: 25,
    ingredients: [
      { amount: 500, unit: "g", name: "köttfärs" },
      { amount: 400, unit: "g", name: "pasta" },
      { amount: 1, unit: "burk", name: "krossade tomater (400 g)" },
      { amount: 1, unit: "st", name: "gul lök" },
      { amount: 2, unit: "klyftor", name: "vitlök" },
      { amount: 1, unit: "tsk", name: "oregano" },
      { amount: 1, unit: "tsk", name: "salt" },
      { amount: 0.5, unit: "tsk", name: "svartpeppar" }
    ],
    instructions: "Koka pastan enligt förpackning. Finhacka lök och vitlök. Fräs lök i en stekpanna tills den mjuknar. Tillsätt vitlök och köttfärs och bryn tills allt är genomstekt. Häll i krossade tomater och kryddor. Låt puttra i 10 minuter. Servera med pasta."
  },
  {
    id: 2, title: "Kycklinggryta med ris", blog: "portionundertian", blogName: "Portion under tian",
    blogUrl: "https://www.portionundertian.se",
    categories: ["kyckling", "gryta", "ris", "budget"],
    servings: 4, time: 35,
    ingredients: [
      { amount: 600, unit: "g", name: "kycklingfilé" },
      { amount: 3, unit: "dl", name: "ris" },
      { amount: 2, unit: "dl", name: "grädde" },
      { amount: 1, unit: "burk", name: "kokosmjölk (400 ml)" },
      { amount: 2, unit: "msk", name: "röd currypasta" },
      { amount: 1, unit: "st", name: "gul lök" },
      { amount: 1, unit: "st", name: "röd paprika" },
      { amount: 1, unit: "tsk", name: "salt" }
    ],
    instructions: "Koka ris enligt förpackning. Skär kyckling i bitar. Fräs lök och paprika. Tillsätt kyckling och bryn. Rör i currypasta, kokosmjölk och grädde. Låt koka i 15 min tills kycklingen är genomstekt. Servera med ris."
  },
  {
    id: 3, title: "Pannkakor", blog: "portionundertian", blogName: "Portion under tian",
    blogUrl: "https://www.portionundertian.se",
    categories: ["pannkakor", "frukost", "budget", "enkelt", "vegetariskt"],
    servings: 4, time: 20,
    ingredients: [
      { amount: 3, unit: "dl", name: "vetemjöl" },
      { amount: 6, unit: "dl", name: "mjölk" },
      { amount: 3, unit: "st", name: "ägg" },
      { amount: 1, unit: "krm", name: "salt" },
      { amount: 50, unit: "g", name: "smör (till stekning)" }
    ],
    instructions: "Blanda mjöl och hälften av mjölken till en slät smet. Rör i ägg och resten av mjölken. Salta. Låt smeten vila i 10 min. Stek tunna pannkakor i smör. Servera med sylt och grädde."
  },
  {
    id: 4, title: "Laxpasta med citrongräddsås", blog: "portionundertian", blogName: "Portion under tian",
    blogUrl: "https://www.portionundertian.se",
    categories: ["fisk", "pasta", "snabb", "budget"],
    servings: 4, time: 20,
    ingredients: [
      { amount: 400, unit: "g", name: "pasta" },
      { amount: 400, unit: "g", name: "laxfilé" },
      { amount: 2, unit: "dl", name: "crème fraîche" },
      { amount: 1, unit: "st", name: "citron (saft)" },
      { amount: 2, unit: "klyftor", name: "vitlök" },
      { amount: 2, unit: "msk", name: "kapris" },
      { amount: 1, unit: "tsk", name: "salt" },
      { amount: 0.5, unit: "tsk", name: "svartpeppar" }
    ],
    instructions: "Koka pasta. Skär lax i bitar och stek i lite olja. Ta upp laxen. Fräs vitlök i samma panna, tillsätt crème fraîche, citronsaft och kapris. Låt koka ihop 5 min. Rör ner pastan och lägg tillbaka laxen. Servera direkt."
  },
  {
    id: 5, title: "Tacos med kryddig köttfärs", blog: "portionundertian", blogName: "Portion under tian",
    blogUrl: "https://www.portionundertian.se",
    categories: ["tacos", "köttfärs", "fredagsmys", "enkelt"],
    servings: 4, time: 25,
    ingredients: [
      { amount: 500, unit: "g", name: "köttfärs" },
      { amount: 1, unit: "påse", name: "tacokrydda" },
      { amount: 1, unit: "dl", name: "vatten" },
      { amount: 8, unit: "st", name: "tacoskal" },
      { amount: 200, unit: "g", name: "riven ost" },
      { amount: 1, unit: "st", name: "isbergssallad" },
      { amount: 4, unit: "st", name: "tomater" },
      { amount: 1, unit: "dl", name: "gräddfil" },
      { amount: 1, unit: "dl", name: "salsa" }
    ],
    instructions: "Bryn köttfärsen. Tillsätt tacokrydda och vatten. Låt koka in 5 min. Värm tacoskal i ugnen. Servera med alla tillbehör på bordet."
  },
  {
    id: 6, title: "Enkel kyckling tikka masala", blog: "portionundertian", blogName: "Portion under tian",
    blogUrl: "https://www.portionundertian.se",
    categories: ["kyckling", "indiskt", "ris", "gryta"],
    servings: 4, time: 30,
    ingredients: [
      { amount: 600, unit: "g", name: "kycklingfilé" },
      { amount: 1, unit: "burk", name: "krossade tomater (400 g)" },
      { amount: 2, unit: "dl", name: "grädde" },
      { amount: 2, unit: "msk", name: "tikka masala-krydda" },
      { amount: 1, unit: "st", name: "gul lök" },
      { amount: 2, unit: "klyftor", name: "vitlök" },
      { amount: 1, unit: "msk", name: "tomatpuré" },
      { amount: 3, unit: "dl", name: "ris" }
    ],
    instructions: "Koka ris. Skär kyckling i bitar. Fräs lök och vitlök. Bryn kyckling. Rör in krydda, tomatpuré, krossade tomater och grädde. Koka 15 min. Servera med ris och eventuellt naan."
  },
  {
    id: 7, title: "Spenatpasta med ricotta och parmesan", blog: "portionundertian", blogName: "Portion under tian",
    blogUrl: "https://www.portionundertian.se",
    categories: ["pasta", "vegetariskt", "snabb", "budget"],
    servings: 4, time: 15,
    ingredients: [
      { amount: 400, unit: "g", name: "pasta" },
      { amount: 200, unit: "g", name: "ricotta" },
      { amount: 150, unit: "g", name: "babyspenat" },
      { amount: 50, unit: "g", name: "riven parmesan" },
      { amount: 2, unit: "klyftor", name: "vitlök" },
      { amount: 2, unit: "msk", name: "olivolja" },
      { amount: 1, unit: "tsk", name: "salt" },
      { amount: 0.5, unit: "tsk", name: "svartpeppar" }
    ],
    instructions: "Koka pasta, spara lite pastavatten. Fräs vitlök i olivolja. Tillsätt spenat tills den vissnar. Rör ner ricotta, parmesan och lite pastavatten. Blanda med pasta och servera."
  },
  {
    id: 8, title: "Klassisk ärtsoppa med fläsk", blog: "portionundertian", blogName: "Portion under tian",
    blogUrl: "https://www.portionundertian.se",
    categories: ["soppa", "traditionellt", "fläsk", "budget"],
    servings: 6, time: 90,
    ingredients: [
      { amount: 500, unit: "g", name: "torkade gula ärter" },
      { amount: 600, unit: "g", name: "rimmat sidfläsk" },
      { amount: 1, unit: "st", name: "gul lök" },
      { amount: 1, unit: "tsk", name: "timjan" },
      { amount: 1, unit: "tsk", name: "salt" },
      { amount: 2, unit: "liter", name: "vatten" }
    ],
    instructions: "Blötlägg ärter över natten. Häll av vattnet. Koka ärter med fläsk, lök och timjan i 2 liter vatten i ca 1,5 timmar. Ta upp fläsket, skär i bitar och lägg tillbaka. Servera med senap och pannkakor."
  },
  {
    id: 9, title: "Pytt i panna med stekt ägg", blog: "portionundertian", blogName: "Portion under tian",
    blogUrl: "https://www.portionundertian.se",
    categories: ["pytt", "traditionellt", "budget", "restmat"],
    servings: 4, time: 30,
    ingredients: [
      { amount: 800, unit: "g", name: "potatis (kokt)" },
      { amount: 400, unit: "g", name: "falukorv eller skinka" },
      { amount: 1, unit: "st", name: "gul lök" },
      { amount: 4, unit: "st", name: "ägg" },
      { amount: 50, unit: "g", name: "smör" },
      { amount: 1, unit: "tsk", name: "salt" },
      { amount: 0.5, unit: "tsk", name: "svartpeppar" }
    ],
    instructions: "Tärna potatis och korv. Fräs lök i smör. Tillsätt potatis och korv, stek tills gyllenbrunt. Krydda. Stek ägg i separat panna. Servera pytten med stekt ägg och rödbetor."
  },
  {
    id: 10, title: "Köttbullar med potatismos och gräddsås", blog: "portionundertian", blogName: "Portion under tian",
    blogUrl: "https://www.portionundertian.se",
    categories: ["köttbullar", "traditionellt", "potatis", "vardagsmat"],
    servings: 4, time: 45,
    ingredients: [
      { amount: 500, unit: "g", name: "köttfärs" },
      { amount: 1, unit: "st", name: "gul lök" },
      { amount: 1, unit: "dl", name: "ströbröd" },
      { amount: 1, unit: "dl", name: "mjölk" },
      { amount: 1, unit: "st", name: "ägg" },
      { amount: 800, unit: "g", name: "potatis" },
      { amount: 50, unit: "g", name: "smör" },
      { amount: 1, unit: "dl", name: "mjölk (till mos)" },
      { amount: 2, unit: "dl", name: "grädde" },
      { amount: 1, unit: "msk", name: "soja" },
      { amount: 1, unit: "tsk", name: "salt" }
    ],
    instructions: "Blanda köttfärs med lök, ströbröd, mjölk och ägg. Rulla till bollar och stek gyllenbruna. Koka potatis, mosa med smör och mjölk. Koka ur pannan med grädde och soja till sås. Servera med lingon."
  },
  {
    id: 11, title: "Bananpannkakor (3 ingredienser)", blog: "portionundertian", blogName: "Portion under tian",
    blogUrl: "https://www.portionundertian.se",
    categories: ["frukost", "enkelt", "vegetariskt", "budget"],
    servings: 2, time: 15,
    ingredients: [
      { amount: 2, unit: "st", name: "mogna bananer" },
      { amount: 2, unit: "st", name: "ägg" },
      { amount: 1, unit: "krm", name: "kanel" }
    ],
    instructions: "Mosa bananerna. Rör ner ägg och kanel. Stek som små pannkakor i smör på medelvärme. Servera med honung eller bär."
  },
  {
    id: 12, title: "Makaroner med falukorv och ketchup", blog: "portionundertian", blogName: "Portion under tian",
    blogUrl: "https://www.portionundertian.se",
    categories: ["pasta", "falukorv", "budget", "barnmat", "snabb"],
    servings: 4, time: 20,
    ingredients: [
      { amount: 400, unit: "g", name: "makaroner" },
      { amount: 1, unit: "st", name: "falukorv (ca 500 g)" },
      { amount: 1, unit: "st", name: "gul lök" },
      { amount: 3, unit: "msk", name: "ketchup" },
      { amount: 1, unit: "dl", name: "vatten" },
      { amount: 50, unit: "g", name: "smör" }
    ],
    instructions: "Koka makaroner. Skär falukorv och lök i bitar. Stek i smör. Tillsätt ketchup och vatten. Rör ner makaronerna och blanda allt. Servera direkt."
  },
  {
    id: 13, title: "Fläskfilé med gräddsås och potatismos", blog: "portionundertian", blogName: "Portion under tian",
    blogUrl: "https://www.portionundertian.se",
    categories: ["fläsk", "gräddsås", "potatis", "vardagsmat"],
    servings: 4, time: 40,
    ingredients: [
      { amount: 600, unit: "g", name: "fläskfilé" },
      { amount: 2, unit: "dl", name: "grädde" },
      { amount: 1, unit: "dl", name: "buljong" },
      { amount: 1, unit: "msk", name: "dijonsenap" },
      { amount: 800, unit: "g", name: "potatis" },
      { amount: 50, unit: "g", name: "smör" },
      { amount: 1, unit: "dl", name: "mjölk" },
      { amount: 1, unit: "tsk", name: "salt" }
    ],
    instructions: "Stek fläskfilé hel tills genomstekt, låt vila. Koka ur pannan med grädde, buljong och senap. Koka potatis och mosa. Skär filén i skivor och servera med sås och mos."
  },
  {
    id: 14, title: "Kycklingwok med nudlar", blog: "portionundertian", blogName: "Portion under tian",
    blogUrl: "https://www.portionundertian.se",
    categories: ["kyckling", "wok", "asiatiskt", "snabb"],
    servings: 4, time: 20,
    ingredients: [
      { amount: 500, unit: "g", name: "kycklingfilé" },
      { amount: 300, unit: "g", name: "nudlar" },
      { amount: 1, unit: "påse", name: "fryst woknudlar med grönsaker" },
      { amount: 3, unit: "msk", name: "soja" },
      { amount: 1, unit: "msk", name: "sweet chili-sås" },
      { amount: 2, unit: "klyftor", name: "vitlök" },
      { amount: 1, unit: "msk", name: "olja" }
    ],
    instructions: "Koka nudlar. Skär kyckling i strimlor. Woka kyckling i het olja. Tillsätt vitlök och grönsaker. Häll i soja och sweet chili. Rör ner nudlar och servera."
  },
  {
    id: 15, title: "Spaghetti carbonara", blog: "portionundertian", blogName: "Portion under tian",
    blogUrl: "https://www.portionundertian.se",
    categories: ["pasta", "ägg", "budget", "snabb", "vardagsmat"],
    servings: 4, time: 20,
    ingredients: [
      { amount: 400, unit: "g", name: "spaghetti" },
      { amount: 200, unit: "g", name: "bacon eller pancetta" },
      { amount: 4, unit: "st", name: "ägg" },
      { amount: 100, unit: "g", name: "riven parmesan" },
      { amount: 2, unit: "klyftor", name: "vitlök" },
      { amount: 1, unit: "tsk", name: "svartpeppar" },
      { amount: 1, unit: "tsk", name: "salt" }
    ],
    instructions: "Koka spaghetti, spara pastavatten. Stek bacon krispigt med vitlök. Vispa ägg med parmesan och peppar. Blanda varm pasta med bacon. Ta från värmen och rör ner äggblandning med lite pastavatten. Servera omedelbart."
  },

  // ========== JÄVLIGT GOTT ==========
  {
    id: 16, title: "Pulled pork med coleslaw", blog: "javligtgott", blogName: "Jävligt Gott",
    blogUrl: "https://www.javligtgott.se",
    categories: ["fläsk", "ugn", "american", "helg"],
    servings: 8, time: 480,
    ingredients: [
      { amount: 1.5, unit: "kg", name: "fläskkarré" },
      { amount: 2, unit: "msk", name: "paprikapulver" },
      { amount: 1, unit: "msk", name: "rökt paprikapulver" },
      { amount: 1, unit: "msk", name: "brunt socker" },
      { amount: 1, unit: "tsk", name: "cayennepeppar" },
      { amount: 1, unit: "tsk", name: "vitlökspulver" },
      { amount: 1, unit: "tsk", name: "salt" },
      { amount: 0.5, unit: "huvud", name: "vitkål" },
      { amount: 2, unit: "st", name: "morötter" },
      { amount: 1, unit: "dl", name: "majonnäs" },
      { amount: 2, unit: "msk", name: "äppelcidervinäger" },
      { amount: 8, unit: "st", name: "hamburgerbröd" }
    ],
    instructions: "Blanda kryddor och gnid in fläskkarrén. Låt vila över natten. Kör i ugnen på 120°C i 6-8 timmar. Riv köttet med gafflar. Hyvla vitkål och morötter, blanda med majonnäs och vinäger till coleslaw. Servera i bröd."
  },
  {
    id: 17, title: "Lammkotletter med vitlökssmör och tzatziki", blog: "javligtgott", blogName: "Jävligt Gott",
    blogUrl: "https://www.javligtgott.se",
    categories: ["lamm", "grill", "helg", "medelhav"],
    servings: 4, time: 30,
    ingredients: [
      { amount: 8, unit: "st", name: "lammkotletter" },
      { amount: 100, unit: "g", name: "smör" },
      { amount: 3, unit: "klyftor", name: "vitlök" },
      { amount: 1, unit: "msk", name: "färsk rosmarin" },
      { amount: 1, unit: "dl", name: "turkisk yoghurt" },
      { amount: 0.5, unit: "st", name: "gurka" },
      { amount: 1, unit: "klyfta", name: "vitlök (till tzatziki)" },
      { amount: 1, unit: "tsk", name: "salt" }
    ],
    instructions: "Blanda smör med pressad vitlök och rosmarin. Grilla kotletter 3-4 min per sida. Riv gurka, blanda med yoghurt och pressad vitlök till tzatziki. Servera kotletter med vitlökssmör och tzatziki."
  },
  {
    id: 18, title: "Fläskfilé Wellington", blog: "javligtgott", blogName: "Jävligt Gott",
    blogUrl: "https://www.javligtgott.se",
    categories: ["fläsk", "ugn", "festmat", "helg"],
    servings: 6, time: 90,
    ingredients: [
      { amount: 800, unit: "g", name: "fläskfilé" },
      { amount: 200, unit: "g", name: "champinjoner" },
      { amount: 4, unit: "skivor", name: "lufttorkad skinka" },
      { amount: 1, unit: "rulle", name: "smördeg" },
      { amount: 2, unit: "msk", name: "dijonsenap" },
      { amount: 1, unit: "st", name: "ägg (till pensling)" },
      { amount: 1, unit: "tsk", name: "salt" }
    ],
    instructions: "Bryn filén och pensla med senap. Hacka svamp fint och stek torr. Lägg ut skinka på plastfilm, sprid svampen, lägg filén och rulla tight. Kyl 30 min. Rulla in i smördeg, pensla med ägg. Grädda 220°C i 25 min."
  },
  {
    id: 19, title: "Cheeseburgare med hemgjorda pommes", blog: "javligtgott", blogName: "Jävligt Gott",
    blogUrl: "https://www.javligtgott.se",
    categories: ["burger", "American", "helg", "fredagsmys"],
    servings: 4, time: 45,
    ingredients: [
      { amount: 600, unit: "g", name: "nötfärs (gärna 20% fett)" },
      { amount: 4, unit: "skivor", name: "cheddarost" },
      { amount: 4, unit: "st", name: "hamburgerbröd" },
      { amount: 4, unit: "blad", name: "isbergssallad" },
      { amount: 2, unit: "st", name: "tomater" },
      { amount: 4, unit: "msk", name: "majonnäs" },
      { amount: 2, unit: "msk", name: "ketchup" },
      { amount: 800, unit: "g", name: "potatis (till pommes)" },
      { amount: 2, unit: "msk", name: "olja" },
      { amount: 1, unit: "tsk", name: "salt" }
    ],
    instructions: "Skär potatis i stavar, blanda med olja och salt, rosta i ugnen 220°C i 30 min. Forma burgare av färsen, stek 3 min per sida. Lägg på ost sista minuten. Blanda majonnäs och ketchup. Bygg burgarna och servera med pommes."
  },
  {
    id: 20, title: "Pasta putanesca", blog: "javligtgott", blogName: "Jävligt Gott",
    blogUrl: "https://www.javligtgott.se",
    categories: ["pasta", "vegetariskt", "snabb", "medelhav"],
    servings: 4, time: 25,
    ingredients: [
      { amount: 400, unit: "g", name: "pasta" },
      { amount: 1, unit: "burk", name: "krossade tomater" },
      { amount: 100, unit: "g", name: "svarta oliver" },
      { amount: 50, unit: "g", name: "kapris" },
      { amount: 4, unit: "st", name: "sardiner eller ansjovis" },
      { amount: 3, unit: "klyftor", name: "vitlök" },
      { amount: 1, unit: "tsk", name: "chiliflingor" },
      { amount: 2, unit: "msk", name: "olivolja" }
    ],
    instructions: "Koka pasta. Fräs vitlök och chili i olivolja. Tillsätt ansjovis och mosa. Häll i tomater, oliver och kapris. Koka 10 min. Blanda med pasta och servera."
  },
  {
    id: 21, title: "Lax med misoglasyr och sesamris", blog: "javligtgott", blogName: "Jävligt Gott",
    blogUrl: "https://www.javligtgott.se",
    categories: ["fisk", "asiatiskt", "ris", "helg"],
    servings: 4, time: 25,
    ingredients: [
      { amount: 4, unit: "bitar", name: "laxfilé (ca 150 g/st)" },
      { amount: 2, unit: "msk", name: "misopasta" },
      { amount: 2, unit: "msk", name: "soja" },
      { amount: 1, unit: "msk", name: "sesamolja" },
      { amount: 1, unit: "msk", name: "honung" },
      { amount: 3, unit: "dl", name: "jasminris" },
      { amount: 2, unit: "msk", name: "sesamfrön" },
      { amount: 3, unit: "st", name: "salladslökar" }
    ],
    instructions: "Blanda miso, soja, sesamolja och honung. Pensla laxen och grilla eller stek 4 min per sida. Koka ris, toppa med sesamfrön och salladslök. Servera laxen med riset."
  },
  {
    id: 22, title: "Entrecôte med bearnaisesås och pommes frites", blog: "javligtgott", blogName: "Jävligt Gott",
    blogUrl: "https://www.javligtgott.se",
    categories: ["nöt", "helg", "festmat", "grill"],
    servings: 4, time: 45,
    ingredients: [
      { amount: 4, unit: "st", name: "entrecôtebitar (ca 200 g/st)" },
      { amount: 3, unit: "st", name: "äggulor" },
      { amount: 200, unit: "g", name: "smör" },
      { amount: 2, unit: "msk", name: "dragon" },
      { amount: 2, unit: "msk", name: "vitvinsvinäger" },
      { amount: 800, unit: "g", name: "potatis" },
      { amount: 1, unit: "tsk", name: "salt" },
      { amount: 0.5, unit: "tsk", name: "svartpeppar" }
    ],
    instructions: "Förbered bearnaise: koka ihop vinäger och dragon. Vispa äggulor med reduktionen, tillsätt smält smör droppvis under vispning. Stek entrecôten 3-4 min per sida, vila 5 min. Rosta potatisen i ugnen. Servera allt."
  },
  {
    id: 23, title: "Grillad kyckling med chimichurri", blog: "javligtgott", blogName: "Jävligt Gott",
    blogUrl: "https://www.javligtgott.se",
    categories: ["kyckling", "grill", "sydamerikansk", "sommar"],
    servings: 4, time: 30,
    ingredients: [
      { amount: 1, unit: "hel", name: "kyckling (delad)" },
      { amount: 1, unit: "kruka", name: "persilja" },
      { amount: 4, unit: "klyftor", name: "vitlök" },
      { amount: 1, unit: "st", name: "röd chilifrukt" },
      { amount: 1, unit: "dl", name: "olivolja" },
      { amount: 3, unit: "msk", name: "rödvinsvinäger" },
      { amount: 1, unit: "tsk", name: "salt" }
    ],
    instructions: "Mixa persilja, vitlök, chili, olivolja och vinäger till chimichurri. Grilla kycklingen ca 15 min per sida tills genomstekt. Häll chimichurri över och servera."
  },
  {
    id: 24, title: "Hummer mac and cheese", blog: "javligtgott", blogName: "Jävligt Gott",
    blogUrl: "https://www.javligtgott.se",
    categories: ["pasta", "skaldjur", "festmat", "helg"],
    servings: 4, time: 35,
    ingredients: [
      { amount: 400, unit: "g", name: "makaroner" },
      { amount: 200, unit: "g", name: "hummerkött (fryst)" },
      { amount: 3, unit: "dl", name: "grädde" },
      { amount: 200, unit: "g", name: "riven gruyère" },
      { amount: 100, unit: "g", name: "riven cheddar" },
      { amount: 50, unit: "g", name: "smör" },
      { amount: 2, unit: "msk", name: "vetemjöl" },
      { amount: 1, unit: "tsk", name: "senapspulver" },
      { amount: 1, unit: "tsk", name: "salt" }
    ],
    instructions: "Koka pasta. Smält smör, rör i mjöl, tillsätt grädde och koka till tjock sås. Smält ner osten. Blanda pasta, sås och hummer. Häll i ugnsform och gratinera tills gyllenbrun."
  },
  {
    id: 25, title: "Kycklingburgare med sriracha-mayo", blog: "javligtgott", blogName: "Jävligt Gott",
    blogUrl: "https://www.javligtgott.se",
    categories: ["kyckling", "burger", "fredagsmys", "snabb"],
    servings: 4, time: 30,
    ingredients: [
      { amount: 4, unit: "st", name: "kycklingfileér (plattade)" },
      { amount: 4, unit: "msk", name: "majonnäs" },
      { amount: 2, unit: "msk", name: "sriracha" },
      { amount: 4, unit: "st", name: "hamburgerbröd" },
      { amount: 1, unit: "st", name: "avokado" },
      { amount: 4, unit: "blad", name: "rucola" },
      { amount: 1, unit: "tsk", name: "salt" },
      { amount: 0.5, unit: "tsk", name: "svartpeppar" }
    ],
    instructions: "Platta kycklingen och stek 5 min per sida. Blanda majonnäs med sriracha. Mosa avokado. Bygg burgarna med kyckling, avokado, sriracha-mayo och rucola."
  },
  {
    id: 26, title: "Oxsvansragu med pappardelle", blog: "javligtgott", blogName: "Jävligt Gott",
    blogUrl: "https://www.javligtgott.se",
    categories: ["nöt", "pasta", "slow cook", "helg", "festmat"],
    servings: 6, time: 240,
    ingredients: [
      { amount: 1.2, unit: "kg", name: "oxsvans" },
      { amount: 1, unit: "burk", name: "krossade tomater" },
      { amount: 2, unit: "dl", name: "rödvin" },
      { amount: 1, unit: "st", name: "gul lök" },
      { amount: 2, unit: "st", name: "morötter" },
      { amount: 3, unit: "klyftor", name: "vitlök" },
      { amount: 400, unit: "g", name: "pappardelle" },
      { amount: 1, unit: "tsk", name: "salt" }
    ],
    instructions: "Bryn oxsvansen runtom. Fräs grönsaker. Häll i vin och låt koka in. Tillsätt tomater och buljong. Koka på låg värme 3-4 timmar tills köttet faller av benet. Rensa köttet, blanda med sås. Servera med kokt pappardelle."
  },
  {
    id: 27, title: "Hoisinglaserad anka med sesamris", blog: "javligtgott", blogName: "Jävligt Gott",
    blogUrl: "https://www.javligtgott.se",
    categories: ["anka", "asiatiskt", "festmat", "helg"],
    servings: 4, time: 60,
    ingredients: [
      { amount: 4, unit: "st", name: "ankbröst" },
      { amount: 3, unit: "msk", name: "hoisinsås" },
      { amount: 1, unit: "msk", name: "soja" },
      { amount: 1, unit: "msk", name: "honung" },
      { amount: 3, unit: "dl", name: "jasminris" },
      { amount: 2, unit: "msk", name: "sesamfrön" },
      { amount: 1, unit: "bunke", name: "salladslök" }
    ],
    instructions: "Rista ankbröstet i fettet. Stek fettsidan ner 8 min, vänd och stek 5 min. Pensla med blandad hoisin, soja och honung. Kör i ugnen 180°C i 10 min. Vila 5 min. Servera med sesamris."
  },
  {
    id: 28, title: "Grillad halloumi med tomatsalsa", blog: "javligtgott", blogName: "Jävligt Gott",
    blogUrl: "https://www.javligtgott.se",
    categories: ["vegetariskt", "grill", "sommar", "förrätt"],
    servings: 4, time: 15,
    ingredients: [
      { amount: 400, unit: "g", name: "halloumi" },
      { amount: 4, unit: "st", name: "tomater" },
      { amount: 0.5, unit: "st", name: "rödlök" },
      { amount: 1, unit: "st", name: "grön chili" },
      { amount: 2, unit: "msk", name: "olivolja" },
      { amount: 1, unit: "msk", name: "limesaft" },
      { amount: 1, unit: "kruka", name: "basilika" }
    ],
    instructions: "Tärna tomater och blanda med hackad rödlök, chili, olivolja och limesaft. Grilla halloumi 2 min per sida. Toppa med tomatsalsa och basilika."
  },
  {
    id: 29, title: "Räkpasta med vitlök och persilja", blog: "javligtgott", blogName: "Jävligt Gott",
    blogUrl: "https://www.javligtgott.se",
    categories: ["skaldjur", "pasta", "snabb", "medelhav"],
    servings: 4, time: 20,
    ingredients: [
      { amount: 400, unit: "g", name: "pasta" },
      { amount: 300, unit: "g", name: "räkor (skalade)" },
      { amount: 4, unit: "klyftor", name: "vitlök" },
      { amount: 1, unit: "dl", name: "vitt vin" },
      { amount: 3, unit: "msk", name: "olivolja" },
      { amount: 0.5, unit: "kruka", name: "persilja" },
      { amount: 1, unit: "st", name: "citron" },
      { amount: 1, unit: "tsk", name: "chiliflingor" }
    ],
    instructions: "Koka pasta. Fräs vitlök och chili i olivolja. Häll i vin och låt koka in. Tillsätt räkor och koka 2 min. Blanda med pasta, persilja och citronsaft."
  },
  {
    id: 30, title: "Rödbetsrissotto med getost", blog: "javligtgott", blogName: "Jävligt Gott",
    blogUrl: "https://www.javligtgott.se",
    categories: ["vegetariskt", "risotto", "helg", "festmat"],
    servings: 4, time: 45,
    ingredients: [
      { amount: 400, unit: "g", name: "risottoris" },
      { amount: 4, unit: "st", name: "rödbetor (kokta)" },
      { amount: 1, unit: "liter", name: "grönsaksbuljong" },
      { amount: 1, unit: "dl", name: "vitt vin" },
      { amount: 1, unit: "st", name: "gul lök" },
      { amount: 100, unit: "g", name: "getost" },
      { amount: 50, unit: "g", name: "smör" },
      { amount: 50, unit: "g", name: "riven parmesan" }
    ],
    instructions: "Mixa rödbetor till puré. Fräs lök, tillsätt ris och rosta 2 min. Häll i vin. Tillsätt buljong skopa för skopa under omrörning i 20 min. Rör ner rödbetspuré, smör och parmesan. Toppa med smulad getost."
  },

  // ========== ZEINAS MAT ==========
  {
    id: 31, title: "Mansaf (lammgryta med yoghurtsås)", blog: "zeinasmat", blogName: "Zeinas Mat",
    blogUrl: "https://zeinasmat.com",
    categories: ["lamm", "arabiskt", "festmat", "ris"],
    servings: 6, time: 120,
    ingredients: [
      { amount: 1.5, unit: "kg", name: "lammskulder (bitar)" },
      { amount: 1, unit: "liter", name: "yoghurt" },
      { amount: 500, unit: "g", name: "basmatiris" },
      { amount: 1, unit: "st", name: "gul lök" },
      { amount: 2, unit: "tsk", name: "baharat (arabisk kryddblandning)" },
      { amount: 1, unit: "tsk", name: "gurkmeja" },
      { amount: 100, unit: "g", name: "smör" },
      { amount: 50, unit: "g", name: "rostade mandlar och pinjenötter" }
    ],
    instructions: "Koka lammet med lök och kryddor tills mjukt, ca 1,5 tim. Koka ris med smör och gurkmeja. Värm yoghurten försiktigt utan att låta koka. Lägg ris på stort fat, lägg lammet ovanpå, häll yoghurtsåsen över. Toppa med nötter."
  },
  {
    id: 32, title: "Shawarma med kyckling", blog: "zeinasmat", blogName: "Zeinas Mat",
    blogUrl: "https://zeinasmat.com",
    categories: ["kyckling", "arabiskt", "bröd", "grill"],
    servings: 4, time: 30,
    ingredients: [
      { amount: 800, unit: "g", name: "kycklinglår (benfria)" },
      { amount: 2, unit: "tsk", name: "spiskummin" },
      { amount: 1, unit: "tsk", name: "koriander" },
      { amount: 1, unit: "tsk", name: "gurkmeja" },
      { amount: 1, unit: "tsk", name: "paprika" },
      { amount: 0.5, unit: "tsk", name: "kanel" },
      { amount: 4, unit: "st", name: "pitabröd eller tunnbröd" },
      { amount: 1, unit: "dl", name: "hummus" },
      { amount: 1, unit: "dl", name: "tahini" },
      { amount: 2, unit: "klyftor", name: "vitlök" },
      { amount: 1, unit: "tsk", name: "salt" }
    ],
    instructions: "Blanda kryddor och marinera kycklingen minst 1 timme. Grilla eller stek tills genomstekt. Strimla kycklingen. Blanda tahini med vitlök och lite vatten. Servera i bröd med hummus, tahini, tomat och sallad."
  },
  {
    id: 33, title: "Falafel med tahini och pita", blog: "zeinasmat", blogName: "Zeinas Mat",
    blogUrl: "https://zeinasmat.com",
    categories: ["vegetariskt", "arabiskt", "kikärter", "bröd"],
    servings: 4, time: 60,
    ingredients: [
      { amount: 400, unit: "g", name: "torkade kikärter (blötlagda)" },
      { amount: 1, unit: "st", name: "gul lök" },
      { amount: 4, unit: "klyftor", name: "vitlök" },
      { amount: 1, unit: "kruka", name: "persilja" },
      { amount: 1, unit: "kruka", name: "koriander" },
      { amount: 2, unit: "tsk", name: "spiskummin" },
      { amount: 1, unit: "tsk", name: "salt" },
      { amount: 1, unit: "liter", name: "olja (till fritering)" },
      { amount: 1, unit: "dl", name: "tahini" },
      { amount: 4, unit: "st", name: "pitabröd" }
    ],
    instructions: "Mixa blötlagda (inte kokta) kikärter med lök, vitlök, örter och kryddor till grov smet. Rulla till bollar och fritera i 175°C olja tills mörkgyllene. Servera i pita med tahini, tomat och gurka."
  },
  {
    id: 34, title: "Maqluba (upp-och-nervänd risrätt med kyckling)", blog: "zeinasmat", blogName: "Zeinas Mat",
    blogUrl: "https://zeinasmat.com",
    categories: ["kyckling", "ris", "arabiskt", "festmat"],
    servings: 6, time: 90,
    ingredients: [
      { amount: 1, unit: "hel", name: "kyckling (delad)" },
      { amount: 500, unit: "g", name: "basmatiris" },
      { amount: 1, unit: "st", name: "aubergine" },
      { amount: 2, unit: "st", name: "tomater" },
      { amount: 1, unit: "st", name: "gul lök" },
      { amount: 2, unit: "tsk", name: "baharat" },
      { amount: 1, unit: "tsk", name: "gurkmeja" },
      { amount: 50, unit: "g", name: "rostade pinjenötter och mandlar" }
    ],
    instructions: "Stek aubergine i skivor. Koka kycklingen med lök och kryddor. Lägg tomater, aubergine och kyckling i lager i gryta. Häll ris ovanpå med buljongen. Koka täckt 30 min. Vänd upp på fat och toppa med nötter."
  },
  {
    id: 35, title: "Hummus från grunden", blog: "zeinasmat", blogName: "Zeinas Mat",
    blogUrl: "https://zeinasmat.com",
    categories: ["vegetariskt", "arabiskt", "dipp", "kikärter"],
    servings: 6, time: 20,
    ingredients: [
      { amount: 400, unit: "g", name: "kokta kikärter" },
      { amount: 3, unit: "msk", name: "tahini" },
      { amount: 2, unit: "klyftor", name: "vitlök" },
      { amount: 1, unit: "st", name: "citron (saft)" },
      { amount: 0.5, unit: "tsk", name: "spiskummin" },
      { amount: 3, unit: "msk", name: "olivolja" },
      { amount: 1, unit: "tsk", name: "salt" },
      { amount: 2, unit: "msk", name: "iskallt vatten" }
    ],
    instructions: "Mixa kikärter, tahini, vitlök, citronsaft och spiskummin. Tillsätt iskallt vatten för krämigare konsistens. Smaka av med salt. Häll upp på tallrik, ringla olivolja och strö paprika."
  },
  {
    id: 36, title: "Kebab med lök och tomatsås", blog: "zeinasmat", blogName: "Zeinas Mat",
    blogUrl: "https://zeinasmat.com",
    categories: ["köttfärs", "arabiskt", "grill", "bröd"],
    servings: 4, time: 30,
    ingredients: [
      { amount: 600, unit: "g", name: "nötköttsfärs eller lammfärs" },
      { amount: 1, unit: "st", name: "gul lök (riven)" },
      { amount: 2, unit: "klyftor", name: "vitlök" },
      { amount: 1, unit: "tsk", name: "baharat" },
      { amount: 1, unit: "tsk", name: "spiskummin" },
      { amount: 4, unit: "st", name: "tunnbröd" },
      { amount: 2, unit: "st", name: "tomater" },
      { amount: 1, unit: "dl", name: "persilja (hackad)" },
      { amount: 1, unit: "tsk", name: "salt" }
    ],
    instructions: "Blanda köttfärs med riven lök, vitlök och kryddor. Forma till avlånga kebabspett. Grilla 4-5 min per sida. Hacka tomater och persilja. Servera i tunnbröd med tomatblandningen."
  },
  {
    id: 37, title: "Msakhan (kyckling med sumak och bröd)", blog: "zeinasmat", blogName: "Zeinas Mat",
    blogUrl: "https://zeinasmat.com",
    categories: ["kyckling", "arabiskt", "festmat", "bröd"],
    servings: 4, time: 60,
    ingredients: [
      { amount: 1, unit: "hel", name: "kyckling" },
      { amount: 3, unit: "st", name: "gula lökar" },
      { amount: 3, unit: "msk", name: "sumak" },
      { amount: 1, unit: "tsk", name: "kanel" },
      { amount: 1, unit: "tsk", name: "allkrydda" },
      { amount: 4, unit: "st", name: "arabiskt bröd (taboon)" },
      { amount: 50, unit: "g", name: "rostade pinjenötter" },
      { amount: 0.5, unit: "dl", name: "olivolja" }
    ],
    instructions: "Koka kycklingen med kryddor. Stek löken mjuk med olivolja och sumak. Dela kycklingen. Lägg bröden på bakplåt, toppa med lök, kyckling och pinjenötter. Grädda tills genomvarmt. Servera med yoghurt."
  },
  {
    id: 38, title: "Lammfärssås med arabiska kryddor (Hashweh)", blog: "zeinasmat", blogName: "Zeinas Mat",
    blogUrl: "https://zeinasmat.com",
    categories: ["lamm", "arabiskt", "fyllning", "vardagsmat"],
    servings: 4, time: 25,
    ingredients: [
      { amount: 500, unit: "g", name: "lammfärs" },
      { amount: 1, unit: "st", name: "gul lök" },
      { amount: 2, unit: "tsk", name: "baharat" },
      { amount: 0.5, unit: "tsk", name: "kanel" },
      { amount: 0.5, unit: "tsk", name: "allkrydda" },
      { amount: 50, unit: "g", name: "pinjenötter" },
      { amount: 50, unit: "g", name: "russin" },
      { amount: 1, unit: "tsk", name: "salt" }
    ],
    instructions: "Fräs hackad lök. Bryn lammfärsen. Tillsätt kryddor, pinjenötter och russin. Stek tills allt är genomstekt och smakfullt. Används som fyllning i paprika, zucchini eller serveras med ris."
  },
  {
    id: 39, title: "Freekeh-soppa med kyckling", blog: "zeinasmat", blogName: "Zeinas Mat",
    blogUrl: "https://zeinasmat.com",
    categories: ["soppa", "kyckling", "arabiskt", "helg"],
    servings: 6, time: 75,
    ingredients: [
      { amount: 1, unit: "hel", name: "kyckling" },
      { amount: 300, unit: "g", name: "freekeh (grön vete)" },
      { amount: 1, unit: "st", name: "gul lök" },
      { amount: 2, unit: "tsk", name: "spiskummin" },
      { amount: 1, unit: "tsk", name: "koriander" },
      { amount: 1, unit: "tsk", name: "salt" },
      { amount: 50, unit: "g", name: "rostade mandlar" }
    ],
    instructions: "Koka kycklingen med lök och kryddor i 1 timme. Ta upp kycklingen och dela i bitar. Sila buljongen, tillsätt sköljd freekeh och koka 30 min. Lägg tillbaka kycklingen. Toppa med rostade mandlar."
  },
  {
    id: 40, title: "Knaprigt bröd med zaatar och olivolja", blog: "zeinasmat", blogName: "Zeinas Mat",
    blogUrl: "https://zeinasmat.com",
    categories: ["bröd", "arabiskt", "frukost", "vegetariskt", "enkelt"],
    servings: 4, time: 20,
    ingredients: [
      { amount: 4, unit: "st", name: "pitabröd eller arabiskt bröd" },
      { amount: 4, unit: "msk", name: "zaatar-kryddblandning" },
      { amount: 4, unit: "msk", name: "olivolja" }
    ],
    instructions: "Blanda zaatar med olivolja till pasta. Bred på bröden. Grädda i ugnen 200°C i 8-10 min tills knapriga. Servera med tomat, oliver och ostbitar."
  },
  {
    id: 41, title: "Mahshi (fyllda zucchini med ris och kött)", blog: "zeinasmat", blogName: "Zeinas Mat",
    blogUrl: "https://zeinasmat.com",
    categories: ["zucchini", "ris", "arabiskt", "festmat"],
    servings: 4, time: 90,
    ingredients: [
      { amount: 8, unit: "st", name: "zucchini (medelstora)" },
      { amount: 2, unit: "dl", name: "ris" },
      { amount: 300, unit: "g", name: "köttfärs" },
      { amount: 2, unit: "tsk", name: "baharat" },
      { amount: 1, unit: "burk", name: "krossade tomater" },
      { amount: 1, unit: "msk", name: "tomatpuré" },
      { amount: 1, unit: "tsk", name: "salt" }
    ],
    instructions: "Urkärna zucchinin med äppelkärneurtag. Blanda ris, köttfärs och kryddor till fyllning. Fyll zucchinin till ¾. Lägg i gryta med tomatsås. Koka täckt i 45-60 min."
  },
  {
    id: 42, title: "Kushari (egyptisk linsrätt)", blog: "zeinasmat", blogName: "Zeinas Mat",
    blogUrl: "https://zeinasmat.com",
    categories: ["vegetariskt", "arabiskt", "linser", "budget"],
    servings: 4, time: 60,
    ingredients: [
      { amount: 2, unit: "dl", name: "ris" },
      { amount: 2, unit: "dl", name: "bruna linser" },
      { amount: 200, unit: "g", name: "makaroner" },
      { amount: 2, unit: "st", name: "gula lökar" },
      { amount: 1, unit: "burk", name: "krossade tomater" },
      { amount: 3, unit: "klyftor", name: "vitlök" },
      { amount: 1, unit: "tsk", name: "spiskummin" },
      { amount: 2, unit: "msk", name: "vitvinsvinäger" },
      { amount: 1, unit: "tsk", name: "salt" }
    ],
    instructions: "Koka linser separat. Koka ris. Koka pasta. Stek lök knaprig i olja. Gör tomatsås med vitlök, kryddor och vinäger. Lägg allt i lager: ris+linser, pasta, tomatsås, stekt lök."
  },
  {
    id: 43, title: "Kyckling med vitlök och citronsås (Djaj bil toum)", blog: "zeinasmat", blogName: "Zeinas Mat",
    blogUrl: "https://zeinasmat.com",
    categories: ["kyckling", "arabiskt", "ugn", "vardagsmat"],
    servings: 4, time: 50,
    ingredients: [
      { amount: 8, unit: "st", name: "kycklinglår med ben" },
      { amount: 6, unit: "klyftor", name: "vitlök" },
      { amount: 2, unit: "st", name: "citroner (saft)" },
      { amount: 3, unit: "msk", name: "olivolja" },
      { amount: 1, unit: "tsk", name: "spiskummin" },
      { amount: 1, unit: "tsk", name: "gurkmeja" },
      { amount: 1, unit: "tsk", name: "salt" }
    ],
    instructions: "Blanda pressad vitlök, citronsaft, olivolja och kryddor. Marinera kycklingen i minst 1 timme. Rosta i ugnen 200°C i 40 min tills gyllenbrun och genomstekt."
  },
  {
    id: 44, title: "Mutabbel (rökt aubergine-dipp)", blog: "zeinasmat", blogName: "Zeinas Mat",
    blogUrl: "https://zeinasmat.com",
    categories: ["vegetariskt", "arabiskt", "dipp", "förrätt"],
    servings: 4, time: 30,
    ingredients: [
      { amount: 2, unit: "st", name: "stora auberginer" },
      { amount: 3, unit: "msk", name: "tahini" },
      { amount: 1, unit: "klyfta", name: "vitlök" },
      { amount: 1, unit: "st", name: "citron (saft)" },
      { amount: 2, unit: "msk", name: "olivolja" },
      { amount: 1, unit: "tsk", name: "salt" },
      { amount: 1, unit: "tsk", name: "granatäppelkärnor (garnering)" }
    ],
    instructions: "Grilla auberginerna direkt på gaslåga eller i ugn tills skinnet är svart och köttet mjukt. Skrapa ur köttet. Mixa med tahini, vitlök och citronsaft. Ringla olivolja och garnera med granatäppelkärnor."
  },
  {
    id: 45, title: "Mjukt pita-bröd hemmagjort", blog: "zeinasmat", blogName: "Zeinas Mat",
    blogUrl: "https://zeinasmat.com",
    categories: ["bröd", "arabiskt", "bakning", "vegetariskt"],
    servings: 8, time: 90,
    ingredients: [
      { amount: 500, unit: "g", name: "vetemjöl" },
      { amount: 7, unit: "g", name: "torrjäst" },
      { amount: 3, unit: "dl", name: "ljummet vatten" },
      { amount: 2, unit: "msk", name: "olivolja" },
      { amount: 1, unit: "tsk", name: "salt" },
      { amount: 1, unit: "tsk", name: "socker" }
    ],
    instructions: "Blanda jäst med vatten och socker, låt stå 5 min. Blanda in mjöl, olja och salt. Knåda 10 min. Jäs 1 timme. Dela i 8 bollar, kavla tunna. Grädda på het plåt 220°C i 5-7 min."
  },

  // ========== TUVESSONSKAN ==========
  {
    id: 46, title: "Janssons frestelse", blog: "tuvessonskan", blogName: "Tuvessonskan",
    blogUrl: "https://www.tuvessonskan.se",
    categories: ["fisk", "traditionellt", "julmat", "ugn", "potatis"],
    servings: 6, time: 60,
    ingredients: [
      { amount: 1, unit: "kg", name: "potatis" },
      { amount: 2, unit: "burkar", name: "ansjovisfilé (á 125 g)" },
      { amount: 2, unit: "st", name: "gula lökar" },
      { amount: 3, unit: "dl", name: "vispgrädde" },
      { amount: 50, unit: "g", name: "smör" },
      { amount: 1, unit: "dl", name: "ströbröd" }
    ],
    instructions: "Skär potatis och lök i tunna strimlor. Varva potatis, ansjovis och lök i smord ugnsform. Häll grädde och ansjovisspad över. Strö ströbröd och lägg smörflingor. Grädda 200°C i 45 min."
  },
  {
    id: 47, title: "Raggmunk med fläsk och lingon", blog: "tuvessonskan", blogName: "Tuvessonskan",
    blogUrl: "https://www.tuvessonskan.se",
    categories: ["potatis", "fläsk", "traditionellt", "vardagsmat"],
    servings: 4, time: 40,
    ingredients: [
      { amount: 600, unit: "g", name: "potatis (riven)" },
      { amount: 2, unit: "dl", name: "mjöl" },
      { amount: 3, unit: "dl", name: "mjölk" },
      { amount: 2, unit: "st", name: "ägg" },
      { amount: 200, unit: "g", name: "rimmat fläsk (skivor)" },
      { amount: 1, unit: "burk", name: "lingonsylt" },
      { amount: 50, unit: "g", name: "smör" },
      { amount: 1, unit: "tsk", name: "salt" }
    ],
    instructions: "Riv potatisen grovt. Blanda med mjöl, mjölk, ägg och salt till smet. Stek tjocka raggmunkar i smör tills gyllenbruna. Stek fläsket krispigt. Servera raggmunkar med fläsk och lingonsylt."
  },
  {
    id: 48, title: "Husmanskost: Dillkött", blog: "tuvessonskan", blogName: "Tuvessonskan",
    blogUrl: "https://www.tuvessonskan.se",
    categories: ["nöt", "soppa", "traditionellt", "dill"],
    servings: 6, time: 90,
    ingredients: [
      { amount: 1, unit: "kg", name: "nötkött (bog eller sida)" },
      { amount: 1, unit: "st", name: "gul lök" },
      { amount: 2, unit: "st", name: "morötter" },
      { amount: 1, unit: "kruka", name: "dill" },
      { amount: 2, unit: "dl", name: "grädde" },
      { amount: 2, unit: "msk", name: "vetemjöl" },
      { amount: 50, unit: "g", name: "smör" },
      { amount: 1, unit: "msk", name: "ättika" },
      { amount: 1, unit: "msk", name: "socker" },
      { amount: 1, unit: "tsk", name: "salt" }
    ],
    instructions: "Koka köttet med lök, morötter och kryddor i ca 1,5 timme. Ta upp köttet och skär i bitar. Sila buljongen. Gör en redning med smör och mjöl, späd med buljong och grädde. Smaka av med ättika, socker och dill. Servera med kokt potatis."
  },
  {
    id: 49, title: "Smörgåstårta med räkor och lax", blog: "tuvessonskan", blogName: "Tuvessonskan",
    blogUrl: "https://www.tuvessonskan.se",
    categories: ["festmat", "fisk", "skaldjur", "fest"],
    servings: 10, time: 60,
    ingredients: [
      { amount: 1, unit: "limpbröd", name: "formfranska (skipad)" },
      { amount: 400, unit: "g", name: "räkor (skalade)" },
      { amount: 200, unit: "g", name: "gravad lax" },
      { amount: 400, unit: "g", name: "philadelphiaost" },
      { amount: 2, unit: "dl", name: "majonnäs" },
      { amount: 1, unit: "dl", name: "crème fraîche" },
      { amount: 1, unit: "kruka", name: "dill" },
      { amount: 1, unit: "st", name: "citron" },
      { amount: 1, unit: "burk", name: "kapris" }
    ],
    instructions: "Blanda philadelphiaost med majonnäs och crème fraîche. Varva bröd och fyllning i form (räkor + dill, och lax + kapris). Täck med ostblandning och låt stå kallt. Dekorera med räkor, lax, dill och citron."
  },
  {
    id: 50, title: "Husmanskost: Pyttipanna med rödbeta", blog: "tuvessonskan", blogName: "Tuvessonskan",
    blogUrl: "https://www.tuvessonskan.se",
    categories: ["traditionellt", "restmat", "budget", "potatis"],
    servings: 4, time: 35,
    ingredients: [
      { amount: 800, unit: "g", name: "kokt potatis" },
      { amount: 300, unit: "g", name: "kokt eller stekt kött (rester)" },
      { amount: 1, unit: "st", name: "gul lök" },
      { amount: 4, unit: "st", name: "rödbetor (inlagda)" },
      { amount: 4, unit: "st", name: "ägg" },
      { amount: 50, unit: "g", name: "smör" },
      { amount: 1, unit: "tsk", name: "salt" }
    ],
    instructions: "Tärna potatis, kött och lök. Stek i smör tills gyllenbrun. Stek ägg separat. Servera med rödbetor och ett stekt ägg per portion."
  },
  {
    id: 51, title: "Klassisk toast Skagen", blog: "tuvessonskan", blogName: "Tuvessonskan",
    blogUrl: "https://www.tuvessonskan.se",
    categories: ["skaldjur", "förrätt", "klassiskt", "snabb"],
    servings: 4, time: 15,
    ingredients: [
      { amount: 400, unit: "g", name: "räkor (skalade)" },
      { amount: 2, unit: "dl", name: "majonnäs" },
      { amount: 1, unit: "dl", name: "crème fraîche" },
      { amount: 1, unit: "kruka", name: "dill" },
      { amount: 4, unit: "skivor", name: "vitt bröd" },
      { amount: 50, unit: "g", name: "smör" },
      { amount: 1, unit: "st", name: "citron" },
      { amount: 1, unit: "tsk", name: "salt" },
      { amount: 50, unit: "g", name: "rom (till garnering)" }
    ],
    instructions: "Blanda räkor med majonnäs, crème fraîche och hackad dill. Smaka av. Stek brödskivor i smör tills gyllenbruna. Lägg räkblandning på brödet. Toppa med rom och citron."
  },
  {
    id: 52, title: "Inlagd gurka (pressgurka)", blog: "tuvessonskan", blogName: "Tuvessonskan",
    blogUrl: "https://www.tuvessonskan.se",
    categories: ["tillbehör", "traditionellt", "inlagning", "vegetariskt"],
    servings: 6, time: 30,
    ingredients: [
      { amount: 1, unit: "st", name: "stor gurka" },
      { amount: 1, unit: "dl", name: "ättika (12%)" },
      { amount: 2, unit: "dl", name: "vatten" },
      { amount: 2, unit: "dl", name: "socker" },
      { amount: 1, unit: "tsk", name: "salt" },
      { amount: 1, unit: "kruka", name: "dill" }
    ],
    instructions: "Skiva gurkan tunt. Koka upp ättika, vatten, socker och salt. Låt svalna. Lägg gurkskivorna och dillen i en burk. Häll lagen över. Låt stå kallt minst 2 timmar."
  },
  {
    id: 53, title: "Kryddstekt strömming med potatismos", blog: "tuvessonskan", blogName: "Tuvessonskan",
    blogUrl: "https://www.tuvessonskan.se",
    categories: ["fisk", "traditionellt", "potatis", "budget"],
    servings: 4, time: 30,
    ingredients: [
      { amount: 600, unit: "g", name: "strömming (filéad)" },
      { amount: 2, unit: "dl", name: "vetemjöl" },
      { amount: 1, unit: "tsk", name: "salt" },
      { amount: 1, unit: "tsk", name: "dill" },
      { amount: 50, unit: "g", name: "smör" },
      { amount: 800, unit: "g", name: "potatis" },
      { amount: 50, unit: "g", name: "smör (till mos)" },
      { amount: 1, unit: "dl", name: "mjölk" }
    ],
    instructions: "Doppa strömmingsfileerna i mjölat med salt och dill. Stek gyllenbruna i smör. Koka och mosa potatisen. Servera med pressgurka och lingon."
  },
  {
    id: 54, title: "Fyllt svamprisotto (vegetarisk)", blog: "tuvessonskan", blogName: "Tuvessonskan",
    blogUrl: "https://www.tuvessonskan.se",
    categories: ["vegetariskt", "svamp", "risotto", "helg"],
    servings: 4, time: 45,
    ingredients: [
      { amount: 400, unit: "g", name: "risottoris" },
      { amount: 400, unit: "g", name: "blandad svamp" },
      { amount: 1, unit: "liter", name: "grönsaksbuljong" },
      { amount: 1, unit: "dl", name: "vitt vin" },
      { amount: 1, unit: "st", name: "gul lök" },
      { amount: 2, unit: "klyftor", name: "vitlök" },
      { amount: 100, unit: "g", name: "riven parmesan" },
      { amount: 50, unit: "g", name: "smör" },
      { amount: 1, unit: "kruka", name: "persilja" }
    ],
    instructions: "Stek svamp och sätt åt sidan. Fräs lök och vitlök, rosta riset. Tillsätt vin. Tillsätt varm buljong skopa för skopa under ständig omrörning i 20 min. Rör in smör, parmesan och hälften av svampen. Toppa med resten."
  },
  {
    id: 55, title: "Blodpudding med lingon och pressgurka", blog: "tuvessonskan", blogName: "Tuvessonskan",
    blogUrl: "https://www.tuvessonskan.se",
    categories: ["traditionellt", "fläsk", "vardagsmat", "klassiskt"],
    servings: 4, time: 20,
    ingredients: [
      { amount: 1, unit: "rulle", name: "blodpudding (500 g)" },
      { amount: 50, unit: "g", name: "smör" },
      { amount: 1, unit: "burk", name: "lingonsylt" },
      { amount: 1, unit: "st", name: "gurka (pressgurka, se recept)" },
      { amount: 4, unit: "st", name: "skivor sidfläsk" }
    ],
    instructions: "Skär blodpuddingen i 1 cm tjocka skivor. Stek i smör tills knaprig på båda sidor. Stek fläskskivorna. Servera med lingonsylt och pressgurka."
  },
  {
    id: 56, title: "Ostkaka med hjortronsylt", blog: "tuvessonskan", blogName: "Tuvessonskan",
    blogUrl: "https://www.tuvessonskan.se",
    categories: ["dessert", "traditionellt", "sötsaker"],
    servings: 8, time: 90,
    ingredients: [
      { amount: 1, unit: "liter", name: "mjölk" },
      { amount: 200, unit: "g", name: "mandelsmassa" },
      { amount: 3, unit: "st", name: "ägg" },
      { amount: 50, unit: "g", name: "vetemjöl" },
      { amount: 1, unit: "dl", name: "socker" },
      { amount: 200, unit: "g", name: "keso" },
      { amount: 1, unit: "dl", name: "grädde" },
      { amount: 1, unit: "tsk", name: "mandelextrakt" },
      { amount: 1, unit: "burk", name: "hjortronsylt" }
    ],
    instructions: "Blanda alla ingredienser till en jämn smet. Häll i smord ugnsform. Grädda 175°C i ca 45-60 min tills stelnad och gyllenbrun. Servera ljummen med hjortronsylt och vispad grädde."
  },
  {
    id: 57, title: "Fiskgratäng med dillsås", blog: "tuvessonskan", blogName: "Tuvessonskan",
    blogUrl: "https://www.tuvessonskan.se",
    categories: ["fisk", "ugn", "traditionellt", "vardagsmat"],
    servings: 4, time: 45,
    ingredients: [
      { amount: 600, unit: "g", name: "torskfilé eller sej" },
      { amount: 2, unit: "dl", name: "grädde" },
      { amount: 1, unit: "dl", name: "buljong" },
      { amount: 1, unit: "kruka", name: "dill" },
      { amount: 2, unit: "msk", name: "vetemjöl" },
      { amount: 50, unit: "g", name: "smör" },
      { amount: 50, unit: "g", name: "riven ost" },
      { amount: 1, unit: "tsk", name: "salt" }
    ],
    instructions: "Lägg fisken i smord ugnsform. Gör en sås av smör, mjöl, grädde och buljong. Rör i hackad dill. Häll över fisken och strö riven ost. Grädda 200°C i 25 min. Servera med kokt potatis."
  },
  {
    id: 58, title: "Semla", blog: "tuvessonskan", blogName: "Tuvessonskan",
    blogUrl: "https://www.tuvessonskan.se",
    categories: ["bakning", "dessert", "traditionellt", "fettisdagen"],
    servings: 12, time: 120,
    ingredients: [
      { amount: 500, unit: "g", name: "vetemjöl" },
      { amount: 100, unit: "g", name: "smör" },
      { amount: 1, unit: "dl", name: "socker" },
      { amount: 1, unit: "tsk", name: "kardemumma" },
      { amount: 25, unit: "g", name: "jäst" },
      { amount: 2, unit: "dl", name: "mjölk" },
      { amount: 1, unit: "st", name: "ägg" },
      { amount: 200, unit: "g", name: "mandelsmassa" },
      { amount: 3, unit: "dl", name: "vispgrädde" },
      { amount: 2, unit: "msk", name: "florsocker" }
    ],
    instructions: "Smula jäst i ljummen mjölk. Blanda alla ingredienser till deg. Knåda i 10 min. Jäs 1 timme. Forma till 12 bullar. Jäs 30 min. Grädda 200°C i 12 min. Låt svalna, skär topp, gröp ur lite bröd och blanda med mandelsmassa och lite grädde. Fyll och spritsa grädde ovanpå."
  },
  {
    id: 59, title: "Pepparkaksgris", blog: "tuvessonskan", blogName: "Tuvessonskan",
    blogUrl: "https://www.tuvessonskan.se",
    categories: ["bakning", "julmat", "traditionellt", "sötsaker"],
    servings: 40, time: 90,
    ingredients: [
      { amount: 300, unit: "g", name: "smör" },
      { amount: 3, unit: "dl", name: "socker" },
      { amount: 1, unit: "dl", name: "mörk sirap" },
      { amount: 2, unit: "tsk", name: "ingefära" },
      { amount: 2, unit: "tsk", name: "kanel" },
      { amount: 1, unit: "tsk", name: "nejlika" },
      { amount: 1, unit: "tsk", name: "bikarbonat" },
      { amount: 2, unit: "st", name: "ägg" },
      { amount: 700, unit: "g", name: "vetemjöl" }
    ],
    instructions: "Smält smör med socker och sirap. Tillsätt kryddor och bikarbonat. Låt svalna. Rör i ägg och mjöl. Kyl degen minst 1 timme. Kavla tunt och stansa ut pepparkakor. Grädda 175°C i 8-10 min."
  },
  {
    id: 60, title: "Klassisk köttfärslimpa med brunsås", blog: "tuvessonskan", blogName: "Tuvessonskan",
    blogUrl: "https://www.tuvessonskan.se",
    categories: ["köttfärs", "ugn", "traditionellt", "vardagsmat"],
    servings: 6, time: 75,
    ingredients: [
      { amount: 700, unit: "g", name: "blandfärs" },
      { amount: 1, unit: "st", name: "gul lök" },
      { amount: 1, unit: "dl", name: "ströbröd" },
      { amount: 1, unit: "dl", name: "mjölk" },
      { amount: 2, unit: "st", name: "ägg" },
      { amount: 2, unit: "msk", name: "soja" },
      { amount: 2, unit: "dl", name: "buljong" },
      { amount: 2, unit: "dl", name: "grädde" },
      { amount: 1, unit: "tsk", name: "salt" }
    ],
    instructions: "Blanda färs med lök, ströbröd, mjölk, ägg och soja. Forma till limpa i ugnsform. Häll buljong runtom. Grädda 175°C i 50 min. Ta ur limpa, tillsätt grädde i stekskyn till sås. Servera med potatismos."
  }
];
