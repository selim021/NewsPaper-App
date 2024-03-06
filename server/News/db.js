const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'newspaper'
}).promise()

connection.connect()
.then(()=>{
  console.log('connected')
}
).catch(err=>{
  console.log(err)
});


const addUser=(name,password)=>{
return connection.query("insert into user (name,password)values(?,?)",[name,password])
}

const selectUsers=()=>{
  return connection.query("select * from user")
}


const get1User = (name,password) => {
  return connection.query("SELECT * FROM user WHERE name = (?) AND password = (?)", [name,password]);
}



const selectAllNews=()=>{
return connection.query("select * from news")
}

const addNews=(title,image,description,user_iduser)=>{
return connection.query("insert into news(title,image,description,user_iduser)values(?,?,?,?)",[title,image,description,user_iduser])
}

const updateNews=(id,image,description)=>{
  return connection.query("update news set  image=? , description=? where idNews=? ",[[image],[description],[id]])
}


const deleteNews=(id)=>{
  return connection.query("delete from news where idnews=?",[id])
}


module.exports={addUser,selectUsers,get1User,selectAllNews,addNews,updateNews,deleteNews}
