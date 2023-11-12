import React, { useState } from 'react';
import { Button, Dropdown, TextInput } from 'flowbite-react';
import { Options, SetVideoDecoderCodec } from '../../pages/manual';
import { HiChevronDown } from 'react-icons/hi';
import { videoCodecs } from '../../formatters/codecs'

interface FormatSelectorProps {
  options: Options; // replace with your actual type
  setOptions: (options: SetVideoDecoderCodec) => void; // replace with your actual type
}

const lowercaseDecoders = videoCodecs.map(_ => ({
  ..._,
  lcKey: _.key.toLowerCase(),
  lcDescription: _.description.toLowerCase()
}))

const VideoDecoderCodecSelector: React.FC<FormatSelectorProps> = ({ options, setOptions }) => {
  const [filter, setFilter] = useState('')

  const lcFilter = filter.toLowerCase()
  const filteredVideoDecoders = filter
    ? lowercaseDecoders.filter(_ => _.lcDescription.includes(lcFilter) || _.lcKey.includes(lcFilter))
    : lowercaseDecoders

  return (
    <Dropdown
      label={<></>}
      renderTrigger={(_) => (
        <Button color="gray" size="xs" className="w-full inline-flex cursor-pointer justify-center rounded-lg p-1.5 truncate">
          {options.videoDecoderCodec.key}
          <HiChevronDown className="w-5 h-5"/>
        </Button>
      )}
      arrowIcon={false}
    >
      <ul className="grid grid-cols-1 h-72 w-[30rem] overflow-y-scroll overflow-x-hidden">
        <div className="text-black">
          <Dropdown.Header><strong>Codec</strong></Dropdown.Header>
          <TextInput
            id="search-codec"
            name="searchcodecs"
            value={filter}
            onChange={e => setFilter(e.target.value)}
            onKeyDown={(e) => e.stopPropagation()}
            placeholder="Search Codecs"
            className="w-full px-4 mt-0 mb-2"
          />
          {filteredVideoDecoders.map(_ => (
            <Dropdown.Item onClick={() => setOptions({ type: 'video_decoder_codec', payload: _ })} key={_.key} className="grid grid-cols-3">
              <span className="w-32 text-left font-bold">{_.key}</span> <span className="col-span-2 text-left">{_.description}</span>
            </Dropdown.Item>
          ))}
        </div>
      </ul>
    </Dropdown>
  );
};

export default VideoDecoderCodecSelector;