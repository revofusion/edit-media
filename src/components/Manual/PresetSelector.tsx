import React from 'react';
import { Button, Dropdown } from 'flowbite-react';
import { Options, SetPreset } from '../../pages/manual';
import { HiChevronDown } from 'react-icons/hi';
import { presets } from '../../formatters/presets';

interface FormatSelectorProps {
  options: Options; // replace with your actual type
  setOptions: (options: SetPreset) => void; // replace with your actual type
}

const PresetSelector: React.FC<FormatSelectorProps> = ({ options, setOptions }) => {
  return (
    <Dropdown
      label={<></>}
      renderTrigger={(_) => (
        <Button color="gray" size="xs" className="w-full inline-flex cursor-pointer justify-center rounded-lg p-1.5 truncate">
          {options.preset.label}
          <HiChevronDown className="w-5 h-5"/>
        </Button>
      )}
      arrowIcon={false}
    >
      <ul className="grid grid-cols-1 h-72 w-40 overflow-y-scroll overflow-x-hidden">
        <div className="text-black">
          <Dropdown.Header><strong>Preset</strong></Dropdown.Header>
          {presets.map(_ => (
            <Dropdown.Item onClick={() => setOptions({ type: 'preset', payload: _ })} key={_.key}>
              <span>{_.label}</span>
            </Dropdown.Item>
          ))}
        </div>
      </ul>
    </Dropdown>
  );
};

export default PresetSelector;