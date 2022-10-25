class Course {
    constructor(courseId, courseTitle,courseTeacher,courseCategory,courseDuration,coursePrice)
    {
        this.courseId = courseId;
        this.courseTitle = courseTitle;
        this.courseTeacher = courseTeacher;
        this.courseCategory = courseCategory;
        this.courseDuration=courseDuration;
        this.coursePrice = coursePrice;
       
    }
}


class User {
    constructor(id,name,email,password,adress,contact)
    {
        this.id = id;
        this.name = name;
        this.email = email
        this.password = password;
        this.adress = adress;
        this.contact = contact;
        
    }
}

class CourseService
{
 constructor() 
 {
 this.courses = [];
 }

 addCourse(course) 
 {
   this.courses.push(course);
   console.log("Yeni kurs kaydı oluşturuldu.",course); 
 }

}
class UserService {
    constructor()
    {
      this.users = [];
    }
  
    addUser(user) 
    {
    this.users.push(user);
    console.log("Yeni kullanıcı kaydı oluşturuldu.", user); 
    }
  }
 



  const userService = new UserService();
  const newUser = new User(1,"Emre BAYRAMOĞLU", "emrebayramoglu@yaani.com", "emre123","İstanbul/Maltepe","0555 555 55 55");
  
  userService.addUser(newUser); 
  
  const courseService = new CourseService();
  
  const javaScriptCourse = new Course(
         1,
        "JavaScript",
        "Engin Demirog",
        "Programming",
        100,
        "Free",
      );

    
      courseService.addCourse(javaScriptCourse); 
    
     