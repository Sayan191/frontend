import { React, useState } from "react";
import Base from "./Base"
import "../styles/home.css"
import "../styles.css"
import img1 from "../assets/naruto.jfif"
import img2 from "../assets/jinga.jfif"
import { Redirect,Link } from "react-router-dom";


const Home = ({history}) =>{

    const redirect=()=>{
        return <Redirect to="http://www.google.com"/>
    }

    return(
        <Base title="">
            <header class="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover">
                <div class="p-5 text-2xl text-white bg-purple-600 bg-opacity-50 rounded-xl cursor-pointer font-mono transition duration-500 ease-in-out hover:bg-purple-400">
                    Welcome to my site!
                </div>
            </header>
            <div className="row  flex items-center justify-center h-50" id="blog">
                <div className=" about p-4 border-bottom">
                    <h6 className="aboutMe display-6 text-bold text-gray-900 text-light p-4 text-right">Blogs</h6>
                </div>
                <div className="col-lg-3 mt-4 card1" data-aos="fade-right" id="home1">
                    <h6 className="heading  text-bold text-gray-900 text-light p-4 text-center">Data Structures</h6>
                    <p class="mb-4 p-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat a
                        magna non varius. Proin leo felis, euismod non porta eget, varius sit amet
                        sapien. Maecenas in nulla at leo convallis consectetur id a sapien. Nulla
                        nec pulvinar nisi. 
                        <div className="container-fluid mt-2">
                            <button className="btn btn-warning btn-md py-1" onClick={()=>(window.location.href="http://www.google.com") }>Learn More</button>
                        </div>
                    </p>
                    
                </div>
                <div className="col-lg-3 mt-4 mr-12 ml-12 card2" id="home1">
                    <h6 className="heading  text-bold text-gray-900 text-light p-4 text-center">CryptoCurrency</h6>
                    <p class="mb-4 p-4">
                        Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin, lectus et
                        fringilla ultrices, dolor nisi scelerisque tortor, vel finibus magna massa
                        non nunc. Phasellus massa quam, egestas a nisl sed, porta volutpat metus.
                        Nunc sed elit ac tellus tempor cursus. Suspendisse potenti. Vestibulum
                        varius rutrum nisl nec consequat. 
                        <div className="container-fluid mt-2">
                            <button className="btn btn-warning btn-md py-1" onClick={()=>(window.location.href="http://www.google.com") }>Learn More</button>
                        </div>
                    </p>
                    
                </div>
                <div className="col-lg-3 mt-4 card3" data-aos="fade-left" id="home1">
                    <h6 className="heading  text-bold text-gray-900 text-light p-4 text-center">SuperBikes</h6>
                    <p class="mb-4 p-4">
                        Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris porta
                        dignissim hendrerit. Cras id velit varius, fermentum lectus vitae, ultricies
                        dolor. In bibendum rhoncus purus vel rutrum. Nam vulputate imperdiet
                        fringilla. 
                        <div className="container-fluid mt-2">
                            <button className="btn btn-warning btn-md py-1" onClick={()=>(window.location.href="http://www.google.com") }>Learn More</button>
                        </div>
                    </p>    
                </div>
                <div className=" about p-4 mb-4"></div>                
            </div>
            <div class="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover">
                <div class="p-5 text-2xl text-white bg-purple-600 bg-opacity-50 rounded-xl cursor-pointer font-mono transition duration-500 ease-in-out hover:bg-purple-400" onClick={()=>(history.push("/products"))}>
                    Explore Products
                </div>
            </div>

            {/* about Us card */}
            <div className=" about p-4 border-bottom">
                <h6 className="aboutMe display-6 text-bold text-gray-900 text-light p-4 text-right">Developers</h6>
            </div>
            <div className="flex space-x-4 p-4">
                <div className="flex-1 container border rounded bg-light p-2 md:inline-flex">
                    <img src={img2} className="float-left border border-dark rounded p-2 mr-4"/>
                    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <p class="text-lg font-semibold">
                                “Opportunities doesn't come up of its own.
                                We got to ours make ours.”
                            </p>
                        </blockquote>
                        <figcaption class="font-medium">
                            <div class="text-cyan-600">
                                    Sayan Talukdar
                            </div>
                            <div class="text-gray-500">
                                Full Stack Developer, Durgapur
                            </div>
                            <div class="text-gray-500">
                                <span className="text-cyan-500">eMail:</span>sayantalukdar30@gmail.com 
                            </div>
                        </figcaption>
                    </div>
                </div>

            </div>
        </Base>
    ) 
}


export default Home;
