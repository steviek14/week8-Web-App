class Student {
    constructor(name, grade) {
      this.name = name;
      this.grade = grade;
    }
  //Student class with properties name and grade 
    describe() {
      return `${this.name} is in grade ${this.grade}`;
    }
    //method to describe the Student 
  }
  
  class ClassList {
    constructor() {
      this.students = [];
      this.selectedStudent = null; // manage one student at a time
    }
  //ClassList class that has an empty string of students
    start() {
      let selection = this.showMainMenuOptions();  
      while (selection !== '0') { //while loop containing references to methods that will be the options of the main menu 
        switch (selection) {
          case '1':
            this.addStudent(); //adding a student method
            break;
          case '2':
            this.viewStudent(); //viewing a student method
            break;
          case '3':
            this.deleteStudent(); //deleting a student method
            break;
          case '4':
            this.displayStudents(); //displaying a student method
            break;
          default:
            alert('Invalid selection. Please try again.'); //if the user chooses anything else an alert will be displayed 
        } 
        selection = this.showMainMenuOptions();
      }
      alert('Goodbye!'); //if the user chooses 0 an alert saying goodbye will display 
    }
  
    showMainMenuOptions() { //method of menu options -- these will all have functions assigned to them for functionality 
      return prompt(`
        0) Exit
        1) Add a new student
        2) View a student
        3) Delete a student
        4) Display all students
      `);
    }
  
    displayStudents() { //method for displaying students 
      let studentString = ''; //begin with an empty string of students 
      this.students.forEach((student, index) => { //refers to the array in the class ClassList 
        studentString += `${index}) ${student.name} - Grade ${student.grade}\n`; //the empty string will be compromised of the index of the student on the array and their grade 
      });
      alert(studentString); //pops up the string of students 
    }
  
    addStudent() { //method for adding students 
      let name = prompt('Enter name for new student:'); //prompting user to enter student name 
      let grade = prompt('Enter grade for new student:'); //prompting user to enter student grade 
      this.students.push(new Student(name, grade)); //pushes students added to the this.students array consisting of their name and grade 
    }
  
    viewStudent() { //method to view student 
      let index = prompt('Enter the index of the student that you want to view:'); //prompts user to view a student from their index 
      if (index > -1 && index < this.students.length) { 
        this.selectedStudent = this.students[index]; //to manage one student at a time through their index 
        alert(this.selectedStudent.describe()); //pops up the selected student and their description (name,age)
      } else {
        alert('Invalid student index.'); 
      }
    }
  
    deleteStudent() { //method to delete a student 
      let index = prompt('Enter the index of the student that you wish to delete:'); //prompts user to delete a student 
      if (index > -1 && index < this.students.length) { 
        this.students.splice(index, 1); //splice method to delete one student at specified index 
      } else {
        alert('Invalid student index.');
      }
    }
  }
  
  let classList = new ClassList(); //new instance classList of the class Classlist 
  classList.start(); //initalizing the menu app 
    
