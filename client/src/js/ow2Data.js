var ow2Data = {
  Dva: {
    type: "tank",
    counters: {
      Ana: "+",
      Ashe: "+",
      Bastion: "+",
      Brigitte: "-",
      Doomfist: "-",
      Hanzo: "++",
      Junkrat: "-",
      McCree: "+",
      Mei: "-",
      Mercy: "++",
      Moira: "+",
      Pharah: "+",
      Reaper: "+",
      Sombra: "-",
      Widowmaker: "++",
      Zarya: "--"
    },
    difficulty: 2,
    skill: 2,
  },
  Doomfist: {
      type: "tank",
      counters: {
        Ashe: "-",
        Dva: "+",
        Genji: "-",
        McCree: "-",
        Orisa: "-",
        Pharah: "--",
        //Reinhardt: "+",
        Sigma: "+",
        Soldier76: "-",
        Sombra: "--"
      },
      difficulty: 3,
      skill: 3,
    },
  JunkerQueen: {
    type: "tank",
    counters: {
      Ana: "+*",
      Bastion: "-",
      Reaper: "-*",
      Mei: "-",
      Orisa: "-",
      Zenyatta: "+"
    },
    difficulty: '',
    skill: ''
  },
  Orisa: {
    type: "tank",
    counters: {
      Ashe: "+",
      Doomfist: "+",
      Genji: "-",
      Hanzo: "-",
      JunkerQueen: "+",
      Moira: "-",
      Reaper: "-",
      Sigma: "-",
      Torbjorn: "+",
      Widowmaker: "-",
      Zarya: "-"
    },
    difficulty: 2,
    skill: 2,
  },
  Reinhardt: {
    type: "tank",
    counters: {
      Bastion: "--",
      Brigitte: "-",
      //Doomfist: "-",
      Junkrat: "--",
      Mei: "--",
      Orisa: "-",
      Pharah: "--",
      Reaper: "--",
      Soldier76: "+",
      Sombra: "-",
      Widowmaker: "+"
    },
    difficulty: 1,
    skill: 1,
  },
  Roadhog: {
    type: "tank",
    counters: {
      Ana: "-",
      Baptiste: "+",
      Bastion: "+",
      Echo: "+",
      Lucio: "+",
      McCree: "+",
      Mei: "--",
      Mercy: "+",
      Reaper: "--",
      Sigma: "-",
      Soldier76: "+",
      Sombra: "+",
      Widowmaker: "-",
      Winston: "++",
      WreckingBall: "+",
      Zarya: "-"
    },
    difficulty: 1,
    skill: 1,
  },
  Sigma: {
    type: "tank",
    counters: {
      Ana: "+",
      Doomfist: "-",
      Lucio: "-",
      Orisa: "-",
      Roadhog: "+"
    },
    difficulty: 3,
    skill: 3,
  },
  Winston: {
    type: "tank",
    counters: {
      Bastion: "-",
      Dva: "++",
      Genji: "++",
      McCree: "+",
      Reaper: "--",
      Roadhog: "--",
      Symmetra: "+",
      Widowmaker: "++",
      Zenyatta: "++"
    },
    difficulty: 2,
    skill: 2,
  },
  WreckingBall: {
    type: "tank",
    counters: {
      Ana: "-",
      Brigitte: "--",
      Mei: "-",
      Reaper: "-",
      Roadhog: "-",
      Sombra: "--",
      Widowmaker: "+"
    },
    difficulty: 3,
    skill: 3,
  },
  Zarya: {
    type: "tank",
    counters: {
      Bastion: "-",
      Dva: "++",
      Genji: "++",
      Junkrat: "+",
      Mei: "+",
      Pharah: "--",
      Sojourn: "+",
      Reaper: "-",
      Roadhog: "+",
      Torbjorn: "++",
      Zenyatta: "-"
    },
    difficulty: 3,
    skill: 3,
  },
  Ashe: {
    type: "dps",
    counters: {
      Ana: "-",
      Brigitte: "+",
      Dva: "+",
      Doomfist: "+",
      Echo: "+",
      Hanzo: "-",
      Junkrat: "+",
      Mei: "+",
      Mercy: "+",
      Orisa: "-",
      Pharah: "++",
      Reaper: "+",
      Soldier76: "+",
      Symmetra: "+",
      Widowmaker: "-",
      Winston: "-",
      WreckingBall: "-"
    },
    difficulty: 2,
    skill: 2,
  },
  Bastion: {
    type: "dps",
    counters: {
      Ana: "-",
      Dva: "-",
      Echo: "+",
      Genji: "-",
      Hanzo: "--",
      JunkerQueen: "+",
      Junkrat: "-",
      Lucio: "+",
      Reinhardt: "++",
      Roadhog: "-",
      Soldier76: "-",
      Tracer: "-",
      Widowmaker: "-",
      Winston: "++",
      Zarya: "+"
    },
    difficulty: 1,
    skill: 1,
  },
  Cassidy: {
    type: "dps",
    counters: {
      Dva: "-",
      Doomfist: "+",
      Echo: "+",
      Lucio: "++",
      Mei: "-",
      Mercy: "+",
      Pharah: "++",
      Roadhog: "-",
      Sombra: "+",
      Symmetra: "+",
      Tracer: "+",
      Widowmaker: "-",
      Winston: "-"
    },
    difficulty: 2,
    skill: 2,
  },
  
  Echo: {
    type: "dps",
    counters: {
      Ana: "-",
      Bastion: "-",
      Baptiste: "-",
      McCree: "-",
      //Mei: "-",
      Roadhog: "-",
      Soldier76: "-",
      Sombra: "-",
      Tolbjorn: "+",
      Widowmaker: "-"
    },
    difficulty: 2,
    skill: 2,
  },
  Genji: {
    type: "dps",
    counters: {
      Ana: "-",
      Baptiste: "+",
      Bastion: "+",
      Brigitte: "-",
      Doomfist: "+",
      Hanzo: "++",
      Mercy: "++",
      Orisa: "+",
      Pharah: "-",
      Widowmaker: "++",
      Winston: "--",
      Zarya: "--",
      Zenyatta: "+"
    },
    difficulty: 3,
    skill: 3,
  },
  Hanzo: {
    type: "dps",
    counters: {
      Ashe: "+",
      Bastion: "+",
      Dva: "--",
      Genji: "--",
      Orissa: "+",
      Sombra: "+",
      Torbjorn: "++",
      Tracer: "-",
      Widowmaker: "-"
    },
    difficulty: 3,
    skill: 3,
  },
  Junkrat: {
    type: "dps",
    counters: {
      Ashe: "-",
      Bastion: "+",
      Brigitte: "+",
      Dva: "+",
      Kiriko: "-",
      Pharah: "--",
      Reaper: "+",
      Reinhardt: "++",
      Sombra: "+",
      Torbjorn: "++",
      Tracer: "+",
      Widowmaker: "--",
      Zarya: "-"
    },
    difficulty: 2,
    skill: 2,
  },
  Mei: {
    type: "dps",
    counters: {
      Ashe: "-",
      Dva: "+",
      //Echo: "+",
      JunkerQueen: "-",
      Lucio: "-",
      McCree: "+",
      Pharah: "-",
      Reinhardt: "++",
      Roadhog: "++",
      Widowmaker: "-",
      WreckingBall: "+",
      Zarya: "-"
    },
    difficulty: 3,
    skill: 3,
  },
  Pharah: {
    type: "dps",
    counters: {
      Ana: "-",
      Ashe: "-*",
      Brigitte: "++",
      Dva: "-",
      Doomfist: "++",
      Genji: "+",
      Junkrat: "++",
      Lucio: "++",
      McCree: "--",
      Mei: "+",
      Reaper: "++",
      Reinhardt: "++",
      Sojourn: "-",
      Soldier76: "--",
      Symmetra: "++",
      Tolbjorn: "+",
      Tracer: "+",
      Widowmaker: "-"
    },
    difficulty: 1,
    skill: 1,
  },
  Reaper: {
    type: "dps",
    counters: {
      Ana: "-",
      Dva: "-",
      Junkrat: "-",
      JunkerQueen: "+*",
      Orisa: "+*",
      Pharah: "--",
      Reinhardt: "++",
      Roadhog: "++",
      Sombra: "+",
      Winston: "++",
      WreckingBall: "+",
      Zarya: "+",
      Zenyatta: "++"
    },
    difficulty: 1,
    skill: 1,
  },
  Soldier76: {
    type: "dps",
    counters: {
      Bastion: "+",
      Doomfist: "+",
      Echo: "+",
      Pharah: "++",
      Reinhardt: "-",
      Torbjorn: "+",
      Winston: "-"
    },
    difficulty: 1,
    skill: 1,
  },
  Sojourn: {
    type: "dps",
    counters: {
      Echo: "+",
      Mercy: "-",
      Pharah: "+",
      Winston: "-",
      Zarya: "-"
    },
    difficulty: '',
    skill: ''
  },
  Sombra: {
    type: "dps",
    counters: {
      Ana: "+",
      Brigitte: "+",
      Dva: "-",
      Doomfist: "++",
      Echo: "+",
      Hanzo: "-",
      Junkrat: "-",
      Lucio: "+",
      McCree: "-",
      Reaper: "-",
      Reinhardt: "+",
      Roadhog: "-",
      Symmetra: "+",
      Tracer: "++",
      Widowmaker: "+",
      WreckingBall: "++",
      Zenyatta: "+"
    },
    difficulty: 3,
    skill: 3,
  },
  
  Symmetra: {
    type: "dps",
    counters: {
      McCree: "-",
      Pharah: "--",
      Sombra: "-",
      //Tracer: "+*",
      Winston: "--",
      Reinhardt: "+",
      Zarya: "-"
    },
    difficulty: 2,
    skill: 2,
  },
  Torbjorn: {
    type: "dps",
    counters: {
      Ana: "-",
      Echo: "-",
      Genji: "+",
      Hanzo: "--",
      Junkrat: "-",
      Lucio: "+",
      Orisa: "-",
      Pharah: "-",
      Soldier: "-",
      Tracer: "+",
      Widowmaker: "--",
      Zarya: "--"
    },
    difficulty: 2,
    skill: 2,
  },
  Tracer: {
    type: "dps",
    counters: {
      Bastion: "+",
      Brigitte: "-",
      Hanzo: "++",
      Junkrat: "-",
      McCree: "-",
      Pharah: "-",
      Sombra: "--",
      Torbjorn: "-",
      Zenyatta: "++"
    },
    difficulty: 2,
    skill: 2,
  },
  Widowmaker: {
    type: "dps",
    counters: {
      Ashe: "+",
      Bastion: "+",
      Dva: "--",
      Echo: "+",
      Genji: "--",
      Hanzo: "-",
      Junkrat: "++",
      Kiriko: "+",
      McCree: "+",
      Mei: "+",
      Mercy: "+",
      Orisa: "+",
      Pharah: "+",
      Reinhardt: "-",
      Sombra: "-",
      Torbjorn: "+",
      Winston: "--",
      WreckingBall: "-"
    },
    difficulty: 2,
    skill: 2,
  },
  Ana: {
    type: "support",
    counters: {
      Ashe: "+",
      Baptiste: "+*",
      Bastion: "+",
      Dva: "-",
      Echo: "+",
      Genji: "+",
      JunkerQueen: "-*",
      Kiriko: "-",
      Lucio: "+",
      Moira: "+",
      Pharah: "+",
      Reaper: "+",
      Roadhog: "+",
      Sigma: "-",
      Sombra: "-",
      Winston: "-",
      WreckingBall: "+",
      Zenyatta: "+"
    },
    difficulty: 3,
    skill: 3,
  },
  Baptiste: {
    type: "support",
    counters: {
      Ana: "-*",
      Doomfist: "+",
      Dva: "+*",
      Echo: "+",
      Genji: "-",
      //Junkrat: "+*",
      Roadhog: "+",
      Sombra: "-",
      Soldier: "-*"
      //Tracer: "+*"
    },
    difficulty: 3,
    skill: 3,
  },
  Brigitte: {
    type: "support",
    counters: {
      Ashe: "-",
      Dva: "+",
      Genji: "+",
      Junkrat: "-",
      Pharah: "--",
      Reaper: "-",
      Reinhardt: "+",
      Sombra: "-",
      Tracer: "+",
      WreckingBall: "++"
    },
    difficulty: 1,
    skill: 1,
  },
  Kiriko: {
    type: "support",
    counters: {
      Ana: "+",
      Junkrat: "+",
      //Lucio: "+",
      Sombra: "-",
      Widowmaker: "-"
    },
    difficulty: "",
    skill: ""
  },
  Lucio: {
    type: "support",
    counters: {
      Ashe: "-",
      Bastion: "-",
      McCree: "--",
      Mei: "+",
      Roadhog: "-",
      Pharah: "--",
      Sigma: "+",
      Sombra: "-",
      Tolbjorn: "-"
    },
    difficulty: 2,
    skill: 2,
  },
  Mercy: {
    type: "support",
    counters: {
      Ana: "-",
      Ashe: "-",
      Dva: "--",
      Genji: "--",
      McCree: "-",
      Roadhog: "-",
      Sojourn: "-",
      Widowmaker: "-"
    },
    difficulty: 1,
    skill: 1,
  },
  Moira: {
    type: "support",
    counters: {
      Ana: "-",
      Dva: "-",
      Orisa: "+",
      Reinhardt: "+"
    },
    difficulty: 2,
    skill: 2,
  },
  Zenyatta: {
    type: "support",
    counters: {
      Ana: "-",
      Genji: "-",
      JunkerQueen: "-",
      Reaper: "--",
      Sombra: "-",
      Tracer: "--",
      Zarya: "+"
    },
    difficulty: 3,
    skill: 3,
  }
};

export default ow2Data;