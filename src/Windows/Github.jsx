import React from 'react'
import githubData from "../assets/github.json"
import MacWindow from "./MacWindows"
import "./github.scss"

const GitCard = ( { data = {id:1,image:"",title:"",description:"",tags:[],repoLinks:"",demoLinks:[]} } ) =>{
    return <div className="card">
        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p className='description'>{data.description}</p>
        <div className="tags">
            {
                data.tags.map( tag=><p className='tag'>{tag}</p>)
            }
        </div>
        <div className="urls">
            <a href={data.repoLinks}>Repository</a>
            <a href={data.demoLinks}>Demolinks</a>
        </div>
    </div>
}
const Github = () =>{
  return (
    <MacWindow>
        <div className='cards'>
            {githubData.map(project => {
                return <GitCard data = {project} />
            })}
        </div>
    </MacWindow>
  )
}

export default Github
