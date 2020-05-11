// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    mutate() {
      let rand = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while(this.dna[rand] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[rand] = newBase;
      return this.dna;
    },
    compareDNA(obj) {
      let same = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === obj.dna[i]) {
          same++;
        }
      }
      let percent = (same / this.dna.length) * 100;
      let finalPercent = percent.tpFixed(2);
      console.log(this.specimenNum + " and " + obj.specimenNum + " have " + finalPercent + "% DNA in common");
    },
    willLikelySurvive() {
      let rate = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          rate++;
        }
      }
      let percent = (rate / this.dna.length) * 100;
      return percent >= 60 ? true : false;
    }
  }
}

const survivingSpecimen = [];
let idCounter = 1;

while (survivingSpecimen.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    survivingSpecimen.push(newOrg);
  }
  idCounter++;
}

console.log(survivingSpecimen)


