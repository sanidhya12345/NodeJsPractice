const sqlite3=require('sqlite3');
const db=new sqlite3.Database('./first.db');

db.all("Select name,age,phone from Intro",(error,rows)=>{
    rows.forEach(row => {
        console.log(row.name+", "+row.age+", "+row.phone);
    });
})