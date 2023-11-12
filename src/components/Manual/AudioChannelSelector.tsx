import React from 'react';
import { Button, Dropdown } from 'flowbite-react';
import { Options, SetAudioChannel } from '../../pages/manual';
import { HiChevronDown } from 'react-icons/hi';
import { audioChannels } from '../../formatters/audioChannels';

interface AudioChannelSelectorProps {
  options: Options; // replace with your actual type
  setOptions: (options: SetAudioChannel) => void; // replace with your actual type
}

const TuneSelector: React.FC<AudioChannelSelectorProps> = ({ options, setOptions }) => {
  return (
    <Dropdown
      label={<></>}
      renderTrigger={(_) => (
        <Button color="gray" size="xs" className="w-full inline-flex cursor-pointer justify-center rounded-lg p-1.5 truncate">
          {options.audioChannel.label}
          <HiChevronDown className="w-5 h-5"/>
        </Button>
      )}
      arrowIcon={false}
    >
      <ul className="grid grid-cols-1 h-56 w-36 overflow-y-scroll overflow-x-hidden">
        <div className="text-black">
          <Dropdown.Header><strong>Channel</strong></Dropdown.Header>
          {audioChannels.map(_ => (
            <Dropdown.Item onClick={() => setOptions({ type: 'audiochannel', payload: _ })} key={_.key}>
              {_.label}
            </Dropdown.Item>
          ))}
        </div>
      </ul>
    </Dropdown>
  );
};

export default TuneSelector;