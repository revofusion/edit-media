import React from 'react';
import { Button, Dropdown } from 'flowbite-react';
import { AppActions } from '../../pages/manual';
import { HiChevronDown } from 'react-icons/hi';
import { Preset } from '../../formatters/presets';

type SupportedOptions = (Preset)[]

interface SelectorProps {
  options: SupportedOptions;
  setOptions: React.Dispatch<AppActions>;
  current: string
  type: 'preset'
}

const GeneralSelector: React.FC<SelectorProps> = ({ options, setOptions, current, type }) => {
  return (
    <Dropdown
      label={<></>}
      renderTrigger={(_) => (
        <Button color="gray" size="xs" className="w-full inline-flex cursor-pointer justify-center rounded-lg p-1.5 truncate">
          {current}
          <HiChevronDown className="w-5 h-5"/>
        </Button>
      )}
      arrowIcon={false}
    >
      <ul className="grid grid-cols-1 h-72 w-40 overflow-y-scroll overflow-x-hidden">
        <div className="text-black">
          <Dropdown.Header><strong>Preset</strong></Dropdown.Header>
          {options.map(_ => (
            <Dropdown.Item onClick={() => setOptions({ type, payload: _ })} key={_.key}>
              <span>{_.label}</span>
            </Dropdown.Item>
          ))}
        </div>
      </ul>
    </Dropdown>
  );
};

export default GeneralSelector;