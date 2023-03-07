// import database connection from config folder
let db = require('../config');
// import bcrypt module
let {hash, compare, hashSync} = require('bcrypt');
// 
let {createToken} = require('../middleware/AuthenticatedUser.js');
// user class
class User{
    login(req, res){
        const {emailAdd, userPass} = req.body;
        const strQry = 
        `
        SELECT userID, firstName, lastName, cellPhone, emailAdd, userPass
        FROM Users
        WHERE emailAdd = ${emailAdd};
        `;
        db.query(strQry, async(err, data)=> {
            if(err) throw err;
            if((!data) || (data == null)){
                res.status(401).json({
                    err: "You have provided an incorrect email address."});
            }else{
                await compare(userPass, data[0].userPass,
                    (cErr, cResult)=>{
                        if(cErr) throw cErr;
                        // create token
                        const bbToken = createToken({emailAdd, userPass});
                        // saving our token
                        res.cookie('LegitUser', bbToken, {
                            maxAge: 3600000,
                            httpOnly: true 
                        })
                        if(cResult) {
                            res.status(401).json({
                                err: "You entered an invalid password or did not register"
                            })
                        }
                    })
            }
        })
    }
    fetchUsers(req, res){
        const qry = 
        `
        SELECT userID, firstName, lastName, cellPhone, emailAdd, userPass
        FROM Users;
        `
        db.query(strQry, (err, data)=> {
            if(err) throw err;
            else res.status(200).json({results:data})
        })
    }
    fetchUsers(req, res) {
        const qry = 
        `
        SELECT userID, firstName, lastName, cellPhone, emailAdd, userPass
        FROM Users
        WHERE userID = ?;
        `
        db.query(strQry, [req.params.id], (req, res)=> {
            if(err) throw err;
            else res.status(200).json({result:data})
        })
    }

    async createUser(req, res) {
        // payload
        let detail = req.body;
        // hashing user password
        detail.userPass = await
        hash(detail.userPass, 15);
        // the information will be used for authentication.
        let user = {
            emailAdd: detail.emailAdd,
            userPass: detail.userPass
        }
        // sql query
        const strQry =
        `INSERT INTO Users
        SET ?;`;
        db.query(strQry, [detail], (err)=> {
            if(err) {
                res.status(401).json({err});
            }else{
                // create token
                const bbToken = createToken(user);
                res.cookie("LegitUser", bbToken, {
                    maxAge: 3600000,
                    httpOnly: true 
                });
                res.status(200).json({msg: "A user record was successfully recorded."})
            }
        })
    }
    updateUser(req, res) {
        let data = req.body;
        if(data.userPass !== null || 
            data.userPass !== undefined)
            data.userPass = hashSync(data.userPass, 15);
        const strQry = 
        `
        UPDATE Users
        SET ?
        WHERE userID = ?;
        `;
        //db
        db.query(strQry,[data, req.params.id], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {msg: 
                "A row was affected"} );
        })    
    }
    deleteUser(req, res) {
        const strQry = 
        `
        DELETE FROM Users
        WHERE userID = ?;
        `;
        //db
        db.query(strQry,[req.params.id], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {msg: 
                "A record was removed from a database"} );
        })    
    }
}

// PRODUCTS
class Product {
    fetchProducts(req, res) {
        const strQry = `SELECT id, prodName, prodDescription, category, price, prodQuantity, imgURL
        FROM products;`;
        db.query(strQry, (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
    fetchProduct(req, res) {
        const strQry = `SELECT id, prodName, prodDescription, category, price, prodQuantity, imgURL
        FROM Products
        WHERE id = ?;`;
        db.query(strQry, [req.params.id], (req, res)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
}