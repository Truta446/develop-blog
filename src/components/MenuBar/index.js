import React, { useState, useEffect } from 'react'

import { Home } from 'styled-icons/fa-solid/Home'
import { SearchAlt as Search } from 'styled-icons/boxicons-regular/SearchAlt'
import { UpArrowAlt as Arrow } from 'styled-icons/boxicons-regular/UpArrowAlt'
import { LightbulbFlash as Light } from 'styled-icons/remix-line/LightbulbFlash'
import { Grid } from 'styled-icons/boxicons-solid/Grid'
import { ThList as List } from 'styled-icons/typicons/ThList'
import getThemeColor from '../../utils/getThemeColor'

import * as S from './styled'

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === 'dark'
  const isListMode = display === 'list'

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink cover direction="left" bg={getThemeColor()} duration={0.6} to="/" title="Voltar para a Home">
          <S.MenuBarItem><Home /></S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink cover direction="right" bg={getThemeColor()} duration={0.6} to="/search/" title="Pesquisar">
          <S.MenuBarItem><Search /></S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem title="Mudar o tema" onClick={() => {
          window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
        }}
          className={theme}
        >
          <Light />
        </S.MenuBarItem>
        <S.MenuBarItem title="Mudar a visualização" onClick={() => {
          window.__setPreferredDisplay(isListMode ? 'grid' : 'list')
        }}
          className="display"
        >
          {isListMode ? <Grid /> : <List />}
        </S.MenuBarItem>
        <S.MenuBarItem title="Ir para o topo">
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar