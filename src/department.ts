// Abstract class called department which is extended by 2 more classes below
abstract class Department {
    public name: string
        constructor(name) {
            this.name=name;
        }
    
        printName(): void {
            console.log(`Welcome to: ${this.name}`);
        }
    
        abstract printMeeting(): void; // This is implemented in the derived classes
    }
    
    class AccountingDepartment extends Department {
        public name: string;
        constructor(name) {
            super(name); //Call super constructor
            console.log(`${this.name}:All tasks related to accounting & auditing will be carried out here.`); // constructors in derived classes must call super()
        }
    
        printMeeting(): void {
            console.log("Please revert with your response to the recurring meeting invite at 11am, every Friday.");
        }
    }

    class examinationDepartment extends Department {
        public name: string;
            constructor(name) {
                super(name); //Call super constructor
                console.log();
                console.log(`${this.name}: Exam format set up and paper corrections done here.`);
            }
        
            printMeeting(): void {
                console.log("Internal and external mark sheets must be submitted at bi-weekly meeting, every Monday.");
            }

            revaluation(): void {
                console.log(`Revaluation requests should be submitted only on specified terms.`);
            }
        }
    
    let adepartment: Department = new AccountingDepartment("Accounting Dept."); // Creating reference to abstract type
    adepartment.printName();
    adepartment.printMeeting();
    let edepartment:examinationDepartment = new examinationDepartment("Examination Dept."); //CReating reference and object of subclass
    edepartment.printMeeting();
    edepartment.revaluation();
