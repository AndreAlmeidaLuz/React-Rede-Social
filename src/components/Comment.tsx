import { Avatar } from './Avatar'

import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { useState } from 'react'

interface CommentProps {
  content: string
  onDeleteComment: (Umcomment: string) => void
}

export function Comment(props: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  //deletar comentario
  function handleDeleteComment() {
    props.onDeleteComment(props.content)
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/andrealmeidaluz.png"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>André Almeida</strong>
              <time title="25 de Junho às 08:17" dateTime="2022-06-25 08:17:45">
                Cerca de 1hr atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{props.content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
