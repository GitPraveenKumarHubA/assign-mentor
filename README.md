# assign-mentor-to-student-api-documentation

**STUDENTS**

*create student*

- POST
  
  https://assign-mentor-to-student.onrender.com/createStudent
  
```
{
    "name": "Pravin"
}
```

*fetch students*

- GET

https://assign-mentor-to-student.onrender.com/displayStudents

*assign Mentor to student*

- PUT

https://assign-mentor-to-student.onrender.com/student/:studentId

```
{
    "studentid": "studentid"
}
```

**MENTORS**

*create mentor*

- POST

https://assign-mentor-to-student.onrender.com/createMentor

```
{
    "name": "Raju"
}
```

**fetchMentors**

- GET
  
https://assign-mentor-to-student.onrender.com/displayMentors

*fetchMentorsByID*

- GET
  
https://assign-mentor-to-student.onrender.com/mentor/:id

*Assign Students to mentor*

https://assign-mentor-to-student.onrender.com/mentor/:id

- PUT
```
{
  "students":["mentorid", "mentorid"]
}
```
