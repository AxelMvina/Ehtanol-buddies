const evenements = [
    {
      titre: "Chez JP",
      descriptif: "Soirée cool chez JP",
      gensRecherches: ["Sam", "l'ambianceur", "Cuistot"],
      gensInvites: ["John Doe", "Jane Smith"],
      date: "2023-11-20",
      lieu: "Montcul",
    },
    {
      titre: "Bubulle",
      descriptif: "Soirée bulle maillot requis",
      gensRecherches: ["Sam", "Le gros buveur"],
      gensInvites: ["Alice Johnson", "Kikou du 62", "Charlie Br"],
      date: "2023-11-05",
      lieu: "Chez tonton, bar Montcul",
    },
    {
      titre: "100 ans de Gégé",
      descriptif: "Soirée chic mais pas sans alcool",
      gensRecherches: ["Sam", "Cuistot"],
      gensInvites: ["Eva Ada", "David Mill"],
      date: "2023-11-15",
      lieu: "CH Roubaix, Gériartrie",
    },
  ];
  
  console.log("Titre de l'événement : " + evenements[0].titre);
  console.log("Descriptif : " + evenements[0].descriptif);
  console.log("Gens recherchés : " + evenements[0].gensRecherches.join(", "));
  console.log("Gens déjà invités : " + evenements[0].gensInvites.join(", "));
  console.log("Date : " + evenements[0].date);
  console.log("Lieu : " + evenements[0].lieu);