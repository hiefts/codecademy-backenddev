// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

// step 3: factory function for creating objects
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    // step 4: random dna mutation
    mutate() {
      let current = Math.floor(Math.random() * 15); // getting random index to be replaced
      let replacement = returnRandBase(); // getting random base to replace with

      if (replacement != dna[current]) {
        dna[current] = replacement;
      }
      return dna;
    },
    // step 5: comparing dna sequences
    compareDNA(other) {
      let dnalength = this.dna.length;
      let common = 0;

      for (let i = 0; i < dnalength-1; i++) {
        if (this.dna[i] === other.dna[i]) {
          common += 1;
        }
      }

      let commonpercent = Math.round((common / dnalength) * 100);
      console.log(`specimen #1 and specimen #2 have ${commonpercent}% DNA in common.`);
    },
    // step 6: check if at least 60% C or G bases
    willLikelySurvive() {
      let dnalength = this.dna.length;
      let cgcount = 0;

      for (let i = 0; i < dnalength-1; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          cgcount += 1;
        }
      }
      let cgpercent = Math.round((cgcount / dnalength) * 100);
      if (cgpercent >= 60) {
        return true;
      } else {
        return false;
      }
    }
  }
};

// step 7: create 30 instances that will survive
const specimenArray = [];
let specimencount = 1;

while (specimencount <= 30) {
  let specimen = pAequorFactory(specimencount, mockUpStrand());
  if (specimen.willLikelySurvive()) {
    specimenArray.push(specimen);
    specimencount += 1;
  }
}

// testing step 7
console.log(specimenArray);