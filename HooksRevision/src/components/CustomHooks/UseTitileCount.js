import {useEffect} from 'react'


const UseTitileCount = (count) => {
  useEffect(() => {
        count === 0
            ? (document.title = `Chats `)
            : (document.title = `Chats (${count})`);
    });
}

export default UseTitileCount

