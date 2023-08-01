import { ReactNode } from 'react'

interface SocialProps{
  url: string,
  children: ReactNode
}

export function Social(props: SocialProps) {
  return(
    <a href={props.url} rel='noopener noreferrer' target='blank'>
      {props.children}
    </a>
  )
}