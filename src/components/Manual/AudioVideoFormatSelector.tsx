import React from 'react';
import { Button, Dropdown } from 'flowbite-react';
import { audioContainers, videoContainers } from '../../formatters/audioVideoContainers';
import { Options, SetContainer } from '../../pages/manual';
import { HiChevronDown } from 'react-icons/hi';

interface FormatSelectorProps {
  options: Options; // replace with your actual type
  setOptions: (options: SetContainer) => void; // replace with your actual type
}

const AudioVideoFormatSelector: React.FC<FormatSelectorProps> = ({ options, setOptions }) => {
  return (
    <Dropdown
      inline
      label={<></>}
      renderTrigger={(_) => (
        <Button color="gray" size="xs" className="w-full inline-flex cursor-pointer justify-center rounded-lg p-1.5 truncate">
          {options.container.label}
          <HiChevronDown className="w-5 h-5"/>
        </Button>
      )}
      arrowIcon={false}
    >
      <ul className="grid grid-cols-2 h-60 min-w-36 overflow-y-scroll">
        <div className="text-black">
          <Dropdown.Header><strong>Video</strong></Dropdown.Header>
          {videoContainers.map(_ => (
            <Dropdown.Item onClick={() => setOptions({ type: 'container', payload: _ })} key={_.key}>
              {_.label}
            </Dropdown.Item>
          ))}
        </div>

        <div className="text-black">
          <Dropdown.Header><strong>Audio</strong></Dropdown.Header>
          {audioContainers.map(_ => (
            <Dropdown.Item onClick={() => setOptions({ type: 'container', payload: _ })} key={_.key}>
              {_.label}
            </Dropdown.Item>
          ))}
        </div>
      </ul>
    </Dropdown>
  );
};

export default AudioVideoFormatSelector;