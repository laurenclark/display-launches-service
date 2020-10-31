import React from 'react'
import Img from 'react-cool-img'

export function SelectIcon() {
  return (
    <Img
      alt="Select Icon"
      src="../../icon/select.png"
      className="icon icon__select"
      lazy={true}
      srcSet="
        ../../icon/select.png 
        ../../icon/select@2x.png x2,
        ../../icon/select@3x.png x3
      "
    />
  )
}

export function SortIcon() {
  return (
    <Img
      alt="sort Icon"
      src="../../icon/sort.png"
      className="icon icon__sort"
      lazy={true}
      srcSet="
        ../../icon/sort.png 
        ../../icon/sort@2x.png x2,
        ../../icon/sort@3x.png x3
      "
    />
  )
}

export function RefreshIcon() {
  return (
    <Img
      alt="Refresh Icon"
      src="../../icon/refresh.png"
      className="icon icon__refresh"
      lazy={true}
      srcSet="
        ../../icon/refresh.png 
        ../../icon/refresh@2x.png x2,
        ../../icon/refresh@3x.png x3
      "
    />
  )
}
