import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
import styles from "./index.module.css";
//import videos from "data/db.json";
import { useEffect, useState } from "react";

function Inicio(){
    const [videos, setVideo]=useState([])
    useEffect(()=>{
        fetch("https://my-json-server.typicode.com/soniaveit/alura-cinema-api/videos")
        .then((response)=> response.json())
        .then((data)=>{
            setVideo(data);
        })
    },[]);

    return(
        <>
            <Banner img="home" color="#154580"/>
            <Titulo>
                <h1>Un lugar para guardar sus videos favoritos </h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video)=>{
                    return <Card {...video} key={video.id}/>
                })}
            </section>
            

        </>
    )
}

export default Inicio