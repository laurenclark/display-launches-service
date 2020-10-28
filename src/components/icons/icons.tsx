import React from 'react'
import Image from 'react-simple-image'

export function SelectIcon() {
  return (
    <Image
      alt="Select Icon"
      src="../../icon/select.png"
      className="icon icon__select"
      srcSet={{
        '3x': '../../icon/select@3x.png',
        '2x': '../../icon/select@2x.png'
      }}
    />
  )
}

export function SortIcon() {
  return (
    <Image
      alt="sort Icon"
      src="../../icon/sort.png"
      className="icon icon__sort"
      srcSet={{
        '3x': '../../icon/sort@3x.png',
        '2x': '../../icon/sort@2x.png'
      }}
    />
  )
}

export function RefreshIcon() {
  return (
    <Image
      alt="Refresh Icon"
      src="../../icon/refresh.png"
      className="icon icon__refresh"
      srcSet={{
        '3x': '../../icon/refresh@3x.png',
        '2x': '../../icon/refresh@2x.png'
      }}
    />
  )
}
