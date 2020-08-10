const student = [
    {id: 21,name: "Omar Sunny"},
    {id: 49,name: "Bobita"},
    {id: 71,name: "Dipjol"}
 ];
//  const actress=[];
//  for (let i = 0; i < student.length; i++) {
//      const element = student[i].name;
//      actress.push(element); 
//  }
//  console.log(actress);
 //console.log(name.length);

 const names = student.map(element => element.name);
 const ids = student.map(element => element.id);
 console.log(names);
 console.log(ids);
 const bigger = student.filter(element => element.id>40);
 console.log(bigger);
 const finding = student.find(element => element.id>40);
 console.log(finding);