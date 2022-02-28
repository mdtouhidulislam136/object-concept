const student = {
    id: 101,
    balance: 5000,
    name: 'kibria',
    major: 'mathematics',
    subjects: ['english', 'economincs', 'math 101', 'calculus'],
    isRich: false,
    bestFriend: {
        name:'kundu',
        subject: 'mathematics'
    },
    takeExam: function() {
        console.log(this.subjects,'takeExam')
    },

    treate: function(expense, tip){
    this.balanc = this.balance - expense - tip;
    return this.balanc;
    }
    
}

 delete student.treate;
console.log(student);

