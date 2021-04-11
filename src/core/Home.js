import { React, useState } from "react";
import Base from "./Base"
import "../styles/home.css"

const Home = ({history}) =>{

    return(
        <Base title="">
            <header class="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover">
                <div class="p-5 text-2xl text-white bg-purple-600 bg-opacity-50 rounded-xl cursor-pointer font-mono transition duration-500 ease-in-out hover:bg-purple-400">
                    Welcome to my site!
                </div>
            </header>
            <div className="row  flex items-center justify-center h-50">
                <div className="col-lg-3 mt-4 bg-light" data-aos="fade-right" id="home1">
                    <p class="mb-4 p-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat a
                        magna non varius. Proin leo felis, euismod non porta eget, varius sit amet
                        sapien. Maecenas in nulla at leo convallis consectetur id a sapien. Nulla
                        nec pulvinar nisi. Vivamus non facilisis lacus, et volutpat libero. Nulla ac
                        odio aliquam, accumsan arcu ut, lacinia est. Nulla eu sem elit. Fusce nec
                        laoreet sem, semper molestie libero.
                    </p>
                </div>
                <div className="col-lg-3 mt-4 bg-light mr-12 ml-12" id="home1">
                    <p class="mb-4 p-4">
                        Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin, lectus et
                        fringilla ultrices, dolor nisi scelerisque tortor, vel finibus magna massa
                        non nunc. Phasellus massa quam, egestas a nisl sed, porta volutpat metus.
                        Nunc sed elit ac tellus tempor cursus. Suspendisse potenti. Vestibulum
                        varius rutrum nisl nec consequat. Suspendisse semper dignissim sem viverra
                        semper. Nulla porttitor, purus nec accumsan pharetra, nisi dolor condimentum
                        ipsum, id consequat nulla nunc in ligula.
                    </p>
                </div>
                <div className="col-lg-3 mt-4 bg-light" data-aos="fade-left" id="home1">
                    <p class="mb-4 p-4">
                        Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris porta
                        dignissim hendrerit. Cras id velit varius, fermentum lectus vitae, ultricies
                        dolor. In bibendum rhoncus purus vel rutrum. Nam vulputate imperdiet
                        fringilla. Donec blandit libero massa. Suspendisse dictum diam mauris, vitae
                        fermentum dolor tincidunt in. Pellentesque sollicitudin venenatis dolor,
                        vitae scelerisque elit ultrices eu. Donec eget sodales risus, quis dignissim
                        neque.
                    </p>
                </div>                
            </div>
            <div class="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover">
                <div class="p-5 text-2xl text-white bg-purple-600 bg-opacity-50 rounded-xl cursor-pointer font-mono transition duration-500 ease-in-out hover:bg-purple-400" onClick={()=>(history.push("/products"))}>
                    Explore Products
                </div>
            </div>
        </Base>
    ) 
}


export default Home;