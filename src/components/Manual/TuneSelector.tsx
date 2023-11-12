import React from 'react';
import { Button, Dropdown } from 'flowbite-react';
import { Options, SetTune } from '../../pages/manual';
import { HiChevronDown } from 'react-icons/hi';
import { tunes } from '../../formatters/tunes';

interface TuneSelectorProps {
  options: Options; // replace with your actual type
  setOptions: (options: SetTune) => void; // replace with your actual type
}

const TuneSelector: React.FC<TuneSelectorProps> = ({ options, setOptions }) => {
  return (
    <Dropdown
      label={<></>}
      renderTrigger={(_) => (
        <Button color="gray" size="xs" className="w-full inline-flex cursor-pointer justify-center rounded-lg p-1.5 truncate">
          {options.tune.label}
          <HiChevronDown className="w-5 h-5"/>
        </Button>
      )}
      arrowIcon={false}
    >
      <ul className="grid grid-cols-1 h-72 w-[34rem] overflow-y-scroll overflow-x-hidden">
        <div className="text-black">
          <Dropdown.Header><strong>Tune</strong></Dropdown.Header>
          {tunes.map(_ => (
            <Dropdown.Item onClick={() => setOptions({ type: 'tune', payload: _ })} key={_.key} className="grid grid-cols-3">
              <span className="w-32 text-left font-bold">{_.label}</span> <span className="col-span-2 text-left">{_.description}</span>
            </Dropdown.Item>
          ))}
        </div>
      </ul>
    </Dropdown>
  );
};

export default TuneSelector;