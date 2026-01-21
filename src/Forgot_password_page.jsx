import React, {useState} from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion";

export default function Login_page() {
    

    return(
        <>

        <div className="all_items">
            <motion.div initial={{x:-1200, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.5}}
            
            className="width_items">
                <h1 className="title_logo">NAJIBOX</h1>
            <h1>Recover your password</h1>
          
              
                <form>
                <div className="inp">
                    <input type="email" placeholder="Email" required/>
                                        
                </div>
                                  
                <div className="btn">
                    <button type="submit">Send Me Email</button>
                </div></form>
                <div className="link_register">
                    <h3>Don't have an account?</h3>
                    <Link className="link" to="/register">Register</Link>
                </div>
                
                </motion.div>
        </div>
        
        </>
    )
}