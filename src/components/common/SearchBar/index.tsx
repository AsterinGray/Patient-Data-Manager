import { Dispatch, SetStateAction } from 'react'

import { Input } from './style'

interface Props {
  setSearchTerm: Dispatch<SetStateAction<string>>
}

const SearchBar: React.FC<Props> = ({ setSearchTerm }) => (
  <Input
    placeholder="Search Patient"
    onChange={(e) => setSearchTerm(e.currentTarget.value)}
  />
)

export default SearchBar
