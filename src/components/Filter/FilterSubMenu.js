import React, { useState } from 'react'
import {
  ListItemText,
  ListItem,
  Collapse
} from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import SubMenuItem from './SubMenuItem'


const FilterSubMenu = ({ data, title }) => {
  const [open, setOpen] = useState(false)

  const handleOpenSubMenu = () => {
    setOpen(!open)
  }

  return (
    <>
      <ListItem button onClick={handleOpenSubMenu}>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <SubMenuItem data={data} title={title} />
      </Collapse>
    </>
  )
}

export default FilterSubMenu
