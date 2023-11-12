import React, { useState } from 'react';
import { Button, Dropdown, TextInput } from 'flowbite-react';
import { Options, SetAudioDecoderCodec } from '../../pages/manual';
import { HiChevronDown } from 'react-icons/hi';
import { audioCodecs } from '../../formatters/codecs'

interface FormatSelectorProps {
  options: Options; // replace with your actual type
  setOptions: (options: SetAudioDecoderCodec) => void; // replace with your actual type
}

const lowercaseDecoders = audioCodecs.map(_ => ({
  ..._,
  lcKey: _.key.toLowerCase(),
  lcDescription: _.description.toLowerCase()
}))

const AudioDecoderCodecSelector: React.FC<FormatSelectorProps> = ({ options, setOptions }) => {
  const [filter, setFilter] = useState('')

  const lcFilter = filter.toLowerCase()
  const filteredAudioDecoders = filter
    ? lowercaseDecoders.filter(_ => _.lcDescription.includes(lcFilter) || _.lcKey.includes(lcFilter))
    : lowercaseDecoders

  return (
    <Dropdown
      label={<></>}
      renderTrigger={(_) => (
        <Button color="gray" size="xs" className="w-full inline-flex cursor-pointer justify-center rounded-lg p-1.5 truncate">
          {options.audioDecoderCodec.key}
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
          {filteredAudioDecoders.map(_ => (
            <Dropdown.Item onClick={() => setOptions({ type: 'audio_decoder_codec', payload: _ })} key={_.key} className="grid grid-cols-3">
              <span className="w-32 text-left font-bold">{_.key}</span> <span className="col-span-2 text-left">{_.description}</span>
            </Dropdown.Item>
          ))}
        </div>
      </ul>
    </Dropdown>
  );
};

export default AudioDecoderCodecSelector;