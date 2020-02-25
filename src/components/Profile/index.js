import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Avatar from "../Avatar"
import * as S from "./styled"

const Profile = () => {
  const {
    site: {
      siteMetadata: {
        title, author, position, description
      }
    }
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          position
          author
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink>
        <Avatar />
        <S.ProfileAutor>{title}</S.ProfileAutor>
        <S.ProfileAutor>
          {author}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAutor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile