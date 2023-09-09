import React, {useEffect, useState} from 'react'

function article(title, link, date) {
    return (
        <div className='grid grid-cols-3 text-sm'>
            <p>{title}</p>
            <p>{link}</p>
            <p>{date}</p>
        </div>
    )
}

function news() {
    const articleData = axios.get("/api/getArticles")

    return (
        <div>

        </div>
    )
}

export default news