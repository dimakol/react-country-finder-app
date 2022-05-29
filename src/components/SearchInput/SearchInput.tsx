import React, { ChangeEventHandler } from 'react'

import './SearchInput.scss'

interface ISearchInputProps {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

export const SearchInput = ({ value, onChange }: ISearchInputProps) => (
  <input
    className='c-SearchInput'
    placeholder='Search...'
    value={value}
    onChange={onChange}
  />
)
