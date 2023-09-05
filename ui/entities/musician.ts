class Musician {
    nickname: string;
    firstName: string;
    lastName: string;
    email?: string;
    locality: string;
    bestInstrument: string;
    telephoneNumber: string;
    isCertified: boolean;
    isMaster: boolean;
    
    constructor(nickname: string, firstName: string, lastName: string, 
                e_mail: string, locality:string, bestInstrument: string, 
                telephoneNumber: string, isCertified: boolean, isMaster: boolean ) {
        this.nickname = nickname;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = e_mail;
        this.locality = locality;
        this.bestInstrument = bestInstrument;
        this.telephoneNumber = telephoneNumber;
        this.isCertified = isCertified; 
        this.isMaster = isMaster;
    }

    ciao() {
        console.log(`hello ${this.firstName}`);
    } 
}