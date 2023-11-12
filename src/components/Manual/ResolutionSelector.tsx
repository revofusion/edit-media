import React from 'react';
import { Button, Dropdown } from 'flowbite-react';
import { Options, SetResolution } from '../../pages/manual';
import { HiChevronDown } from 'react-icons/hi';
import { videoResolutions } from '../../formatters/videoResolutions';

interface FormatSelectorProps {
  options: Options; // replace with your actual type
  setOptions: (options: SetResolution) => void; // replace with your actual type
}

const ResolutionSelector: React.FC<FormatSelectorProps> = ({ options, setOptions }) => {
  return (
    <Dropdown
      inline
      label={<></>}
      renderTrigger={(_) => (
        <Button color="gray" size="xs" className="w-full inline-flex cursor-pointer justify-center rounded-lg p-1.5 truncate">
          {options.resolution.label} {options.resolution.key !== 'custom' && (
            ` (${options.resolution.width}x${options.resolution.height})`
          )}
          <HiChevronDown className="w-5 h-5"/>
        </Button>
      )}
      className="text-white"
      arrowIcon={false}
    >
      <ul className="grid grid-cols-2 h-60 min-w-36 overflow-y-scroll">
        <div className="text-black">
          <Dropdown.Header><strong>Video</strong></Dropdown.Header>
          {videoResolutions.filter(_ => _.type === 'default').map(_ => (
            <Dropdown.Item onClick={() => setOptions({ type: 'resolution', payload: _ })} key={`${_.label}_${_.height}`}>
              {_.label}  {_.key !== 'custom' && (
                ` (${_.width}x${_.height})`
              )}
            </Dropdown.Item>
          ))}

        </div>

        <div className="text-black">
          <Dropdown.Header><strong>Social</strong></Dropdown.Header>
          {videoResolutions.filter(_ => _.type === 'social').map(_ => (
            <Dropdown.Item onClick={() => setOptions({ type: 'resolution', payload: _ })} key={`${_.label}_${_.height}`}>
              {_.label}  {_.key !== 'custom' && (
                ` (${_.width}x${_.height})`
              )}
            </Dropdown.Item>
          ))}
        </div>
      </ul>
    </Dropdown>
  );
};

export default ResolutionSelector;