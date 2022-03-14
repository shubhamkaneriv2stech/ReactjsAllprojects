import React from 'react'
import {Link, Route, useRouteMatch} from "react-router-dom"
import BlogContent from './BlogContent'

export default function Blog({topics}) {

    const {url, path} = useRouteMatch();
    return (
        <div>
            <h1>Blog</h1>

            {topics.map((topic, id) => {
                return(
                <li key={id}>
                    <Link target="_blank" to={`${url}/${topic.id}`}>{topic.topicName}</Link>
                </li>
            )})}

           


        </div>
    )
}
