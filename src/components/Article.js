import React from 'react';

function Article({ title, date="January 1, 1970", minutes, preview }) {
    function createEmojis (number, emoji) {
        let emojis = []
        for (let i = 0; i > number; i++) {
            console.log(emojis)
            return emojis.push(emoji)
        }
        return emojis.toString('')
    }
    function renderEmojis() {
        debugger
        if(minutes > 30) {
            const numOfEmojis = Math.ceil(minutes/10)
            const emoji = '🍱'
            return createEmojis(numOfEmojis, emoji)
        }else{
            const numOfEmojis = Math.ceil(minutes/5)
            const emoji = '☕️ '
            return createEmojis(numOfEmojis, emoji)
        }
    }
    return (
        <article>
            <h3>{ title }</h3>
            <small>{ date } {renderEmojis()} { minutes} minutes to read</small>
            <p>{ preview }</p>
        </article>
    )
}

export default Article;