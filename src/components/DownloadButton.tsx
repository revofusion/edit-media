import {
    FaWindows,
    FaApple,
    // FaLinux
} from 'react-icons/fa';
import {
  isWindows,
  isMacOS,
//   isLinux,
} from "get-os-name";
import { Button } from 'flowbite-react';

const DownloadButton = () => {
  let downloadLink = '';
  let Icon;

  if (import.meta.env.VITE_BUILD_TARGET !== 'web') {
    return <></>
  } else if (isWindows()) {
    downloadLink = 'https://downloads.editmedia.io/EditMedia.exe';
    Icon = FaWindows;
  } else if (isMacOS()) {
    downloadLink = 'https://downloads.editmedia.io/EditMedia.dmg';
    Icon = FaApple;
//   } else if (isLinux()) {
//     downloadLink = 'http://download-link-for-linux';
//     Icon = FaLinux;
  } else {
    return <></>
  }

  return (
    <a href={downloadLink} download className="hidden md:flex mr-3">
      <Button>
        <span className="flex justify-center items-center">
            Desktop App (100X faster)
          <Icon className="ml-2" />
        </span>
      </Button>
    </a>
  );
};

export default DownloadButton;
