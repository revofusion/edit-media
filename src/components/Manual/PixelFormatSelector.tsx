import React, { useState } from 'react';
import { Button, Dropdown, TextInput } from 'flowbite-react';
import { Options, SetPixelFormat} from '../../pages/manual';
import { HiChevronDown } from 'react-icons/hi';
import { pixelFormats } from '../../formatters/pix'

interface FormatSelectorProps {
  options: Options; // replace with your actual type
  setOptions: (options: SetPixelFormat) => void; // replace with your actual type
}

const lowercaseFormats = pixelFormats.map(_ => ({
  ..._,
  lcKey: _.key.toLowerCase(),
}))

const PixelFormatSelector: React.FC<FormatSelectorProps> = ({ options, setOptions }) => {
  const [filter, setFilter] = useState('')

  const lcFilter = filter.toLowerCase()
  const filteredFormats = filter
    ? lowercaseFormats.filter(_ => _.lcKey.includes(lcFilter))
    : lowercaseFormats

  return (
    <Dropdown
      label={<></>}
      renderTrigger={(_) => (
        <Button color="gray" size="xs" className="w-full inline-flex cursor-pointer justify-center rounded-lg p-1.5 truncate">
          {options.pixelFormat.key}
          <HiChevronDown className="w-5 h-5"/>
        </Button>
      )}
      arrowIcon={false}
    >
      <ul className="grid grid-cols-1 h-72 w-48 overflow-y-scroll overflow-x-hidden">
        <div className="text-black">
          <Dropdown.Header><strong>Pixel Format</strong></Dropdown.Header>
          <TextInput
            id="search-pixel-format"
            name="searchpixelformat"
            value={filter}
            onChange={e => setFilter(e.target.value)}
            onKeyDown={(e) => e.stopPropagation()}
            placeholder="Search Formats"
            className="w-full px-4 mt-0 mb-2"
          />
          {filteredFormats.map(_ => (
            <Dropdown.Item onClick={() => setOptions({ type: 'pixel_format', payload: _ })} key={_.key}>
              {_.key}
            </Dropdown.Item>
          ))}
        </div>
      </ul>
    </Dropdown>
  );
};

export default PixelFormatSelector;