const {addUser,selectUsers,selectAllNews,addNews,updateNews,deleteNews,get1User}=require("./db.js")



exports.signUp=async function(req,res){
    const{name,password,role}=req.body

    try{
        const inserted=await addUser(name,password,role)
        res.status(201).json(inserted[0])
    }catch(err){
        console.log(err);
    }
}


exports.getAllUssers=async function(req,res){
try{
const gettedusers=await selectUsers()
res.status(200).json(gettedusers[0])
}catch(err){
console.log(err);
}

}


exports.login  = async function(req, res) {
    try {
        const result = await get1User(req.body.name, req.body.password)
        const user = result[0][0]

        if (user) {
            if (user.password === req.body.password) {
                res.json(user)
            } else
             {
  res.json("Wrong password")
            }
        } else {
            res.json("Incorrect information")
        }
    } catch (error) {
        console.log(error)
        res.status(500).json("erreur")
    }
}



exports.getAll=async function(req,res){

    try{
const geted=await selectAllNews()
res.json(geted[0])
    }
    catch(err){
console.log(err);
    }
}


exports.createOne=async function(req,res){
    const {title,image,description,user_iduser}=req.body
    try{
      const added=await addNews(title,image,description,user_iduser)
      res.status(200).json(added)  
    }
    catch(err){
console.log(err);
    }
}


exports.updateOne=async function(req,res){
const {id}=req.params
const{image,description}=req.body
try{
    const updated=await updateNews(id,image,description)
    res.status(200).json(updated)
}catch(err){
    console.log(err);
}
}


exports.deleteOne=async function(req,res){
    const id=req.params.id
    try{
        const deleted=await deleteNews(id)
        res.status(200).json(deleted)
    }catch(err){
        console.log(err);
    }
}