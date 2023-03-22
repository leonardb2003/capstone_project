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
        SELECT userID, firstName, lastName, emailAdd, userPass, userRole, userProfile, joinDate
        FROM users
        WHERE emailAdd = '${emailAdd}';
        `
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
                            res.status(200).json({
                                msg: 'You are Logged in',
                                bbToken: bbToken,
                                result: data[0]
                            })
                        }else {
                            res.status(401).json({
                                err: "You entered an invalid password or did not register"
                            })
                        }
                    })
            }
        })
    }
    fetchUsers(req, res){
        const strQry = 
        `
        SELECT userID, firstName, lastName, emailAdd, userPass, userRole, userProfile, joinDate
        FROM users;
        `
        db.query(strQry, (err, data)=> {
             if(err) throw err;
            else res.status(200).json({results:data})
        })
    }
    fetchUser(req, res) {
        const strQry = 
        `
        SELECT userID, firstName, lastName, emailAdd, userPass, userRole, userProfile, joinDate
        FROM users
        WHERE userID = ?;
        `
        db.query(strQry, [req.params.id], (err, data)=> {
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
        `INSERT INTO users
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
                res.status(200).json({msg: "A new user record was successfully recorded."})
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
        UPDATE users
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
        DELETE FROM users
        WHERE userID = ?;
        `;
        //db
        db.query(strQry,[req.params.id], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {msg: 
                "This record was removed successfully from a database"} );
        })    
    }
}

// PRODUCTS
class Product {
    fetchProducts(req, res) {
        const strQry = `SELECT prodID, prodName, prodDescription, category, price, prodQuantity, imgURL
        FROM products;`;
        db.query(strQry, (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
    fetchProduct(req, res) {
        const strQry = `SELECT prodID, prodName, prodDescription, category, price, prodQuantity, imgURL
        FROM products
        WHERE prodID = ?;
        `
        db.query(strQry, [req.params.id], (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
    addProduct(req, res) {
        const strQry = 
        `INSERT INTO products
        SET ?;
        `;
        db.query(strQry, [req.body],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to insert a new record."});
                }else {
                    res.status(200).json({msg: "A product was successfully saved"});
                }
            } 
        );    
    
    }
     updateProduct(req, res) {
        const strQry = 
        `
        UPDATE products
        SET ?
        WHERE prodID = ?
        `;
        db.query(strQry,[req.body, req.params.id],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Could not update this record."});
                }else{
                    res.status(200).json({msg: "The product was updated successfully."});
                }
            }
        );
     }
     deleteProduct(req, res) {
        const strQry =
        `
        DELETE FROM products
        WHERE prodID = ?;
        `;
        db.query(strQry, [req.params.id], (err)=> {
            if(err) res.status(400).json({err: "This record was not found."});
            res.status(200).json({msg: "A product was successfully deleted."});
        })
     }
} 
// cart
class Cart {
    fetchCarts(req, res) {
        const strQry = `SELECT prodID, prodName, prodDescription, category, price, prodQuantity, imgURL
        FROM products;`;
        db.query(strQry, (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });

    }
    fetchCarts(req, res){
        const strQry = 
        `
        SELECT userID, firstName, lastName, emailAdd, userPass, userRole, userProfile, joinDate
        FROM users;
        `
        db.query(strQry, (err, data)=> {
             if(err) throw err;
            else res.status(200).json({results:data})
        })
    }

}


module.exports = {
    User,
    Product,
    Cart
}