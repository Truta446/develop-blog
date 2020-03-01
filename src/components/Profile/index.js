import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Avatar from "../Avatar"
import getThemeColor from '../../utils/getThemeColor'

import * as S from "./styled"

const Profile = () => {
  const {
    site: {
      siteMetadata: {
        author, position, description
      }
    }
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          position
          author
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink
        to="/"
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
      >
        <Avatar />
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